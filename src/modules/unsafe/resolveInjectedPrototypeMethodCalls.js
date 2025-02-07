import {logger} from 'flast';
import {badValue} from '../config.js';
import {Sandbox} from '../utils/sandbox.js';
import {evalInVm} from '../utils/evalInVm.js';
import {createOrderedSrc} from '../utils/createOrderedSrc.js';
import {getDeclarationWithContext} from '../utils/getDeclarationWithContext.js';

/**
 * Resolve call expressions which are defined on an object's prototype and are applied to an object's instance.
 * E.g.
 * String.prototype.secret = function() {return 'secret ' + this}
 * 'hello'.secret(); // <-- will be resolved to 'secret hello'.
 * @param {Arborist} arb
 * @param {Function} candidateFilter (optional) a filter to apply on the candidates list
 * @return {Arborist}
 */
export default function resolveInjectedPrototypeMethodCalls(arb, candidateFilter = () => true) {
	const relevantNodes = [
		...(arb.ast[0].typeMap.AssignmentExpression || []),
	];
	for (let i = 0; i < relevantNodes.length; i++) {
		const n = relevantNodes[i];
		if (n.left.type === 'MemberExpression' &&
		(n.left.object.property?.name || n.left.object.property?.value) === 'prototype' &&
		n.operator === '=' &&
		(/FunctionExpression|Identifier/.test(n.right?.type)) &&
		candidateFilter(n)) {
			try {
				const methodName = n.left.property?.name || n.left.property?.value;
				const context = getDeclarationWithContext(n);
				const contextSb = new Sandbox();
				contextSb.run(createOrderedSrc(context));
				const rlvntNodes = arb.ast[0].typeMap.CallExpression || [];
				for (let j = 0; j < rlvntNodes.length; j++) {
					const ref = rlvntNodes[j];
					if (ref.type === 'CallExpression' &&
						ref.callee.type === 'MemberExpression' &&
						(ref.callee.property?.name || ref.callee.property?.value) === methodName) {
						const replacementNode = evalInVm(`\n${createOrderedSrc([ref])}`, contextSb);
						if (replacementNode !== badValue) arb.markNode(ref, replacementNode);
					}
				}
			} catch (e) {
				logger.debug(`[-] Error in resolveInjectedPrototypeMethodCalls: ${e.message}`);
			}
		}
	}
	return arb;
}