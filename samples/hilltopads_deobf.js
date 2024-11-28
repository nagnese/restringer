(function (options) {
  'use strict';
  var version = '1.1.14';
  var pop = {
    defaults: {
      script: null,
      autobind: true,
      barrier: null,
      priorBjs: true,
      otherBjs: [],
      callbacks: {
        open: [],
        scheme: []
      },
      window: {
        url: null,
        fullscreen: false,
        w: 1001,
        h: 800,
        type: 'popunder',
        chromePopunder: false
      },
      freq: {
        qty: 2,
        period: 86400,
        distances: null,
        scheme: 'time',
        distance: 0,
        context: 'domain',
        session: false,
        sessionKeepAliveTime: 0,
        sessionExpiration: 3600,
        hashed: true,
        pagelim: 0,
        max: 0
      },
      misc: {
        safe: false,
        chromeTab: true,
        ontouch: true,
        newTab: false,
        under: true,
        bindTo: [],
        ignoreTo: [],
        download: [],
        stopUrls: [],
        coverTags: ['iframe'],
        perpage: 1000,
        coverScrollbar: true,
        fallbackToPopup: false,
        forcePopup: false
      },
      elements: {
        media: true,
        include: null,
        exclude: false,
        isActiveElement: null
      },
      add: {
        pixels: [],
        scripts: [],
        callbacks: {
          open: [],
          scheme: []
        },
        title: null,
        keywords: null,
        urlParamsObj: {}
      },
      counters: {
        domain: '__cntd',
        page: '__cntp',
        iframePage: '__cntip',
        max: '__cntm',
        schemeClicks: '__cnsc',
        schemeSeq: '__cnss',
        dailySeq: '__cns24s',
        lastTimer: '__tlo',
        lastPageTimer: '__tlop'
      },
      counterPostfixes: {
        domain: null,
        page: null,
        iframePage: null,
        max: null,
        schemeClicks: null,
        schemeSeq: null,
        dailySeq: null,
        lastTimer: null,
        lastPageTimer: null
      },
      pageGroup: 'abcdefgh',
      names: {
        iabc: '__iabc',
        schemeSeq: 'sseq',
        dailySeq: 'dseq',
        clickedElement: '1',
        windowType: 'rsrc'
      },
      delayPop: {
        url: null,
        isActive: false,
        delay: 30
      },
      onlyClickable: false,
      hash: null,
      bdVar: '__htaBDI'
    },
    settings: {},
    localCounters: {
      lastActiveTime: 0,
      lastOpenTime: 0,
      loadedTime: Math.floor(new Date().getTime() / 1000)
    },
    eventTarget: null,
    init: function (options) {
      if (!this.utils.cookieEnabled())
        return;
      this.utils.ua.initialize();
      this.mergeSettings(options);
      this.addPostfixToCounters();
      this.settings.autobind && this.init3rdp();
      this.addEmbeds();
    },
    mergeSettings: function (options) {
      try {
        var userSettings = {}, scriptTag = document.querySelector('script[src*="' + options.scriptSrc + '"]');
        if (scriptTag !== null && scriptTag.settings) {
          userSettings = scriptTag.settings;
        } else {
          userSettings = window.__htapop ? window.__htapop : {};
        }
        this.utils.merge(this.defaults, userSettings);
        this.settings = this.utils.merge(this.defaults, options ? options : {});
        if (userSettings && userSettings.window && userSettings.window.url) {
          this.settings.window.url = userSettings.window.url;
        }
      } catch (error) {
        pop.sendError(error, { situation: 'mergeSettings' });
      }
    },
    getPopUrl: function () {
      var additionalParams = [], c = this.settings.window.url.indexOf('?') === -1 ? '?' : '&', key, urlParamsObj = this.settings.add.urlParamsObj;
      for (key in urlParamsObj) {
        additionalParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(urlParamsObj[key]));
      }
      additionalParams = additionalParams.join('&');
      if (this.utils.ige(navigator.userAgent)) {
        additionalParams += '&' + this.settings.names.iabc + '=1';
      }
      additionalParams += '&' + this.settings.names.schemeSeq + '=' + (this.getSchemeSeq() + 1).toString() + '&' + this.settings.names.dailySeq + '=' + (this.getDailySeq() + 1).toString() + '&' + this.settings.names.windowType + '=' + 'popscript_' + this.settings.window.type;
      switch (true) {
      case this.utils.elements.isThumbnailLink(this.eventTarget):
        additionalParams += '&' + this.settings.names.clickedElement + '=tmb';
        break;
      case this.utils.elements.isTextLinkOrSimilar(this.eventTarget):
        additionalParams += '&' + this.settings.names.clickedElement + '=lnk';
        break;
      }
      return this.settings.window.url + c + additionalParams;
    },
    addEmbeds: function () {
      var pixels = this.settings.add.pixels;
      var scripts = this.settings.add.scripts;
      if (Object.prototype.toString.call(this.settings.add.pixels) === '[object Array]' && this.settings.add.pixels.length > 0) {
        for (var i = 0; i <= this.settings.add.pixels.length; i++) {
          if (!this.settings.add.pixels[i])
            continue;
          this.utils.addPixel(this.settings.add.pixels[i]);
        }
      }
      if (Object.prototype.toString.call(this.settings.add.scripts) === '[object Array]' && this.settings.add.scripts.length > 0) {
        for (var j = 0; j <= this.settings.add.scripts.length; j++) {
          if (!this.settings.add.scripts[j])
            continue;
          this.utils.addScript(this.settings.add.scripts[j]);
        }
      }
    },
    changePriorClass: function (result) {
      if (document.body) {
        document.body['bоdy'] = result ? true : undefined;
      }
    },
    getOtherBjs: function () {
      if (Object.getOwnPropertyNames) {
        Object.getOwnPropertyNames(window).forEach(function (prop) {
          try {
            var deprecated = [
              'webkitStorageInfo',
              'content',
              'onmozfullscreenchange',
              'onmozfullscreenerror'
            ];
            if (deprecated.indexOf(prop) !== -1)
              return;
            var value = prop && window[prop], gS = 'getStack';
            if (value && typeof value === 'string' && typeof window[value] === 'object' && 'getStack' in window[value] && prop !== this.settings.popns && this.settings.otherBjs.indexOf(value) === -1) {
              this.settings.otherBjs.push(value);
            }
          } catch (e) {
          }
        }, this);
        return this.settings.otherBjs;
      }
    },
    prior: function priorF() {
      function priorOtherBjs() {
        var otherBjs = this.getOtherBjs(), gS = 'getStack', _optionsKey, _shouldFireKey, popObject, popOptionsKey;
        if (otherBjs.length) {
          this.changePriorClass(true);
          otherBjs.forEach(function (bjsVar) {
            if (typeof window[bjsVar].getStack !== 'function')
              return;
            popObject = window[bjsVar].getStack()[0];
            if (typeof popObject !== 'object')
              return;
            for (_optionsKey in popObject) {
              popOptionsKey = popObject[_optionsKey];
              if (typeof popOptionsKey !== 'object' || !('shouldFire' in popOptionsKey)) {
                continue;
              }
              for (_shouldFireKey in popObject[_optionsKey]) {
                if (popOptionsKey[_shouldFireKey] !== popOptionsKey.shouldFire) {
                  continue;
                }
                popOptionsKey[_shouldFireKey] = function () {
                  if (!document.body['bоdy']) {
                    if (popObject && popObject._options) {
                      return popOptionsKey.shouldFire();
                    }
                  } else {
                    return false;
                  }
                };
                break;
              }
              break;
            }
          });
        }
      }
      function letOtherGo() {
        this.changePriorClass(false);
        window.ppuDisableTrigger = undefined;
      }
      function stopOthers() {
        window.ppuDisableTrigger = true;
        if (document.readyState === 'complete') {
          priorOtherBjs.call(this);
        } else {
          window.addEventListener('load', priorOtherBjs.bind(this));
        }
      }
      try {
        var upp = 'ppuDisableTrigger';
        if (this.isSchemeReached()) {
          letOtherGo.call(this);
        } else {
          stopOthers.call(this);
        }
        if (true === undefined) {
          priorF.intervals = true;
          setInterval(priorF.bind(this), 5000);
          this.settings.callbacks.open.push(priorF.bind(this));
        }
      } catch (error) {
        if (Math.random() < 0.05) {
          pop.sendError(error, { situation: 'Error in priorF.' });
        }
      }
    },
    init3rdp: function () {
      var t = this, popvar = this.utils.randomString();
      this.addBDToUrl();
      window[this.settings.popns || 'popns'] = popvar;
      this.utils.cneckLoadBjs(this.settings.script);
      this.runSessionOption();
      this.runSPASupport();
      this.bindIncSchemeClicks();
      this.utils.addScript(this.settings.script);
      this.checkBarrier();
      if (this.settings.priorBjs && !this.isUrlStopping()) {
        this.prior();
      }
      var interval = setInterval(function () {
        if (typeof window[popvar] === 'undefined') {
          return;
        }
        clearInterval(interval);
        (function (BetterJsPop) {
          var br = pop.utils.ua.get.browser().name, os = pop.utils.ua.get.os().name, newTab = false, under = false, popSettings = pop.settings, misc = pop.settings.misc, coverScrollbar = pop.settings.misc.coverScrollbar, coverTags = pop.settings.misc.coverTags, fallbackToPopup = pop.settings.misc.fallbackToPopup, forcePopup = pop.settings.misc.forcePopup, ignoreTo = pop.settings.misc.ignoreTo, perpage = pop.settings.misc.perpage, safe = pop.settings.misc.safe, isDelayPop = false, isDelayPopAvailable = false, popOptions;
          if (pop.settings.window.type !== 'popup') {
            newTab = pop.settings.misc.newTab;
            under = pop.settings.misc.under;
          }
          if (typeof coverTags === 'string') {
            coverTags = [coverTags];
          }
          if (pop.settings.delayPop.isActive && pop.settings.delayPop.url !== null) {
            isDelayPop = true;
          }
          if (isDelayPop && (pop.utils.ua.get.os().name !== 'Mac OS X' || window.screenTop && window.screenY)) {
            isDelayPopAvailable = true;
          }
          var configOptions = {
            debug: false,
            safe: pop.settings.misc.safe,
            perpage: pop.settings.misc.perpage,
            coverTags: coverTags,
            mobileSensitive: 10,
            noOpenerHijacking: !BetterJsPop.Browser.isMobile,
            ignoreTo: pop.settings.misc.ignoreTo,
            coverScrollbar: pop.settings.misc.coverScrollbar
          };
          if (isDelayPopAvailable && pop.utils.ua.get.browser().name === 'Chrome' && pop.settings.delayPop.delay !== null) {
            configOptions.delay = pop.settings.delayPop.delay;
          }
          popOptions = {
            newTab: newTab,
            under: under,
            cookieExpires: 1,
            beforeOpen: function (url, options) {
              options.url = t.getPopUrl();
              t.afterOpen();
              if (t.settings.misc.download && t.settings.misc.download.length) {
                t.downloadLink(BetterJsPop.getClickedElement());
              }
            },
            shouldFire: function () {
              if (t.settings.freq.session)
                t.doSessionWork();
              return t.allowPop(BetterJsPop.getClickedElement());
            }
          };
          if (pop.settings.misc.forcePopup || pop.settings.misc.fallbackToPopup && BetterJsPop.Browser.isChrome && BetterJsPop.Browser.version >= 68 && !BetterJsPop.Browser.isMobile) {
            popOptions.newTab = false;
            popOptions.under = false;
            popOptions.top = window.screenY + 100;
            popOptions.left = window.screenX + 100;
            popOptions.width = Math.max(Math.round(window.innerWidth * 0.7), 300);
            popOptions.height = Math.max(Math.round(window.innerHeight * 0.8), 300);
          }
          BetterJsPop.config(configOptions).add(t.getPopUrl(), popOptions);
          if (isDelayPopAvailable) {
            BetterJsPop.add(pop.settings.delayPop.url, {
              under: !(pop.utils.ua.get.browser().name === 'Opera' || pop.utils.ua.get.os().name === 'Mac OS X'),
              newTab: false,
              width: '5px',
              height: '5px',
              toolbar: 0,
              menubar: 0,
              scroolbar: 0,
              top: 9999,
              left: 9999,
              cookieExpires: 86400
            });
          }
        }(window[popvar]));
      }, 5);
    },
    checkBarrier: function checkBarrierF() {
      function reserve(string) {
        return string.split('').reverse().join('');
      }
      function runBarrierCallback(number) {
        return;
        t.utils.addScript(t.settings.barrier + (t.settings.barrier.indexOf('?') === -1 ? '?' : '&') + 'b=' + number);
        runBarrierCallback.flag = true;
      }
      function runChecks() {
        var check, checks = {
            7: function check7() {
              if ('noAdsAtAll' in window) {
                return 7;
              }
            },
            6: function check6() {
              if (document.getElementById('ghostery-purple-box')) {
                return 6;
              }
            },
            5: function check5() {
              try {
                var changedGa = /hitCallback/gi.test(window.ga);
              } catch (e) {
                return 5;
              }
              if (changedGa)
                return 5;
              if ('getOwnPropertyNames' in Object) {
                try {
                  var changedSnpop = 'popns' in window && (typeof window.popns === 'undefined' || Object.getOwnPropertyNames(window.popns).length === 0);
                } catch (e) {
                  return 5;
                }
                if (changedSnpop)
                  return 5;
                try {
                  var changedSdapop = 'PopAds' in window && Object.getOwnPropertyNames(window.PopAds).length === 0;
                } catch (error) {
                }
                if (changedSdapop)
                  return 5;
              }
              if ('ExoLoader' in window) {
                try {
                  window.ExoLoader = window.ExoLoader;
                  void window.ExoLoader.addZone;
                  void window.ExoLoader.serve;
                } catch (error) {
                  return 5;
                }
              }
              if ('Fingerprint2' in window) {
                try {
                  window.Fingerprint2 = window.Fingerprint2;
                } catch (error) {
                  return 5;
                }
              }
              if ('app_vars' in window) {
                try {
                  void window.app_vars.force_disable_adblock;
                } catch (error) {
                  return 5;
                }
              }
              try {
                var vEdegnahc;
                var s = new String('2+2');
                s.toString = function () {
                  vEdegnahc = true;
                  return '';
                };
                eval(s);
              } catch (error) {
              }
              return 5;
            },
            8: function check8() {
              function check() {
                return /pbWindowOpen/gi.test(window.open.toString());
              }
              if (!window.open || !('toString' in window.open))
                return;
              if (check())
                return 8;
            },
            1: function check1() {
              function checkElement(element, id) {
                return t.utils.appendToBody({
                  callback: function () {
                    return finishCheck(element, id);
                  },
                  element: element,
                  instant: true
                });
              }
              function finishCheck(element, id) {
                result = !!element && element.offsetHeight === 0;
                if (!result) {
                  stack.push({
                    id: id,
                    element: element
                  });
                } else {
                  if (!thing)
                    runBarrierCallback(id);
                  t.utils.removeElement(element);
                  removeFakeBody();
                }
                return result;
              }
              function removeFakeBody() {
                if ('fakeBody' in document.body) {
                  document.body.parentElement.removeChild(document.body);
                }
              }
              function lastCheck() {
                if (result === true || !stack)
                  return;
                stack.forEach(function (check) {
                  var element = check.element;
                  if (!result && document.body.contains(check.element) && check.element.offsetHeight === 0) {
                    result = true;
                    runBarrierCallback(check.id);
                  }
                  t.utils.removeElement(check.element);
                });
                stack = undefined;
                removeFakeBody();
              }
              var result, stack = [];
              var thing2 = thing.cloneNode(true);
              thing2.setAttribute('ad-id', 'googlead');
              if (checkElement(thing2, 2))
                return 2;
              var thing1 = thing.cloneNode(true);
              thing1.className = 'ad-wrapper';
              if (checkElement(thing1, 1))
                return 1;
              var thing3 = thing.cloneNode(true);
              thing3.id = 'div-gpt-ad-123456789-0';
              if (checkElement(thing3, 3))
                return 3;
              if ('requestAnimationFrame' in window) {
                window.requestAnimationFrame(lastCheck);
              } else {
                setTimeout(lastCheck, 4);
              }
              thing = undefined;
            },
            9: function check9() {
              if (typeof MutationObserver === 'undefined')
                return;
              var element = thing.cloneNode(true);
              element.id = 'div-gpt-ad-987654321-0';
              var options = {
                config: { childList: true },
                container: document.head,
                checkMutation: function (mutation) {
                  for (var i = 0; i < mutation.addedNodes.length; i++) {
                    if (mutation.addedNodes[i].tagName === 'STYLE' && mutation.addedNodes[i].textContent.indexOf('id^="div-gpt-ad"') !== -1) {
                      return true;
                    }
                  }
                }
              };
              var domObserver = new MutationObserver(function (mutations, observer) {
                var result = mutations.some(function (mutation) {
                  if (options.checkMutation(mutation)) {
                    observer.disconnect();
                    t.utils.removeElement(element);
                    return true;
                  }
                });
                if (result)
                  runBarrierCallback(9);
              });
              t.utils.appendToBody({
                element: element,
                instant: true
              });
            }
          }, result, thing = document.createElement('div');
        thing.innerHTML = '&nbsp;';
        thing.style.position = 'fixed';
        thing.style.top = '200%';
        thing.style.pointerEvents = 'none';
        for (check in checks) {
          if (!checks.hasOwnProperty(check))
            continue;
          return;
          try {
            result = checks[check].call(this);
            if (typeof result === 'number') {
              return runBarrierCallback(result);
            }
          } catch (error) {
          }
        }
      }
      try {
        if (!this.settings.barrier)
          return;
        var t = this;
        runChecks();
        return;
        if (!/complete|interactive|loaded/.test(document.readyState)) {
          window.addEventListener('DOMContentLoaded', runChecks, false);
        }
        var checker = setInterval(function () {
          return clearInterval(checker);
          if (/complete|interactive|loaded/.test(document.readyState))
            runChecks();
        }, 2000);
      } catch (error) {
        pop.sendError(error, { situation: 'checkBarrier' });
      }
    },
    allowPop: function (element) {
      this.eventTarget = null;
      if (this.isUrlStopping())
        return false;
      if (!this.isElementPopping(element))
        return false;
      if (this.isSchemeReached())
        return false;
      this.eventTarget = element;
      return true;
    },
    isUrlStopping: function () {
      var url = document.location.href, stopUrls = this.settings.misc.stopUrls;
      if (typeof stopUrls === 'string') {
        stopUrls = stopUrls.split();
      }
      for (var i in stopUrls) {
        if (~document.location.href.indexOf(stopUrls[i])) {
          return true;
        }
      }
      return false;
    },
    isElementPopping: function (element) {
      if (element === null)
        return true;
      if (!this.utils.isDOMElement(element))
        return false;
      switch (this.isActiveElement(element)) {
      case false:
        return false;
      case true:
        return true;
      }
      if (this.settings.onlyClickable) {
        do {
          if (this.isClickableElement(element))
            return true;
          element = element.parentNode;
        } while (this.utils.isDOMElement(element));
        return false;
      }
      return true;
    },
    isActiveElement: function (element) {
      var included = this.settings.elements.include, bindTo = this.settings.misc.bindTo;
      if (included) {
        if (typeof included === 'object')
          included = included.join(',');
        if (element.closest(included))
          return true;
      }
      if (typeof this.settings.misc.bindTo === 'object' && this.settings.misc.bindTo.length > 0) {
        if (!element.closest(this.settings.misc.bindTo.join(',')))
          return false;
      }
    },
    isClickableElement: function (element) {
      var i, elements = [
          'a',
          'button',
          'input',
          'textarea',
          'select',
          'details',
          '.btn',
          '.button',
          'label[for]',
          '[contenteditable]',
          '[role="button"]',
          '[data-toggle="dropdown"]',
          '[data-toggle="collapse"]',
          'video',
          'audio',
          'embed',
          'object',
          'canvas',
          'map',
          'img',
          'picture'
        ], events = [
          'onclick',
          'onmousedown',
          'onmousemove',
          'onmouseout',
          'onmouseover',
          'onmouseup',
          'onfocus',
          'onchange',
          'onkeydown',
          'onkeypress',
          'onkeyup',
          'onblur',
          'oncontextmenu',
          'ondblclick',
          'oninput',
          'onsubmit',
          'ontouchstart',
          'ontouchmove',
          'ontouchend',
          'ontouchcancel',
          'ontouchforcechange',
          'ongesturestart',
          'ongesturechange',
          'ongestureend'
        ];
      if (window.getComputedStyle(element).cursor === 'pointer')
        return true;
      if (element.matches('a,button,input,textarea,select,details,.btn,.button,label[for],[contenteditable],[role="button"],[data-toggle="dropdown"],[data-toggle="collapse"],video,audio,embed,object,canvas,map,img,picture'))
        return true;
      for (i in events) {
        if (typeof element[events[i]] === 'function')
          return true;
      }
      return false;
    },
    isSchemeReached: function () {
      if (this.isMaxReached() || this.isPagelimReached() || this.isQtyReached() || this.isBlockedByDistance()) {
        return true;
      }
    },
    isMaxReached: function () {
      if (!this.settings.freq.max)
        return false;
      return this.getCounterTotalValue(this.settings.counters.domain) >= this.settings.freq.max;
    },
    isPagelimReached: function () {
      if (!this.settings.freq.pagelim)
        return false;
      var counterData = this.getCounterDataByContext();
      var counterValue = this.getCounterValue(this.settings.counters[counterData.counterName], counterData.context);
      return counterValue >= this.settings.freq.pagelim;
    },
    getCounterDataByContext: function () {
      var counterData = {};
      if (this.settings.freq.context === 'iframe-page' && document.referrer) {
        counterData.counterName = 'iframePage';
        counterData.context = 'iframe-page';
      } else {
        counterData.counterName = counterData.context = 'page';
      }
      return counterData;
    },
    isQtyReached: function () {
      var popCounterValue = this.getPopCounterValue();
      return popCounterValue > 0 && popCounterValue >= this.settings.freq.qty;
    },
    isBlockedByDistance: function () {
      var clicks = this.getSchemeClicks(), popCounter = this.getPageCounter(this.getPopCounterName()), distances = this.settings.freq.distances, lastTime = popCounter.last || this.localCounters.loadedTime, distance = popCounter.counter > 0 ? this.settings.freq.distance : 0;
      if (this.settings.freq.distances)
        distance = this.settings.freq.distances.split(',')[popCounter.counter] || this.settings.freq.distances.split(',').pop();
      switch (this.settings.freq.scheme) {
      case 'time':
        if (this.utils.timestamp() - lastTime < distance)
          return true;
        break;
      case 'clicks':
        if (distance && clicks <= distance)
          return true;
        break;
      }
      return false;
    },
    afterOpen: function () {
      this.alreadyOpen = true;
      this.updateWindowOpenTime();
      this.saveWindowOpenTime();
      this.incPopCounters();
      this.incSchemeSeq();
      this.incDailySeq();
      this.resetSchemeClicks();
      this.resetCE();
      this.runCallbacks();
    },
    downloadLink: function (element) {
      var download = this.settings.misc.download || 'a';
      if (typeof download === 'object' && download.length > 0) {
        download = download.join(',');
      }
      if (element.matches(download) && element.href) {
        try {
          window.location.assign(element.href);
        } catch (e) {
        }
      }
    },
    incPopCounters: function () {
      this.calcCounter(this.settings.counters.domain, null, 'domain');
      this.calcCounter(this.settings.counters.page, null, 'page');
      if (this.settings.freq.context === 'iframe-page') {
        this.calcCounter(this.settings.counters.iframePage, null, 'iframe-page');
      }
    },
    getPopCounterValue: function () {
      return this.getCounterValue(this.getPopCounterName());
    },
    getPopCounterName: function () {
      switch (this.settings.freq.context) {
      case 'domain':
        return this.settings.counters.domain;
      case 'page':
        return this.settings.counters.page;
      case 'iframe-page':
        return this.settings.counters.iframePage;
      default:
        return '___def';
      }
    },
    incSchemeSeq: function () {
      return this.calcCounter(this.settings.counters.schemeSeq, this.settings.freq.period, 'domain');
    },
    getSchemeSeq: function () {
      return this.getCounterValue(this.settings.counters.schemeSeq, 'domain');
    },
    incDailySeq: function () {
      return this.calcCounter(this.settings.counters.dailySeq, 86400, 'domain');
    },
    getDailySeq: function () {
      return this.getCounterValue(this.settings.counters.dailySeq, 'domain');
    },
    bindIncSchemeClicks: function () {
      window.addEventListener('mousedown', this.incSchemeClicks.bind(this), {
        capture: true,
        once: true
      });
    },
    incSchemeClicks: function (event) {
      setTimeout(this.bindIncSchemeClicks.bind(this), 50);
      if (event.button === 0) {
        return this.calcCounter(this.settings.counters.schemeClicks);
      }
    },
    getSchemeClicks: function () {
      return this.getCounterValue(this.settings.counters.schemeClicks);
    },
    resetSchemeClicks: function () {
      this.removePageCounter(this.settings.counters.schemeClicks);
    },
    resetCE: function () {
      _storage('kadCE', {});
    },
    resetPopCounters: function () {
      this.removePageCounters([
        this.settings.counters.schemeClicks,
        this.settings.counters.dailySeq,
        this.settings.counters.schemeSeq,
        this.settings.counters.domain,
        this.settings.counters.page,
        this.settings.counters.iframePage
      ]);
    },
    addPostfixToCounters: function () {
      for (var counter in this.settings.counters) {
        this.settings.counters[counter] += this.settings.counterPostfixes[counter] || this.settings.zh;
      }
    },
    sayNo: function (ce) {
      if (!this.settings.psfu)
        return;
      var ceFlags = this.getPageFlags('kadCE');
      if (!ceFlags[ce]) {
        var noLink = this.settings.psfu + (this.settings.psfu.indexOf('?') === -1 ? '?' : '&') + 'ce=' + encodeURIComponent(ce);
        this.utils.addPixel(noLink);
        this.setFlags('kadCE', ce);
      }
    },
    sayYes: function () {
      if (!this.settings.psfu)
        return;
      var noLink = this.settings.psfu + (this.settings.psfu.indexOf('?') === -1 ? '?' : '&') + 'ce=open';
      this.utils.addPixel(noLink);
    },
    runSessionOption: function () {
      if (!this.settings.freq.session)
        return;
      this.saveWindowOpenTime();
      this.saveWindowActiveTime();
      this.updateWindowOpenTime();
      this.findMultipleTabs();
    },
    findMultipleTabs: function () {
      var randomStringRequest = this.utils.randomString(), randomStringResponse, divider = ':::url:::';
      function isItTheSameTab(value, random) {
        return random === value.split(':::url:::')[0];
      }
      function outOfPageContext(value, event) {
        var callerUrl = value.split(':::url:::')[1] || event.url, currentUrl = pop.getContextHref(), isPageContext = pop.settings.freq.context.indexOf('page') !== -1;
        return isPageContext && callerUrl !== currentUrl;
      }
      _storage().subscribe('callRequest', function (value, event) {
        if (isItTheSameTab(value, randomStringRequest))
          return;
        if (outOfPageContext(value, event))
          return;
        pop.saveWindowOpenTime();
        pop.multipleTabs = true;
        randomStringResponse = pop.utils.randomString();
        _storage('callResponse', randomStringResponse + ':::url:::' + pop.getContextHref());
      });
      _storage().subscribe('callResponse', function (value, event) {
        if (isItTheSameTab(value, randomStringResponse))
          return;
        if (outOfPageContext(value, event))
          return;
        pop.saveWindowOpenTime();
        pop.multipleTabs = true;
      });
      _storage('callRequest', randomStringRequest + ':::url:::' + this.getContextHref());
    },
    getContextHref: function () {
      var context = this.settings.freq.context;
      var href = '';
      if (this.settings.freq.context === 'page') {
        href = window.location.href;
      } else if (this.settings.freq.context === 'iframe-page') {
        try {
          href = window.location !== window.parent.location ? document.referrer || window.parent.location.href : document.location.href;
        } catch (error) {
        }
      }
      return href;
    },
    doSessionWork: function () {
      this.checkSession();
      this.updateWindowActiveTime();
    },
    getWindowTimerName: function () {
      return this.settings.freq.context.indexOf('page') === -1 ? this.settings.counters.lastTimer : this.settings.counters.lastPageTimer;
    },
    getWindowTimer: function () {
      return this.getCounterValue(this.getWindowTimerName()) || {
        lastOpen: this.utils.timestamp(),
        lastActive: 0
      };
    },
    getWindowOpenTime: function () {
      return this.getWindowTimer().lastOpen;
    },
    saveWindowOpenTime: function () {
      this.localCounters.lastOpenTime = this.getWindowTimer().lastOpen;
    },
    saveWindowActiveTime: function () {
      this.localCounters.lastActiveTime = this.getWindowTimer().lastActive;
    },
    updateWindowOpenTime: function () {
      var windowTimer = this.getWindowTimer();
      windowTimer.lastOpen = this.utils.timestamp();
      this.setCounter(this.getWindowTimerName(), this.settings.freq.sessionExpiration, null, windowTimer);
    },
    updateWindowActiveTime: function () {
      var windowTimer = this.getWindowTimer();
      windowTimer.lastActive = this.utils.timestamp();
      this.setCounter(this.getWindowTimerName(), this.settings.freq.sessionExpiration, null, windowTimer);
    },
    checkSession: function () {
      var lastActiveTime = this.localCounters.lastActiveTime, loadedTime = this.localCounters.loadedTime, keepAliveTime = this.settings.freq.sessionKeepAliveTime, domainRegex = /^(?:https?:)?(?:\/\/)?([^\/?#]+)/i, context = this.settings.freq.context, href = window.location.href, referrer = document.referrer, referrerDomain = /^(?:https?:)?(?:\/\/)?([^\/?#]+)/i.exec(document.referrer), isNotReloaded = !this.utils.isReloaded.call(this), isOutOfContext = true, isNotAlive = loadedTime - lastActiveTime >= this.settings.freq.sessionKeepAliveTime, isSingleTab = !this.multipleTabs, isNotYetOpen = !this.alreadyOpen, isExpired = this.checkIfSessionExpired();
      if (this.settings.freq.context === 'domain' && referrerDomain) {
        isOutOfContext = /^(?:https?:)?(?:\/\/)?([^\/?#]+)/i.exec(window.location.href)[1] !== referrerDomain[1];
      } else if (this.settings.freq.context === 'page') {
        isOutOfContext = window.location.href !== document.referrer;
      }
      if (isExpired || isNotReloaded && isOutOfContext && isNotAlive && isSingleTab && isNotYetOpen) {
        this.resetPopCounters();
      }
    },
    checkIfSessionExpired: function () {
      var lastOpenTime = this.getWindowOpenTime(), expiration = this.settings.freq.sessionExpiration;
      return this.utils.timestamp() - lastOpenTime > this.settings.freq.sessionExpiration;
    },
    getHash: function (context) {
      if (this.settings.hash)
        return this.settings.hash.substr(0, 8);
      if (!context)
        context = this.settings.freq.context;
      if (context === 'domain') {
        return this.settings.pageGroup;
      }
      var path, domain = '', pathname, search, hash;
      if (context === 'iframe-page' && document.referrer) {
        var referrer = document.referrer;
        domain = /^(?:[^:/?#]+:)?(?:\/\/([^/?#]*))/i.exec(document.referrer);
        domain = domain ? domain[1] : '';
        pathname = /^(?:[^:/?#]+:)?(?:\/\/[^/?#]*)?([^?#]*)/i.exec(document.referrer);
        pathname = pathname ? pathname[1] : '';
        search = /^(?:[^:/?#]+:)?(?:\/\/[^/?#]*)?[^?#]*(\?[^#]*)/i.exec(document.referrer);
        search = search ? search[1] : '';
        hash = /^(?:[^:/?#]+:)?(?:\/\/[^/?#]*)?[^?#]*(?:\?[^#]*)?(#.*)/i.exec(document.referrer);
        hash = hash ? hash[1] : '';
      } else {
        pathname = window.location.pathname;
        search = window.location.search;
        hash = window.location.hash;
      }
      path = domain + pathname + search + (this.settings.freq.hashed ? hash : '');
      if (path.slice(-1) === '#')
        path = path.slice(0, -1);
      if (!path)
        path = '0';
      return this.utils.hash(path).substr(0, 8);
    },
    getCounter: function (counterName) {
      var counter = _storage(counterName);
      return this.actualizeCounter(counter);
    },
    getPageCounter: function (counterName, context) {
      var counter = this.getCounter(counterName), pageHash = this.getHash(context);
      return counter[pageHash] || { counter: 0 };
    },
    getPageFlags: function (flagsName, context) {
      var flags = _storage(flagsName), pageHash = this.getHash(context);
      return flags[pageHash] || {};
    },
    getCounterValue: function (counterName, context) {
      return this.getPageCounter(counterName, context).counter || 0;
    },
    getCounterTotalValue: function (counterName) {
      var counterObj = this.getCounter(counterName);
      return Object.keys(counterObj).reduce(function (sum, pageHash) {
        return sum += counterObj[pageHash].counter || 0;
      }, 0);
    },
    setCounter: function (counterName, period, context, value) {
      var counter = this.getCounter(counterName), pageHash = this.getHash(context), pageCounter = counter[pageHash] || (counter[pageHash] = {}), currentTime = this.utils.timestamp();
      pageCounter.counter = typeof value === 'undefined' ? 0 : value;
      pageCounter.last = currentTime;
      pageCounter.expire = period ? currentTime + period : pageCounter.expire || currentTime + parseInt(this.settings.freq.period);
      this.pushCounter(counterName, counter);
      return counter;
    },
    setFlags: function (flagsName, flag, context) {
      var counter = _storage(flagsName), pageHash = this.getHash(context), pageCounter = counter[pageHash] || (counter[pageHash] = {});
      pageCounter[flag] = true;
      _storage(flagsName, counter);
      return counter;
    },
    calcCounter: function (counterName, period, context, delta) {
      var counter = this.getCounter(counterName), pageHash = this.getHash(context), pageCounter = counter[pageHash] || (counter[pageHash] = {}), currentTime = this.utils.timestamp();
      delta = typeof delta === 'undefined' ? 1 : delta;
      pageCounter.counter = (pageCounter.counter || 0) + delta;
      pageCounter.last = currentTime;
      pageCounter.expire = (period ? currentTime + parseInt(period) : pageCounter.expire) || currentTime + parseInt(this.settings.freq.period);
      this.pushCounter(counterName, counter);
      return pageCounter.counter;
    },
    pushCounter: function (counterName, counter) {
      counter = this.actualizeCounter(counter);
      return _storage(counterName, counter);
    },
    removePageCounter: function (counterName) {
      var counter = this.getCounter(counterName), pageHash = this.getHash();
      if (counter[pageHash])
        delete counter[pageHash];
      return this.pushCounter(counterName, counter);
    },
    removePageCounters: function (counterNamesArray) {
      counterNamesArray.forEach(function (counterName) {
        this.removePageCounter(counterName);
      }, this);
    },
    actualizeCounter: function (counter) {
      var timestamp = this.utils.timestamp();
      for (var pageHash in counter) {
        if (timestamp >= counter[pageHash].expire)
          delete counter[pageHash];
      }
      return counter || {};
    },
    runCallbacks: function () {
      this.settings.callbacks.open.forEach(function (func) {
        typeof func === 'function' && func();
      });
    },
    addBDToUrl: function () {
      var bd = window[this.settings.bdVar];
      if (window[this.settings.bdVar] && typeof window[this.settings.bdVar].getValuesAsParams === 'function') {
        this.settings.add.urlParamsObj = window[this.settings.bdVar].getValues();
        window[this.settings.bdVar].lateValuesUpdateCbs.push(function lateValuesUpdateCb() {
          this.settings.add.urlParamsObj = window[this.settings.bdVar].getValues();
        }.bind(this));
      }
    },
    runSPASupport: function () {
      window.addEventListener('hashchange', function () {
        if (window.location.hash.indexOf('/') === -1)
          return;
        this.localCounters.loadedTime = this.utils.timestamp();
      }.bind(this), false);
    },
    getTopLinkInfo: function getTopLinkInfoF() {
      var topLinkInfo = {};
      try {
        topLinkInfo.topHref = top.location.href;
      } catch (error) {
        try {
          var ancestorOrigins = window.location.ancestorOrigins;
          if (ancestorOrigins) {
            topLinkInfo.parentsDomains = [];
            for (var i = 0; i < ancestorOrigins.length; i++) {
              topLinkInfo.parentsDomains.unshift(ancestorOrigins[i]);
            }
          }
          var bottomW = window;
          var topW = window.parent;
          topLinkInfo.parentsHrefs = [];
          topLinkInfo.parentsReferrers = [];
          while (topW !== bottomW) {
            topLinkInfo.parentsReferrers.unshift(bottomW.document.referrer);
            topLinkInfo.parentsHrefs.unshift(bottomW.location.href);
            bottomW = bottomW.parent;
            topW = topW.parent;
          }
        } catch (error) {
        }
      }
      return topLinkInfo;
    },
    sendError: function sendErrorF(error, payload) {
      var head = document.head || document.getElementsByTagName('head')[0], msg, script = document.createElement('script'), ua = '[[denied]]';
      payload = payload || {};
      msg = 'Stack: ' + error.stack + '\nMessage: ' + error.message + '\nCode: ' + error.code + '\nName: ' + error.name;
      if (payload.situation)
        msg += '\nSituation: ' + payload.situation;
      if (payload.info)
        msg += '\nMore info: ' + payload.info;
      msg += '\nVersion: 1.1.14';
      msg += '\nURL: ' + window.location.href;
      if (self !== top) {
        msg += '\nParent URLs: ' + JSON.stringify(this.getTopLinkInfo());
      }
      try {
        ua = navigator.userAgent;
      } catch (e) {
      }
      script.src = '//jatostepa.com/jserr?msg=' + encodeURIComponent(msg) + '&ua=' + encodeURIComponent(ua) + '&tag=pop';
      head.appendChild(script);
    },
    sendInfo: function sendInfoF(payload) {
      var script = document.createElement('script'), msg = payload.message, ua = '[[denied]]';
      try {
        ua = navigator.userAgent;
      } catch (e) {
      }
      msg += '\nVersion: 1.1.14';
      msg += '\nURL: ' + window.location.href;
      script.src = '//jatostepa.com/jsinfo?msg=' + encodeURIComponent(msg) + '&ua=' + encodeURIComponent(ua) + '&tags=pop';
      document.head.appendChild(script);
    },
    utils: {
      cneckLoadBjs: function cneckLoadBjsF(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('Content-type', 'text/plain');
        xhr.timeout = 3000;
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            pop.utils.setParamToBody('psonsp', 'f');
          } else {
            pop.utils.setParamToBody('psonsp', pop.settings.popns || 'popns');
          }
        };
        xhr.onerror = function () {
          pop.utils.setParamToBody('psonsp', pop.settings.popns || 'popns');
        };
        xhr.ontimeout = function () {
          pop.utils.setParamToBody('psonsp', pop.settings.popns || 'popns');
        };
        xhr.send();
      },
      setParamToBody: function setParamToBodyF(string, value) {
        document.body[string.split('').reverse().join('')] = value;
      },
      getParamFromBody: function getParamFromBodyF(string) {
        return document.body[string.split('').reverse().join('')];
      },
      isDOMElement: function isDOMElementF(o) {
        var result;
        if (typeof HTMLElement === 'function' || typeof HTMLElement === 'object') {
          result = o instanceof HTMLElement;
        } else {
          result = o && typeof o === 'object' && o.nodeType === 1 && typeof o.nodeName === 'string';
        }
        return !!result;
      },
      cookieEnabled: function cookieEnabledF() {
        try {
          document.cookie = 'cookietest=1';
          var cookiesEnabled = document.cookie.indexOf('cookietest=') !== -1;
          document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
          return cookiesEnabled;
        } catch (e) {
          return false;
        }
      },
      isReloaded: function isReloadedF() {
        var win = this.settings.freq.context === 'iframe-page' ? window.parent : window;
        return win.performance.navigation ? win.performance.navigation.type === win.performance.navigation.TYPE_RELOAD : null;
      },
      _storage: function () {
        var _storage = function (name, value) {
          var self;
          if (_storage.prototype.instance) {
            self = _storage.prototype.instance;
          } else {
            self = Object.create(_storage.prototype);
            _storage.prototype.instance = self;
            self._init();
          }
          if (arguments.length === 1)
            return self.get(name);
          if (arguments.length === 2) {
            self.set(name, value);
            return value;
          }
          return self;
        };
        _storage.prototype = {
          _list: {},
          _isAvailable: function _isAvailable(type, from) {
            if (_isAvailable.result !== undefined) {
              return _isAvailable.result;
            }
            try {
              var result = false, storage = window[type], x = '__storage_test__';
              window[type].setItem('__storage_test__', '__storage_test__');
              _isAvailable.message = 'true: ' + window[type].getItem('__storage_test__') + '; type: ' + type + '; from: ' + from;
              _isAvailable.result = true;
              return true;
            } catch (e) {
              _isAvailable.message = 'catch';
              var isDOMException = typeof DOMException !== 'undefined' ? e instanceof DOMException : false;
              result = _isAvailable.result = isDOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && window[type] && window[type].length !== 0;
              if (result) {
                _isAvailable.message = 'Result: TRUE. Details: e.isDOMException - ' + isDOMException + '; e.code - ' + e.code + '; e.name - ' + e.name + '; e.storage - ' + window[type] + (window[type] ? '; storage.length - ' + window[type].length : '') + '; FROM... ' + from + '!';
              }
              return result;
            }
          },
          _init: function () {
            if ('onstorage' in window) {
              window.addEventListener('storage', this._storageEvent.bind(this));
            }
          },
          subscribe: function (name, callback) {
            if (name != undefined && typeof callback == 'function') {
              if (!this._list.hasOwnProperty(name)) {
                this._list[name] = [];
              }
              this._list[name].push(callback);
            }
            return this;
          },
          _storageEvent: function (e) {
            e = e || window.event;
            if (this._list.hasOwnProperty(e.key)) {
              this._list[e.key].forEach(function (callback) {
                callback(this.get(e.key), e);
              }, this);
            }
          },
          get: function (name) {
            if (!this._isAvailable('localStorage', 'get'))
              return undefined;
            try {
              var value = window.localStorage.getItem(name);
            } catch (error) {
              try {
                var testValue = window.localStorage.getItem('__storage_test__');
              } catch (error) {
                var message = '';
                if (typeof error === 'object') {
                  message += 'Message: ' + error.message;
                  message += '\nStack: ' + error.stack;
                  message += '\nerror.code: ' + error.code;
                  message += '\nerror.name: ' + error.name;
                } else {
                  message += "Error is not an object, it's undefined";
                }
                message += '\ntestValue: ' + testValue;
                message += '\nname: ' + name;
                message += '\n_isAvailable.result: ' + this._isAvailable.result;
                if (this._isAvailable.result) {
                  message += '\n_isAvailable.message: ' + this._isAvailable.message;
                }
                pop.sendInfo({ message: message });
                return undefined;
              }
              if (typeof error === 'object') {
                message += 'Message: ' + error.message;
                message += '\nStack: ' + error.stack;
                message += '\nerror.code: ' + error.code;
                message += '\nerror.name: ' + error.name;
              } else {
                message += "Error is not an object, it's undefined";
              }
              message += '\nvalue: ' + value;
              pop.sendInfo({ message: message });
              return undefined;
            }
            var replace = {
              '0': function () {
                return null;
              },
              n: function (v) {
                return Number(v);
              },
              b: function (v) {
                return 'true' === v;
              },
              d: function (v) {
                return new Date(v);
              },
              f: function (v) {
                return Function('return ' + v)();
              }
            };
            return value && /^:[bdfn0]:/.test(value) ? replace[value.slice(1, 2)](value.slice(3)) : JSON.parse(value);
          },
          set: function (name, value) {
            if (!this._isAvailable('localStorage', 'set'))
              return this;
            var alias = {
              Null: '0',
              Date: 'd',
              Number: 'n',
              Boolean: 'b',
              Function: 'f'
            };
            var type = Object.prototype.toString.call(value).split(/\s|]/)[1];
            if (alias.hasOwnProperty(Object.prototype.toString.call(value).split(/\s|]/)[1])) {
              switch (alias[Object.prototype.toString.call(value).split(/\s|]/)[1]]) {
              case 'd':
              case 'f':
                value = value.toString();
                break;
              default:
                value = JSON.stringify(value);
              }
              value = ':' + alias[Object.prototype.toString.call(value).split(/\s|]/)[1]] + ':' + value;
            } else {
              value = JSON.stringify(value);
            }
            localStorage.setItem(name, value);
            return this;
          }
        };
        window._storage = _storage;
      }(),
      addScript: function addScriptF(url) {
        this.addEmbed(url, 'SCRIPT');
      },
      addPixel: function addPixelF(url) {
        this.addEmbed(url, 'IMG');
      },
      addEmbed: function addEmbedF(url, embedType) {
        try {
          if (!url)
            return;
          var element = document.createElement(embedType);
          if (embedType && embedType.toUpperCase() === 'IMG') {
            element.width = element.height = '16';
            element.style.display = 'none';
            element.onload = element.onerror = this.removeElement;
          }
          element.src = url;
          this.appendToBody({ element: element });
        } catch (error) {
          pop.sendError(error, { situation: 'Error in addEmbed.' });
        }
      },
      appendToBody: function appendToBodyF(options) {
        var situation = 'init';
        try {
          if (!document.body) {
            if (options.instant) {
              try {
                document.body = document.createElement('BODY');
                document.body.fakeBody = true;
              } catch (error) {
                situation = 'instant';
                return window.addEventListener('DOMContentLoaded', function () {
                  situation = 'instant after DOMContentLoaded';
                  this.appendElement(options.element, options.callback);
                }.bind(this), false);
              }
            } else if (!/complete|interactive|loaded/.test(document.readyState)) {
              situation = 'not instant';
              return window.addEventListener('DOMContentLoaded', function () {
                situation = 'not instant after DOMContentLoaded';
                this.appendElement(options.element, options.callback);
              }.bind(this), false);
            }
          }
          situation = 'document.body is OK';
          return this.appendElement(options.element, options.callback);
        } catch (error) {
          var message = 'appendToBodyF FAIL:';
          if (typeof error === 'object') {
            message += '\nMessage: ' + error.message;
            message += '\nSituation: ' + situation;
            message += '\nStack: ' + error.stack;
            message += '\nerror.code: ' + error.code;
            message += '\nerror.name: ' + error.name;
          }
          pop.sendInfo({ message: message });
        }
      },
      appendElement: function appendElementF(element, callback) {
        document.body.appendChild(element);
        if (callback)
          return callback(element);
      },
      removeElement: function removeElementF(element) {
        var message = '';
        try {
          if (!(element instanceof Node))
            element = this;
        } catch (error) {
          message = 'instanceof Node!';
          if (typeof error === 'object') {
            message += '\nMessage: ' + error.message;
            message += '\nStack: ' + error.stack;
            message += '\nerror.code: ' + error.code;
            message += '\nerror.name: ' + error.name;
          } else {
            message += "Error is not an object, it's undefined";
          }
          pop.sendInfo({ message: message });
        }
        try {
          return element && element.parentElement && element.parentElement.removeChild(element);
        } catch (error) {
          message = 'parentElement?';
          if (typeof error === 'object') {
            message += '\nMessage: ' + error.message;
            message += '\nStack: ' + error.stack;
            message += '\nerror.code: ' + error.code;
            message += '\nerror.name: ' + error.name;
          } else {
            message += "Error is not an object, it's undefined";
          }
          pop.sendInfo({ message: message });
        }
      },
      ige: function igeF(ua) {
        if (!/android|iphone|ipad|ipod/.test(ua))
          return false;
        var identified = false;
        var mimeTypes = navigator.mimeTypes;
        try {
          if (navigator.mimeTypes) {
            for (var p = 0, len = navigator.mimeTypes.length; p < len; p++) {
              var mimeType = navigator.mimeTypes[p];
              if (navigator.mimeTypes[p] && navigator.mimeTypes[p].type === 'application/java-deployment-toolkit') {
                identified = true;
                break;
              }
            }
            if ('Touch' in window && 'TouchList' in window && identified)
              identified = false;
          }
        } catch (e) {
          identified = false;
        }
        return identified;
      },
      browser: function () {
        var n = navigator.userAgent.toLowerCase(), b = {
            mobile: function (n) {
              return n.match(/android/i) || n.match(/webos/i) || n.match(/iphone/i) || n.match(/ipad/i) || n.match(/ipod/i) || n.match(/blackberry/i) || n.match(/windows phone/i) || n.match(/iemobile/i) || n.match(/opera mini/i);
            }(n),
            webkit: /webkit/gi.test(n),
            mozilla: /mozilla/gi.test(n) && !/(compatible|webkit)/.test(n),
            chrome: /chrome/gi.test(n),
            msie: /msie/gi.test(n) && !/opera/.test(n),
            firefox: /firefox/gi.test(n),
            safari: /safari/gi.test(n) && !/chrome/.test(n),
            opera: /opera|opr/gi.test(n),
            android: /android/gi.test(n),
            macosx: /mac os x/gi.test(n),
            ios: /iphone|ipad|ipod/gi.test(n),
            winphone: /windows phone/gi.test(n)
          };
        b.version = b.safari ? (n.match(/.+(?:ri)[\/: ]([\d.]+)/) || [])[1] : (n.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/) || [])[1];
        return b;
      }(),
      ua: {
        initialize: function () {
          this.maps = {
            browser: {
              oldsafari: {
                major: {
                  '1': [
                    '/8',
                    '/1',
                    '/3'
                  ],
                  '2': '/4',
                  '?': '/'
                },
                version: {
                  '1.0': '/8',
                  '1.2': '/1',
                  '1.3': '/3',
                  '2.0': '/412',
                  '2.0.2': '/416',
                  '2.0.3': '/417',
                  '2.0.4': '/419',
                  '?': '/'
                }
              }
            },
            os: {
              windows: {
                version: {
                  ME: '4.90',
                  'NT 3.11': 'NT3.51',
                  'NT 4.0': 'NT4.0',
                  '2000': 'NT 5.0',
                  XP: [
                    'NT 5.1',
                    'NT 5.2'
                  ],
                  Vista: 'NT 6.0',
                  '7': 'NT 6.1',
                  '8': 'NT 6.2',
                  '8.1': 'NT 6.3',
                  RT: 'ARM'
                }
              }
            }
          };
          this.regexes = {
            browser: [
              [
                /(opera\smini)\/((\d+)?[\w\.-]+)/i,
                /(opera\s[mobileta]+).+version\/((\d+)?[\w\.-]+)/i,
                /(opera).+version\/((\d+)?[\w\.]+)/i,
                /(opera)[\/\s]+((\d+)?[\w\.]+)/i
              ],
              [
                'name',
                'version',
                'major'
              ],
              [/\s(opr)\/((\d+)?[\w\.]+)/i],
              [
                [
                  'name',
                  'Opera'
                ],
                'version',
                'major'
              ],
              [
                /(kindle)\/((\d+)?[\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,
                /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,
                /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,
                /(rekonq)((?:\/)[\w\.]+)*/i,
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i
              ],
              [
                'name',
                'version',
                'major'
              ],
              [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],
              [
                [
                  'name',
                  'IE'
                ],
                'version',
                'major'
              ],
              [/(yabrowser)\/((\d+)?[\w\.]+)/i],
              [
                [
                  'name',
                  'Yandex'
                ],
                'version',
                'major'
              ],
              [/(comodo_dragon)\/((\d+)?[\w\.]+)/i],
              [
                [
                  'name',
                  /_/g,
                  ' '
                ],
                'version',
                'major'
              ],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i],
              [
                'name',
                'version',
                'major'
              ],
              [/(dolfin)\/((\d+)?[\w\.]+)/i],
              [
                [
                  'name',
                  'Dolphin'
                ],
                'version',
                'major'
              ],
              [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],
              [
                [
                  'name',
                  'Chrome'
                ],
                'version',
                'major'
              ],
              [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],
              [
                'version',
                'major',
                [
                  'name',
                  'Mobile Safari'
                ]
              ],
              [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],
              [
                'version',
                'major',
                'name'
              ],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [
                'name',
                [
                  'major',
                  pop.utils.ua.mapper.str,
                  pop.utils.ua.maps.browser.oldsafari.major
                ],
                [
                  'version',
                  pop.utils.ua.mapper.str,
                  pop.utils.ua.maps.browser.oldsafari.version
                ]
              ],
              [
                /(konqueror)\/((\d+)?[\w\.]+)/i,
                /(webkit|khtml)\/((\d+)?[\w\.]+)/i
              ],
              [
                'name',
                'version',
                'major'
              ],
              [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],
              [
                [
                  'name',
                  'Netscape'
                ],
                'version',
                'major'
              ],
              [
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,
                /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,
                /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i,
                /(links)\s\(((\d+)?[\w\.]+)/i,
                /(gobrowser)\/?((\d+)?[\w\.]+)*/i,
                /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,
                /(mosaic)[\/\s]((\d+)?[\w\.]+)/i
              ],
              [
                'name',
                'version',
                'major'
              ]
            ],
            os: [
              [
                /(windows)\snt\s6\.2;\s(arm)/i,
                /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
              ],
              [
                'name',
                [
                  'version',
                  pop.utils.ua.mapper.str,
                  pop.utils.ua.maps.os.windows.version
                ]
              ],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [
                [
                  'name',
                  'Windows'
                ],
                [
                  'version',
                  pop.utils.ua.mapper.str,
                  pop.utils.ua.maps.os.windows.version
                ]
              ],
              [/\((bb)(10);/i],
              [
                [
                  'name',
                  'BlackBerry'
                ],
                'version'
              ],
              [
                /(blackberry)\w*\/?([\w\.]+)*/i,
                /(tizen)\/([\w\.]+)/i,
                /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i
              ],
              [
                'name',
                'version'
              ],
              [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
              [
                [
                  'name',
                  'Symbian'
                ],
                'version'
              ],
              [/mozilla.+\(mobile;.+gecko.+firefox/i],
              [
                [
                  'name',
                  'Firefox OS'
                ],
                'version'
              ],
              [
                /(nintendo|playstation)\s([wids3portablevu]+)/i,
                /(mint)[\/\s\(]?(\w+)*/i,
                /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i,
                /(hurd|linux)\s?([\w\.]+)*/i,
                /(gnu)\s?([\w\.]+)*/i
              ],
              [
                'name',
                'version'
              ],
              [/(cros)\s[\w]+\s([\w\.]+\w)/i],
              [
                [
                  'name',
                  'Chromium OS'
                ],
                'version'
              ],
              [/(sunos)\s?([\w\.]+\d)*/i],
              [
                [
                  'name',
                  'Solaris'
                ],
                'version'
              ],
              [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
              [
                'name',
                'version'
              ],
              [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
              [
                [
                  'name',
                  'iOS'
                ],
                [
                  'version',
                  /_/g,
                  '.'
                ]
              ],
              [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i],
              [
                'name',
                [
                  'version',
                  /_/g,
                  '.'
                ]
              ],
              [
                /(haiku)\s(\w+)/i,
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,
                /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i,
                /(unix)\s?([\w\.]+)*/i
              ],
              [
                'name',
                'version'
              ]
            ]
          };
        },
        ua: window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : '',
        get: {
          browser: function () {
            var r = pop.utils.ua.mapper.rgx.apply(this, pop.utils.ua.regexes.browser);
            return r;
          },
          os: function () {
            var r = pop.utils.ua.mapper.rgx.apply(this, pop.utils.ua.regexes.os);
            return r;
          }
        },
        util: {
          has: function (a, b) {
            return b.toLowerCase().indexOf(a.toLowerCase()) !== -1;
          },
          lowerize: function (a) {
            return a.toLowerCase();
          }
        },
        mapper: {
          rgx: function () {
            for (var a, i = 0, j, k, p, q, matches, match, args = arguments; i < args.length; i += 2) {
              var b = args[i], props = args[i + 1];
              if (typeof a === 'undefined') {
                a = {};
                for (p in args[i + 1]) {
                  q = args[i + 1][p];
                  if (typeof q === 'object') {
                    a[q[0]] = undefined;
                  } else {
                    a[q] = undefined;
                  }
                }
              }
              for (j = k = 0; j < args[i].length; j++) {
                matches = args[i][j].exec(pop.utils.ua.ua);
                if (!!matches) {
                  for (p = 0; p < args[i + 1].length; p++) {
                    match = matches[++k];
                    q = args[i + 1][p];
                    if (typeof q === 'object' && q.length > 0) {
                      if (q.length == 2) {
                        if (typeof q[1] == 'function') {
                          a[q[0]] = q[1].call(this, match);
                        } else {
                          a[q[0]] = q[1];
                        }
                      } else if (q.length == 3) {
                        if (typeof q[1] === 'function' && !(q[1].exec && q[1].test)) {
                          a[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                        } else {
                          a[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                        }
                      } else if (q.length == 4) {
                        a[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                      }
                    } else {
                      a[q] = match ? match : undefined;
                    }
                  }
                  break;
                }
              }
              if (!!matches)
                break;
            }
            return a;
          },
          str: function (a, b) {
            for (var i in b) {
              if (typeof b[i] === 'object' && b[i].length > 0) {
                for (var j = 0; j < b[i].length; j++) {
                  if (pop.utils.ua.util.has(b[i][j], a)) {
                    return i === '?' ? undefined : i;
                  }
                }
              } else if (pop.utils.ua.util.has(b[i], a)) {
                return i === '?' ? undefined : i;
              }
            }
            return a;
          }
        }
      },
      window: {
        height: function heightF() {
          var myHeight = 0;
          if (typeof window.innerHeight === 'number') {
            myHeight = window.innerHeight;
          } else {
            if (document.documentElement && document.documentElement.clientHeight) {
              myHeight = document.documentElement.clientHeight;
            } else {
              if (document.body && document.body.clientHeight) {
                myHeight = document.body.clientHeight;
              }
            }
          }
          return myHeight;
        },
        width: function widthF() {
          var myWidth = 0;
          if (typeof window.innerWidth === 'number') {
            myWidth = window.innerWidth;
          } else {
            if (document.documentElement && document.documentElement.clientWidth) {
              myWidth = document.documentElement.clientWidth;
            } else {
              if (document.body && document.body.clientWidth) {
                myWidth = document.body.clientWidth;
              }
            }
          }
          return myWidth;
        },
        top: function topF() {
          return window.screenTop != undefined ? window.screenTop : window.screenY;
        },
        left: function leftF() {
          return window.screenLeft != undefined ? window.screenLeft : window.screenX;
        }
      },
      event: {
        ready: function readyF(callback) {
          document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback);
        }
      },
      elements: {
        isElement: function isElementF(el) {
          return typeof el === 'object' && el !== null;
        },
        isThumbnailLink: function isThumbnailLinkF(el) {
          if (!this.isElement(el))
            return false;
          var tmp = el;
          while (this.isElement(tmp)) {
            if (tmp.tagName === 'A' && tmp.getElementsByTagName('img').length > 0 && tmp.getElementsByTagName('img')[0].clientWidth > 90 && tmp.getElementsByTagName('img')[0].clientHeight > 90) {
              return true;
            }
            if (!this.isElement(tmp.parentElement))
              return false;
            tmp = tmp.parentElement;
          }
          return false;
        },
        isTextLinkOrSimilar: function isTextLinkOrSimilarF(el) {
          if (!this.isElement(el))
            return false;
          var tmp = el;
          while (this.isElement(tmp)) {
            if (tmp.tagName === 'A' && tmp.getElementsByTagName('img').length <= 0) {
              return true;
            }
            if (!this.isElement(tmp.parentElement))
              return false;
            tmp = tmp.parentElement;
          }
          return false;
        }
      },
      polyfills: {
        matches: function (ELEMENT) {
          var matches = ELEMENT.matches || ELEMENT.matchesSelector || ELEMENT.webkitMatchesSelector || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector;
          !matches ? ELEMENT.matches = ELEMENT.matchesSelector = function matches(selector) {
            var matches = document.querySelectorAll(selector);
            var th = this;
            return Array.prototype.some.call(matches, function (e) {
              return e === th;
            });
          } : ELEMENT.matches = ELEMENT.matchesSelector = matches;
        }(Element.prototype),
        closest: function (ELEMENT) {
          ELEMENT.closest = ELEMENT.closest || function closest(selector) {
            if (!this)
              return null;
            if (this.matches(selector))
              return this;
            if (!this.parentElement) {
              return null;
            } else
              return this.parentElement.closest(selector);
          };
        }(Element.prototype),
        once: function () {
          var _isSupportsOptions = false;
          window.addEventListener('test', null, {
            get once() {
              _isSupportsOptions = true;
              return false;
            }
          });
          if (!_isSupportsOptions) {
            var _addEventListener = Node.prototype.addEventListener;
            var _removeEventListener = Node.prototype.removeEventListener;
            var _preventDefault = Event.prototype.preventDefault;
            var _addFn = function (eventType, listener, opts) {
              opts = opts || false;
              var _target = this;
              var _isObj = typeof opts === 'object';
              var _capture = _isObj && 'capture' in opts && opts.capture === true;
              var _once = _isObj && 'once' in opts && opts.once === true;
              var _passive = _isObj && 'passive' in opts && opts.passive === true;
              ({
                handleEvent: function (e) {
                  if (_once) {
                    Node.prototype.removeEventListener.call(_target, eventType, this, _capture);
                  }
                  e.__passive = _passive;
                  listener(e);
                },
                add: function () {
                  Node.prototype.addEventListener.call(_target, eventType, this, _capture);
                }
              }.add());
            };
            var _removeFn = function (eventType, listener, opts) {
              opts = opts || false;
              var _target = this;
              var _capture = typeof opts === 'object' ? 'capture' in opts && opts.capture === true : false;
              Node.prototype.removeEventListener.call(_target, eventType, listener, _capture);
            };
            var _preventDefaultFn = function () {
              if (this.__passive)
                return;
              Event.prototype.preventDefault.apply(this);
            };
            Object.defineProperty(Node.prototype, 'addEventListener', {
              get: function () {
                return _addFn;
              }
            });
            Object.defineProperty(Node.prototype, 'removeEventListener', {
              get: function () {
                return _removeFn;
              }
            });
            Object.defineProperty(Event.prototype, 'preventDefault', {
              get: function () {
                return _preventDefaultFn;
              }
            });
          }
        }()
      },
      randomString: function randomStringF(length) {
        var i, text = '', possible = 'abcdefghijklmnopqrstuvwxyz';
        for (i = 0; i < (length || 6); i++)
          text += 'abcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 26));
        return text;
      },
      timestamp: function timestampF() {
        return Math.floor(new Date().getTime() / 1000);
      },
      trim: function trimF(text) {
        var result = String.prototype.trim ? String.prototype.trim.call(text) : text.toString().replace(/^\s+/, '').replace(/\s+$/, '');
        return text == null ? '' : result;
      },
      merge: function mergeF(target, source) {
        for (var prop in source) {
          if (prop in target && typeof target[prop] === 'object' && typeof source[prop] === 'object') {
            this.merge(target[prop], source[prop]);
          } else {
            target[prop] = source[prop];
          }
        }
        return target;
      },
      hash: function hashF(str) {
        str = str.toString();
        var hash = 0, i, chr, len;
        if (str.length !== 0) {
          for (i = 0, len = str.length; i < len; i++) {
            chr = str.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0;
          }
        }
        var z = '00000000';
        return (Math.abs(hash).toString(16) + '00000000' + '00000000' + '00000000' + '00000000').substr(0, 32);
      }
    }
  };
  try {
    pop.init(typeof options !== 'undefined' ? options : {});
  } catch (error) {
    pop.sendError(error, { situation: 'pop.init' });
  }
}({
  barrier: 'https://jatostepa.com/Y.m-xfvgYh2it_lkclnmNnD-apGqVrjsa_2uVvywPx2-lzjAPBXCB_zEJFmG9H0-PJUKNLnMS_kOJPVQaRE-lTKUWVWW5_KYdZlalbX-UdmelfZgV_ziVjrkSl2-lnBoepEq5_HsUtTuFvP-Rx0yVz4AW_WC1DFEeFU-9HEIWJmK1_NMRNGOcPz-WRkSRTrUM_0W1X6YWZX-lbOcRdGex_sgWhXipjj-NlEm5nUoT_XqhrOsRtE-Rvawdxky9_DAaBECJDq-aFnGdHuIZ_0K0LtMJNn-JPyQaRWSQ_9UOVDWcX2-YZjahbhcZ_DeQf1gZhj-gj0kMlTmd_ioNpTqcr4-OtTulvlwN_TyEz2AMBD-UDwENFTGE_4IYJ2KILm-dNnOQP9QM_TSYT4UMVT-MX5YOZTaM_4cNdSe0f0-NhTiEjxkY_WmQn0oNpz-krzsNtzuQ_5wNx2yFzi-NBTCBDhEN_2GMHyIYJ2-FLmMNNzOg_zQMRmSRTl-YVSWZX6Yb_2a5blcSdW-Qf9gNhDiY_4kNlTmEn4-Mpyq0r0sN_jugv1wMxT-gz0A',
  counters: {
    dailySeq: 'kadDS',
    domain: 'kadPD',
    iframePage: 'kadPIP',
    lastPageTimer: 'kadLPT',
    lastTimer: 'kadLT',
    max: 'kadPM',
    page: 'kadPP',
    schemeClicks: 'kadSC',
    schemeSeq: 'kadSS'
  },
  freq: {
    context: 'domain',
    distance: 60,
    distances: '',
    max: 0,
    pagelim: 0,
    period: 3600,
    qty: 3,
    scheme: 'time',
    session: false,
    sessionExpiration: 3600,
    sessionKeepAliveTime: 0
  },
  misc: {
    coverTags: 'iframe',
    newTab: true,
    under: false
  },
  names: {
    clickedElement: 'ce',
    dailySeq: 'dseq',
    iabc: 'iabc',
    schemeSeq: 'sseq'
  },
  popns: 'dea777',
  revert: false,
  script: 'https://www.simplistic-potato.pro/dea777/9a21f4f25aa9.js',
  scriptSrc: '/c.Dx9b6Eb_2/5alWSPWhQ_9lN/DYYd4/NrTFEO4/MqyN0/0ZNTjxg/1/M/Tjg-0E',
  window: { url: 'https://jatostepa.com/b.3-VJ0KPL2Ml_jOPPXQBRz-JTmU9V0WP_UYNZnaSbk-JdVeafEgl_KiWjWk5lK-dnlolpXqU_msltZuVvz-VxrySz2Al_BCeDEE5FH-UHTIFJPKR_0MVN4OWPW-1RFSeTUU9_EWWXmY1ZN-RbGccdzeW_kgRhriMj0-1l6mWnXol_OqRrGsxts-WvXwpxjyN_EA5BUCTDX-hFOGRHEIR_aKdLkM9ND-aPEQJRqSa_nUdVuWZX0-0ZtaJbncJ_yeafWgQh9-OjDkcl2mY_johphqZrD-Qt1uZvjwg_0yMzTAdBi-NDTEcF4GO_TIlJlKNLT-EN2OMPDQU_wSNTTUEV4-YX2YIZmad_ncQd9eMfT-Yh4iMjTkM_5mOnToMp4-NrSs0t0uN_TwExxyYzW-QB0CNDzEk_zGNHzIQJ5-NL2MFNiON_TQBRhSNT2-MVyWYX2YF_maNbzcgdz-MfmgRhliY_SkZl6mbn2-5plqSrWsQ_9uNvDwYx4-NzTAEB4CM_yE0F0GNHj-gJ1KMLTMg_0O' },
  zh: '5330ac8f0ba6d156c5eba093de57bf7e'
}));
