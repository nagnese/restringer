import {areReferencesModified} from '../utils/areReferencesModified.js';

/**
 * Replace proxied variables with their intended target.
 * E.g.
 * const a2b = atob;         // This line will be removed
 * console.log(a2b('NDI=')); // This will be replaced with `console.log(atob('NDI='));`
 * @param {Arborist} arb
 * @param {Function} candidateFilter (optional) a filter to apply on the candidates list
 * @return {Arborist}
 */
function resolveProxyVariables(arb, candidateFilter = () => true) {
	const relevantNodes = [
		...(arb.ast[0].typeMap.VariableDeclarator || []),
	];
	for (let i = 0; i < relevantNodes.length; i++) {
		const n = relevantNodes[i];
		if (n?.init?.type === 'Identifier' && candidateFilter(n)) {
			const refs = n.id.references || [];
			// Remove proxy assignments if there are no more references
			if (!refs.length) arb.markNode(n);
			else if (areReferencesModified(arb.ast, refs)) continue;
			else for (const ref of refs) {
				arb.markNode(ref, n.init);
			}
		}
	}
	return arb;
}

export default resolveProxyVariables;