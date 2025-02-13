/**
 * Logical expressions which only consist of && and || will be replaced with an if statement.
 * E.g. x && y(); -> if (x) y();
 * x || y(); -> if (!x) y();
 * @param {Arborist} arb
 * @param {Function} candidateFilter (optional) a filter to apply on the candidates list
 * @return {Arborist}
 */
function replaceBooleanExpressionsWithIf(arb, candidateFilter = () => true) {
	const relevantNodes = [
		...(arb.ast[0].typeMap.ExpressionStatement || []),
	];
	for (let i = 0; i < relevantNodes.length; i++) {
		const n = relevantNodes[i];
		if (['&&', '||'].includes(n.expression.operator) && candidateFilter(n)) {
			// || requires inverted logic (only execute the consequent if all operands are false)
			const testExpression =
				n.expression.operator === '||'
					? {
						type: 'UnaryExpression',
						operator: '!',
						argument: n.expression.left,
					}
					: n.expression.left;
			// wrap expression in block statement so it results in e.g. if (x) { y(); } instead of if (x) (y());
			const consequentStatement = {
				type: 'BlockStatement',
				body: [
					{
						type: 'ExpressionStatement',
						expression: n.expression.right
					}
				],
			};
			const ifStatement = {
				type: 'IfStatement',
				test: testExpression,
				consequent: consequentStatement,
			};
			arb.markNode(n, ifStatement);
		}
	}
	return arb;
}

export default replaceBooleanExpressionsWithIf;
