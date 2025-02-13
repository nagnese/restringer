import {fileURLToPath} from 'node:url';
import {logger as flastLogger, applyIteratively} from 'flast';
import {processors} from './processors/index.js';
import {detectObfuscation} from 'obfuscation-detector';
import {config, safe as safeMod, unsafe as unsafeMod, utils} from './modules/index.js';
const {normalizeScript} = utils.default;
import {readFileSync} from 'node:fs';
const __version__ = JSON.parse(readFileSync(fileURLToPath(new URL('../package.json', import.meta.url)), 'utf-8')).version;
const safe = {};
for (const funcName in safeMod) {
	safe[funcName] = safeMod[funcName].default || safeMod[funcName];
}
const unsafe = {};
for (const funcName in unsafeMod) {
	unsafe[funcName] = unsafeMod[funcName].default || unsafeMod[funcName];
}

// Silence asyc errors
// process.on('uncaughtException', () => {});

export class REstringer {
	static __version__ = __version__;
	logger = flastLogger;

	/**
	 * @param {string} script The target script to be deobfuscated
	 * @param {boolean} normalize Run optional methods which will make the script more readable
	 */
	constructor(script, normalize = true) {
		this.script = script;
		this.normalize = normalize;
		this.modified = false;
		this.obfuscationName = 'Generic';
		this._preprocessors = [];
		this._postprocessors = [];
		this.logger.setLogLevelLog();
		this.maxIterations = config.defaultMaxIterations;
		this.detectObfuscationType = true;
		// Deobfuscation methods that don't use eval
		this.safeMethods = [
			safe.rearrangeSequences,
			safe.separateChainedDeclarators,
			safe.rearrangeSwitches,
			safe.normalizeEmptyStatements,
			safe.removeRedundantBlockStatements,
			safe.resolveRedundantLogicalExpressions,
			safe.unwrapSimpleOperations,
			safe.resolveProxyCalls,
			safe.resolveProxyVariables,
			safe.resolveProxyReferences,
			safe.resolveMemberExpressionReferencesToArrayIndex,
			safe.resolveMemberExpressionsWithDirectAssignment,
			safe.parseTemplateLiteralsIntoStringLiterals,
			safe.resolveDeterministicIfStatements,
			safe.replaceCallExpressionsWithUnwrappedIdentifier,
			safe.replaceEvalCallsWithLiteralContent,
			safe.replaceIdentifierWithFixedAssignedValue,
			safe.replaceIdentifierWithFixedValueNotAssignedAtDeclaration,
			safe.replaceNewFuncCallsWithLiteralContent,
			safe.replaceBooleanExpressionsWithIf,
			safe.replaceSequencesWithExpressions,
			safe.resolveFunctionConstructorCalls,
			safe.replaceFunctionShellsWithWrappedValue,
			safe.replaceFunctionShellsWithWrappedValueIIFE,
			safe.simplifyCalls,
			safe.unwrapFunctionShells,
			safe.unwrapIIFEs,
			safe.simplifyIfStatements,
		];
		// Deobfuscation methods that use eval
		this.unsafeMethods = [
			unsafe.resolveMinimalAlphabet,
			unsafe.resolveDefiniteBinaryExpressions,
			unsafe.resolveAugmentedFunctionWrappedArrayReplacements,
			unsafe.resolveMemberExpressionsLocalReferences,
			unsafe.resolveDefiniteMemberExpressions,
			unsafe.resolveBuiltinCalls,
			unsafe.resolveDeterministicConditionalExpressions,
			unsafe.resolveInjectedPrototypeMethodCalls,
			unsafe.resolveLocalCalls,
			unsafe.resolveEvalCallsOnNonLiterals,
		];
	}

	/**
	 * Determine the type of the obfuscation, and populate the appropriate pre- and post- processors.
	 */
	determineObfuscationType() {
		const detectedObfuscationType = detectObfuscation(this.script, false).slice(-1)[0];
		if (detectedObfuscationType) {
			this.obfuscationName = detectedObfuscationType;
			if (processors[detectedObfuscationType]) {
				({preprocessors: this._preprocessors, postprocessors: this._postprocessors} = processors[detectedObfuscationType]);
			}
		}
		this.logger.log(`[+] Obfuscation type is ${this.obfuscationName}`);
		return this.obfuscationName;
	}

	/**
	 * Make all changes which don't involve eval first in order to avoid running eval on probelmatic values
	 * which can only be detected once part of the script is deobfuscated. Once all the safe changes are made,
	 * continue to the unsafe changes.
	 * Since the unsafe modification may be overreaching, run them only once and try the safe methods again.
	 */
	_loopSafeAndUnsafeDeobfuscationMethods() {
		let modified, script;
		do {
			this.modified = false;
			script = applyIteratively(this.script, this.safeMethods.concat(this.unsafeMethods), this.maxIterations);
			if (this.script !== script) {
				this.modified = true;
				this.script = script;
			}
			if (this.modified) modified = true;
		} while (this.modified); // Run this loop until the deobfuscation methods stop being effective.
		this.modified = modified;
	}

	/**
	 * Entry point for this class.
	 * Determine obfuscation type and run the pre- and post- processors accordingly.
	 * Run the deobfuscation methods in a loop until nothing more is changed.
	 * Normalize script to make it more readable.
	 * @param {boolean} clean (optional) Remove dead nodes after deobfuscation. Defaults to false.
	 * @return {boolean} true if the script was modified during deobfuscation; false otherwise.
	 */
	deobfuscate(clean = false) {
		if (this.detectObfuscationType) this.determineObfuscationType();
		this._runProcessors(this._preprocessors);
		this._loopSafeAndUnsafeDeobfuscationMethods();
		this._runProcessors(this._postprocessors);
		if (this.modified && this.normalize) this.script = normalizeScript(this.script);
		if (clean) this.script = applyIteratively(this.script, [unsafe.removeDeadNodes], this.maxIterations);
		return this.modified;
	}

	/**
	 * Run specific deobfuscation which must run before or after the main deobfuscation loop
	 * in order to successfully complete deobfuscation.
	 * @param {Array<Function|string>} processors An array of either imported deobfuscation methods or the name of internal methods.
	 */
	_runProcessors(processors) {
		for (let i = 0; i < processors.length; i++) {
			const processor = processors[i];
			this.script = applyIteratively(this.script, [processor], 1);
		}
	}
}