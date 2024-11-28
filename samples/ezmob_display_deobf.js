!function () {
  'use strict';
  var n, A = {
      ua: {
        edge: !(!/edge\//i.test(navigator.userAgent) && !/Edg\//i.test(navigator.userAgent)),
        ie: !!/msie|trident/i.test(navigator.userAgent),
        oldIE: !!/msie/i.test(navigator.userAgent),
        firefox: !!/firefox/i.test(navigator.userAgent),
        opera: !!/opera/i.test(navigator.userAgent),
        chrome: !!/chrome/i.test(navigator.userAgent),
        safari: !!/Safari\//i.test(navigator.userAgent),
        webkit: !!/webkit/i.test(navigator.userAgent),
        linux: !!/linux/i.test(navigator.userAgent),
        mac: /macintosh/i.test(navigator.userAgent),
        touch: 'ontouchstart' in document.documentElement || !!/bada|blackberry|iemobile|android|iphone|ipod|ipad/i.test(navigator.userAgent),
        mobile: !!/Mobi/i.test(navigator.userAgent)
      },
      bindEvent: function (n, e, o) {
        n.addEventListener ? n.addEventListener(e, o, true) : n.attachEvent && n.attachEvent('on' + e, o);
      },
      unbindEvent: function (n, e, o) {
        n.removeEventListener ? n.removeEventListener(e, o, true) : n.detachEvent && n.detachEvent('on' + e, o);
      },
      now: function () {
        return Math.round(A.ms_now() / 1000);
      },
      ms_now: function () {
        return Date.now ? Date.now() : new Date().getTime();
      },
      readCookie: function (n) {
        n = document.cookie.match(new RegExp('(?:^|; )' + n.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
        return n ? decodeURIComponent(n[1]) : void 0;
      },
      writeCookie: function (n, e, o) {
        if (!n || null == e)
          throw new Error('invalid name or value specified');
        e = n + '=' + e + '; path=/';
        o && o.toUTCString && (e += '; expires=' + o.toUTCString()), document.cookie = e;
      },
      deleteCookie: function (n) {
        if (!n)
          throw new Error('invalid name specified');
        A.writeCookie(n, '', new Date(0));
      },
      isCookieEnabled: function () {
        var n = 'test';
        return A.writeCookie('test', 'test'), A.readCookie('test') === 'test';
      },
      shuffle: function (n) {
        for (var e = (n = n.slice()).length; 0 < e;) {
          var o = Math.floor(Math.random() * e), t = n[--e];
          n[e] = n[o], n[o] = n[--e];
        }
        return n;
      },
      suppressEvent: function (n) {
        n.preventDefault ? n.preventDefault() : n.returnValue = false;
      }
    };
  function a(n, e, o, t) {
    var i, r = 'adkpp_c', a = 'adkpp_tm', w = new Date(2045, 0), u = n, c = (i = n) instanceof Array ? Math.max.apply(Math, i) : void 0, d = A.isCookieEnabled();
    function s() {
      return l('adkpp_c');
    }
    function l(n) {
      n = parseInt(A.readCookie(n));
      return isNaN(n) ? 0 : n;
    }
    function f() {
      return A.now() - l('adkpp_tm') > e;
    }
    function h(n) {
      return (n - (c || 0)) % o == 0;
    }
    this.isAllowed = function () {
      if (!d)
        return false;
      var n = s() + 1;
      if (n instanceof Array && 0 < n.length) {
        if (-1 !== n.indexOf(n))
          return true;
        if (c < n) {
          if (e)
            return f();
          if (o)
            return h(n);
        }
      } else {
        if (e)
          return f();
        if (o)
          return h(n);
      }
      return false;
    }, this.onClick = function (n) {
      !function (n) {
        if ('number' != typeof n)
          throw new Error('invalid value specified');
        A.writeCookie('adkpp_c', n, function () {
          var n = new Date();
          return n.setHours(n.getHours() + (t || 1)), n;
        }());
      }(s() + 1), n && A.writeCookie('adkpp_tm', A.now(), w);
    };
  }
  function w(e, o, t, i, r, a) {
    this.build = function () {
      var n = e + '//' + o + '/redirect?feed=' + t;
      return i && (n += '&auth=' + i), r && (n += '&subid=' + encodeURIComponent(r)), n += '&query=' + encodeURIComponent(function () {
        if (a.length <= 3)
          return a;
        return A.shuffle(a).slice(0, 3);
      }().join('\n')), n += '&url=' + encodeURIComponent(document.location.href), n += '&rnd=' + Math.round(1000 * Math.random());
    };
  }
  function i(n) {
    var e = n.popupUrl, o = window.top === window.self ? window.self : window.top, n = s(n);
    o.open(n.popupUrl, n);
  }
  function r(n) {
    var e = n.popupUrl, o = n.navigationUrl, t = window.top === window.self ? window.self : window.top, o = o || t.location.href;
    t.open(n.navigationUrl, '_blank') && (n.windowName && (t.name = n.windowName), t.location = n.popupUrl, n.navigationUrl && (n = n.event, A.suppressEvent(n)));
  }
  function u(n) {
    var e = n.popupUrl, o = 'resizable=no,scrollbars=yes,height=' + screen.height + ',width=' + screen.width + ',status=yes', n = s(n), t = window.open('about:blank', n, o);
    try {
      t.document.write('<script type="text/javascript">window.opener.open("","_parent");location.replace("' + n.popupUrl + '");</script>'), t.document.close();
    } catch (n) {
      t.location = n.popupUrl;
    }
    t.blur(), window.focus();
  }
  function c(n) {
    var e, o, t, i, r = n.popupUrl, n = s(n);
    function a() {
      var n;
      e.document.hasFocus() || (e.clearInterval(t), e.clearTimeout(i), o.src = 'about:blank', window.document.body.removeChild(o), (n = e).moveTo(0, 0), n.resizeTo(window.screen.width, window.screen.height), e.location.href = n.popupUrl);
    }
    (e = window.open('about:blank', n, 'scrollbars=no,resizeable=yes,height=1,width=1,top=9999,left=9999')) && (o = function () {
      var n = window.document.createElement('iframe');
      n.style.display = 'none', window.document.body.appendChild(n);
      var e = n.contentDocument, o = n.contentDocument.createElement('div');
      return n.contentDocument.body.appendChild(o), o.innerHTML = '<object data="data:application/pdf;base64, JVBERi0xLjMKJf////8KMSAwIG9iago8PCAvQ3JlYXRvciAoUHJhd24pCi9Qcm9kdWNlciAoUHJhd24pCj4+CmVuZG9iagoyIDAgb2JqCjw8IC9UeXBlIC9QYWdlcwovQ291bnQgMQovS2lkcyBbNSAwIFJdCj4+CmVuZG9iagozIDAgb2JqCjw8IC9UeXBlIC9DYXRhbG9nCi9QYWdlcyAyIDAgUgovTmFtZXMgNyAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwgL0xlbmd0aCA3Ngo+PgpzdHJlYW0KL0RldmljZVJHQiBjcwowLjAwMCAwLjAwMCAwLjAwMCBzY24KL0RldmljZVJHQiBDUwowLjAwMCAwLjAwMCAwLjAwMCBTQ04KcQpRCgplbmRzdHJlYW0KZW5kb2JqCjUgMCBvYmoKPDwgL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIuMCA3OTIuMF0KL0NvbnRlbnRzIDQgMCBSCi9SZXNvdXJjZXMgPDwgL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUldCj4+Cj4+CmVuZG9iago2IDAgb2JqCjw8IC9TIC9KYXZhU2NyaXB0Ci9KUyA8ZmVmZjAwNjEwMDcwMDA3MDAwMmUwMDYxMDA2YzAwNjUwMDcyMDA3NDAwMjgwMDI3MDA0ZjAwNmUwMDY1MDAyMDAwNmQwMDZmMDA2ZDAwNjUwMDZlMDA3NDAwMjAwMDcwMDA2YzAwNjUwMDYxMDA3MzAwNjUwMDJlMDAyZTAwMmUwMDI3MDAyOT4KPj4KZW5kb2JqCjcgMCBvYmoKPDwgL1R5cGUgL05hbWVzCi9KYXZhU2NyaXB0IDggMCBSCj4+CmVuZG9iago4IDAgb2JqCjw8IC9OYW1lcyBbKHh5enp5KSA2IDAgUl0KPj4KZW5kb2JqCnhyZWYKMCA5CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwMDcxIDAwMDAwIG4gCjAwMDAwMDAxMjggMDAwMDAgbiAKMDAwMDAwMDE5MCAwMDAwMCBuIAowMDAwMDAwMzE2IDAwMDAwIG4gCjAwMDAwMDA0NzAgMDAwMDAgbiAKMDAwMDAwMDY0OSAwMDAwMCBuIAowMDAwMDAwNzAxIDAwMDAwIG4gCnRyYWlsZXIKPDwgL1NpemUgOQovUm9vdCAzIDAgUgovSW5mbyAxIDAgUgo+PgpzdGFydHhyZWYKNzQ1CiUlRU9GCglf"></object>', n;
    }(), t = e.setInterval(a, 10), i = e.setTimeout(function () {
      e.clearInterval(t), o.src = 'about:blank', window.document.body.removeChild(o), e.document.write('<script>window.close();</script>');
    }, 4000));
  }
  function d(e) {
    var o = {
      edge: u,
      ie: i,
      ff: i,
      chrome: i,
      webkit: u,
      mobile: i,
      safari: i,
      def: i
    };
    function t(n) {
      if (!(n in o))
        throw new Error('Unknown method ' + n);
      return function (n) {
        switch (n) {
        case 'newtab':
          return i;
        case 'apop':
          return u;
        case 'tabu':
          return r;
        case 'pdfh':
          return c;
        }
      }(e[n]) || o[n];
    }
    e = e || {}, this.open = function (n) {
      var e = function () {
        var n = t('def');
        A.ua.edge ? n = t('edge') : A.ua.ie ? n = t('ie') : A.ua.firefox && !A.ua.linux ? n = t('ff') : A.ua.chrome && !A.ua.mac ? n = t('chrome') : A.ua.safari ? n = t('safari') : A.ua.webkit && (n = t('webkit'));
        A.ua.mobile && (n = t('mobile'));
        return n;
      }();
      e.name, e(n);
    };
  }
  function s(n) {
    return n.windowName || 'auxwin_' + Math.round(10000 * Math.random());
  }
  function l(o, t) {
    var n, i, e;
    function r(n) {
      var e = { event: n };
      A.unbindEvent(i, 'click', r), document.body.removeChild(i), i = void 0, o(e), t.onClick(true), A.suppressEvent(n);
    }
    function a(n) {
      i || t.onClick(false);
    }
    function w() {
      !i && t.isAllowed() && ((i = document.createElement('div')).style.position = 'fixed', i.style.width = '100%', i.style.height = '100%', i.style.left = 0, i.style.top = 0, i.style.zIndex = 2147483647, i.style.backgroundColor = 'transparent', i = document.body.appendChild(i), A.bindEvent(i, 'click', r));
    }
    this.hook = function () {
      n = window.setInterval(w, 100), (e = new h(a)).hook();
    }, this.unhook = function () {
      n = window.clearInterval(n), e.unhook(), e = void 0;
    };
  }
  function f(i, r) {
    var n;
    function e(n) {
      var e, o = n || window.event, t = false;
      'A' === n.target.tagName && (e = n.target.href, t = !!n.target.target.match(/blank$/));
      t = !t && r.isAllowed();
      t && i({
        navigationUrl: e,
        event: o
      }), r.onClick(t);
    }
    this.hook = function () {
      (n = new h(e)).hook();
    }, this.unhook = function () {
      n.unhook(), n = void 0;
    };
  }
  function h(e) {
    var o, t;
    function n(n) {
      o = false;
    }
    function i(n) {
      o || a(n);
    }
    function r(n) {
      o = true;
    }
    function a(n) {
      t && A.ms_now() - t < 700 || (t = A.ms_now(), e(n));
    }
    this.hook = function () {
      A.bindEvent(document, 'click', a), A.bindEvent(document, 'touchstart', n), A.bindEvent(document, 'touchend', i), A.bindEvent(document, 'scroll', r);
    }, this.unhook = function () {
      A.unbindEvent(document, 'click', a), A.unbindEvent(document, 'touchstart', n), A.unbindEvent(document, 'touchend', i), A.unbindEvent(document, 'scroll', r);
    };
  }
  void 0 !== window.adk_pdisp && void 0 === window.adk_pdisp.r && (window.adk_pdisp.r = true, !A.isCookieEnabled() || (n = new function (e) {
    var o = new w(window.location.protocol, e.h, e.f, e.a, e.s, e.q), t = new d(e.op), n = new a(e.ps, e.in, e.cin, e.t), i = (n = n, new ('overlay' === e.m ? l : f)(r, n));
    function r(n) {
      n.popupUrl = o.build(), n.windowName = e.wname, t.open(n);
    }
    this.checkOrigin = function () {
      try {
        return window.top.location.hostname !== window.self.location.hostname || true;
      } catch (n) {
        return false;
      }
    }, this.hook = function () {
      i.hook();
    }, this.unhook = function () {
      i.unhook();
    }, function (n) {
      if (!n)
        throw new Error('no options specified');
      if (!n.h)
        throw new Error('h not specified');
      if (!n.f || 'number' != typeof n.f)
        throw new Error('f is not specified');
      if ('a' in n && 0 === n.a.length)
        throw new Error('a is not specified');
      if ('ps' in n && !(n.ps instanceof Array))
        throw new Error('ps should by an array');
      if ('in' in n) {
        if ('number' != typeof n.in)
          throw new Error('in is not specified');
        if (n.in <= 0)
          throw new Error('in should be greater than zero');
      }
      if ('cin' in n) {
        if ('number' != typeof n.cin)
          throw new Error('cin should be specified');
        if (n.cin <= 0)
          throw new Error('cin should be greater than zero');
      }
      if (!(n.q && n.q instanceof Array))
        throw new Error('invalid q value');
      if ('cin' in n && 'in' in n)
        throw new Error('cin and in are mutually exclusive');
      if ('t' in n && ('number' != typeof n.t || n.t <= 0))
        throw new Error('t should be a positive number');
      if ('op' in n && 'object' != typeof n.op)
        throw new Error('op should be an object');
      if ('wname' in n && 'string' != typeof n.wname)
        throw new Error('wname should be a string');
    }(e);
  }(window.adk_pdisp)).checkOrigin() && n.hook());
}();
