!function (e) {
  var t = {};
  function n(o) {
    if (t[o])
      return t[o].exports;
    var r = t[o] = {
      i: o,
      l: false,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = true, r.exports;
  }
  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: true,
      get: o
    });
  }, n.r = function (e) {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: true });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t)
      return e;
    if (4 & t && 'object' == typeof e && e && e.__esModule)
      return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, 'default', {
        enumerable: true,
        value: e
      }), 2 & t && 'string' != typeof e)
      for (var r in e)
        n.d(o, r, function (t) {
          return e[t];
        }.bind(null, r));
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, 'a', t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = '', n(n.s = 0);
}([function (e, t, n) {
    'use strict';
    function o(e) {
      return (o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function r(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, o);
      }
      return n;
    }
    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? r(Object(n), true).forEach(function (t) {
          c(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function c(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ('object' !== o(e) || null === e)
            return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== e[Symbol.toPrimitive]) {
            var r = e[Symbol.toPrimitive].call(e, t || 'default');
            if ('object' !== o(r))
              return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        }(e, 'string');
        return 'symbol' === o(t) ? t : String(t);
      }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n, e;
    }
    function a(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      (n = i({ path: '/' }, n)).expires instanceof Date && (n.expires = n.expires.toUTCString());
      var o = encodeURIComponent(e) + '=' + encodeURIComponent(t);
      for (var r in n) {
        o += '; ' + r;
        var c = n[r];
        true !== n[r] && (o += '=' + n[r]);
      }
      document.cookie = o;
    }
    function u(e) {
      return (u = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        t[n].enumerable = t[n].enumerable || false, t[n].configurable = true, 'value' in t[n] && (t[n].writable = true), Object.defineProperty(e, (r = t[n].key, i = void 0, i = function (e, t) {
          if ('object' !== u(e) || null === e)
            return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== e[Symbol.toPrimitive]) {
            var o = e[Symbol.toPrimitive].call(e, t || 'default');
            if ('object' !== u(o))
              return o;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        }(r, 'string'), 'symbol' === u(i) ? i : String(i)), t[n]);
      }
      var r, i;
    }
    n.r(t);
    var f = function () {
      function e(t, n) {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.windows = [], this.config = t, this.feedItem = n, this.onAction = this.onAction.bind(this);
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'onAction',
          value: function (e) {
            var t = location.href;
            switch (this.config.type) {
            case 'popunder':
              var n = window.open(this.feedItem.link, ''.concat(this.config.aid, '_').concat(this.windows.length + 1), 'height='.concat(window.outerHeight, ',width=').concat(window.outerWidth));
              this.windows.push(n);
              break;
            case 'popup':
              var o = window.open(this.feedItem.link, ''.concat(this.config.aid, '_').concat(this.windows.length + 1), 'height='.concat(window.outerHeight, ',width=').concat(window.outerWidth));
              this.windows.push(o);
              break;
            case 'tabunder':
              window.open(location.href, '_blank'), window.open(this.feedItem.link, '_self');
              break;
            case 'tabup':
              window.open(this.feedItem.link, '_blank');
            }
            return e.preventDefault(), true;
          }
        }]) && l(t.prototype, n), o && l(t, o), Object.defineProperty(t, 'prototype', { writable: false }), e;
    }();
    function s(e) {
      return (s = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function p(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        t[n].enumerable = t[n].enumerable || false, t[n].configurable = true, 'value' in t[n] && (t[n].writable = true), Object.defineProperty(e, (r = t[n].key, i = void 0, i = function (e, t) {
          if ('object' !== s(e) || null === e)
            return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== e[Symbol.toPrimitive]) {
            var o = e[Symbol.toPrimitive].call(e, t || 'default');
            if ('object' !== s(o))
              return o;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        }(r, 'string'), 'symbol' === s(i) ? i : String(i)), t[n]);
      }
      var r, i;
    }
    var d = function () {
      function e(t, n) {
        var o = this;
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.config = t, this.onClick = n, this.checkLinksTm = setInterval(function () {
          o.checkLinks();
        }, 1000), this.checkLinks(), this._isClicked = false;
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'checkLinks',
          value: function () {
            var e = this;
            document.querySelectorAll('a').forEach(function (t) {
              t.__adl_is_watch && false || (t.__adl_is_watch = true, t.__adl_cb_event = function (t) {
                t.preventDefault(), window.clearInterval(e.checkLinksTm), document.querySelectorAll('a').forEach(function (e) {
                  delete e.__adl_is_watch, e.removeEventListener('click', e.__adl_cb_event, true);
                }), e._isClicked = true, e.onClick();
              }, t.addEventListener('click', t.__adl_cb_event, true));
            });
          }
        }]) && p(t.prototype, n), o && p(t, o), Object.defineProperty(t, 'prototype', { writable: false }), e;
    }();
    function y() {
      console.error('Is not constructor');
    }
    function b(e) {
      var t;
      if (b.enabled) {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
          o[r - 1] = arguments[r];
        (t = console).log.apply(t, ['[POPUNDER v0.0.1] '.concat(e)].concat(o));
      }
    }
    function v(e) {
      var t = e.frequency_cap_count, n = e.frequency_cap_period, o = e.type, r = e.trigger_action;
      b('checkFQ: [%d:%d] %o - %o', e.frequency_cap_count, e.frequency_cap_period, e.type, e.trigger_action);
      var i, c, u = (i = 'adpopunder', (c = document.cookie.match(new RegExp('(?:^|; )adpopunder=([^;]*)'))) ? decodeURIComponent(c[1]) : void 0);
      u || (u = '');
      var l = Math.round(Date.now() / 360000), f = u.split('|').filter(function (e) {
          return !!e && l - +e.split(':')[1] < e.frequency_cap_period;
        });
      return e.frequency_cap_count > 0 && f.length >= e.frequency_cap_count ? (b('frequency cap full', e.frequency_cap_count, e.frequency_cap_period, f), null) : function () {
        f.push(e.type + ':' + Math.round(Date.now() / 360000)), b('frequency cap show update', e.frequency_cap_count, e.frequency_cap_period, f), a('adpopunder', f.join('|'));
      };
    }
    b.enabled = 'true' === localStorage.getItem('popunder-logger'), y.config = Promise.resolve(null);
    try {
      y.config = Promise.resolve({
        type: 'pop_up',
        config: {
          spot_id: 22065,
          aid: 822297,
          frequency_cap_count: 100,
          frequency_cap_period: 1,
          floor: 0.01,
          type: 'tabunder',
          trigger_action: 'click_on_any_place'
        }
      });
    } catch (e) {
      var m = localStorage.getItem('popunder-config');
      m && (y.config = Promise.resolve(JSON.parse(m)));
    }
    y.config.then(function (e) {
      if (e) {
        var t, n = v(e.config);
        if (n)
          (t = e.config.aid, fetch('https://'.concat(t, '.xmlfeed.feed-xml.com/?lang=').concat(navigator.language, '&domain=').concat(location.hostname)).then(function (e) {
            return e.text();
          }).then(function (e) {
            return Promise.resolve(JSON.parse(e));
          }).catch(function (e) {
            return {};
          })).then(function (t) {
            if (t.link) {
              n();
              var o = new f(e.config, t);
              switch (e.config.trigger_action) {
              case 'click_on_any_place':
                document.addEventListener('click', function e(t) {
                  o.onAction(t) && document.removeEventListener('click', e, true);
                }, true);
                break;
              case 'links_only':
                new d(e.config, o.onAction);
              }
            } else
              b('feed fail', e.config.aid);
          });
      }
    });
  }]);
