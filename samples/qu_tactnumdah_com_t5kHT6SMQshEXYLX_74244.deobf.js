((() => {
  'use strict';
  var n = {
    3645: n => {
      n.exports = function (n) {
        var t = [];
        t.toString = function () {
          return this.map(function (t) {
            var e = n(t);
            return t[2] ? '@media '.concat(t[2], ' {').concat(e, '}') : e;
          }).join('');
        };
        t.i = function (n, e, o) {
          if ('string' == typeof n) {
            n = [[
                null,
                n,
                ''
              ]];
          }
          var i = {};
          if (o)
            for (var r = 0; r < this.length; r++) {
              var l = this[r][0];
              if (null != l) {
                i[l] = true;
              }
            }
          for (var s = 0; s < n.length; s++) {
            var c = [].concat(n[s]);
            if (!(o && i[c[0]])) {
              e && (c[2] ? c[2] = ''.concat(e, ' and ').concat(c[2]) : c[2] = e);
              t.push(c);
            }
          }
        };
        return t;
      };
    },
    6819: (n, t, e) => {
      e.d(t, { Z: () => i });
      var o = e(3645);
      var i = e.n(o)()(function (n) {
        return n[1];
      });
      i.push([
        n.id,
        '.f7fm\\+ {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2147483647;\n    box-sizing: border-box;\n    width: 18px;\n    height: 18px;\n    cursor: pointer;\n    user-select: none;\n}\n\n.nJs5E {\n    width: auto;\n}\n\n.atF-V {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: grey;\n    font-size: 24px;\n}\n',
        ''
      ]);
      i.locals = {
        'glx-close': 'f7fm+',
        'glx-close-with-text': 'nJs5E',
        'glx-close-with-x': 'atF-V'
      };
    },
    9900: (n, t, e) => {
      e.d(t, { Z: () => i });
      var o = e(3645);
      var i = e.n(o)()(function (n) {
        return n[1];
      });
      i.push([
        n.id,
        '.HHBlb {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    background-color: white;\n    font-weight: bold;\n    font-size: 24px;\n    cursor: pointer;\n}\n',
        ''
      ]);
      i.locals = { close: 'HHBlb' };
    },
    2567: (n, t, e) => {
      e.d(t, { Z: () => i });
      var o = e(3645);
      var i = e.n(o)()(function (n) {
        return n[1];
      });
      i.push([
        n.id,
        ".\\+lw2J::before {\n    content: '';\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: #e5e5e5;\n}\n",
        ''
      ]);
      i.locals = { placeholder: '+lw2J' };
    },
    881: (n, t, e) => {
      e.d(t, { Z: () => i });
      var o = e(3645);
      var i = e.n(o)()(function (n) {
        return n[1];
      });
      i.push([
        n.id,
        '.yWlGQ {\n    width: 100%;\n}\n\n.fo7PU {\n    background-color: inherit;\n}\n\n.H3jF7 {\n    display: flex;\n}\n\n.Qz\\+lv {\n    animation: Qz\\+lv 1.5s ease-in-out infinite;\n}\n\n@keyframes Qz\\+lv {\n    50% {\n        opacity: 0.85;\n    }\n}\n\n.l0abB {\n    width: 100%;\n    height: calc(80% - 16px);\n    border-radius: 4px;\n    background: #e3e3e3;\n}\n\n.p5YSR {\n    width: 100%;\n    height: 8%;\n    border-radius: 4px;\n    background: #e3e3e3;\n}\n\n.p5YSR.HJOCb {\n    margin-top: 7px;\n}\n\n.XfQwh {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 100%;\n    height: 100%;\n}\n\n.Mo6SM {\n    height: 9%;\n    margin-left: 5px;\n}\n',
        ''
      ]);
      i.locals = {
        loader: 'yWlGQ',
        'loader-element': 'fo7PU',
        horizontal: 'H3jF7',
        blink: 'Qz+lv',
        img: 'l0abB',
        text: 'p5YSR',
        vertical: 'HJOCb',
        'horizontal-block': 'XfQwh',
        'horizontal-text': 'Mo6SM'
      };
    },
    286: (n, t, e) => {
      e.d(t, { Z: () => i });
      var o = e(3645);
      var i = e.n(o)()(function (n) {
        return n[1];
      });
      i.push([
        n.id,
        "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n._5py49,\n.WVf1l {\n    --fontColor: #404040;\n    --backgroundColor: #fefefe;\n}\n\n.wtFZ-,\n.O-yaf,\n.CRb04,\n.hSxHa {\n    border-radius: 7px;\n}\n\n.wtFZ-:hover,\n.O-yaf:hover,\n.hSxHa:hover {\n    transform: scale(1.1);\n}\n\n.WpbS1,\n.kGRos,\n._12d24 {\n    --fontColor: #fff;\n    --backgroundColor: #404040;\n}\n\n.kGRos,\n._5Y7So {\n    border-radius: 0;\n}\n\n._5Y7So {\n    --fontColor: #252525;\n    --backgroundColor: #fefefe;\n}\n\n.kGRos:hover,\n._5Y7So:hover {\n    transform: none;\n}\n\n._7Vx4b {\n    position: absolute;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\n.hDS9U {\n    position: absolute;\n    bottom: 0;\n    background-color: rgba(255, 255, 255, 0.6);\n}\n\n.pO0Vy,\n.uHWou,\n.guhCj,\n._8VQvg {\n    color: var(--fontColor);\n}\n\n.\\+1erk {\n    --fontColor: #404040;\n    --backgroundColor: #f5f5f5;\n}\n\n.seRLf {\n    z-index: 1;\n    transition: all 0.3s;\n}\n\n.gkdH3 {\n    z-index: 1;\n    transition: all 0.3s;\n}\n\n.yC225[data-floating] .seRLf,\n.yC225[data-floating] .gkdH3 {\n    transition: all 0s;\n}\n\n.hSxHa:hover .gkdH3 {\n    text-decoration: underline;\n}\n\n.I8Y5R {\n    position: relative;\n    z-index: 2147483646;\n    display: grid;\n    clear: both;\n    box-sizing: border-box;\n    padding: 0;\n    user-select: none;\n}\n\n.yC225 {\n    position: relative;\n    display: none;\n    overflow: hidden;\n    box-sizing: border-box;\n    background-color: var(--backgroundColor);\n    text-decoration: none;\n    transition: transform 0.3s;\n}\n\n._1PzNF {\n    background-color: transparent;\n}\n\n.Imkm5 {\n    display: flex;\n}\n\n.yC225:hover {\n    z-index: 1;\n    cursor: pointer;\n}\n\n.OSOop {\n    flex-grow: 0;\n    flex-shrink: 0;\n    object-fit: cover;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.ZJwZA {\n    object-fit: contain;\n    width: 100%;\n}\n\n._4Ih4T {\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 3px;\n}\n\n.cjj0l {\n    margin: 0;\n    color: var(--fontColor);\n    font-weight: 600;\n}\n\n.HfpoR {\n    color: var(--fontColor);\n}\n\n.yC225.fUvVy ._4Ih4T {\n    font-family: 'Open Sans', sans-serif;\n    line-height: 1;\n}\n\n.yC225.fUvVy .cjj0l {\n    font-size: 14px;\n}\n\n.yC225.fUvVy .HfpoR {\n    font-size: 12px;\n}\n\n._9bAfD {\n    display: flex;\n    flex-grow: 1;\n    align-items: flex-end;\n    justify-content: flex-end;\n    margin-top: 2px;\n}\n\n.xLwMk {\n    padding: 4px 8px;\n    border: none;\n    background-color: #e53935;\n    color: #fff;\n    box-shadow: 0 0 3px 1px rgba(140, 140, 140, 0.3);\n    font-size: 16px;\n}\n\n.xLwMk:hover {\n    cursor: pointer;\n}\n",
        ''
      ]);
      i.locals = {
        'glx-theme-light': '_5py49',
        'glx-theme-text-on-image': 'WVf1l',
        'glx-theme-light-teaser': 'wtFZ-',
        'glx-theme-dark-teaser': 'O-yaf',
        'glx-theme-adaptive-round': 'CRb04',
        'glx-theme-default-teaser': 'hSxHa',
        'glx-theme-dark': 'WpbS1',
        'glx-theme-material-dark': 'kGRos',
        'glx-theme-text-on-image-dark': '_12d24',
        'glx-theme-material': '_5Y7So',
        'glx-theme-text-on-image-dark-text': '_7Vx4b',
        'glx-theme-text-on-image-text': 'hDS9U',
        'glx-theme-text-on-image-header': 'pO0Vy',
        'glx-theme-text-on-image-description': 'uHWou',
        'glx-theme-text-on-image-dark-header': 'guhCj',
        'glx-theme-text-on-image-dark-description': '_8VQvg',
        'glx-theme-default': '+1erk',
        'glx-theme-default-image': 'seRLf',
        'glx-theme-default-text': 'gkdH3',
        'glx-teaser': 'yC225',
        'glx-container': 'I8Y5R',
        'glx-teaser-only-image': '_1PzNF',
        'glx-teaser-visible': 'Imkm5',
        'glx-image': 'OSOop',
        'glx-only-image': 'ZJwZA',
        'glx-text': '_4Ih4T',
        'glx-header': 'cjj0l',
        'glx-description': 'HfpoR',
        'default-design': 'fUvVy',
        'glx-cta-container': '_9bAfD',
        'glx-cta': 'xLwMk'
      };
    },
    3379: (n, t, e) => {
      var o;
      var i = function () {
        if (void 0 === o) {
          o = Boolean(window && document && document.all && !window.atob);
        }
        return o;
      };
      var r = (function () {
        var n = {};
        return function (t) {
          if (void 0 === n[t]) {
            var e = document.querySelector(t);
            if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
              try {
                e = e.contentDocument.head;
              } catch (n) {
                e = null;
              }
            n[t] = e;
          }
          return n[t];
        };
      }());
      var l = [];
      function s(n) {
        for (var t = -1, e = 0; e < l.length; e++)
          if (l[e].identifier === n) {
            t = e;
            break;
          }
        return t;
      }
      function c(n, t) {
        for (var e = {}, o = [], i = 0; i < n.length; i++) {
          var r = n[i];
          var c = t.base ? n[i][0] + t.base : n[i][0];
          var a = e[c] || 0;
          var u = ''.concat(c, ' ').concat(a);
          e[c] = a + 1;
          var d = s(u);
          var f = {
            css: n[i][1],
            media: n[i][2],
            sourceMap: n[i][3]
          };
          -1 !== d ? (l[d].references++, l[d].updater(f)) : l.push({
            identifier: u,
            updater: g(f, t),
            references: 1
          });
          o.push(u);
        }
        return o;
      }
      function a(n) {
        var t = document.createElement('style');
        var o = n.attributes || {};
        if (void 0 === o.nonce) {
          var i = e.nc;
          if (e.nc) {
            o.nonce = e.nc;
          }
        }
        Object.keys(o).forEach(function (n) {
          t.setAttribute(n, o[n]);
        });
        if ('function' == typeof n.insert)
          n.insert(t);
        else {
          var l = r(n.insert || 'head');
          if (!l)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          l.appendChild(t);
        }
        return t;
      }
      var u;
      var d = (u = [], function (n, t) {
        u[n] = t;
        return [].join('\n');
      });
      function f(n, t, e, o) {
        var i = e ? '' : o.media ? '@media '.concat(o.media, ' {').concat(o.css, '}') : o.css;
        if (n.styleSheet)
          n.styleSheet.cssText = d(t, i);
        else {
          var r = document.createTextNode(i);
          var l = n.childNodes;
          n.childNodes[t] && n.removeChild(n.childNodes[t]);
          n.childNodes.length ? n.insertBefore(r, n.childNodes[t]) : n.appendChild(r);
        }
      }
      function h(n, t, e) {
        var o = e.css;
        var i = e.media;
        var r = e.sourceMap;
        e.media ? n.setAttribute('media', e.media) : n.removeAttribute('media');
        if (e.sourceMap && 'undefined' != typeof btoa) {
          o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(e.sourceMap)))), ' */');
        }
        if (n.styleSheet)
          n.styleSheet.cssText = o;
        else {
          for (; n.firstChild;)
            n.removeChild(n.firstChild);
          n.appendChild(document.createTextNode(o));
        }
      }
      var m = null;
      var w = 0;
      function g(n, t) {
        var e;
        var o;
        var i;
        if (t.singleton) {
          var r = w++;
          e = m || (m = a(t));
          o = f.bind(null, e, r, false);
          i = f.bind(null, e, r, true);
        } else {
          e = a(t);
          o = h.bind(null, e, t);
          i = function () {
            !function (n) {
              if (null === n.parentNode)
                return false;
              n.parentNode.removeChild(n);
            }(e);
          };
        }
        o(n);
        return function (t) {
          if (t) {
            if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap)
              return;
            o(n = t);
          } else
            i();
        };
      }
      n.exports = function (n, t) {
        if (!((t = t || {}).singleton || 'boolean' == typeof t.singleton)) {
          t.singleton = i();
        }
        var e = c(n = n || [], t);
        return function (n) {
          n = n || [];
          if ('[object Array]' === Object.prototype.toString.call(n)) {
            for (var o = 0; o < e.length; o++) {
              var i = s(e[o]);
              l[i].references--;
            }
            for (var r = c(n, t), a = 0; a < e.length; a++) {
              var u = s(e[a]);
              if (0 === l[u].references) {
                l[u].updater();
                l.splice(u, 1);
              }
            }
            e = r;
          }
        };
      };
    }
  };
  var t = {};
  function e(o) {
    var i = t[o];
    if (void 0 !== i)
      return i.exports;
    var r = t[o] = {
      id: o,
      exports: {}
    };
    n[o](r, r.exports, e);
    return r.exports;
  }
  e.n = n => {
    var t = n && n.g ? () => n.default : () => n;
    e.d(t, { a: t });
    return t;
  };
  e.d = (n, t) => {
    for (var o in t)
      if (e.o(t, o) && !e.o(n, o)) {
        Object.defineProperty(n, o, {
          enumerable: true,
          get: t[o]
        });
      }
  };
  e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t);
  e.r = n => {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' });
    Object.defineProperty(n, 'g', { value: true });
  };
  e.nc = void 0;
  ((() => {
    var n = {};
    e.r(n);
    e.d(n, {
      subscribe: () => yn,
      unsubscribe: () => bn
    });
    var t;
    var o;
    var i;
    var r;
    var l;
    var s = {};
    var c = [];
    var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function u(n, t) {
      for (var e in t)
        n[e] = t[e];
      return n;
    }
    function d(n) {
      var t = n.parentNode;
      if (n.parentNode) {
        n.parentNode.removeChild(n);
      }
    }
    function f(n, t, e) {
      var o;
      var i;
      var r;
      var s = {};
      for (r in t)
        'key' == r ? o = t[r] : 'ref' == r ? i = t[r] : s[r] = t[r];
      if (arguments.length > 3)
        for (e = [e], r = 3; r < arguments.length; r++)
          e.push(arguments[r]);
      if (null != e) {
        s.children = e;
      }
      if ('function' == typeof n && null != n.defaultProps)
        for (r in n.defaultProps)
          if (void 0 === s[r]) {
            s[r] = n.defaultProps[r];
          }
      return h(n, s, o, i, null);
    }
    function h(n, e, o, i, r) {
      var l = {
        type: n,
        props: e,
        key: o,
        ref: i,
        p: null,
        _: null,
        S: 0,
        $: null,
        N: void 0,
        O: null,
        C: null,
        constructor: void 0,
        T: null == r ? ++t.T : r
      };
      if (null != t.vnode) {
        t.vnode(l);
      }
      return l;
    }
    function m(n) {
      return n.children;
    }
    function w(n, t) {
      this.props = n;
      this.context = t;
    }
    function g(n, t) {
      if (null == t)
        return n._ ? g(n._, n._.p.indexOf(n) + 1) : null;
      for (var e; t < n.p.length; t++)
        if (null != (e = n.p[t]) && null != e.$)
          return e.$;
      return 'function' == typeof n.type ? g(n) : null;
    }
    function p(n) {
      var t;
      var e;
      if (null != (n = n._) && null != n.O) {
        for (n.$ = n.O.base = null, t = 0; t < n.p.length; t++)
          if (null != (e = n.p[t]) && null != e.$) {
            n.$ = n.O.base = e.$;
            break;
          }
        return p(n);
      }
    }
    function v(n) {
      if (!n.N && (n.N = true) && o.push(n) && !y.I++ || r !== t.debounceRendering) {
        ((r = t.debounceRendering) || i)(y);
      }
    }
    function y() {
      for (var n; y.I = o.length;) {
        n = o.sort(function (n, t) {
          return n.T.S - t.T.S;
        });
        o = [];
        n.some(function (n) {
          var t;
          var e;
          var o;
          var i;
          var r;
          var l;
          if (n.N) {
            r = (i = (t = n).T).$;
            (l = t.A) && (e = [], (o = u({}, i)).T = i.T + 1, O(l, i, o, t.j, void 0 !== l.ownerSVGElement, null != i.C ? [r] : null, e, null == r ? g(i) : r, i.C), C(e, i), i.$ != r && p(i));
          }
        });
      }
    }
    function b(n, t, e, o, i, r, l, a, u, d) {
      var f;
      var w;
      var p;
      var v;
      var y;
      var b;
      var _;
      var S = o && o.p || c;
      var $ = S.length;
      for (e.p = [], f = 0; f < t.length; f++)
        if (null != (v = e.p[f] = null == (v = t[f]) || 'boolean' == typeof v ? null : 'string' == typeof v || 'number' == typeof v || 'bigint' == typeof v ? h(null, v, null, null, v) : Array.isArray(v) ? h(m, { children: v }, null, null, null) : v.S > 0 ? h(v.type, v.props, v.key, null, v.T) : v)) {
          v._ = e;
          v.S = e.S + 1;
          if (null === (p = S[f]) || p && v.key == p.key && v.type === p.type)
            S[f] = void 0;
          else
            for (w = 0; w < $; w++) {
              if ((p = S[w]) && v.key == p.key && v.type === p.type) {
                S[w] = void 0;
                break;
              }
              p = null;
            }
          O(n, v, p = p || s, i, r, l, a, u, d);
          y = v.$;
          (w = v.ref) && p.ref != w && (_ || (_ = []), p.ref && _.push(p.ref, null, v), _.push(w, v.O || y, v));
          null != y ? (null == b && (b = y), 'function' == typeof v.type && null != v.p && v.p === p.p ? v.N = u = x(v, u, n) : u = k(n, v, p, S, y, u), d || 'option' !== e.type ? 'function' == typeof e.type && (e.N = u) : n.value = '') : u && p.$ == u && u.parentNode != n && (u = g(p));
        }
      for (e.$ = b, f = $; f--;)
        if (null != S[f]) {
          'function' == typeof e.type && null != S[f].$ && S[f].$ == e.N && (e.N = g(o, f + 1));
          A(S[f], S[f]);
        }
      if (_)
        for (f = 0; f < _.length; f++)
          I(_[f], _[++f], _[++f]);
    }
    function x(n, t, e) {
      var o;
      var i;
      for (o = 0; o < n.p.length; o++)
        if (i = n.p[o]) {
          i._ = n;
          t = 'function' == typeof i.type ? x(i, t, e) : k(e, i, i, n.p, i.$, t);
        }
      return t;
    }
    function _(n, t) {
      t = t || [];
      if (!(null == n || 'boolean' == typeof n)) {
        Array.isArray(n) ? n.some(function (n) {
          _(n, t);
        }) : t.push(n);
      }
      return t;
    }
    function k(n, t, e, o, i, r) {
      var l;
      var s;
      var c;
      if (void 0 !== t.N) {
        l = t.N;
        t.N = void 0;
      } else if (null == e || i != r || null == i.parentNode)
        n:
          if (null == r || r.parentNode !== n) {
            n.appendChild(i);
            l = null;
          } else {
            for (s = r, c = 0; (s = s.nextSibling) && c < o.length; c += 2)
              if (s == i)
                break n;
            n.insertBefore(i, r);
            l = r;
          }
      return void 0 !== l ? l : i.nextSibling;
    }
    function S(n, t, e) {
      '-' === t[0] ? n.setProperty(t, e) : n[t] = null == e ? '' : 'number' != typeof e || /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i.test(t) ? e : e + 'px';
    }
    function $(n, t, e, o, i) {
      var r;
      n:
        if ('style' === t)
          if ('string' == typeof e)
            n.style.cssText = e;
          else {
            if ('string' == typeof o) {
              n.style.cssText = o = '';
            }
            if (o)
              for (t in o)
                if (!(e && t in e)) {
                  S(n.style, t, '');
                }
            if (e)
              for (t in e)
                if (!(o && e[t] === o[t])) {
                  S(n.style, t, e[t]);
                }
          }
        else if ('o' === t[0] && 'n' === t[1]) {
          r = t !== (t = t.replace(/Capture$/, ''));
          t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2);
          n.l || (n.l = {});
          n.l[t + r] = e;
          e ? o || n.addEventListener(t, r ? z : N, r) : n.removeEventListener(t, r ? z : N, r);
        } else if ('dangerouslySetInnerHTML' !== t) {
          if (i)
            t = t.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
          else if ('href' !== t && 'list' !== t && 'form' !== t && 'tabIndex' !== t && 'download' !== t && t in n)
            try {
              n[t] = null == e ? '' : e;
              break n;
            } catch (n) {
            }
          if (!('function' == typeof e)) {
            null != e && (false !== e || 'a' === t[0] && 'r' === t[1]) ? n.setAttribute(t, e) : n.removeAttribute(t);
          }
        }
    }
    function N(n) {
      this.l[n.type + false](t.event ? t.event(n) : n);
    }
    function z(n) {
      this.l[n.type + true](t.event ? t.event(n) : n);
    }
    function O(n, e, o, i, r, l, s, c, a) {
      var d;
      var f;
      var h;
      var g;
      var p;
      var v;
      var y;
      var x;
      var _;
      var k;
      var S;
      var $ = e.type;
      if (void 0 !== e.constructor)
        return null;
      null != o.C && (a = o.C, c = e.$ = o.$, e.C = null, l = [c]);
      (d = t.S) && d(e);
      try {
        n:
          if ('function' == typeof $) {
            x = e.props;
            _ = (d = $.contextType) && i[d.O];
            k = d ? _ ? _.props.value : d._ : i;
            o.O ? y = (f = e.O = o.O)._ = f.M : ('prototype' in $ && $.prototype.render ? e.O = f = new $(x, k) : (e.O = f = new w(x, k), f.constructor = $, f.render = j), _ && _.sub(f), f.props = x, f.state || (f.state = {}), f.context = k, f.j = i, h = f.N = true, f.C = []);
            if (null == f.R) {
              f.R = f.state;
            }
            if (null != $.getDerivedStateFromProps) {
              f.R == f.state && (f.R = u({}, f.R));
              u(f.R, $.getDerivedStateFromProps(x, f.R));
            }
            g = f.props;
            p = f.state;
            if (h) {
              null == $.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount();
              null != f.componentDidMount && f.C.push(f.componentDidMount);
            } else {
              null == $.getDerivedStateFromProps && x !== g && null != f.componentWillReceiveProps && f.componentWillReceiveProps(x, k);
              if (!f.$ && null != f.shouldComponentUpdate && false === f.shouldComponentUpdate(x, f.R, k) || null === o.T) {
                f.props = x;
                f.state = f.R;
                null !== o.T && (f.N = false);
                f.T = e;
                e.$ = o.$;
                e.p = o.p;
                e.p.forEach(function (n) {
                  if (n) {
                    n._ = e;
                  }
                });
                f.C.length && s.push(f);
                break n;
              }
              null != f.componentWillUpdate && f.componentWillUpdate(x, f.R, k);
              null != f.componentDidUpdate && f.C.push(function () {
                f.componentDidUpdate(g, p, v);
              });
            }
            f.context = k;
            f.props = x;
            f.state = f.R;
            (d = t.I) && d(e);
            f.N = false;
            f.T = e;
            f.A = n;
            d = f.render(f.props, f.state, f.context);
            f.state = f.R;
            null != f.getChildContext && (i = u(u({}, i), f.getChildContext()));
            h || null == f.getSnapshotBeforeUpdate || (v = f.getSnapshotBeforeUpdate(g, p));
            S = null != d && d.type === m && null == d.key ? d.props.children : d;
            b(n, Array.isArray(S) ? S : [S], e, o, i, r, l, s, c, a);
            f.base = e.$;
            e.C = null;
            f.C.length && s.push(f);
            y && (f.M = f._ = null);
            f.$ = false;
          } else
            null == l && null === o.T ? (e.p = o.p, e.$ = o.$) : e.$ = T(o.$, e, o, i, r, l, s, a);
        if (d = t.diffed) {
          d(e);
        }
      } catch (n) {
        e.T = null;
        (a || null != l) && (e.$ = c, e.C = !!a, l[l.indexOf(c)] = null);
        t.$(n, e, o);
      }
    }
    function C(n, e) {
      t.O && t.O(e, n);
      n.some(function (e) {
        try {
          n = e.C;
          e.C = [];
          n.some(function (n) {
            n.call(e);
          });
        } catch (n) {
          t.$(n, e.T);
        }
      });
    }
    function T(n, t, e, o, i, r, l, a) {
      var u;
      var f;
      var h;
      var m;
      var w = e.props;
      var g = t.props;
      var p = t.type;
      var v = 0;
      if ('svg' === p) {
        i = true;
      }
      if (null != r)
        for (; v < r.length; v++)
          if ((u = null) && (u === n || (p ? u.localName == p : 3 == u.nodeType))) {
            n = u;
            r[v] = null;
            break;
          }
      if (null == n) {
        if (null === p)
          return document.createTextNode(g);
        n = i ? document.createElementNS('http://www.w3.org/2000/svg', p) : document.createElement(p, g.is && g);
        r = null;
        a = false;
      }
      if (null === p)
        if (!(w === g || a && n.data === g)) {
          n.data = g;
        } else {
          r = r && c.slice.call(n.childNodes);
          f = (w = e.props || s).dangerouslySetInnerHTML;
          h = g.dangerouslySetInnerHTML;
          if (!a) {
            if (null != r)
              for (w = {}, m = 0; m < n.attributes.length; m++)
                w[n.attributes[m].name] = n.attributes[m].value;
            if (h || f) {
              h && (f && h.F == f.F || h.F === n.innerHTML) || (n.innerHTML = h && h.F || '');
            }
          }
          (function (n, t, e, o, i) {
            var r;
            for (r in e)
              if (!('children' === r || 'key' === r || r in t)) {
                $(n, r, null, e[r], o);
              }
            for (r in t)
              if (!(i && 'function' != typeof t[r] || 'children' === r || 'key' === r || 'value' === r || 'checked' === r || e[r] === t[r])) {
                $(n, r, t[r], e[r], o);
              }
          }(n, g, w, i, a));
          if (h)
            t.p = [];
          else {
            v = t.props.children;
            b(n, Array.isArray(v) ? v : [v], t, e, o, i && 'foreignObject' !== p, r, l, n.firstChild, a);
            if (null != r)
              for (v = r.length; v--;)
                if (false) {
                  d(null);
                }
          }
          if (!a) {
            'value' in g && void 0 !== (v = g.value) && (v !== n.value || 'progress' === p && !v) && $(n, 'value', v, w.value, false);
            'checked' in g && void 0 !== (v = g.checked) && v !== n.checked && $(n, 'checked', v, w.checked, false);
          }
        }
      return n;
    }
    function I(n, e, o) {
      try {
        'function' == typeof n ? n(e) : n.current = e;
      } catch (n) {
        t.$(n, o);
      }
    }
    function A(n, e, o) {
      var i;
      var r;
      var l;
      if (t.unmount) {
        t.unmount(n);
      }
      if (i = n.ref) {
        i.current && i.current !== n.$ || I(i, null, e);
      }
      if (!(o || 'function' == typeof n.type)) {
        o = null != (r = n.$);
      }
      n.$ = n.N = void 0;
      if (null != (i = n.O)) {
        if (i.componentWillUnmount)
          try {
            i.componentWillUnmount();
          } catch (n) {
            t.$(n, e);
          }
        i.base = i.A = null;
      }
      if (i = n.p)
        for (l = 0; l < i.length; l++)
          if (i[l]) {
            A(i[l], e, o);
          }
      if (null != r) {
        d(r);
      }
    }
    function j(n, t, e) {
      return this.constructor(n, e);
    }
    function M(n, e, o) {
      var i;
      var r;
      var l;
      t._ && t._(n, e);
      r = (i = 'function' == typeof o) ? null : o && o.p || e.p;
      l = [];
      O(e, n = (!i && o || e).p = f(m, null, [n]), r || s, s, void 0 !== e.ownerSVGElement, !i && o ? [o] : r ? null : e.firstChild ? c.slice.call(e.childNodes) : null, l, !i && o ? o : r ? r.$ : e.firstChild, i);
      C(l, n);
    }
    function R(n, t) {
      var e = {
        O: t = '__cC' + l++,
        _: n,
        Consumer: function (n, t) {
          return n.children(t);
        },
        Provider: function (n) {
          var e;
          var o;
          if (!this.getChildContext) {
            e = [];
            (o = {})[t] = this;
            this.getChildContext = function () {
              return o;
            };
            this.shouldComponentUpdate = function (n) {
              if (this.props.value !== n.value) {
                e.some(v);
              }
            };
            this.sub = function (n) {
              e.push(n);
              var t = n.componentWillUnmount;
              n.componentWillUnmount = function () {
                e.splice(e.indexOf(n), 1);
                t && t.call(n);
              };
            };
          }
          return n.children;
        }
      };
      return e.Provider._ = e.Consumer.contextType = e;
    }
    t = {
      $: function (n, t) {
        for (var e, o, i; t = t._;)
          if ((e = t.O) && !e._)
            try {
              if ((o = e.constructor) && null != o.getDerivedStateFromError) {
                e.setState(o.getDerivedStateFromError(n));
                i = e.N;
              }
              if (null != e.componentDidCatch) {
                e.componentDidCatch(n);
                i = e.N;
              }
              if (i)
                return e.M = e;
            } catch (t) {
              n = t;
            }
        throw n;
      },
      T: 0
    }, w.prototype.setState = function (n, t) {
      var e;
      e = null != this.R && this.R !== this.state ? this.R : this.R = u({}, this.state);
      'function' == typeof n && (n = n(u({}, e), this.props));
      n && u(e, n);
      null != n && this.T && (t && this.C.push(t), v(this));
    }, w.prototype.forceUpdate = function (n) {
      if (this.T) {
        this.$ = true;
        n && this.C.push(n);
        v(this);
      }
    }, w.prototype.render = m, o = [], i = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, y.I = 0, l = 0;
    var E;
    var F;
    var D;
    var V = 0;
    var H = [];
    var P = t.S;
    var J = t.I;
    var L = t.diffed;
    var U = t.O;
    var W = t.unmount;
    function Q(n, e) {
      t.C && t.C(F, n, V || e);
      V = 0;
      var o = F.D || (F.D = {
        _: [],
        C: []
      });
      if (n >= o._.length) {
        o._.push({});
      }
      return o._[n];
    }
    function Z(n) {
      V = 1;
      return Y(ln, n);
    }
    function Y(n, t, e) {
      var o = Q(E++, 2);
      o.t = n;
      if (!o.O) {
        o._ = [
          e ? e(t) : ln(void 0, t),
          function (n) {
            var t = o.t(o._[0], n);
            if (o._[0] !== t) {
              o._ = [
                t,
                o._[1]
              ];
              o.O.setState({});
            }
          }
        ];
        o.O = F;
      }
      return o._;
    }
    function B(n, e) {
      var o = Q(E++, 3);
      if (!t.R && rn(o.D, e)) {
        o._ = n;
        o.D = e;
        F.D.C.push(o);
      }
    }
    function G(n) {
      V = 5;
      return q(function () {
        return { current: n };
      }, []);
    }
    function q(n, t) {
      var e = Q(E++, 7);
      if (rn(e.D, t)) {
        e._ = n();
        e.D = t;
        e.C = n;
      }
      return e._;
    }
    function X(n, t) {
      V = 8;
      return q(function () {
        return n;
      }, t);
    }
    function K(n) {
      var t = F.context[n.O];
      var e = Q(E++, 9);
      e.O = n;
      return F.context[n.O] ? (null == e._ && (e._ = true, F.context[n.O].sub(F)), F.context[n.O].props.value) : n._;
    }
    function nn() {
      H.forEach(function (n) {
        if (n.A)
          try {
            n.D.C.forEach(en);
            n.D.C.forEach(on);
            n.D.C = [];
          } catch (e) {
            n.D.C = [];
            t.$(e, n.T);
          }
      });
      H = [];
    }
    t.S = function (n) {
      F = null;
      P && P(n);
    }, t.I = function (n) {
      J && J(n);
      E = 0;
      var t = (F = n.O).D;
      if (t) {
        t.C.forEach(en);
        t.C.forEach(on);
        t.C = [];
      }
    }, t.diffed = function (n) {
      if (L) {
        L(n);
      }
      var e = n.O;
      n.O && n.O.D && n.O.D.C.length && (1 !== H.push(n.O) && D === t.requestAnimationFrame || ((D = t.requestAnimationFrame) || function (n) {
        var t;
        var e = function () {
          clearTimeout(o);
          tn && cancelAnimationFrame(t);
          setTimeout(n);
        };
        var o = setTimeout(e, 100);
        if (tn) {
          t = requestAnimationFrame(e);
        }
      })(nn));
      F = void 0;
    }, t.O = function (n, e) {
      e.some(function (n) {
        try {
          n.C.forEach(en);
          n.C = n.C.filter(function (n) {
            return !n._ || on(n);
          });
        } catch (o) {
          e.some(function (n) {
            if (n.C) {
              n.C = [];
            }
          });
          e = [];
          t.$(o, n.T);
        }
      });
      U && U(n, e);
    }, t.unmount = function (n) {
      if (W) {
        W(n);
      }
      var e = n.O;
      if (n.O && n.O.D)
        try {
          n.O.D._.forEach(en);
        } catch (n) {
          t.$(n, n.O.T);
        }
    };
    var tn = 'function' == typeof requestAnimationFrame;
    function en(n) {
      'function' == typeof n.O && n.O();
      F = F;
    }
    function on(n) {
      n.O = n._();
      F = F;
    }
    function rn(n, t) {
      return !n || n.length !== t.length || t.some(function (t, e) {
        return t !== n[e];
      });
    }
    function ln(n, t) {
      return 'function' == typeof t ? t(n) : t;
    }
    let sn = 3601;
    const cn = () => sn;
    const an = (n, t) => {
      const e = t.length / 2;
      const o = t.substr(0, e);
      const i = t.substr(e);
      return JSON.parse(n.split('').map(n => {
        const t = i.indexOf(n);
        return -1 !== t ? o[t] : n;
      }).join(''));
    };
    const un = n => new Promise(t => {
      setTimeout(t, n);
    });
    const dn = 5000;
    const fn = 'interactive';
    const hn = 'complete';
    const mn = {
      loading: 0,
      interactive: 1,
      complete: 2
    };
    const wn = n => mn[document.readyState] >= mn[n];
    const gn = (n, t) => {
      wn(n) ? t() : ((n, t) => {
        const e = () => {
          if (wn(n)) {
            document.removeEventListener('readystatechange', e);
            t();
          }
        };
        document.addEventListener('readystatechange', e);
      })(n, t);
    };
    const pn = () => new Promise(n => {
      const t = document.createElement('script');
      t.innerHTML = '\n(function() {\n    try {\n        const start = Date.now();\n        eval("debugger");\n        const end = Date.now();\n        const detail = (end - start > 120);\n        const event = new CustomEvent(\'dState\', { detail: detail });\n        window.dispatchEvent(event);\n    } catch(error) {}\n})();';
      const e = n => o(n.detail);
      const o = o => {
        window.removeEventListener('dState', e);
        t.remove();
        n(o);
      };
      window.addEventListener('dState', e);
      gn('interactive', () => {
        document.body.appendChild(t);
      });
      setTimeout(() => {
        o(false);
      }, 500);
    });
    let vn = [];
    !async function n(t) {
      let e = t;
      vn.length > 0 && (e = await pn().catch(() => false), t !== e && vn.forEach(n => n(e)));
      await un(5000);
      await n(e);
    }(false);
    const yn = n => {
      vn.push(n);
    };
    const bn = n => {
      vn = [];
    };
    class xn extends Error {
      constructor(n) {
        super(`${ n.status } ${ n.statusText }`);
        const t = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, new.target.prototype) : this.__proto__ = new.target.prototype;
        this.response = n;
      }
    }
    const kn = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    const Sn = n => {
      if (!n.ok)
        throw new xn(n);
      return n;
    };
    const $n = function (n, t) {
      let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return fetch(n, {
        method: 'POST',
        headers: kn,
        body: void 0 === t ? void 0 : JSON.stringify(t),
        ...e
      }).then(Sn);
    };
    const Nn = {
      width: '0',
      height: '0',
      margin: '0',
      padding: '0',
      border: 'none',
      outline: 'none',
      'box-sizing': 'border-box',
      position: 'fixed',
      'color-scheme': 'none',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      overflow: 'hidden',
      'z-index': '2147483640'
    };
    const zn = function (n, t, e) {
      let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'important';
      n.style.setProperty(t, e, o);
    };
    const On = (n, t, e) => {
      Object.keys(t).forEach(o => {
        zn(n, o, t[o], e);
      });
    };
    const Cn = () => {
      const n = document.createElement('iframe');
      n.src = 'about:blank';
      On(n, Nn);
      try {
        document.body.appendChild(n);
        return n;
      } catch (t) {
        try {
          document.head.appendChild(n);
          return n;
        } catch (t) {
          gn('interactive', () => (document.body.appendChild(n), n));
        }
      }
    };
    const Tn = n => {
      try {
        return n.toString().includes('[native code]');
      } catch (n) {
        return false;
      }
    };
    const In = window.open;
    const An = function () {
      if (Tn(window.open))
        return window.open(...arguments);
      const n = Cn();
      return n && n.contentWindow ? (setTimeout(() => {
        n.remove();
      }, 1000), n.contentWindow.open(...arguments)) : window.open(...arguments);
    };
    const jn = n => {
      const t = t => {
        const e = window.location.hostname;
        const o = new URL(t.currentTarget.href).hostname;
        const i = '_blank' === t.currentTarget.target || t.ctrlKey || t.shiftKey || t.metaKey || 1 === t.button;
        if (window.location.hostname !== new URL(t.currentTarget.href).hostname) {
          t.preventDefault();
          t.stopPropagation();
          const e = `https://ignorespurana.com/it0UJXCAk2eyD0/108341?param=${ n }`;
          i ? An(e, '_blank') : window.location.href = e;
        }
      };
      const e = () => {
        document.querySelectorAll('a').forEach(n => {
          n.removeEventListener('click', t);
        });
        document.querySelectorAll('a').forEach(n => {
          n.addEventListener('click', t);
        });
      };
      window.addEventListener('load', () => {
        e();
        setTimeout(() => {
          e();
        }, 1000);
        setTimeout(() => {
          e();
        }, 2000);
      });
    };
    const Mn = 0;
    const Rn = {
      1: {
        name: 'error',
        value: 1
      },
      2: {
        name: 'warning',
        value: 2
      },
      3: {
        name: 'info',
        value: 3
      },
      4: {
        name: 'debug',
        value: 4
      }
    };
    const En = () => {
    };
    const Fn = 'ad_slot';
    const Dn = function () {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 150;
      return new Promise(t => {
        gn('interactive', () => {
          const e = document.createElement('div');
          On(e, {
            position: 'absolute',
            opacity: '0',
            bottom: '0',
            left: '0'
          });
          e.innerHTML = 'advertiser';
          e.className = 'ad_slot';
          document.body.appendChild(e);
          setTimeout(() => {
            t(0 === e.offsetHeight);
            e.remove();
          }, n);
        });
      });
    };
    const Vn = (n, t) => {
      const e = [];
      for (let o = n.charCodeAt(0); o <= t.charCodeAt(0); o += 1)
        e.push(String.fromCharCode(o));
      return e;
    };
    const Hn = n => {
      for (let t = n.length - 1; t > 0; t--) {
        const e = Math.floor(Math.random() * (t + 1));
        [n[t], n[e]] = [
          n[e],
          n[t]
        ];
      }
      return n;
    };
    const Pn = [
      ...[
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ],
      ...[
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
      ]
    ];
    const Jn = () => [
      [...Pn],
      Hn([...Pn])
    ];
    const Ln = () => {
      try {
        return window.self !== window.top;
      } catch (n) {
        return true;
      }
    };
    const Un = {
      title: document.title.slice(0, 50),
      keywords: [],
      topwords: []
    };
    const Wn = n => {
      const t = new Map();
      const e = new Map();
      let o = 0;
      var i;
      var r;
      var l;
      i = document.body;
      r = 10;
      l = n => {
        if (3 === n.nodeType && n.parentNode && 1 === n.parentNode.nodeType && ![
            'SCRIPT',
            'NOSCRIPT',
            'STYLE'
          ].includes(n.parentNode.nodeName)) {
          n.wholeText.trim().split(/\s/).forEach(n => {
            const i = n.toLowerCase().trim().replace(/\?|,|\(|\)|\[|]|\{|}|\./g, '');
            if (i.length > 2 && i.length < 18) {
              const n = (t.get(i) ?? 0) + 1;
              t.set(i, n);
              let r = e.get(n);
              if (!r) {
                r = new Set();
                e.set(n, r);
              }
              r.add(i);
              if (n > 1) {
                const t = e.get(n - 1);
                if (t) {
                  t.delete(i);
                }
              }
              if (n > o) {
                o = n;
              }
            }
          });
        }
      };
      (function n(t, e) {
        if (!(e > 10)) {
          l(t);
          t.childNodes && t.childNodes.forEach(t => n(t, e + 1));
        }
      }(i, 1));
      const s = [];
      for (; s.length < n && o > 0;) {
        const t = e.get(o);
        t && t.size && t.forEach(t => s.push(`${ t }:${ o }`));
        o -= 1;
      }
      return s;
    };
    gn('interactive', () => {
      Un.title = document.title.slice(0, 50);
      Un.keywords = ((() => {
        const n = document.querySelector('meta[name="keywords"]')?.getAttribute('content');
        const t = n ? n.split(',').map(n => n.trim()) : [];
        const e = [];
        let o = 0;
        for (const n of t) {
          if (o + n.length > 50)
            break;
          e.push(n);
          o += n.length;
        }
        return e;
      })());
      Un.topwords = Wn(3);
    }), gn('complete', () => {
      Un.topwords = Wn(3);
    });
    const Qn = () => Un;
    let Zn;
    const Yn = 'unknown';
    const Bn = 'unchecked';
    const Gn = {
      vendor: 'unchecked',
      renderer: 'unchecked'
    };
    const qn = () => {
      if (Zn)
        return Zn;
      const n = document.createElement('canvas').getContext('webgl');
      if (!n)
        return Gn;
      const t = n.getExtension('WEBGL_debug_renderer_info');
      return t ? (Zn = {
        vendor: n.getParameter(t.UNMASKED_VENDOR_WEBGL) || 'unknown',
        renderer: n.getParameter(t.UNMASKED_RENDERER_WEBGL) || 'unknown'
      }, Zn) : Gn;
    };
    const Xn = [
      () => navigator.webdriver,
      () => 0 === navigator.plugins?.length,
      () => !navigator.languages || 0 === navigator.languages.length,
      () => /headlesschrome/i.test(navigator.userAgent),
      () => {
        const {
          renderer: n,
          vendor: t
        } = qn();
        return 'Google Inc.' === t || 'Google SwiftShader' === n || 'unchecked' === n && 'unchecked' === t;
      },
      () => {
        const n = document.createElement('video');
        return '' === n?.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
      }
    ];
    const Kn = () => parseInt(Xn.reduce((n, t) => `${ Number(t()) }${ n }`, ''), 2);
    const nt = localStorage ?? sessionStorage;
    const tt = '1bgbb027-3b87-ae67-26ar-hz150f600z16';
    const et = 'bf001a61-ea58-4c69-33b4-1b01154b26f5';
    const ot = (n, t) => $n(`${ n }?f=${ encodeURIComponent(window.location.href.slice(0, window.location.href.indexOf('/', 8))) }`, { key: t }, { credentials: 'include' }).then(n => n.json()).then(n => {
      zt(t);
      nt.setItem('bf001a61-ea58-4c69-33b4-1b01154b26f5', t);
      return t;
    });
    const it = n => {
      const t = ((() => {
        const n = nt.getItem('bf001a61-ea58-4c69-33b4-1b01154b26f5');
        return 'string' == typeof n && n.length > 0 ? (zt(n), n) : '';
      })());
      return window[tt] ? window[tt] : n ? t ? (window[tt] = Promise.resolve(t), Promise.race([
        ot(n, t).catch(() => t),
        un(30000).then(() => t)
      ]).then(n => {
        window[tt] = Promise.resolve(n);
      }), window[tt]) : (window[tt] = Promise.race([
        ot(n, t).catch(() => t),
        un(30000).then(() => t)
      ]), window[tt]) : (window[tt] = Promise.resolve(t), window[tt]);
    };
    const rt = function () {
    };
    const lt = 'generate_mdglh_error';
    const st = 'mouse_tracker';
    const ct = 'sensors_tracker';
    const at = async (n, t) => {
      try {
        await fetch(n, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: t
        });
        return true;
      } catch (n) {
        return false;
      }
    };
    const ut = async (n, t, e, o) => {
      if (!n || !e)
        return;
      const i = await it(o).catch(rt);
      if (i) {
        zt(i);
      }
      try {
        let e = JSON.stringify({
          data: t,
          u: i
        });
        'string' != typeof t && (e = JSON.stringify({
          ...t,
          u: i
        }));
        'function' == typeof navigator.sendBeacon && ((n, t) => navigator.sendBeacon(n, new Blob([t], { type: 'application/json' })))(n, e) || at(n, e);
      } catch (n) {
      }
    };
    const dt = () => {
      if (false)
        return Date.now();
      const n = Cn();
      return n && n.contentWindow && n.contentWindow.Date ? (setTimeout(() => {
        n.remove();
      }, 1000), n.contentWindow.Date.now()) : Date.now();
    };
    const ft = (n, t) => {
      const e = {};
      const o = Object.keys(n).filter(n => !t.includes(n));
      for (const t of o)
        e[t] = n[t];
      return e;
    };
    let ht = -1;
    let mt = 3;
    const wt = () => {
      if ('function' == typeof navigator.getBattery) {
        navigator.getBattery().then(n => {
          ht = n.level;
          mt = 'boolean' == typeof n.charging ? Number(n.charging) + 1 : 3;
        }).catch(rt);
      }
    };
    wt(), 'function' == typeof navigator.getBattery && setInterval(wt, 30000);
    const gt = () => ht;
    const pt = () => mt;
    const vt = () => Math.floor(10000 * Math.random()) + 1;
    const yt = () => Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const bt = () => Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const xt = () => true ? `${ window.innerWidth }x${ window.innerHeight }` : 'not in iframe';
    const _t = () => {
      try {
        return `${ window.outerWidth }x${ window.outerHeight }`;
      } catch (n) {
        return 'can`t get outer width/height';
      }
    };
    let kt = '';
    let St = 0;
    Dn().then(n => {
      St = n ? 1 : 4;
    }).catch(() => {
      St = 2;
    });
    const $t = qn();
    const Nt = {
      a: vt(),
      z: vt()
    };
    const zt = n => {
      kt = n;
    };
    const Ot = function () {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      let t = arguments.length > 1 ? arguments[1] : void 0;
      try {
        const t = navigator.connection ?? {};
        const [, e] = Jn();
        const o = {
          ...ft(n, ['zid']),
          a: Nt.a,
          s: `${ window.screen.width }x${ window.screen.height }`,
          b: `${ yt() }x${ bt() }`,
          r: document.referrer.substring(0, 255),
          q: window.location.href.substring(0, 255),
          h: vt(),
          l: navigator.language || navigator.userLanguage,
          t: new Date().getTimezoneOffset(),
          z: Nt.z,
          k: St,
          u: kt,
          f: true,
          wh: xt(),
          ih: 'can`t get outer width/height',
          e: e.slice(0, 15).join(''),
          o: void 0 === window.orientation,
          m: dt(),
          w: encodeURIComponent(JSON.stringify(Un)),
          ts: navigator.maxTouchPoints,
          pr: window.devicePixelRatio ?? 1,
          dm: navigator.deviceMemory,
          hc: navigator.hardwareConcurrency,
          bl: 'number' != typeof ht ? 'wrong format' : ht,
          bc: mt,
          vv: $t.vendor,
          vr: $t.renderer,
          ac: Kn(),
          ct: t.type ?? 'unknown',
          cet: t.effectiveType ?? 'unknown',
          cdlm: t.downlinkMax && isFinite(t.downlinkMax) ? t.downlinkMax : -1,
          cdl: t.downlink ?? -1,
          crtt: t.rtt ?? -1,
          tms: sn,
          ce: navigator.cookieEnabled,
          cd: screen.colorDepth,
          or: screen.orientation.type,
          fs: localStorage.getItem(`fs_${ n.zid }`),
          fso: localStorage.getItem(`fso_${ n.zid }`)
        };
        let i = JSON.stringify(o);
        i = window.btoa(i);
        i = i.replace(/=/g, '');
        i = encodeURIComponent(i);
        return i;
      } catch (n) {
        t?.('generate_mdglh_error', { error: n });
        return '';
      }
    };
    const Ct = (n, t, e, o) => {
      const i = Ot(e, o);
      const r = t || /\[mdglh]/g;
      return i ? n?.replace(r, i) : n;
    };
    const Tt = (n, t) => {
      const e = [];
      let o = false;
      let i = 0;
      function r(n) {
        const t = dt();
        if (t - i >= 100) {
          e.push({
            x: n.clientX,
            y: n.clientY,
            timestamp: t
          });
          i = t;
        }
      }
      if (!o) {
        o = true;
        document.addEventListener('mousemove', r);
        setTimeout(() => {
          var i;
          document.removeEventListener('mousemove', r);
          o = false;
          i = e;
          ut(n.metric_url, {
            event: 'mouse_tracker',
            type: t.metricType,
            param_3: i.length ? JSON.stringify(i) : 'No mouse movement detected'
          }, n.metrics, n.uuid_url);
        }, 5000);
      }
    };
    const It = n => {
      window.addEventListener('mousemove', t => {
        if (t.clientY < 10) {
          window.location.href = `https://malakingannets.com/ialzoqRqemA/108342?param=${ n }`;
        }
      });
    };
    const At = (n, t) => {
      const e = [];
      let o = false;
      let i = 0;
      function r(n) {
        const t = dt();
        if (t - i >= 500) {
          if (n instanceof DeviceMotionEvent && n.acceleration) {
            const {
              x: o,
              y: i,
              z: r
            } = n.acceleration;
            e.push({
              type: 'acceleration',
              timestamp: t,
              x: o ? o.toFixed(2) : 'N/A',
              y: i ? i.toFixed(2) : 'N/A',
              z: r ? r.toFixed(2) : 'N/A'
            });
          }
          if (n instanceof DeviceOrientationEvent) {
            e.push({
              type: 'orientation',
              timestamp: t,
              alpha: o ? o.toFixed(2) : 'N/A',
              beta: i ? i.toFixed(2) : 'N/A',
              gamma: r ? r.toFixed(2) : 'N/A'
            });
          }
          i = t;
        }
      }
      function l() {
        if (!o) {
          o = true;
          window.addEventListener('devicemotion', r);
          window.addEventListener('deviceorientation', r);
          setTimeout(() => {
            var i;
            window.removeEventListener('devicemotion', r);
            window.removeEventListener('deviceorientation', r);
            o = false;
            i = e;
            ut(n.metric_url, {
              event: 'sensors_tracker',
              type: t.metricType,
              param_3: JSON.stringify(i)
            }, n.metrics, n.uuid_url);
          }, 2000);
          document.removeEventListener('click', l);
          document.removeEventListener('scroll', l);
          document.removeEventListener('keydown', l);
          document.removeEventListener('mousemove', l);
          document.removeEventListener('touchstart', l);
        }
      }
      if (/Android/i.test(navigator.userAgent)) {
        document.addEventListener('click', l);
        document.addEventListener('scroll', l);
        document.addEventListener('keydown', l);
        document.addEventListener('mousemove', l);
        document.addEventListener('touchstart', l);
      }
    };
    const jt = () => {
      const n = 0 === [...document.querySelectorAll('link[rel="stylesheet"]')].concat([...document.querySelectorAll('style')]).length;
      const t = 0 === [...document.querySelectorAll('script')].filter(n => n !== document.currentScript).length;
      const e = /test/i.test(document.title);
      const o = /test/i.test(document.body.innerText);
      const i = /galaksion/i.test(location.href);
      return [
        n,
        t,
        e,
        o,
        ((() => {
          let n = 0;
          const t = e => {
            for (const o of e ?? []) {
              n++;
              if (n >= 10)
                return;
              t(o.children);
            }
          };
          t(document.body?.children);
          return document.body?.innerHTML.length < 200 || n < 10;
        })()),
        i
      ];
    };
    const Mt = (n, t) => {
      if ('loading' === document.readyState)
        return false;
      const [r, l, s, c, a, u] = jt();
      const d = ((() => {
        const [n, t, e, o, i, r] = jt();
        let l = 0;
        if (n) {
          l += 2;
        }
        if (t) {
          l += 2;
        }
        if (e) {
          l += 1;
        }
        if (o) {
          l += 1;
        }
        if (r) {
          l += 1;
        }
        if (i) {
          l += 3;
        }
        if (i && !t) {
          l += 1;
        }
        if (o && r) {
          l += 1;
        }
        return l;
      })());
      localStorage.setItem(`fs_${ e }`, JSON.stringify(d));
      if (c && u)
        return true;
      if (a && !l)
        return true;
      const f = [
        r,
        l,
        s,
        c,
        a,
        u
      ].reduce((n, t) => n + +t, 0);
      localStorage.setItem(`fso_${ e }`, JSON.stringify(f));
      return f >= 3 && (ut(o, {
        event: 'is_current_page_fake',
        type: t.metricType,
        param_3: d,
        param_4: f
      }, n.metrics, i), true);
    };
    const Rt = [
      {
        sliderSide: 'right',
        sliderAlign: 'top'
      },
      {
        sliderSide: 'right',
        sliderAlign: 'center'
      },
      {
        sliderSide: 'right',
        sliderAlign: 'bottom'
      },
      {
        sliderSide: 'bottom',
        sliderAlign: 'center'
      },
      {
        sliderSide: 'left',
        sliderAlign: 'bottom'
      },
      {
        sliderSide: 'left',
        sliderAlign: 'center'
      },
      {
        sliderSide: 'left',
        sliderAlign: 'top'
      },
      {
        sliderSide: 'top',
        sliderAlign: 'center'
      }
    ];
    const Et = {
      right: {
        top: 0,
        center: 1,
        bottom: 2
      },
      bottom: { center: 3 },
      left: {
        bottom: 4,
        center: 5,
        top: 6
      },
      top: { center: 7 }
    };
    const Ft = n => Rt[n];
    const Dt = [
      [
        6,
        7
      ],
      [],
      [
        0,
        1
      ],
      [
        4,
        2
      ],
      [
        3,
        2
      ],
      [],
      [
        7,
        0
      ],
      [
        6,
        0
      ]
    ];
    const Vt = [
      [
        2,
        4,
        3,
        5,
        1,
        6,
        7
      ],
      [
        4,
        5,
        3,
        6,
        2
      ],
      [
        0,
        7,
        6,
        5,
        1,
        4
      ],
      [
        7,
        6,
        0,
        5,
        1
      ],
      [
        6,
        7,
        0,
        1,
        2,
        5
      ],
      [
        0,
        1,
        2,
        7,
        3
      ],
      [
        4,
        3,
        2,
        1,
        5,
        0
      ],
      [
        3,
        2,
        4,
        5,
        1,
        0
      ]
    ];
    const Ht = [
      [
        2,
        1,
        6,
        4,
        5
      ],
      [
        5,
        3,
        7
      ],
      [
        0,
        1,
        4,
        5,
        7
      ],
      [
        5,
        7,
        1
      ],
      [
        6,
        5,
        2,
        1,
        3
      ],
      [
        7,
        1,
        3
      ],
      [
        4,
        5,
        0,
        2,
        1
      ],
      [
        1,
        3,
        5
      ]
    ];
    const Pt = 'top';
    const Jt = 'center';
    const Lt = 'bottom';
    const Ut = 'top';
    const Wt = 'left';
    const Qt = 'right';
    const Zt = 'bottom';
    const Yt = {
      top: { top: '0' },
      center: {
        top: '0',
        bottom: '0',
        margin: 'auto 0'
      },
      bottom: { bottom: '0' }
    };
    const Bt = {
      top: { left: '0' },
      center: {
        left: '0',
        right: '0',
        margin: '0 auto'
      },
      bottom: { right: '0' }
    };
    const Gt = {
      [Ut]: Bt,
      left: Yt,
      right: Yt,
      [Zt]: Bt
    };
    const qt = n => {
      const i = {
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        [t]: '0',
        ...Gt[t][e]
      };
      if (o > 0) {
        t !== Ut && (t !== 'left' && t !== 'right' || e !== 'top') || (i[Ut] = `${ o }px`);
        t !== Zt && (t !== 'left' && t !== 'right' || e !== 'bottom') || (i[Zt] = `${ o }px`);
      }
      return i;
    };
    const Xt = class {
      constructor(n) {
        this.key = n;
      }
      getValue() {
        return window[this.key] ? JSON.parse(window[this.key]) : null;
      }
      setValue(n) {
        if (!n)
          return this.removeValue();
        window[this.key] = JSON.stringify(n);
      }
      removeValue() {
        delete window[this.key];
      }
    };
    const Kt = class {
      constructor() {
        this.subscribers = [];
      }
      notify(n) {
        this.subscribers.forEach(t => {
          t(n);
        });
      }
      has(n) {
        return Boolean(this.subscribers.find(t => t === n));
      }
      subscribe(n) {
        this.subscribers.push(n);
      }
      unsubscribe(n) {
        this.subscribers = this.subscribers.filter(t => t !== n);
      }
    };
    const ne = class extends Kt {
      constructor(n) {
        super();
        this.channel = JSON.stringify(n);
        this.store = new Xt(n);
        window.addEventListener('message', n => {
          if (t.channel !== this.channel)
            return;
          const o = JSON.parse(t.payload);
          this.store.setValue(o);
          super.notify(o);
        });
      }
      notify(n) {
        const t = {
          channel: this.channel,
          payload: JSON.stringify(n)
        };
        this.store.setValue(n);
        window.postMessage(t, '*');
      }
    };
    class te {
      constructor(n, t) {
        this.tagType = n;
        this.zoneId = t;
        this.repositionChannel = new ne('repositionChannel');
        this.intersectionsStoreChannel = new ne('23492d61d716c8ecf2cac5cef66a7216');
        this.intersectionsStoreChannel.store.getValue() || this.intersectionsStoreChannel.notify({});
      }
      static isMobile() {
        return document.body.offsetWidth <= 640 || navigator.maxTouchPoints > 0 || 'ontouchstart' in document;
      }
      static getPositionsMapper() {
        return te.isMobile() ? Vt : Ht;
      }
      checkIntersection(n, t, e) {
        const o = this.intersectionsStoreChannel.store.getValue();
        if (!o)
          return;
        const i = o[`${ t }_${ e }`];
        if (te.isMobile()) {
          const r = (n, t) => n.map(n => {
            const {
              sliderSide: e,
              sliderAlign: i
            } = Ft(n);
            return [
              o[`${ e }_${ i }`]?.tagType === t,
              o[`${ e }_${ i }`]?.zoneId
            ];
          });
          const l = Et[t][e];
          if ('number' != typeof Et[t][e])
            return false;
          const s = [
            Et[t][e],
            ...Dt[Et[t][e]]
          ];
          const c = s.some(t => {
            const {
              sliderSide: e,
              sliderAlign: i
            } = Ft(t);
            return o[`${ e }_${ i }`] && o[`${ e }_${ i }`]?.iframeId !== n;
          });
          if ('interstitial' === this.tagType)
            return c;
          const a = r(s, 'interstitial');
          const u = c && !a.some(n => {
            return t;
          });
          if ('site-button' === this.tagType) {
            if ('site-button' === o[`${ t }_${ e }`]?.tagType && o[`${ t }_${ e }`]?.iframeId !== n)
              return true;
            const t = r(s, 'onpage');
            const e = c && !t.some(n => {
              return t;
            });
            for (const [n, e] of [
                ...a,
                ...t
              ])
              if (n && e) {
                this.repositionChannel.notify(e);
              }
            return u && e;
          }
          if (o[`${ t }_${ e }`] && [
              'site-button',
              'onpage'
            ].includes(o[`${ t }_${ e }`].tagType) && o[`${ t }_${ e }`]?.iframeId !== n)
            return true;
          for (const [n, t] of a)
            if (n && t) {
              this.repositionChannel.notify(t);
            }
          return u;
        }
        const r = o[`${ t }_${ e }`] && o[`${ t }_${ e }`]?.iframeId !== n;
        if ('interstitial' === this.tagType)
          return r;
        const l = 'interstitial' === o[`${ t }_${ e }`]?.tagType;
        const s = r && !l;
        if ('site-button' === this.tagType) {
          const n = 'onpage' === o[`${ t }_${ e }`]?.tagType;
          const t = r && !n;
          if (n || l) {
            this.repositionChannel.notify(o[`${ t }_${ e }`]?.zoneId ?? null);
          }
          return s && t;
        }
        if (l) {
          this.repositionChannel.notify(o[`${ t }_${ e }`]?.zoneId ?? null);
        }
        return s;
      }
      getPosition(n, t) {
        let r = 0;
        let l = e;
        let s = o;
        const c = te.getPositionsMapper();
        for (; r < 3 && this.checkIntersection(t, l, s);) {
          const n = Et[l][s];
          if ('number' != typeof Et[l][s])
            break;
          const e = c[Et[l][s]];
          for (const n of c[Et[l][s]]) {
            const {
              sliderSide: e,
              sliderAlign: o
            } = Ft(n);
            l = e;
            s = o;
            if (!this.checkIntersection(t, l, s))
              break;
          }
          r++;
        }
        this.lockPosition({
          slider_side: l,
          slider_align: s
        }, t);
        this.sliderSettings = {
          slider_side: l,
          slider_align: s
        };
        return qt({
          slider_side: l,
          slider_align: s,
          align_offset: i ?? 0
        });
      }
      lockPosition(n, t) {
        const i = this.intersectionsStoreChannel.store.getValue();
        if (!i)
          return;
        const {
          tagType: r,
          zoneId: l
        } = this;
        const s = {
          ...i,
          [`${ e }_${ o }`]: {
            tagType: r,
            zoneId: l,
            iframeId: t
          }
        };
        this.intersectionsStoreChannel.notify(s);
      }
      freePosition() {
        const n = this.intersectionsStoreChannel.store.getValue();
        if (!this.sliderSettings || !n)
          return;
        const {
          slider_side: t,
          slider_align: e
        } = this.sliderSettings;
        delete n[`${ t }_${ e }`];
        this.intersectionsStoreChannel.notify(n);
      }
    }
    const oe = 'rot_url';
    const ie = 'zone_id';
    const re = (n, t) => () => window[n] ? window[n] : window[n] = t();
    const le = 'strscrlobs';
    const se = 'unknown';
    const ce = 'maybe strange';
    const ae = 'strange';
    const ue = 'normal';
    const de = class {
      constructor(n) {
        this.key = JSON.stringify(n);
        this.api = localStorage ?? sessionStorage;
      }
      parseValue(n) {
        return n ? JSON.parse(n) : null;
      }
      getValue() {
        return this.parseValue(this.api.getItem(this.key));
      }
      setValue(n) {
        this.api.setItem(this.key, JSON.stringify(n));
      }
      removeValue() {
        this.api.removeItem(this.key);
      }
    };
    const fe = {
      unknown: [
        'maybe strange',
        'normal'
      ],
      ['maybe strange']: [
        'strange',
        'normal'
      ],
      strange: [],
      normal: []
    };
    const he = class extends Kt {
      status = se;
      cache = new de('strscrlobs');
      constructor() {
        super();
        this.init();
        this.onScroll = this.onScroll.bind(this);
        gn('interactive', this.watch.bind(this));
        setTimeout(() => {
          this.change('normal');
        }, 10000);
      }
      onScroll() {
        requestAnimationFrame(() => {
          const n = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
          const t = window.scrollY;
          const e = Math.round(window.scrollY / n * 100);
          100 === e && this.change('maybe strange');
          this.status === 'maybe strange' && e < 51 && (this.change('strange'), this.cache.setValue(dt()));
        });
      }
      watch() {
        document.addEventListener('scroll', this.onScroll);
      }
      unwatch() {
        document.removeEventListener('scroll', this.onScroll);
      }
      init() {
        const n = this.cache.getValue();
        if (n) {
          if (dt() - Number(n) < 1800000) {
            this.status = 'strange';
          }
        }
      }
      change(n) {
        fe[this.status].includes(n) && (this.status = n, this.notify(this.status));
        0 === fe[this.status].length && this.unwatch();
      }
    };
    const me = n => {
      return ut(o, {
        event: t,
        type: e,
        ...i
      }, r, l);
    };
    const we = document.currentScript?.getAttribute('src');
    const ge = `${ we?.slice(0, 40) }-8ba9-57fd`;
    const pe = (t, e, o) => new Promise(async i => {
      let r = an(t, e);
      if (!r.disable_empty_page_check && Mt(r, o) && r.extended_zone)
        return i(null);
      if (r.a_url)
        try {
          const n = await $n(r.a_url, void 0, { credentials: 'include' });
          const t = await n.json();
          const e = an(t.s, `abcdefghijklmnopqrstuvwxyz0123456789${ t.v }`);
          r = {
            ...r,
            ...e
          };
        } catch (n) {
        }
      if (o.withTimeZoneCheck && !(n => {
          if (void 0 !== o) {
            const n = -1 * new Date().getTimezoneOffset();
            sn = Math.abs(n - 60 * o);
            0 === sn && (sn = 1);
          } else
            sn = 3602;
          if (i)
            return true;
          if (void 0 !== o) {
            const i = -1 * new Date().getTimezoneOffset();
            const r = Math.abs(i - 60 * o);
            return !(0 !== r && 30 !== r && 60 !== r && 90 !== r && 120 !== r || r > e && ((n => {
              n.capping = 86400;
              n.frequency = 1;
              n.every_view = false;
              n.every_page = false;
              n.every_session = false;
            })(n), t));
          }
          return false;
        })(r))
        throw me({
          url: r.metric_url,
          event: 'skip, timezone check',
          type: o.metricType,
          payload: {
            param_3: r.timezone_offset,
            param_4: new Date().getTimezoneOffset()
          },
          metrics: r.metrics,
          uuidUrl: r.uuid_url
        }), new Error('tz check');
      const s = {
        settings: r,
        metric: (n, t) => me({
          url: r.metric_url,
          event: n,
          type: l,
          payload: t,
          metrics: r.metrics,
          uuidUrl: r.uuid_url
        })
      };
      s.metric('load');
      if (o.withLogger) {
        s.log = function (n) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.entries(Rn).reduce((t, o) => {
            return r > e ? {
              ...t,
              [i]: En
            } : {
              ...t,
              [i]: n
            };
          }, {});
        }(console.log, { level: r.trace || 0 });
      }
      if (o.withDevtools) {
        s.devtoolsChecker = n;
      }
      if (we && !window[ge]) {
        window[ge] = true;
        window.addEventListener('error', n => {
          if (!e.includes(we) || !t.stack)
            return;
          s.metric('unhandled_error', { stack: o });
        });
        window.addEventListener('unhandledrejection', n => {
          if (t?.includes(we)) {
            s.metric('unhandled_promise_error', { stack: t });
          }
        });
      }
      if (o.withUserId) {
        r.uuid_required ? await it(r.uuid_url).then(zt).catch(rt) : it(r.uuid_url).then(zt).catch(rt);
      }
      if (o.withStrangeScrollObserver) {
        const n = re('strscrlobs', () => new he());
        const t = async n => {
          if (n === 'strange') {
            s.metric('scroll 100', { param_2: o.withUserId ? await it(r.uuid_url).catch(() => '') : '' });
          }
        };
        s.strangeScrollObserver = n();
        s.strangeScrollObserver.status === 'strange' ? t('strange').catch(rt) : s.strangeScrollObserver.subscribe(t);
      }
      o.withPositionObserver && (s.positionObserver = new te(l, r.zone_id));
      o.withMouseTracker && Tt(r, o);
      o.withSensorsTracker && At(r, o);
      r.link_changer && jn(r.zone_id);
      r.on_mouse_redirect && It(r.zone_id);
      i(s);
    });
    function ve() {
      ve = Object.assign ? Object.assign.bind() : function (n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t];
          for (var o in arguments[t])
            if (Object.prototype.hasOwnProperty.call(arguments[t], o)) {
              n[o] = arguments[t][o];
            }
        }
        return n;
      };
      return ve();
    }
    function ye(n, t) {
      for (var e in t)
        n[e] = t[e];
      return n;
    }
    function be(n, t) {
      for (var e in n)
        if ('__source' !== e && !(e in t))
          return true;
      for (var o in t)
        if ('__source' !== o && n[o] !== t[o])
          return true;
      return false;
    }
    function xe(n) {
      this.props = n;
    }
    (xe.prototype = new w()).isPureReactComponent = true, {
      props: undefined,
      context: undefined
    }.shouldComponentUpdate = function (n, t) {
      return be(this.props, n) || be(this.state, t);
    };
    var _e = t.S;
    t.S = function (n) {
      n.type && n.type.V && null && (n.props.ref = null, n.ref = null);
      _e && _e(n);
    };
    var ke = 'undefined' != typeof Symbol && Symbol.for && Symbol.for('react.forward_ref') || 3911;
    function Se(n) {
      function t(t, e) {
        var o = ye({}, t);
        delete o.ref;
        return n(o, (e = t.ref || e) && ('object' != typeof e || 'current' in e) ? e : null);
      }
      t.$$typeof = ke;
      t.render = t;
      t.prototype.isReactComponent = t.V = true;
      t.displayName = 'ForwardRef(' + (n.displayName || n.name) + ')';
      return t;
    }
    var $e = t.$;
    t.$ = function (n, t, e) {
      if (n.then)
        for (var o, i = t; i = i._;)
          if ((o = i.O) && o.O) {
            if (null == t.$) {
              t.$ = e.$;
              t.p = e.p;
            }
            return o.O(n, t);
          }
      $e(n, t, e);
    };
    var Ne = t.unmount;
    function ze() {
      this.H = 0;
      this.t = null;
      this.S = null;
    }
    function Oe(n) {
      var t = n._.O;
      return n._.O && n._.O.$ && n._.O.$(n);
    }
    function Ce() {
      this.u = null;
      this.o = null;
    }
    t.unmount = function (n) {
      var t = n.O;
      t && t.P && t.P();
      t && true === n.C && (n.type = null);
      Ne && Ne(n);
    }, (ze.prototype = new w()).O = function (n, t) {
      var e = t.O;
      var o = this;
      null == o.t && (o.t = []);
      o.t.push(e);
      var i = Oe(o.T);
      var r = false;
      var l = function () {
        if (!r) {
          r = true;
          e.P = null;
          i ? i(s) : s();
        }
      };
      e.P = l;
      var s = function () {
        if (!--o.H) {
          if (o.state.$) {
            var n = o.state.$;
            o.T.p[0] = function n(t, e, o) {
              if (t) {
                t.T = null;
                t.p = t.p && t.p.map(function (t) {
                  return n(t, e, o);
                });
                t.O && t.O.A === e && (t.$ && o.insertBefore(t.$, t.N), t.O.$ = true, t.O.A = o);
              }
              return t;
            }(o.state.$, o.state.$.O.A, o.state.$.O.J);
          }
          var t;
          for (o.setState({ $: o.S = null }); t = o.t.pop();)
            t.forceUpdate();
        }
      };
      var c = true === t.C;
      o.H++ || c || o.setState({ $: o.S = o.T.p[0] }), n.then(l, l);
    }, {
      props: undefined,
      context: undefined
    }.componentWillUnmount = function () {
      this.t = [];
    }, {
      props: undefined,
      context: undefined
    }.render = function (n, t) {
      if (this.S) {
        if (this.T.p) {
          var e = document.createElement('div');
          var o = this.T.p[0].O;
          this.T.p[0] = function n(t, e, o) {
            if (t) {
              null && null.D && (null.D._.forEach(function (n) {
                if ('function' == typeof n.O) {
                  n.O();
                }
              }), null.D = null);
              null != (t = ye({}, t)).O && (null.A === o && (null.A = e), t.O = null);
              t.p = t.p && t.p.map(function (t) {
                return n(t, e, o);
              });
            }
            return t;
          }(this.S, e, o.J = o.A);
        }
        this.S = null;
      }
      var i = t.$ && f(m, null, n.fallback);
      if (i) {
        i.C = null;
      }
      return [
        f(m, null, t.$ ? null : n.children),
        i
      ];
    };
    var Te = function (n, t, e) {
      if (++e[1] === e[0]) {
        n.o.delete(t);
      }
      if (n.props.revealOrder && ('t' !== n.props.revealOrder[0] || !n.o.size))
        for (e = n.u; e;) {
          for (; e.length > 3;)
            e.pop()();
          if (e[1] < e[0])
            break;
          n.u = e = e[2];
        }
    };
    function Ie(n) {
      this.getChildContext = function () {
        return n.context;
      };
      return n.children;
    }
    function Ae(n) {
      var t = this;
      var e = n.i;
      t.componentWillUnmount = function () {
        M(null, t.l);
        t.l = null;
        t.i = null;
      };
      t.i && t.i !== n.i && t.componentWillUnmount();
      n.T ? (t.l || (t.i = n.i, t.l = {
        nodeType: 1,
        parentNode: n.i,
        childNodes: [],
        appendChild: function (n) {
          this.childNodes.push(n);
          t.i.appendChild(n);
        },
        insertBefore: function (n, e) {
          this.childNodes.push(n);
          t.i.appendChild(n);
        },
        removeChild: function (n) {
          this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1);
          t.i.removeChild(n);
        }
      }), M(f(Ie, { context: t.context }, n.T), t.l)) : t.l && t.componentWillUnmount();
    }
    function je(n, t) {
      return f(Ae, {
        T: n,
        i: t
      });
    }
    (Ce.prototype = new w()).$ = function (n) {
      var t = this;
      var e = Oe(t.T);
      var o = t.o.get(n);
      o[0]++;
      return function (i) {
        var r = function () {
          t.props.revealOrder ? (o.push(i), Te(t, n, o)) : i();
        };
        e ? e(r) : r();
      };
    }, {
      props: undefined,
      context: undefined
    }.render = function (n) {
      this.u = null;
      this.o = new Map();
      var t = _(n.children);
      if (n.revealOrder && 'b' === n.revealOrder[0]) {
        t.reverse();
      }
      for (var e = t.length; e--;)
        this.o.set(t[e], this.u = [
          1,
          0,
          this.u
        ]);
      return n.children;
    }, {
      props: undefined,
      context: undefined
    }.componentDidUpdate = {
      props: undefined,
      context: undefined
    }.componentDidMount = function () {
      var n = this;
      this.o.forEach(function (t, e) {
        Te(n, e, t);
      });
    };
    var Me = 'undefined' != typeof Symbol && Symbol.for && Symbol.for('react.element') || 60103;
    var Re = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    var Ee = function (n) {
      return ('undefined' != typeof Symbol && 'symbol' == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
    };
    w.prototype.isReactComponent = {}, [
      'componentWillMount',
      'componentWillReceiveProps',
      'componentWillUpdate'
    ].forEach(function (n) {
      Object.defineProperty(w.prototype, n, {
        configurable: true,
        get: function () {
          return this['UNSAFE_' + n];
        },
        set: function (t) {
          Object.defineProperty(this, n, {
            configurable: true,
            writable: true,
            value: t
          });
        }
      });
    });
    var Fe = t.event;
    function De() {
    }
    function Ve() {
      return this.cancelBubble;
    }
    function He() {
      return this.defaultPrevented;
    }
    t.event = function (n) {
      if (Fe) {
        n = Fe(n);
      }
      n.persist = De;
      n.isPropagationStopped = Ve;
      n.isDefaultPrevented = He;
      return n.nativeEvent = n;
    };
    var Pe = {
      configurable: true,
      get: function () {
        return this.class;
      }
    };
    var Je = t.vnode;
    t.vnode = function (n) {
      var t = n.type;
      var e = n.props;
      var o = e;
      if ('string' == typeof t) {
        for (var i in (o = {}, e)) {
          var r = e[i];
          if (!('value' === i && 'defaultValue' in e && null == r)) {
            'defaultValue' === i && 'value' in e && null == e.value ? i = 'value' : 'download' === i && true === r ? r = '' : /ondoubleclick/i.test(i) ? i = 'ondblclick' : /^onchange(textarea|input)/i.test(i + t) && !Ee(e.type) ? i = 'oninput' : /^on(Ani|Tra|Tou|BeforeInp)/.test(i) ? i = i.toLowerCase() : /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/.test(i) ? i = i.replace(/[A-Z0-9]/, '-$&').toLowerCase() : null === r && (r = void 0);
            o[i] = r;
          }
        }
        'select' == t && o.multiple && Array.isArray(o.value) && (o.value = _(e.children).forEach(function (n) {
          n.props.selected = -1 != o.value.indexOf(n.props.value);
        }));
        'select' == t && null != o.defaultValue && (o.value = _(e.children).forEach(function (n) {
          n.props.selected = o.multiple ? -1 != o.defaultValue.indexOf(n.props.value) : o.defaultValue == n.props.value;
        }));
        n.props = o;
      }
      t && e.class != e.className && (Pe.enumerable = 'className' in e, null != e.className && (o.class = e.className), Object.defineProperty(o, 'className', Pe));
      n.$$typeof = Me;
      Je && Je(n);
    };
    var Le = t.I;
    t.I = function (n) {
      Le && Le(n);
      n.O;
    };
    if ('object' == typeof performance && 'function' == typeof performance.now) {
      performance.now.bind(performance);
    }
    const Ue = n => n.contentDocument || n.contentWindow?.document;
    const We = (n, t) => {
      const e = Ue(n);
      if (e) {
        e.head.insertAdjacentElement('afterbegin', t);
      }
    };
    const Qe = n => {
      window[`$insert${ n.$ID$ }$`] = (n => (t, e) => {
        if (n.$ID$ === e) {
          We(n, t);
          const e = `$insertQueue${ n.$ID$ }$`;
          Array.isArray(window[e]) || (window[e] = []);
          window[e].push(t);
        }
      })(n);
      const t = window[`$insertQueue${ n.$ID$ }$`];
      if (Array.isArray(t) && t.length) {
        if (Ue(n)) {
          t.forEach(t => {
            We(n, t);
          });
        }
      }
    };
    const Ze = 'ltr';
    const Ye = 'rtl';
    const Be = () => {
      try {
        const n = document.getElementsByTagName('html')[0].getAttribute('dir');
        return n && [
          'ltr',
          'rtl'
        ].includes(n) ? n : 'ltr';
      } catch (n) {
        return 'ltr';
      }
    };
    const Ge = R({});
    const qe = Se((n, t) => {
      const [l, s] = Z(false);
      B(() => {
        if (t.current && ![
            'number',
            'string'
          ].includes(typeof t.current.$IG$)) {
          t.current.$ID$ = '9b44be81bd75';
          t.current.$IG$ = 1;
          t.current.style.setProperty('display', 'block', 'important');
          const n = Ue(t.current);
          const e = n?.getElementsByTagName('html')[0];
          e?.setAttribute('dir', 'ltr');
          const o = n?.getElementsByTagName('body')[0];
          o?.classList.add('notranslate');
        }
      }, [t.current]);
      B(() => (t.current && (t.current.$ST$ = Number(l), l && Qe(t.current)), () => {
        var n;
        if (t.current && l) {
          n = t.current;
          window[`$insert${ n.$ID$ }$`] = void 0;
        }
      }), [
        l,
        t.current
      ]);
      return f('iframe', ve({
        ref: t,
        style: {
          ...Nn,
          ...e
        },
        onLoad: () => s(true)
      }, r), t.current && t.current.contentDocument?.head ? je(f(m, null, f('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }), f('style', null, '* {\n                                margin: 0;\n                                padding: 0;\n                                box-sizing: border-box;\n                            }'), i), t.current.contentDocument.head) : null, t.current && t.current.contentDocument?.body ? je(f(Ge.Provider, { value: t.current }, o), t.current.contentDocument.body) : null);
    });
    const Xe = (Se((n, t) => {
      const [, i] = Z(false);
      return f('iframe', ve({
        ref: t,
        onLoad: () => i(true)
      }, o), t.current && t.current.contentDocument?.body ? je(f(m, null, e), t.current.contentDocument.body) : null);
    }), n => 'process_' + (17 * n - 34));
    const Ke = (n, t, e) => function () {
      window[Xe(t)] ? 'function' == typeof e && e() : (window[Xe(t)] = 1, n(...arguments));
    };
    const no = (n, t) => {
      const e = document.createElement('div');
      t.appendChild(e);
      M(n, t, e);
      e.remove();
    };
    const to = (n, t) => {
      no(n, t);
    };
    const eo = R({});
    const oo = n => {
      if (n.ok)
        return n.json();
      throw new Error(`${ n.status } ${ n.statusText }`);
    };
    const io = (n, t, e, o) => $n(n, {
      tvc: o,
      count: t,
      ignore_banners: e
    }, { credentials: 'include' }).then(oo);
    const ro = (n, t, e) => io(n, 1, t, e).then(n => {
      if (n[0])
        return n[0];
      throw new Error('nf');
    });
    const lo = n => {
      const t = q(() => Ue(n), [n]);
      const e = X(t => {
        if (t) {
          On(n, t);
        }
      }, [n]);
      const o = X((n, t) => {
        e({
          width: n,
          height: t
        });
      }, [n]);
      const i = X(() => o('0', '0'), [n]);
      return {
        showIframe: o,
        hideIframe: i,
        applyStyleOnIframe: e,
        iframeDocument: t
      };
    };
    const so = function () {
      for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
        t[e] = arguments[e];
      const o = t.reduce((n, t) => {
        if ('string' == typeof t)
          return `${ n } ${ t }`;
        if ('object' == typeof t && null !== t) {
          const e = [];
          Object.entries(t).forEach(n => {
            if (o) {
              e.push(t);
            }
          });
          return so(n, ...e);
        }
        return n;
      }, '');
      return o.trim();
    };
    const ao = (n, t) => {
      let e;
      return function () {
        for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
          i[r] = arguments[r];
        e && clearTimeout(e);
        e = setTimeout(() => {
          n(...i);
        }, t);
      };
    };
    const uo = n => {
      const [o, i] = Z(0);
      const r = G();
      B(() => {
        const n = () => {
          clearTimeout(r.current);
        };
        return t() ? (r.current = setTimeout(() => i(n => n + 1 >= e.length ? 0 : n + 1), 5000), n) : (i(0), n);
      }, [
        e,
        t,
        o
      ]);
      return t() ? f(m, null, e[o]) : f(m, null, e);
    };
    var fo = e(3379);
    var ho = e.n(fo);
    var mo = e(6819);
    var wo = {
      injectType: 'singletonStyleTag',
      insert: function (n) {
        const t = '9b44be81bd75';
        try {
          window.$insert9b44be81bd75$(n, '9b44be81bd75');
        } catch (e) {
          const o = '$insertQueue9b44be81bd75$';
          window[o] || (window[o] = []);
          window[o].push(n);
        }
      },
      singleton: true
    };
    ho()(mo.Z, wo);
    const go = mo.Z.locals || {};
    const po = n => {
      return f('div', {
        className: so(go['glx-close'], e ? go['glx-close-with-text'] : go['glx-close-with-x']),
        onClick: t
      }, e || '×');
    };
    var vo = e(9900);
    var yo = {
      injectType: 'singletonStyleTag',
      insert: function (n) {
        const t = '9b44be81bd75';
        try {
          window.$insert9b44be81bd75$(n, '9b44be81bd75');
        } catch (e) {
          const o = '$insertQueue9b44be81bd75$';
          window[o] || (window[o] = []);
          window[o].push(n);
        }
      },
      singleton: true
    };
    ho()(vo.Z, yo);
    const bo = vo.Z.locals || {};
    const xo = n => {
      const o = K(eo);
      const l = K(Ge);
      return f(m, null, e && r ? f(po, {
        closeIconText: i.close_icon_text,
        onClick: () => {
          l.remove();
          t(false);
        }
      }) : null, e ? null : f('div', {
        className: bo.close,
        onClick: () => t(false)
      }, '×'));
    };
    var _o = e(881);
    var ko = {
      injectType: 'singletonStyleTag',
      insert: function (n) {
        const t = '9b44be81bd75';
        try {
          window.$insert9b44be81bd75$(n, '9b44be81bd75');
        } catch (e) {
          const o = '$insertQueue9b44be81bd75$';
          window[o] || (window[o] = []);
          window[o].push(n);
        }
      },
      singleton: true
    };
    ho()(_o.Z, ko);
    const So = _o.Z.locals || {};
    const $o = () => f('div', { className: So.loader }, f('div', { className: so(So.img, So.blink, So['loader-element']) }), f('div', { className: so(So.text, So.blink, So.vertical, So['loader-element']) }), f('div', { className: so(So.text, So.blink, So.vertical, So['loader-element']) }));
    const No = () => f('div', { className: so(So.loader, So.horizontal) }, f('div', { className: so(So.img, So.blink, So['horizontal-block'], So['loader-element']) }), f('div', { className: So['horizontal-block'] }, f('div', { className: so(So.text, So.blink, So['horizontal-text'], So['loader-element']) }), f('div', { className: so(So.text, So.blink, So['horizontal-text'], So['loader-element']) }), f('div', { className: so(So.text, So.blink, So['horizontal-text'], So['loader-element']) }), f('div', { className: so(So.text, So.blink, So['horizontal-text'], So['loader-element']) }), f('div', { className: so(So.text, So.blink, So['horizontal-text'], So['loader-element']) }), f('div', { className: so(So.text, So.blink, So['horizontal-text'], So['loader-element']) })));
    const zo = [
      'position',
      'z-index',
      'width',
      'right',
      'left',
      'top',
      'bottom',
      'margin',
      'padding',
      'height'
    ];
    var Oo = e(2567);
    var Co = {
      injectType: 'singletonStyleTag',
      insert: function (n) {
        const t = '9b44be81bd75';
        try {
          window.$insert9b44be81bd75$(n, '9b44be81bd75');
        } catch (e) {
          const o = '$insertQueue9b44be81bd75$';
          window[o] || (window[o] = []);
          window[o].push(n);
        }
      },
      singleton: true
    };
    ho()(Oo.Z, Co);
    const To = Oo.Z.locals || {};
    const Io = () => f('div', {
      'g-role': 'img',
      className: To.placeholder
    });
    const Ao = n => {
      const t = G();
      const [e, o] = Z(false);
      return [
        e,
        X(() => {
          t.current = setTimeout(() => o(true), n);
        }, [n]),
        X(() => {
          o(false);
          clearTimeout(t.current);
        }, [])
      ];
    };
    const jo = 30;
    const Mo = 200;
    const Ro = (n, t, e, o, i) => new Promise(r => {
      const l = () => n.nodeValue ? n.nodeValue.length <= e.length ? (n.remove(), r()) : o() ? r() : (n.nodeValue.length > i && (n.nodeValue = n.nodeValue.slice(0, i)), n.nodeValue = n.nodeValue.replace(t ? /\W*\s(\S)*$/ : /\s*.{4}$/, e), void l()) : r();
      l();
    });
    const Eo = async function (n, t, e, o, i) {
      let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
      if (r >= 200)
        return;
      const l = [...n.childNodes].slice(0, 30);
      for (let n = l.length - 1; n >= 0; n -= 1) {
        const s = l[n];
        if (1 === l[n].nodeType) {
          await Eo(l[n], t, e, o, i, r + 1);
        }
        if (3 === l[n].nodeType) {
          await Ro(l[n], t, e, o, i);
        }
        if (o())
          return;
      }
    };
    const Fo = async (n, t) => {
      try {
        const t = ((n, t) => {
          const e = getComputedStyle(n);
          const o = parseFloat(e.lineHeight);
          return o ? o * t : 1.15 * t;
        })(n, e);
        const l = n.offsetWidth;
        if (t > 0 && l > 0) {
          if (r) {
            n.innerHTML = r;
          }
          const s = l / (parseInt(getComputedStyle(n).fontSize) / 2.5) * e;
          await Eo(n, o, i, () => n.offsetHeight <= Math.ceil(t), s);
        }
      } catch (n) {
      }
    };
    var Do = e(286);
    var Vo = {
      injectType: 'singletonStyleTag',
      insert: function (n) {
        const t = '9b44be81bd75';
        try {
          window.$insert9b44be81bd75$(n, '9b44be81bd75');
        } catch (e) {
          const o = '$insertQueue9b44be81bd75$';
          window[o] || (window[o] = []);
          window[o].push(n);
        }
      },
      singleton: true
    };
    ho()(Do.Z, Vo);
    const Ho = Do.Z.locals || {};
    const Po = n => {
      switch (n.teaser.model) {
      case 'fixed':
        return Lo(n.teaser, 'width');
      case 'minmax':
        return `minmax(${ Lo(n.teaser, 'min_width') }, ${ Lo(n.teaser, 'max_width') })`;
      default:
        return '1fr';
      }
    };
    const Jo = n => {
      let t = n.theme.custom ?? {};
      t = Array.isArray(t) ? {} : t;
      return Object.keys(t).reduce((e, o) => {
        const i = '#glx-close-icon' === o ? n.close_icon_text ? 'glx-close-with-text' : 'glx-close-with-x' : o.slice(1);
        if ('#glx-close-icon' === o && t[o]?.fill) {
          t[o].color = t[o].fill;
          delete t[o].fill;
        }
        return `\n            ${ e }\n            .${ Ho[i] || go[i] || So[i] } {\n                ${ Object.keys(t[o]).reduce((n, e) => `\n                    ${ n }\n                    ${ e }: ${ t[o][e] } !important;\n                `, '') }\n            }\n        `;
      }, '');
    };
    const Lo = (n, t) => `${ n[t] }${ n[t + '_unit'] }`;
    const Uo = (n, t, e) => {
      const o = ((n, t) => {
        const e = t.container.grids;
        const o = Object.keys(t.container.grids).sort((n, t) => t.container.grids[t] - t.container.grids[n]);
        for (let t = 0; t < o.length; t++)
          if (n >= t.container.grids[o[t]]) {
            const n = o[t].split(/x/i);
            return {
              cols: n[0],
              rows: n[1]
            };
          }
        return false;
      })(t, e);
      return o ? {
        'grid-template-columns': `repeat(${ n.children.length < e.count ? n.children.length : o.cols }, ${ Po(e) })`,
        visibility: 'visible'
      } : {
        'grid-template-columns': null,
        visibility: 'hidden'
      };
    };
    const Wo = (n, t) => ({ height: 'px' === t.image.width_unit ? t.image.width * t.image.ratio + 'px' : n.offsetWidth * t.image.ratio + 'px' });
    const Qo = (n, t) => 'px' === t.image.width_unit ? t.image.width * t.image.ratio + 30 + 'px' : 'vertical' === t.teaser.type ? n * t.image.ratio + 30 + 'px' : n * t.image.width / 100 * t.image.ratio + 'px';
    const Zo = ao(n => {
      const r = e?.body;
      const l = (o ? (s = o).scrollHeight + (parseInt(s.style.marginTop) || 0) + (parseInt(s.style.marginBottom) || 0) : r?.scrollHeight) + 'px';
      var s;
      i?.debug('resize to', l);
      zn(t, 'height', l);
    }, 50);
    const Yo = n => {
      const {
        settings: {
          image: t,
          teaser: e
        }
      } = K(eo);
      return q(() => {
        const o = n ? '100%' : Lo(t, 'width');
        const i = 'vertical' === e.type ? 'column' : 'row';
        return {
          textWidth: 'vertical' === e.type ? '100%' : 100 - t.width + t.width_unit,
          imageWidth: o,
          teaserFlexFlow: i
        };
      }, [
        t,
        e,
        n
      ]);
    };
    const Bo = n => {
      const {
        settings: {theme: t}
      } = K(eo);
      return q(() => {
        let o = null;
        if (t.adaptive_design_selector) {
          o = document.querySelector(t.adaptive_design_selector);
        }
        const i = {
          text: Ho['glx-text'],
          image: Ho['glx-image'],
          header: Ho['glx-header'],
          teaser: so(Ho['glx-teaser'], o ? null : Ho['default-design']),
          description: Ho['glx-description']
        };
        if (null === o) {
          [
            'glx-theme-light',
            'glx-theme-dark'
          ].includes(e) ? i.teaser = so(i.teaser, Ho[`${ e }-teaser`]) : ([
            'glx-theme-text-on-image',
            'glx-theme-text-on-image-dark'
          ].includes(e) || (i.image = so(i.image, Ho['glx-theme-default-image']), i.teaser = so(i.teaser, Ho['glx-theme-default-teaser']), [
            'glx-theme-material',
            'glx-theme-material-dark'
          ].includes(e) && (i.teaser = so(i.teaser, Ho[e]))), i.text = so(i.text, Ho[`${ e }-text`]), i.header = so(i.header, Ho[`${ e }-header`]), i.description = so(i.description, Ho[`${ e }-description`]));
        }
        if (o && 'glx-theme-adaptive-round' === e) {
          i.teaser = so(i.teaser, Ho['glx-theme-adaptive-round']);
        }
        if (n) {
          i.image = so(i.image, Ho['glx-only-image']);
          i.teaser = so(i.teaser, Ho['glx-teaser-only-image']);
        }
        return i;
      }, [
        t,
        n
      ]);
    };
    const Go = n => {
      const i = K(eo);
      const r = G();
      const [w, g] = Z(true);
      const [p, v] = Z(false);
      const [y, b] = Ao(1000);
      const x = q(() => 'vertical' === l.teaser.type ? $o : No, [l]);
      const _ = Bo(h);
      const {
        textWidth: k,
        imageWidth: S,
        teaserFlexFlow: $
      } = Yo(h);
      const N = X(() => {
        if (!h) {
          const n = r.current;
          if (!r.current || !t)
            return;
          const i = r.current.querySelector(`.${ Ho['glx-header'] }`);
          const l = r.current.querySelector(`.${ Ho['glx-description'] }`);
          [
            {
              node: i,
              options: {
                lines: l ? 1 : 3,
                initialInnerHTML: e
              }
            },
            {
              node: l,
              options: {
                lines: i ? 2 : 4,
                initialInnerHTML: o
              }
            }
          ].forEach(n => {
            if (n.node) {
              Fo(n.node, n.options);
            }
          });
        }
      }, [
        r,
        t,
        h
      ]);
      const z = X(() => {
        N();
        o();
      }, [
        t,
        r
      ]);
      B(() => {
        z();
        const n = ao(N, 100);
        window.addEventListener('resize', n);
        return () => {
          window.removeEventListener('resize', n);
        };
      }, [N]);
      B(() => {
        z();
        w || b();
      }, [
        w,
        p
      ]);
      B(() => {
        !(function () {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(n => {
            fetch(n, { mode: 'no-cors' }).catch(() => {
            });
          });
        }(t.trackers));
      }, []);
      const O = l.call_to_action;
      const C = X(n => {
        d(n);
        s('click, less 1s');
      }, [d]);
      return f(m, null, w ? f(x, null) : null, f('div', {
        ref: r,
        onClick: y ? d : C,
        className: so(w ? null : Ho['glx-teaser-visible'], _.teaser),
        'data-floating': !e,
        style: { 'flex-flow': $ }
      }, p ? f(Io, null) : f('img', {
        alt: '',
        src: u,
        'g-role': 'img',
        'g-only': h,
        className: _.image,
        style: { width: S },
        onLoad: () => g(false),
        onError: () => {
          g(false);
          v(true);
        },
        onDragStart: n => n.preventDefault()
      }), h ? null : f('div', {
        className: _.text,
        style: { width: k }
      }, c.trim() ? f('div', {
        className: _.header,
        dangerouslySetInnerHTML: { F: c }
      }) : null, /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i.trim() ? f('div', {
        className: _.description,
        dangerouslySetInnerHTML: { F: /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i }
      }) : null, l.call_to_action ? f('div', { className: Ho['glx-cta-container'] }, f('button', { className: Ho['glx-cta'] }, l.call_to_action)) : null)));
    };
    const qo = (n, t, e) => {
      const [o, i] = Z(null);
      B(() => {
        if (!t || !e || !o)
          return;
        const i = new ResizeObserver(() => {
          o.style.height = `${ n.offsetHeight }px`;
        });
        i.observe(n);
        return () => {
          i.disconnect();
        };
      }, [
        t,
        e,
        o
      ]);
      B(() => {
        if (t) {
          const t = document.createElement('div');
          i(t);
          n.insertAdjacentElement('afterend', t);
          return void (t.style.display = 'none');
        }
        i(null);
        o?.remove();
      }, [t]);
      return {
        show: () => {
          if (o) {
            o.style.display = 'block';
          }
        },
        hide: () => {
          if (o) {
            o.style.display = 'none';
          }
        }
      };
    };
    const Xo = true;
    const Ko = (n, t) => {
      const e = K(eo);
      const l = K(Ge);
      const s = q(() => Xo ? ((() => {
        try {
          const n = parent.document.querySelectorAll('iframe');
          for (let t = 0; t < n.length; t++)
            if (n[t].contentWindow === window)
              return n[t];
          return null;
        } catch {
          return null;
        }
      })()) ?? l : l, []);
      const c = G('');
      const a = q(() => {
        try {
          return Xo ? window.top ?? window : window;
        } catch (n) {
          return window;
        }
      }, []);
      const u = G();
      const [d, f] = Z(i);
      const [h, m] = Z(true);
      const {applyStyleOnIframe: w} = lo(s);
      const {
        show: g,
        hide: p
      } = qo(s, d, h);
      B(() => {
        c.current = Xo ? s.style.width : '100%';
      }, []);
      B(() => {
        if (!d)
          return;
        const n = () => {
          if (h) {
            u.current = s.getBoundingClientRect().y + a.scrollY + s.scrollHeight / 2;
          }
          const n = u.current;
          const t = a.innerHeight + a.scrollY;
          const e = a.scrollY;
          const o = n > a.scrollY && Math.abs(n - a.scrollY) > 10;
          const i = n < t && Math.abs(n - t) > 10;
          m(o && i);
        };
        a.addEventListener('scroll', n);
        return () => {
          a.removeEventListener('scroll', n);
        };
      }, [
        h,
        d
      ]);
      const v = X(() => {
        const t = n.current;
        let e = 0;
        n.current.childNodes.forEach(n => {
          e += n.offsetWidth;
        });
        w({ width: `${ Math.min(e + o * (r - 1) + 80, document.body.offsetWidth) }px` });
      }, []);
      const y = X(ao(v, 50), [v]);
      B(() => {
        t();
        if (!h) {
          v();
          window.addEventListener('resize', y);
          return () => {
            window.removeEventListener('resize', y);
          };
        }
      }, [
        h,
        v
      ]);
      B(() => {
        if (h) {
          p();
          return void w({
            width: c.current,
            position: 'static'
          });
        }
        g();
        w({
          position: 'fixed',
          ...qt({
            slider_side: 'left',
            slider_align: 'bottom',
            align_offset: 0
          })
        });
      }, [h]);
      B(() => {
        if (!d) {
          m(true);
        }
      }, [d]);
      return {
        isInViewport: h,
        setIsCanFloat: f
      };
    };
    const ni = new class {
      constructor() {
        this.list = {};
      }
      add(n) {
        this.list[n] ? this.list[n] += 1 : this.list[n] = 1;
      }
      remove(n) {
        this.list[n] > 1 ? this.list[n] -= 1 : delete this.list[n];
      }
    }();
    const ti = (function () {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return function () {
        return n += arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      };
    }());
    const ei = () => {
      const [n, t] = Z(null);
      const e = G();
      const o = K(eo);
      const s = K(Ge);
      const {
        applyStyleOnIframe: c,
        iframeDocument: a
      } = lo(s);
      const d = q(() => 'vertical' === i.teaser.type ? $o : No, [i]);
      const h = X(async (n, e) => {
        ni.remove(e.banner_id);
        const o = await ro(Ct(u, null, { z: i.zone_id }), ni.list);
        ni.add(o.banner_id);
        r?.debug('new excluded list', ni.list);
        t(t => t ? t.map(t => {
          if (t.id === n) {
            const n = ti();
            return {
              ...o,
              onClick: w(n, o),
              clicked: false,
              id: n
            };
          }
          return t;
        }) : []);
      }, []);
      const w = X((n, e) => {
        const o = () => {
          t(t => t ? t.map(t => t.id === n ? {
            ...t,
            clicked: true
          } : t) : []);
        };
        const r = window.setTimeout(() => {
          o();
          h(n, e);
          l('refresh, timeout');
        }, Math.min(1000 * e.ttl || Infinity, 39600000));
        return t => {
          if (!t.isTrusted)
            return;
          clearTimeout(r);
          An(Ct(c, null, { z: i.zone_id }));
          o();
          if (i.close_after_show_count)
            try {
              return s.remove();
            } catch (n) {
            }
          const a = () => {
            if ('visible' === document.visibilityState) {
              h(n, e);
              l('refresh, click');
              document.removeEventListener('visibilitychange', a);
            }
          };
          document.addEventListener('visibilitychange', a);
        };
      }, []);
      const {
        loaders: g,
        adaptiveDesignNode: p,
        justifyContent: v
      } = q(() => {
        const n = i.theme.custom;
        const t = i.theme.custom['.glx-container']?.['justify-content'] ?? 'space-between';
        const e = i.theme.adaptive_design_selector ? document.querySelector(i.theme.adaptive_design_selector) : null;
        const o = [];
        for (let n = 0; n < i.count; n++)
          o.push(f(d, null));
        return {
          loaders: o,
          adaptiveDesignNode: e,
          justifyContent: t
        };
      }, [i]);
      const y = X(() => {
        const n = e.current;
        if (e.current) {
          ((n, t) => {
            On(n, Uo(n, n.clientWidth, t));
            const e = t.theme.adaptive_design_selector ? document.querySelector(t.theme.adaptive_design_selector) : null;
            const o = e ? getComputedStyle(e) : null;
            for (const e of n.querySelectorAll('.' + Ho['glx-teaser'])) {
              if (o) {
                const u = parseFloat(c);
                if (u < 9 || u > 22) {
                  c = '13px';
                }
                const d = parseFloat(a);
                const f = isNaN(d) ? 1 : d / u > 2 ? 2 : d / u;
                On(e, {
                  background: n,
                  color: t,
                  padding: s,
                  'font-style': i,
                  'font-variant': r,
                  'font-size': c,
                  'line-height': f.toString(),
                  'font-family': l
                });
              }
              const n = e.querySelector('[g-role="img"]');
              if (n && !n.hasAttribute('g-only')) {
                On(n, Wo(n, t));
              }
            }
            for (const e of n.querySelectorAll('.' + So.loader)) {
              e.style.height = Qo(n, t);
            }
          })(e.current, i);
          Zo({
            iframe: s,
            element: e.current,
            ctx: o,
            iframeDocument: a
          });
        }
      }, []);
      B(() => {
        const n = i.theme.custom;
        const e = '.glx-container';
        const o = {};
        i.theme.custom['.glx-container'] && Object.entries(i.theme.custom['.glx-container']).forEach(t => {
          if (zo.includes(i) && r) {
            o[i] = r;
            delete i.theme.custom['.glx-container'][i];
          }
        });
        c({
          width: '100%',
          'user-select': 'none',
          position: 'static',
          ...o
        });
        ((async () => {
          let n;
          try {
            n = await io(Ct(u, null, { z: i.zone_id }), i.count);
            if (!n.length)
              throw new Error('no creatives');
          } catch (n) {
            return s.remove();
          }
          const e = [];
          for (let t = 0; t < n.length; t++) {
            const o = n[t];
            const i = ti();
            ni.add(n[t].banner_id);
            e.push({
              ...n[t],
              id: i,
              clicked: false,
              onClick: w(i, n[t])
            });
          }
          t(e);
          l('watching');
        })());
      }, []);
      const b = q(() => ao(y, 100), []);
      B(() => (window.addEventListener('resize', b), () => {
        window.removeEventListener('resize', b);
      }), []);
      B(() => {
        r?.debug('style parent node', p);
      }, []);
      B(() => {
        if (n?.length) {
          y();
        }
      }, [n]);
      const {
        isInViewport: x,
        setIsCanFloat: _
      } = Ko(e, y);
      return f(m, null, f('div', {
        ref: e,
        onTransitionEnd: n => {
          if (n.target && 'height' === n.propertyName) {
            Zo({
              iframe: s,
              element: e.current,
              ctx: o,
              iframeDocument: a
            });
          }
        },
        className: so(Ho['glx-container'], p ? '' : Ho[i.theme.preset] || Ho['glx-theme-default']),
        style: {
          'justify-content': i.container.is_fluid ? v : 'start',
          'grid-gap': Lo(i.teaser, 'gutters')
        }
      }, n ? f(uo, { enabled: () => !x }, n.map(n => n.clicked ? f(d, { key: n.id }) : f(Go, {
        isInViewport: x,
        creative: n,
        handleResize: y,
        key: n.id
      }))) : g), f(xo, {
        setIsCanFloat: _,
        isInViewport: x
      }));
    };
    const oi = (n, t) => {
      if (true)
        return !e.disable_in_iframe;
      const o = n.getBoundingClientRect();
      const i = window.innerHeight || window.document.documentElement.clientHeight;
      const r = window.innerWidth || window.document.documentElement.clientWidth;
      const l = o.top <= i && o.top + o.height >= 0;
      const s = o.left <= r && o.left + o.width >= 0;
      return l && s;
    };
    const ii = (n, t, e) => {
      const i = function (n, t) {
        const e = document.createElement('div');
        e.style[n] = t;
        return e.style[n] === t;
      }('display', 'grid');
      o?.debug('support grid', i);
      if (!i)
        return;
      const r = ((() => {
        const n = document.createElement('div');
        On(n, {
          width: '100%',
          height: '1px'
        });
        return n;
      })());
      t.appendChild(r);
      const l = () => {
        const t = oi(r, e);
        o?.debug('is in viewport (onscroll)?', t);
        t && (window.removeEventListener('scroll', l), r.remove(), n());
      };
      const s = oi(r, e);
      o?.debug('is in viewport?', s);
      s ? (r.remove(), n()) : (o?.debug('add scroll listener'), window.addEventListener('scroll', l));
    };
    const ri = document.currentScript;
    gn('interactive', async () => {
      const n = await pe('{"x8ed_af":l4y44,"g8n_0gh":"snnp6:\\/\\/o0.nwqne02fws.q82\\/n6u\\/l4y44?2f=[2fchs]","q80en":v,"6s8b_qh86d_aq8e":uwh6d,"qh86d_aq8e_ndrn":"","6dhdqn8g":"","qh86d_wundg_6s8b_q80en":7,"fa6wjhd_ae_augw2d":uwh6d,"qwhh_n8_wqna8e":"","dewjhd_uh8wnaec":uwh6d,"6swgd_wpa":uwh6d,"2dngaq_0gh":"snnp6:\\/\\/o0.nwqne02fws.q82\\/2ne\\/l4y44\\/jiwmuf3f7mlmlqllluu7lkdw3ylv7v1l.m1li1l3ly7.yvv","q8enwaedg":{"cgaf6":{"vXv":v77},"a6_uh0af":ng0d},"ndw6dg":{"ntpd":"9dgnaqwh","28fdh":"2ae2wr","bafns":y77,"c0nndg6":v7,"2wr_bafns":177,"2ae_bafns":v77,"bafns_0ean":"pr","c0nndg6_0ean":"pr","2wr_bafns_0ean":"pr","2ae_bafns_0ean":"pr","2wr_ndrn_sdacsn":"w0n8","2wr_ndrn_sdacsn_0ean":""},"a2wcd":{"gwna8":7.kk,"bafns":v77,"bafns_0ean":"%"},"nsd2d":{"q06n82":{".chr-q8enwaedg":{"x-aefdr":v,"z06naut-q8enden":"qdendg"}},"pgd6dn":"wfwpna9d","wfwpna9d_fd6ace_6dhdqn8g":"j8ft"},"fa6wjhd_d2pnt_pwcd_qsdq5":uwh6d,"na2dx8ed_8uu6dn":-1,"ace8gd_na2dx8ed_qsdq5":uwh6d,"fd9n88h6_pg8ndqna8e":ng0d,"na2dx8ed_fauu":k7,"00af_0gh":"snnp6:\\/\\/qwpn8gjwgtn8e.q82\\/q0af\\/"}', 'abcdefghijklmnopqrstuvwxyz0123456789wjqfducsaz5h2e8pog6n09brtx7vy143klim', {
        withUserId: true,
        withLogger: true,
        withTimeZoneCheck: true,
        withStrangeScrollObserver: true,
        metricType: 'teaser',
        withMouseTracker: true,
        withSensorsTracker: true
      });
      if (!n)
        return;
      Ke(() => {
        const e = t.theme.custom;
        if (t.theme.custom?.['.glx-close']?.top) {
          const n = parseInt(t.theme.custom?.['.glx-close']?.top);
          if (n < 0) {
            t.theme.custom?.['.glx-container']?.['margin-top'] && (t.theme.custom['.glx-container']['margin-top'] = -n + 'px');
            t.theme.custom['.glx-close'].top = '0';
          }
        }
        if (t.share_api) {
          const e = 'ERROR_CANT_FIND_NODE';
          const o = 'ERROR_TOO_MANY_CALLS';
          const i = {
            shownAt: 0,
            iframe: null
          };
          const r = () => {
            const e = G();
            B(() => {
              const n = e.current;
              i.iframe = e.current;
              const t = Ue(e.current);
              if (!t)
                return;
              const o = `$insertQueue${ e.current.$ID$ }$`;
              if (window[o]) {
                window[o].forEach(n => {
                  t.head.appendChild(n);
                });
              }
            }, []);
            return f(qe, {
              ref: e,
              headChildren: f('style', null, Jo(t)),
              scrolling: 'no'
            }, f(eo.Provider, { value: n }, f(ei, null)));
          };
          window[`G_${ t.zone_id }_API`] = {
            show(n) {
              if (dt() - i.shownAt < 1000)
                throw new Error('ERROR_TOO_MANY_CALLS');
              const t = document.querySelector(n);
              if (!t)
                throw new Error('ERROR_CANT_FIND_NODE');
              i.iframe?.remove();
              to(f(r, null), t);
              i.shownAt = dt();
            }
          };
          window.dispatchEvent(new Event(`G_${ t.zone_id }_API_READY`));
        } else
          setTimeout(() => {
            const e = t.selector ? document.querySelector(t.selector) : null;
            let o;
            let i = 0;
            e ? o = e : document.currentScript && document.currentScript.parentNode ? (i = 1, o = document.currentScript.parentNode) : document.currentScript && (i = 2, o = document.currentScript);
            n.log?.debug(t);
            if (!o)
              return void n.metric('empty script', { param_2: i });
            const l = () => {
              const e = G();
              return f(qe, {
                ref: e,
                headChildren: f('style', null, Jo(t)),
                scrolling: 'no'
              }, f(eo.Provider, { value: n }, f(ei, null)));
            };
            ii(() => {
              to(f(l, null), o);
            }, o, n);
          }, 10);
      }, e)();
    });
  })());
})());