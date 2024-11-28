[+] Obfuscation type is Generic
	[+] normalizeEmptyStatements committed 19 new changes!
	[+] resolveProxyReferences committed 23 new changes!
	[+] simplifyCalls committed 4 new changes!
[+] ==> Cycle 1 completed in 0.074 seconds with 46 changes (2194 nodes)
[+] ==> Cycle 2 completed in 0.002 seconds with 46 changes (2194 nodes)
[+] ==> Cycle 3 completed in 0.149 seconds with no changes (2194 nodes)
[+] ==> Cycle 4 completed in 0.013 seconds with no changes (2194 nodes)
[+] ==> Cycle 5 completed in 0.012 seconds with no changes (2194 nodes)
[+] ==> Cycle 6 completed in 0.013 seconds with no changes (2194 nodes)
[+] Saved ./samples/bbv2_dsh_v2.js-deob.js
[!] Deobfuscation took 0.378 seconds.
/**
GET https://cdn.randomhow.com/brush/dsh_v2.js HTTP/1.1
User-Agent: Dalvik/2.1.0 (Linux; U; Android 12.0; ORYX Build/NHG47L)
Host: cdn.randomhow.com
Connection: Keep-Alive
Accept-Encoding: gzip


HTTP/1.1 200 OK
Date: Fri, 20 Sep 2024 16:16:19 GMT
Content-Type: application/javascript
Connection: keep-alive
Access-Control-Allow-Headers: DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Origin: *
Cf-Bgj: minify
Cf-Polished: origSize=9845
ETag: W/"6603e258-2675"
Last-Modified: Wed, 27 Mar 2024 09:09:44 GMT
Cache-Control: max-age=14400
CF-Cache-Status: HIT
Age: 2096
Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=0xg298RSLFBgqIemQUjdN9mcQkjmcEsMaAS3ajx%2Bw%2BWtVsCg3naZuuYWTzYG81T97CKDvBV%2BRHfUut%2BwKDSCDPCortHNy6Ks%2B%2Fpn5oC2mrfsLaIiYmfI5ARM7qSxdPbhx2AmEA%3D%3D"}],"group":"cf-nel","max_age":604800}
NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
Vary: Accept-Encoding
Server: cloudflare
CF-RAY: 8c631e8898f5aeb4-GRU
Content-Length: 9544
*/
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
  function lawCheckSelfContent(receivedData) {
    window.pfid = receivedData.fid;
    var list = document.querySelectorAll('[data-bg=true]');
    if (list && list.length > 0) {
      var respData = {
        isLawPostMessage: 2,
        type: receivedData.type,
        fid: receivedData.fid,
        flow: 1,
        data: []
      };
      for (var i = 0; i < list.length; i++) {
        var eleP = list[i];
        var tlData = {
          type: 1,
          asochlist: []
        };
        var tl = list[i].querySelectorAll('[data-nb]');
        if (tl && tl.length > 0) {
          for (var j = 0; j < tl.length; j++) {
            var ele = tl[j];
            var elrect = tl[j].getBoundingClientRect();
            tlData.asochlist.push({
              target: tl[j].getAttribute('data-nb'),
              width: elrect.width,
              height: elrect.height,
              top: elrect.top,
              left: elrect.left
            });
          }
        }
        respData.data.push(tlData);
      }
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
        if (2 == redData.isLawPostMessage) {
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
      isLawPostMessage: 2,
      type: 1,
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
      for (var k = 0; k < idata.length; k++) {
        var td = idata[k];
        if (idata[k].type == 1) {
          var list = idata[k].asochlist;
          for (var j = 0; j < idata[k].asochlist.length; j++) {
            var obj = idata[k].asochlist[j];
            idata[k].asochlist[j].top = idata[k].asochlist[j].top + coRect.top;
            idata[k].asochlist[j].left = idata[k].asochlist[j].left + coRect.left;
          }
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
}());