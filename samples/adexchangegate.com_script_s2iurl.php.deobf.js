[+] Obfuscation type is augmented_proxied_array_function_replacements
	[+] replaceArrayWithStaticAugmentedVersion committed 2 new changes!
[+] ==> Cycle 1 completed in 0.017 seconds with 2 changes (700 nodes)
	[+] resolveFunctionToArray committed 1 new changes!
[+] ==> Cycle 2 completed in 0.013 seconds with 1 changes (747 nodes)
	[+] rearrangeSequences committed 2 new changes!
	[+] separateChainedDeclarators committed 5 new changes!
[+] Applying changes to the root node...
	[+] resolveProxyVariables committed 67 new changes!
	[+] resolveProxyReferences committed 47 new changes!
	[+] replaceBooleanExpressionsWithIf committed 2 new changes!
	[+] replaceSequencesWithExpressions committed 1 new changes!
[+] ==> Cycle 3 completed in 0.052 seconds with 124 changes (762 nodes)
	[+] separateChainedDeclarators committed 4 new changes!
	[+] resolveProxyVariables committed 12 new changes!
[+] ==> Cycle 4 completed in 0.011 seconds with 140 changes (719 nodes)
[+] ==> Cycle 5 completed in 0 seconds with 140 changes (719 nodes)
	[+] resolveLocalCalls committed 58 new changes!
[+] ==> Cycle 6 completed in 0.023 seconds with 58 changes (603 nodes)
[+] ==> Cycle 7 completed in 0.001 seconds with no changes (603 nodes)
[+] ==> Cycle 8 completed in 0.025 seconds with no changes (603 nodes)
	[+] normalizeComputed committed 63 new changes!
[+] ==> Cycle 9 completed in 0.004 seconds with 63 changes (603 nodes)
	[+] normalizeComputed committed 11 new changes!
[+] ==> Cycle 10 completed in 0.003 seconds with 74 changes (603 nodes)
[+] ==> Cycle 11 completed in 0 seconds with 74 changes (603 nodes)
[+] Saved ./samples/adexchangegate.com_script_s2iurl.php.js-deob.js
[!] Deobfuscation took 0.201 seconds.
function _0x1c9d(_0x37a7d0, _0xd30df0) {
  var _0x37c122 = [
    'keywords',
    'getAttribute',
    'meta',
    'indexOf',
    '4312407NWIZld',
    'self',
    'build',
    '&cbkeywords=',
    'location',
    '_getReferrer',
    '918656nwUSeZ',
    'innerWidth',
    '&invis=',
    'max',
    'replace',
    'top',
    'content',
    'title',
    'baseUrl',
    '_getWidth',
    '_getHeight',
    'referrer',
    '73985cAzDKE',
    '_getTitle',
    '&cbiframe=',
    '53076AQVvlc',
    'body',
    '50ZScxXi',
    '&caught=1',
    'name',
    '1307694lWDtgZ',
    'getElementsByTagName',
    'substring',
    '&cbtitle=',
    '10632294ZSYLRW',
    'length',
    'clientHeight',
    'document',
    'hasAttribute',
    '92JCYfEe',
    'documentElement',
    'clientWidth',
    '28MhJrra',
    '10jRCQcn',
    '&cbref=',
    '_getSafeSizeSubString',
    '5384968BJpkSS',
    'description'
  ];
  _0x1c9d = function (_0x1c9d86, _0x3f111b) {
    _0x1c9d86 = _0x1c9d86 - 323;
    var _0x2f2581 = _0x37c122[_0x1c9d86];
    return _0x37c122[_0x1c9d86];
  };
  return _0x1c9d(_0x37a7d0, _0xd30df0);
}
function _0x37c1() {
  return [
    'keywords',
    'getAttribute',
    'meta',
    'indexOf',
    '4312407NWIZld',
    'self',
    'build',
    '&cbkeywords=',
    'location',
    '_getReferrer',
    '918656nwUSeZ',
    'innerWidth',
    '&invis=',
    'max',
    'replace',
    'top',
    'content',
    'title',
    'baseUrl',
    '_getWidth',
    '_getHeight',
    'referrer',
    '73985cAzDKE',
    '_getTitle',
    '&cbiframe=',
    '53076AQVvlc',
    'body',
    '50ZScxXi',
    '&caught=1',
    'name',
    '1307694lWDtgZ',
    'getElementsByTagName',
    'substring',
    '&cbtitle=',
    '10632294ZSYLRW',
    'length',
    'clientHeight',
    'document',
    'hasAttribute',
    '92JCYfEe',
    'documentElement',
    'clientWidth',
    '28MhJrra',
    '10jRCQcn',
    '&cbref=',
    '_getSafeSizeSubString',
    '5384968BJpkSS',
    'description'
  ];
}
var builder = new ReopenUrlBuilder(reopenUrl);
var url = builder.build();
if (inIframe()) {
  var visibility = isFraud();
  if (visibility > 0) {
    url += '&invis=' + visibility;
  }
}
if (isIframeSupported && inIframe()) {
  try {
    window.top.location.replace(url);
  } catch (_0x4cdb84) {
  }
  setTimeout(function () {
    window.location.replace(url + '&caught=1');
  }, 2500);
} else
  window.location.replace(url);
