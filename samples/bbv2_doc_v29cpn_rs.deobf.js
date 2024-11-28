[+] Obfuscation type is Generic
	[+] normalizeEmptyStatements committed 38 new changes!
	[+] resolveProxyReferences committed 51 new changes!
	[+] simplifyCalls committed 6 new changes!
	[+] simplifyIfStatements committed 1 new changes!
[+] ==> Cycle 1 completed in 0.157 seconds with 96 changes (4711 nodes)
[+] ==> Cycle 2 completed in 0.01 seconds with 96 changes (4711 nodes)
[+] ==> Cycle 3 completed in 0.37 seconds with no changes (4711 nodes)
[+] ==> Cycle 4 completed in 0.008 seconds with no changes (4711 nodes)
[+] ==> Cycle 5 completed in 0.254 seconds with no changes (4711 nodes)
[+] ==> Cycle 6 completed in 0.002 seconds with no changes (4711 nodes)
[+] Saved ./samples/bbv2_doc_v29cpn_rs.js-deob.js
[!] Deobfuscation took 1.001 seconds.
/**
https://cdn.randomhow.com/brush/doc_v29cpn_rs.js
  
HTTP/1.1 200 OK
Date: Fri, 20 Sep 2024 19:13:25 GMT
Content-Type: application/javascript
Connection: keep-alive
Access-Control-Allow-Headers: DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Origin: *
Cf-Bgj: minify
Cf-Polished: origSize=21158
ETag: W/"667972b8-52a6"
Last-Modified: Mon, 24 Jun 2024 13:20:56 GMT
Cache-Control: max-age=14400
CF-Cache-Status: HIT
Age: 647
Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=kyZulnfyuopJwk2YNrgj4FVTuHErU5DrT%2FiEOMysypUNJvlAcOkvHW8P9SSZHk%2Fb6Aky6TWGvGcRrYzmLAl2NGN5lwjkymy5wdKxm7cbUGRDik8fLlNASFAL5IR%2BIzDj%2Be0wqw%3D%3D"}],"group":"cf-nel","max_age":604800}
NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
Vary: Accept-Encoding
Server: cloudflare
CF-RAY: 8c6421f549790124-GRU
Content-Length: 20535
**/
(function () {
  if (window.lawDocJsLoaded) {
    return;
  }
  window.lawDocJsLoaded = true;
  var lawPwindow = window;
  function checkJtjb() {
    if (lawPwindow.jtjb) {
      window.jtjb = lawPwindow.jtjb;
    } else {
      if (lawPwindow == window.top) {
        return;
      } else {
        lawPwindow = window.parent;
        checkJtjb();
      }
    }
  }
  checkJtjb();
  function lawFixWebUrl(u) {
    if (u.startsWith('http')) {
      return u;
    }
    if (u.startsWith('//')) {
      return window.location.protocol + u;
    } else if (u.startsWith('/')) {
      return window.location.origin + u;
    }
    return null;
  }
  function changeObjTiming(o) {
    if (o.connectStart && o.secureConnectionStart == 0) {
      Object.defineProperty(o, 'connectStart', {
        configurable: true,
        enumerable: false,
        get: function () {
          return this.domainLookupEnd + 1;
        },
        set: function () {
        }
      });
      Object.defineProperty(o, 'responseStart', {
        configurable: true,
        enumerable: false,
        get: function () {
          return this.responseEnd - 1;
        },
        set: function () {
        }
      });
      Object.defineProperty(o, 'secureConnectionStart', {
        configurable: true,
        enumerable: false,
        get: function () {
          return Math.floor(0.2 * this.responseEnd + 0.8 * this.domainLookupEnd);
        },
        set: function () {
        }
      });
      Object.defineProperty(o, 'requestStart', {
        configurable: true,
        enumerable: false,
        get: function () {
          return Math.floor(0.4 * this.responseEnd + 0.6 * this.domainLookupEnd);
        },
        set: function () {
        }
      });
      Object.defineProperty(o, 'connectEnd', {
        configurable: true,
        enumerable: false,
        get: function () {
          return Math.floor(0.4 * this.responseEnd + 0.6 * this.domainLookupEnd);
        },
        set: function () {
        }
      });
    }
  }
  function checkScreen() {
    if ('attachShadow' in Element.prototype) {
      Element.prototype._attachShadow = Element.prototype.attachShadow;
      Element.prototype.attachShadow = function (dic) {
        var a = this._attachShadow(dic);
        this.lawShadowRoot = a;
        return a;
      };
      Element.prototype.attachShadow.toString = function () {
        return 'function attachShadow() { [native code] }';
      };
    }
    Object.defineProperty(document, 'hidden', {
      configurable: true,
      enumerable: false,
      get: function () {
        return false;
      },
      set: function () {
      }
    });
    Object.defineProperty(document, 'visibilityState', {
      configurable: true,
      enumerable: false,
      get: function () {
        return 'visible';
      },
      set: function () {
      }
    });
    changeObjTiming(window.performance.timing);
    window.performance.getLawEntriesByType = window.performance.getEntriesByType;
    window.performance.getEntriesByType = function (s) {
      var arr = this.getLawEntriesByType(s);
      if (!window['lawEntriesByType' + s]) {
        window['lawEntriesByType' + s] = true;
        for (var i = 0; i < arr.length; i++) {
          var e = arr[i];
          changeObjTiming(arr[i]);
          if (arr[i].decodedBodySize) {
            Object.defineProperty(arr[i], 'encodedBodySize', {
              configurable: true,
              enumerable: false,
              get: function () {
                return Math.floor(0.5 * this.decodedBodySize);
              },
              set: function () {
              }
            });
            Object.defineProperty(arr[i], 'transferSize', {
              configurable: true,
              enumerable: false,
              get: function () {
                return 300 + Math.floor(0.5 * this.decodedBodySize);
              },
              set: function () {
              }
            });
          }
        }
      }
      return arr;
    };
    var wiw = window.innerWidth;
    var wih = window.innerHeight;
    if (window == window.top) {
      window.jtjb.setSDBString('sw', '' + window.innerWidth);
      window.jtjb.setSDBString('sh', '' + window.innerHeight);
      window.addEventListener('DOMContentLoaded', function () {
        window.setTimeout(function () {
          if (!window.law_isExist) {
            window.jtjb.loadEndJs();
          }
        }, 15000);
      }, true);
    }
    window.addEventListener('beforeunload', function (e) {
      window.lawDocJsBeforeUnload = true;
      window.lawDocJsVBChanged = true;
    }, true);
    window.addEventListener('visibilitychange', function (e) {
      window.lawDocJsVCTime = e.timeStamp;
      if (window.lawDocJsBeforeUnload) {
        window.lawDocJsBeforeUnload = false;
        Object.defineProperty(document, 'hidden', {
          configurable: true,
          enumerable: false,
          get: function () {
            return true;
          },
          set: function () {
          }
        });
        Object.defineProperty(document, 'visibilityState', {
          configurable: true,
          enumerable: false,
          get: function () {
            return 'hidden';
          },
          set: function () {
          }
        });
      } else {
        e.stopImmediatePropagation();
      }
    }, true);
    window.navigator.javaEnabled = function () {
      return false;
    };
    var cw = parseInt(window.jtjb.getSDBString('sw')) || window.innerWidth;
    var ch = parseInt(window.jtjb.getSDBString('sh')) || window.innerHeight;
    var atw = {
      configurable: true,
      enumerable: false,
      get: function () {
        return cw;
      },
      set: function () {
      }
    };
    var ath = {
      configurable: true,
      enumerable: false,
      get: function () {
        return ch;
      },
      set: function () {
      }
    };
    Object.defineProperty(window.screen, 'width', atw);
    Object.defineProperty(window.screen, 'height', ath);
    Object.defineProperty(window.screen, 'availWidth', atw);
    Object.defineProperty(window.screen, 'availHeight', ath);
    if (window.outerWidth < 5 || window.outerHeight < 5) {
      Object.defineProperty(window, 'outerWidth', atw);
      Object.defineProperty(window, 'outerHeight', ath);
    }
    var dmy = 1;
    if (window.jtjb.getDmy() >= 1) {
      dmy = window.jtjb.getDmy();
    } else {
      dmy = window.navigator.deviceMemory || 1;
      if (dmy < 2) {
        dmy = 2;
      } else if (dmy < 4) {
        dmy = 4;
      } else {
        dmy = 8;
      }
    }
    Object.defineProperty(window.navigator, 'deviceMemory', {
      configurable: true,
      enumerable: false,
      get: function () {
        return dmy;
      },
      set: function () {
      }
    });
    Object.defineProperty(window.navigator, 'platform', {
      configurable: true,
      enumerable: false,
      get: function () {
        return 'Linux armv8l';
      },
      set: function () {
      }
    });
    Object.defineProperty(window.screen.orientation, 'type', {
      configurable: true,
      enumerable: false,
      get: function () {
        return 'portrait-primary';
      },
      set: function () {
      }
    });
    Object.defineProperty(window.screen, 'colorDepth', {
      configurable: true,
      enumerable: false,
      get: function () {
        return 24;
      },
      set: function () {
      }
    });
    Object.defineProperty(window.navigator, 'maxTouchPoints', {
      configurable: true,
      enumerable: false,
      get: function () {
        return 5;
      },
      set: function () {
      }
    });
    var sdpr = window.jtjb.getDpr();
    if (sdpr && sdpr != '') {
      var dpr = parseFloat(sdpr);
      if (dpr > 0 && dpr < 5) {
        Object.defineProperty(window, 'devicePixelRatio', {
          configurable: true,
          enumerable: false,
          get: function () {
            return dpr;
          },
          set: function () {
          }
        });
      }
    }
  }
  checkScreen();
  function lsf(str, pls) {
    var tmp = '';
    for (var i = 0; i < str.length; i++) {
      var a = str.charCodeAt(i);
      if (a >= 97 && a <= 122) {
        a = a + pls;
        if (a > 122) {
          a = a - 26;
        }
        tmp = tmp + String.fromCharCode(a);
      } else if (a == 46) {
        tmp = tmp + '.';
      }
    }
    return tmp;
  }
  function lawCheckOther() {
    if ('cache' in Request.prototype) {
      if ('scheduling' in Navigator.prototype) {
        window.lawDeviceChromeVersionHigh = true;
      }
    } else {
      window.lawDeviceChromeVersionLow = true;
    }
    if (window == window.top) {
      if (window.lawDeviceChromeVersionLow) {
        window.jtjb.setAddConfig(JSON.stringify({
          opfr: 1,
          ndfo: 1,
          lou: 'https://securepubads.g.doubleclick.net/gampad/ads?',
          fst: 'https://securepubads.g.doubleclick.net/pagead/adview?',
          oah: 'attribution-reporting-eligible'
        }));
      } else {
        window.jtjb.setAddConfig(JSON.stringify({ lou: 'https://securepubads.g.doubleclick.net/gampad/ads?' }));
      }
      var tid = window.jtjb.getTid() || 0;
      var ct = parseInt(window.jtjb.getSDBString('cpt_' + tid)) || 0;
      if (Date.now() > ct) {
        ct = Date.now() + 100000 * (2592 + Math.random(9504));
        window.jtjb.setSDBString('cpt_' + tid, '' + ct);
      }
      var ofs = (parseInt(('' + ct)[4]) + tid) % 26;
      var pkg = window.jtjb.getAndroidPackageName();
      if (!(pkg && pkg.startsWith('com.'))) {
        pkg = 'com.qudb.rufhb.rjb';
      }
      window.lawxhrcpn = 'com.' + lsf(pkg.replace('com.', '').split('').reverse().join(''), ofs);
    }
    var lawofcms = window.fetch;
    window.fetch = function (url, cfg) {
      if (window.lawDocJsVBChanged && url) {
        var u = lawFixWebUrl(url);
        if (u) {
          window.jtjb.sendLostWebRequest('GET', u, null, null, window.location.href, navigator.userAgent);
          return new Promise(function (rs, rj) {
          });
        }
      }
      var nc = false;
      if (typeof url == 'string') {
        if (!window.lawDeviceChromeVersionHigh && (url.startsWith('https://securepubads.g.doubleclick.net/pagead/adview?') || url.startsWith('https://googleads.g.doubleclick.net/pagead/adview?'))) {
          nc = true;
        } else if (url.startsWith('https://securepubads.g.doubleclick.net/gampad/ads?')) {
          if (cfg) {
            if (cfg.headers) {
              cfg.headers['X-Requested-With'] = window.lawxhrcpn;
            } else {
              cfg.headers = { 'X-Requested-With': window.lawxhrcpn };
            }
          } else {
            cfg = { headers: { 'X-Requested-With': window.lawxhrcpn } };
          }
        }
      }
      if (cfg && nc) {
        cfg.keepalive = false;
      }
      return window.fetch(url, cfg);
    };
    window.fetch.toString = function () {
      return 'function fetch() { [native code] }';
    };
    navigator.lawosb = navigator.sendBeacon;
    navigator.sendBeacon = function (url, data) {
      if (window.lawDocJsVBChanged && url) {
        var u = lawFixWebUrl(url);
        if (u) {
          window.jtjb.sendLostWebRequest('POST', u, null, window.location.origin, window.location.href, navigator.userAgent);
          return true;
        }
      }
      return this.lawosb(url, data);
    };
    navigator.sendBeacon.toString = function () {
      return 'function sendBeacon() { [native code] }';
    };
    var open_original = XMLHttpRequest.prototype.open;
    var send_original = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function (method, url, async, unk1, unk2) {
      if (url.startsWith('https://securepubads.g.doubleclick.net/gampad/ads?')) {
        this.lawxhr_reqads = true;
      }
      XMLHttpRequest.prototype.open();
    };
    XMLHttpRequest.prototype.send = function (data) {
      if (this.lawxhr_reqads && window.lawxhrcpn) {
        this.setRequestHeader('X-Requested-With', window.lawxhrcpn);
      }
      XMLHttpRequest.prototype.send();
    };
  }
  lawCheckOther();
  function lawAppendCloseButton(rd) {
    var disBtn = document.getElementById('dismiss-button') || document.getElementById('close_button') || document.querySelector('button[aria-label]');
    if (disBtn) {
      var vt = 0;
      if (document.getElementById('close_button')) {
        vt = 1;
      } else if (document.getElementById('google-rewarded-video')) {
        vt = 2;
      } else if (document.getElementById('count-down-container')) {
        vt = 3;
      }
      var rect = disBtn.getBoundingClientRect();
      rd.data.closebtn = {
        rdt: vt,
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left
      };
    }
  }
  function lawCheckSelfContent(receivedData) {
    window.pfid = receivedData.fid;
    var list = document.querySelectorAll('[data-asoch-targets]');
    var confirm = document.getElementById('common_15click_overlay') && document.getElementById('common_15click_anchor') ? 1 : 0;
    if (confirm == 1) {
      var looper = window.setInterval(function () {
        if (window.isLawSendConfirm) {
          clearInterval(looper);
          return;
        }
        if (document.getElementById('common_15click_overlay').className.indexOf('visible') >= 0 && document.getElementById('common_15click_overlay').className.indexOf('hidden') == -1 && document.getElementById('common_15click_overlay').className.indexOf('invisible') == -1) {
          var respData = {
            isLawPostMessage: 1,
            type: receivedData.type,
            fid: receivedData.fid,
            flow: 1,
            data: { type: 2 }
          };
          var yesRect = document.getElementById('common_15click_anchor').getBoundingClientRect();
          respData.data.yesbtn = {
            width: yesRect.width,
            height: yesRect.height,
            top: yesRect.top,
            left: yesRect.left
          };
          if (document.getElementsByClassName('dialog-cancel').length > 0) {
            var noRect = document.getElementsByClassName('dialog-cancel')[0].getBoundingClientRect();
            respData.data.nobtn = {
              width: noRect.width,
              height: noRect.height,
              top: noRect.top,
              left: noRect.left
            };
          }
          window.parent.postMessage('lawgodata' + window.jtjb.encode(JSON.stringify(respData)), '*');
          window.isLawSendConfirm = true;
        }
      }, 2000);
    }
    var rwcb = document.getElementById('close_button');
    if (rwcb) {
      var ltn = function () {
        setTimeout(function () {
          var dw = document.getElementById('dialog_wrapper');
          if (dw && dw.className == 'visible') {
            var rpd = {
              isLawPostMessage: 1,
              type: receivedData.type,
              fid: receivedData.fid,
              flow: 1,
              data: { type: 4 }
            };
            var sk = document.getElementById('close_video_button').getBoundingClientRect();
            var rs = document.getElementById('resume_video_button').getBoundingClientRect();
            rpd.data.skbtn = {
              width: sk.width,
              height: sk.height,
              top: sk.top,
              left: sk.left
            };
            rpd.data.rsbtn = {
              width: rs.width,
              height: rs.height,
              top: rs.top,
              left: rs.left
            };
            window.parent.postMessage('lawgodata' + window.jtjb.encode(JSON.stringify(rpd)), '*');
          }
        }, 1000);
        rwcb.removeEventListener('click', ltn);
      };
      rwcb.addEventListener('click', ltn);
    } else if (document.getElementById('google-rewarded-video')) {
      window.setInterval(function () {
        var skar = document.getElementsByClassName('rewardCloseButton');
        var rsar = document.getElementsByClassName('rewardResumebutton');
        var sk = null;
        var rs = null;
        var rpddt = 0;
        if (!window.lawRVCheckSend0 && skar[0] && skar[0].clientHeight > 0) {
          window.lawRVCheckSend0 = true;
          rpddt = 5;
          sk = skar[0].getBoundingClientRect();
          rs = rsar[0].getBoundingClientRect();
        } else if (!window.lawRVCheckSend1 && skar[1] && skar[1].clientHeight > 0) {
          window.lawRVCheckSend1 = true;
          rpddt = 6;
          sk = skar[1].getBoundingClientRect();
          rs = rsar[1].getBoundingClientRect();
        }
        if (sk) {
          var rpd = {
            isLawPostMessage: 1,
            type: receivedData.type,
            fid: receivedData.fid,
            flow: 1,
            data: { type: rpddt }
          };
          rpd.data.skbtn = {
            width: sk.width,
            height: sk.height,
            top: sk.top,
            left: sk.left
          };
          rpd.data.rsbtn = {
            width: rs.width,
            height: rs.height,
            top: rs.top,
            left: rs.left
          };
          window.parent.postMessage('lawgodata' + window.jtjb.encode(JSON.stringify(rpd)), '*');
        }
      }, 2000);
    }
    if (list && list.length > 0 || confirm == 1 || document.getElementById('abgc') || document.getElementById('google-rewarded-video') || document.getElementsByClassName('GoogleActiveViewInnerContainer').length > 0) {
      var respData = {
        isLawPostMessage: 1,
        type: receivedData.type,
        fid: receivedData.fid,
        flow: 1,
        data: {
          type: 1,
          asochlist: []
        }
      };
      if (document.getElementById('contain-paidtasks-survey') || document.getElementById('google-rewarded-video') && !document.querySelector('.learnMoreContainer')) {
        respData.data.intImdClose = 1;
      }
      respData.data.confirm = confirm;
      for (var i = 0; i < list.length; i++) {
        var ele = list[i];
        var elrect = list[i].getBoundingClientRect();
        if (elrect.width < 1) {
          if (list[i].children.length > 0) {
            elrect = list[i].children[0].getBoundingClientRect();
          }
          if (elrect.width < 1) {
            elrect = list[i].parentElement.getBoundingClientRect();
          }
        }
        respData.data.asochlist.push({
          target: list[i].getAttribute('data-asoch-targets'),
          width: elrect.width,
          height: elrect.height,
          top: elrect.top,
          left: elrect.left
        });
      }
      var vo = document.querySelector('.learn-more-container .learn-more, .learnMoreContainer');
      if (vo) {
        var vlmbox = vo.getBoundingClientRect();
        respData.data.asochlist.push({
          target: 'ad0,ochButton',
          width: vlmbox.width,
          height: vlmbox.height,
          top: vlmbox.top,
          left: vlmbox.left
        });
      }
      lawAppendCloseButton(respData);
      return respData;
    }
    return null;
  }
  window.addEventListener('message', function (e) {
    try {
      var originData = e.data;
      if (typeof originData == 'string' && originData.startsWith('lawgodata')) {
        e.stopImmediatePropagation();
        originData = originData.substring(9);
        var redData = JSON.parse(window.jtjb.decode(originData));
        if (1 == redData.isLawPostMessage) {
          if (window == window.top) {
            if (window.lawMainFrameOnMessage) {
              window.lawMainFrameOnMessage(redData);
            }
          } else {
            if (redData.flow == 1) {
              var updateData = lawCheckUpdateData(redData);
              window.parent.postMessage('lawgodata' + window.jtjb.encode(JSON.stringify(updateData)), '*');
            } else {
              var respData = lawCheckSelfContent(redData);
              if (respData) {
                window.parent.postMessage('lawgodata' + window.jtjb.encode(JSON.stringify(respData)), '*');
                if (respData.data.type == 1) {
                  return;
                }
              }
              var frameList = document.getElementsByTagName('iframe');
              for (var i = 0; i < frameList.length; i++) {
                if (frameList[i].contentWindow) {
                  if (!frameList[i].fid) {
                    frameList[i].fid = window.jtjb.getNextFid();
                  }
                  var nspData = JSON.parse(JSON.stringify(redData));
                  nspData.fid = frameList[i].fid;
                  frameList[i].contentWindow.postMessage('lawgodata' + window.jtjb.encode(JSON.stringify(nspData)), '*');
                }
              }
            }
          }
        }
      }
    } catch (err) {
    }
  });
  window.lawSendDataToEle = function (fel, adtype) {
    if (!fel.fid) {
      fel.fid = window.jtjb.getNextFid();
    }
    var nspData = {
      isLawPostMessage: 1,
      type: adtype,
      fid: fel.fid,
      flow: 0
    };
    fel.contentWindow.postMessage('lawgodata' + window.jtjb.encode(JSON.stringify(nspData)), '*');
  };
  function lawCheckUpdateData(rdata) {
    var originFid = rdata.fid;
    var frameList = document.getElementsByTagName('iframe');
    var coFrame = null;
    for (var i = 0; i < frameList.length; i++) {
      if (frameList[i].fid && frameList[i].fid == originFid) {
        coFrame = frameList[i];
        break;
      }
    }
    rdata.fid = window.pfid;
    var idata = rdata.data;
    if (idata) {
      var coRect = coFrame.getBoundingClientRect();
      if (idata.type == 1) {
        var list = idata.asochlist;
        for (var j = 0; j < idata.asochlist.length; j++) {
          var obj = idata.asochlist[j];
          idata.asochlist[j].top = idata.asochlist[j].top + coRect.top;
          idata.asochlist[j].left = idata.asochlist[j].left + coRect.left;
        }
        var closeBtn = idata.closebtn;
        if (idata.closebtn) {
          idata.closebtn.top = idata.closebtn.top + coRect.top;
          idata.closebtn.left = idata.closebtn.left + coRect.left;
        } else {
          lawAppendCloseButton(rdata);
        }
      } else if (idata.type == 2) {
        var yesBtn = idata.yesbtn;
        if (idata.yesbtn) {
          idata.yesbtn.top = idata.yesbtn.top + coRect.top;
          idata.yesbtn.left = idata.yesbtn.left + coRect.left;
        }
        var noBtn = idata.nobtn;
        if (idata.nobtn) {
          idata.nobtn.top = idata.nobtn.top + coRect.top;
          idata.nobtn.left = idata.nobtn.left + coRect.left;
        }
      } else if (idata.type == 4 || idata.type == 5 || idata.type == 6) {
        var skBtn = idata.skbtn;
        if (idata.skbtn) {
          idata.skbtn.top = idata.skbtn.top + coRect.top;
          idata.skbtn.left = idata.skbtn.left + coRect.left;
        }
        var rsBtn = idata.rsbtn;
        if (idata.rsbtn) {
          idata.rsbtn.top = idata.rsbtn.top + coRect.top;
          idata.rsbtn.left = idata.rsbtn.left + coRect.left;
        }
      }
    }
    return rdata;
  }
  function lawHookDom(dom) {
    if (!dom.aow) {
      dom.aow = dom.write;
      dom.write = function (text) {
        var aftext = text;
        if (typeof text == 'object') {
          aftext = text.toString();
        }
        aftext = window.jtjb.getRepDoc(aftext);
        this.aow(aftext);
      };
      dom.write.toString = function () {
        return 'function write() { [native code] }';
      };
    }
  }
  lawHookDom(document);
  function lawCheckFrames(el) {
    if (el instanceof HTMLElement) {
      if (el.contentWindow && el.contentDocument) {
        lawHookDom(el.contentDocument);
      } else {
        var fels = el.getElementsByTagName('iframe');
        for (var i = 0; i < fels.length; i++) {
          if (fels[i].contentWindow && fels[i].contentDocument) {
            lawHookDom(fels[i].contentDocument);
          }
        }
      }
    }
  }
  var oeac = Element.prototype.appendChild;
  Element.prototype.appendChild = function (el) {
    var result = Element.prototype.appendChild();
    lawCheckFrames(el);
    return result;
  };
  var oeib = Element.prototype.insertBefore;
  Element.prototype.insertBefore = function (el, b) {
    var result = Element.prototype.insertBefore();
    lawCheckFrames(el);
    return result;
  };
  var lawOriginSab = HTMLIFrameElement.prototype.setAttribute;
  HTMLIFrameElement.prototype.setAttribute = function (k, v) {
    if (k && k.toLowerCase() == 'src' && v) {
      var u = lawFixWebUrl(v);
      if (u) {
        window.jtjb.addIframeUrl(u);
        v = u;
      }
    }
    if (window.lawDeviceChromeVersionLow) {
      if (k && k.toLowerCase() == 'sandbox' && v) {
        v = v.replace('-by-user-activation', '');
      } else if (k && k.toLowerCase() == 'allow' && v) {
        v = v.replace('autoplay', '');
      }
    }
    HTMLIFrameElement.prototype.setAttribute();
  };
  Object.defineProperty(HTMLIFrameElement.prototype, 'src', {
    get: function () {
      return this.getAttribute('src');
    },
    set: function (value) {
      this.setAttribute('src', value);
    }
  });
  Object.defineProperty(HTMLIFrameElement.prototype, 'allow', {
    get: function () {
      return this.getAttribute('allow');
    },
    set: function (value) {
      this.setAttribute('allow', value);
    }
  });
  var lawOriginImageSab = HTMLImageElement.prototype.setAttribute;
  HTMLImageElement.prototype.setAttribute = function (k, v) {
    if (window.lawDocJsVBChanged) {
      if (k && k.toLowerCase() == 'src' && v) {
        var u = lawFixWebUrl(v);
        if (u) {
          window.jtjb.sendLostWebRequest('GET', u, null, null, window.location.href, navigator.userAgent);
          return;
        }
      }
    }
    HTMLImageElement.prototype.setAttribute();
  };
  Object.defineProperty(HTMLImageElement.prototype, 'src', {
    get: function () {
      return this.getAttribute('src');
    },
    set: function (value) {
      this.setAttribute('src', value);
    }
  });
  document.aoc = document.createElement;
  document.createElement = function (tagName, options) {
    var ltco = this.aoc(tagName, options);
    if (tagName.toLowerCase() == 'ins' && window == window.top) {
      ltco.olsa = ltco.setAttribute;
      ltco.setAttribute = function (k, v) {
        this.olsa(k, v);
        if (window.lawAdVCListener && k == 'aria-hidden' && v == 'false') {
          window.lawAdVCListener(this, 100);
        }
      };
    } else if (tagName.toLowerCase() == 'video') {
      ltco.volume = 0;
      ltco.lvo = 1;
      Object.defineProperty(ltco, 'volume', {
        configurable: true,
        enumerable: false,
        get: function () {
          return this.lvo;
        },
        set: function (v) {
          this.lvo = v;
        }
      });
      ltco.lps = ltco.pause;
      ltco.pauseTime = 0;
      ltco.pause = function () {
        this.pauseTime = Date.now();
        this.lps();
      };
      ltco.lpy = ltco.play;
      ltco.playTime = 0;
      ltco.play = function () {
        this.playTime = Date.now();
        this.lpy();
      };
      ltco.addEventListener('pause', function (e) {
        this.hadPaused = true;
        if (Date.now() - this.pauseTime > 50 && !window.lawDocJsVBChanged && (e.timeStamp - window.lawDocJsVCTime < 50 || this.currentTime < this.duration)) {
          e.stopImmediatePropagation();
        }
      }, true);
      ltco.addEventListener('playing', function (e) {
        if (Date.now() - this.playTime > 50 && !window.lawDocJsVBChanged && (e.timeStamp - window.lawDocJsVCTime < 50 || this.hadPaused && this.currentTime < this.duration)) {
          e.stopImmediatePropagation();
        }
      }, true);
    } else if (window.lawDeviceChromeVersionLow && tagName.toLowerCase() == 'iframe') {
      if (!ltco.sandbox) {
        ltco.setAttribute('sandbox', '');
      }
      ltco.lawsdb = ltco.sandbox;
      Object.defineProperty(ltco, 'sandbox', {
        get: function () {
          return this.lawsdb;
        },
        set: function (v) {
          this.setAttribute('sandbox', v);
        }
      });
      ltco.lawsdb.oriadd = ltco.lawsdb.add;
      ltco.lawsdb.add = function (c) {
        if (c) {
          c = c.replace('-by-user-activation', '');
        }
        this.oriadd(c);
      };
    }
    return ltco;
  };
  function sendAdsEvent(t, e) {
    var data = {
      adid: e.slot.getAdUnitPath(),
      type: t,
      opkg: window.jtjb.getAndroidPackageName(),
      tpkg: window.lawxhrcpn,
      tid: window.jtjb.getTid(),
      cl: window.jtjb.getChannel(),
      sub: window.jtjb.getSubChannel(),
      w: window.screen.width,
      h: window.screen.height,
      uid: window.jtjb.getAndroidId(),
      ed: '',
      host: window.location.host,
      path: window.location.pathname,
      tck: '',
      oua: window.jtjb.getOriginUA()
    };
    window.jtjb.sendLostWebRequest('POST', 'https://hla.app-goal.com/brush/sade', JSON.stringify(data), null, window.location.href, navigator.userAgent);
  }
  function lawHookReward() {
    if (window == window.top) {
      window.googletag = window.googletag || { cmd: [] };
      googletag.cmd.push(function () {
        googletag.pubads().addEventListener('slotRenderEnded', function (e) {
          sendAdsEvent(e.isEmpty ? 31 : 32, e);
        });
        googletag.pubads().addEventListener('rewardedSlotReady', function (e) {
          if (!e.omrv) {
            e.omrv = e.makeRewardedVisible;
            e.makeRewardedVisible = function () {
              this.omrv();
              if (window.lawRWAdListener) {
                window.lawRWAdListener(document.getElementById(this.slot.getSlotElementId()), 100);
              }
              this.makeRewardedVisible = this.omrv;
            };
          }
        });
        googletag.pubads().addEventListener('rewardedSlotClosed', function (e) {
          if (window.lawRWAdListener) {
            window.lawRWAdListener(null, 200);
          }
        });
      });
    }
  }
  lawHookReward();
}());
