!function (window) {
  'use strict';
  var detectAdBlock = false, detectPrivacyMode = false, dataPopUnder = window.dataPopUnder, CheckAdBlock = (void 0 === Array.prototype.indexOf && (Array.prototype.indexOf = function (t, e) {
      for (var i = e || 0, n = this.length; i < n; i++)
        if (this[i] === t)
          return i;
      return -1;
    }), Function.prototype.bind || (Function.prototype.bind = function (t) {
      if ('function' != typeof this)
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      function e() {
        return n.apply(this instanceof o && t ? this : t, i.concat(Array.prototype.slice.call(arguments)));
      }
      var i = Array.prototype.slice.call(arguments, 1), n = this, o = function () {
        };
      return o.prototype = this.prototype, e.prototype = new o(), e;
    }), function () {
      function t() {
        setTimeout(function () {
          true === i._options.checkOnLoad && (null === i._var.bait && i._creatBait(), setTimeout(function () {
            i.check();
          }, 1));
        }, 1);
      }
      var e = window.navigator.userAgent, i = (this._options = {
          checkOnLoad: true,
          loopCheckTime: 50,
          loopMaxNumber: 5,
          baitClass: 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links',
          baitStyle: 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;'
        }, this._var = {
          bait: null,
          checking: false,
          loop: null,
          loopNumber: 0,
          ie6: window.navigator.userAgent.match(/MSIE\s6\./g),
          ie7: window.navigator.userAgent.match(/MSIE\s7\./g)
        }, this);
      void 0 !== window.addEventListener ? window.addEventListener('load', t, false) : window.attachEvent('onload', t);
    });
  function PrivacyModeDetector() {
    return this.ua = window.navigator.userAgent.toLowerCase(), this.browser = this._getBrowser(), this.privacy = null, this._detectPrivacy(), this.report(), this;
  }
  function PopUnder() {
    this.init();
  }
  CheckAdBlock.prototype = {
    _options: null,
    _var: null,
    _bait: null,
    _creatBait: function () {
      var t = document.createElement('div');
      t.setAttribute('class', this._options.baitClass), t.setAttribute('style', this._options.baitStyle), this._var.bait = window.document.body.appendChild(t), this._var.bait.offsetParent, this._var.bait.offsetHeight, this._var.bait.offsetLeft, this._var.bait.offsetTop, this._var.bait.offsetWidth, this._var.bait.clientHeight, this._var.bait.clientWidth;
    },
    _destroyBait: function () {
      window.document.body.removeChild(this._var.bait), this._var.bait = null;
    },
    check: function (t) {
      if (void 0 === t && (t = true), true === this._var.checking)
        return false;
      this._var.checking = true, null === this._var.bait && this._creatBait();
      var e = this;
      return !(this._var.loopNumber = 0) === t && (this._var.loop = setInterval(function () {
        e._checkBait(t);
      }, this._options.loopCheckTime)), setTimeout(function () {
        e._checkBait(t);
      }, 1), true;
    },
    _checkBait: function (t) {
      var e, i = false;
      null === this._var.bait && this._creatBait(), null === window.document.body.getAttribute('abp') && null !== this._var.bait.offsetParent && 0 !== this._var.bait.offsetHeight && 0 !== this._var.bait.offsetLeft && 0 !== this._var.bait.offsetTop && 0 !== this._var.bait.offsetWidth && 0 !== this._var.bait.clientHeight && 0 !== this._var.bait.clientWidth || (i = true), void 0 === window.getComputedStyle || 'none' != (e = window.getComputedStyle(this._var.bait, null)).getPropertyValue('display') && 'hidden' != e.getPropertyValue('visibility') || (i = true), true === t && (this._var.loopNumber++, this._var.loopNumber >= this._options.loopMaxNumber && this._stopLoop()), true === (i = this._var.ie6 || this._var.ie7 ? false : i) ? (this._stopLoop(), detectAdBlock = true) : null !== this._var.loop && false !== t || (detectAdBlock = false), this._destroyBait(), true === t && (this._var.checking = false);
    },
    _stopLoop: function () {
      clearInterval(this._var.loop), this._var.loop = null, this._var.loopNumber = 0;
    }
  }, new CheckAdBlock(), PrivacyModeDetector.prototype = {
    _detectIE: function () {
      var t = this.ua.indexOf('msie ');
      if (0 < t)
        return parseInt(this.ua.substring(t + 5, this.ua.indexOf('.', t)), 10);
      if (0 < this.ua.indexOf('trident/'))
        return t = this.ua.indexOf('rv:'), parseInt(this.ua.substring(t + 3, this.ua.indexOf('.', t)), 10);
      t = this.ua.indexOf('edge/');
      return 0 < t && parseInt(this.ua.substring(t + 5, this.ua.indexOf('.', t)), 10);
    },
    _detectSafari: function () {
      try {
        return !!window.safari || -1 != this.ua.indexOf('safari') && -1 === this.ua.indexOf('chrome') && -1 === this.ua.indexOf('crios');
      } catch (t) {
        return false;
      }
    },
    _detectChrome: function () {
      try {
        return !!window.chrome || -1 !== this.ua.indexOf('crios') || 0 === window.navigator.vendor.indexOf('Google') && -1 !== this.ua.indexOf('chrome');
      } catch (t) {
        return false;
      }
    },
    _detectFF: function () {
      try {
        return -1 != this.ua.indexOf('firefox');
      } catch (t) {
        return false;
      }
    },
    _getBrowser: function () {
      return {
        isIE: this._detectIE(),
        isSafari: this._detectSafari(),
        isChrome: this._detectChrome(),
        isFF: this._detectFF()
      };
    },
    _detectIEPrivacy: function () {
      if (this.browser.isIE < 10)
        return this.privacy = false;
      try {
        window.indexedDB ? this.privacy = false : this.privacy = true;
      } catch (t) {
        this.privacy = false;
      }
    },
    _detectSafariPrivacy: function () {
      try {
        window.localStorage.setItem('check', 1), window.localStorage.getItem('check'), window.localStorage.removeItem('check'), this.privacy = false;
      } catch (t) {
        this.privacy = true;
      }
    },
    _detectChromePrivacy: function () {
      try {
        window.webkitRequestFileSystem ? window.webkitRequestFileSystem(window.TEMPORARY, 1, function () {
          this.privacy = false;
        }.bind(this), function () {
          this.privacy = true;
        }.bind(this)) : this.privacy = false;
      } catch (t) {
        this.privacy = false;
      }
    },
    _detectFFPrivacy: function () {
      var t;
      try {
        (t = window.indexedDB.open('test')).onerror = function () {
          this.privacy = true;
        }.bind(this), t.onsuccess = function () {
          this.privacy = false;
        }.bind(this);
      } catch (t) {
        this.privacy = true;
      }
    },
    _detectPrivacy: function () {
      return this.browser.isIE ? this._detectIEPrivacy() : this.browser.isSafari ? this._detectSafariPrivacy() : this.browser.isChrome ? this._detectChromePrivacy() : this.browser.isFF ? this._detectFFPrivacy() : void 0;
    },
    report: function (t) {
      null === this.privacy ? window.setTimeout(this.report.bind(this, t), 50) : detectPrivacyMode = this.privacy;
    }
  }, new PrivacyModeDetector(), PopUnder.prototype = {
    cookieExpires: 6,
    cookieName: 'ts_popunder',
    filterParams: [
      'param1',
      'param2',
      'param3',
      'subid'
    ],
    setting: {
      params: [
        'domain=' + location.host || '',
        'rnd=' + Math.random()
      ]
    },
    mainWindow: top != self && 'string' == typeof top.document.location.toString() ? top : self,
    width: 1024,
    height: 768,
    top: 0,
    left: 0,
    screenX: function () {
      return this.getWindowLeft() + this.getWindowWidth() / 2 - this.width / 2;
    },
    screenY: function () {
      return this.getWindowTop() + this.getWindowHeight() / 2 - this.height / 2;
    },
    widthWindow: function () {
      return this.width - this.magicNumbers().x;
    },
    heightWindow: function () {
      return this.height - this.magicNumbers().y;
    },
    windowSetting: function () {
      return 'toolbar=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=' + this.widthWindow() + ',height=' + this.heightWindow() + ',screenX=' + this.screenX() + ',screenY=' + this.screenY();
    },
    init: function () {
      var t = window.dataPopUnder || this.eachScript(), e = this.checkWinChrome60() ? 'mousedown' : 'click';
      t && (window.dataPopUnder ? this.copySetting() : this.setBannerSettings(t), this.formatSetBannerSettings(), this.addEvent(e, document, this.showPopUnder.bind(this)));
    },
    showPopUnder: function (t) {
      this.clickEvent = t || window.event;
      var e = this.clickEvent.target || this.clickEvent.srcElement, i = e.href && this.getStringFormat(e.href.split('/')), n = parseInt(this.userAgent.version, 10);
      this.doNotShow(e) || this.popUnderRunning || (this.setUrl(i), this.userAgent.ios && this.userAgent.safari && this.userAgent.mobile && 1000 < n ? (this.openWindow(t), this.mainWindow.location = e.getAttribute('href')) : detectAdBlock || this.userAgent.mobile || this.userAgent.android || this.userAgent.ios || !this.userAgent.edge && this.userAgent.macosx && (this.userAgent.chrome && 61 <= n || this.userAgent.safari && 11 <= n) || !this.userAgent.edge && this.userAgent.windows && 62 <= n ? this.openTab() : !this.userAgent.opera && !this.userAgent.edge && this.userAgent.chrome && 41 < n ? this.popUnderPDFInit(t, e) : this.userAgent.edge || this.userAgent.windows && this.userAgent.opera || this.userAgent.yaBrowser ? this.openTab() : this.openWindow(t));
    },
    openTab: function () {
      var t = this.clickEvent, e = t.target || t.srcElement, i = 0;
      if (t.preventDefault(), 'a' !== e.nodeName.toLowerCase())
        for (; e.parentNode && i++ <= 4 && 'html' !== e.nodeName.toLowerCase() && ('a' !== (e = e.parentNode).nodeName.toLowerCase() || '' === e.href););
      this.userAgent.winphone ? this.mobileTab(e) : this.desktopTab(e), this.mainWindow.location = this.url;
    },
    mobileTab: function (t) {
      var e, i = document.createElement('a');
      i.href = t.href || this.mainWindow.location, i.setAttribute('target', '_blank');
      try {
        e = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true
        });
      } catch (t) {
        (e = document.createEvent('MouseEvents')).initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
      }
      i.dispatchEvent(e);
    },
    desktopTab: function (t) {
      var e = window.open(t.href || this.mainWindow.location, '_blank');
      e ? (e.focus(), this.setCookie(this.cookieName, 1, this.cookieExpires)) : this.url = t.href || this.mainWindow.location;
    },
    openWindow: function (t) {
      this.popUp = window.open(this.url, '_blank', this.windowSetting()), this.popUp && (this.setCookie(this.cookieName, 1, this.cookieExpires), this.userAgent.ios && 'img' === t.target.tagName.toLowerCase() && t.preventDefault(), this.userAgent.msie ? (document.onclick = null, this.popUp.blur(), window.focus()) : this.catchEvent());
    },
    catchEvent: function () {
      try {
        if (this.popUp.blur(), this.popUp.opener.window.focus(), window.self.window.blur(), window.self.window.focus(), window.focus(), this.userAgent.safari && 9 <= parseInt(this.userAgent.version, 10))
          return void this.fakeTab();
        this.userAgent.firefox && this.fakeTab(), this.userAgent.webkit && this.webkitEvent();
      } catch (t) {
      }
    },
    fakeTab: function () {
      var t = window.open('about:blank');
      t.focus(), t.close();
    },
    webkitEvent: function () {
      var t = document.createElement('a'), e = document.createEvent('MouseEvents');
      t.href = 'data:text/html;charset=utf-8,%3Cscript%3Ewindow.close()%3C/script%3E', document.getElementsByTagName('body')[0].appendChild(t), e.initMouseEvent('click', false, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null), t.dispatchEvent(e), t.parentNode.removeChild(t);
    },
    replacementCampaign: function (t) {
      'campaignid' in t && (this.setting.redirect = this.getDomain() + 'campaign/{spot}', this.setting.spot = t.campaignid, 'bannerid' in t && (this.setting.redirect += '/' + t.bannerid), this.setting.redirect += '/test');
    },
    copySetting: function () {
      var t, e;
      for (e in window.dataPopUnder)
        t = window.dataPopUnder[e], -1 != this.filterParams.indexOf(e) ? this.setting.params.push(e + '=' + t) : this.setting[e] = t;
    },
    doNotShow: function (t) {
      var e = this.clickEvent && this.clickEvent.which, i = this.isSelectiveTarget(t), n = parseInt(this.userAgent.version, 10), t = null !== this.getCookie(this.cookieName) || this.ignoreFilter(t) || 'selective' === this.setting.mode && !i || detectAdBlock && !i || !!t.getAttribute('target') || this.userAgent.chrome && !this.userAgent.edge && !this.userAgent.opera && 41 < n && n < 49 && !i;
      return !(!e || 1 == e) || t;
    },
    eachScript: function () {
      var t, e, i, n, o, r = document.getElementsByTagName('script');
      if (0 < r.length)
        for (var s = 0; s < r.length; s++)
          e = this.getAttr(r[s], 'data-ts-spot') || this.getAttr(r[s], 'data-id'), i = this.getAttr(r[s], 'data-ts-width'), n = this.getAttr(r[s], 'data-ts-height'), o = this.getAttr(r[s], 'data-ts-redirect'), !e && !o || i || n || (t = r[s]);
      return t;
    },
    setBannerSettings: function (t) {
      var e, i, n, o = t.attributes;
      for (n in t.attributes)
        !(e = 'object' == typeof t.attributes[n] && t.attributes[n].name) || -1 == e.indexOf('data-ts') && -1 == e.indexOf('data-id') || ('data-id' === (e = e.replace('data-ts-', '')) && (e = 'spot'), i = t.attributes[n].value, -1 != this.filterParams.indexOf(e) ? this.setting.params.push(e + '=' + i) : this.setting[e] = i);
    },
    formatSetBannerSettings: function () {
      this.setting.categories || (this.setting.categories = this.getMetaWords()), this.setting['ignore-filter'] && (this.setting['ignore-filter'] = this.setting['ignore-filter'].replace(/\s+/g, '').split(',')), this.setting.redirect && (this.setting.redirect = this.formatRedirectURL(this.setting.redirect)), this.setting['cookie-expires'] && (this.cookieExpires = parseInt(this.setting['cookie-expires'], 10)), this.replacementCampaign(this.setting);
    },
    formatRedirectURL: function (t) {
      return /^(f|ht)tps?:\/\//i.test(t) ? '/' !== t.slice(-1) && (t += '/') : t = 'http://' + t, t;
    },
    setUrl: function (t) {
      t = this.getRedirectUrl() + '?' + this.setting.params.join('&') + this.getPositionCursor() + this.getScreenSize() + '&adb=' + +detectAdBlock + '&priv=' + +detectPrivacyMode + '&categories=' + this.getCategories(t);
      this.url = t;
    },
    getScreenSize: function () {
      var t = '', e = window.devicePixelRatio || 1, i = window.screen || {}, n = i.width, i = i.height;
      return t = i.width && i ? '&w=' + parseInt(i.width * e, 10) + '&h=' + parseInt(i * e, 10) : t;
    },
    getCategories: function (t) {
      var e = this.setting.categories;
      return (e = !e && t ? t : e || this.getLocalStorage('ts_categories')) ? (this.setLocalStorage('ts_categories', e), this.setting.categories = e) : '';
    },
    getRedirectUrl: function () {
      var t = this.setting.redirect && 0 <= this.setting.redirect.indexOf('{spot}') && this.setting.redirect.replace('{spot}', this.setting.spot);
      return t || (this.setting.redirect || this.getDomain()) + this.setting.spot;
    },
    isSelectiveTarget: function (t) {
      for (var e = t.tagName.toLowerCase(); e && 'body' !== e;) {
        if ('a' === e)
          return true;
        e = (t = t.parentNode) && t.tagName && t.tagName.toLowerCase();
      }
      return false;
    },
    getAttr: function (t, e) {
      var i = t.getAttribute && t.getAttribute(e) || null;
      if (!i && 'function' != typeof t)
        for (var n = t.attributes, o = n.length, r = 0; r < o; r++)
          n[r].nodeName === e && (i = n[r].nodeValue);
      return i;
    },
    getMetaWords: function () {
      for (var t = document.getElementsByTagName('meta'), e = t.length, i = 0, n = ''; i < e;)
        'description' !== t[i].getAttribute('name') && 'keywords' !== t[i].getAttribute('name') || (n += ' ' + t[i].getAttribute('content')), i++;
      return document.title && (n += ' ' + document.title), (n = n.length ? n : this.getStringFormat(window.location.pathname.split('/'))).replace(/[^\w\s]/gi, ' ').replace(/(^\s+)|(\b(\w{1,2})\b(\s|$))/g, '').replace(/\s+/gi, ',');
    },
    getStringFormat: function (t) {
      t = t && t[t.length - 1].split(/[?#]/)[0], t = !!t && t.replace(/(x?html?)$/gi, '').match(/([a-zA-Z]+)/g);
      return (t = t && t.join(' ').replace(/(\b(\w{1,2})\b(\s|$))/g, '')) || '';
    },
    addEvent: function (t, e, i) {
      if (e.addEventListener)
        e.addEventListener(t, i, false);
      else if (e.attachEvent)
        return e.attachEvent('on' + t, i);
    },
    getDomain: function () {
      return '//run-syndicate.com/api/v1/direct/';
    },
    getPositionCursor: function () {
      var t = document.documentElement, e = this.clickEvent;
      return '&x=' + (e.pageX || e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)) + '&y=' + (e.pageY || e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
    },
    parentFilter: function (t) {
      var e = t.parentNode, t = 'HTML' === t.nodeName || t.parentNode && 'HTML' === t.parentNode.nodeName;
      if (t.parentNode && !t)
        return !!this.ignoreFilter(t.parentNode, true) || this.parentFilter(t.parentNode);
    },
    ignoreFilter: function (t, e) {
      var i, n = 0, o = t.className.split(' ');
      t.tagName.toLowerCase();
      if (t.id && o.push(t.id), this.setting['ignore-filter']) {
        for (i = o.length; n < i; n++)
          if (this.checkIgnore(o[n]))
            return true;
        if (e)
          return false;
        if (this.parentFilter(t))
          return true;
      }
      if ('function' == typeof window.pop_ts_click_filter)
        return window.pop_ts_click_filter(t);
    },
    checkIgnore: function (t) {
      for (var e = 0, i = this.setting['ignore-filter'], n = i.length; e < n; e++)
        if (i[e] === t)
          return true;
      return false;
    },
    checkWinChrome60: function () {
      return this.userAgent.windows && !this.userAgent.windowsXP && this.userAgent.chrome && 59 <= parseInt(this.userAgent.version, 10);
    },
    PDFFile: '//cdn.tsyndicate.com/sdk/v1/p_pdf.pdf',
    popUnderPDF: null,
    popUnderRunning: false,
    popUnderPostCalled: false,
    randomString: Math.floor(1000 * Math.random() + 1).toString(),
    hiddenWindowSetting: 'directories=0,toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=1,height=1,screenX=19999,screenY=19999',
    popUnderPDFInit: function (t, e) {
      return !this.popUnderRunning && (t.preventDefault(), t.stopImmediatePropagation(), t.stopPropagation(), this.popUnderRunning = true, this.checkWinChrome60() ? (this.popUnderWindowsPDF(e), false) : (this.catchFocusIFrame(), this.createPDFObjectHandle = this.createPDFObject(), 57 < parseInt(this.userAgent.version, 10) && this.addNotification(), void this.catchFocusEvent(t)));
    },
    catchFocusIFrame: function () {
      try {
        var popFrame = window.document.createElement('iframe'), windowBody = '<html><head><script>window.a={};window.a.b=function(){window.resizeTo(1,0);window.moveTo(19999,19999);};window.a.b();window.open("", "_self");</script></head><body></body></html>', popFrameScript = (popFrame.setAttribute('style', 'display:none'), window.document.body.appendChild(popFrame), popFrame.contentWindow.document.createElement('script'));
        popFrameScript.innerHTML = "(function () {\n          var frameWindow = window;\n          ;\n          window.init = function (t, e) {\n            return window.open('about:blank', t, e);\n          };\n        })();", popFrame.contentWindow.document.body.appendChild(popFrameScript), this.popUnderPDF = popFrame.contentWindow.init(this.randomString, this.hiddenWindowSetting), window.document.body.removeChild(popFrame), this.popUnderPDF.document.write('<html><head><script>window.a={};window.a.b=function(){window.resizeTo(1,0);window.moveTo(19999,19999);};window.a.b();window.open("", "_self");</script></head><body></body></html>');
      } catch (c) {
      }
    },
    catchFocusEvent: function (t) {
      var e = t.target || t.srcElement, i = this, n = null;
      function o() {
        i.userAgent.macosx || clearInterval(n), i.focusAchieved(e);
      }
      this.userAgent.macosx || (n = setInterval(function () {
        if (document.hasFocus())
          return o(), false;
      }, 20)), this.addEvent('focus', window, o), setTimeout(o, 3000);
    },
    focusAchieved: function (t) {
      this.popUnderPostCalled || (this.popUnderPostCalled = true, this.postWindowPop(t));
    },
    postWindowPop: function (t) {
      var e = this;
      57 < parseInt(this.userAgent.version, 10) && (this.removeNotification(), this.addNotification()), setTimeout(function () {
        e.createPDFObjectHandle.parentNode.parentNode.removeChild(e.createPDFObjectHandle.parentNode);
      }, 20);
      try {
        this.popUnderPDF.moveTo(this.screenX(), this.screenY()), this.popUnderPDF.resizeBy(this.widthWindow(), this.heightWindow()), setTimeout(function () {
          57 < parseInt(e.userAgent.version, 10) && e.removeNotification();
        }, 200), e.popUnderPDF.location = e.url;
      } catch (t) {
      }
      this.triggerClick(t), this.popUnderRunning = false, this.setCookie(this.cookieName, 1, this.cookieExpires);
    },
    createPDFObject: function () {
      var t = document.createElement('div'), e = document.createElement('object');
      return t.setAttribute('style', 'visibility:hidden;width:0px;height:0px;opacity:0;position:absolute;top:100%;left:0;pointer-events:none;overflow:hidden;'), t.setAttribute('inf', 'inf'), e.setAttribute('data', this.PDFFile), t.appendChild(e), document.body.appendChild(t), e;
    },
    triggerClick: function (t) {
      try {
        var e = document.createEvent('MouseEvents');
        e.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null), t.dispatchEvent(e), this.popUnderRunning = false;
      } catch (t) {
      }
    },
    addNotification: function () {
      var t = this.iframeNotification = document.createElement('iframe');
      t.width = 0, t.height = 0, t.style.width = '0', t.style.height = '0', t.srcdoc = '<script>try {Notification.requestPermission(function () {});navigator.requestMIDIAccess({ sysex: true });} catch (e) {}</script>', document.body.appendChild(t);
    },
    removeNotification: function () {
      this.iframeNotification && this.iframeNotification.parentNode.removeChild(this.iframeNotification);
    },
    popUnderWindowsPDF: function (t) {
      var e = window.open('about:blank', '_blank'), i = this.clickEvent, n = e.document.createEvent('MouseEvents'), o = this, r = '<html><head><title></title><meta name="Referrer" content="unsafe-url"><script>(function() {var winName = "RUNAtive";var winParams =' + this.hiddenWindowSetting + ';window.addEventListener("mouseup", function() {if (window.w) return;window.w = window.open("about:blank", winName, winParams);w.resizeTo(1, 0);w.moveTo(9e5, 9e5);});})();</script></head><body></body></html>', s = (e.document.write(r), n.initMouseEvent('click', true, true, e, 1, i.screenX, i.screenY, i.clientX, i.clientY, false, false, false, false, 0, null), e.dispatchEvent(n), setInterval(function () {
          e.w && (clearInterval(s), o.createPDFObjectHandle = o.createPDFObject(), o.addEvent('focus', window, a), e.close());
        }, 20));
      function a() {
        o.createPDFObjectHandle.parentNode.parentNode && o.createPDFObjectHandle.parentNode.parentNode.removeChild(o.createPDFObjectHandle.parentNode), e.w && (e.w.resizeTo(o.heightWindow(), o.heightWindow()), e.w.moveTo(o.screenX(), o.screenY()), e.w.location.replace('http://' + o.url), window.removeEventListener('focus', a, false), o.setCookie(o.cookieName, 1, o.cookieExpires), o.triggerClick(t));
      }
      this.popUnderRunning = false;
    },
    setLocalStorage: function (t, e) {
      try {
        window.localStorage && window.localStorage.setItem(t, e);
      } catch (t) {
      }
    },
    getLocalStorage: function (t) {
      try {
        if (window.localStorage)
          return window.localStorage.getItem(t);
      } catch (t) {
      }
    },
    setCookie: function (t, e, i) {
      var i = new Date(new Date().getTime() + 3600000 * i).toGMTString(), n = this.setting['cookie-domain'] ? '; domain=' + this.setting['cookie-domain'] : '';
      document.cookie = t + '=' + e + '; expires=' + i + n + '; path=/';
    },
    getCookie: function (t) {
      t = document.cookie.match('(^|;) ?' + t + '=([^;]*)(;|$)');
      return t ? decodeURIComponent(t[2]) : null;
    },
    getWindowWidth: function () {
      var t = 0;
      return 'number' == typeof window.innerWidth ? t = window.innerWidth : document.documentElement && document.documentElement.clientWidth ? t = document.documentElement.clientWidth : document.body && document.body.clientWidth && (t = document.body.clientWidth), t;
    },
    getWindowHeight: function () {
      var t = 0;
      return 'number' == typeof window.innerHeight ? t = window.innerHeight : document.documentElement && document.documentElement.clientHeight ? t = document.documentElement.clientHeight : document.body && document.body.clientHeight && (t = document.body.clientHeight), t;
    },
    getWindowLeft: function () {
      return void 0 !== window.screenLeft ? window.screenLeft : window.screenX;
    },
    getWindowTop: function () {
      return void 0 !== window.screenTop ? window.screenTop : window.screenY;
    },
    magicNumbers: function () {
      if (this.userAgent.macosx) {
        if (this.userAgent.chrome)
          return {
            x: 100,
            y: 71
          };
        if (this.userAgent.opera)
          return {
            x: 100,
            y: 86
          };
      }
      if (this.userAgent.windows) {
        if (this.userAgent.chrome)
          return {
            x: 122,
            y: 34
          };
        if (this.userAgent.opera)
          return {
            x: 270,
            y: 129
          };
      }
      return {
        x: 0,
        y: 0
      };
    },
    userAgent: function () {
      var t = navigator.userAgent.toLowerCase(), e = {
          webkit: /webkit/gi.test(t),
          mozilla: /mozilla/gi.test(t) && !/(compatible|webkit)/.test(t),
          chrome: /chrome/gi.test(t),
          maxthon: /maxthon/gi.test(t),
          samsung: /samsungbrowser/gi.test(t),
          msie: /msie/gi.test(t) && !/opera/.test(t),
          firefox: /firefox/gi.test(t),
          safari: /safari/gi.test(t) && !/chrome/.test(t),
          opera: /opera|opr/gi.test(t),
          macosx: /mac os x/gi.test(t),
          windowsXP: /Windows NT 5/gi.test(t),
          windows: /Windows NT/gi.test(t),
          ios: /iphone|ipad/gi.test(t),
          crios: /crios/gi.test(t),
          android: /android/gi.test(t),
          mobile: /mobile/gi.test(t) || /tablet/gi.test(t),
          winphone: /windows phone/gi.test(t),
          edge: /Edge/gi.test(t),
          yaBrowser: /YaBrowser/gi.test(t)
        };
      return e.version = (e.safari ? t.match(/.+?(?:on|ri)[\/: ]([\d.]+)/) || [] : t.match(/.+(?:ox|me|ra|ie|opr)[\/: ]([\d.]+)/) || [])[1], e;
    }()
  }, new PopUnder();
}(window);
