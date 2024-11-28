(function (e, f, p) {
  function U(a, b, c, d, g) {
    null == f.body && (f.body = f.createElement('body'));
    null == f.head && (f.head = f.createElement('head'));
    var h = f.createElement('style');
    h.innerHTML = '#a_timer_oYvwGmQc,#a_title_nEYjMupI,.a_close_nEYjMupI{top:0;right:0;height:30px;line-height:30px;text-align:center}.top-left_vUTDnibMkZJIvuTH{position:fixed;top:0;left:0}.bottom-left_vUTDnibMkZJIvuTH{position:fixed;bottom:0;left:0}.top-right_vUTDnibMkZJIvuTH{position:fixed;top:0;right:0}.bottom-right_vUTDnibMkZJIvuTH{position:fixed;bottom:0;right:0}.top-center_vUTDnibMkZJIvuTH{position:fixed;top:0;left:50%;transform:translateX(-50%)}.bottom-center_vUTDnibMkZJIvuTH{position:fixed;bottom:0;left:50%;transform:translateX(-50%)}.c_window_xEucqIjg{z-index:9999999;overflow:hidden;position:fixed;background-color:#FFF;margin:20px;padding:0;border:1px solid #ccc;border-radius:5px;-webkit-box-shadow:0 0 5px 1px rgba(153,153,153,.5);-moz-box-shadow:0 0 5px 1px rgba(153,153,153,.5);box-shadow:0 0 5px 1px rgba(153,153,153,.5)}#alink_overlay_EPXdyaUf{position:absolute;z-index:1;background:rgba(0,0,0,0);cursor:pointer}#a_iframe_DwTGCjTm{z-index:-1;padding:0!important}.a_close_nEYjMupI{position:absolute;color:rgba(0,0,0,.3);width:30px;font-size:30px}#a_title_nEYjMupI{position:absolute;color:rgba(0,0,0,1);font-size:18px}.a_close_nEYjMupI a{text-decoration:none!important}#a_timer_oYvwGmQc{position:absolute;color:rgba(0,0,0,.3);width:30px;font-size:30px}.a_close_nEYjMupI:focus,.a_close_nEYjMupI:hover{color:#000;cursor:pointer}.a_open_rrTmtfGj{display:block}.a_hide_qkasklrO{display:none}';
    f.head.appendChild(h);
    f.getElementById('c_window_xEucqIjg') && (clearTimeout(timedis), f.getElementById('c_window_xEucqIjg').remove());
    h = f.createElement('div');
    h.id = 'c_window_xEucqIjg';
    f.body.appendChild(h);
    f.getElementById('c_window_xEucqIjg').classList.add('c_window_xEucqIjg');
    h.innerHTML = '<div style="height:30px;"><span id="a_title_nEYjMupI">Advertisement</span><span class="a_close_nEYjMupI a_hide_qkasklrO" data-alink="data-alink" id="a_close_nEYjMupI" data-dismiss_OLjQnDvi="c_xEucqIjg"><a href="#" data-alink="data-alink" data-dismiss_OLjQnDvi="c_xEucqIjg" style="text-decoration: none!important; color: rgba(0,0,0,0.3);">&times;</span></a><span id="a_timer_oYvwGmQc">5</span></div><div id="alink_overlay_EPXdyaUf" alink="alink"></div>';
    f.getElementById('c_window_xEucqIjg').classList.add(b + '_vUTDnibMkZJIvuTH');
    b = f.createElement('iframe');
    h = f.getElementById('c_window_xEucqIjg');
    var l = f.getElementById('a_title_nEYjMupI'), m = f.getElementById('alink_overlay_EPXdyaUf');
    h.style.width = c;
    var q = c.search(/px/i), E = d.search(/px/i), I = (Math.max(f.documentElement.clientWidth, e.innerWidth || 0), Math.max(f.documentElement.clientHeight, e.innerHeight || 0));
    if (-1 == q ? (m.style.width = '100%', b.style.width = '100%', l.style.width = '100%') : (m.style.width = c, b.style.width = c, l.style.width = c), -1 == E)
      b.style.height = '100%', m.style.height = '96%', h.style.height = d;
    else {
      l = function (n) {
        n.matches;
      };
      q = function () {
        Math.max(f.documentElement.clientWidth, e.innerWidth || 0);
        Math.max(f.documentElement.clientHeight, e.innerHeight || 0) < A && (f.getElementById('c_window_xEucqIjg').style.top = '0');
      };
      E = d.split('px')[0];
      var A = Number(E) + 30;
      m.style.height = d;
      b.style.height = d;
      h.style.height = A + 'px';
      c = c.split('px')[0];
      d = Number(c) + 40;
      e.onresize = q;
      e.onload = q;
      m = f.createElement('style');
      if (m.innerHTML = '@media all and (max-width: ' + d + 'px){#c_window_xEucqIjg{position:fixed;top:0!important;left:0;right:0;width:90%!important;margin:10px auto auto!important;text-align:center}.bottom-center_vUTDnibMkZJIvuTH,.top-center_vUTDnibMkZJIvuTH{left:0!important;right:0!important;transform:none!important}#a_iframe_DwTGCjTm{width:100%!important;}#alink_overlay_EPXdyaUf{width:90%!important;height:90%!important},.bottom-right_vUTDnibMkZJIvuTH {top:0px!important;} }', f.head.appendChild(m), matchMedia)
        c = e.matchMedia('(min-width: ' + c + 'px)'), c.addListener(l), l(c);
      e.matchMedia('(orientation: landscape)').matches && I < A && (f.getElementById('c_window_xEucqIjg').style.top = '0');
      e.addEventListener('orientationchange', function () {
        e.matchMedia('(orientation:landscape)').matches || I < A && (f.getElementById('c_window_xEucqIjg').style.top = '0');
      });
    }
    b.src = a;
    b.name = 'a_iframe_DwTGCjTm';
    b.id = 'a_iframe_DwTGCjTm';
    b.frameBorder = '0';
    b.scrolling = 'no';
    b.sandbox = 'allow-forms allow-scripts';
    h.appendChild(b);
    f.getElementById('c_window_xEucqIjg').classList.add('a_open_rrTmtfGj');
    f.getElementById('a_iframe_DwTGCjTm').src = a;
    var B = 5, k = setInterval(function () {
        B--;
        f.getElementById('a_timer_oYvwGmQc').textContent = B;
        0 >= B && clearInterval(k);
      }, 1000);
    timedis = setTimeout(function () {
      f.getElementById('a_close_nEYjMupI').classList.remove('a_hide_qkasklrO');
      f.getElementById('a_timer_oYvwGmQc').classList.add('a_hide_qkasklrO');
    }, 5000);
    f.addEventListener('click', function (n) {
      clearInterval(k);
      var w = 5;
      k = setInterval(function () {
        w--;
        f.getElementById('a_timer_oYvwGmQc').textContent = w;
        0 >= w && clearInterval(k);
      }, 1000);
      var C = (n = n || e.event).target || n.srcElement;
      if (C.hasAttribute('data-dismiss_OLjQnDvi') && 'c_xEucqIjg' == C.getAttribute('data-dismiss_OLjQnDvi')) {
        var x = f.getElementById('c_window_xEucqIjg');
        f.getElementById('c_window_xEucqIjg').classList.add('a_hide_qkasklrO');
        x.classList.remove('a_open_rrTmtfGj');
        f.getElementById('c_window_xEucqIjg').remove();
        n.preventDefault();
      }
      C.hasAttribute('data-alink') && (x = f.getElementById('c_window_xEucqIjg'), f.getElementById('c_window_xEucqIjg').classList.add('a_hide_qkasklrO'), x.classList.remove('a_open_rrTmtfGj'), n.preventDefault());
      C.hasAttribute('alink') && (x = f.getElementById('c_window_xEucqIjg'), f.getElementById('c_window_xEucqIjg').classList.add('a_hide_qkasklrO'), x.classList.remove('a_open_rrTmtfGj'), e.open(g, '_blank').focus());
    }, false);
  }
  Function.prototype.bind || (Function.prototype.bind = function (a) {
    if ('function' !== typeof this)
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    var b = Array.prototype.slice.call(arguments, 1), c = this, d = function () {
      }, g = function () {
        return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)));
      };
    d.prototype = this.prototype;
    g.prototype = new d();
    return g;
  });
  Function.prototype.bind || (Function.prototype.bind = function (a) {
    if ('function' !== typeof this)
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    var b = Array.prototype.slice.call(arguments, 1), c = this, d = function () {
      }, g = function () {
        return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)));
      };
    d.prototype = this.prototype;
    g.prototype = new d();
    return g;
  });
  var D = {
      _cookieLockSet: function (a) {
        var b = '1';
        a && (b = '0');
        try {
          return localStorage.setItem('YDaqJkGt', b), true;
        } catch (d) {
        }
        a = new Date();
        var c = 60000;
        a.setTime(a.getTime() + c);
        c = 'expires=' + a.toUTCString();
        f.cookie = 'YDaqJkGt=' + b + ';' + c + ';path=/';
        return true;
      },
      _cookieLockGet: function () {
        var a = false;
        try {
          return localStorage.YDaqJkGt && (a = '1' == localStorage.YDaqJkGt), localStorage.setItem('YDaqJkGt', '0'), a;
        } catch (g) {
        }
        for (var b = decodeURIComponent(f.cookie).split(';'), c = 0; c < b.length; c++) {
          for (var d = b[c]; ' ' == d.charAt(0);)
            d = d.substring(1);
          0 == d.indexOf('YDaqJkGt=') && '1' == d.substring(10, d.length) && (a = true);
        }
        a && this._cookieLockSet(true);
        return a;
      },
      _windowOpen: function (a, b) {
        var c = '' + Math.random();
        'msie' == this.cap.env.b && 9 >= this.cap.env.v && (c = '');
        c = b ? this.iframewin.open('about:blank', c, b) : this.iframewin.open('about:blank', c);
        if (this.settings.openernull)
          try {
            c.opener = null;
          } catch (d) {
          }
        try {
          c.location.replace(a);
        } catch (d) {
        }
        return c;
      },
      _openTabup: function (a) {
        return this._windowOpen(a);
      },
      _openTabunder: function (a) {
        if (0 == this.cap.tabunder)
          this._openTabup(a);
        else {
          this._cookieLockSet(false);
          var b = this._openTabup(f.location.href);
          this.ti = setInterval(function () {
            if (b)
              try {
                f.location.replace(a);
              } catch (c) {
                clearInterval(this.ti);
              }
          }.bind(this), 10);
        }
        return true;
      },
      _getOptString: function () {
        return optstring = 'top=' + (e.screenY || 0) + ',left=' + (e.screenX || 0) + ',width=' + (0 == e.outerWidth ? 99999 : e.outerWidth || e.screen.width) + ',height=' + (0 == e.outerHeight ? 99999 : e.outerHeight || e.screen.height) + ',status=0,location=1,toolbar=1,menubar=1,resizable=1,scrollbars=1';
      },
      _openPopup: function (a) {
        return this._windowOpen(a, this._getOptString());
      },
      _openPopunderSafari: function (a) {
        function b(c, d, g) {
          var h = f.createElement('iframe');
          h.style = 'display:none;';
          f.body.appendChild(h);
          var l = h.contentWindow.document.createElement('script');
          l.type = 'text/javascript';
          l.innerHTML = 'window.parent = window.top = window.frameElement = null;window.mkp = function(url, name, opts) {var popWin = window.open(url, name, opts);try {popWin.opener = null} catch (e) {}return popWin;};';
          h.contentWindow.document.body.appendChild(l);
          c = h.contentWindow.mkp(c, d, g);
          f.body.removeChild(h);
          return c;
        }
        e.name = '' + Math.random();
        a = b(a, '' + Math.random(), this._getOptString());
        b('', e.name, '');
        e.name = null;
        return a;
      },
      _openPopunderBlur: function (a) {
        a = this._openPopup(a);
        try {
          f.focus();
        } catch (b) {
        }
        e.focus();
        a.blur();
        return a;
      },
      _openPopunderFF: function (a) {
        var b;
        setTimeout(function () {
          b = this._openPopup(a);
          'about:blank' == a && (this.prepop = b);
        }.bind(this), 0);
        setTimeout(function () {
          var c = e.open('about:blank', '_self');
          c && !c.closed && c.focus();
        }, 0);
        return true;
      },
      _getPopunderCRResident: function (a) {
        var b = p.width, c = p.height;
        return '<body>		<script>		s1i=0;s2i=0;dc=0;focuscount=0;		window.resizeTo(20,20); 		function posred(){window.resizeTo(1,1);if (window.screenY>100) window.moveTo(0,0); else window.moveBy(' + p.width + ',' + p.height + ")};		function dance(){dc++;if (dc<3) return !1;if (s1i==0 ){s1i=window.setInterval(function(){ posred(); }, 50);}posred();window.clearInterval(s2i);document.onmousemove=null;};		document.onmousemove=dance;		function phash(){return window.screenX+','+window.screenY+','+window.outerWidth+','+window.outerHeight};		phashc=phash();s2i=setInterval(function(){if (phashc!=phash()) {dance();phashc=phash()}; },100);		var deploy=function()		{			dc=0;window.clearInterval(s1i);window.clearInterval(s2i);document.onmousemove=null;			window.moveTo(0,0);			window.resizeTo(" + p.width + ',' + p.height + ");			if (window.name.match(/^https?:\\/\\//)) { window.location.replace(window.name); } else {window.name='ready';}		};window.onblur=deploy;window.onfocus=function(){window.focuscount=1};setTimeout(function(){if (window.focuscount==0) deploy();}, 1000);setTimeout(function(){if (window.name.match(/^https?:\\/\\//)) deploy();}, " + a + ')</script>';
      },
      _getPopunderCROptionsString: function () {
        var a = p.width, b = 0;
        e.MSInputMethodContext && f.documentMode && (a -= 200, b -= 200);
        a = 'popup=1,top=' + b + ',left=' + a + ',width=5,height=5';
        this.settings.openernull && (a += ',noopner');
        return a;
      },
      _openPopunderCRPre: function (a) {
        var b = this._getPopunderCRResident(a);
        a = this.iframewin.open('about:blank', '', this._getPopunderCROptionsString());
        if (this.settings.openernull)
          try {
            a.opener = null;
          } catch (c) {
          }
        try {
          a.document.open(), a.document.write(b), a.document.close();
        } catch (c) {
        }
        return a;
      },
      _openPopunderCRPost: function (a) {
        'ready' == this.prepop.name ? this.prepop.location.replace(a) : this.prepop.name = a;
      },
      _getMinipopStatus: function (a) {
        if (!a || a.closed || !a.location)
          return 'closed';
        try {
          var b = a.name;
        } catch (c) {
          b = 'error';
        }
        return 'error' == b ? 'success' : '' == b ? 'waiting' : 'ready' == b ? 'prepopready' : 'redirecting';
      },
      _openPopunderCR: function (a, b) {
        var c = this._getPopunderCRResident(b);
        var d = this.iframewin.open('about:blank', a, this._getPopunderCROptionsString());
        if (this.settings.openernull)
          try {
            d.opener = null;
          } catch (g) {
          }
        try {
          d.document.open(), d.document.write(c), d.document.close();
        } catch (g) {
        }
        return d;
      },
      _openPopunderIE11: function (a) {
        this.tw = this._openPopup(a);
        this.focusInterval && clearInterval(this.focusInterval);
        this.runs = 0;
        this.focusInterval = setInterval(function () {
          try {
            this.tw && (this.tw.blur(), this.tw.opener.focus(), e.self.focus(), e.focus(), f.focus());
          } catch (b) {
          }
          this.runs++;
          10 < this.runs && this.focusInterval && clearInterval(this.focusInterval);
        }.bind(this), 100);
        return this.tw;
      },
      _detectBrowser: function (a) {
        var b, c;
        var d = 'desktop';
        if (c = a.match(/^Mozilla\/5\.0 \([^\)]+\) AppleWebKit\/[0-9\.]+ \(KHTML, like Gecko\) Chrome\/([0-9]+)[0-9\.]+ Safari\/[0-9\.]+$/)) {
          var g = 'chrome';
          var h = c[1];
        }
        if (c = a.match(/(Firefox|OPR)\/([0-9]+)/))
          g = c[1].toLowerCase(), h = c[2];
        if (c = a.match(/rv:([0-9]+)\.0\) like Gecko/))
          g = 'msie', h = c[1];
        if (c = a.match(/MSIE ([0-9]+)/))
          g = 'msie', h = c[1];
        a.match(/Windows NT/) && (b = 'windows');
        if (c = a.match(/([0-9]+)(_([0-9]+)){0,} like Mac OS X/))
          b = 'ios', g = 'safari', h = c[1], d = 'mobile';
        if (c = a.match(/(CrOS)\/([0-9]+)/))
          g = 'chrome', h = c[2], d = 'mobile';
        if (c = a.match(/(Edge?)\/([0-9]+)/))
          g = c[1].toLowerCase(), h = c[2];
        if (c = a.match(/\(KHTML, like Gecko\) Version\/([0-9]+)/))
          g = 'safari', h = c[1];
        a.match(/Macintosh; Intel Mac OS X /) && (b = 'macosx');
        a.match(/Android|like Mac OS X|Mobile|Phone/) && (d = 'mobile');
        a.match(/^Mozilla\/5\.0 \(Linux; Android/) && (b = 'android');
        return {
          o: b,
          b: g,
          v: h,
          f: d,
          i: e != e.top
        };
      },
      _getBrowserCapabilities: function () {
        var a = this._detectBrowser(navigator.userAgent), b = false, c = true, d = true;
        punderminipop = false;
        'desktop' == a.f ? ('chrome' == a.b && (b = true), 'firefox' == a.b && (b = true), 'msie' == a.b && 11 > a.v && (b = true), 'msie' == a.b && 11 == a.v && (b = true), 'safari' == a.b && (b = true), 'edg' == a.b && (b = true)) : d = c = false;
        1 == a.i && (d = false);
        punderminipop = 'msie' == a.b && 11 == a.v || 'edg' == a.b || 'chrome' == a.b || 'firefox' == a.b && 85 <= a.v;
        return {
          env: a,
          popup: c,
          popunder: b,
          tabup: true,
          tabunder: d,
          punderminipop: punderminipop
        };
      },
      _openPopunder: function (a, b) {
        var c = this.cap.env;
        return 'desktop' == this.cap.env.f ? this.cap.punderminipop ? (this.minipopmon = true, this._openPopunderCR(a, b)) : 'firefox' == this.cap.env.b ? this._openPopunderFF(a) : 'msie' == this.cap.env.b && 11 > this.cap.env.v ? this._openPopunderBlur(a) : 'safari' == this.cap.env.b ? this._openPopunderSafari(a) : 'edge' == this.cap.env.b && this.cap.tabunder ? this._openTabunder(a) : this._openPopup(a) : this.cap.tabunder ? this._openTabunder(a) : this._openTabup(a);
      },
      _prepopOpen: function (a) {
        this.prepop = this.cap.punderminipop ? this._openPopunderCRPre(a) : this._openPopunder('about:blank');
      },
      _prepopReady: function () {
        return !(!this.prepop || this.prepop.closed || !this.prepop.location);
      },
      _prepopUse: function (a, b) {
        b.onbeforeopen instanceof Function ? a = b.onbeforeopen(a) : this.settings.onbeforeopen instanceof Function && (a = this.settings.onbeforeopen(a));
        try {
          if (this.cap.punderminipop ? this._openPopunderCRPost(a) : this.prepop.location.replace(a), this.prepop = false, b.onafteropen instanceof Function)
            b.onafteropen(a);
          else if (this.settings.onafteropen instanceof Function)
            this.settings.onafteropen(a);
        } catch (c) {
          return false;
        }
        return true;
      },
      _prepopClose: function () {
        try {
          this.prepop.close();
        } catch (a) {
          return false;
        }
        return true;
      },
      _openAd: function (a, b) {
        b.onbeforeopen instanceof Function ? a = b.onbeforeopen(a) : this.settings.onbeforeopen instanceof Function && (a = this.settings.onbeforeopen(a));
        var c = b.type;
        'popunder' != c || this.cap.popunder || (c = 'tabup');
        'tabunder' != c || this.cap.tabunder || (c = 'popup');
        'popup' != c || this.cap.popup || (c = 'tabup');
        'tabup' != c || this.cap.tabup || (c = 'popup');
        var d;
        'popunder' == c ? d = this._openPopunder(a, b.crtimeout || this.settings.crtimeout) : 'popup' == c ? d = this._openPopup(a) : 'tabup' == c ? d = this._openTabup(a) : 'tabunder' == c && (d = this._openTabunder(a));
        if (b.onafteropen instanceof Function)
          b.onafteropen();
        else if (this.settings.onafteropen instanceof Function)
          this.settings.onafteropen();
        return d;
      },
      abortPop: function () {
        this._prepopReady() && this._prepopClose();
        this.catchalldiv && this._removeCatchAllDiv();
        this.settings.prepop = false;
      },
      _minipopCheck: function (a) {
        if (this.minipopmon) {
          var b = this._getMinipopStatus(this.minipopmontw);
          if ('prepopready' == b || 'success' == b || 'redirecting' == b) {
            if ('redirecting' == b || 'success' == b)
              this.urls.shift(), this.minipopmon = false;
          } else
            'closed' == b && (this.minipopmon = false);
          a && setInterval(this._minipopCheck.bind(this), 100, true);
        }
      },
      _onExecute: function (a) {
        a = a || e.event;
        if ('click' == a.type || 'mouseup' == a.type || 'mousedown' == a.type) {
          var b = false;
          'which' in a ? b = 3 == a.which : 'button' in a && (b = 2 == a.button);
          if (b)
            return false;
        }
        if (this.userActivation)
          try {
            if (!e.navigator.userActivation.isActive && !this.iframewin.navigator.userActivation.isActive)
              return false;
          } catch (c) {
          }
        this._minipopCheck(false);
        if (0 == this.urls.length && this.settings.prepop && !this._prepopReady())
          return this.settings.prepop = false, this._prepopOpen(this.settings.crtimeout), true;
        this.catchalldiv && 0 == this.urls.length && this._removeCatchAllDiv();
        if (0 == this.urls.length)
          return false;
        a.preventDefault && a.preventDefault();
        a.stopImmediatePropagation && a.stopImmediatePropagation();
        this.settings.prepop = false;
        a = this.urls[0];
        this.minipopmon = false;
        a = this._openAd(a.url, a.options);
        this.minipopmon ? (this.minipopmontw = a, this._minipopCheck(true), this.catchalldiv && 2 > this.urls.length && this._removeCatchAllDiv()) : (a || this.settings.ignorefailure) && this.urls.shift();
        0 == this.urls.length && (this._unblockWindowOpen(), this.catchalldiv && this._removeCatchAllDiv());
      },
      _userActivationHandler: function () {
        var a = false;
        try {
          a = e.navigator.userActivation.isActive;
        } catch (b) {
        }
        if (!a)
          try {
            a = top.navigator.userActivation.isActive;
          } catch (b) {
          }
        if (!a)
          try {
            a = this.iframewin.navigator.userActivation.isActive;
          } catch (b) {
          }
        a && this._onExecute({ type: 'uah' });
      },
      _onMouseDownHandler: function (a) {
        a = a.target || a.srcElement || a.toElement;
        if (this._prepopReady())
          return false;
        var b = false;
        if (this.minipopmontw) {
          var c = this._getMinipopStatus(this.minipopmontw);
          'waiting' == c && (b = true);
          'prepopready' == c && (b = true);
        }
        if (b || 'A' != a.tagName)
          return false;
        if (a.popjsoriginalhref && 0 == this.urls.length)
          return a.href = a.popjsoriginalhref, delete a.popjsoriginalhref, a.target = '_blank', false;
        if ('_blank' != a.target && 0 < f.getElementsByTagName('BASE').length && '_blank' != (f.getElementsByTagName('BASE')[0].target || '').toLowerCase() || 0 == this.urls.length)
          return false;
        a.popjsoriginalhref = a.href;
        a.href = '#';
        a.target = '';
      },
      _onBeforeUnloadHandler: function () {
        this._prepopReady() && this._prepopClose();
      },
      _isCatchAllNeeded: function () {
        function a(b) {
          b = f.getElementsByTagName(b);
          for (var c = 0; c < b.length; c++)
            if (100 < (b.item(c).clientHeight || b.item(c).offsetHeight || 0) || 100 < (b.item(c).clientWidth || b.item(c).offsetWidth || 0))
              return true;
          return false;
        }
        return a('IFRAME') || a('VIDEO') || a('OBJECT');
      },
      _removeCatchAllDiv: function () {
        this.catchalldiv.parentNode.removeChild(this.catchalldiv);
        delete this.catchalldiv;
      },
      _createCatchAllDiv: function () {
        if (0 == f.getElementsByTagName('body').length)
          return false;
        var a = f.createElement('div');
        a.style = 'position: fixed; display: block; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0); z-index: 300000;';
        f.addEventListener ? ('desktop' != this.cap.env.f && 'ios' == this.cap.env.o && a.addEventListener('touchend', this._onExecute.bind(this)), a.addEventListener('click', this._onExecute.bind(this))) : a.attachEvent('onclick', this._onExecute.bind(this));
        f.getElementsByTagName('body')[0].appendChild(a);
        this.catchalldiv = a;
        return true;
      },
      _deployCatchAll: function () {
        this.settings.catchalldiv && (this._isCatchAllNeeded() && !this.catchalldiv ? this._createCatchAllDiv() : this.catchallmon || (this.catchallmon = setInterval(function () {
          this.catchalldiv ? clearInterval(this.catchallmon) : this._isCatchAllNeeded() && (clearInterval(this.catchallmon), this._createCatchAllDiv());
        }.bind(this), 500)));
      },
      _blockWindowOpen: function () {
        e.open = new Proxy(e.open, {
          apply: function (a, b, c) {
            return false;
          }
        });
      },
      _unblockWindowOpen: function () {
        e.open = this.originalwindowopen;
      },
      init: function (a) {
        if (this._cookieLockGet())
          return false;
        var b = f.createElement('iframe');
        b.src = 'javascript:false';
        b.style.display = 'none';
        b.width = '0';
        b.height = '0';
        var c = f.getElementsByTagName('script')[0];
        f.getElementsByTagName('script')[0].parentNode.insertBefore(b, f.getElementsByTagName('script')[0]);
        this.iframewin = b.contentWindow || b;
        this.originalwindowopen = this.iframewin.open;
        this.userActivation = true;
        try {
          this.iframewin.navigator.userActivation.isActive;
        } catch (d) {
          this.userActivation = false;
        }
        this.cap = this._getBrowserCapabilities();
        this.urls = [];
        this.settings = {};
        this.settings.prepop = (a.prepop || false) && this.cap.popunder;
        this.settings.crtimeout = a.crtimeout || 60000;
        this.settings.targetblankhandler = a.targetblankhandler || true;
        this.settings.onbeforeopen = a.onbeforeopen;
        this.settings.onafteropen = a.onafteropen;
        this.settings.ignorefailure = a.ignorefailure || false;
        this.settings.catchalldiv = a.catchalldiv || !this.userActivation;
        this.minipopmon = false;
        this.settings.openernull = true;
        this._deployCatchAll();
        this.settings.prepop && this._blockWindowOpen();
        this.userActivation && setInterval(this._userActivationHandler.bind(this), 50);
        e.addEventListener ? (e.addEventListener('touchend', this._onExecute.bind(this), true), e.addEventListener('click', this._onExecute.bind(this), true), this.settings.targetblankhandler && e.addEventListener('mousedown', this._onMouseDownHandler.bind(this), true), this.settings.prepop && e.addEventListener('beforeunload', this._onBeforeUnloadHandler.bind(this), true)) : (e.attachEvent('onclick', this._onExecute.bind(this)), this.settings.targetblankhandler && e.attachEvent('onmousedown', this._onMouseDownHandler.bind(this)), this.settings.prepop && e.attachEvent('onbeforeunload', this._onBeforeUnloadHandler.bind(this)));
        this.iframewin.addEventListener ? (this.iframewin.addEventListener('touchend', this._onExecute.bind(this), true), this.iframewin.addEventListener('click', this._onExecute.bind(this), true), this.settings.targetblankhandler && this.iframewin.addEventListener('mousedown', this._onMouseDownHandler.bind(this), true), this.settings.prepop && this.iframewin.addEventListener('beforeunload', this._onBeforeUnloadHandler.bind(this), true)) : (this.iframewin.attachEvent('onclick', this._onExecute.bind(this)), this.settings.targetblankhandler && this.iframewin.attachEvent('onmousedown', this._onMouseDownHandler.bind(this)), this.settings.prepop && this.iframewin.attachEvent('onbeforeunload', this._onBeforeUnloadHandler.bind(this)));
      },
      addUrl: function (a, b) {
        if (!a.match(/^https?:\/\//) || !this.cap)
          return false;
        var c = false;
        this._prepopReady() && ('popunder' == b.type ? this._prepopUse(a, b) && (c = true) : this._prepopClose());
        c || this.settings.ignorefailure || (this._blockWindowOpen(), this.urls.push({
          url: a,
          options: b
        }), this._deployCatchAll());
      }
    }, J = {
      a: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      encode: function (a) {
        var b = '', c = 0;
        for (a = J.b(a); c < a.length;) {
          var d = a.charCodeAt(c++);
          var g = a.charCodeAt(c++);
          var h = a.charCodeAt(c++);
          var l = d >> 2;
          d = (3 & d) << 4 | g >> 4;
          var m = (15 & g) << 2 | h >> 6;
          var q = 63 & h;
          isNaN(g) ? m = q = 64 : isNaN(h) && (q = 64);
          b = b + this.a.charAt(l) + this.a.charAt(d) + this.a.charAt(m) + this.a.charAt(q);
        }
        return b;
      },
      decode: function (a) {
        var b = '', c = 0;
        for (a = a.replace(/[^A-Za-z0-9\+\/=]/g, ''); c < a.length;) {
          var d = this.a.indexOf(a.charAt(c++));
          var g = this.a.indexOf(a.charAt(c++));
          var h = this.a.indexOf(a.charAt(c++));
          var l = this.a.indexOf(a.charAt(c++));
          d = d << 2 | g >> 4;
          g = (15 & g) << 4 | h >> 2;
          var m = (3 & h) << 6 | l;
          b += String.fromCharCode(d);
          64 != h && (b += String.fromCharCode(g));
          64 != l && (b += String.fromCharCode(m));
        }
        return J.c(b);
      },
      b: function (a) {
        a = a.replace(/\r\n/g, '\n');
        for (var b = '', c = 0; c < a.length; c++) {
          var d = a.charCodeAt(c);
          128 > d ? b += String.fromCharCode(d) : 127 < d && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128));
        }
        return b;
      },
      c: function (a) {
        var b = '', c = 0;
        for (c1 = c2 = 0; c < a.length;) {
          var d = a.charCodeAt(c);
          128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (c2 = a.charCodeAt(c + 1), b += String.fromCharCode((31 & d) << 6 | 63 & c2), c += 2) : (c2 = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), b += String.fromCharCode((15 & d) << 12 | (63 & c2) << 6 | 63 & c3), c += 3);
        }
        return b;
      }
    };
  !function (a, b, c) {
    'undefined' != typeof module && module.exports ? module.exports = c(b, a) : 'function' == typeof define && define.amd ? define('detect-zoom', function () {
      return c(b, a);
    }) : a[b] = c(b, a);
  }(e, 'detectZoom', function () {
    var a = function () {
        return e.devicePixelRatio || 1;
      }, b = function () {
        return {
          zoom: 1,
          devicePxPerCssPx: 1
        };
      }, c = function () {
        var k = Math.round(p.deviceXDPI / p.logicalXDPI * 100) / 100;
        return {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      }, d = function () {
        var k = Math.round(f.documentElement.offsetHeight / e.innerHeight * 100) / 100;
        return {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      }, g = function () {
        var k = Math.round(e.outerWidth / e.innerWidth * 100) / 100;
        return {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      }, h = function () {
        var k = Math.round(f.documentElement.clientWidth / e.innerWidth * 100) / 100;
        return {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      }, l = function () {
        var k = (90 == Math.abs(e.orientation) ? p.height : p.width) / e.innerWidth;
        return {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      }, m = function () {
        var k = f.createElement('div');
        k.innerHTML = '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0';
        k.setAttribute('style', 'font: 100px/1em sans-serif !important; -webkit-text-size-adjust: none !important; text-size-adjust: none !important; height: auto !important; width: 1em !important; padding: 0 !important; overflow: visible !important;');
        var n = f.createElement('div');
        n.setAttribute('style', 'width:0 !important; height:0 !important; overflow:hidden !important; visibility:hidden !important; position: absolute !important;');
        n.appendChild(k);
        f.body.appendChild(n);
        k = 1000 / k.clientHeight;
        return k = Math.round(100 * k) / 100, f.body.removeChild(n), {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      }, q = function () {
        var k = A('min--moz-device-pixel-ratio', '', 0, 10, 20, 0.0001);
        return k = Math.round(100 * k) / 100, {
          zoom: k,
          devicePxPerCssPx: k
        };
      }, E = function () {
        return {
          zoom: q().zoom,
          devicePxPerCssPx: a()
        };
      }, I = function () {
        var k = e.top.outerWidth / e.top.innerWidth;
        return k = Math.round(100 * k) / 100, {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      }, A = function (k, n, w, C, x, V) {
        function L(y, M, N) {
          var K = (y + M) / 2;
          return 0 >= N || M - y < V ? K : O('(' + k + ':' + K + n + ')').matches ? L(K, M, N - 1) : L(y, K, N - 1);
        }
        var O, P, F, z;
        e.matchMedia ? O = e.matchMedia : (P = f.getElementsByTagName('head')[0], F = f.createElement('style'), P.appendChild(F), z = f.createElement('div'), z.className = 'mediaQueryBinarySearch', z.style.display = 'none', f.body.appendChild(z), O = function (y) {
          F.sheet.insertRule('@media ' + y + '{.mediaQueryBinarySearch {text-decoration: underline} }', 0);
          y = 'underline' == getComputedStyle(z, null).textDecoration;
          return F.sheet.deleteRule(0), { matches: y };
        });
        w = L(w, C, x);
        return z && (P.removeChild(F), f.body.removeChild(z)), w;
      }, B = function () {
        var k = b;
        return isNaN(p.logicalXDPI) || isNaN(p.systemXDPI) ? e.navigator.msMaxTouchPoints ? k = d : !e.chrome || e.opera || 0 <= navigator.userAgent.indexOf(' Opera') ? 0 < Object.prototype.toString.call(e.HTMLElement).indexOf('Constructor') ? k = h : 'orientation' in e && 'webkitRequestAnimationFrame' in e ? k = l : 'webkitRequestAnimationFrame' in e ? k = m : 0 <= navigator.userAgent.indexOf('Opera') ? k = I : e.devicePixelRatio ? k = E : 0.001 < q().zoom && (k = q) : k = g : k = c, k;
      }();
    return {
      zoom: function () {
        return B().zoom;
      },
      device: function () {
        return B().devicePxPerCssPx;
      }
    };
  });
  'use strict';
  var R = '/c', S = '_pop', Q = '_pao';
  J = e.Base64;
  var W = f.currentScript, G = null, u = {
      log: function (a) {
      }
    }, r = {
      _set: function (a, b, c, d, g) {
        var h = c || '';
        h && ('number' === typeof h ? (c = new Date(), c.setTime(c.getTime() + 1000 * h)) : c = h, h = ';expires=' + c.toUTCString());
        f.cookie = a + '=' + escape('' + b) + h + (g ? ';domain=' + g : '') + ';path=' + (d || '/');
      },
      _get: function (a) {
        return (a = f.cookie.match(new RegExp(a + '=[^;]+', 'i'))) ? decodeURIComponent(a[0].split('=')[1]) : null;
      },
      _remove: function (a) {
        this._set(a, 0, new Date(0));
      }
    }, t = {
      _available: null,
      _isAvailable: function () {
        if (null === this._available)
          try {
            e.localStorage.setItem('localStorageTest', 1), e.localStorage.removeItem('localStorageTest'), this._available = true;
          } catch (a) {
            this._available = false;
          }
        return this._available;
      },
      _set: function (a, b) {
        this._isAvailable() ? e.localStorage.setItem(a, b) : r._set(a, b);
      },
      _get: function (a) {
        try {
          return this._isAvailable() ? e.localStorage.getItem(a) : r._get(a);
        } catch (b) {
          return null;
        }
      },
      _remove: function (a) {
        this._isAvailable() ? e.localStorage.removeItem(a) : r._remove(a);
      }
    };
  var H = {
    _inventory: {},
    _config: {
      _siteId: 0,
      _minBid: 0,
      _popPerDay: 0,
      _popDelay: 0,
      _inpagePerDay: 0,
      _inpageDelay: 0,
      _defaultDelay: 0,
      _blockedCountries: false,
      _default: false,
      _defaultType: 'popunder',
      _defaultPerDay: 0,
      _useOverlay: true,
      _trafficType: 0,
      _popunderFailover: 'tabup',
      _prepop: null === r._get('_popprepop'),
      _adscorebp: null,
      _adscorept: null,
      _adscoreak: 'QpUJAAAAAAAAGu98Hdz1l_lcSZ2rY60Ajjk9U1c'
    },
    _init: function () {
      var a = this;
      this._loadConfig();
      this._isDelayBetweenExpired() && D.init({
        prepop: this._config._prepop,
        catchalldiv: this._config._useOverlay,
        onafteropen: function () {
          a._updateFiredCount();
        }
      });
      this._adscoreDeploy();
    },
    _adscoreDeploy: function () {
      var a = this, b = 0, c = 0, d = this._config;
      if (a._config._adscorebp)
        a._checkInventory(a._config._adscorebp);
      else if ('function' === typeof AdscoreInit) {
        u.log('adscore already exists');
        try {
          AdscoreInit(a._config._adscoreak, {
            sub_id: this._config._siteId,
            callback: function (g) {
              a._checkInventory(g.signature || 'e2 ' + g.error);
            }
          });
        } catch (g) {
          a._checkInventory('e4 ' + g.message);
        }
      } else
        b = setInterval(function () {
          var g = [
            're',
            'adsco'
          ];
          g.push(g[1][3]);
          var h = 'https://' + g.reverse().join('.') + '/';
          if (f.body) {
            clearInterval(b);
            var l = f.createElement('script');
            l.src = h;
            try {
              l.onerror = function () {
                l.src == h ? l.src = 'https://2734478852/a.js' : (clearTimeout(c), a._checkInventory('e1'));
              };
            } catch (m) {
            }
            l.onload = function () {
              clearTimeout(c);
              try {
                AdscoreInit(a._config._adscoreak, {
                  sub_id: this._config._siteId,
                  callback: function (m) {
                    a._checkInventory(m.signature || 'e2 ' + m.error);
                  }
                });
              } catch (m) {
                a._checkInventory('e4 ' + m.message);
              }
            };
            f.body.appendChild(l);
            c = setTimeout(function () {
              a._checkInventory('e3');
            }, 5000);
          }
        }, 100);
    },
    _checkInventory: function (a) {
      u.log('CI ' + a);
      var b = this, c = 0, d = this._config, g, h;
      this._config._adscorept && this._config._adscorept(a);
      try {
        clearTimeout(G);
      } catch (l) {
      }
      G = setTimeout(function () {
        u.log('Retimer fired');
        b._adscoreDeploy();
      }, 600000);
      u.log('Retimer deployed ' + G);
      c = setInterval(function () {
        var l = '//blockadsnot.com' + R;
        if (f.body) {
          clearInterval(c);
          h = {
            _: encodeURIComponent(a),
            v: 4,
            sfCucFGY: this._config._siteId,
            UgIBTzpY: this._config._minBid,
            uxGvoTNk: this._config._popPerDay + ',' + this._config._inpagePerDay,
            NgYApKlj: this._config._blockedCountries || '',
            nxZCamlg: encodeURIComponent(f.referrer),
            s: b._getScreenData()
          };
          for (g in h)
            h.hasOwnProperty(g) && (l += (-1 < l.indexOf('?') ? '&' : '?') + g + '=' + (h[g] || ''));
          var m = f.createElement('script');
          m.src = l;
          try {
            m.onerror = function () {
              D.abortPop();
              f.currentScript.onerror();
            };
          } catch (q) {
          }
          f.body.appendChild(m);
        }
      }, 100);
    },
    _parseFloatingBanner: function (a) {
      0 < this._config._inpageDelayPerDay && this._getFiredCount('inpage') >= this._config._inpageDelayPerDay ? u.log('Floating aborted due to delay') : this._isDelayBetweenExpired('inpage') && (this._updateFiredCount('inpage'), U(a.url, a.position, a.width, a.height, a.clickurl));
    },
    _parseInventory: function (a) {
      this._inventory = a || {};
      this._preparePop();
    },
    _preparePopDefault: function () {
      if (false === this._config._default || '' == this._config._default || 0 < this._config._defaultPerDay && this._getFiredCount('fallback') >= this._config._defaultPerDay)
        u.log('Default aborted due to delay or nonset'), D.abortPop(), r._set('_popprepop', 1, 21600);
      else {
        var a = this._config._popunderFailover;
        D._prepopReady() && (a = 'popunder');
        if (/^https?:\/\//.test(this._config._default))
          this._isDelayBetweenExpired() && D.addUrl(this._config._default, {
            type: a,
            onbeforeopen: function (c) {
              try {
                clearTimeout(G);
              } catch (d) {
              }
              return c;
            }
          });
        else {
          this._updateFiredCount('fallback');
          a = J.decode(this._config._default);
          a = ('<script>' + a + '</script>').replace(/^\s*<script[^>]*>|<\/script>\s*$/g, '');
          var b = f.createElement('script');
          b.type = 'text/javascript';
          b.text = a;
          f.body.appendChild(b);
        }
      }
    },
    _preparePopInventory: function () {
      var a = this;
      0 < this._config._popPerDay && this._getFiredCount() >= this._config._popPerDay ? u.log('Pop aborted due to popPerDay') : this._isDelayBetweenExpired() && D.addUrl(this._inventory.url, {
        type: this._inventory.type,
        onbeforeopen: function (b) {
          try {
            clearTimeout(G);
          } catch (c) {
          }
          return b + '&s=' + a._getScreenData() + '&v=&m=';
        }
      });
    },
    _getScreenData: function () {
      try {
        var a = e.detectZoom.zoom();
        return [
          p.width,
          p.height,
          a,
          p.width * a,
          p.height * a,
          e.self != e.top ? '1' : '0'
        ].join();
      } catch (b) {
        return '';
      }
    },
    _getFiredCount: function (a) {
      var b = '_popfired' + (a || ''), c = b + '_expires';
      c = t._isAvailable() ? t._get('_spop' + c) : r._get(c);
      var d = 0;
      c && (new Date().getTime() < c && (d = t._isAvailable() ? t._get('_spop' + b) : r._get(b)), d = parseInt(d, 10) || 0, isNaN(d) && (d = 0));
      u.log('getFiredCount for ' + (a || '') + ' is ' + d);
      return d;
    },
    _updateFiredCount: function (a) {
      u.log('Updating fired count for ' + (a || ''));
      var b = '_popfired' + (a || ''), c = b + '_expires', d = t._isAvailable() ? t._get('_spop' + c) : r._get(c), g = d ? d : new Date().getTime() + 86400000;
      d = new Date().getTime() < d ? this._getFiredCount(a) : 0;
      t._isAvailable() && (t._set('_spop' + b, d + 1), t._set('_spop' + c, g), t._set('_spoplastOpenAt', new Date()));
      r._set(b, d + 1, new Date(g));
      r._set(c, new Date(g).toUTCString(), new Date(g));
      r._set('lastOpenAt_' + (a || ''), new Date().getTime(), 86400);
    },
    _getLastOpenAt: function (a) {
      return (a = t._isAvailable() ? t._get('_spoplastOpenAt_' + (a || '')) : r._get('lastOpenAt_' + (a || ''))) ? new Date(a) : null;
    },
    _isDelayBetweenExpired: function (a, b) {
      var c = this._getLastOpenAt(a);
      return !c || new Date(c.getTime() + 1000 * (b || this._config._popDelay)).getTime() < new Date().getTime();
    },
    _preparePop: function () {
      '' != this._inventory.url ? (this._preparePopInventory(), r._remove('_popprepop')) : this._preparePopDefault();
    },
    _loadConfig: function () {
      var a = e[S] || [], b = this._config, c;
      for (c = 0; c < a.length; c++) {
        var d = a[c][0];
        var g = a[c][1];
        switch (a[c][0]) {
        case 'siteId':
        case 'delayBetween':
        case 'defaultPerIP':
        case 'trafficType':
          if (g = parseInt(g, 10), isNaN(g))
            continue;
        }
        switch (a[c][0]) {
        case 'siteId':
          this._config._siteId = g;
          break;
        case 'minBid':
          this._config._minBid = g;
          break;
        case 'popundersPerIP':
          this._config._popPerDay = g;
          break;
        case 'delayBetween':
          this._config._popDelay = g;
          break;
        case 'blockedCountries':
          this._config._blockedCountries = g;
          break;
        case 'default':
          this._config._default = g;
          break;
        case 'defaultType':
          this._config._defaultType = g;
          break;
        case 'defaultPerIP':
          this._config._defaultPerDay = g;
          break;
        case 'topmostLayer':
          this._config._useOverlay = g;
          break;
        case 'trafficType':
          this._config._trafficType = g;
          break;
        case 'popunderFailover':
          this._config._popunderFailover = g;
          break;
        case 'prepop':
          this._config._prepop = g;
          break;
        case 'adscorebp':
          this._config._adscorebp = g;
          break;
        case 'adscorept':
          this._config._adscorept = g;
          break;
        case 'adscoreak':
          this._config._adscoreak = g;
          break;
        case 'inpagePerIP':
          this._config._inpagePerDay = g;
          break;
        case 'inpageDelayBetween':
          this._config._inpageDelay = g;
          break;
        case 'defaultDelayBetween':
          this._config._defaultDelay = g;
        }
      }
    }
  };
  for (var v in e)
    try {
      if (v.match(/[0-9a-f]{32,32}/) && e[v][0] && e[v][0][0] && 'siteId' == e[v][0][0]) {
        S = v;
        delete e._pop;
        break;
      }
    } catch (a) {
    }
  v = '';
  for (var X = 10 + Math.floor(10 * Math.random()), T = 0; T < X; T++)
    v += 'abcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(26 * Math.random()));
  R = '/' + v;
  Q = v;
  e._pao = e[Q] = {
    parse: function (a) {
      H._parseInventory(a);
    },
    fbparse: function (a) {
      H._parseFloatingBanner(a);
    }
  };
  setInterval(function () {
    e._pao = e[Q] = {
      parse: function (a) {
        H._parseInventory(a);
      },
      fbparse: function (a) {
        H._parseFloatingBanner(a);
      }
    };
  }.bind(this), 100);
  H._init();
}(window, window.document, window.screen));
