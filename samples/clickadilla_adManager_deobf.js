(() => {
  'use strict';
  var e = {
      866: (e, t) => {
        function n(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
          return r;
        }
        for (var r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_', o = new Uint8Array(256), i = 0; i < 64; i++)
          o['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charCodeAt(i)] = i;
        o[45] = 62, o[95] = 63;
        var a, c, s = Object.freeze({
            __proto__: null,
            encode: function (e) {
              for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_', n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '', o = new Uint8Array(e), i = o.length, a = '', c = 0; c < i; c += 3)
                a += t[o[c] >> 2], a += t[(3 & o[c]) << 4 | o[c + 1] >> 4], a += t[(15 & o[c + 1]) << 2 | o[c + 2] >> 6], a += t[63 & o[c + 2]];
              return i % 3 == 2 ? a = '' + n : i % 3 == 1 && (a = '' + n + n), a;
            },
            decode: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o, n = e.length, r = Math.floor(0.75 * e.length), i = 0;
              '=' === e[e.length - 1] && (r--, '=' === e[e.length - 2] && r--);
              for (var a = new Uint8Array(r), c = 0; c < e.length; c += 4) {
                var s = t[e.charCodeAt(c)], u = t[e.charCodeAt(c + 1)], l = t[e.charCodeAt(c + 2)], d = t[e.charCodeAt(c + 3)];
                a[i++] = t[e.charCodeAt(c)] << 2 | t[e.charCodeAt(c + 1)] >> 4, a[i++] = (15 & t[e.charCodeAt(c + 1)]) << 4 | t[e.charCodeAt(c + 2)] >> 2, a[i++] = (3 & t[e.charCodeAt(c + 2)]) << 6 | 63 & t[e.charCodeAt(c + 3)];
              }
              return a;
            }
          }), u = function (e) {
            if (Array.isArray(e))
              return n(e);
          }(a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=') || function (e) {
            if ('undefined' != typeof Symbol && null != e[Symbol.iterator] || null != e['@@iterator'])
              return Array.from(e);
          }('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=') || function (e, t) {
            if (e) {
              if ('string' == typeof e)
                return n(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0;
            }
          }('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=') || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
          }(), l = (c = {}, u.forEach(function (e, t) {
            return c[e] = t;
          }), c), d = /^(?:[A-Za-z\d+\\/]{4})*?(?:[A-Za-z\d+\\/]{2}(?:==)?|[A-Za-z\d+\\/]{3}=?)?$/, f = String.fromCharCode.bind(String), m = function (e) {
            for (var t, n, r, o, i = '', a = e.length % 3, c = 0; c < e.length;) {
              if ((n = e.charCodeAt(c++)) > 255 || (r = e.charCodeAt(c++)) > 255 || (o = e.charCodeAt(c++)) > 255)
                throw new TypeError('invalid character found');
              i += u[(t = n << 16 | r << 8 | o) >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t];
            }
            return a ? '' + '==='.substring(a) : i;
          }, h = function (e) {
            if (e = e.replace(/\s+/g, ''), !/^(?:[A-Za-z\d+\\/]{4})*?(?:[A-Za-z\d+\\/]{2}(?:==)?|[A-Za-z\d+\\/]{3}=?)?$/.test(e))
              throw new TypeError('malformed base64.');
            var t;
            e += '=='.slice(2 - (3 & e.length));
            for (var n, r, o = '', i = 0; i < e.length;)
              t = l[e.charAt(i++)] << 18 | l[e.charAt(i++)] << 12 | (n = l[e.charAt(i++)]) << 6 | (r = l[e.charAt(i++)]), o += 64 === n ? f(t >> 16 & 255) : 64 === r ? f(t >> 16 & 255, t >> 8 & 255) : f(t >> 16 & 255, t >> 8 & 255, 255 & t);
            return o;
          };
        t.cv = m;
      },
      793: (e, t) => {
        function n(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, r);
          }
          return n;
        }
        function r(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? n(Object(r), true).forEach(function (t) {
              a(e, t, r[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
          }
          return e;
        }
        function o(e) {
          return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
          }, o(e);
        }
        function i(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            t[n].enumerable = t[n].enumerable || false, t[n].configurable = true, 'value' in t[n] && (t[n].writable = true), Object.defineProperty(e, t[n].key, t[n]);
          }
        }
        function a(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n, e;
        }
        function c(e, t, n, r, o) {
          var i = new Error(e);
          return i.config = t, n && (i.code = n), i.request = r, i.response = o, i.isHttpError = true, i.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code
            };
          }, i;
        }
        function s(e, t) {
          var n;
          if (null != e)
            if ('object' !== o(e) && (e = [e]), n = e, '[object Array]' === Object.prototype.toString.call(n))
              for (var r = 0, i = e.length; r < i; r++)
                t.call(null, e[r], r, e);
            else
              for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e);
        }
        function u(e) {
          return new Promise(function (t, n) {
            var r, o, i = e.data, a = e.headers, u = new XMLHttpRequest(), l = (r = e.baseURL, o = e.url, r && !/^([a-z][a-z\d\\+\-\\.]*:)?\/\//i.test(o) ? function (e, t) {
                return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
              }(r, o) : o);
            if (u.open(e.method.toUpperCase(), function (e, t) {
                if (!t)
                  return e;
                var n = Object.keys(t).reduce(function (e, n, r, o) {
                  var i = ''.concat(e).concat(n, '=').concat(encodeURIComponent(t[n]));
                  return r !== o.length - 1 && (i += '&'), i;
                }, '');
                return ''.concat(e, '?').concat(n);
              }(l, e.params), true), u.timeout = e.timeout, u.onreadystatechange = function () {
                if (u && 4 === u.readyState && (0 !== u.status || u.responseURL && 0 === u.responseURL.indexOf('file:'))) {
                  var r = {
                    data: e.responseType && 'text' !== e.responseType ? u.response : u.responseText,
                    status: u.status,
                    statusText: u.statusText,
                    config: e,
                    request: u
                  };
                  !function (e, t, n) {
                    !n.status || n.status >= 200 && n.status < 300 ? e(n) : t(c('Request failed with status code ' + n.status, n.config, null, n.request, n));
                  }(t, n, r), u = null;
                }
              }, u.onabort = function () {
                u && (n(c('Request aborted', e, 'ECONNABORTED', u)), u = null);
              }, u.onerror = function () {
                n(c('Network Error', e, null, u)), u = null;
              }, u.ontimeout = function () {
                var t = 'timeout of '.concat(e.timeout, 'ms exceeded');
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(c(t, e, 'ECONNABORTED', u)), u = null;
              }, 'setRequestHeader' in u && s(e.headers, function (e, t) {
                void 0 === i && 'content-type' === t.toLowerCase() ? delete e.headers[t] : u.setRequestHeader(t, e);
              }), void 0 !== e.withCredentials && (u.withCredentials = !!e.withCredentials), e.responseType)
              try {
                u.responseType = e.responseType;
              } catch (t) {
                if ('json' !== e.responseType)
                  throw t;
              }
            i || (i = null), u.send(i);
          });
        }
        function l(e) {
          if ('string' == typeof e)
            try {
              e = JSON.parse(e);
            } catch (e) {
            }
          return e;
        }
        var d = new (function () {
          function e(t) {
            !function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            }(this, e), this.defaults = { timeout: 0 };
          }
          var t, n, a;
          return t = e, n = [
            {
              key: 'dispatchRequest',
              value: function (e) {
                var t;
                return null !== (t = e.data) && 'object' === o(t) && (e.headers || (e.headers = {}), e.headers['Content-Type'] = 'application/json;charset=utf-8', e.data = JSON.stringify(e.data)), u(e).then(function (e) {
                  return e.data = l(e.data), e;
                }, function (e) {
                  return e && e.response && (e.response.data = l(e.response.data)), Promise.reject(e);
                });
              }
            },
            {
              key: 'get',
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.dispatchRequest(r(r({}, t), {}, {
                  url: e,
                  method: 'get'
                }));
              }
            },
            {
              key: 'post',
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return this.dispatchRequest(r({}, {}, {
                  url: e,
                  method: 'post',
                  data: n.data ? n.data : t
                }));
              }
            }
          ], n && i(t.prototype, n), a && i(t, a), Object.defineProperty(t, 'prototype', { writable: false }), e;
        }())();
        t.M = d;
      },
      16: (e, t) => {
        function n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            t[n].enumerable = t[n].enumerable || false, t[n].configurable = true, 'value' in t[n] && (t[n].writable = true), Object.defineProperty(e, t[n].key, t[n]);
          }
        }
        var r = new (function () {
            function e() {
              !function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              }(this, e), this.state = {};
            }
            var t, r, o;
            return t = e, (r = [
              {
                key: 'set',
                value: function (e, t) {
                  this.state[e] = t;
                }
              },
              {
                key: 'get',
                value: function (e) {
                  return this.state[e] || null;
                }
              },
              {
                key: 'remove',
                value: function (e) {
                  delete this.state[e];
                }
              }
            ]) && n(t.prototype, r), o && n(t, o), Object.defineProperty(t, 'prototype', { writable: false }), e;
          }())(), o = {
            set: function (e, t) {
              return localStorage.setItem(e, t);
            },
            get: function (e) {
              return localStorage.getItem(e);
            },
            remove: function (e) {
              return localStorage.removeItem(e);
            }
          };
        try {
          o.set('__try', 1), o.get('__try'), o.remove('__try');
        } catch (e) {
          o = r;
        }
        var i = o;
        t.W = o;
      }
    }, t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o)
      return o.exports;
    var i = t[r] = { exports: {} };
    return e[r](i, i.exports, n), i.exports;
  }
  n.g = function () {
    if ('object' == typeof globalThis)
      return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window)
        return window;
    }
  }(), (() => {
    const e = {
      tagConfigUrl: 'https://na.nawpush.com/tags',
      version: '3.43.0',
      devModeQueryStringParameter: 'adm_is_dev',
      adManagerWindowNamespace: 'AdManager',
      helpersWindowNamespace: '_CAdM',
      overrideConfigWindowNamespace: '__adm_override',
      tagIdIdentifier: 'data-admpid',
      noAutostartIdentifier: 'data-admman',
      devMode: !window.location.search.includes('_adm_debug=1'),
      auctionUrl: 'https://ssp.zog.link/get/',
      initTrackingUrl: 'https://metricswpsh.com',
      subCookieName: 'source',
      subQueryStringKey1: 'promo',
      subQueryStringKey2: 'source',
      vastProxyAuctionRoute: '/a/',
      vastProxyWrappedUrlPath: '/c/',
      adManagerTrackingProxyPath: '/api/track'
    };
    function t(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        t[n].enumerable = t[n].enumerable || false, t[n].configurable = true, 'value' in t[n] && (t[n].writable = true), Object.defineProperty(e, t[n].key, t[n]);
      }
    }
    var o = function () {
      function e(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t(this, e), this.logPrefix = n, this.silentMode = r;
      }
      var n, o, i;
      return n = e, o = [
        {
          key: 'info',
          value: function () {
            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            !this.silentMode && (e = console).info.apply(e, [
              '%c [undefined] -',
              'color:cyan'
            ].concat(n));
          }
        },
        {
          key: 'warn',
          value: function () {
            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            !this.silentMode && (e = console).warn.apply(e, [
              '%c [undefined] -',
              'color:orange'
            ].concat(n));
          }
        },
        {
          key: 'error',
          value: function () {
            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            (e = console).error.apply(e, [
              '%c [undefined] -',
              'color:red'
            ].concat(n));
          }
        }
      ], o && r(n.prototype, o), i && r(n, i), Object.defineProperty(n, 'prototype', { writable: false }), e;
    }();
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }
      return n;
    }
    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(n), true).forEach(function (t) {
          u(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function c(e) {
      return c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      }, c(e);
    }
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        t[n].enumerable = t[n].enumerable || false, t[n].configurable = true, 'value' in t[n] && (t[n].writable = true), Object.defineProperty(e, t[n].key, t[n]);
      }
    }
    function u(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n, e;
    }
    function l(e, t, n, r, o) {
      var i = new Error(e);
      return i.config = t, n && (i.code = n), i.request = r, i.response = o, i.isHttpError = true, i.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      }, i;
    }
    function d(e, t) {
      var n;
      if (null != e)
        if ('object' !== c(e) && (e = [e]), n = e, '[object Array]' === Object.prototype.toString.call(n))
          for (var r = 0, o = e.length; r < o; r++)
            t.call(null, e[r], r, e);
        else
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
    }
    function f(e) {
      return new Promise(function (t, n) {
        var r, o, i = e.data, a = e.headers, c = new XMLHttpRequest(), s = (r = e.baseURL, o = e.url, r && !/^([a-z][a-z\d\\+\-\\.]*:)?\/\//i.test(o) ? function (e, t) {
            return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
          }(r, o) : o);
        if (c.open(e.method.toUpperCase(), function (e, t) {
            if (!t)
              return e;
            var n = Object.keys(t).reduce(function (e, n, r, o) {
              var i = ''.concat(e).concat(n, '=').concat(encodeURIComponent(t[n]));
              return r !== o.length - 1 && (i += '&'), i;
            }, '');
            return ''.concat(e, '?').concat(n);
          }(s, e.params), true), c.timeout = e.timeout, c.onreadystatechange = function () {
            if (c && 4 === c.readyState && (0 !== c.status || c.responseURL && 0 === c.responseURL.indexOf('file:'))) {
              var r = {
                data: e.responseType && 'text' !== e.responseType ? c.response : c.responseText,
                status: c.status,
                statusText: c.statusText,
                config: e,
                request: c
              };
              !function (e, t, n) {
                !n.status || n.status >= 200 && n.status < 300 ? e(n) : t(l('Request failed with status code ' + n.status, n.config, null, n.request, n));
              }(t, n, r), c = null;
            }
          }, c.onabort = function () {
            c && (n(l('Request aborted', e, 'ECONNABORTED', c)), c = null);
          }, c.onerror = function () {
            n(l('Network Error', e, null, c)), c = null;
          }, c.ontimeout = function () {
            var t = 'timeout of '.concat(e.timeout, 'ms exceeded');
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(l(t, e, 'ECONNABORTED', c)), c = null;
          }, 'setRequestHeader' in c && d(e.headers, function (e, t) {
            void 0 === i && 'content-type' === t.toLowerCase() ? delete e.headers[t] : c.setRequestHeader(t, e);
          }), void 0 !== e.withCredentials && (c.withCredentials = !!e.withCredentials), e.responseType)
          try {
            c.responseType = e.responseType;
          } catch (t) {
            if ('json' !== e.responseType)
              throw t;
          }
        i || (i = null), c.send(i);
      });
    }
    function m(e) {
      if ('string' == typeof e)
        try {
          e = JSON.parse(e);
        } catch (e) {
        }
      return e;
    }
    var h = new (function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.defaults = { timeout: 0 };
      }
      var t, n, r;
      return t = e, n = [
        {
          key: 'dispatchRequest',
          value: function (e) {
            var t;
            return null !== (t = e.data) && 'object' === c(t) && (e.headers || (e.headers = {}), e.headers['Content-Type'] = 'application/json;charset=utf-8', e.data = JSON.stringify(e.data)), f(e).then(function (e) {
              return e.data = m(e.data), e;
            }, function (e) {
              return e && e.response && (e.response.data = m(e.response.data)), Promise.reject(e);
            });
          }
        },
        {
          key: 'get',
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return this.dispatchRequest(a(a({}, t), {}, {
              url: e,
              method: 'get'
            }));
          }
        },
        {
          key: 'post',
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return this.dispatchRequest(a(a({}, n), {}, {
              url: e,
              method: 'post',
              data: n.data ? n.data : t
            }));
          }
        }
      ], n && s(t.prototype, n), r && s(t, r), Object.defineProperty(t, 'prototype', { writable: false }), e;
    }())();
    function p(e) {
      return p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      }, p(e);
    }
    function v(e) {
      return '[object Array]' === Object.prototype.toString.call(e);
    }
    function b(e) {
      return null !== e && 'object' === p(e);
    }
    function g(e) {
      if ('[object Object]' !== Object.prototype.toString.call(e))
        return false;
      var t = Object.getPrototypeOf(e);
      return null === t || t === Object.prototype;
    }
    function y(e, t) {
      if (null != e)
        if ('object' !== p(e) && (e = [e]), v(e))
          for (var n = 0, r = e.length; n < r; n++)
            t.call(null, e[n], n, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
    }
    function w() {
      var e = {};
      function t(t, n) {
        g(e[n]) && g(t) ? e[n] = w(e[n], t) : g(t) ? e[n] = w({}, t) : v(t) ? e[n] = t.slice() : e[n] = t;
      }
      for (var n = 0, r = arguments.length; n < r; n++)
        y(arguments[n], t);
      return e;
    }
    function k(e, t) {
      for (var n in t)
        e = e.replace(new RegExp(n, 'g'), t[n]);
      return e;
    }
    var S = function () {
      return S = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in t = arguments[n])
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }, S.apply(this, arguments);
    };
    function x(e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, c);
        }
        s((r = r.apply(e, t || [])).next());
      });
    }
    function L(e, t) {
      var n, r, o, i, a = {
          label: 0,
          sent: function () {
            if (1 & o[0])
              throw o[1];
            return o[1];
          },
          trys: [],
          ops: []
        };
      return i = {
        next: c(0),
        throw: c(1),
        return: c(2)
      }, 'function' == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;
      function c(i) {
        return function (c) {
          return function (i) {
            if (n)
              throw new TypeError('Generator is already executing.');
            for (; a;)
              try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
                  return o;
                switch (r = 0, o && (i = [
                    2 & i[0],
                    o.value
                  ]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return a.label++, {
                    value: i[1],
                    done: false
                  };
                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;
                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }
                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
                }
                i = t.call(e, a);
              } catch (e) {
                i = [
                  6,
                  e
                ], r = 0;
              } finally {
                n = o = 0;
              }
            if (5 & i[0])
              throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: true
            };
          }([
            i,
            c
          ]);
        };
      }
    }
    function C() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
      var r = Array(e), o = 0;
      for (t = 0; t < n; t++)
        for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++)
          r[o] = i[a];
      return r;
    }
    var A = '3.3.6';
    function j(e, t) {
      return new Promise(function (n) {
        return setTimeout(n, e, t);
      });
    }
    function P(e, t) {
      try {
        var n = e();
        (r = n) && 'function' == typeof r.then ? n.then(function (e) {
          return t(true, e);
        }, function (e) {
          return t(false, e);
        }) : t(true, n);
      } catch (e) {
        t(false, e);
      }
      var r;
    }
    function I(e, t, n) {
      return void 0 === n && (n = 16), x(this, void 0, void 0, function () {
        var r, o, i;
        return L(this, function (a) {
          switch (a.label) {
          case 0:
            r = Date.now(), o = 0, a.label = 1;
          case 1:
            return o < e.length ? (t(e[o], o), (i = Date.now()) >= r + n ? (r = i, [
              4,
              j(0)
            ]) : [
              3,
              3
            ]) : [
              3,
              4
            ];
          case 2:
            a.sent(), a.label = 3;
          case 3:
            return ++o, [
              3,
              1
            ];
          case 4:
            return [2];
          }
        });
      });
    }
    function V(e) {
      e.then(void 0, function () {
      });
    }
    function _(e, t) {
      e = [
        e[0] >>> 16,
        65535 & e[0],
        e[1] >>> 16,
        65535 & e[1]
      ], t = [
        t[0] >>> 16,
        65535 & t[0],
        t[1] >>> 16,
        65535 & t[1]
      ];
      var n = [
        0,
        0,
        0,
        0
      ];
      return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [
        n[0] << 16 | n[1],
        n[2] << 16 | n[3]
      ];
    }
    function O(e, t) {
      e = [
        e[0] >>> 16,
        65535 & e[0],
        e[1] >>> 16,
        65535 & e[1]
      ], t = [
        t[0] >>> 16,
        65535 & t[0],
        t[1] >>> 16,
        65535 & t[1]
      ];
      var n = [
        0,
        0,
        0,
        0
      ];
      return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [
        n[0] << 16 | n[1],
        n[2] << 16 | n[3]
      ];
    }
    function R(e, t) {
      return 32 === (t %= 64) ? [
        e[1],
        e[0]
      ] : t < 32 ? [
        e[0] << t | e[1] >>> 32 - t,
        e[1] << t | e[0] >>> 32 - t
      ] : (t -= 32, [
        e[1] << t | e[0] >>> 32 - t,
        e[0] << t | e[1] >>> 32 - t
      ]);
    }
    function M(e, t) {
      return 0 === (t %= 64) ? e : t < 32 ? [
        e[0] << t | e[1] >>> 32 - t,
        e[1] << t
      ] : [
        e[1] << t - 32,
        0
      ];
    }
    function W(e, t) {
      return [
        e[0] ^ t[0],
        e[1] ^ t[1]
      ];
    }
    function N(e) {
      return e = W(e, [
        0,
        e[0] >>> 1
      ]), e = W(e = O(e, [
        4283543511,
        3981806797
      ]), [
        0,
        e[0] >>> 1
      ]), e = W(e = O(e, [
        3301882366,
        444984403
      ]), [
        0,
        e[0] >>> 1
      ]);
    }
    function T(e) {
      return parseInt(e);
    }
    function F(e) {
      return parseFloat(e);
    }
    function Z(e, t) {
      return 'number' == typeof e && isNaN(e) ? t : e;
    }
    function E(e) {
      return e.reduce(function (e, t) {
        return e + (t ? 1 : 0);
      }, 0);
    }
    function X(e, t) {
      if (void 0 === t && (t = 1), Math.abs(t) >= 1)
        return Math.round(e / t) * t;
      var n = 1 / t;
      return Math.round(e * n) / n;
    }
    function D(e) {
      return e && 'object' == typeof e && 'message' in e ? e : { message: e };
    }
    function Y(e) {
      return 'function' != typeof e;
    }
    function H(e, t, n) {
      var r = Object.keys(e).filter(function (e) {
          return !function (e, t) {
            for (var n = 0, r = e.length; n < r; ++n)
              if (e[n] === t)
                return true;
            return false;
          }(n, e);
        }), o = Array(r.length);
      return I(r, function (n, r) {
        o[r] = function (e, t) {
          var n = new Promise(function (n) {
            var r = Date.now();
            P(e.bind(null, t), function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var o = Date.now() - r;
              if (!e[0])
                return n(function () {
                  return {
                    error: D(e[1]),
                    duration: o
                  };
                });
              var i = e[1];
              if (Y(e[1]))
                return n(function () {
                  return {
                    value: e[1],
                    duration: o
                  };
                });
              n(function () {
                return new Promise(function (e) {
                  var t = Date.now();
                  P(e[1], function () {
                    for (var n = [], r = 0; r < arguments.length; r++)
                      n[r] = arguments[r];
                    var i = o + Date.now() - t;
                    if (!n[0])
                      return e({
                        error: D(n[1]),
                        duration: i
                      });
                    e({
                      value: n[1],
                      duration: i
                    });
                  });
                });
              });
            });
          });
          return V(n), function () {
            return n.then(function (e) {
              return e();
            });
          };
        }(e[n], t);
      }), function () {
        return x(this, void 0, void 0, function () {
          var e, t, n, i, a, c;
          return L(this, function (s) {
            switch (s.label) {
            case 0:
              for (e = {}, t = 0, n = r; t < n.length; t++)
                i = n[t], e[i] = void 0;
              a = Array(r.length), c = function () {
                var t;
                return L(this, function (n) {
                  switch (n.label) {
                  case 0:
                    return t = true, [
                      4,
                      I(r, function (n, r) {
                        if (!a[r])
                          if (o[r]) {
                            var i = o[r]().then(function (t) {
                              return e[n] = t;
                            });
                            V(i), a[r] = i;
                          } else
                            t = false;
                      })
                    ];
                  case 1:
                    return n.sent(), t ? [
                      2,
                      'break'
                    ] : [
                      4,
                      j(1)
                    ];
                  case 2:
                    return n.sent(), [2];
                  }
                });
              }, s.label = 1;
            case 1:
              return [
                5,
                c()
              ];
            case 2:
              if ('break' === s.sent())
                return [
                  3,
                  4
                ];
              s.label = 3;
            case 3:
              return [
                3,
                1
              ];
            case 4:
              return [
                4,
                Promise.all(a)
              ];
            case 5:
              return s.sent(), [
                2,
                e
              ];
            }
          });
        });
      };
    }
    function G() {
      var e = window, t = navigator;
      return E([
        'MSCSSMatrix' in window,
        'msSetImmediate' in window,
        'msIndexedDB' in window,
        'msMaxTouchPoints' in navigator,
        'msPointerEnabled' in navigator
      ]) >= 4;
    }
    function J() {
      var e = window, t = navigator;
      return E([
        'webkitPersistentStorage' in navigator,
        'webkitTemporaryStorage' in navigator,
        0 === navigator.vendor.indexOf('Google'),
        'webkitResolveLocalFileSystemURL' in window,
        'BatteryManager' in window,
        'webkitMediaStream' in window,
        'webkitSpeechGrammar' in window
      ]) >= 5;
    }
    function z() {
      var e = window, t = navigator;
      return E([
        'ApplePayError' in window,
        'CSSPrimitiveValue' in window,
        'Counter' in window,
        0 === navigator.vendor.indexOf('Apple'),
        'getStorageUpdates' in navigator,
        'WebKitMediaKeys' in window
      ]) >= 4;
    }
    function U() {
      var e = window;
      return E([
        'safari' in window,
        !('DeviceMotionEvent' in window),
        !('ongestureend' in window),
        !('standalone' in navigator)
      ]) >= 3;
    }
    function B() {
      var e = document;
      return (document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen).call(document);
    }
    function Q() {
      var e = J(), t = function () {
          var e, t, n = window;
          return E([
            'buildID' in navigator,
            'MozAppearance' in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}),
            'onmozfullscreenchange' in window,
            'mozInnerScreenX' in window,
            'CSSMozDocumentRule' in window,
            'CanvasCaptureMediaStream' in window
          ]) >= 4;
        }();
      if (!e && !t)
        return false;
      var n = window;
      return E([
        'onorientationchange' in window,
        'orientation' in window,
        e && !('SharedWorker' in window),
        t && /android/i.test(navigator.appVersion)
      ]) >= 2;
    }
    function q(e) {
      var t = new Error(e);
      return t.name = e, t;
    }
    function K(e, t, n) {
      var r, o, i;
      return void 0 === n && (n = 50), x(this, void 0, void 0, function () {
        var a, c;
        return L(this, function (s) {
          switch (s.label) {
          case 0:
            a = document, s.label = 1;
          case 1:
            return a.body ? [
              3,
              3
            ] : [
              4,
              j(n)
            ];
          case 2:
            return s.sent(), [
              3,
              1
            ];
          case 3:
            c = a.createElement('iframe'), s.label = 4;
          case 4:
            return s.trys.push([
              4,
              ,
              10,
              11
            ]), [
              4,
              new Promise(function (e, n) {
                var r = false, o = function () {
                    r = true, e();
                  };
                c.onload = o, c.onerror = function (e) {
                  r = true, n(e);
                };
                var i = c.style;
                c.style.setProperty('display', 'block', 'important'), c.style.position = 'absolute', c.style.top = '0', c.style.left = '0', c.style.visibility = 'hidden', t && 'srcdoc' in c ? c.srcdoc = t : c.src = 'about:blank', a.body.appendChild(c);
                var s = function () {
                  var e, t;
                  r || ('complete' === (null === (t = null === (e = c.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? o() : setTimeout(s, 10));
                };
                s();
              })
            ];
          case 5:
            s.sent(), s.label = 6;
          case 6:
            return (null === (o = null === (r = c.contentWindow) || void 0 === r ? void 0 : r.document) || void 0 === o ? void 0 : o.body) ? [
              3,
              8
            ] : [
              4,
              j(n)
            ];
          case 7:
            return s.sent(), [
              3,
              6
            ];
          case 8:
            return [
              4,
              e(c, c.contentWindow)
            ];
          case 9:
            return [
              2,
              s.sent()
            ];
          case 10:
            return null === (i = c.parentNode) || void 0 === i || i.removeChild(c), [7];
          case 11:
            return [2];
          }
        });
      });
    }
    function $(e) {
      for (var t = function (e) {
            for (var t, n, r = "Unexpected syntax '" + e + "'", o = /^\s*([a-z-]*)(.*)$/i.exec(e), i = o[1] || void 0, a = {}, c = /([.:#][\w-]+|\[.+?\])/gi, s = function (e, t) {
                  a[e] = a[e] || [], a[e].push(t);
                };;) {
              var u = /([.:#][\w-]+|\[.+?\])/gi.exec(o[2]);
              if (!u)
                break;
              var l = u[0];
              switch (u[0][0]) {
              case '.':
                s('class', u[0].slice(1));
                break;
              case '#':
                s('id', u[0].slice(1));
                break;
              case '[':
                var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(u[0]);
                if (!d)
                  throw new Error(r);
                s(d[1], null !== (n = null !== (t = d[4]) && void 0 !== t ? t : d[5]) && void 0 !== n ? n : '');
                break;
              default:
                throw new Error(r);
              }
            }
            return [
              i,
              a
            ];
          }(e), n = t[0], r = t[1], o = document.createElement(null != n ? n : 'div'), i = 0, a = Object.keys(r); i < a.length; i++) {
        var c = a[i], s = r[a[i]].join(' ');
        'style' === a[i] ? ee(o.style, s) : o.setAttribute(a[i], s);
      }
      return o;
    }
    function ee(e, t) {
      for (var n = 0, r = t.split(';'); n < r.length; n++) {
        var o = r[n], i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(r[n]);
        if (i) {
          var a = i[1], c = i[2], s = i[4];
          e.setProperty(i[1], i[2], i[4] || '');
        }
      }
    }
    var te = [
        'monospace',
        'sans-serif',
        'serif'
      ], ne = [
        'sans-serif-thin',
        'ARNO PRO',
        'Agency FB',
        'Arabic Typesetting',
        'Arial Unicode MS',
        'AvantGarde Bk BT',
        'BankGothic Md BT',
        'Batang',
        'Bitstream Vera Sans Mono',
        'Calibri',
        'Century',
        'Century Gothic',
        'Clarendon',
        'EUROSTILE',
        'Franklin Gothic',
        'Futura Bk BT',
        'Futura Md BT',
        'GOTHAM',
        'Gill Sans',
        'HELV',
        'Haettenschweiler',
        'Helvetica Neue',
        'Humanst521 BT',
        'Leelawadee',
        'Letter Gothic',
        'Levenim MT',
        'Lucida Bright',
        'Lucida Sans',
        'Menlo',
        'MS Mincho',
        'MS Outlook',
        'MS Reference Specialty',
        'MS UI Gothic',
        'MT Extra',
        'MYRIAD PRO',
        'Marlett',
        'Meiryo UI',
        'Microsoft Uighur',
        'Minion Pro',
        'Monotype Corsiva',
        'PMingLiU',
        'Pristina',
        'SCRIPTINA',
        'Segoe UI Light',
        'Serifa',
        'SimHei',
        'Small Fonts',
        'Staccato222 BT',
        'TRAJAN PRO',
        'Univers CE 55 Medium',
        'Vrinda',
        'ZWAdobeF'
      ];
    function re(e) {
      return e.toDataURL();
    }
    var oe, ie;
    function ae() {
      var e = this;
      return function () {
        if (void 0 === ie) {
          var e = function () {
            var t = ce();
            se(t) ? ie = setTimeout(e, 2500) : (oe = t, ie = void 0);
          };
          e();
        }
      }(), function () {
        return x(e, void 0, void 0, function () {
          var e;
          return L(this, function (t) {
            switch (2) {
            case 0:
              return se(e = ce()) ? oe ? [
                2,
                C(oe)
              ] : (n = document).fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement ? [
                4,
                B()
              ] : [
                3,
                2
              ] : [
                3,
                2
              ];
            case 1:
              t.sent(), e = ce(), t.label = 2;
            case 2:
              return se(e) || (oe = e), [
                2,
                e
              ];
            }
            var n;
          });
        });
      };
    }
    function ce() {
      var e = screen;
      return [
        Z(parseFloat(screen.availTop), null),
        Z(parseFloat(screen.width) - parseFloat(screen.availWidth) - Z(parseFloat(screen.availLeft), 0), null),
        Z(parseFloat(screen.height) - parseFloat(screen.availHeight) - Z(parseFloat(screen.availTop), 0), null),
        Z(parseFloat(screen.availLeft), null)
      ];
    }
    function se(e) {
      for (var t = 0; t < 4; ++t)
        if (e[t])
          return false;
      return true;
    }
    function ue(e) {
      var t;
      return x(this, void 0, void 0, function () {
        var n, r, o, i, a, c, s;
        return L(this, function (u) {
          switch (1) {
          case 0:
            for (n = document, r = n.createElement('div'), o = new Array(e.length), i = {}, le(r), s = 0; s < e.length; ++s)
              a = $(e[s]), le(c = n.createElement('div')), c.appendChild(a), r.appendChild(c), o[s] = a;
            u.label = 1;
          case 1:
            return n.body ? [
              3,
              3
            ] : [
              4,
              j(50)
            ];
          case 2:
            return u.sent(), [
              3,
              1
            ];
          case 3:
            n.body.appendChild(r);
            try {
              for (s = 0; s < e.length; ++s)
                o[s].offsetParent || (i[e[s]] = true);
            } finally {
              null === (t = r.parentNode) || void 0 === t || t.removeChild(r);
            }
            return [
              2,
              i
            ];
          }
        });
      });
    }
    function le(e) {
      e.style.setProperty('display', 'block', 'important');
    }
    function de(e) {
      return matchMedia('(inverted-colors: ' + e + ')').matches;
    }
    function fe(e) {
      return matchMedia('(forced-colors: ' + e + ')').matches;
    }
    function me(e) {
      return matchMedia('(prefers-contrast: ' + e + ')').matches;
    }
    function he(e) {
      return matchMedia('(prefers-reduced-motion: ' + e + ')').matches;
    }
    function pe(e) {
      return matchMedia('(dynamic-range: ' + e + ')').matches;
    }
    var ve = Math, be = function () {
        return 0;
      };
    var ge = {
      default: [],
      apple: [{ font: '-apple-system-body' }],
      serif: [{ fontFamily: 'serif' }],
      sans: [{ fontFamily: 'sans-serif' }],
      mono: [{ fontFamily: 'monospace' }],
      min: [{ fontSize: '1px' }],
      system: [{ fontFamily: 'system-ui' }]
    };
    var ye = {
      fonts: function () {
        return K(function (e, t) {
          var n = t.document, r = t.document.body;
          t.document.body.style.fontSize = '48px';
          var o = t.document.createElement('div'), i = {}, a = {}, c = function (e) {
              var t = t.document.createElement('span'), r = t.style;
              return t.style.position = 'absolute', t.style.top = '0', t.style.left = '0', t.style.fontFamily = e, t.textContent = 'mmMwWLliI0O&1', o.appendChild(t), t;
            }, s = te.map(c), u = function () {
              for (var e = {}, t = function (t) {
                    e[t] = te.map(function (e) {
                      return function (e, t) {
                        return c("'" + e + "'," + t);
                      }(t, e);
                    });
                  }, n = 0, r = ne; n < r.length; n++) {
                t(r[n]);
              }
              return e;
            }();
          t.document.body.appendChild(o);
          for (var l = 0; l < te.length; l++)
            i[te[l]] = s[l].offsetWidth, a[te[l]] = s[l].offsetHeight;
          return ne.filter(function (e) {
            return t = u[e], te.some(function (e, n) {
              return t[n].offsetWidth !== i[e] || t[n].offsetHeight !== a[e];
            });
            var t;
          });
        });
      },
      domBlockers: function (e) {
        var t = (void 0 === e ? {} : e).debug;
        return x(this, void 0, void 0, function () {
          var e, n, r, o, i;
          return L(this, function (a) {
            switch (a.label) {
            case 0:
              return z() || Q() ? (c = atob, e = {
                abpIndo: [
                  '#Iklan-Melayang',
                  '#Kolom-Iklan-728',
                  '#SidebarIklan-wrapper',
                  c('YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld'),
                  '[title="ALIENBOLA" i]'
                ],
                abpvn: [
                  '#quangcaomb',
                  c('Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ='),
                  '.quangcao',
                  c('W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=='),
                  c('W2hyZWZePSJodHRwczovL3piZXQudm4vIl0=')
                ],
                adBlockFinland: [
                  '.mainostila',
                  c('LnNwb25zb3JpdA=='),
                  '.ylamainos',
                  c('YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd'),
                  c('YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd')
                ],
                adBlockPersian: [
                  '#navbar_notice_50',
                  '.kadr',
                  'TABLE[width="140px"]',
                  '#divAgahi',
                  c('I2FkMl9pbmxpbmU=')
                ],
                adBlockWarningRemoval: [
                  '#adblock-honeypot',
                  '.adblocker-root',
                  '.wp_adblock_detect',
                  c('LmhlYWRlci1ibG9ja2VkLWFk'),
                  c('I2FkX2Jsb2NrZXI=')
                ],
                adGuardAnnoyances: [
                  'amp-embed[type="zen"]',
                  '.hs-sosyal',
                  '#cookieconsentdiv',
                  'div[class^="app_gdpr"]',
                  '.as-oil'
                ],
                adGuardBase: [
                  '.BetterJsPopOverlay',
                  c('I2FkXzMwMFgyNTA='),
                  c('I2Jhbm5lcmZsb2F0MjI='),
                  c('I2FkLWJhbm5lcg=='),
                  c('I2NhbXBhaWduLWJhbm5lcg==')
                ],
                adGuardChinese: [
                  c('LlppX2FkX2FfSA=='),
                  c('YVtocmVmKj0iL29kMDA1LmNvbSJd'),
                  c('YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd'),
                  '.qq_nr_lad',
                  '#widget-quan'
                ],
                adGuardFrench: [
                  c('I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr'),
                  '#pavePub',
                  c('LmFkLWRlc2t0b3AtcmVjdGFuZ2xl'),
                  '.mobile_adhesion',
                  '.widgetadv'
                ],
                adGuardGerman: [
                  c('LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=='),
                  c('LmJveHN0YXJ0d2VyYnVuZw=='),
                  c('LndlcmJ1bmcz'),
                  c('YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0='),
                  c('YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0=')
                ],
                adGuardJapanese: [
                  '#kauli_yad_1',
                  c('YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0='),
                  c('Ll9wb3BJbl9pbmZpbml0ZV9hZA=='),
                  c('LmFkZ29vZ2xl'),
                  c('LmFkX3JlZ3VsYXIz')
                ],
                adGuardMobile: [
                  c('YW1wLWF1dG8tYWRz'),
                  c('LmFtcF9hZA=='),
                  'amp-embed[type="24smi"]',
                  '#mgid_iframe1',
                  c('I2FkX2ludmlld19hcmVh')
                ],
                adGuardRussian: [
                  c('YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0='),
                  c('LnJlY2xhbWE='),
                  'div[id^="smi2adblock"]',
                  c('ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd'),
                  c('I2FkX3NxdWFyZQ==')
                ],
                adGuardSocial: [
                  c('YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0='),
                  c('YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0='),
                  '.etsy-tweet',
                  '#inlineShare',
                  '.popup-social'
                ],
                adGuardSpanishPortuguese: [
                  '#barraPublicidade',
                  '#Publicidade',
                  '#publiEspecial',
                  '#queTooltip',
                  c('W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0=')
                ],
                adGuardTrackingProtection: [
                  '#qoo-counter',
                  c('YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=='),
                  c('YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0='),
                  c('YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=='),
                  '#top100counter'
                ],
                adGuardTurkish: [
                  '#backkapat',
                  c('I3Jla2xhbWk='),
                  c('YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0='),
                  c('YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd'),
                  c('YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==')
                ],
                bulgarian: [
                  c('dGQjZnJlZW5ldF90YWJsZV9hZHM='),
                  '#ea_intext_div',
                  '.lapni-pop-over',
                  '#xenium_hot_offers',
                  c('I25ld0Fk')
                ],
                easyList: [
                  c('I0FEX0NPTlRST0xfMjg='),
                  c('LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy'),
                  '.universalboxADVBOX03',
                  c('LmFkdmVydGlzZW1lbnQtNzI4eDkw'),
                  c('LnNxdWFyZV9hZHM=')
                ],
                easyListChina: [
                  c('YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0='),
                  c('LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=='),
                  c('LmZyb250cGFnZUFkdk0='),
                  '#taotaole',
                  '#aafoot.top_box'
                ],
                easyListCookie: [
                  '#AdaCompliance.app-notice',
                  '.text-center.rgpd',
                  '.panel--cookie',
                  '.js-cookies-andromeda',
                  '.elxtr-consent'
                ],
                easyListCzechSlovak: [
                  '#onlajny-stickers',
                  c('I3Jla2xhbW5pLWJveA=='),
                  c('LnJla2xhbWEtbWVnYWJvYXJk'),
                  '.sklik',
                  c('W2lkXj0ic2tsaWtSZWtsYW1hIl0=')
                ],
                easyListDutch: [
                  c('I2FkdmVydGVudGll'),
                  c('I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=='),
                  '.adstekst',
                  c('YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0='),
                  '#semilo-lrectangle'
                ],
                easyListGermany: [
                  c('I0FkX1dpbjJkYXk='),
                  c('I3dlcmJ1bmdzYm94MzAw'),
                  c('YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd'),
                  c('I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu'),
                  c('YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0=')
                ],
                easyListItaly: [
                  c('LmJveF9hZHZfYW5udW5jaQ=='),
                  '.sb-box-pubbliredazionale',
                  c('YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd'),
                  c('YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd'),
                  c('YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==')
                ],
                easyListLithuania: [
                  c('LnJla2xhbW9zX3RhcnBhcw=='),
                  c('LnJla2xhbW9zX251b3JvZG9z'),
                  c('aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd'),
                  c('aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd'),
                  c('aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd')
                ],
                estonian: [c('QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==')],
                fanboyAnnoyances: [
                  '#feedback-tab',
                  '#taboola-below-article',
                  '.feedburnerFeedBlock',
                  '.widget-feedburner-counter',
                  '[title="Subscribe to our blog"]'
                ],
                fanboyAntiFacebook: ['.util-bar-module-firefly-visible'],
                fanboyEnhancedTrackers: [
                  '.open.pushModal',
                  '#issuem-leaky-paywall-articles-zero-remaining-nag',
                  '#sovrn_container',
                  'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
                  '.BlockNag__Card'
                ],
                fanboySocial: [
                  '.td-tags-and-social-wrapper-box',
                  '.twitterContainer',
                  '.youtube-social',
                  'a[title^="Like us on Facebook"]',
                  'img[alt^="Share on Digg"]'
                ],
                frellwitSwedish: [
                  c('YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=='),
                  c('YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=='),
                  'article.category-samarbete',
                  c('ZGl2LmhvbGlkQWRz'),
                  'ul.adsmodern'
                ],
                greekAdBlock: [
                  c('QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd'),
                  c('QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=='),
                  c('QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd'),
                  'DIV.agores300',
                  'TABLE.advright'
                ],
                hungarian: [
                  '#cemp_doboz',
                  '.optimonk-iframe-container',
                  c('LmFkX19tYWlu'),
                  c('W2NsYXNzKj0iR29vZ2xlQWRzIl0='),
                  '#hirdetesek_box'
                ],
                iDontCareAboutCookies: [
                  '.alert-info[data-block-track*="CookieNotice"]',
                  '.ModuleTemplateCookieIndicator',
                  '.o--cookies--container',
                  '.cookie-msg-info-container',
                  '#cookies-policy-sticky'
                ],
                icelandicAbp: [c('QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==')],
                latvian: [
                  c('YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0='),
                  c('YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==')
                ],
                listKr: [
                  c('YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0='),
                  c('I2xpdmVyZUFkV3JhcHBlcg=='),
                  c('YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=='),
                  c('aW5zLmZhc3R2aWV3LWFk'),
                  '.revenue_unit_item.dable'
                ],
                listeAr: [
                  c('LmdlbWluaUxCMUFk'),
                  '.right-and-left-sponsers',
                  c('YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=='),
                  c('YVtocmVmKj0iYm9vcmFxLm9yZyJd'),
                  c('YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd')
                ],
                listeFr: [
                  c('YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=='),
                  c('I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=='),
                  c('YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0='),
                  '.site-pub-interstitiel',
                  'div[id^="crt-"][data-criteo-id]'
                ],
                officialPolish: [
                  '#ceneo-placeholder-ceneo-12',
                  c('W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd'),
                  c('YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=='),
                  c('YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=='),
                  c('ZGl2I3NrYXBpZWNfYWQ=')
                ],
                ro: [
                  c('YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd'),
                  'a[href^="/magazin/"]',
                  c('YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd'),
                  c('YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0='),
                  c('YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd')
                ],
                ruAd: [
                  c('YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd'),
                  c('YVtocmVmKj0iLy91dGltZy5ydS8iXQ=='),
                  c('YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0='),
                  '#pgeldiz',
                  '.yandex-rtb-block'
                ],
                thaiAds: [
                  'a[href*=macau-uta-popup]',
                  c('I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=='),
                  c('LmFkczMwMHM='),
                  '.bumq',
                  '.img-kosana'
                ],
                webAnnoyancesUltralist: [
                  '#mod-social-share-2',
                  '#social-tools',
                  c('LmN0cGwtZnVsbGJhbm5lcg=='),
                  '.zergnet-recommend',
                  '.yt.btn-link.btn-md.btn'
                ]
              }, n = Object.keys(e), [
                4,
                ue((i = []).concat.apply(i, n.map(function (t) {
                  return e[t];
                })))
              ]) : [
                2,
                void 0
              ];
            case 1:
              return r = a.sent(), (void 0 === e ? {} : e).debug && function (e, t) {
                for (var n = 'DOM blockers debug:\n```', r = 0, o = Object.keys(e); r < o.length; r++) {
                  var i = o[r];
                  n += '\n' + o[r] + ':';
                  for (var a = 0, c = e[o[r]]; a < c.length; a++) {
                    var s = c[a];
                    n += '\n  ' + (t[c[a]] ? '🚫' : '➡️') + ' ' + c[a];
                  }
                }
                console.log(n + '\n```');
              }(e, r), (o = n.filter(function (t) {
                var n = e[t];
                return E(e[t].map(function (e) {
                  return r[e];
                })) > 0.6 * e[t].length;
              })).sort(), [
                2,
                o
              ];
            }
            var c;
          });
        });
      },
      fontPreferences: function () {
        return function (e, t) {
          void 0 === t && (t = 4000);
          return K(function (n, r) {
            var o = r.document, i = r.document.body, a = r.document.body.style;
            r.document.body.style.width = t + 'px', r.document.body.style.webkitTextSizeAdjust = r.document.body.style.textSizeAdjust = 'none', J() ? r.document.body.style.zoom = '' + 1 / r.devicePixelRatio : z() && (r.document.body.style.zoom = 'reset');
            var c = r.document.createElement('div');
            return c.textContent = C(Array(t / 20 << 0)).map(function () {
              return 'word';
            }).join(' '), r.document.body.appendChild(c), e(r.document, r.document.body);
          }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
        }(function (e, t) {
          for (var n = {}, r = {}, o = 0, i = [
                'default',
                'apple',
                'serif',
                'sans',
                'mono',
                'min',
                'system'
              ]; o < i.length; o++) {
            var a = i[o], c = ge[a], s = ge[a][0], u = void 0 === ge[a][0] ? {} : ge[a][0], l = ge[a][1], d = void 0 === ge[a][1] ? 'mmMwWLliI0fiflO&1' : ge[a][1], f = e.createElement('span');
            f.textContent = d, f.style.whiteSpace = 'nowrap';
            for (var m = 0, h = Object.keys(u); m < h.length; m++) {
              var p = h[m], v = u[h[m]];
              void 0 !== u[h[m]] && (f.style[h[m]] = u[h[m]]);
            }
            n[a] = f, t.appendChild(e.createElement('br')), t.appendChild(f);
          }
          for (var b = 0, g = [
                'default',
                'apple',
                'serif',
                'sans',
                'mono',
                'min',
                'system'
              ]; b < g.length; b++) {
            r[a = g[b]] = n[a].getBoundingClientRect().width;
          }
          return r;
        });
      },
      audio: function () {
        var e = window, t = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if (!t)
          return -2;
        if (z() && !U() && !function () {
            var e = window;
            return E([
              'DOMRectList' in window,
              'RTCPeerConnectionIceEvent' in window,
              'SVGGeometryElement' in window,
              'ontransitioncancel' in window
            ]) >= 3;
          }())
          return -1;
        var n = new t(1, 5000, 44100), r = n.createOscillator();
        r.type = 'triangle', r.frequency.value = 10000;
        var o = n.createDynamicsCompressor();
        o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = 0.25, r.connect(o), o.connect(n.destination), r.start(0);
        var i = function (e) {
            var t = 3, n = 500, r = 500, o = 5000, i = function () {
              };
            return [
              new Promise(function (a, c) {
                var s = false, u = 0, l = 0;
                e.oncomplete = function (e) {
                  return a(e.renderedBuffer);
                };
                var d = function () {
                    setTimeout(function () {
                      return c(q('timeout'));
                    }, Math.min(500, l + 5000 - Date.now()));
                  }, f = function () {
                    try {
                      switch (e.startRendering(), e.state) {
                      case 'running':
                        l = Date.now(), s && d();
                        break;
                      case 'suspended':
                        document.hidden || u++, s && u >= 3 ? c(q('suspended')) : setTimeout(f, 500);
                      }
                    } catch (e) {
                      c(e);
                    }
                  };
                f(), i = function () {
                  s || (s = true, l > 0 && d());
                };
              }),
              i
            ];
          }(n), a = i[0], c = i[1], s = i[0].then(function (e) {
            return function (e) {
              for (var t = 0, n = 0; n < e.length; ++n)
                t += Math.abs(e[n]);
              return t;
            }(e.getChannelData(0).subarray(4500));
          }, function (e) {
            if ('timeout' === e.name || 'suspended' === e.name)
              return -3;
            throw e;
          });
        return V(s), function () {
          return i[1](), s;
        };
      },
      screenFrame: function () {
        var e = this, t = ae();
        return function () {
          return x(e, void 0, void 0, function () {
            var e, n;
            return L(this, function (r) {
              switch (r.label) {
              case 0:
                return [
                  4,
                  t()
                ];
              case 1:
                return e = r.sent(), [
                  2,
                  [
                    (n = function (e) {
                      return null === e ? null : X(e, 10);
                    })(e[0]),
                    n(e[1]),
                    n(e[2]),
                    n(e[3])
                  ]
                ];
              }
            });
          });
        };
      },
      osCpu: function () {
        return navigator.oscpu;
      },
      languages: function () {
        var e, t = navigator, n = [], r = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage;
        if (void 0 !== r && n.push([r]), Array.isArray(navigator.languages))
          J() && E([
            !('MediaSettingsRange' in (e = window)),
            'RTCEncodedAudioFrame' in e,
            '' + e.Intl == '[object Intl]',
            '' + e.Reflect == '[object Reflect]'
          ]) >= 3 || n.push(navigator.languages);
        else if ('string' == typeof navigator.languages) {
          var o = navigator.languages;
          navigator.languages && n.push(navigator.languages.split(','));
        }
        return n;
      },
      colorDepth: function () {
        return window.screen.colorDepth;
      },
      deviceMemory: function () {
        return Z(parseFloat(navigator.deviceMemory), void 0);
      },
      screenResolution: function () {
        var e = screen, t = function (e) {
            return Z(parseInt(e), null);
          }, n = [
            t(screen.width),
            t(screen.height)
          ];
        return n.sort().reverse(), n;
      },
      hardwareConcurrency: function () {
        return Z(parseInt(navigator.hardwareConcurrency), void 0);
      },
      timezone: function () {
        var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
        if (t) {
          var n = new t().resolvedOptions().timeZone;
          if (new t().resolvedOptions().timeZone)
            return new t().resolvedOptions().timeZone;
        }
        var r, o = (r = new Date().getFullYear(), -Math.max(parseFloat(new Date(r, 0, 1).getTimezoneOffset()), parseFloat(new Date(r, 6, 1).getTimezoneOffset())));
        return 'UTC' + (o >= 0 ? '+' : '') + Math.abs(o);
      },
      sessionStorage: function () {
        try {
          return !!window.sessionStorage;
        } catch (e) {
          return true;
        }
      },
      localStorage: function () {
        try {
          return !!window.localStorage;
        } catch (e) {
          return true;
        }
      },
      indexedDB: function () {
        var e, t;
        if (!(G() || (e = window, t = navigator, E([
            'msWriteProfilerMark' in e,
            'MSStream' in e,
            'msLaunchUri' in t,
            'msSaveBlob' in t
          ]) >= 3 && !G())))
          try {
            return !!window.indexedDB;
          } catch (e) {
            return true;
          }
      },
      openDatabase: function () {
        return !!window.openDatabase;
      },
      cpuClass: function () {
        return navigator.cpuClass;
      },
      platform: function () {
        var e = navigator.platform;
        return 'MacIntel' === navigator.platform && z() && !U() ? function () {
          if ('iPad' === navigator.platform)
            return true;
          var e = screen, t = screen.width / screen.height;
          return E([
            'MediaSource' in window,
            !!Element.prototype.webkitRequestFullscreen,
            t > 0.65 && t < 1.53
          ]) >= 2;
        }() ? 'iPad' : 'iPhone' : navigator.platform;
      },
      plugins: function () {
        var e = navigator.plugins;
        if (navigator.plugins) {
          for (var t = [], n = 0; n < navigator.plugins.length; ++n) {
            var r = navigator.plugins[n];
            if (navigator.plugins[n]) {
              for (var o = [], i = 0; i < navigator.plugins[n].length; ++i) {
                var a = navigator.plugins[n][i];
                o.push({
                  type: navigator.plugins[n][i].type,
                  suffixes: navigator.plugins[n][i].suffixes
                });
              }
              t.push({
                name: navigator.plugins[n].name,
                description: navigator.plugins[n].description,
                mimeTypes: o
              });
            }
          }
          return t;
        }
      },
      canvas: function () {
        var e, t, n = false, r = function () {
            var e = document.createElement('canvas');
            return e.width = 1, e.height = 1, [
              e,
              e.getContext('2d')
            ];
          }(), o = r[0], i = r[1];
        if (function (e, t) {
            return !(!t || !e.toDataURL);
          }(r[0], r[1])) {
          n = function (e) {
            return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, 'evenodd');
          }(r[1]), function (e, t) {
            e.width = 240, e.height = 60, t.textBaseline = 'alphabetic', t.fillStyle = '#f60', t.fillRect(100, 1, 62, 20), t.fillStyle = '#069', t.font = '11pt "Times New Roman"';
            var n = 'Cwm fjordbank gly 😃';
            t.fillText('Cwm fjordbank gly 😃', 2, 15), t.fillStyle = 'rgba(102, 204, 0, 0.2)', t.font = '18pt Arial', t.fillText('Cwm fjordbank gly 😃', 4, 45);
          }(r[0], r[1]);
          var a = e.toDataURL();
          a !== e.toDataURL() ? e = t = 'unstable' : (t = a, function (e, t) {
            e.width = 122, e.height = 110, t.globalCompositeOperation = 'multiply';
            for (var n = 0, r = [
                  [
                    '#f2f',
                    40,
                    40
                  ],
                  [
                    '#2ff',
                    80,
                    40
                  ],
                  [
                    '#ff2',
                    60,
                    80
                  ]
                ]; n < r.length; n++) {
              var o = r[n], i = r[n][0], a = r[n][1], c = r[n][2];
              t.fillStyle = r[n][0], t.beginPath(), t.arc(r[n][1], r[n][2], 40, 0, 2 * Math.PI, true), t.closePath(), t.fill();
            }
            t.fillStyle = '#f9c', t.arc(60, 60, 60, 0, 2 * Math.PI, true), t.arc(60, 60, 20, 0, 2 * Math.PI, true), t.fill('evenodd');
          }(r[0], r[1]), e = e.toDataURL());
        } else
          e = t = '';
        return {
          winding: n,
          geometry: e,
          text: t
        };
      },
      touchSupport: function () {
        var e, t = navigator, n = 0;
        void 0 !== navigator.maxTouchPoints ? n = parseInt(navigator.maxTouchPoints) : void 0 !== navigator.msMaxTouchPoints && (n = navigator.msMaxTouchPoints);
        try {
          document.createEvent('TouchEvent'), e = true;
        } catch (t) {
          e = false;
        }
        return {
          maxTouchPoints: n,
          touchEvent: e,
          touchStart: 'ontouchstart' in window
        };
      },
      vendor: function () {
        return navigator.vendor || '';
      },
      vendorFlavors: function () {
        for (var e = [], t = 0, n = [
              'chrome',
              'safari',
              '__crWeb',
              '__gCrWeb',
              'yandex',
              '__yb',
              '__ybro',
              '__firefox__',
              '__edgeTrackingPreventionStatistics',
              'webkit',
              'oprt',
              'samsungAr',
              'ucweb',
              'UCShellJava',
              'puffinDevice'
            ]; t < n.length; t++) {
          var r = n[t], o = window[n[t]];
          window[n[t]] && 'object' == typeof window[n[t]] && e.push(n[t]);
        }
        return e.sort();
      },
      cookiesEnabled: function () {
        var e = document;
        try {
          document.cookie = 'cookietest=1; SameSite=Strict;';
          var t = -1 !== document.cookie.indexOf('cookietest=');
          return document.cookie = 'cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT', t;
        } catch (e) {
          return false;
        }
      },
      colorGamut: function () {
        for (var e = 0, t = [
              'rec2020',
              'p3',
              'srgb'
            ]; e < t.length; e++) {
          var n = t[e];
          if (matchMedia('(color-gamut: ' + t[e] + ')').matches)
            return t[e];
        }
      },
      invertedColors: function () {
        return !!de('inverted') || !de('none') && void 0;
      },
      forcedColors: function () {
        return !!fe('active') || !fe('none') && void 0;
      },
      monochrome: function () {
        if (matchMedia('(min-monochrome: 0)').matches) {
          for (var e = 0; e <= 100; ++e)
            if (matchMedia('(max-monochrome: ' + e + ')').matches)
              return e;
          throw new Error('Too high value');
        }
      },
      contrast: function () {
        return me('no-preference') ? 0 : me('high') || me('more') ? 1 : me('low') || me('less') ? -1 : me('forced') ? 10 : void 0;
      },
      reducedMotion: function () {
        return !!he('reduce') || !he('no-preference') && void 0;
      },
      hdr: function () {
        return !!pe('high') || !pe('standard') && void 0;
      },
      math: function () {
        var e, t = Math.acos || be, n = Math.acosh || be, r = Math.asin || be, o = Math.asinh || be, i = Math.atanh || be, a = Math.atan || be, c = Math.sin || be, s = Math.sinh || be, u = Math.cos || be, l = Math.cosh || be, d = Math.tan || be, f = Math.tanh || be, m = Math.exp || be, h = Math.expm1 || be, p = Math.log1p || be;
        return {
          acos: 1.4473588658278522,
          acosh: 709.889355822726,
          acoshPf: (e = 1e+154, Math.log(1e+154 + Math.sqrt(1e+308))),
          asin: 0.12343746096704435,
          asinh: 0.881373587019543,
          asinhPf: function (e) {
            return Math.log(e + Math.sqrt(e * e + 1));
          }(1),
          atanh: 0.5493061443340548,
          atanhPf: function (e) {
            return Math.log((1 + e) / (1 - e)) / 2;
          }(0.5),
          atan: 0.4636476090008061,
          sin: 0.8178819121159085,
          sinh: 1.1752011936438014,
          sinhPf: function (e) {
            return Math.exp(e) - 1 / Math.exp(e) / 2;
          }(1),
          cos: -'0.8390715290095377',
          cosh: 1.5430806348152437,
          coshPf: function (e) {
            return (Math.exp(e) + 1 / Math.exp(e)) / 2;
          }(1),
          tan: -'1.4214488238747245',
          tanh: 0.7615941559557649,
          tanhPf: function (e) {
            return (Math.exp(2 * e) - 1) / (Math.exp(2 * e) + 1);
          }(1),
          exp: 2.718281828459045,
          expm1: 1.718281828459045,
          expm1Pf: function (e) {
            return Math.exp(e) - 1;
          }(1),
          log1p: 2.3978952727983707,
          log1pPf: function (e) {
            return Math.log(1 + e);
          }(10),
          powPI: function (e) {
            return Math.pow(Math.PI, e);
          }(-100)
        };
      }
    };
    function we(e) {
      var t = function (e) {
          if (Q())
            return 0.4;
          if (z())
            return U() ? 0.5 : 0.3;
          var t = e.platform.value || '';
          if (/^Win/.test(t))
            return 0.6;
          if (/^Mac/.test(t))
            return 0.5;
          return 0.7;
        }(e), n = function (e) {
          return X(0.99 + 0.01 * e, 0.0001);
        }(t);
      return {
        score: t,
        comment: '$ if upgrade to Pro: https://fpjs.dev/pro'.replace(/\$/g, '' + n)
      };
    }
    function ke(e) {
      return JSON.stringify(e, function (e, t) {
        return t instanceof Error ? S({
          name: (n = t).name,
          message: n.message,
          stack: null === (r = n.stack) || void 0 === r ? void 0 : r.split('\n')
        }, n) : t;
        var n, r;
      }, 2);
    }
    function Se(e) {
      return function (e, t) {
        t = t || 0;
        var n, r = (e = e || '').length % 16, o = e.length - r, i = [
            0,
            t
          ], a = [
            0,
            t
          ], c = [
            0,
            0
          ], s = [
            0,
            0
          ], u = [
            2277735313,
            289559509
          ], l = [
            1291169091,
            658871167
          ];
        for (n = 0; n < o; n += 16)
          c = [
            255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24,
            255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24
          ], s = [
            255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24,
            255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24
          ], c = R(c = O(c, u), 31), i = _(i = R(i = W(i, c = O(c, l)), 27), a), i = _(O(i, [
            0,
            5
          ]), [
            0,
            1390208809
          ]), s = R(s = O(s, l), 33), a = _(a = R(a = W(a, s = O(s, u)), 31), i), a = _(O(a, [
            0,
            5
          ]), [
            0,
            944331445
          ]);
        switch (c = [
            0,
            0
          ], s = [
            0,
            0
          ], r) {
        case 15:
          s = W(s, M([
            0,
            e.charCodeAt(n + 14)
          ], 48));
        case 14:
          s = W(s, M([
            0,
            e.charCodeAt(n + 13)
          ], 40));
        case 13:
          s = W(s, M([
            0,
            e.charCodeAt(n + 12)
          ], 32));
        case 12:
          s = W(s, M([
            0,
            e.charCodeAt(n + 11)
          ], 24));
        case 11:
          s = W(s, M([
            0,
            e.charCodeAt(n + 10)
          ], 16));
        case 10:
          s = W(s, M([
            0,
            e.charCodeAt(n + 9)
          ], 8));
        case 9:
          s = O(s = W(s, [
            0,
            e.charCodeAt(n + 8)
          ]), l), a = W(a, s = O(s = R(s, 33), u));
        case 8:
          c = W(c, M([
            0,
            e.charCodeAt(n + 7)
          ], 56));
        case 7:
          c = W(c, M([
            0,
            e.charCodeAt(n + 6)
          ], 48));
        case 6:
          c = W(c, M([
            0,
            e.charCodeAt(n + 5)
          ], 40));
        case 5:
          c = W(c, M([
            0,
            e.charCodeAt(n + 4)
          ], 32));
        case 4:
          c = W(c, M([
            0,
            e.charCodeAt(n + 3)
          ], 24));
        case 3:
          c = W(c, M([
            0,
            e.charCodeAt(n + 2)
          ], 16));
        case 2:
          c = W(c, M([
            0,
            e.charCodeAt(n + 1)
          ], 8));
        case 1:
          c = O(c = W(c, [
            0,
            e.charCodeAt(n)
          ]), u), i = W(i, c = O(c = R(c, 31), l));
        }
        return i = _(i = W(i, [
          0,
          e.length
        ]), a = W(a, [
          0,
          e.length
        ])), a = _(a, i), i = _(i = N(i), a = N(a)), a = _(a, i), ('00000000' + (i[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (i[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (a[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (a[1] >>> 0).toString(16)).slice(-8);
      }(function (e) {
        for (var t = '', n = 0, r = Object.keys(e).sort(); n < r.length; n++) {
          var o = r[n], i = e[r[n]], a = e[r[n]].error ? 'error' : JSON.stringify(e[r[n]].value);
          t += (t ? '|' : '') + r[n].replace(/([:|\\])/g, '\\$1') + ':' + a;
        }
        return t;
      }(e));
    }
    function xe(e) {
      return void 0 === e && (e = 50), function (e, t) {
        void 0 === t && (t = Infinity);
        var n = window.requestIdleCallback;
        return window.requestIdleCallback ? new Promise(function (e) {
          return window.requestIdleCallback.call(window, function () {
            return e();
          }, { timeout: t });
        }) : j(Math.min(e, t));
      }(e, 2 * e);
    }
    function Le(e, t) {
      var n = Date.now();
      return {
        get: function (r) {
          return x(this, void 0, void 0, function () {
            var o, i, a;
            return L(this, function (c) {
              switch (c.label) {
              case 0:
                return o = Date.now(), [
                  4,
                  e()
                ];
              case 1:
                return i = c.sent(), a = function (e) {
                  var t;
                  return {
                    get visitorId() {
                      return void 0 === t && (t = Se(this.components)), t;
                    },
                    set visitorId(e) {
                      t = e;
                    },
                    confidence: we(e),
                    components: e,
                    version: '3.3.6'
                  };
                }(i), (t || (null == r ? void 0 : r.debug)) && console.log('Copy the text below to get the debug data:\n\n```\nversion: ' + a.version + '\nuserAgent: ' + navigator.userAgent + '\ntimeBetweenLoadAndGet: ' + (o - n) + '\nvisitorId: ' + a.visitorId + '\ncomponents: ' + ke(i) + '\n```'), [
                  2,
                  a
                ];
              }
            });
          });
        }
      };
    }
    var Ce = {
      load: function (e) {
        var t = void 0 === e ? {} : e, n = t.delayFallback, r = t.debug, o = t.monitoring, i = void 0 === t.monitoring || t.monitoring;
        return x(this, void 0, void 0, function () {
          return L(this, function (e) {
            switch (e.label) {
            case 0:
              return i && function () {
                if (!(window.__fpjs_d_m || Math.random() >= 0.001))
                  try {
                    var e = new XMLHttpRequest();
                    e.open('get', 'https://m1.openfpcdn.io/fingerprintjs/v3.3.6/npm-monitoring', true), e.send();
                  } catch (e) {
                    console.error(e);
                  }
              }(), [
                4,
                xe(t.delayFallback)
              ];
            case 1:
              return e.sent(), [
                2,
                Le(H(ye, { debug: t.debug }, []), t.debug)
              ];
            }
          });
        });
      },
      hashComponents: Se,
      componentsToDebugString: ke
    };
    function Ae(e) {
      return 'string' == typeof e;
    }
    var je = {
      write: function (e, t, n, r, o, i) {
        var a = [];
        a.push(''.concat(e, '=').concat(encodeURIComponent(t))), 'number' == typeof n && a.push('expires=' + new Date(n).toUTCString()), Ae(r) && a.push('path=' + r), Ae(o) && a.push('domain=' + o), true === i && a.push('secure'), document.cookie = a.join('; ');
      },
      read: function (e) {
        var t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove: function (e) {
        this.write(e, '', Date.now() - 86400000);
      }
    };
    function Pe(e) {
      var t, n = '0123456789abcdef';
      function r(e) {
        var t, r = '';
        for (t = 0; t <= 3; t++)
          r += '0123456789abcdef'.charAt(e >> 8 * t + 4 & 15) + '0123456789abcdef'.charAt(e >> 8 * t & 15);
        return r;
      }
      function o(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
      }
      function i(e, t, n, r, i, a) {
        return o(function (e, t) {
          return e << t | e >>> 32 - t;
        }(o(o(t, e), o(r, a)), i), n);
      }
      function a(e, t, n, r, o, a, c) {
        return i(t & n | ~t & r, e, t, o, a, c);
      }
      function c(e, t, n, r, o, a, c) {
        return i(t & r | n & ~r, e, t, o, a, c);
      }
      function s(e, t, n, r, o, a, c) {
        return i(t ^ n ^ r, e, t, o, a, c);
      }
      function u(e, t, n, r, o, a, c) {
        return i(n ^ (t | ~r), e, t, o, a, c);
      }
      var l, d, f, m, h = function (e) {
          var t, n = 1 + (e.length + 8 >> 6), r = new Array(16 * n);
          for (t = 0; t < 16 * n; t++)
            r[t] = 0;
          for (t = 0; t < e.length; t++)
            r[t >> 2] |= e.charCodeAt(t) << t % 4 * 8;
          return r[t >> 2] |= 128 << t % 4 * 8, r[16 * n - 2] = 8 * e.length, r;
        }(e), p = 1732584193, v = -271733879, b = -1732584194, g = 271733878;
      for (t = 0; t < h.length; t += 16)
        l = p, d = v, f = b, m = g, p = a(p, v, b, g, h[t + 0], 7, -680876936), g = a(g, p, v, b, h[t + 1], 12, -389564586), b = a(b, g, p, v, h[t + 2], 17, 606105819), v = a(v, b, g, p, h[t + 3], 22, -1044525330), p = a(p, v, b, g, h[t + 4], 7, -176418897), g = a(g, p, v, b, h[t + 5], 12, 1200080426), b = a(b, g, p, v, h[t + 6], 17, -1473231341), v = a(v, b, g, p, h[t + 7], 22, -45705983), p = a(p, v, b, g, h[t + 8], 7, 1770035416), g = a(g, p, v, b, h[t + 9], 12, -1958414417), b = a(b, g, p, v, h[t + 10], 17, -42063), v = a(v, b, g, p, h[t + 11], 22, -1990404162), p = a(p, v, b, g, h[t + 12], 7, 1804603682), g = a(g, p, v, b, h[t + 13], 12, -40341101), b = a(b, g, p, v, h[t + 14], 17, -1502002290), p = c(p, v = a(v, b, g, p, h[t + 15], 22, 1236535329), b, g, h[t + 1], 5, -165796510), g = c(g, p, v, b, h[t + 6], 9, -1069501632), b = c(b, g, p, v, h[t + 11], 14, 643717713), v = c(v, b, g, p, h[t + 0], 20, -373897302), p = c(p, v, b, g, h[t + 5], 5, -701558691), g = c(g, p, v, b, h[t + 10], 9, 38016083), b = c(b, g, p, v, h[t + 15], 14, -660478335), v = c(v, b, g, p, h[t + 4], 20, -405537848), p = c(p, v, b, g, h[t + 9], 5, 568446438), g = c(g, p, v, b, h[t + 14], 9, -1019803690), b = c(b, g, p, v, h[t + 3], 14, -187363961), v = c(v, b, g, p, h[t + 8], 20, 1163531501), p = c(p, v, b, g, h[t + 13], 5, -1444681467), g = c(g, p, v, b, h[t + 2], 9, -51403784), b = c(b, g, p, v, h[t + 7], 14, 1735328473), p = s(p, v = c(v, b, g, p, h[t + 12], 20, -1926607734), b, g, h[t + 5], 4, -378558), g = s(g, p, v, b, h[t + 8], 11, -2022574463), b = s(b, g, p, v, h[t + 11], 16, 1839030562), v = s(v, b, g, p, h[t + 14], 23, -35309556), p = s(p, v, b, g, h[t + 1], 4, -1530992060), g = s(g, p, v, b, h[t + 4], 11, 1272893353), b = s(b, g, p, v, h[t + 7], 16, -155497632), v = s(v, b, g, p, h[t + 10], 23, -1094730640), p = s(p, v, b, g, h[t + 13], 4, 681279174), g = s(g, p, v, b, h[t + 0], 11, -358537222), b = s(b, g, p, v, h[t + 3], 16, -722521979), v = s(v, b, g, p, h[t + 6], 23, 76029189), p = s(p, v, b, g, h[t + 9], 4, -640364487), g = s(g, p, v, b, h[t + 12], 11, -421815835), b = s(b, g, p, v, h[t + 15], 16, 530742520), p = u(p, v = s(v, b, g, p, h[t + 2], 23, -995338651), b, g, h[t + 0], 6, -198630844), g = u(g, p, v, b, h[t + 7], 10, 1126891415), b = u(b, g, p, v, h[t + 14], 15, -1416354905), v = u(v, b, g, p, h[t + 5], 21, -57434055), p = u(p, v, b, g, h[t + 12], 6, 1700485571), g = u(g, p, v, b, h[t + 3], 10, -1894986606), b = u(b, g, p, v, h[t + 10], 15, -1051523), v = u(v, b, g, p, h[t + 1], 21, -2054922799), p = u(p, v, b, g, h[t + 8], 6, 1873313359), g = u(g, p, v, b, h[t + 15], 10, -30611744), b = u(b, g, p, v, h[t + 6], 15, -1560198380), v = u(v, b, g, p, h[t + 13], 21, 1309151649), p = u(p, v, b, g, h[t + 4], 6, -145523070), g = u(g, p, v, b, h[t + 11], 10, -1120210379), b = u(b, g, p, v, h[t + 2], 15, 718787259), v = u(v, b, g, p, h[t + 9], 21, -343485551), p = o(p, l), v = o(v, d), b = o(b, f), g = o(g, m);
      return r(p) + r(v) + r(b) + r(g);
    }
    function Ie(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function Ve(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        t[n].enumerable = t[n].enumerable || false, t[n].configurable = true, 'value' in t[n] && (t[n].writable = true), Object.defineProperty(e, t[n].key, t[n]);
      }
    }
    function _e(e, t, n) {
      return t && Ve(e.prototype, t), n && Ve(e, n), Object.defineProperty(e, 'prototype', { writable: false }), e;
    }
    var Oe = new (function () {
        function e() {
          Ie(this, e), this.state = {};
        }
        return _e(e, [
          {
            key: 'set',
            value: function (e, t) {
              this.state[e] = t;
            }
          },
          {
            key: 'get',
            value: function (e) {
              return this.state[e] || null;
            }
          },
          {
            key: 'remove',
            value: function (e) {
              delete this.state[e];
            }
          }
        ]), e;
      }())(), Re = {
        set: function (e, t) {
          return localStorage.setItem(e, t);
        },
        get: function (e) {
          return localStorage.getItem(e);
        },
        remove: function (e) {
          return localStorage.removeItem(e);
        }
      };
    try {
      Re.set('__try', 1), Re.get('__try'), Re.remove('__try');
    } catch (e) {
      Re = Oe;
    }
    var Me = Re;
    var We = function () {
      function e() {
        Ie(this, e), this.localStoreKey = '_ytbaсс', this.betweenUpdateDelayMins = 60, this.authStatus = false, this.nextUpdate = null;
      }
      return _e(e, [
        {
          key: 'lazyAccountCheck',
          value: function () {
            var e = this;
            return false || (this.detectYouTubeAuth().then(function (t) {
              e.setYoutubeAuthMarker(t, t ? null : Date.now());
            }).catch(function () {
              return null;
            }), false);
          }
        },
        {
          key: 'setYoutubeAuthMarker',
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            this.authStatus = e, this.nextUpdate = t, Me.set(this.localStoreKey, JSON.stringify({
              authStatus: e,
              nextUpdate: t
            }));
          }
        },
        {
          key: 'isUpdatePossible',
          value: function () {
            return !this.nextUpdate || function (e, t) {
              if (!e || !t)
                return null;
              var n = 60 * t * 1000;
              return Date.now() - e > n;
            }(this.nextUpdate, this.betweenUpdateDelayMins);
          }
        },
        {
          key: 'loadYoutubeAuthMarker',
          value: function () {
            var e = Me.get(this.localStoreKey);
            if (e)
              try {
                var t = JSON.parse(e);
                this.authStatus = t.authStatus, this.nextUpdate = t.nextUpdate;
              } catch (e) {
              }
          }
        },
        {
          key: 'detectYouTubeAuth',
          value: function () {
            var e = document.createElement('img');
            return e.referrerPolicy = 'no-referrer', e.src = 'https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fm.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube', new Promise(function (t) {
              e.onload = function () {
                t(true);
              }, e.onerror = function () {
                t(false);
              };
            });
          }
        }
      ]), e;
    }();
    function Ne(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        t[n].enumerable = t[n].enumerable || false, t[n].configurable = true, 'value' in t[n] && (t[n].writable = true), Object.defineProperty(e, t[n].key, t[n]);
      }
    }
    function Te(e) {
      var t, n = '0123456789abcdef';
      function r(e) {
        var t, r = '';
        for (t = 0; t <= 3; t++)
          r += '0123456789abcdef'.charAt(e >> 8 * t + 4 & 15) + '0123456789abcdef'.charAt(e >> 8 * t & 15);
        return r;
      }
      function o(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
      }
      function i(e, t, n, r, i, a) {
        return o(function (e, t) {
          return e << t | e >>> 32 - t;
        }(o(o(t, e), o(r, a)), i), n);
      }
      function a(e, t, n, r, o, a, c) {
        return i(t & n | ~t & r, e, t, o, a, c);
      }
      function c(e, t, n, r, o, a, c) {
        return i(t & r | n & ~r, e, t, o, a, c);
      }
      function s(e, t, n, r, o, a, c) {
        return i(t ^ n ^ r, e, t, o, a, c);
      }
      function u(e, t, n, r, o, a, c) {
        return i(n ^ (t | ~r), e, t, o, a, c);
      }
      var l, d, f, m, h = function (e) {
          var t, n = 1 + (e.length + 8 >> 6), r = new Array(16 * n);
          for (t = 0; t < 16 * n; t++)
            r[t] = 0;
          for (t = 0; t < e.length; t++)
            r[t >> 2] |= e.charCodeAt(t) << t % 4 * 8;
          return r[t >> 2] |= 128 << t % 4 * 8, r[16 * n - 2] = 8 * e.length, r;
        }(e), p = 1732584193, v = -271733879, b = -1732584194, g = 271733878;
      for (t = 0; t < h.length; t += 16)
        l = p, d = v, f = b, m = g, p = a(p, v, b, g, h[t + 0], 7, -680876936), g = a(g, p, v, b, h[t + 1], 12, -389564586), b = a(b, g, p, v, h[t + 2], 17, 606105819), v = a(v, b, g, p, h[t + 3], 22, -1044525330), p = a(p, v, b, g, h[t + 4], 7, -176418897), g = a(g, p, v, b, h[t + 5], 12, 1200080426), b = a(b, g, p, v, h[t + 6], 17, -1473231341), v = a(v, b, g, p, h[t + 7], 22, -45705983), p = a(p, v, b, g, h[t + 8], 7, 1770035416), g = a(g, p, v, b, h[t + 9], 12, -1958414417), b = a(b, g, p, v, h[t + 10], 17, -42063), v = a(v, b, g, p, h[t + 11], 22, -1990404162), p = a(p, v, b, g, h[t + 12], 7, 1804603682), g = a(g, p, v, b, h[t + 13], 12, -40341101), b = a(b, g, p, v, h[t + 14], 17, -1502002290), p = c(p, v = a(v, b, g, p, h[t + 15], 22, 1236535329), b, g, h[t + 1], 5, -165796510), g = c(g, p, v, b, h[t + 6], 9, -1069501632), b = c(b, g, p, v, h[t + 11], 14, 643717713), v = c(v, b, g, p, h[t + 0], 20, -373897302), p = c(p, v, b, g, h[t + 5], 5, -701558691), g = c(g, p, v, b, h[t + 10], 9, 38016083), b = c(b, g, p, v, h[t + 15], 14, -660478335), v = c(v, b, g, p, h[t + 4], 20, -405537848), p = c(p, v, b, g, h[t + 9], 5, 568446438), g = c(g, p, v, b, h[t + 14], 9, -1019803690), b = c(b, g, p, v, h[t + 3], 14, -187363961), v = c(v, b, g, p, h[t + 8], 20, 1163531501), p = c(p, v, b, g, h[t + 13], 5, -1444681467), g = c(g, p, v, b, h[t + 2], 9, -51403784), b = c(b, g, p, v, h[t + 7], 14, 1735328473), p = s(p, v = c(v, b, g, p, h[t + 12], 20, -1926607734), b, g, h[t + 5], 4, -378558), g = s(g, p, v, b, h[t + 8], 11, -2022574463), b = s(b, g, p, v, h[t + 11], 16, 1839030562), v = s(v, b, g, p, h[t + 14], 23, -35309556), p = s(p, v, b, g, h[t + 1], 4, -1530992060), g = s(g, p, v, b, h[t + 4], 11, 1272893353), b = s(b, g, p, v, h[t + 7], 16, -155497632), v = s(v, b, g, p, h[t + 10], 23, -1094730640), p = s(p, v, b, g, h[t + 13], 4, 681279174), g = s(g, p, v, b, h[t + 0], 11, -358537222), b = s(b, g, p, v, h[t + 3], 16, -722521979), v = s(v, b, g, p, h[t + 6], 23, 76029189), p = s(p, v, b, g, h[t + 9], 4, -640364487), g = s(g, p, v, b, h[t + 12], 11, -421815835), b = s(b, g, p, v, h[t + 15], 16, 530742520), p = u(p, v = s(v, b, g, p, h[t + 2], 23, -995338651), b, g, h[t + 0], 6, -198630844), g = u(g, p, v, b, h[t + 7], 10, 1126891415), b = u(b, g, p, v, h[t + 14], 15, -1416354905), v = u(v, b, g, p, h[t + 5], 21, -57434055), p = u(p, v, b, g, h[t + 12], 6, 1700485571), g = u(g, p, v, b, h[t + 3], 10, -1894986606), b = u(b, g, p, v, h[t + 10], 15, -1051523), v = u(v, b, g, p, h[t + 1], 21, -2054922799), p = u(p, v, b, g, h[t + 8], 6, 1873313359), g = u(g, p, v, b, h[t + 15], 10, -30611744), b = u(b, g, p, v, h[t + 6], 15, -1560198380), v = u(v, b, g, p, h[t + 13], 21, 1309151649), p = u(p, v, b, g, h[t + 4], 6, -145523070), g = u(g, p, v, b, h[t + 11], 10, -1120210379), b = u(b, g, p, v, h[t + 2], 15, 718787259), v = u(v, b, g, p, h[t + 9], 21, -343485551), p = o(p, l), v = o(v, d), b = o(b, f), g = o(g, m);
      return r(p) + r(v) + r(b) + r(g);
    }
    var Fe = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.AUCTION_AND_METRIC_SECRET = 'adblock-proxy-super-secret-for-formats', this.PROXY_SECRET = 'adblock-proxy-super-secret-proxy', this.CDN_SECRET = 'adblock-proxy-super-secret', this.cdnAssetsPathSecret = 'adblocksucks', this.tagConfigPathSecret = 'adblocksucs', this.FORMATS_WITH_UNIQ_SECRETS = {
          native: 'adblock-proxy-super-secret-for-formats-inpage',
          inpage: 'adblock-proxy-super-secret-for-formats-inpage',
          popunder: 'adblock-proxy-super-secret',
          banner: 'adblock-proxy-super-secret'
        };
      }
      var t, n, r;
      return t = e, (n = [
        {
          key: 'getDateForHash',
          value: function () {
            var e = new Date().toISOString().split('T')[0].replace(/-/gi, '.').substring(2);
            return '23.02.14' === e ? '23.02.13' : e;
          }
        },
        {
          key: 'generateCdnDomain',
          value: function (e) {
            var t = ''.concat(e || this.getDateForHash(), ':').concat(this.CDN_SECRET, ':domain'), n = ''.concat(Te(t).substring(0, 10), '.com');
            return 'https://'.concat(Te(''.concat(n, ':').concat(this.CDN_SECRET)).substring(0, 10), '.').concat(n);
          }
        },
        {
          key: 'generateHashedProxyDomain',
          value: function () {
            var e = ''.concat(this.getDateForHash(), ':').concat(this.PROXY_SECRET, ':domain'), t = ''.concat(Te(e).substring(0, 10), '.com'), n = ''.concat(t, ':').concat(this.PROXY_SECRET, ':proxy');
            return 'https://'.concat(Te(n).substring(0, 10), '.').concat(t);
          }
        },
        {
          key: 'generateMetricHashDomain',
          value: function () {
            var e = ''.concat(this.getDateForHash(), ':').concat(this.AUCTION_AND_METRIC_SECRET, ':domain'), t = ''.concat(Te(e).substring(0, 10), '.com'), n = ''.concat(t, ':').concat(this.AUCTION_AND_METRIC_SECRET, ':front');
            return 'https://'.concat(Te(n).substring(0, 10), '.').concat(t);
          }
        },
        {
          key: 'generateAuctionUrl',
          value: function (e) {
            var t, n = null !== (t = this.FORMATS_WITH_UNIQ_SECRETS[e]) && void 0 !== t ? t : this.AUCTION_AND_METRIC_SECRET, r = ''.concat(this.getDateForHash(), ':').concat(n, ':domain'), o = ''.concat(Te(r).substring(0, 10), '.com'), i = ''.concat(o, ':').concat(n, ':').concat(e);
            return 'https://'.concat(Te(i).substring(0, 10), '.').concat(o);
          }
        },
        {
          key: 'generateNativeAuctionUrl',
          value: function () {
            var e = 'undefined-native', t = ''.concat(this.getDateForHash(), ':').concat('undefined-native', ':domain'), n = ''.concat(Te(t).substring(0, 10), '.com'), r = ''.concat(n, ':').concat('undefined-native', ':native');
            return 'https://'.concat(Te(r).substring(0, 10), '.').concat(n);
          }
        },
        {
          key: 'convertToHashedUrl',
          value: function (e) {
            var t = e.replace(/^(https?):\/\//, '').split('/').slice(1).join('/').split('?')[0];
            return ''.concat(this.createHashPath('/'.concat(e.replace(/^(https?):\/\//, '').split('/').slice(1).join('/').split('?')[0])), '.js');
          }
        },
        {
          key: 'templateSecondPartUrl',
          value: function (e, t) {
            return ''.concat(t || this.getDateForHash(), ':').concat(this.cdnAssetsPathSecret, ':').concat(e);
          }
        },
        {
          key: 'createHashPath',
          value: function (e, t) {
            return ''.concat(this.generateCdnDomain(t), '/').concat(Te(this.templateSecondPartUrl(e, t)));
          }
        },
        {
          key: 'createHashTagUrl',
          value: function () {
            return ''.concat(this.generateCdnDomain(), '/').concat(Te(''.concat(this.getDateForHash(), ':').concat(this.tagConfigPathSecret, ':tags')));
          }
        }
      ]) && Ne(t.prototype, n), r && Ne(t, r), Object.defineProperty(t, 'prototype', { writable: false }), e;
    }();
    function Ze(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }
      return n;
    }
    function Ee(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Ze(Object(n), true).forEach(function (t) {
          Ue(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ze(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function Xe() {
      Xe = function () {
        return e;
      };
      var e = {}, t = Object.prototype, n = Object.prototype.hasOwnProperty, r = 'function' == typeof Symbol ? Symbol : {}, o = r.iterator || '@@iterator', i = r.asyncIterator || '@@asyncIterator', a = r.toStringTag || '@@toStringTag';
      function c(e, t, n) {
        return Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }), e[t];
      }
      try {
        c({}, '');
      } catch (e) {
        c = function (e, t, n) {
          return e[t] = n;
        };
      }
      function s(e, t, n, r) {
        var o = t && t.prototype instanceof d ? t : d, i = Object.create(o.prototype), a = new x(r || []);
        return i._invoke = function (e, t, n) {
          var r = 'suspendedStart';
          return function (o, i) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === o)
                throw i;
              return {
                value: undefined,
                done: true
              };
            }
            for (n.method = o, n.arg = i;;) {
              var a = n.delegate;
              if (n.delegate) {
                var c = w(n.delegate, n);
                if (c) {
                  if (c === l)
                    continue;
                  return c;
                }
              }
              if ('next' === n.method)
                n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r)
                  throw r = 'completed', n.arg;
                n.dispatchException(n.arg);
              } else
                'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var s = u(e, t, n);
              if ('normal' === s.type) {
                if (r = n.done ? 'completed' : 'suspendedYield', s.arg === l)
                  continue;
                return {
                  value: s.arg,
                  done: n.done
                };
              }
              'throw' === s.type && (r = 'completed', n.method = 'throw', n.arg = s.arg);
            }
          };
        }(e, n, a), i;
      }
      function u(e, t, n) {
        try {
          return {
            type: 'normal',
            arg: e.call(t, n)
          };
        } catch (e) {
          return {
            type: 'throw',
            arg: e
          };
        }
      }
      e.wrap = s;
      var l = {};
      function d() {
      }
      function f() {
      }
      function m() {
      }
      var h = {};
      c(h, o, function () {
        return this;
      });
      var p = Object.getPrototypeOf, v = Object.getPrototypeOf && Object.getPrototypeOf(Object.getPrototypeOf(L([])));
      v && v !== Object.prototype && Object.prototype.hasOwnProperty.call(v, o) && (h = v);
      var b = m.prototype = d.prototype = Object.create(h);
      function g(e) {
        [
          'next',
          'throw',
          'return'
        ].forEach(function (t) {
          c(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function y(e, t) {
        function r(o, i, a, c) {
          var s = u(e[o], e, i);
          if ('throw' !== s.type) {
            var l = s.arg, d = s.arg.value;
            return d && 'object' == typeof d && Object.prototype.hasOwnProperty.call(d, '__await') ? t.resolve(d.__await).then(function (e) {
              r('next', e, a, c);
            }, function (e) {
              r('throw', e, a, c);
            }) : t.resolve(d).then(function (e) {
              s.arg.value = e, a(s.arg);
            }, function (e) {
              return r('throw', e, a, c);
            });
          }
          c(s.arg);
        }
        var o;
        this._invoke = function (e, n) {
          function i() {
            return new t(function (t, o) {
              r(e, n, t, o);
            });
          }
          return o = o ? o.then(i, i) : i();
        };
      }
      function w(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === e.iterator[t.method]) {
          if (t.delegate = null, 'throw' === t.method) {
            if (e.iterator.return && (t.method = 'return', t.arg = void 0, w(e, t), 'throw' === t.method))
              return l;
            t.method = 'throw', t.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return l;
        }
        var r = u(e.iterator[t.method], e.iterator, t.arg);
        if ('throw' === r.type)
          return t.method = 'throw', t.arg = r.arg, t.delegate = null, l;
        var o = r.arg;
        return r.arg ? r.arg.done ? (t[e.resultName] = r.arg.value, t.next = e.nextLoc, 'return' !== t.method && (t.method = 'next', t.arg = void 0), t.delegate = null, l) : r.arg : (t.method = 'throw', t.arg = new TypeError('iterator result is not an object'), t.delegate = null, l);
      }
      function k(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }
      function S(e) {
        var t = e.completion || {};
        t.type = 'normal', delete t.arg, e.completion = t;
      }
      function x(e) {
        this.tryEntries = [{ tryLoc: 'root' }], e.forEach(k, this), this.reset(true);
      }
      function L(e) {
        if (e) {
          var t = e[o];
          if (e[o])
            return e[o].call(e);
          if ('function' == typeof e.next)
            return e;
          if (!isNaN(e.length)) {
            var r = -1, i = function t() {
                for (; ++r < e.length;)
                  if (Object.prototype.hasOwnProperty.call(e, r))
                    return t.value = e[r], t.done = false, t;
                return t.value = void 0, t.done = true, t;
              };
            return i.next = i;
          }
        }
        return { next: C };
      }
      function C() {
        return {
          value: void 0,
          done: true
        };
      }
      return f.prototype = m, c(b, 'constructor', m), c(m, 'constructor', f), f.displayName = c(m, a, 'GeneratorFunction'), e.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === f || 'GeneratorFunction' === (t.displayName || t.name));
      }, e.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, a, 'GeneratorFunction')), e.prototype = Object.create(b), e;
      }, e.awrap = function (e) {
        return { __await: e };
      }, g(y.prototype), c(y.prototype, i, function () {
        return this;
      }), e.AsyncIterator = y, e.async = function (t, n, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new y(s(t, n, r, o), i);
        return e.isGeneratorFunction(n) ? a : a.next().then(function (e) {
          return e.done ? e.value : a.next();
        });
      }, g(b), c(b, a, 'Generator'), c(b, o, function () {
        return this;
      }), c(b, 'toString', function () {
        return '[object Generator]';
      }), e.keys = function (e) {
        var t = [];
        for (var n in e)
          t.push(n);
        return t.reverse(), function n() {
          for (; t.length;) {
            var r = t.pop();
            if (r in e)
              return n.value = r, n.done = false, n;
          }
          return n.done = true, n;
        };
      }, e.values = L, x.prototype = {
        constructor: x,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = 'next', this.arg = void 0, this.tryEntries.forEach(S), !e)
            for (var t in this)
              't' === t.charAt(0) && Object.prototype.hasOwnProperty.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
        },
        stop: function () {
          this.done = true;
          var e = this.tryEntries[0].completion;
          if ('throw' === this.tryEntries[0].completion.type)
            throw this.tryEntries[0].completion.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done)
            throw e;
          var t = this;
          function r(n, r) {
            return this.tryEntries[o].completion.type = 'throw', this.tryEntries[o].completion.arg = e, t.next = n, r && (t.method = 'next', t.arg = void 0), !!r;
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o], a = this.tryEntries[o].completion;
            if ('root' === this.tryEntries[o].tryLoc)
              return r('end');
            if (this.tryEntries[o].tryLoc <= this.prev) {
              var c = Object.prototype.hasOwnProperty.call(this.tryEntries[o], 'catchLoc'), s = Object.prototype.hasOwnProperty.call(this.tryEntries[o], 'finallyLoc');
              if (c && s) {
                if (this.prev < this.tryEntries[o].catchLoc)
                  return r(this.tryEntries[o].catchLoc, true);
                if (this.prev < this.tryEntries[o].finallyLoc)
                  return r(this.tryEntries[o].finallyLoc);
              } else if (c) {
                if (this.prev < this.tryEntries[o].catchLoc)
                  return r(this.tryEntries[o].catchLoc, true);
              } else {
                if (!s)
                  throw new Error('try statement without catch or finally');
                if (this.prev < this.tryEntries[o].finallyLoc)
                  return r(this.tryEntries[o].finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (this.tryEntries[r].tryLoc <= this.prev && Object.prototype.hasOwnProperty.call(this.tryEntries[r], 'finallyLoc') && this.prev < this.tryEntries[r].finallyLoc) {
              var i = this.tryEntries[r];
              break;
            }
          }
          i && ('break' === e || 'continue' === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = e, a.arg = t, i ? (this.method = 'next', this.next = i.finallyLoc, l) : this.complete(a);
        },
        complete: function (e, t) {
          if ('throw' === e.type)
            throw e.arg;
          return 'break' === e.type || 'continue' === e.type ? this.next = e.arg : 'return' === e.type ? (this.rval = this.arg = e.arg, this.method = 'return', this.next = 'end') : 'normal' === e.type && t && (this.next = t), l;
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (this.tryEntries[t].finallyLoc === e)
              return this.complete(this.tryEntries[t].completion, this.tryEntries[t].afterLoc), S(this.tryEntries[t]), l;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (this.tryEntries[t].tryLoc === e) {
              var r = this.tryEntries[t].completion;
              if ('throw' === this.tryEntries[t].completion.type) {
                var o = this.tryEntries[t].completion.arg;
                S(this.tryEntries[t]);
              }
              return this.tryEntries[t].completion.arg;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (e, t, n) {
          return this.delegate = {
            iterator: L(e),
            resultName: t,
            nextLoc: n
          }, 'next' === this.method && (this.arg = void 0), l;
        }
      }, e;
    }
    function De(e) {
      return De = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      }, De(e);
    }
    function Ye(e, t, n, r, o, i, a) {
      try {
        var c = e[i](a), s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(c.value) : Promise.resolve(c.value).then(r, o);
    }
    function He(e) {
      return function () {
        var t = this, n = arguments;
        return new Promise(function (r, o) {
          var i = e.apply(t, arguments);
          function a(e) {
            Ye(i, r, o, a, c, 'next', e);
          }
          function c(e) {
            Ye(i, r, o, a, c, 'throw', e);
          }
          a(void 0);
        });
      };
    }
    function Ge(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function Je(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        t[n].enumerable = t[n].enumerable || false, t[n].configurable = true, 'value' in t[n] && (t[n].writable = true), Object.defineProperty(e, t[n].key, t[n]);
      }
    }
    function ze(e, t, n) {
      return t && Je(e.prototype, t), n && Je(e, n), Object.defineProperty(e, 'prototype', { writable: false }), e;
    }
    function Ue(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n, e;
    }
    function Be(e, t, n, r, o) {
      var i = new Error(e);
      return i.config = t, n && (i.code = n), i.request = r, i.response = o, i.isHttpError = true, i.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      }, i;
    }
    function Qe(e, t) {
      var n;
      if (null != e)
        if ('object' !== De(e) && (e = [e]), n = e, '[object Array]' === Object.prototype.toString.call(n))
          for (var r = 0, o = e.length; r < o; r++)
            t.call(null, e[r], r, e);
        else
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
    }
    function qe(e) {
      return new Promise(function (t, n) {
        var r, o, i = e.data, a = e.headers, c = new XMLHttpRequest(), s = (r = e.baseURL, o = e.url, r && !/^([a-z][a-z\d\\+\-\\.]*:)?\/\//i.test(o) ? function (e, t) {
            return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
          }(r, o) : o);
        if (c.open(e.method.toUpperCase(), function (e, t) {
            if (!t)
              return e;
            var n = Object.keys(t).reduce(function (e, n, r, o) {
              var i = ''.concat(e).concat(n, '=').concat(encodeURIComponent(t[n]));
              return r !== o.length - 1 && (i += '&'), i;
            }, '');
            return ''.concat(e, '?').concat(n);
          }(s, e.params), true), c.timeout = e.timeout, c.onreadystatechange = function () {
            if (c && 4 === c.readyState && (0 !== c.status || c.responseURL && 0 === c.responseURL.indexOf('file:'))) {
              var r = {
                data: e.responseType && 'text' !== e.responseType ? c.response : c.responseText,
                status: c.status,
                statusText: c.statusText,
                config: e,
                request: c
              };
              !function (e, t, n) {
                !n.status || n.status >= 200 && n.status < 300 ? e(n) : t(Be('Request failed with status code ' + n.status, n.config, null, n.request, n));
              }(t, n, r), c = null;
            }
          }, c.onabort = function () {
            c && (n(Be('Request aborted', e, 'ECONNABORTED', c)), c = null);
          }, c.onerror = function () {
            n(Be('Network Error', e, null, c)), c = null;
          }, c.ontimeout = function () {
            var t = 'timeout of '.concat(e.timeout, 'ms exceeded');
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(Be(t, e, 'ECONNABORTED', c)), c = null;
          }, 'setRequestHeader' in c && Qe(e.headers, function (e, t) {
            void 0 === i && 'content-type' === t.toLowerCase() ? delete e.headers[t] : c.setRequestHeader(t, e);
          }), void 0 !== e.withCredentials && (c.withCredentials = !!e.withCredentials), e.responseType)
          try {
            c.responseType = e.responseType;
          } catch (t) {
            if ('json' !== e.responseType)
              throw t;
          }
        i || (i = null), c.send(i);
      });
    }
    function Ke(e) {
      if ('string' == typeof e)
        try {
          e = JSON.parse(e);
        } catch (e) {
        }
      return e;
    }
    var $e = function () {
        function e(t) {
          Ge(this, e), this.defaults = { timeout: 0 };
        }
        return ze(e, [
          {
            key: 'dispatchRequest',
            value: function (e) {
              var t;
              return null !== (t = e.data) && 'object' === De(t) && (e.headers || (e.headers = {}), e.headers['Content-Type'] = 'application/json;charset=utf-8', e.data = JSON.stringify(e.data)), qe(e).then(function (e) {
                return e.data = Ke(e.data), e;
              }, function (e) {
                return e && e.response && (e.response.data = Ke(e.response.data)), Promise.reject(e);
              });
            }
          },
          {
            key: 'get',
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return this.dispatchRequest(Ee(Ee({}, t), {}, {
                url: e,
                method: 'get'
              }));
            }
          },
          {
            key: 'post',
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return this.dispatchRequest(Ee(Ee({}, n), {}, {
                url: e,
                method: 'post',
                data: n.data ? n.data : t
              }));
            }
          }
        ]), e;
      }(), et = new $e(), tt = function () {
        function e() {
          Ge(this, e), this.state = {};
        }
        return ze(e, [
          {
            key: 'set',
            value: function (e, t) {
              this.state[e] = t;
            }
          },
          {
            key: 'get',
            value: function (e) {
              return this.state[e] || null;
            }
          },
          {
            key: 'remove',
            value: function (e) {
              delete this.state[e];
            }
          }
        ]), e;
      }(), nt = new tt(), rt = {
        set: function (e, t) {
          return localStorage.setItem(e, t);
        },
        get: function (e) {
          return localStorage.getItem(e);
        },
        remove: function (e) {
          return localStorage.removeItem(e);
        }
      };
    try {
      rt.set('__try', 1), rt.get('__try'), rt.remove('__try');
    } catch (e) {
      rt = nt;
    }
    var ot = rt;
    function it() {
      return new Promise(function (e, t) {
        var n, r, o = 'Unknown';
        function i(t) {
          e({
            isPrivate: t,
            browserName: o
          });
        }
        function a(e) {
          return e === 29;
        }
        function c() {
          void 0 !== navigator.maxTouchPoints ? function () {
            try {
              var e = window.indexedDB.open('test', 1);
              e.onupgradeneeded && (e.onupgradeneeded = function (e) {
                var t = e.target.result;
                try {
                  e.target.result.createObjectStore('test', { autoIncrement: true }).put(new Blob()), i(false);
                } catch (e) {
                  /BlobURLs are not yet supported/.test(e.message) ? i(true) : i(false);
                }
              }), i(false);
            } catch (e) {
              i(false);
            }
          }() : function () {
            var e = window.openDatabase, t = window.localStorage;
            try {
              window.openDatabase(null, null, null, null);
            } catch (e) {
              return i(true);
            }
            try {
              window.localStorage.setItem('test', '1'), window.localStorage.removeItem('test');
            } catch (e) {
              return i(true);
            }
            i(false);
          }();
        }
        function s() {
          navigator.webkitTemporaryStorage.queryUsageAndQuota(function (e, t) {
            var n;
            i(t < (void 0 !== (n = window).performance && void 0 !== n.performance.memory && void 0 !== n.performance.memory.jsHeapSizeLimit ? performance.memory.jsHeapSizeLimit : 1073741824));
          }, function (e) {
            t(new Error('detectIncognito somehow failed to query storage quota: ' + e.message));
          });
        }
        function u() {
          void 0 !== Promise && void 0 !== Promise.allSettled ? s() : (0, window.webkitRequestFileSystem)(0, 1, function () {
            i(false);
          }, function () {
            i(true);
          });
        }
        void 0 !== (r = navigator.vendor) && 0 === r.indexOf('Apple') && false ? (o = 'Safari', c()) : function () {
          var e = navigator.vendor;
          return void 0 !== navigator.vendor && 0 === navigator.vendor.indexOf('Google') && false;
        }() ? (n = navigator.userAgent, o = n.match(/Chrome/) ? void 0 !== navigator.brave ? 'Brave' : n.match(/Edg/) ? 'Edge' : n.match(/OPR/) ? 'Opera' : 'Chrome' : 'Chromium', u()) : void 0 !== document.documentElement && void 0 !== document.documentElement.style.MozAppearance && false ? (o = 'Firefox', i(void 0 === navigator.serviceWorker)) : void 0 !== navigator.msSaveBlob && false ? (o = 'Internet Explorer', i(void 0 === window.indexedDB)) : t(new Error('detectIncognito cannot determine the browser'));
      });
    }
    var at = function () {
      return at = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in t = arguments[n])
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }, at.apply(this, arguments);
    };
    function ct(e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, c);
        }
        s((r = r.apply(e, t || [])).next());
      });
    }
    function st(e, t) {
      var n, r, o, i, a = {
          label: 0,
          sent: function () {
            if (1 & o[0])
              throw o[1];
            return o[1];
          },
          trys: [],
          ops: []
        };
      return i = {
        next: c(0),
        throw: c(1),
        return: c(2)
      }, 'function' == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;
      function c(i) {
        return function (c) {
          return function (i) {
            if (n)
              throw new TypeError('Generator is already executing.');
            for (; a;)
              try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
                  return o;
                switch (r = 0, o && (i = [
                    2 & i[0],
                    o.value
                  ]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return a.label++, {
                    value: i[1],
                    done: false
                  };
                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;
                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }
                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
                }
                i = t.call(e, a);
              } catch (e) {
                i = [
                  6,
                  e
                ], r = 0;
              } finally {
                n = o = 0;
              }
            if (5 & i[0])
              throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: true
            };
          }([
            i,
            c
          ]);
        };
      }
    }
    function ut() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
      var r = Array(e), o = 0;
      for (t = 0; t < n; t++)
        for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++)
          r[o] = i[a];
      return r;
    }
    var lt = '3.3.6';
    function dt(e, t) {
      return new Promise(function (n) {
        return setTimeout(n, e, t);
      });
    }
    function ft(e, t) {
      try {
        var n = e();
        (r = n) && 'function' == typeof r.then ? n.then(function (e) {
          return t(true, e);
        }, function (e) {
          return t(false, e);
        }) : t(true, n);
      } catch (e) {
        t(false, e);
      }
      var r;
    }
    function mt(e, t, n) {
      return void 0 === n && (n = 16), ct(this, void 0, void 0, function () {
        var r, o, i;
        return st(this, function (a) {
          switch (a.label) {
          case 0:
            r = Date.now(), o = 0, a.label = 1;
          case 1:
            return o < e.length ? (t(e[o], o), (i = Date.now()) >= r + n ? (r = i, [
              4,
              dt(0)
            ]) : [
              3,
              3
            ]) : [
              3,
              4
            ];
          case 2:
            a.sent(), a.label = 3;
          case 3:
            return ++o, [
              3,
              1
            ];
          case 4:
            return [2];
          }
        });
      });
    }
    function ht(e) {
      e.then(void 0, function () {
      });
    }
    function pt(e, t) {
      e = [
        e[0] >>> 16,
        65535 & e[0],
        e[1] >>> 16,
        65535 & e[1]
      ], t = [
        t[0] >>> 16,
        65535 & t[0],
        t[1] >>> 16,
        65535 & t[1]
      ];
      var n = [
        0,
        0,
        0,
        0
      ];
      return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [
        n[0] << 16 | n[1],
        n[2] << 16 | n[3]
      ];
    }
    function vt(e, t) {
      e = [
        e[0] >>> 16,
        65535 & e[0],
        e[1] >>> 16,
        65535 & e[1]
      ], t = [
        t[0] >>> 16,
        65535 & t[0],
        t[1] >>> 16,
        65535 & t[1]
      ];
      var n = [
        0,
        0,
        0,
        0
      ];
      return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [
        n[0] << 16 | n[1],
        n[2] << 16 | n[3]
      ];
    }
    function bt(e, t) {
      return 32 === (t %= 64) ? [
        e[1],
        e[0]
      ] : t < 32 ? [
        e[0] << t | e[1] >>> 32 - t,
        e[1] << t | e[0] >>> 32 - t
      ] : (t -= 32, [
        e[1] << t | e[0] >>> 32 - t,
        e[0] << t | e[1] >>> 32 - t
      ]);
    }
    function gt(e, t) {
      return 0 === (t %= 64) ? e : t < 32 ? [
        e[0] << t | e[1] >>> 32 - t,
        e[1] << t
      ] : [
        e[1] << t - 32,
        0
      ];
    }
    function yt(e, t) {
      return [
        e[0] ^ t[0],
        e[1] ^ t[1]
      ];
    }
    function wt(e) {
      return e = yt(e, [
        0,
        e[0] >>> 1
      ]), e = yt(e = vt(e, [
        4283543511,
        3981806797
      ]), [
        0,
        e[0] >>> 1
      ]), e = yt(e = vt(e, [
        3301882366,
        444984403
      ]), [
        0,
        e[0] >>> 1
      ]);
    }
    function kt(e) {
      return parseInt(e);
    }
    function St(e) {
      return parseFloat(e);
    }
    function xt(e, t) {
      return 'number' == typeof e && isNaN(e) ? t : e;
    }
    function Lt(e) {
      return e.reduce(function (e, t) {
        return e + (t ? 1 : 0);
      }, 0);
    }
    function Ct(e, t) {
      if (void 0 === t && (t = 1), Math.abs(t) >= 1)
        return Math.round(e / t) * t;
      var n = 1 / t;
      return Math.round(e * n) / n;
    }
    function At(e) {
      return e && 'object' == typeof e && 'message' in e ? e : { message: e };
    }
    function jt(e) {
      return 'function' != typeof e;
    }
    function Pt(e, t, n) {
      var r = Object.keys(e).filter(function (e) {
          return !function (e, t) {
            for (var n = 0, r = e.length; n < r; ++n)
              if (e[n] === t)
                return true;
            return false;
          }(n, e);
        }), o = Array(r.length);
      return mt(r, function (n, r) {
        o[r] = function (e, t) {
          var n = new Promise(function (n) {
            var r = Date.now();
            ft(e.bind(null, t), function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var o = Date.now() - r;
              if (!e[0])
                return n(function () {
                  return {
                    error: At(e[1]),
                    duration: o
                  };
                });
              var i = e[1];
              if (jt(e[1]))
                return n(function () {
                  return {
                    value: e[1],
                    duration: o
                  };
                });
              n(function () {
                return new Promise(function (e) {
                  var t = Date.now();
                  ft(e[1], function () {
                    for (var n = [], r = 0; r < arguments.length; r++)
                      n[r] = arguments[r];
                    var i = o + Date.now() - t;
                    if (!n[0])
                      return e({
                        error: At(n[1]),
                        duration: i
                      });
                    e({
                      value: n[1],
                      duration: i
                    });
                  });
                });
              });
            });
          });
          return ht(n), function () {
            return n.then(function (e) {
              return e();
            });
          };
        }(e[n], t);
      }), function () {
        return ct(this, void 0, void 0, function () {
          var e, t, n, i, a, c;
          return st(this, function (s) {
            switch (s.label) {
            case 0:
              for (e = {}, t = 0, n = r; t < n.length; t++)
                i = n[t], e[i] = void 0;
              a = Array(r.length), c = function () {
                var t;
                return st(this, function (n) {
                  switch (n.label) {
                  case 0:
                    return t = true, [
                      4,
                      mt(r, function (n, r) {
                        if (!a[r])
                          if (o[r]) {
                            var i = o[r]().then(function (t) {
                              return e[n] = t;
                            });
                            ht(i), a[r] = i;
                          } else
                            t = false;
                      })
                    ];
                  case 1:
                    return n.sent(), t ? [
                      2,
                      'break'
                    ] : [
                      4,
                      dt(1)
                    ];
                  case 2:
                    return n.sent(), [2];
                  }
                });
              }, s.label = 1;
            case 1:
              return [
                5,
                c()
              ];
            case 2:
              if ('break' === s.sent())
                return [
                  3,
                  4
                ];
              s.label = 3;
            case 3:
              return [
                3,
                1
              ];
            case 4:
              return [
                4,
                Promise.all(a)
              ];
            case 5:
              return s.sent(), [
                2,
                e
              ];
            }
          });
        });
      };
    }
    function It() {
      var e = window, t = navigator;
      return Lt([
        'MSCSSMatrix' in window,
        'msSetImmediate' in window,
        'msIndexedDB' in window,
        'msMaxTouchPoints' in navigator,
        'msPointerEnabled' in navigator
      ]) >= 4;
    }
    function Vt() {
      var e = window, t = navigator;
      return Lt([
        'webkitPersistentStorage' in navigator,
        'webkitTemporaryStorage' in navigator,
        0 === navigator.vendor.indexOf('Google'),
        'webkitResolveLocalFileSystemURL' in window,
        'BatteryManager' in window,
        'webkitMediaStream' in window,
        'webkitSpeechGrammar' in window
      ]) >= 5;
    }
    function _t() {
      var e = window, t = navigator;
      return Lt([
        'ApplePayError' in window,
        'CSSPrimitiveValue' in window,
        'Counter' in window,
        0 === navigator.vendor.indexOf('Apple'),
        'getStorageUpdates' in navigator,
        'WebKitMediaKeys' in window
      ]) >= 4;
    }
    function Ot() {
      var e = window;
      return Lt([
        'safari' in window,
        !('DeviceMotionEvent' in window),
        !('ongestureend' in window),
        !('standalone' in navigator)
      ]) >= 3;
    }
    function Rt() {
      var e = document;
      return (document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen).call(document);
    }
    function Mt() {
      var e = Vt(), t = function () {
          var e, t, n = window;
          return Lt([
            'buildID' in navigator,
            'MozAppearance' in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}),
            'onmozfullscreenchange' in window,
            'mozInnerScreenX' in window,
            'CSSMozDocumentRule' in window,
            'CanvasCaptureMediaStream' in window
          ]) >= 4;
        }();
      if (!e && !t)
        return false;
      var n = window;
      return Lt([
        'onorientationchange' in window,
        'orientation' in window,
        e && !('SharedWorker' in window),
        t && /android/i.test(navigator.appVersion)
      ]) >= 2;
    }
    function Wt(e) {
      var t = new Error(e);
      return t.name = e, t;
    }
    function Nt(e, t, n) {
      var r, o, i;
      return void 0 === n && (n = 50), ct(this, void 0, void 0, function () {
        var a, c;
        return st(this, function (s) {
          switch (s.label) {
          case 0:
            a = document, s.label = 1;
          case 1:
            return a.body ? [
              3,
              3
            ] : [
              4,
              dt(n)
            ];
          case 2:
            return s.sent(), [
              3,
              1
            ];
          case 3:
            c = a.createElement('iframe'), s.label = 4;
          case 4:
            return s.trys.push([
              4,
              ,
              10,
              11
            ]), [
              4,
              new Promise(function (e, n) {
                var r = false, o = function () {
                    r = true, e();
                  };
                c.onload = o, c.onerror = function (e) {
                  r = true, n(e);
                };
                var i = c.style;
                c.style.setProperty('display', 'block', 'important'), c.style.position = 'absolute', c.style.top = '0', c.style.left = '0', c.style.visibility = 'hidden', t && 'srcdoc' in c ? c.srcdoc = t : c.src = 'about:blank', a.body.appendChild(c);
                var s = function () {
                  var e, t;
                  r || ('complete' === (null === (t = null === (e = c.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? o() : setTimeout(s, 10));
                };
                s();
              })
            ];
          case 5:
            s.sent(), s.label = 6;
          case 6:
            return (null === (o = null === (r = c.contentWindow) || void 0 === r ? void 0 : r.document) || void 0 === o ? void 0 : o.body) ? [
              3,
              8
            ] : [
              4,
              dt(n)
            ];
          case 7:
            return s.sent(), [
              3,
              6
            ];
          case 8:
            return [
              4,
              e(c, c.contentWindow)
            ];
          case 9:
            return [
              2,
              s.sent()
            ];
          case 10:
            return null === (i = c.parentNode) || void 0 === i || i.removeChild(c), [7];
          case 11:
            return [2];
          }
        });
      });
    }
    function Tt(e) {
      for (var t = function (e) {
            for (var t, n, r = "Unexpected syntax '" + e + "'", o = /^\s*([a-z-]*)(.*)$/i.exec(e), i = o[1] || void 0, a = {}, c = /([.:#][\w-]+|\[.+?\])/gi, s = function (e, t) {
                  a[e] = a[e] || [], a[e].push(t);
                };;) {
              var u = /([.:#][\w-]+|\[.+?\])/gi.exec(o[2]);
              if (!u)
                break;
              var l = u[0];
              switch (u[0][0]) {
              case '.':
                s('class', u[0].slice(1));
                break;
              case '#':
                s('id', u[0].slice(1));
                break;
              case '[':
                var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(u[0]);
                if (!d)
                  throw new Error(r);
                s(d[1], null !== (n = null !== (t = d[4]) && void 0 !== t ? t : d[5]) && void 0 !== n ? n : '');
                break;
              default:
                throw new Error(r);
              }
            }
            return [
              i,
              a
            ];
          }(e), n = t[0], r = t[1], o = document.createElement(null != n ? n : 'div'), i = 0, a = Object.keys(r); i < a.length; i++) {
        var c = a[i], s = r[a[i]].join(' ');
        'style' === a[i] ? Ft(o.style, s) : o.setAttribute(a[i], s);
      }
      return o;
    }
    function Ft(e, t) {
      for (var n = 0, r = t.split(';'); n < r.length; n++) {
        var o = r[n], i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(r[n]);
        if (i) {
          var a = i[1], c = i[2], s = i[4];
          e.setProperty(i[1], i[2], i[4] || '');
        }
      }
    }
    var Zt = [
        'monospace',
        'sans-serif',
        'serif'
      ], Et = [
        'sans-serif-thin',
        'ARNO PRO',
        'Agency FB',
        'Arabic Typesetting',
        'Arial Unicode MS',
        'AvantGarde Bk BT',
        'BankGothic Md BT',
        'Batang',
        'Bitstream Vera Sans Mono',
        'Calibri',
        'Century',
        'Century Gothic',
        'Clarendon',
        'EUROSTILE',
        'Franklin Gothic',
        'Futura Bk BT',
        'Futura Md BT',
        'GOTHAM',
        'Gill Sans',
        'HELV',
        'Haettenschweiler',
        'Helvetica Neue',
        'Humanst521 BT',
        'Leelawadee',
        'Letter Gothic',
        'Levenim MT',
        'Lucida Bright',
        'Lucida Sans',
        'Menlo',
        'MS Mincho',
        'MS Outlook',
        'MS Reference Specialty',
        'MS UI Gothic',
        'MT Extra',
        'MYRIAD PRO',
        'Marlett',
        'Meiryo UI',
        'Microsoft Uighur',
        'Minion Pro',
        'Monotype Corsiva',
        'PMingLiU',
        'Pristina',
        'SCRIPTINA',
        'Segoe UI Light',
        'Serifa',
        'SimHei',
        'Small Fonts',
        'Staccato222 BT',
        'TRAJAN PRO',
        'Univers CE 55 Medium',
        'Vrinda',
        'ZWAdobeF'
      ];
    function Xt(e) {
      return e.toDataURL();
    }
    var Dt, Yt;
    function Ht() {
      var e = this;
      return function () {
        if (void 0 === Yt) {
          var e = function () {
            var t = Gt();
            Jt(t) ? Yt = setTimeout(e, 2500) : (Dt = t, Yt = void 0);
          };
          e();
        }
      }(), function () {
        return ct(e, void 0, void 0, function () {
          var e;
          return st(this, function (t) {
            switch (2) {
            case 0:
              return Jt(e = Gt()) ? Dt ? [
                2,
                ut(Dt)
              ] : (n = document).fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement ? [
                4,
                Rt()
              ] : [
                3,
                2
              ] : [
                3,
                2
              ];
            case 1:
              t.sent(), e = Gt(), t.label = 2;
            case 2:
              return Jt(e) || (Dt = e), [
                2,
                e
              ];
            }
            var n;
          });
        });
      };
    }
    function Gt() {
      var e = screen;
      return [
        xt(parseFloat(screen.availTop), null),
        xt(parseFloat(screen.width) - parseFloat(screen.availWidth) - xt(parseFloat(screen.availLeft), 0), null),
        xt(parseFloat(screen.height) - parseFloat(screen.availHeight) - xt(parseFloat(screen.availTop), 0), null),
        xt(parseFloat(screen.availLeft), null)
      ];
    }
    function Jt(e) {
      for (var t = 0; t < 4; ++t)
        if (e[t])
          return false;
      return true;
    }
    function zt(e) {
      var t;
      return ct(this, void 0, void 0, function () {
        var n, r, o, i, a, c, s;
        return st(this, function (u) {
          switch (1) {
          case 0:
            for (n = document, r = n.createElement('div'), o = new Array(e.length), i = {}, Ut(r), s = 0; s < e.length; ++s)
              a = Tt(e[s]), Ut(c = n.createElement('div')), c.appendChild(a), r.appendChild(c), o[s] = a;
            u.label = 1;
          case 1:
            return n.body ? [
              3,
              3
            ] : [
              4,
              dt(50)
            ];
          case 2:
            return u.sent(), [
              3,
              1
            ];
          case 3:
            n.body.appendChild(r);
            try {
              for (s = 0; s < e.length; ++s)
                o[s].offsetParent || (i[e[s]] = true);
            } finally {
              null === (t = r.parentNode) || void 0 === t || t.removeChild(r);
            }
            return [
              2,
              i
            ];
          }
        });
      });
    }
    function Ut(e) {
      e.style.setProperty('display', 'block', 'important');
    }
    function Bt(e) {
      return matchMedia('(inverted-colors: ' + e + ')').matches;
    }
    function Qt(e) {
      return matchMedia('(forced-colors: ' + e + ')').matches;
    }
    function qt(e) {
      return matchMedia('(prefers-contrast: ' + e + ')').matches;
    }
    function Kt(e) {
      return matchMedia('(prefers-reduced-motion: ' + e + ')').matches;
    }
    function $t(e) {
      return matchMedia('(dynamic-range: ' + e + ')').matches;
    }
    var en = Math, tn = function () {
        return 0;
      };
    var nn = {
      default: [],
      apple: [{ font: '-apple-system-body' }],
      serif: [{ fontFamily: 'serif' }],
      sans: [{ fontFamily: 'sans-serif' }],
      mono: [{ fontFamily: 'monospace' }],
      min: [{ fontSize: '1px' }],
      system: [{ fontFamily: 'system-ui' }]
    };
    var rn = {
      fonts: function () {
        return Nt(function (e, t) {
          var n = t.document, r = t.document.body;
          t.document.body.style.fontSize = '48px';
          var o = t.document.createElement('div'), i = {}, a = {}, c = function (e) {
              var t = t.document.createElement('span'), r = t.style;
              return t.style.position = 'absolute', t.style.top = '0', t.style.left = '0', t.style.fontFamily = e, t.textContent = 'mmMwWLliI0O&1', o.appendChild(t), t;
            }, s = Zt.map(c), u = function () {
              for (var e = {}, t = function (t) {
                    e[t] = Zt.map(function (e) {
                      return function (e, t) {
                        return c("'" + e + "'," + t);
                      }(t, e);
                    });
                  }, n = 0, r = Et; n < r.length; n++) {
                t(r[n]);
              }
              return e;
            }();
          t.document.body.appendChild(o);
          for (var l = 0; l < Zt.length; l++)
            i[Zt[l]] = s[l].offsetWidth, a[Zt[l]] = s[l].offsetHeight;
          return Et.filter(function (e) {
            return t = u[e], Zt.some(function (e, n) {
              return t[n].offsetWidth !== i[e] || t[n].offsetHeight !== a[e];
            });
            var t;
          });
        });
      },
      domBlockers: function (e) {
        var t = (void 0 === e ? {} : e).debug;
        return ct(this, void 0, void 0, function () {
          var e, n, r, o, i;
          return st(this, function (a) {
            switch (a.label) {
            case 0:
              return _t() || Mt() ? (c = atob, e = {
                abpIndo: [
                  '#Iklan-Melayang',
                  '#Kolom-Iklan-728',
                  '#SidebarIklan-wrapper',
                  c('YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld'),
                  '[title="ALIENBOLA" i]'
                ],
                abpvn: [
                  '#quangcaomb',
                  c('Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ='),
                  '.quangcao',
                  c('W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=='),
                  c('W2hyZWZePSJodHRwczovL3piZXQudm4vIl0=')
                ],
                adBlockFinland: [
                  '.mainostila',
                  c('LnNwb25zb3JpdA=='),
                  '.ylamainos',
                  c('YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd'),
                  c('YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd')
                ],
                adBlockPersian: [
                  '#navbar_notice_50',
                  '.kadr',
                  'TABLE[width="140px"]',
                  '#divAgahi',
                  c('I2FkMl9pbmxpbmU=')
                ],
                adBlockWarningRemoval: [
                  '#adblock-honeypot',
                  '.adblocker-root',
                  '.wp_adblock_detect',
                  c('LmhlYWRlci1ibG9ja2VkLWFk'),
                  c('I2FkX2Jsb2NrZXI=')
                ],
                adGuardAnnoyances: [
                  'amp-embed[type="zen"]',
                  '.hs-sosyal',
                  '#cookieconsentdiv',
                  'div[class^="app_gdpr"]',
                  '.as-oil'
                ],
                adGuardBase: [
                  '.BetterJsPopOverlay',
                  c('I2FkXzMwMFgyNTA='),
                  c('I2Jhbm5lcmZsb2F0MjI='),
                  c('I2FkLWJhbm5lcg=='),
                  c('I2NhbXBhaWduLWJhbm5lcg==')
                ],
                adGuardChinese: [
                  c('LlppX2FkX2FfSA=='),
                  c('YVtocmVmKj0iL29kMDA1LmNvbSJd'),
                  c('YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd'),
                  '.qq_nr_lad',
                  '#widget-quan'
                ],
                adGuardFrench: [
                  c('I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr'),
                  '#pavePub',
                  c('LmFkLWRlc2t0b3AtcmVjdGFuZ2xl'),
                  '.mobile_adhesion',
                  '.widgetadv'
                ],
                adGuardGerman: [
                  c('LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=='),
                  c('LmJveHN0YXJ0d2VyYnVuZw=='),
                  c('LndlcmJ1bmcz'),
                  c('YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0='),
                  c('YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0=')
                ],
                adGuardJapanese: [
                  '#kauli_yad_1',
                  c('YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0='),
                  c('Ll9wb3BJbl9pbmZpbml0ZV9hZA=='),
                  c('LmFkZ29vZ2xl'),
                  c('LmFkX3JlZ3VsYXIz')
                ],
                adGuardMobile: [
                  c('YW1wLWF1dG8tYWRz'),
                  c('LmFtcF9hZA=='),
                  'amp-embed[type="24smi"]',
                  '#mgid_iframe1',
                  c('I2FkX2ludmlld19hcmVh')
                ],
                adGuardRussian: [
                  c('YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0='),
                  c('LnJlY2xhbWE='),
                  'div[id^="smi2adblock"]',
                  c('ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd'),
                  c('I2FkX3NxdWFyZQ==')
                ],
                adGuardSocial: [
                  c('YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0='),
                  c('YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0='),
                  '.etsy-tweet',
                  '#inlineShare',
                  '.popup-social'
                ],
                adGuardSpanishPortuguese: [
                  '#barraPublicidade',
                  '#Publicidade',
                  '#publiEspecial',
                  '#queTooltip',
                  c('W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0=')
                ],
                adGuardTrackingProtection: [
                  '#qoo-counter',
                  c('YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=='),
                  c('YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0='),
                  c('YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=='),
                  '#top100counter'
                ],
                adGuardTurkish: [
                  '#backkapat',
                  c('I3Jla2xhbWk='),
                  c('YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0='),
                  c('YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd'),
                  c('YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==')
                ],
                bulgarian: [
                  c('dGQjZnJlZW5ldF90YWJsZV9hZHM='),
                  '#ea_intext_div',
                  '.lapni-pop-over',
                  '#xenium_hot_offers',
                  c('I25ld0Fk')
                ],
                easyList: [
                  c('I0FEX0NPTlRST0xfMjg='),
                  c('LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy'),
                  '.universalboxADVBOX03',
                  c('LmFkdmVydGlzZW1lbnQtNzI4eDkw'),
                  c('LnNxdWFyZV9hZHM=')
                ],
                easyListChina: [
                  c('YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0='),
                  c('LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=='),
                  c('LmZyb250cGFnZUFkdk0='),
                  '#taotaole',
                  '#aafoot.top_box'
                ],
                easyListCookie: [
                  '#AdaCompliance.app-notice',
                  '.text-center.rgpd',
                  '.panel--cookie',
                  '.js-cookies-andromeda',
                  '.elxtr-consent'
                ],
                easyListCzechSlovak: [
                  '#onlajny-stickers',
                  c('I3Jla2xhbW5pLWJveA=='),
                  c('LnJla2xhbWEtbWVnYWJvYXJk'),
                  '.sklik',
                  c('W2lkXj0ic2tsaWtSZWtsYW1hIl0=')
                ],
                easyListDutch: [
                  c('I2FkdmVydGVudGll'),
                  c('I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=='),
                  '.adstekst',
                  c('YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0='),
                  '#semilo-lrectangle'
                ],
                easyListGermany: [
                  c('I0FkX1dpbjJkYXk='),
                  c('I3dlcmJ1bmdzYm94MzAw'),
                  c('YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd'),
                  c('I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu'),
                  c('YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0=')
                ],
                easyListItaly: [
                  c('LmJveF9hZHZfYW5udW5jaQ=='),
                  '.sb-box-pubbliredazionale',
                  c('YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd'),
                  c('YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd'),
                  c('YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==')
                ],
                easyListLithuania: [
                  c('LnJla2xhbW9zX3RhcnBhcw=='),
                  c('LnJla2xhbW9zX251b3JvZG9z'),
                  c('aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd'),
                  c('aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd'),
                  c('aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd')
                ],
                estonian: [c('QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==')],
                fanboyAnnoyances: [
                  '#feedback-tab',
                  '#taboola-below-article',
                  '.feedburnerFeedBlock',
                  '.widget-feedburner-counter',
                  '[title="Subscribe to our blog"]'
                ],
                fanboyAntiFacebook: ['.util-bar-module-firefly-visible'],
                fanboyEnhancedTrackers: [
                  '.open.pushModal',
                  '#issuem-leaky-paywall-articles-zero-remaining-nag',
                  '#sovrn_container',
                  'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
                  '.BlockNag__Card'
                ],
                fanboySocial: [
                  '.td-tags-and-social-wrapper-box',
                  '.twitterContainer',
                  '.youtube-social',
                  'a[title^="Like us on Facebook"]',
                  'img[alt^="Share on Digg"]'
                ],
                frellwitSwedish: [
                  c('YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=='),
                  c('YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=='),
                  'article.category-samarbete',
                  c('ZGl2LmhvbGlkQWRz'),
                  'ul.adsmodern'
                ],
                greekAdBlock: [
                  c('QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd'),
                  c('QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=='),
                  c('QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd'),
                  'DIV.agores300',
                  'TABLE.advright'
                ],
                hungarian: [
                  '#cemp_doboz',
                  '.optimonk-iframe-container',
                  c('LmFkX19tYWlu'),
                  c('W2NsYXNzKj0iR29vZ2xlQWRzIl0='),
                  '#hirdetesek_box'
                ],
                iDontCareAboutCookies: [
                  '.alert-info[data-block-track*="CookieNotice"]',
                  '.ModuleTemplateCookieIndicator',
                  '.o--cookies--container',
                  '.cookie-msg-info-container',
                  '#cookies-policy-sticky'
                ],
                icelandicAbp: [c('QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==')],
                latvian: [
                  c('YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0='),
                  c('YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==')
                ],
                listKr: [
                  c('YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0='),
                  c('I2xpdmVyZUFkV3JhcHBlcg=='),
                  c('YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=='),
                  c('aW5zLmZhc3R2aWV3LWFk'),
                  '.revenue_unit_item.dable'
                ],
                listeAr: [
                  c('LmdlbWluaUxCMUFk'),
                  '.right-and-left-sponsers',
                  c('YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=='),
                  c('YVtocmVmKj0iYm9vcmFxLm9yZyJd'),
                  c('YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd')
                ],
                listeFr: [
                  c('YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=='),
                  c('I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=='),
                  c('YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0='),
                  '.site-pub-interstitiel',
                  'div[id^="crt-"][data-criteo-id]'
                ],
                officialPolish: [
                  '#ceneo-placeholder-ceneo-12',
                  c('W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd'),
                  c('YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=='),
                  c('YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=='),
                  c('ZGl2I3NrYXBpZWNfYWQ=')
                ],
                ro: [
                  c('YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd'),
                  'a[href^="/magazin/"]',
                  c('YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd'),
                  c('YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0='),
                  c('YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd')
                ],
                ruAd: [
                  c('YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd'),
                  c('YVtocmVmKj0iLy91dGltZy5ydS8iXQ=='),
                  c('YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0='),
                  '#pgeldiz',
                  '.yandex-rtb-block'
                ],
                thaiAds: [
                  'a[href*=macau-uta-popup]',
                  c('I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=='),
                  c('LmFkczMwMHM='),
                  '.bumq',
                  '.img-kosana'
                ],
                webAnnoyancesUltralist: [
                  '#mod-social-share-2',
                  '#social-tools',
                  c('LmN0cGwtZnVsbGJhbm5lcg=='),
                  '.zergnet-recommend',
                  '.yt.btn-link.btn-md.btn'
                ]
              }, n = Object.keys(e), [
                4,
                zt((i = []).concat.apply(i, n.map(function (t) {
                  return e[t];
                })))
              ]) : [
                2,
                void 0
              ];
            case 1:
              return r = a.sent(), (void 0 === e ? {} : e).debug && function (e, t) {
                for (var n = 'DOM blockers debug:\n```', r = 0, o = Object.keys(e); r < o.length; r++) {
                  var i = o[r];
                  n += '\n' + o[r] + ':';
                  for (var a = 0, c = e[o[r]]; a < c.length; a++) {
                    var s = c[a];
                    n += '\n  ' + (t[c[a]] ? '🚫' : '➡️') + ' ' + c[a];
                  }
                }
                console.log(n + '\n```');
              }(e, r), (o = n.filter(function (t) {
                var n = e[t];
                return Lt(e[t].map(function (e) {
                  return r[e];
                })) > 0.6 * e[t].length;
              })).sort(), [
                2,
                o
              ];
            }
            var c;
          });
        });
      },
      fontPreferences: function () {
        return function (e, t) {
          void 0 === t && (t = 4000);
          return Nt(function (n, r) {
            var o = r.document, i = r.document.body, a = r.document.body.style;
            r.document.body.style.width = t + 'px', r.document.body.style.webkitTextSizeAdjust = r.document.body.style.textSizeAdjust = 'none', Vt() ? r.document.body.style.zoom = '' + 1 / r.devicePixelRatio : _t() && (r.document.body.style.zoom = 'reset');
            var c = r.document.createElement('div');
            return c.textContent = ut(Array(t / 20 << 0)).map(function () {
              return 'word';
            }).join(' '), r.document.body.appendChild(c), e(r.document, r.document.body);
          }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
        }(function (e, t) {
          for (var n = {}, r = {}, o = 0, i = [
                'default',
                'apple',
                'serif',
                'sans',
                'mono',
                'min',
                'system'
              ]; o < i.length; o++) {
            var a = i[o], c = nn[a], s = nn[a][0], u = void 0 === nn[a][0] ? {} : nn[a][0], l = nn[a][1], d = void 0 === nn[a][1] ? 'mmMwWLliI0fiflO&1' : nn[a][1], f = e.createElement('span');
            f.textContent = d, f.style.whiteSpace = 'nowrap';
            for (var m = 0, h = Object.keys(u); m < h.length; m++) {
              var p = h[m], v = u[h[m]];
              void 0 !== u[h[m]] && (f.style[h[m]] = u[h[m]]);
            }
            n[a] = f, t.appendChild(e.createElement('br')), t.appendChild(f);
          }
          for (var b = 0, g = [
                'default',
                'apple',
                'serif',
                'sans',
                'mono',
                'min',
                'system'
              ]; b < g.length; b++) {
            r[a = g[b]] = n[a].getBoundingClientRect().width;
          }
          return r;
        });
      },
      audio: function () {
        var e = window, t = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if (!t)
          return -2;
        if (_t() && !Ot() && !function () {
            var e = window;
            return Lt([
              'DOMRectList' in window,
              'RTCPeerConnectionIceEvent' in window,
              'SVGGeometryElement' in window,
              'ontransitioncancel' in window
            ]) >= 3;
          }())
          return -1;
        var n = new t(1, 5000, 44100), r = n.createOscillator();
        r.type = 'triangle', r.frequency.value = 10000;
        var o = n.createDynamicsCompressor();
        o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = 0.25, r.connect(o), o.connect(n.destination), r.start(0);
        var i = function (e) {
            var t = 3, n = 500, r = 500, o = 5000, i = function () {
              };
            return [
              new Promise(function (a, c) {
                var s = false, u = 0, l = 0;
                e.oncomplete = function (e) {
                  return a(e.renderedBuffer);
                };
                var d = function () {
                    setTimeout(function () {
                      return c(Wt('timeout'));
                    }, Math.min(500, l + 5000 - Date.now()));
                  }, f = function () {
                    try {
                      switch (e.startRendering(), e.state) {
                      case 'running':
                        l = Date.now(), s && d();
                        break;
                      case 'suspended':
                        document.hidden || u++, s && u >= 3 ? c(Wt('suspended')) : setTimeout(f, 500);
                      }
                    } catch (e) {
                      c(e);
                    }
                  };
                f(), i = function () {
                  s || (s = true, l > 0 && d());
                };
              }),
              i
            ];
          }(n), a = i[0], c = i[1], s = i[0].then(function (e) {
            return function (e) {
              for (var t = 0, n = 0; n < e.length; ++n)
                t += Math.abs(e[n]);
              return t;
            }(e.getChannelData(0).subarray(4500));
          }, function (e) {
            if ('timeout' === e.name || 'suspended' === e.name)
              return -3;
            throw e;
          });
        return ht(s), function () {
          return i[1](), s;
        };
      },
      screenFrame: function () {
        var e = this, t = Ht();
        return function () {
          return ct(e, void 0, void 0, function () {
            var e, n;
            return st(this, function (r) {
              switch (r.label) {
              case 0:
                return [
                  4,
                  t()
                ];
              case 1:
                return e = r.sent(), [
                  2,
                  [
                    (n = function (e) {
                      return null === e ? null : Ct(e, 10);
                    })(e[0]),
                    n(e[1]),
                    n(e[2]),
                    n(e[3])
                  ]
                ];
              }
            });
          });
        };
      },
      osCpu: function () {
        return navigator.oscpu;
      },
      languages: function () {
        var e, t = navigator, n = [], r = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage;
        if (void 0 !== r && n.push([r]), Array.isArray(navigator.languages))
          Vt() && Lt([
            !('MediaSettingsRange' in (e = window)),
            'RTCEncodedAudioFrame' in e,
            '' + e.Intl == '[object Intl]',
            '' + e.Reflect == '[object Reflect]'
          ]) >= 3 || n.push(navigator.languages);
        else if ('string' == typeof navigator.languages) {
          var o = navigator.languages;
          navigator.languages && n.push(navigator.languages.split(','));
        }
        return n;
      },
      colorDepth: function () {
        return window.screen.colorDepth;
      },
      deviceMemory: function () {
        return xt(parseFloat(navigator.deviceMemory), void 0);
      },
      screenResolution: function () {
        var e = screen, t = function (e) {
            return xt(parseInt(e), null);
          }, n = [
            t(screen.width),
            t(screen.height)
          ];
        return n.sort().reverse(), n;
      },
      hardwareConcurrency: function () {
        return xt(parseInt(navigator.hardwareConcurrency), void 0);
      },
      timezone: function () {
        var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
        if (t) {
          var n = new t().resolvedOptions().timeZone;
          if (new t().resolvedOptions().timeZone)
            return new t().resolvedOptions().timeZone;
        }
        var r, o = (r = new Date().getFullYear(), -Math.max(parseFloat(new Date(r, 0, 1).getTimezoneOffset()), parseFloat(new Date(r, 6, 1).getTimezoneOffset())));
        return 'UTC' + (o >= 0 ? '+' : '') + Math.abs(o);
      },
      sessionStorage: function () {
        try {
          return !!window.sessionStorage;
        } catch (e) {
          return true;
        }
      },
      localStorage: function () {
        try {
          return !!window.localStorage;
        } catch (e) {
          return true;
        }
      },
      indexedDB: function () {
        var e, t;
        if (!(It() || (e = window, t = navigator, Lt([
            'msWriteProfilerMark' in e,
            'MSStream' in e,
            'msLaunchUri' in t,
            'msSaveBlob' in t
          ]) >= 3 && !It())))
          try {
            return !!window.indexedDB;
          } catch (e) {
            return true;
          }
      },
      openDatabase: function () {
        return !!window.openDatabase;
      },
      cpuClass: function () {
        return navigator.cpuClass;
      },
      platform: function () {
        var e = navigator.platform;
        return 'MacIntel' === navigator.platform && _t() && !Ot() ? function () {
          if ('iPad' === navigator.platform)
            return true;
          var e = screen, t = screen.width / screen.height;
          return Lt([
            'MediaSource' in window,
            !!Element.prototype.webkitRequestFullscreen,
            t > 0.65 && t < 1.53
          ]) >= 2;
        }() ? 'iPad' : 'iPhone' : navigator.platform;
      },
      plugins: function () {
        var e = navigator.plugins;
        if (navigator.plugins) {
          for (var t = [], n = 0; n < navigator.plugins.length; ++n) {
            var r = navigator.plugins[n];
            if (navigator.plugins[n]) {
              for (var o = [], i = 0; i < navigator.plugins[n].length; ++i) {
                var a = navigator.plugins[n][i];
                o.push({
                  type: navigator.plugins[n][i].type,
                  suffixes: navigator.plugins[n][i].suffixes
                });
              }
              t.push({
                name: navigator.plugins[n].name,
                description: navigator.plugins[n].description,
                mimeTypes: o
              });
            }
          }
          return t;
        }
      },
      canvas: function () {
        var e, t, n = false, r = function () {
            var e = document.createElement('canvas');
            return e.width = 1, e.height = 1, [
              e,
              e.getContext('2d')
            ];
          }(), o = r[0], i = r[1];
        if (function (e, t) {
            return !(!t || !e.toDataURL);
          }(r[0], r[1])) {
          n = function (e) {
            return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, 'evenodd');
          }(r[1]), function (e, t) {
            e.width = 240, e.height = 60, t.textBaseline = 'alphabetic', t.fillStyle = '#f60', t.fillRect(100, 1, 62, 20), t.fillStyle = '#069', t.font = '11pt "Times New Roman"';
            var n = 'Cwm fjordbank gly 😃';
            t.fillText('Cwm fjordbank gly 😃', 2, 15), t.fillStyle = 'rgba(102, 204, 0, 0.2)', t.font = '18pt Arial', t.fillText('Cwm fjordbank gly 😃', 4, 45);
          }(r[0], r[1]);
          var a = e.toDataURL();
          a !== e.toDataURL() ? e = t = 'unstable' : (t = a, function (e, t) {
            e.width = 122, e.height = 110, t.globalCompositeOperation = 'multiply';
            for (var n = 0, r = [
                  [
                    '#f2f',
                    40,
                    40
                  ],
                  [
                    '#2ff',
                    80,
                    40
                  ],
                  [
                    '#ff2',
                    60,
                    80
                  ]
                ]; n < r.length; n++) {
              var o = r[n], i = r[n][0], a = r[n][1], c = r[n][2];
              t.fillStyle = r[n][0], t.beginPath(), t.arc(r[n][1], r[n][2], 40, 0, 2 * Math.PI, true), t.closePath(), t.fill();
            }
            t.fillStyle = '#f9c', t.arc(60, 60, 60, 0, 2 * Math.PI, true), t.arc(60, 60, 20, 0, 2 * Math.PI, true), t.fill('evenodd');
          }(r[0], r[1]), e = e.toDataURL());
        } else
          e = t = '';
        return {
          winding: n,
          geometry: e,
          text: t
        };
      },
      touchSupport: function () {
        var e, t = navigator, n = 0;
        void 0 !== navigator.maxTouchPoints ? n = parseInt(navigator.maxTouchPoints) : void 0 !== navigator.msMaxTouchPoints && (n = navigator.msMaxTouchPoints);
        try {
          document.createEvent('TouchEvent'), e = true;
        } catch (t) {
          e = false;
        }
        return {
          maxTouchPoints: n,
          touchEvent: e,
          touchStart: 'ontouchstart' in window
        };
      },
      vendor: function () {
        return navigator.vendor || '';
      },
      vendorFlavors: function () {
        for (var e = [], t = 0, n = [
              'chrome',
              'safari',
              '__crWeb',
              '__gCrWeb',
              'yandex',
              '__yb',
              '__ybro',
              '__firefox__',
              '__edgeTrackingPreventionStatistics',
              'webkit',
              'oprt',
              'samsungAr',
              'ucweb',
              'UCShellJava',
              'puffinDevice'
            ]; t < n.length; t++) {
          var r = n[t], o = window[n[t]];
          window[n[t]] && 'object' == typeof window[n[t]] && e.push(n[t]);
        }
        return e.sort();
      },
      cookiesEnabled: function () {
        var e = document;
        try {
          document.cookie = 'cookietest=1; SameSite=Strict;';
          var t = -1 !== document.cookie.indexOf('cookietest=');
          return document.cookie = 'cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT', t;
        } catch (e) {
          return false;
        }
      },
      colorGamut: function () {
        for (var e = 0, t = [
              'rec2020',
              'p3',
              'srgb'
            ]; e < t.length; e++) {
          var n = t[e];
          if (matchMedia('(color-gamut: ' + t[e] + ')').matches)
            return t[e];
        }
      },
      invertedColors: function () {
        return !!Bt('inverted') || !Bt('none') && void 0;
      },
      forcedColors: function () {
        return !!Qt('active') || !Qt('none') && void 0;
      },
      monochrome: function () {
        if (matchMedia('(min-monochrome: 0)').matches) {
          for (var e = 0; e <= 100; ++e)
            if (matchMedia('(max-monochrome: ' + e + ')').matches)
              return e;
          throw new Error('Too high value');
        }
      },
      contrast: function () {
        return qt('no-preference') ? 0 : qt('high') || qt('more') ? 1 : qt('low') || qt('less') ? -1 : qt('forced') ? 10 : void 0;
      },
      reducedMotion: function () {
        return !!Kt('reduce') || !Kt('no-preference') && void 0;
      },
      hdr: function () {
        return !!$t('high') || !$t('standard') && void 0;
      },
      math: function () {
        var e, t = Math.acos || tn, n = Math.acosh || tn, r = Math.asin || tn, o = Math.asinh || tn, i = Math.atanh || tn, a = Math.atan || tn, c = Math.sin || tn, s = Math.sinh || tn, u = Math.cos || tn, l = Math.cosh || tn, d = Math.tan || tn, f = Math.tanh || tn, m = Math.exp || tn, h = Math.expm1 || tn, p = Math.log1p || tn;
        return {
          acos: 1.4473588658278522,
          acosh: 709.889355822726,
          acoshPf: (e = 1e+154, Math.log(1e+154 + Math.sqrt(1e+308))),
          asin: 0.12343746096704435,
          asinh: 0.881373587019543,
          asinhPf: function (e) {
            return Math.log(e + Math.sqrt(e * e + 1));
          }(1),
          atanh: 0.5493061443340548,
          atanhPf: function (e) {
            return Math.log((1 + e) / (1 - e)) / 2;
          }(0.5),
          atan: 0.4636476090008061,
          sin: 0.8178819121159085,
          sinh: 1.1752011936438014,
          sinhPf: function (e) {
            return Math.exp(e) - 1 / Math.exp(e) / 2;
          }(1),
          cos: -'0.8390715290095377',
          cosh: 1.5430806348152437,
          coshPf: function (e) {
            return (Math.exp(e) + 1 / Math.exp(e)) / 2;
          }(1),
          tan: -'1.4214488238747245',
          tanh: 0.7615941559557649,
          tanhPf: function (e) {
            return (Math.exp(2 * e) - 1) / (Math.exp(2 * e) + 1);
          }(1),
          exp: 2.718281828459045,
          expm1: 1.718281828459045,
          expm1Pf: function (e) {
            return Math.exp(e) - 1;
          }(1),
          log1p: 2.3978952727983707,
          log1pPf: function (e) {
            return Math.log(1 + e);
          }(10),
          powPI: function (e) {
            return Math.pow(Math.PI, e);
          }(-100)
        };
      }
    };
    function on(e) {
      var t = function (e) {
          if (Mt())
            return 0.4;
          if (_t())
            return Ot() ? 0.5 : 0.3;
          var t = e.platform.value || '';
          if (/^Win/.test(t))
            return 0.6;
          if (/^Mac/.test(t))
            return 0.5;
          return 0.7;
        }(e), n = function (e) {
          return Ct(0.99 + 0.01 * e, 0.0001);
        }(t);
      return {
        score: t,
        comment: '$ if upgrade to Pro: https://fpjs.dev/pro'.replace(/\$/g, '' + n)
      };
    }
    function an(e) {
      return JSON.stringify(e, function (e, t) {
        return t instanceof Error ? at({
          name: (n = t).name,
          message: n.message,
          stack: null === (r = n.stack) || void 0 === r ? void 0 : r.split('\n')
        }, n) : t;
        var n, r;
      }, 2);
    }
    function cn(e) {
      return function (e, t) {
        t = t || 0;
        var n, r = (e = e || '').length % 16, o = e.length - r, i = [
            0,
            t
          ], a = [
            0,
            t
          ], c = [
            0,
            0
          ], s = [
            0,
            0
          ], u = [
            2277735313,
            289559509
          ], l = [
            1291169091,
            658871167
          ];
        for (n = 0; n < o; n += 16)
          c = [
            255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24,
            255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24
          ], s = [
            255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24,
            255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24
          ], c = bt(c = vt(c, u), 31), i = pt(i = bt(i = yt(i, c = vt(c, l)), 27), a), i = pt(vt(i, [
            0,
            5
          ]), [
            0,
            1390208809
          ]), s = bt(s = vt(s, l), 33), a = pt(a = bt(a = yt(a, s = vt(s, u)), 31), i), a = pt(vt(a, [
            0,
            5
          ]), [
            0,
            944331445
          ]);
        switch (c = [
            0,
            0
          ], s = [
            0,
            0
          ], r) {
        case 15:
          s = yt(s, gt([
            0,
            e.charCodeAt(n + 14)
          ], 48));
        case 14:
          s = yt(s, gt([
            0,
            e.charCodeAt(n + 13)
          ], 40));
        case 13:
          s = yt(s, gt([
            0,
            e.charCodeAt(n + 12)
          ], 32));
        case 12:
          s = yt(s, gt([
            0,
            e.charCodeAt(n + 11)
          ], 24));
        case 11:
          s = yt(s, gt([
            0,
            e.charCodeAt(n + 10)
          ], 16));
        case 10:
          s = yt(s, gt([
            0,
            e.charCodeAt(n + 9)
          ], 8));
        case 9:
          s = vt(s = yt(s, [
            0,
            e.charCodeAt(n + 8)
          ]), l), a = yt(a, s = vt(s = bt(s, 33), u));
        case 8:
          c = yt(c, gt([
            0,
            e.charCodeAt(n + 7)
          ], 56));
        case 7:
          c = yt(c, gt([
            0,
            e.charCodeAt(n + 6)
          ], 48));
        case 6:
          c = yt(c, gt([
            0,
            e.charCodeAt(n + 5)
          ], 40));
        case 5:
          c = yt(c, gt([
            0,
            e.charCodeAt(n + 4)
          ], 32));
        case 4:
          c = yt(c, gt([
            0,
            e.charCodeAt(n + 3)
          ], 24));
        case 3:
          c = yt(c, gt([
            0,
            e.charCodeAt(n + 2)
          ], 16));
        case 2:
          c = yt(c, gt([
            0,
            e.charCodeAt(n + 1)
          ], 8));
        case 1:
          c = vt(c = yt(c, [
            0,
            e.charCodeAt(n)
          ]), u), i = yt(i, c = vt(c = bt(c, 31), l));
        }
        return i = pt(i = yt(i, [
          0,
          e.length
        ]), a = yt(a, [
          0,
          e.length
        ])), a = pt(a, i), i = pt(i = wt(i), a = wt(a)), a = pt(a, i), ('00000000' + (i[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (i[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (a[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (a[1] >>> 0).toString(16)).slice(-8);
      }(function (e) {
        for (var t = '', n = 0, r = Object.keys(e).sort(); n < r.length; n++) {
          var o = r[n], i = e[r[n]], a = e[r[n]].error ? 'error' : JSON.stringify(e[r[n]].value);
          t += (t ? '|' : '') + r[n].replace(/([:|\\])/g, '\\$1') + ':' + a;
        }
        return t;
      }(e));
    }
    function sn(e) {
      return void 0 === e && (e = 50), function (e, t) {
        void 0 === t && (t = Infinity);
        var n = window.requestIdleCallback;
        return window.requestIdleCallback ? new Promise(function (e) {
          return window.requestIdleCallback.call(window, function () {
            return e();
          }, { timeout: t });
        }) : dt(Math.min(e, t));
      }(e, 2 * e);
    }
    function un(e, t) {
      var n = Date.now();
      return {
        get: function (r) {
          return ct(this, void 0, void 0, function () {
            var o, i, a;
            return st(this, function (c) {
              switch (c.label) {
              case 0:
                return o = Date.now(), [
                  4,
                  e()
                ];
              case 1:
                return i = c.sent(), a = function (e) {
                  var t;
                  return {
                    get visitorId() {
                      return void 0 === t && (t = cn(this.components)), t;
                    },
                    set visitorId(e) {
                      t = e;
                    },
                    confidence: on(e),
                    components: e,
                    version: '3.3.6'
                  };
                }(i), (t || (null == r ? void 0 : r.debug)) && console.log('Copy the text below to get the debug data:\n\n```\nversion: ' + a.version + '\nuserAgent: ' + navigator.userAgent + '\ntimeBetweenLoadAndGet: ' + (o - n) + '\nvisitorId: ' + a.visitorId + '\ncomponents: ' + an(i) + '\n```'), [
                  2,
                  a
                ];
              }
            });
          });
        }
      };
    }
    var ln = {
      load: function (e) {
        var t = void 0 === e ? {} : e, n = t.delayFallback, r = t.debug, o = t.monitoring, i = void 0 === t.monitoring || t.monitoring;
        return ct(this, void 0, void 0, function () {
          return st(this, function (e) {
            switch (e.label) {
            case 0:
              return i && function () {
                if (!(window.__fpjs_d_m || Math.random() >= 0.001))
                  try {
                    var e = new XMLHttpRequest();
                    e.open('get', 'https://m1.openfpcdn.io/fingerprintjs/v3.3.6/npm-monitoring', true), e.send();
                  } catch (e) {
                    console.error(e);
                  }
              }(), [
                4,
                sn(t.delayFallback)
              ];
            case 1:
              return e.sent(), [
                2,
                un(Pt(rn, { debug: t.debug }, []), t.debug)
              ];
            }
          });
        });
      },
      hashComponents: cn,
      componentsToDebugString: an
    };
    function dn() {
      return ln.load().then(function (e) {
        return e.get();
      }).then(function (e) {
        return e;
      });
    }
    var fn = '__adm-vid';
    function mn(e) {
      return hn.apply(this, arguments);
    }
    function hn() {
      return hn = He(Xe().mark(function e(t) {
        var n, r, o, i;
        return Xe().wrap(function (e) {
          for (;;)
            switch (e.prev = e.next) {
            case 0:
              return n = window.Intl && {
                locale: 'en-US',
                calendar: 'gregory',
                numberingSystem: 'latn',
                timeZone: 'America/Sao_Paulo',
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
              }.timeZone, e.next = 3, it();
            case 3:
              return r = e.sent, e.next = 6, dn();
            case 6:
              return o = e.sent, e.prev = 7, e.next = 10, et.post('https://fp.metricswpsh.com/fp?tag_id='.concat(t), Ee({
                timezoneOlson: n,
                incognito: r.isPrivate
              }, o.components), { withCredentials: true });
            case 10:
              return i = e.sent, e.abrupt('return', i.data.fp);
            case 14:
              return e.prev = 14, e.t0 = e.catch(7), console.warn(e.t0), e.abrupt('return', null);
            case 18:
            case 'end':
              return e.stop();
            }
        }, e, null, [[
            7,
            14
          ]]);
      })), hn.apply(this, arguments);
    }
    function pn() {
      var e = JSON.parse(ot.get('__adm-vid'));
      return e && !function (e, t) {
        if (!e || !t)
          return null;
        var n = 60 * t * 1000;
        return Date.now() - e > n;
      }(e.createdAt, 10080) ? e.fpValue : null;
    }
    function vn(e) {
      ot.set('__adm-vid', JSON.stringify({
        fpValue: e,
        createdAt: Date.now()
      }));
    }
    function bn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        t[n].enumerable = t[n].enumerable || false, t[n].configurable = true, 'value' in t[n] && (t[n].writable = true), Object.defineProperty(e, t[n].key, t[n]);
      }
    }
    var gn = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.state = {};
        }
        var t, n, r;
        return t = e, (n = [
          {
            key: 'set',
            value: function (e, t) {
              this.state[e] = t;
            }
          },
          {
            key: 'get',
            value: function (e) {
              return this.state[e] || null;
            }
          },
          {
            key: 'remove',
            value: function (e) {
              delete this.state[e];
            }
          }
        ]) && bn(t.prototype, n), r && bn(t, r), Object.defineProperty(t, 'prototype', { writable: false }), e;
      }(), yn = new gn(), wn = {
        set: function (e, t) {
          return sessionStorage.setItem(e, t);
        },
        get: function (e) {
          return sessionStorage.getItem(e);
        },
        remove: function (e) {
          return sessionStorage.removeItem(e);
        }
      };
    try {
      wn.set('__try', 1), wn.get('__try'), wn.remove('__try');
    } catch (e) {
      wn = yn;
    }
    var kn = wn;
    function Sn(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        var n = null == e ? null : 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (null == n)
          return;
        var r, o, i = [], a = true, c = false;
        try {
          for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = true);
        } catch (e) {
          c = true, o = e;
        } finally {
          try {
            a || null == n.return || n.return();
          } finally {
            if (c)
              throw o;
          }
        }
        return i;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return xn(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === n && e.constructor && (n = e.constructor.name);
        if ('Map' === n || 'Set' === n)
          return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return xn(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function xn(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
      return r;
    }
    var Ln = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== n.g ? n.g : 'undefined' != typeof self ? self : {};
    var Cn, An, jn = (Cn = function (e, t) {
        !function (n, r) {
          var o = 'function', i = 'undefined', a = 'object', c = 'string', s = 'model', u = 'name', l = 'type', d = 'vendor', f = 'version', m = 'architecture', h = 'console', p = 'mobile', v = 'tablet', b = 'smarttv', g = 'wearable', y = 'embedded', w = 'Amazon', k = 'Apple', S = 'ASUS', x = 'BlackBerry', L = 'Firefox', C = 'Google', A = 'Huawei', j = 'LG', P = 'Microsoft', I = 'Motorola', V = 'Opera', _ = 'Samsung', O = 'Sony', R = 'Xiaomi', M = 'Zebra', W = 'Facebook', N = function (e) {
              for (var t = {}, n = 0; n < e.length; n++)
                t[e[n].toUpperCase()] = e[n];
              return t;
            }, T = function (e, t) {
              return typeof e === 'string' && -1 !== e.toLowerCase().indexOf(e.toLowerCase());
            }, F = function (e) {
              return e.toLowerCase();
            }, Z = function (e, t) {
              if (typeof e === 'string')
                return e = e.replace(/^\s\s*/, '').replace(/\s\s*$/, ''), typeof t === 'undefined' ? e : e.substring(0, 255);
            }, E = function (e, t) {
              for (var n, i, c, s, u, l, d = 0; d < t.length && !u;) {
                var f = t[d], m = t[d + 1];
                for (n = i = 0; n < t[d].length && !u;)
                  if (u = t[d][n++].exec(e))
                    for (c = 0; c < t[d + 1].length; c++)
                      l = u[++i], typeof (s = t[d + 1][c]) === 'object' && s.length > 0 ? 2 === s.length ? typeof s[1] == 'function' ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== 'function' || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : r : this[s[0]] = l ? s[1].call(this, l, s[2]) : r : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : r) : this[s] = l || r;
                d += 2;
              }
            }, X = function (e, t) {
              for (var n in t)
                if (typeof t[n] === 'object' && t[n].length > 0) {
                  for (var o = 0; o < t[n].length; o++)
                    if (T(t[n][o], e))
                      return '?' === n ? r : n;
                } else if (T(t[n], e))
                  return '?' === n ? r : n;
              return e;
            }, D = {
              ME: '4.90',
              'NT 3.11': 'NT3.51',
              'NT 4.0': 'NT4.0',
              2000: 'NT 5.0',
              XP: [
                'NT 5.1',
                'NT 5.2'
              ],
              Vista: 'NT 6.0',
              7: 'NT 6.1',
              8: 'NT 6.2',
              8.1: 'NT 6.3',
              10: [
                'NT 6.4',
                'NT 10.0'
              ],
              RT: 'ARM'
            }, Y = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Chrome'
                  ]
                ],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Edge'
                  ]
                ],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                ],
                [
                  'name',
                  'version'
                ],
                [/opios[\/ ]+([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Opera Mini'
                  ]
                ],
                [/\bopr\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Opera'
                  ]
                ],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                  /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                  /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                  /(weibo)__([\d\.]+)/i
                ],
                [
                  'name',
                  'version'
                ],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'UCBrowser'
                  ]
                ],
                [/\bqbcore\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'WeChat(Win) Desktop'
                  ]
                ],
                [/micromessenger\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'WeChat'
                  ]
                ],
                [/konqueror\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Konqueror'
                  ]
                ],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [
                  'version',
                  [
                    'name',
                    'IE'
                  ]
                ],
                [/yabrowser\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Yandex'
                  ]
                ],
                [/(avast|avg)\/([\w\.]+)/i],
                [
                  [
                    'name',
                    /(.+)/,
                    '$1 Secure Browser'
                  ],
                  'version'
                ],
                [/\bfocus\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Firefox Focus'
                  ]
                ],
                [/\bopt\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Opera Touch'
                  ]
                ],
                [/coc_coc\w+\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Coc Coc'
                  ]
                ],
                [/dolfin\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Dolphin'
                  ]
                ],
                [/coast\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Opera Coast'
                  ]
                ],
                [/miuibrowser\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'MIUI Browser'
                  ]
                ],
                [/fxios\/([-\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Firefox'
                  ]
                ],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[
                    'name',
                    '360 Browser'
                  ]],
                [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                [
                  [
                    'name',
                    /(.+)/,
                    '$1 Browser'
                  ],
                  'version'
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                  [
                    'name',
                    /_/g,
                    ' '
                  ],
                  'version'
                ],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                ],
                [
                  'name',
                  'version'
                ],
                [
                  /(metasr)[\/ ]?([\w\.]+)/i,
                  /(lbbrowser)/i
                ],
                ['name'],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [
                  [
                    'name',
                    'Facebook'
                  ],
                  'version'
                ],
                [
                  /safari (line)\/([\w\.]+)/i,
                  /\b(line)\/([\w\.]+)\/iab/i,
                  /(chromium|instagram)[\/ ]([-\w\.]+)/i
                ],
                [
                  'name',
                  'version'
                ],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [
                  'version',
                  [
                    'name',
                    'GSA'
                  ]
                ],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [
                  'version',
                  [
                    'name',
                    'Chrome Headless'
                  ]
                ],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [
                  [
                    'name',
                    'Chrome WebView'
                  ],
                  'version'
                ],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [
                  'version',
                  [
                    'name',
                    'Android Browser'
                  ]
                ],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [
                  'name',
                  'version'
                ],
                [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                [
                  'version',
                  [
                    'name',
                    'Mobile Safari'
                  ]
                ],
                [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                [
                  'version',
                  'name'
                ],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  'name',
                  [
                    'version',
                    X,
                    {
                      '1.0': '/8',
                      1.2: '/1',
                      1.3: '/3',
                      '2.0': '/412',
                      '2.0.2': '/416',
                      '2.0.3': '/417',
                      '2.0.4': '/419',
                      '?': '/'
                    }
                  ]
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [
                  'name',
                  'version'
                ],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [
                  [
                    'name',
                    'Netscape'
                  ],
                  'version'
                ],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [
                  'version',
                  [
                    'name',
                    'Firefox Reality'
                  ]
                ],
                [
                  /ekiohf.+(flow)\/([\w\.]+)/i,
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                  /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                  /(firefox)\/([\w\.]+)/i,
                  /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                  /(links) \(([\w\.]+)/i
                ],
                [
                  'name',
                  'version'
                ]
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[
                    'architecture',
                    'amd64'
                  ]],
                [/(ia32(?=;))/i],
                [[
                    'architecture',
                    F
                  ]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[
                    'architecture',
                    'ia32'
                  ]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[
                    'architecture',
                    'arm64'
                  ]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[
                    'architecture',
                    'armhf'
                  ]],
                [/windows (ce|mobile); ppc;/i],
                [[
                    'architecture',
                    'arm'
                  ]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[
                    'architecture',
                    /ower/,
                    '',
                    F
                  ]],
                [/(sun4\w)[;\)]/i],
                [[
                    'architecture',
                    'sparc'
                  ]],
                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                [[
                    'architecture',
                    F
                  ]]
              ],
              device: [
                [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                [
                  'model',
                  [
                    'vendor',
                    'Samsung'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [
                  /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                  /samsung[- ]([-\w]+)/i,
                  /sec-(sgh\w+)/i
                ],
                [
                  'model',
                  [
                    'vendor',
                    'Samsung'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/\((ip(?:hone|od)[\w ]*);/i],
                [
                  'model',
                  [
                    'vendor',
                    'Apple'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [
                  /\((ipad);[-\w\),; ]+apple/i,
                  /applecoremedia\/[\w\.]+ \((ipad)/i,
                  /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
                ],
                [
                  'model',
                  [
                    'vendor',
                    'Apple'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [
                  'model',
                  [
                    'vendor',
                    'Huawei'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [
                  /(?:huawei|honor)([-\w ]+)[;\)]/i,
                  /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i
                ],
                [
                  'model',
                  [
                    'vendor',
                    'Huawei'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [
                  /\b(poco[\w ]+)(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                ],
                [
                  [
                    'model',
                    /_/g,
                    ' '
                  ],
                  [
                    'vendor',
                    'Xiaomi'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                  [
                    'model',
                    /_/g,
                    ' '
                  ],
                  [
                    'vendor',
                    'Xiaomi'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [
                  /; (\w+) bui.+ oppo/i,
                  /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
                ],
                [
                  'model',
                  [
                    'vendor',
                    'OPPO'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [
                  /vivo (\w+)(?: bui|\))/i,
                  /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
                ],
                [
                  'model',
                  [
                    'vendor',
                    'Vivo'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [
                  'model',
                  [
                    'vendor',
                    'Realme'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                ],
                [
                  'model',
                  [
                    'vendor',
                    'Motorola'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [
                  'model',
                  [
                    'vendor',
                    'Motorola'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                [
                  'model',
                  [
                    'vendor',
                    'LG'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i
                ],
                [
                  'model',
                  [
                    'vendor',
                    'LG'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [
                  /(ideatab[-\w ]+)/i,
                  /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
                ],
                [
                  'model',
                  [
                    'vendor',
                    'Lenovo'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [
                  /(?:maemo|nokia).*(n900|lumia \d+)/i,
                  /nokia[-_ ]?([-\w\.]*)/i
                ],
                [
                  [
                    'model',
                    /_/g,
                    ' '
                  ],
                  [
                    'vendor',
                    'Nokia'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/(pixel c)\b/i],
                [
                  'model',
                  [
                    'vendor',
                    'Google'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [
                  'model',
                  [
                    'vendor',
                    'Google'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                [
                  'model',
                  [
                    'vendor',
                    'Sony'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [
                  /sony tablet [ps]/i,
                  /\b(?:sony)?sgp\w+(?: bui|\))/i
                ],
                [
                  [
                    'model',
                    'Xperia Tablet'
                  ],
                  [
                    'vendor',
                    'Sony'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [
                  / (kb2005|in20[12]5|be20[12][59])\b/i,
                  /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
                ],
                [
                  'model',
                  [
                    'vendor',
                    'OnePlus'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [
                  /(alexa)webm/i,
                  /(kf[a-z]{2}wi)( bui|\))/i,
                  /(kf[a-z]+)( bui|\)).+silk\//i
                ],
                [
                  'model',
                  [
                    'vendor',
                    'Amazon'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [
                    'model',
                    /(.+)/g,
                    'Fire Phone $1'
                  ],
                  [
                    'vendor',
                    'Amazon'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [
                  'model',
                  'vendor',
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [
                  /\b((?:bb[a-f]|st[hv])100-\d)/i,
                  /\(bb10; (\w+)/i
                ],
                [
                  'model',
                  [
                    'vendor',
                    'BlackBerry'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                [
                  'model',
                  [
                    'vendor',
                    'ASUS'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [
                  'model',
                  [
                    'vendor',
                    'ASUS'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/(nexus 9)/i],
                [
                  'model',
                  [
                    'vendor',
                    'HTC'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i
                ],
                [
                  'vendor',
                  [
                    'model',
                    /_/g,
                    ' '
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [
                  'model',
                  [
                    'vendor',
                    'Acer'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [
                  /droid.+; (m[1-5] note) bui/i,
                  /\bmz-([-\w]{2,})/i
                ],
                [
                  'model',
                  [
                    'vendor',
                    'Meizu'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [
                  'model',
                  [
                    'vendor',
                    'Sharp'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i
                ],
                [
                  'vendor',
                  'model',
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [
                  /(archos) (gamepad2?)/i,
                  /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /(nook)[\w ]+build\/(\w+)/i,
                  /(dell) (strea[kpr\d ]*[\dko])/i,
                  /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                  /(trinity)[- ]*(t\d{3}) bui/i,
                  /(gigaset)[- ]+(q\w{1,9}) bui/i,
                  /(vodafone) ([\w ]+)(?:\)| bui)/i
                ],
                [
                  'vendor',
                  'model',
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/(surface duo)/i],
                [
                  'model',
                  [
                    'vendor',
                    'Microsoft'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [
                  'model',
                  [
                    'vendor',
                    'Fairphone'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/(u304aa)/i],
                [
                  'model',
                  [
                    'vendor',
                    'AT&T'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/\bsie-(\w*)/i],
                [
                  'model',
                  [
                    'vendor',
                    'Siemens'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/\b(rct\w+) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'RCA'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b(venue[\d ]{2,7}) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'Dell'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b(q(?:mv|ta)\w+) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'Verizon'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'Barnes & Noble'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b(tm\d{3}\w+) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'NuVision'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b(k88) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'ZTE'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b(nx\d{3}j) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'ZTE'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/\b(gen\d{3}) b.+49h/i],
                [
                  'model',
                  [
                    'vendor',
                    'Swiss'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/\b(zur\d{3}) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'Swiss'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b((zeki)?tb.*\b) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'Zeki'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [
                  /\b([yr]\d{2}) b/i,
                  /\b(dragon[- ]+touch |dt)(\w{5}) b/i
                ],
                [
                  [
                    'vendor',
                    'Dragon Touch'
                  ],
                  'model',
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b(ns-?\w{0,9}) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'Insignia'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'NextBook'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [
                  [
                    'vendor',
                    'Voice'
                  ],
                  'model',
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [
                  [
                    'vendor',
                    'LvTel'
                  ],
                  'model',
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/\b(ph-1) /i],
                [
                  'model',
                  [
                    'vendor',
                    'Essential'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'Envizen'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b(trio[-\w\. ]+) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'MachSpeed'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\btu_(1491) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'Rotor'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/(shield[\w ]+) b/i],
                [
                  'model',
                  [
                    'vendor',
                    'Nvidia'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/(sprint) (\w+)/i],
                [
                  'vendor',
                  'model',
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/(kin\.[onetw]{3})/i],
                [
                  [
                    'model',
                    /\./g,
                    ' '
                  ],
                  [
                    'vendor',
                    'Microsoft'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [
                  'model',
                  [
                    'vendor',
                    'Zebra'
                  ],
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [
                  'model',
                  [
                    'vendor',
                    'Zebra'
                  ],
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [
                  /(ouya)/i,
                  /(nintendo) ([wids3utch]+)/i
                ],
                [
                  'vendor',
                  'model',
                  [
                    'type',
                    'console'
                  ]
                ],
                [/droid.+; (shield) bui/i],
                [
                  'model',
                  [
                    'vendor',
                    'Nvidia'
                  ],
                  [
                    'type',
                    'console'
                  ]
                ],
                [/(playstation [345portablevi]+)/i],
                [
                  'model',
                  [
                    'vendor',
                    'Sony'
                  ],
                  [
                    'type',
                    'console'
                  ]
                ],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [
                  'model',
                  [
                    'vendor',
                    'Microsoft'
                  ],
                  [
                    'type',
                    'console'
                  ]
                ],
                [/smart-tv.+(samsung)/i],
                [
                  'vendor',
                  [
                    'type',
                    'smarttv'
                  ]
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [
                    'model',
                    /^/,
                    'SmartTV'
                  ],
                  [
                    'vendor',
                    'Samsung'
                  ],
                  [
                    'type',
                    'smarttv'
                  ]
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [
                    'vendor',
                    'LG'
                  ],
                  [
                    'type',
                    'smarttv'
                  ]
                ],
                [/(apple) ?tv/i],
                [
                  'vendor',
                  [
                    'model',
                    'Apple TV'
                  ],
                  [
                    'type',
                    'smarttv'
                  ]
                ],
                [/crkey/i],
                [
                  [
                    'model',
                    'Chromecast'
                  ],
                  [
                    'vendor',
                    'Google'
                  ],
                  [
                    'type',
                    'smarttv'
                  ]
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [
                  'model',
                  [
                    'vendor',
                    'Amazon'
                  ],
                  [
                    'type',
                    'smarttv'
                  ]
                ],
                [/\(dtv[\);].+(aquos)/i],
                [
                  'model',
                  [
                    'vendor',
                    'Sharp'
                  ],
                  [
                    'type',
                    'smarttv'
                  ]
                ],
                [
                  /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                  /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i
                ],
                [
                  [
                    'vendor',
                    Z
                  ],
                  [
                    'model',
                    Z
                  ],
                  [
                    'type',
                    'smarttv'
                  ]
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[
                    'type',
                    'smarttv'
                  ]],
                [/((pebble))app/i],
                [
                  'vendor',
                  'model',
                  [
                    'type',
                    'wearable'
                  ]
                ],
                [/droid.+; (glass) \d/i],
                [
                  'model',
                  [
                    'vendor',
                    'Google'
                  ],
                  [
                    'type',
                    'wearable'
                  ]
                ],
                [/droid.+; (wt63?0{2,3})\)/i],
                [
                  'model',
                  [
                    'vendor',
                    'Zebra'
                  ],
                  [
                    'type',
                    'wearable'
                  ]
                ],
                [/(quest( 2)?)/i],
                [
                  'model',
                  [
                    'vendor',
                    'Facebook'
                  ],
                  [
                    'type',
                    'wearable'
                  ]
                ],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [
                  'vendor',
                  [
                    'type',
                    'embedded'
                  ]
                ],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [
                  'model',
                  [
                    'type',
                    'mobile'
                  ]
                ],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [
                  'model',
                  [
                    'type',
                    'tablet'
                  ]
                ],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[
                    'type',
                    'tablet'
                  ]],
                [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                [[
                    'type',
                    'mobile'
                  ]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [
                  'model',
                  [
                    'vendor',
                    'Generic'
                  ]
                ]
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'EdgeHTML'
                  ]
                ],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Blink'
                  ]
                ],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i
                ],
                [
                  'name',
                  'version'
                ],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [
                  'version',
                  'name'
                ]
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [
                  'name',
                  'version'
                ],
                [
                  /(windows) nt 6\.2; (arm)/i,
                  /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                  /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                ],
                [
                  'name',
                  [
                    'version',
                    X,
                    D
                  ]
                ],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                  [
                    'name',
                    'Windows'
                  ],
                  [
                    'version',
                    X,
                    D
                  ]
                ],
                [
                  /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                  /cfnetwork\/.+darwin/i
                ],
                [
                  [
                    'version',
                    /_/g,
                    '.'
                  ],
                  [
                    'name',
                    'iOS'
                  ]
                ],
                [
                  /(mac os x) ?([\w\. ]*)/i,
                  /(macintosh|mac_powerpc\b)(?!.+haiku)/i
                ],
                [
                  [
                    'name',
                    'Mac OS'
                  ],
                  [
                    'version',
                    /_/g,
                    '.'
                  ]
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                [
                  'version',
                  'name'
                ],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i
                ],
                [
                  'name',
                  'version'
                ],
                [/\(bb(10);/i],
                [
                  'version',
                  [
                    'name',
                    'BlackBerry'
                  ]
                ],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [
                  'version',
                  [
                    'name',
                    'Symbian'
                  ]
                ],
                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Firefox OS'
                  ]
                ],
                [
                  /web0s;.+rt(tv)/i,
                  /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
                ],
                [
                  'version',
                  [
                    'name',
                    'webOS'
                  ]
                ],
                [/crkey\/([\d\.]+)/i],
                [
                  'version',
                  [
                    'name',
                    'Chromecast'
                  ]
                ],
                [/(cros) [\w]+ ([\w\.]+\w)/i],
                [
                  [
                    'name',
                    'Chromium OS'
                  ],
                  'version'
                ],
                [
                  /(nintendo|playstation) ([wids345portablevuch]+)/i,
                  /(xbox); +xbox ([^\);]+)/i,
                  /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                  /(mint)[\/\(\) ]?(\w*)/i,
                  /(mageia|vectorlinux)[; ]/i,
                  /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                  /(hurd|linux) ?([\w\.]*)/i,
                  /(gnu) ?([\w\.]*)/i,
                  /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                  /(haiku) (\w+)/i
                ],
                [
                  'name',
                  'version'
                ],
                [/(sunos) ?([\w\.\d]*)/i],
                [
                  [
                    'name',
                    'Solaris'
                  ],
                  'version'
                ],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                  /(unix) ?([\w\.]*)/i
                ],
                [
                  'name',
                  'version'
                ]
              ]
            }, H = function (e, t) {
              if (typeof e === 'object' && (t = e, e = r), !(this instanceof H))
                return new H(e, t).getResult();
              var o = e || (typeof n !== 'undefined' && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ''), s = t ? function (e, t) {
                  var n = {};
                  for (var r in e)
                    t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                  return n;
                }(Y, t) : Y;
              return this.getBrowser = function () {
                var e = {};
                return e.name = r, e.version = r, E.call(e, o, s.browser), e.major = function (e) {
                  return typeof e === 'string' ? e.replace(/[^\d\.]/g, '').split('.')[0] : r;
                }(e.version), e;
              }, this.getCPU = function () {
                var e = {};
                return e.architecture = r, E.call(e, o, s.cpu), e;
              }, this.getDevice = function () {
                var e = {};
                return e.vendor = r, e.model = r, e.type = r, E.call(e, o, s.device), e;
              }, this.getEngine = function () {
                var e = {};
                return e.name = r, e.version = r, E.call(e, o, s.engine), e;
              }, this.getOS = function () {
                var e = {};
                return e.name = r, e.version = r, E.call(e, o, s.os), e;
              }, this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU()
                };
              }, this.getUA = function () {
                return o;
              }, this.setUA = function (e) {
                return o = typeof e === 'string' && e.length > 255 ? Z(e, 255) : e, this;
              }, this.setUA(o), this;
            };
          H.VERSION = '0.7.31', H.BROWSER = {
            NAME: 'name',
            VERSION: 'version',
            MAJOR: 'major'
          }, H.CPU = { ARCHITECTURE: 'architecture' }, H.DEVICE = {
            MODEL: 'model',
            VENDOR: 'vendor',
            TYPE: 'type',
            CONSOLE: 'console',
            MOBILE: 'mobile',
            SMARTTV: 'smarttv',
            TABLET: 'tablet',
            WEARABLE: 'wearable',
            EMBEDDED: 'embedded'
          }, H.ENGINE = H.OS = {
            NAME: 'name',
            VERSION: 'version'
          }, e.exports && (t = e.exports = H), t.UAParser = H;
          var G = typeof n !== 'undefined' && (n.jQuery || n.Zepto);
          if (G && !G.ua) {
            var J = new H();
            G.ua = J.getResult(), G.ua.get = function () {
              return J.getUA();
            }, G.ua.set = function (e) {
              J.setUA(e);
              var t = J.getResult();
              for (var n in t)
                G.ua[n] = t[n];
            };
          }
        }('object' == typeof window ? window : Ln);
      }, Cn(An = { exports: {} }, An.exports), An.exports);
    function Pn(t) {
      var n = 0;
      return null !== je.read(e.subCookieName) && (n = je.read(e.subCookieName)), [
        e.subQueryStringKey1,
        e.subQueryStringKey2
      ].forEach(r => {
        t[r] && (je.write(e.subCookieName, t[r], Date.now() + 31536000000), n = t[r]);
      }), Number(n);
    }
    function In(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        t[n].enumerable = t[n].enumerable || false, t[n].configurable = true, 'value' in t[n] && (t[n].writable = true), Object.defineProperty(e, t[n].key, t[n]);
      }
    }
    var Vn = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.state = {};
        }
        var t, n, r;
        return t = e, (n = [
          {
            key: 'set',
            value: function (e, t) {
              this.state[e] = t;
            }
          },
          {
            key: 'get',
            value: function (e) {
              return this.state[e] || null;
            }
          },
          {
            key: 'remove',
            value: function (e) {
              delete this.state[e];
            }
          }
        ]) && In(t.prototype, n), r && In(t, r), Object.defineProperty(t, 'prototype', { writable: false }), e;
      }(), _n = new Vn(), On = {
        set: function (e, t) {
          return localStorage.setItem(e, t);
        },
        get: function (e) {
          return localStorage.getItem(e);
        },
        remove: function (e) {
          return localStorage.removeItem(e);
        }
      };
    try {
      On.set('__try', 1), On.get('__try'), On.remove('__try');
    } catch (e) {
      On = _n;
    }
    var Rn = On, Mn = '_adm_erd', Wn = '_session-key';
    function Nn(e, t) {
      var n;
      try {
        n = window.top !== window && window.location.origin === window.top.location.origin && 3826 === t;
      } catch (e) {
        n = false;
      }
      Mn = n ? '_adm_erdso' : Mn, Wn = n ? '_session-key_so' : Wn;
      var {referrer: r} = document, o = Rn.get(Wn), i = r.split('/')[2] || '', a = '';
      return o ? e === o ? a = Rn.get(Mn) : e !== o && (a = i, Rn.set(Wn, e)) : (a = i, Rn.set(Wn, e)), Rn.set(Mn, a), a;
    }
    function Tn() {
      var e = 'cb_gyro', t = Rn.get('cb_gyro') || 0;
      return t || window.addEventListener('deviceorientation', t => {
        null !== t.alpha && Rn.set('cb_gyro', 1);
      }), Number(t);
    }
    function Fn(e) {
      var t, n;
      return {
        plugins: (null === (t = e.components.plugins.value) || void 0 === t ? void 0 : t.reduce((e, t) => (e.push(t.name), e), [])) || [],
        languages: (null === (n = e.components.languages.value) || void 0 === n ? void 0 : n.reduce((e, t) => (t.forEach(t => {
          e.includes(t) || e.push(t);
        }), e), [])) || [],
        fonts: e.components.fonts.value || [],
        fontPreferences: e.components.fontPreferences.value || {},
        platform: e.components.platform.value || '',
        colorDepth: e.components.colorDepth.value || 0,
        deviceMemory: e.components.deviceMemory.value || 0,
        hardwareConcurrency: e.components.hardwareConcurrency.value || 0,
        indexedDB: e.components.indexedDB.value || false,
        sessionStorage: e.components.sessionStorage.value || false,
        localStorage: e.components.localStorage.value || false,
        cookiesEnabled: e.components.cookiesEnabled.value || false,
        colorGamut: e.components.colorGamut.value || ''
      };
    }
    function Zn(t, n, r, o, i, a, c) {
      var s, u, l, d, f = (s = location.search.split('?'))[s.length - 1].split('&').reduce(function (e, t) {
          var n = Sn(t.split('='), 2), r = n[0], o = n[1];
          return n[0] && (e[n[0]] = n[1]), e;
        }, {}), m = window.Intl && {
          locale: 'en-US',
          calendar: 'gregory',
          numberingSystem: 'latn',
          timeZone: 'America/Sao_Paulo',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        }.timeZone, h = Math.trunc(new Date().getTimezoneOffset() / -60), p = Boolean(window.web3 || window.ethereum), v = function () {
          var {title: e} = document, t = document.head.querySelector('meta[name=keywords]'), n = document.head.querySelector('meta[name=description]'), r = e;
          return [
            t,
            n
          ].forEach(e => {
            r += e ? ' '.concat(e.content) : '';
          }), r.trim().replace(/\s?[,.:;!?/|&-]?\s/g, e => '&' === e || '|' === e ? '' : ',');
        }();
      return {
        userId: t,
        isAdBlock: n,
        isMetaMaskActive: p,
        isSslProtocol: 'https:' === window.location.protocol,
        resolution: [
          +(screen && screen.width || window.outerWidth),
          +(screen && screen.height || window.outerHeight)
        ],
        labels: wn.get('labels') || '',
        sub: Pn(f),
        title: window.document.title,
        tags: '',
        debugMode: '1' === f[e.devModeQueryStringParameter],
        holdableQSParams: {},
        qs: f,
        ua: (d = new jn().getResult(), d.device.type = d.device.type || 'desktop', d),
        timezone: h,
        timezoneOlson: m,
        entryReferrerDomain: Nn(r, c),
        magmaSourceId: je.read('magma_source'),
        keywords: encodeURIComponent(v),
        isAccelerometer: (u = 'cb_acce', l = Rn.get('cb_acce') || 0, l || window.addEventListener('devicemotion', e => {
          null !== e.accelerationIncludingGravity.x && Rn.set('cb_acce', 1);
        }), Number(l)),
        isGyroscope: Tn(),
        isTubeSite: o,
        fingerprintParams: Fn(i),
        page: encodeURIComponent(window.location.href).replace(/%2F/g, '/'),
        userAgentData: a
      };
    }
    var En = [
        'inpage',
        'native',
        'calendar',
        'popunder'
      ], Xn = [5575], Dn = [
        6711,
        6710,
        288530,
        18010,
        20328
      ], Yn = [
        'c',
        'd'
      ], Hn = [
        'inpage',
        'native',
        'push',
        'popunder',
        'resale-popunder',
        'banner',
        'extension',
        'calendar',
        'interstitial',
        'direct_link'
      ], Gn = [
        'inpage',
        'native'
      ], Jn = 'noModule' in document.createElement('script');
    function zn(e) {
      var {
        label: t,
        iabcat: n,
        isPhpLoaderActive: r,
        adFormats: o,
        hashHelpers: i,
        isAdBlock: a,
        hashedProxyDomain: c,
        legacySpotsExtend: s,
        hashService: u,
        tagAbVersion: l,
        isTubeSite: d
      } = e;
      return o.map(e => {
        var {createHashPath: o} = i;
        'native' === e.type && (e.spots.find(e => Xn.includes(e.config.spot_id)) && (e.assets.js = ['https://js.wpadmngr.com/skins/native.js']));
        'inpage' === e.type && Yn.includes(l) && (e.spots.find(e => Dn.includes(e.config.spot_id)) && (e.assets.js = ['https://js.wpadmngr.com/skins/npushSk.js']));
        var f = Jn ? 'modern' : 'legacy', m = e.assets[''.concat(f, '_js')], h = null != e.assets[''.concat(f, '_js')] ? e.assets[''.concat(f, '_js')] : function (e, t, n) {
            return true || n ? e.assets.js : e.assets.js.map(e => e.includes('.m.js') || e.includes('.l.js') ? e : e.replace('.js', {
              modern: '.m.js',
              legacy: '.l.js'
            }[t]));
          }(e, f, r);
        e.assets.js = h.map(t => {
          var n = {
            src: t,
            type: f
          };
          return !r && o && false && (n.src = u.convertToHashedUrl(n.src, o)), n;
        });
        var p = s[e.type];
        return e.spots = e.spots.map((i, s) => (i.config.label = t, i.config.iabcat = n, i.config.adm_loader = !!o || r, 'banner' === e.type && '1x1' === i.config.options.size && (i.delay_ms = 3000), c && false && (i.config.proxy_domain = c), a && 'popunder' === e.type && (i.config.options.bind_to = null, i.config.options.ignore_to = null), o && 'popunder' === e.type && (i.config.scripts.interstitial = u.convertToHashedUrl(i.config.scripts.interstitial)), d && (i.config.is_url_hashing = false, i.config.options && (i.config.options.is_hash_ssp_url = false)), s[e.type] ? v(s[e.type]) && s[e.type][s] ? w(i, s[e.type][s]) : w(i, s[e.type]) : i)), e;
      });
    }
    function Un(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
      return r;
    }
    for (var Bn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_', Qn = new Uint8Array(256), qn = 0; qn < 64; qn++)
      Qn['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charCodeAt(qn)] = qn;
    Qn[45] = 62, Qn[95] = 63;
    var Kn, $n, er = function (e) {
        if (Array.isArray(e))
          return Un(e);
      }(Kn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=') || function (e) {
        if ('undefined' != typeof Symbol && null != e[Symbol.iterator] || null != e['@@iterator'])
          return Array.from(e);
      }('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=') || function (e, t) {
        if (e) {
          if ('string' == typeof e)
            return Un(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Un(e, t) : void 0;
        }
      }('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=') || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }(), tr = ($n = {}, er.forEach(function (e, t) {
        return $n[e] = t;
      }), String.fromCharCode.bind(String), function (e) {
        for (var t, n, r, o, i = '', a = e.length % 3, c = 0; c < e.length;) {
          if ((n = e.charCodeAt(c++)) > 255 || (r = e.charCodeAt(c++)) > 255 || (o = e.charCodeAt(c++)) > 255)
            throw new TypeError('invalid character found');
          i += er[(t = n << 16 | r << 8 | o) >> 18 & 63] + er[t >> 12 & 63] + er[t >> 6 & 63] + er[63 & t];
        }
        return a ? '' + '==='.substring(a) : i;
      });
    class nr {
      constructor(e) {
        var {wrappedUrlPath: t} = e;
        this.wrappedUrlPath = t;
      }
      extendedEncode(e) {
        return '';
      }
      wrapVastUrl(e, t) {
        var n = e.includes('http') ? e : 'https://'.concat(e);
        return ''.concat(n).concat(this.wrappedUrlPath).concat(this.extendedEncode(t));
      }
    }
    var rr = n(866), or = { M: { defaults: { timeout: 0 } } };
    var ir = { W: { state: {} } };
    function ar(e, t) {
      return Math.floor(Math.random() * (t - e) + e);
    }
    var cr = '__adm_user_id';
    function sr() {
      var e = { state: {} }.get('__adm_user_id');
      if (e)
        return e;
      var t = ar(1, 18446744073709552000);
      return { state: {} }.set('__adm_user_id', t), String(t);
    }
    var ur = {
      utm_source: 'utm1',
      utm_medium: 'utm2',
      utm_campaign: 'utm3',
      utm_content: 'utm4',
      campaign: 'camp'
    };
    window.__adFormats = window.__adFormats || {}, window.__formatsGetters = window.__formatsGetters || {};
    var lr = window.__adFormats, dr = window.__formatsGetters;
    function fr(e, t) {
      if (lr[e])
        return t(lr[e]);
      dr[e] || (dr[e] = []), dr[e].push(t);
    }
    function mr(e) {
      return e[Math.floor(Math.random() * e.length)];
    }
    function hr(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = Object.keys(e).filter(t => {
          var n = e[t];
          return !(!v(e[t]) || !e[t].length) || !!b(e[t]) && Object.keys(e[t]).filter(e => void 0 !== e[t][e]).length;
        });
      return r.length ? r.every(n => t[n] && t[n](e[n])) : n;
    }
    function pr(e, t) {
      var {
          env: n,
          Logger: r
        } = t, o = function (e) {
          var {
            ua: t,
            qs: n,
            entryReferrerDomain: r
          } = e;
          return {
            platforms: e => e.includes(t.device.type || 'desktop'),
            browsers: e => e.includes(t.browser.name),
            urls: e => e.some(e => window.location.href.includes(e)),
            ls: e => Object.keys(e).every(t => localStorage.getItem(t) === e[t]),
            ss: e => Object.keys(e).every(t => localStorage.getItem(t) === e[t]),
            qs: e => Object.keys(e).every(t => n[t] === e[t]),
            cookies: e => (e = Array.isArray(e) ? e : [e]).some(e => Object.keys(e).every(t => e[t] === je.read(t))),
            vars: e => Object.keys(e).every(t => window[t] === e[t]),
            entry_referrer: e => e.some(e => (':direct:' === e || '' === e) && '' === r || e && r.includes(e))
          };
        }(n);
      return e.filter(e => e.ignore && e.ignore.length && e.ignore.some(e => hr(e, o)) ? (r.warn('spot was excluded by ignore rules', e), false) : !e.bind || !e.bind.length || e.bind.some(t => {
        var n = hr(t, o, true);
        return n || r.warn('spot was not bind by conditions', e), n;
      }));
    }
    function vr(e, t, n, r, o, i, a) {
      try {
        var c = e[i](a), s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(c.value) : Promise.resolve(c.value).then(r, o);
    }
    function br(e) {
      return function () {
        var t = this, n = arguments;
        return new Promise(function (r, o) {
          var i = e.apply(t, arguments);
          function a(e) {
            vr(i, r, o, a, c, 'next', e);
          }
          function c(e) {
            vr(i, r, o, a, c, 'throw', e);
          }
          a(void 0);
        });
      };
    }
    class gr {
      constructor(e, t, n, r) {
        this.tagId = e, this.type = t, this.mScript = n, this.deviceType = function (e) {
          if (!e)
            return '';
          var t = e.split('');
          return t[0] = t[0].toUpperCase(), t.join('');
        }(r);
      }
      start() {
        var e = this;
        return br(function* () {
          var t = yield e.checkMediation();
          return !!t && e.startMediation(t.m_script);
        })();
      }
      fetchTargets(e, t, n) {
        var r = this;
        return br(function* () {
          var {data: t} = yield h.get(''.concat(e, '?tag_id=').concat(r.tagId, '&device=').concat(n));
          return t.rule_validation_result;
        })();
      }
      startMediation() {
        if (this.mScript) {
          var e = document.createElement('div');
          return e.innerHTML = this.mScript, e.childNodes.forEach(e => {
            var t = e.cloneNode(true);
            if ('SCRIPT' === e.nodeName) {
              for (var n = document.createElement('script'), r = 0; r < t.attributes.length; r += 1) {
                var o = t.attributes[r];
                n.setAttribute(t.attributes[r].name, t.attributes[r].value);
              }
              return n.textContent = null == t ? void 0 : t.textContent, void document.body.append(n);
            }
            document.body.append(t);
          }), true;
        }
        return false;
      }
      checkMediation() {
        var e = this;
        return br(function* () {
          if ('inpage' === e.type && e.mScript) {
            var t = yield e.fetchTargets('https://ntvpwpush.com/mediation', e.tagId, e.deviceType);
            if (t)
              return t;
          }
          return false;
        })();
      }
    }
    var yr = 't_v', wr = (e, t) => {
        if (!t)
          return Rn.remove('t_v'), e;
        var n = Rn.get('t_v');
        if (n)
          return [e[n]];
        var r = (e => Math.floor(Math.random() * e.length))(e);
        return Rn.set('t_v', String(r)), [e[r]];
      };
    function kr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }
      return n;
    }
    function Sr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? kr(Object(n), true).forEach(function (t) {
          xr(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kr(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function xr(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n, e;
    }
    function Lr(e, t, n, r, o, i, a) {
      try {
        var c = e[i](a), s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(c.value) : Promise.resolve(c.value).then(r, o);
    }
    class Cr {
      constructor(e, t, n, r, o, i) {
        var {
          type: a,
          spots: c,
          assets: s,
          autostart: u,
          m_script: l
        } = e;
        this.type = a, this.spots = c, this.jsLinks = s.js, this.isSplitTestActive = s.split_js, this.connectionName = s.name, this.providedDependencies = n, this.env = t, this.autostart = void 0 === u || u, this.Logger = r, this.isAssetsLoaded = false, this.mScript = l, this.tagId = o, this.tagAbVersion = i;
      }
      start() {
        var e = this;
        return function (e) {
          return function () {
            var t = this, n = arguments;
            return new Promise(function (r, o) {
              var i = e.apply(t, arguments);
              function a(e) {
                Lr(i, r, o, a, c, 'next', e);
              }
              function c(e) {
                Lr(i, r, o, a, c, 'throw', e);
              }
              a(void 0);
            });
          };
        }(function* () {
          var t = new gr(e.tagId, e.type, e.mScript, e.env.ua.device.type);
          if (!(yield t.start())) {
            if (!e.jsLinks || !e.jsLinks.length)
              throw new Error('[AdManager] - spot '.concat(e.type, " doesn't provide at least one js asset link"));
            e.Logger.info('init format '.concat(e.type), {
              spots: e.spots,
              jsLinks: e.jsLinks,
              autostart: e.autostart
            }), Array.isArray(e.spots) || e.Logger.error(''.concat(e.type, ' spots property was empty or not equal to array type'));
            var n = e.filterSpots(e.spots);
            if (n.length) {
              var r = n.map(t => {
                var n, r;
                return Sr(Sr({}, t), {}, { autostart: null === (n = null !== (r = t.autostart) && void 0 !== r ? r : e.autostart) || void 0 === n || n });
              }).filter(e => e.autostart);
              r.length && (e.loadAssets(), e.provideSpotsToLibrary(r));
            }
          }
        })();
      }
      runSpot() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {spot_id: t} = e;
        if (t) {
          var n = this.spots.find(e => e.config.spot_id === t);
          n && (e = Sr(Sr({}, n), e)), this.filterSpots([n]).length && (this.loadAssets(), fr(this.connectionName, t => {
            this.Logger.info('Run undefined spot', e), this.provideSpotToLibrary(e, t);
          }));
        }
      }
      provideSpotsToLibrary(e) {
        var t = t => e.forEach(e => this.provideSpotToLibrary(e, t));
        fr(this.connectionName, e => t(e));
        try {
          new Event('try'), window.addEventListener(this.connectionName, e => {
            'function' == typeof e._init && t(e._init);
          }, false);
        } catch (e) {
          var n = window[this.connectionName];
          'function' != typeof n && (n = function (e, t, r) {
            n._list.forEach(n => {
              'function' == typeof n && n(e, t, r);
            });
          }), n._list || (n._list = []), n._list.push(e => {
            'function' == typeof e && t(e);
          }), window[this.connectionName] = n;
        }
      }
      applySpotConfigTests(e) {
        var t, n, r = null == e || null === (t = e.options) || void 0 === t ? void 0 : t.split_test;
        if (null == e || null === (n = e.options) || void 0 === n || !n.has_split_tests || !r)
          return e;
        var o = ar(1, 100), i = mr(e.test_options);
        return r.traffic_volume < o || !i ? e : Sr(Sr({}, e), {}, { options: Sr(Sr({}, e.options), i) });
      }
      provideSpotToLibrary(e, t) {
        var {
            delay_ms: n,
            config: r,
            original_config: o
          } = e, i = this.applySpotConfigTests(r);
        i.isSplitTestActive = this.isSplitTestActive;
        var a = () => t(i, this.env, this.providedDependencies, o);
        n ? setTimeout(a, n) : a();
      }
      filterSpots(e) {
        return pr(e, {
          env: this.env,
          Logger: this.Logger
        });
      }
      loadAssets() {
        if (!this.isAssetsLoaded) {
          this.isAssetsLoaded = true;
          var e = this.jsLinks;
          'inpage' === this.type && (e = wr(this.jsLinks, this.isSplitTestActive));
          var t = document.querySelector('head, body');
          e.forEach(e => {
            var n = function (e, t) {
              if (document.querySelector('[src="'.concat(e.src, '"]')))
                return null;
              var n = document.createElement('script');
              return n.src = e.src, t ? n.defer = true : n.async = true, n;
            }(e, this.env.scriptDefer);
            n && t.appendChild(n);
          });
        }
      }
    }
    function Ar(e, t, n, r, o, i, a) {
      try {
        var c = e[i](a), s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(c.value) : Promise.resolve(c.value).then(r, o);
    }
    class jr {
      constructor(e) {
        var {hashedDomain: t} = e;
        this.hashedDomain = t, this.proxyPathname = '/api/senddata', this.proxyIpv4Pathname = '/api/ipv4check';
      }
      fetchCreatives(e) {
        var t = this;
        return function (e) {
          return function () {
            var t = this, n = arguments;
            return new Promise(function (r, o) {
              var i = e.apply(t, arguments);
              function a(e) {
                Ar(i, r, o, a, c, 'next', e);
              }
              function c(e) {
                Ar(i, r, o, a, c, 'throw', e);
              }
              a(void 0);
            });
          };
        }(function* () {
          var {
              type: n,
              params: r,
              proxyDomain: o,
              proxyPathname: i
            } = e, a = o || t.hashedDomain, c = i || t.proxyPathname, {data: s} = yield h.get(''.concat(a).concat(c, '?site=').concat(n, '&tail=').concat(tr(r)));
          return s;
        })();
      }
      sendIpv4Check(e) {
        var {
            proxyDomain: t,
            proxyPathname: n,
            params: r
          } = e, o = t || this.hashedDomain, i = n || this.proxyIpv4Pathname;
        h.get(''.concat(o).concat(i, '?mark=').concat(tr(r)));
      }
    }
    class Pr {
      constructor() {
        this.SESSION_KEY = 'a_s_ts', this.initialSessionId = Rn.get('lastId') || '', this.localStorageExpiresMS = 60000, this.sessionState = {
          id: null,
          startTs: null
        };
      }
      isSessionTheSame() {
        return this.initialSessionId === this.getSessionId();
      }
      replaceLastSessionData() {
        var e = this.getSessionId();
        Rn.set('lastId', e), this.initialSessionId = e;
      }
      getItem(e) {
        if (!this.isSessionTheSame())
          return this.replaceLastSessionData(), this.removeItem(e), null;
        try {
          return JSON.parse(Rn.get(e));
        } catch (e) {
          return null;
        }
      }
      setItem(e, t) {
        this.isSessionTheSame() || this.replaceLastSessionData(), Rn.set(e, JSON.stringify(t));
      }
      removeItem(e) {
        Rn.remove(e);
      }
      getFromStorage(e) {
        try {
          var t = e.get(this.SESSION_KEY), n = JSON.parse(t);
          return 'object' == typeof n ? n : null;
        } catch (e) {
          return null;
        }
      }
      setToStorage(e, t) {
        e.set(this.SESSION_KEY, JSON.stringify(t));
      }
      startSession() {
        var e = Date.now(), t = this.getFromStorage(wn), n = this.getFromStorage(Rn);
        !t && n && n.startTs + this.localStorageExpiresMS > e && (this.setToStorage(wn, n), t = n), this.sessionState = t || {
          id: Math.random().toString(36).substring(2),
          startTs: e
        }, t || (this.setToStorage(wn, this.sessionState), this.setToStorage(Rn, this.sessionState));
      }
      getDurationTime(e) {
        var t = Date.now() - this.sessionState.startTs;
        return 'min' === e ? Number((t / 1000 / 60).toFixed(2)) : t;
      }
      getSessionId() {
        return this.sessionState.id;
      }
    }
    function Ir(e, t, n, r, o, i, a) {
      try {
        var c = e[i](a), s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(c.value) : Promise.resolve(c.value).then(r, o);
    }
    function Vr(e) {
      return function () {
        var t = this, n = arguments;
        return new Promise(function (r, o) {
          var i = e.apply(t, arguments);
          function a(e) {
            Ir(i, r, o, a, c, 'next', e);
          }
          function c(e) {
            Ir(i, r, o, a, c, 'throw', e);
          }
          a(void 0);
        });
      };
    }
    function _r() {
      return _r = Vr(function* (e, t, n) {
        try {
          var {data: r} = yield h.get('https://notification.tubecup.net/tags?tag_id='.concat(e, '&timezone_olson=').concat(t, '&version_name=').concat(n));
          return r;
        } catch (e) {
          return null;
        }
      }), _r.apply(this, arguments);
    }
    class Or {
      constructor() {
        this.spotsInView = window._admSptsInVw || [], window._admSptsInVw = this.spotsInView, this.deviceType = null, this.setWidgetPosition = (e, t) => {
          e.positionOffset = t ? 10 + t.positionOffset + t.widgetNode.offsetHeight : 10, e.position.includes('top') && (e.widgetNode.style.top = ''.concat(e.positionOffset, 'px')), e.position.includes('bottom') && (e.widgetNode.style.bottom = ''.concat(e.positionOffset, 'px'));
        };
      }
      placeToPosition(e) {
        var {
          spotId: t,
          widgetNode: n,
          position: r
        } = e;
        this.spotsInView.push({
          spotId: t,
          widgetNode: n,
          position: r
        }), this.reposition(r);
      }
      removeFromPosition(e, t) {
        var n = this.spotsInView.filter(t => t.spotId !== e);
        this.spotsInView.splice(0, this.spotsInView.length, ...n), this.reposition(t);
      }
      reposition(e) {
        var t = this.spotsInView.filter(t => 'mobile' === this.deviceType ? t.position.split('-')[0] === e.split('-')[0] : t.position === e);
        t.forEach((e, n) => {
          this.setWidgetPosition(e, t[n - 1]);
        });
      }
    }
    function Rr(e, t, n, r, o, i, a) {
      try {
        var c = e[i](a), s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(c.value) : Promise.resolve(c.value).then(r, o);
    }
    function Mr(e) {
      return function () {
        var t = this, n = arguments;
        return new Promise(function (r, o) {
          var i = e.apply(t, arguments);
          function a(e) {
            Rr(i, r, o, a, c, 'next', e);
          }
          function c(e) {
            Rr(i, r, o, a, c, 'throw', e);
          }
          a(void 0);
        });
      };
    }
    var Wr = [
      1411,
      1410
    ];
    function Nr(e) {
      var t = document.createElement('iframe');
      t.referrerPolicy = 'no-referrer', t.src = e, t.width = '1px', t.height = '1px', t.setAttribute('allowtransparency', true), t.setAttribute('style', 'padding:0;margin:0;border:0;position:absolute;width:1px!important;height:1px!important;top:0!important;'), t.marginheight = '0', t.marginwidth = '0', document.body.appendChild(t);
    }
    function Tr() {
      return (Tr = Mr(function* (e) {
        e && Wr.forEach(t => Nr('https://s.uuidksinc.net/match/'.concat(t, '/?remote_uid=').concat(e)));
      })).apply(this, arguments);
    }
    function Fr(e, t, n, r, o, i, a) {
      try {
        var c = e[i](a), s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(c.value) : Promise.resolve(c.value).then(r, o);
    }
    var Zr = function () {
      var e = function (e) {
        return function () {
          var t = this, n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, arguments);
            function a(e) {
              Fr(i, r, o, a, c, 'next', e);
            }
            function c(e) {
              Fr(i, r, o, a, c, 'throw', e);
            }
            a(void 0);
          });
        };
      }(function* (e, t) {
        var n = document.createElement('iframe');
        n.src = e, n.setAttribute('style', 'padding:0;margin:0;border:0;position:absolute;top:0!important;left:0!important;width:1px!important;height:1px!important;display:none!important;'), window.document.body.appendChild(n), n.onload = () => {
          n.contentWindow.postMessage(JSON.stringify(t), '*'), setTimeout(() => {
            n.parentNode.removeChild(n);
          }, 3000);
        }, n.onerror = () => {
          n.parentNode.removeChild(n);
        };
      });
      return function (t, n) {
        return e.apply(this, arguments);
      };
    }();
    class Er {
      constructor() {
        this.generalParameters = {
          imp: [{
              secure: 'https:' === window.location.protocol ? 1 : 0,
              ext: {
                v2: false,
                tag_ab: '',
                mm: 0,
                st: 0,
                ad_tags: ''
              },
              pext: {},
              banner: {
                w: 0,
                h: 0
              }
            }],
          site: {
            id: '',
            cat: [],
            page: ''
          },
          device: {
            w: 0,
            h: 0
          },
          ext: { dt: Date.now() },
          user: {
            fp: 0,
            id: ''
          }
        };
      }
      fillGeneralParameters(e) {
        var {
            iabCategoryExtended: t,
            visitorId: n,
            userId: r,
            isMetaMask: o,
            sessionTime: i,
            tagAbVersion: a,
            publisherKeywords: c,
            cloaking: s,
            width: u,
            height: l,
            userAgentData: d
          } = e, f = window.top !== window.self;
        this.generalParameters.site.cat[0] = t, this.generalParameters.site.page = f ? document.referrer : document.URL, this.generalParameters.user.fp = n, this.generalParameters.user.id = r, this.generalParameters.imp[0].ext.v2 = s, this.generalParameters.imp[0].ext.mm = o, this.generalParameters.imp[0].ext.tag_ab = a, this.generalParameters.imp[0].ext.st = i, this.generalParameters.imp[0].ext.ad_tags = c, this.generalParameters.device.w = u, this.generalParameters.device.h = l, this.generalParameters.user.ua_data = d;
      }
      createRequestData(e) {
        var t = this.generalParameters, n = w(t.imp[0].ext, e.imp[0].ext), r = w(t.imp[0].pext, e.imp[0].pext), o = e.imp[0].banner || null;
        return t.imp[0].ext = n, t.imp[0].pext = r, t.imp[0].banner = o, t.fp_params = e.fp_params || null, t.site.id = e.site.id, t;
      }
    }
    function Xr(e, t, n, r, o, i, a) {
      try {
        var c = e[i](a), s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(c.value) : Promise.resolve(c.value).then(r, o);
    }
    function Dr(e) {
      return function () {
        var t = this, n = arguments;
        return new Promise(function (r, o) {
          var i = e.apply(t, arguments);
          function a(e) {
            Xr(i, r, o, a, c, 'next', e);
          }
          function c(e) {
            Xr(i, r, o, a, c, 'throw', e);
          }
          a(void 0);
        });
      };
    }
    function Yr() {
      return Hr.apply(this, arguments);
    }
    function Hr() {
      return (Hr = Dr(function* () {
        if (!navigator.userAgentData || !navigator.userAgentData.getHighEntropyValues)
          return null;
        try {
          return yield navigator.userAgentData.getHighEntropyValues([
            'uaFullVersion',
            'architecture',
            'bitness',
            'brands',
            'mobile',
            'model',
            'platform',
            'platformVersion',
            'fullVersionList',
            'wow64'
          ]);
        } catch (e) {
          return null;
        }
      })).apply(this, arguments);
    }
    var Gr = 't_v_a';
    function Jr() {
      var e = '';
      try {
        e = JSON.parse(Rn.get('t_v_a'));
      } catch (e) {
      }
      if (e && e.ttl + 86400000 > Date.now())
        return e.version;
      var t = mr([
        'a',
        'b',
        'c',
        'd'
      ]);
      return Rn.set('t_v_a', JSON.stringify({
        version: t,
        ttl: Date.now()
      })), t;
    }
    var zr = 'in_stream_ad', Ur = 'popunder';
    function Br(e, t, n, r, o, i, a) {
      try {
        var c = e[i](a), s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(c.value) : Promise.resolve(c.value).then(r, o);
    }
    class Qr {
      constructor() {
        this.tagId = null, this.tagAbVersion = Jr(), this.siteId = null, this.magmaClickResolverEnable = false, this.adFormats = [], this.env = null, this.cloakingConfig = null, this.SessionService = new Pr(), this.SessionService.startSession(), this.PositionService = new Or(), this.HashService = new Fe(), this.AuctionService = new Er(), this.Logger = new o('AdManager', e.devMode), this.ytAuthDetector = new We(), this.ytAuthDetector.loadYoutubeAuthMarker(), this.providedDependencies = {
          VastProxyService: new nr({ wrappedUrlPath: e.vastProxyWrappedUrlPath }),
          hashGenerator: {
            md5: Pe,
            getDate: this.HashService.getDateForHash,
            generateCdnDomain: () => this.HashService.generateCdnDomain(),
            generateAuctionUrl: e => this.HashService.generateAuctionUrl(e),
            generateNativeAuctionUrl: () => this.HashService.generateNativeAuctionUrl(),
            convertToHashedUrl: e => this.HashService.convertToHashedUrl(e)
          },
          DisplayAdblockService: new jr({ hashedDomain: this.HashService.generateHashedProxyDomain() }),
          SessionService: this.SessionService,
          PositionService: this.PositionService,
          AuctionService: this.AuctionService,
          cookies: je,
          ytAuthDetector: this.ytAuthDetector
        }, this.hashHelpers = {}, this.Logger.info('version '.concat(e.version)), this._paramReconciler = {}, this.resalePopunderTags = [
          61271,
          9695
        ];
      }
      addReconsileParams(e) {
        for (var t in e)
          Object.prototype.hasOwnProperty.call(e, t) && (this._paramReconciler[t] = e[t]);
      }
      getLocalConfig() {
        var e = window['{{CONFIG_ADM}}'];
        return this.getActualConfig(window['{{CONFIG_ADM}}']);
      }
      getActualConfig(e) {
        return e.tag_configs ? e.tag_configs[this.tagAbVersion] : e;
      }
      loadTagConfig(t) {
        var {createHashTagUrl: n} = this.hashHelpers, r = n ? n() : e.tagConfigUrl;
        return h.get(''.concat(r, '/').concat(t, '?version_name=').concat(this.tagAbVersion)).then(e => e.data);
      }
      runFormatSpot(e, t) {
        var n = this.adFormats.find(t => t.type === e);
        n ? n.runSpot(t) : this.Logger.warn('AdFormat '.concat(n, ' no found in config'));
      }
      getConfigHelpers(e) {
        var t = t => e.adformats.find(e => e.type === t);
        return {
          findFormat: t,
          addSpotToFormat: (e, n) => {
            var r = t(e);
            r && r.spots.push(n);
          },
          findFormatSpot: (e, n) => {
            var r = t(e);
            return r && r.spots.length ? r.spots.find(e => e.config.spot_id === n) : (this.Logger.warn('Spot '.concat(n, " doesn't exist in config")), {
              config: {},
              ignore: [],
              bind: []
            });
          }
        };
      }
      push(e) {
        'function' == typeof e && e();
      }
      enableMagmaClickResolver(e) {
        if (!e)
          throw Error('siteId - must be passed for magma click resolver proper work');
        this.magmaClickResolverEnable = true, this.siteId = e;
      }
      changeAdFormatOrder(e, t) {
        var n = this.adFormats.findIndex(t => t.type === e);
        if (-1 !== n) {
          var [r] = this.adFormats.splice(n, 1);
          this.adFormats.splice(t, 0, r);
        }
      }
      runAdFormats() {
        this.adFormats.length && (this.Logger.info('run tag formats'), 10149 === this.tagId && this.changeAdFormatOrder('in_stream_ad', 0), [
          827,
          23106,
          58635
        ].includes(this.tagId) && this.changeAdFormatOrder('popunder', 0), this.adFormats = this.adFormats.map(e => {
          var t = new Cr(e, this.env, this.providedDependencies, this.Logger, this.tagId, this.tagAbVersion);
          return t.start(), t;
        }));
      }
      ph() {
        var e = this;
        this.hashHelpers = {
          createHashPath: function () {
            return e.HashService.createHashPath(...arguments);
          },
          createHashTagUrl: function () {
            return e.HashService.createHashTagUrl(...arguments);
          },
          domainHashed: function () {
            return e.HashService.generateCdnDomain(...arguments);
          },
          date: function () {
            return e.HashService.getDateForHash(...arguments);
          },
          md5: Pe
        };
      }
      getAdformatsUrls() {
        return this.adFormats.flatMap(e => {
          var t = e.assets.js.map(e => {
            var {src: t} = e;
            return t;
          });
          return 'in_stream_ad' === e.type ? [
            ...Object.values(e.spots[0].config.scripts),
            ...t
          ] : t;
        });
      }
      init() {
        var t = arguments, n = this;
        return function (e) {
          return function () {
            var t = this, n = arguments;
            return new Promise(function (r, o) {
              var i = e.apply(t, arguments);
              function a(e) {
                Br(i, r, o, a, c, 'next', e);
              }
              function c(e) {
                Br(i, r, o, a, c, 'throw', e);
              }
              a(void 0);
            });
          };
        }(function* () {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.tagId, o = arguments.length > 1 ? arguments[1] : void 0;
          if (!r)
            throw new Error('[Admanager] - method init accept only string | number | object param');
          var i = performance.now(), a = b(r);
          n.tagId = b(r) ? r.tagId : r;
          var c = [
            a ? n.getActualConfig(r) : n.loadTagConfig(r),
            Ce.load().then(function (e) {
              return e.get();
            }).then(function (e) {
              return e;
            }),
            Yr()
          ];
          a && r.is_tnet || c.push(new Promise(function (e) {
            var t = document.createElement('script');
            t.async = 1, t.src = 'https://js.wpshsdk.com/npc/sdk/wp-banners.js', t.onload = function () {
              return e(false);
            }, t.onerror = function () {
              return e(true);
            }, document.head.appendChild(t);
          }));
          var [s, u, l, d = false] = yield Promise.all(c);
          if (!b(s) || !v(s.adformats))
            throw new Error('[Admanager] - tag config must be object type and its adformats field must be an array type');
          var f = !!s.is_tnet;
          n.env = Zn(u.visitorId, d, n.SessionService.getSessionId(), f, u, l, s.tagId), n.env.visitorId = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = pn();
            return t || mn(e).then(function (e) {
              return vn(e);
            }), t;
          }(s.tagId), f && (n.env.isAdBlock = false), function (e) {
            Tr.apply(this, arguments);
          }(n.env.visitorId), s.v2 && (n.cloakingConfig = yield function (e, t, n) {
            return _r.apply(this, arguments);
          }(s.tagId, n.env.timezoneOlson, n.tagAbVersion));
          var m = n.cloakingConfig || s;
          n.env.v2 = n.cloakingConfig ? 1 : 0;
          var h, p, g = function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = '_tp_', o = {};
              return e.forEach(e => {
                var i = Rn.get('_tp_' + e), a = t[e] || t[ur[e]] || t[n[e]];
                o[e] = a || i || '', a && Rn.set('_tp_' + e, a);
              }), o;
            }([
              'utm_source',
              'utm_medium',
              'utm_campaign',
              'utm_content',
              'campaign'
            ], n.env.qs, m.utm_mapping);
          n.env.holdableQSParams = g, n.env.iabCategory = m.iabcat, n.env.iabCategoryExtended = m.iab_extended, n.env.mainCategory = m.label, n.env.scriptDefer = m.script_defer, n.env.tagAbVersion = (h = n.tagAbVersion, (p = m.testId) ? ''.concat(h, '_').concat(p) : ''.concat(h)), n.env.defaultKeywords = m.default_keywords;
          var {sub: y} = n.env, {campaign: w} = g;
          n.magmaClickResolverEnable && 0 === y && w && (n.env.holdableQSParams.utm_source = 'mck', n.env.holdableQSParams.utm_medium = w, n.env.holdableQSParams.utm_campaign = n.siteId, n.env.sub = Number(n.siteId)), n.PositionService.deviceType = n.env.ua.device.type, n.AuctionService.fillGeneralParameters({
            iabCategoryExtended: 'IAB'.concat(n.env.iabCategoryExtended),
            visitorId: n.env.visitorId,
            isMetaMask: n.env.sessionTime,
            tagAbVersion: n.env.tagAbVersion,
            sessionTime: n.SessionService.getDurationTime('min'),
            publisherKeywords: n.env.keywords,
            cloaking: n.env.v2,
            width: n.env.resolution[0],
            height: n.env.resolution[1],
            userId: n.env.userId,
            userAgentData: l
          });
          var k = n.HashService.generateHashedProxyDomain(), S = (f ? null : n.HashService.generateMetricHashDomain()) || e.initTrackingUrl, x = performance.now();
          if (n.resalePopunderTags.includes(Number(n.tagId))) {
            var L = function (e) {
              var {tagId: t} = e;
              return {
                type: 'resale-popunder',
                spots: [{
                    config: {
                      spot_id: Number(t),
                      options: {
                        frequency: 1,
                        capping_time: 5
                      }
                    }
                  }],
                assets: {
                  js: ['https://js.wpadmngr.com/test/pops-lite.js'],
                  name: '__resale-popunder-event'
                }
              };
            }(m);
            m.adformats.push(L);
          }
          n.adFormats = zn({
            label: m.label,
            iabcat: m.iabcat,
            isPhpLoaderActive: !!m.adm_loader,
            adFormats: m.adformats,
            hashHelpers: n.hashHelpers,
            isAdBlock: n.env.isAdBlock,
            hashedProxyDomain: k,
            legacySpotsExtend: n._paramReconciler,
            hashService: n.HashService,
            tagAbVersion: n.tagAbVersion,
            isTubeSite: f
          }), o && o();
          var C = n.hashHelpers.createHashPath;
          !function (e, t) {
            var {
                label: n,
                subId: r,
                userId: o,
                timezone: i,
                adManagerVersion: a,
                tagId: c,
                screenResolution: s,
                isAdBlock: u,
                timezoneOlson: l,
                utmSource: d,
                utmMedium: f,
                utmCampaign: m,
                utmContent: h,
                isMetaMaskActive: p,
                initToStartLatency: v,
                isCloaking: b,
                isCloakingResponseEmpty: g,
                userKeywords: y
              } = t, w = {
                wl: n,
                subid: r,
                user_id: o,
                timezone: i,
                ver: a,
                tag_id: Number(c),
                screen_resolution: s.join('x'),
                adblock: Number(u),
                timezone_olson: l,
                utm_source: d,
                utm_medium: f,
                utm_campaign: m,
                utm_content: h,
                mm: Number(p),
                init_start_latency: Number(v),
                is_v2: Number(b),
                is_v2_empty: Number(g),
                user_keywords: y
              }, k = ''.concat(e, '/in/track?data=').concat((0, rr.cv)(JSON.stringify(w)));
            ({ defaults: { timeout: 0 } }.get(k).catch(() => {
            }));
          }(S, {
            label: m.label,
            subId: n.env.sub,
            userId: sr(),
            timezone: n.env.timezone,
            adManagerVersion: e.version,
            tagId: m.tagId || 0,
            screenResolution: n.env.resolution,
            isAdBlock: n.env.isAdBlock,
            timezoneOlson: n.env.timezoneOlson,
            utmSource: n.env.holdableQSParams.utm_source,
            utmMedium: n.env.holdableQSParams.utm_medium,
            utmCampaign: n.env.holdableQSParams.utm_campaign,
            utmContent: n.env.holdableQSParams.utm_content,
            isMetaMaskActive: n.hashHelpers.createHashPath ? 2 : 3,
            initToStartLatency: ((x - i) / 1000).toFixed(2),
            isCloaking: s.v2 || false,
            isCloakingResponseEmpty: n.cloakingConfig,
            userKeywords: n.env.keywords
          }), f || Zr('https://ntvpwpush.com/dl/cookies', {
            fp: n.env.visitorId,
            refdomain: n.env.entryReferrerDomain,
            mm: n.env.isMetaMaskActive,
            gyr: n.env.isGyroscope,
            ad_tags: n.env.keywords,
            tag_ab: n.env.tagAbVersion,
            timezone: n.env.timezone,
            utm1: n.env.holdableQSParams.utm_source,
            utm2: n.env.holdableQSParams.utm_medium,
            utm3: n.env.holdableQSParams.utm_campaign ? String(n.env.holdableQSParams.utm_campaign) : void 0,
            utm4: n.env.holdableQSParams.utm_content,
            accel: n.env.isAccelerometer,
            screen_resolution: n.env.resolution.join('x')
          }), n.runAdFormats();
        })();
      }
    }
    var qr = document.querySelector('script['.concat(e.tagIdIdentifier, ']')), Kr = Array.isArray(window[e.adManagerWindowNamespace]) ? window[e.adManagerWindowNamespace] : [];
    if (window[e.adManagerWindowNamespace] = window[e.adManagerWindowNamespace] instanceof Qr || new Qr(), window.a3klsam = window[e.adManagerWindowNamespace], window[e.adManagerWindowNamespace]._paramReconciler = window[e.overrideConfigWindowNamespace] || {}, Kr.forEach(e => e()), qr) {
      var $r = qr.getAttribute(e.tagIdIdentifier);
      qr.removeAttribute(e.tagIdIdentifier);
      var eo = qr.hasAttribute(e.noAutostartIdentifier);
      $r && (window[e.adManagerWindowNamespace].tagId = $r), $r && !eo && window[e.adManagerWindowNamespace].init();
    }
  })();
})();