function inIframe() {
  try {
    return window.self !== window.top ? 1 : 0;
  } catch (_0x23e750) {
    return 1;
  }
}
function ReopenUrlBuilder(_0x13bf0b) {
  this.baseUrl = _0x13bf0b;
  this._getMetaContent = function (_0x54f79a) {
    try {
      var _0x1f1cf8 = window.top.document.getElementsByTagName('meta');
      for (var _0x2e85bf = 0; _0x2e85bf < _0x1f1cf8.length; _0x2e85bf++) {
        if (_0x1f1cf8[_0x2e85bf].hasAttribute('name') && _0x1f1cf8[_0x2e85bf].getAttribute('name').toLowerCase() === _0x54f79a) {
          var _0x5980c4 = _0x1f1cf8[_0x2e85bf].getAttribute('content');
          return this._getSafeSizeSubString(_0x5980c4);
        }
      }
    } catch (_0x277ba5) {
    }
    return '';
  };
  this._getWidth = function () {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  };
  this._getHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  };
  this._getSafeSizeSubString = function (_0x34f71c) {
    var _0x4dd63c = Math.max(_0x34f71c.indexOf(' ', 256), _0x34f71c.indexOf(',', 256));
    if (_0x4dd63c > 384 || _0x4dd63c < 20) {
      _0x4dd63c = 256;
    }
    return _0x34f71c.substring(0, _0x4dd63c);
  };
  this._getTitle = function () {
    var _0x1e0a01 = document.title;
    if (inIframe())
      try {
        _0x1e0a01 = window.top.document.title;
      } catch (_0x4e68a6) {
        _0x1e0a01 = '';
      }
    return this._getSafeSizeSubString(_0x1e0a01);
  };
  this._getReferrer = function () {
    var _0x42095c = document.referrer;
    return this._getSafeSizeSubString(document.referrer);
  };
  this.build = function () {
    return this.baseUrl + '&cbrandom=' + Math.random() + '&cbtitle=' + encodeURIComponent(this._getTitle()) + '&cbiframe=' + inIframe() + '&cbWidth=' + this._getWidth() + '&cbHeight=' + this._getHeight() + '&cbdescription=' + encodeURIComponent(this._getMetaContent('description')) + '&cbkeywords=' + encodeURIComponent(this._getMetaContent('keywords')) + '&cbref=' + encodeURIComponent(this._getReferrer());
  };
}
function isFraud() {
  var _0x162d3f = window.innerWidth || document.documentElement.clientWidth || 0;
  var _0x25304d = window.innerHeight || document.documentElement.clientHeight || 0;
  if (parseInt(_0x162d3f) < 10 || parseInt(_0x25304d) < 10)
    return 1;
  return 0;
}
