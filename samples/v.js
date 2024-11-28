// https://use2-assets.a-mo.net/js/v.js#__m=false
! function () {
    "use strict";

    function t(t) {
        void 0 === t && (t = "");
        let n = qt.currentScript;
        if (null != n) return n;
        let i = qt.scripts;
        if (null == i) return null;
        for (let n = 0, s = i.length; n < s; n++) {
            let s = i[n];
            if (e(s.src + "", Ft + "/" + t)) return s
        }
        return null
    }

    function n(t, n) {
        Wt.forEach((i => {
            try {
                i(new Kt(t, n))
            } catch (t) {}
        }))
    }

    function i(t, i) {
        return void 0 === i && (i = !1),
            function () {
                for (var e = arguments.length, s = new Array(e), r = 0; r < e; r++) s[r] = arguments[r];
                try {
                    return t(...s)
                } catch (t) {
                    i || n(dn(t), {
                        C: "sWF"
                    })
                }
                return null
            }
    }

    function e(t, n) {
        return -1 !== function (t, n) {
            if ("string" != typeof n) return -1;
            if (null == t) return -1;
            let i = String(t);
            return 0 === i.length ? -1 : i.indexOf(n)
        }(t, n)
    }

    function s(t) {
        return qt.createElementNS(hn.namespaceURI, t)
    }

    function r(t) {
        return Math.floor(Math.random() * t)
    }

    function l(t) {
        if (null == t) return;
        let n = t.parentElement;
        null != n && n.removeChild(t)
    }

    function h(t) {
        return new Promise(t)
    }

    function a(t) {
        return null == t ? [] : "function" == typeof Array.isArray && Array.isArray(t) ? t : "function" == typeof Array.from ? Array.from(t) : an.call(t)
    }

    function o(t, i) {
        try {
            return null == t ? [] : a(t.querySelectorAll(i + "," + i.toLowerCase()))
        } catch (t) {
            return n(dn(t), {
                C: "qsAll"
            }), []
        }
    }

    function c() {
        return Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 10)).toString(36)
    }

    function u() {
        return [c(), c(), c()].join("").slice(0, 18)
    }

    function d(t) {
        let n = [];
        return Object.keys(t).forEach((i => {
            var e;
            null != t[i] && n.push(on(i) + "=" + on(String(null != (e = t[i]) ? e : "")))
        })), n.join("&")
    }

    function p(t) {
        if (null == t || t.length < 2) return {};
        let n = {};
        return t.replace(/^[\?#]/, "").split("&").forEach((t => {
            let [i, e] = t.split("=");
            null != i && null != e && (n[Bt(i)] = Bt(e))
        })), n
    }

    function f(t, n) {
        return null == t ? nn("null", {
            error: Zt(t)
        }) : t instanceof Error && (null == t.message || "" === t.message) ? nn(n + ":") : t instanceof Error ? t : nn(n + ":" + String(t))
    }

    function v() {
        return "undefined" != typeof performance && performance.now ? performance.now() : Date.now()
    }

    function g(t) {
        return Promise.reject(t)
    }

    function m(t) {
        return Promise.resolve(t)
    }

    function b(t, i, e) {
        if (null != t) try {
            t.__defineGetter__(i, e)
        } catch (t) {
            n(dn(t), {
                C: "dget"
            })
        }
    }

    function x() {
        return Jt && null != Jt.ancestorOrigins ? a(Jt.ancestorOrigins) : []
    }

    function w() {
        if ($t === $t.top) return Jt.host;
        try {
            var t;
            let n = null == (t = $t.top) ? void 0 : t.location.host;
            if (null != n) return n
        } catch (t) {}
        let n = x();
        if (n.length > 0) {
            let t = n[n.length - 1];
            if (null != t) {
                try {
                    return y(t).host
                } catch (t) {}
                return t
            }
        }
        return ""
    }

    function y(t) {
        try {
            return new URL(t)
        } catch (n) {
            let i = qt.createElement("a");
            return i.href = t, i
        }
    }

    function k(t, n) {
        if (void 0 === n && (n = 0), null == t) return n;
        let i = typeof t;
        if ("number" === i) return t;
        if ("boolean" === i) return t ? 1 : 0;
        if ("string" !== i) return n;
        let e = parseInt(t, 10);
        return isNaN(e) ? n : e
    }

    function _(t, n) {
        return null != t && null != t.querySelector ? t.querySelector(n) : null
    }

    function E() {
        let t = !1;
        try {
            t = null == (null == top ? void 0 : top.location.href.length)
        } catch (n) {
            t = !0
        }
        return [qt.visibilityState, qt.hidden ? "h" : "v", qt.hasFocus() ? "f" : "b", t ? "3p" : "fi"].join(":")
    }

    function S(t, n, i) {
        if (null == t) return i;
        let e = t.getAttribute(n);
        return null != e ? e : i
    }

    function T(t, n, i, e) {
        void 0 === i && (i = qt), void 0 === e && (e = []);
        let s = i.createElement(t);
        return null != n && ("!" === n[0] ? A(s, "style", n.slice(1)) : s.className = n), e && e.length && e.forEach((t => {
            "string" != typeof t ? s.appendChild(t) : s.insertAdjacentHTML("beforeend", t)
        })), s
    }

    function A(t, n, i) {
        if (null != t) try {
            t.setAttribute(n, String(i))
        } catch (t) {}
    }

    function I(t, n) {
        null != t && null != n && Object.keys(n).forEach((i => {
            A(t, i, n[i])
        }))
    }

    function C(t, n) {
        [].concat(n).forEach((n => {
            t.appendChild(n)
        }))
    }

    function M(t) {
        if ("string" != typeof t) return 0;
        let n = t.split(":");
        if (3 !== n.length) return 1;
        let i = n[2].split(".")[0],
            e = 3600 * k(n[0]) + 60 * k(n[1]) + k(i);
        return isNaN(e) ? 0 : e
    }

    function D(t) {
        if ("string" == typeof t) return t.replace(/\(([^\):]+):(\d+:\d+)\)/g, "($2)").replace(/at \/[\S:]+:(\d+:\d+)/g, "at $1");
        if (t instanceof Error) return t.message + "\n" + D(t.stack);
        if (t instanceof ErrorEvent) return D(t.message + " @" + t.lineno + ":" + t.colno + " / " + t.type);
        if (t instanceof Event) return D(t.type);
        try {
            return JSON.stringify(t)
        } catch (t) {}
        return String(t)
    }

    function O(t) {
        return Math.round(100 * Math.random()) <= t
    }

    function j(t) {
        let n = String(t);
        return null != n.trim ? n.trim() : n.replace(/(?:^\s+|\s+$)/g, "")
    }

    function P(t, n) {
        return (t || []).concat(n || [])
    }

    function N(t) {
        if (null == t) return !1;
        try {
            let n = t.toString();
            return ! function (t, n) {
                let i = /\{([^\}]+)/.exec(Function.prototype.toString.toString());
                if (null == i || null == i[1]) return !1;
                let e = new RegExp(i[1].replace(/([\[\$\]])/g, "\\$1"));
                return -1 !== n.indexOf(t.name) && e.test(n)
            }(t, n) || !(pn.call(t) === t.toString() && t.toString === pn && t.toString.toString === pn && t.toString.toString.toString === pn)
        } catch (t) {
            return !1
        }
    }

    function L(t, n, i, e, s) {
        var r;
        if (void 0 === s && (s = !1), !s && (fn || !O(2))) return m(!0);
        fn = !0;
        let l = d({
            aid: null != (r = n.data().aid) ? r : "u",
            v: Vt,
            b: qt.domain,
            key: "//f",
            wv: "safari",
            k: "349f74a65abb730fa65d149a2be9696d",
            kp: "json"
        });
        return h(((s, r) => {
            let h = JSON.stringify(function (t, n, i, e) {
                    var s, r, l, h, a, o;
                    let c = {
                        t: null != (s = n.data().aid) ? s : "web",
                        i: 0,
                        a: "ortb",
                        ex: String(null != (r = n.data("_e")) ? r : ""),
                        s: "openrtb",
                        v: "ortb",
                        f: !0,
                        r: [{
                            i: 0,
                            t: "c",
                            s: 0,
                            b: t.adm,
                            h: "",
                            u: "string" == typeof t.adomain ? t.adomain : t.adomain ? t.adomain[0] : "",
                            H: {},
                            p: "initial"
                        }],
                        m: [],
                        e: i,
                        attr: null != (l = t.attr) ? l : [],
                        cat: null != (h = t.cat) ? h : [],
                        cid: t.cid,
                        vt: "web",
                        _p: 0,
                        sh: function () {
                            let t = [],
                                n = n => t.push(n);
                            try {
                                N(qt.createElement) && n("c"), N(Object.getOwnPropertyDescriptor) && n("o"), N(Object.getOwnPropertyDescriptors) && n("O"), N(XMLHttpRequest.prototype.open) && n("x"),
                                    function (t, n) {
                                        try {
                                            return null != N(t.__lookupGetter__(n)) || null != Object.getOwnPropertyDescriptor(t, n)
                                        } catch (t) {
                                            return !1
                                        }
                                    }(qt, "visibilityState") && n("v")
                            } catch (t) {}
                            return t
                        }(),
                        aw: 0 | Math.floor(null != (a = t.w) ? a : 0),
                        ah: 0 | Math.floor(null != (o = t.h) ? o : 0),
                        bid: t.id,
                        x: t.price,
                        h: String(t.crid)
                    };
                    if (null != e && "object" == typeof e) try {
                        c.ad = e.dp()
                    } catch (t) {}
                    return c
                }(t, n, i, e)),
                a = "https://" + Ut + "?" + l;
            if (-1 !== t.adm.indexOf("tmode.v1") || -1 !== t.adm.indexOf("A=test")) return void s(t);
            let o = new XMLHttpRequest;
            o.open("POST", a), o.withCredentials = !1, o.setRequestHeader("Content-Type", "text/plain"), o.onreadystatechange = () => {
                o.readyState >= 4 && s(o)
            }, o.onerror = r, o.send(h)
        })).catch((i => {
            n.Qu("g_tdumpe", {
                e: D(i),
                bid: t.id
            })
        }))
    }

    function R(t) {
        try {
            return null != t && t.IN_ADSENSE_IFRAME
        } catch (t) {
            return !1
        }
    }

    function z() {
        return (z = Object.assign || function (t) {
            var n, i, e;
            for (n = 1; n < arguments.length; n++)
                for (e in i = arguments[n]) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
            return t
        }).apply(this, arguments)
    }

    function U(t, n) {
        let i = null != n ? n : new bn;
        return (new Image).src = i.Ku("g_cterr", {
            e: t,
            c2: D(nn(t))
        }), new xn(t)
    }

    function V(t) {
        return null == t ? null : t in Xt && Xt[t] && Xt[t].length > 2 ? Xt[t] : null
    }

    function F(t) {
        return (t || "").replace(/\${AUCTION_PRICE}/g, "")
    }

    function $(t, n, i, e) {
        let s = n % 1 ? n.toFixed(3) : n;
        return t.test(i) ? (i || "").replace(t, ((t, n) => n + s)) : i + "&" + on(e) + "=" + s
    }

    function q() {
        try {
            let t = An.slice().filter((t => t.Ep() > 0));
            return t.reduce(((t, n) => t + n.Ep()), 0) / t.length
        } catch (t) {}
        return -1
    }

    function H() {
        let t = v();
        if (Mn += 1, t > In + 1e3) {
            let n = Math.round(1e3 * Mn / (t - In));
            In = t, Mn = 0, Cn.push(n), Cn.length > 40 && Cn.shift()
        }
        sn(H)
    }

    function X() {
        if (!Dn) {
            Dn = !0, In = v();
            try {
                sn(H)
            } catch (t) {}
        }
        if (Cn.length < 5) return 30;
        let t = (n = Cn).slice().reduce(((t, n) => t + n), 0) / (1 * n.length);
        var n;
        return isNaN(t) || !isFinite(t) ? 0 : t
    }

    function J() {
        return (J = Object.assign || function (t) {
            var n, i, e;
            for (n = 1; n < arguments.length; n++)
                for (e in i = arguments[n]) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
            return t
        }).apply(this, arguments)
    }

    function Q(t, n) {
        let i = btoa(on(function (t) {
            try {
                let n = new URL(t);
                return n.search = "", n.hash = "", n.toString()
            } catch (n) {
                return t
            }
        }(t))).replace("+", "-").replace("/", "_").replace(/=+$/, "");
        return n > 1 ? "https://fav-cdn.a-mo.net/vf/0.1/" + i + "/1_" + n + ".png" : "https://fav.a-mo.net/f/" + i + "/" + Math.max(n - 1, 0) + "?u=" + on(t)
    }

    function B(t, n, i, e) {
        let s = T("div", "vel-container " + e + " " + i.t, n);
        var l, h, a, o;
        return "smart" === i.t && (l = t, a = n, o = i, (h = s).style.width = o.v.w + o.c.w + "px", h.style.height = o.v.h + "px", h.style.top = o.v.y + "px", h.style.left = o.v.x + "px", C(l, function (t, n) {
            let i = T("div", "vi-bg", n);
            i.style.backgroundImage = "url(https://assets.a-mo.net/vc/bgi/" + (r(2) + 1) + ".png)";
            let e = T("div", "vi-bgc", n);
            return C(i, e), n.addEventListener("__am.src", (t => {
                t instanceof CustomEvent && (i.style.backgroundImage = "url(" + Q(t.detail, 1) + ")", i.style.backgroundSize = "150%", e.style.backgroundColor = "rgba(0,0,0, 0.1)")
            })), i
        }(0, a))), s
    }

    function W(t, n, i, e) {
        return h(((s, l) => {
            let a = T("script", "vpaid-js", n);
            a.src = t, a.onload = () => {
                (function (t) {
                    let n = t.ownerDocument.defaultView;
                    return null == n ? g(nn("nowin-vpe")) : h(((t, i) => {
                        ! function i() {
                            null == n.getVPAIDAd || "function" != typeof n.getVPAIDAd ? Gt(i, 30) : t(!0)
                        }()
                    }))
                })(a).then((() => s(a))).catch((t => l(t)))
            };
            let o = Date.now();
            a.onerror = h => {
                if (e >= 2) return void l(h);
                let a = Date.now() - o;
                try {
                    let n = y(t);
                    (new Image).src = i.Ku("g_vpjfail", {
                        e: D(h),
                        c1: n.host,
                        c2: n.pathname,
                        c3: t,
                        cn: e,
                        cn2: a
                    })
                } catch (t) {}
                let c = () => s(W(t, n, i, e + 1));
                a < 300 ? Gt(c, 300 + r(300)) : c()
            }, n.head.appendChild(a)
        }))
    }

    function G(t, n) {
        try {
            try {
                t && "string" != typeof t && "undefined" != typeof Symbol && "TrustedScriptURL" === t[Symbol.toStringTag] && (t = t.toString())
            } catch (t) {}
            return "string" != typeof t && "number" != typeof t ? t : n(t)
        } catch (n) {
            return t
        }
    }

    function Y(t, n, i) {
        let e = t,
            s = e.__lookupSetter__(n);
        if (null == s) return;
        let r = t.setAttribute;
        e.setAttribute = function (e, s) {
                return e === n ? r.call(t, e, G(s, i)) : r.call(t, e, s)
            },
            function (n, e, r) {
                if (null == n) return () => {};
                n.__lookupSetter__(e), n.__defineSetter__(e, (n => {
                    try {
                        return s.call(t, G(n, i))
                    } catch (t) {}
                }))
            }(e, n), b(e, n, (() => t.getAttribute(n)))
    }

    function Z(t, n) {
        if (null == t) return;
        if (jn in t) return;
        t["##dcc"] = 1,
            function (t) {
                if (null == t) return;
                let n = t;
                Pn.forEach((t => {
                    t in n || (n[t] = void 0)
                }))
            }(t.defaultView);
        try {
            n.Sp(t.defaultView)
        } catch (t) {}
        let i = t.createElement,
            e = t;
        e.createElement = function (t) {
            let s = i.call(e, t);
            try {
                if ("iframe" === t.toLowerCase()) {
                    let t = s;
                    Y(s, "srcdoc", (t => null == t ? t : t.replace(/(src=['"])\/\//g, "$1https://"))), t.addEventListener("load", (() => {
                        try {
                            null != t && 0 !== t.src.indexOf("http") && null != t.contentDocument && Z(t.contentDocument, n)
                        } catch (t) {}
                    }))
                }
                "script" === t.toLowerCase() && Y(s, "src", (t => 0 === t.indexOf("//") ? "https:" + t : t))
            } catch (t) {}
            return s
        }
    }

    function K(t) {
        let n = t.replace(/^\s+|\s+$/g, "").replace(/\<!\-\-\[CDATA/g, "<![CDATA").replace(/\]\]\-\->/g, "]]>"),
            i = new DOMParser,
            e = i.parseFromString(n, en),
            s = t => null != _(t, "parsererror"),
            r = s(e);
        if (r) {
            let n = i.parseFromString(t, en);
            if (null != n && !s(n)) return n
        }
        if (r && null == _(e, "Ad,ad")) throw nn("bxml:" + t.length);
        return e
    }

    function tt(t) {
        try {
            if (t.responseXML) return t.responseXML
        } catch (t) {}
        if (null == t.responseText || "" === t.responseText) throw nn("nort:" + t.status);
        return K(t.responseText)
    }

    function nt(t, n, i, e) {
        let s = n + 1e3 * e,
            l = t.replace(/^https?/, "https");
        return function (t) {
            let n = new Tn;
            return An.push(n), t.then((t => (n.end(), t))).catch((t => {
                throw n.end(), t
            }))
        }(h(((n, a) => {
            var o, c;
            if (1 === e && "fetch" in Xt) return void n((o = l, c = s, h(((t, n) => {
                let i = Gt((() => n(nn("timeout"))), c);
                return t(fetch(o, {
                    credentials: "omit",
                    mode: "cors"
                }).then((t => t.text().then((n => (clearTimeout(i), {
                    responseText: n,
                    status: t.status,
                    readyState: 4
                }))))).catch((t => {
                    throw clearTimeout(i), t
                })))
            }))).catch((n => {
                if (e < 4) return nt(t, s, i, e + 1);
                throw n
            })));
            let u = Date.now(),
                d = new XMLHttpRequest;
            d.open("GET", l), d.timeout = s, d.withCredentials = !1;
            try {
                i(d)
            } catch (t) {}
            let p = !1,
                f = "",
                v = Date.now();
            d.onreadystatechange = function () {
                if (d.readyState >= 4) {
                    if (200 !== d.status) {
                        if (0 === d.status && e < 4 && !p) {
                            let i = Date.now() - u,
                                l = () => n(nt(t, s, (() => {}), e + 1));
                            return p = !0, i < 200 ? void Gt(l, 500 + r(200)) : void l()
                        }
                        let i = "";
                        try {
                            i = new URL(t).host
                        } catch (t) {
                            i = "inv"
                        }
                        let h = (Date.now() - v) / 1e3;
                        return h < 1 && null != $t.fetch ? void fetch(l, {
                            method: "GET",
                            mode: "cors",
                            credentials: "omit",
                            redirect: "follow"
                        }).then((t => {
                            if (200 !== t.status) throw nn("fhhtp." + t.status);
                            t.text().then((i => {
                                n({
                                    responseText: i,
                                    status: t.status,
                                    readyState: 4
                                })
                            }))
                        })).catch((t => {
                            a("httpF:" + D(t))
                        })) : void a("http." + d.status + "." + e + ":" + h.toFixed(1) + ":" + f + ":" + i)
                    }
                    n(d)
                }
            };
            let g = (l, h) => o => {
                if (!p && e < 4) {
                    p = !0;
                    let l = () => n(nt(t, s, i, e + 1));
                    return Date.now() - u < 200 ? void Gt(l, 500 + r(200)) : void l()
                }
                p || a(nn("xhr." + ("string" == typeof o ? o : l) + "." + s + "." + e, h))
            };
            d.ontimeout = g("to", [s, l, e]);
            let m = g("e", null);
            d.onerror = t => {
                m(f = String(t))
            }, d.onabort = g("a", null), d.send()
        })))
    }

    function it(t, n) {
        return (t || "").replace(Ln, ((t, i) => {
            var e;
            return null != (e = n[i]) ? e : ""
        }))
    }

    function et(t, n, i) {
        if (null == n || -1 === t.indexOf(Nt)) return it(t, i);
        let e = d(n),
            s = -1 === t.indexOf("?") ? "?" : "&";
        return it(t, i) + s + e
    }

    function st(t, n, i, e) {
        function s(s, l) {
            var h;
            if (void 0 === s && (s = {}), void 0 === l && (l = {}), r > 0 && "ct" !== i) return -1 * r;
            let a = null != (h = n()[i]) ? h : [];
            a.length > 10 && (a = function (t) {
                let n = [],
                    i = [];
                for (let e of t) - 1 !== e.indexOf(Nt) ? i.push(e) : -1 !== e.indexOf("sync") || -1 !== e.indexOf("usermatch") ? n.push(e) : i.push(e);
                return function (t) {
                    function n() {
                        let t = s.pop();
                        if (null != t) {
                            for (let n of t)(new Image).src = n;
                            Gt((() => r(n)), e)
                        }
                    }
                    let i = q(),
                        e = i > 1e3 ? 900 : 100,
                        s = function (t, n) {
                            let i = [],
                                e = t.slice(),
                                s = Math.ceil(e.length / (1 * n));
                            for (let t = 0; t < s; t += 1) i.push(e.splice(0, n));
                            return i
                        }(t, i > 1e3 ? 5 : 10),
                        r = "requestIdleCallback" in Xt ? Xt.requestIdleCallback : sn;
                    Gt((() => r(n)), e)
                }(n), i
            }(a));
            let o = 0;
            for (let t of a) try {
                (new Image).src = et(t, s, null != l ? l : {}), o += 1
            } catch (t) {}
            let c = e(t, a);
            return null != c && ((new Image).src = et(c, s, null != l ? l : {})), r = o + (null != c ? 1 : 0)
        }
        let r = 0;
        return s.f = () => r > 0, s
    }

    function rt(t) {
        return t.replace(/.*\[CDATA\[\s*/, "").replace(/\s*\]+$/, "")
    }

    function lt(t) {
        var n;
        let i = /<jsparameters>/i.test((n = t).innerHTML) ? rt(n.innerHTML).replace(/(<\/?)jsparameters>/gi, "$1JsParameters>") : null != n.textContent && n.textContent.length > 0 ? n.textContent : null != n.innerHTML && n.innerHTML.length > 0 ? rt(n.innerHTML) : null;
        return null != i ? j(i) : null
    }

    function ht(t, n) {
        return o(t, n + "," + n.toLowerCase()).map(lt).filter((t => null != t))
    }

    function at(t) {
        if (-1 !== t.indexOf("google_nid=nexage_dbm&google_cm")) return !1;
        if (-1 !== t.indexOf("https%3A%2F%2Fpixel.advertising.com%2Fups")) return !1;
        try {
            let n = y(t);
            return -1 !== n.host.indexOf("log.") || -1 === n.host.indexOf("sync.") && (-1 === n.host.indexOf("ups.") && -1 === n.host.indexOf("pixel.advertising") || -1 === n.pathname.indexOf("ups/")) && !Un.test(n.pathname)
        } catch (t) {
            return !1
        }
    }

    function ot(t) {
        var n;
        let i = t.value;
        if ("progress" === t.eventType) return ["pg", [M(null != (n = t.offset) ? n : "0"), i]];
        switch (t.eventType) {
            case "firstQuartile":
                return ["vfq", i];
            case "midpoint":
                return ["vmp", i];
            case "thirdQuartile":
                return ["vtq", i];
            case "complete":
                return ["vcmp", i];
            case "start":
                return ["start", i];
            case "impression":
            case "creativeView":
                return ["vimp", i]
        }
        return null
    }

    function ct() {
        return (ct = Object.assign || function (t) {
            var n, i, e;
            for (n = 1; n < arguments.length; n++)
                for (e in i = arguments[n]) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
            return t
        }).apply(this, arguments)
    }

    function ut(t, n) {
        return null == t.querySelector ? null : _(t, n + "," + n.toLowerCase())
    }

    function dt(t, n) {
        return void 0 === n && (n = !1), "InLine " + t + (n ? "" : "," + dt(t.toLowerCase(), !0))
    }

    function pt(t) {
        return null != t && null != t.Tp
    }

    function ft() {}

    function vt(t) {
        return t()
    }

    function gt() {
        return Object.create(null)
    }

    function mt(t) {
        t.forEach(vt)
    }

    function bt(t) {
        return "function" == typeof t
    }

    function xt(t, n) {
        return t != t ? n == n : t !== n || t && "object" == typeof t || "function" == typeof t
    }

    function wt(t, n) {
        return Kn || (Kn = document.createElement("a")), Kn.href = n, t === Kn.href
    }

    function yt(t, n) {
        t.appendChild(n)
    }

    function kt(t) {
        t.parentNode.removeChild(t)
    }

    function _t(t) {
        return document.createElement(t)
    }

    function Et(t) {
        return document.createTextNode(t)
    }

    function St() {
        return Et(" ")
    }

    function Tt(t, n, i, e) {
        return t.addEventListener(n, i, e), () => t.removeEventListener(n, i, e)
    }

    function At(t, n, i) {
        null == i ? t.removeAttribute(n) : t.getAttribute(n) !== i && t.setAttribute(n, i)
    }

    function It(t, n, i, e) {
        t.style.setProperty(n, i, e ? "important" : "")
    }

    function Ct(t) {
        ti = t
    }

    function Mt(t) {
        si.push(t)
    }

    function Dt() {
        if (!ai) {
            ai = !0;
            do {
                for (let t = 0; t < ii.length; t += 1) {
                    const n = ii[t];
                    Ct(n), Ot(n.mn)
                }
                for (Ct(null), ii.length = 0; ei.length;) ei.pop()();
                for (let t = 0; t < si.length; t += 1) {
                    const n = si[t];
                    oi.has(n) || (oi.add(n), n())
                }
                si.length = 0
            } while (ii.length);
            for (; ri.length;) ri.pop()();
            hi = !1, ai = !1, oi.clear()
        }
    }

    function Ot(t) {
        if (null !== t.kn) {
            t.update(), mt(t.jn);
            const n = t._n;
            t._n = [-1], t.kn && t.kn.p(t.On, n), t.Sn.forEach(Mt)
        }
    }

    function jt(t, n) {
        var i, e, s, r;
        if (void 0 === n && (n = {}), e = n.In, t && "undefined" != typeof document) {
            try {
                if (i = t, new Rt(Lt.call(document.getElementsByTagName("style")).map((function (t) {
                        null != t.textContent && t.textContent.length
                    }))).has(i)) return
            } catch (t) {}
            s = document.head || document.getElementsByTagName("head")[0], (r = document.createElement("style")).type = "text/css", "top" === e && s.firstChild ? s.insertBefore(r, s.firstChild) : s.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
        }
    }
    var Pt, Nt, Lt, Rt, zt, Ut = "aaa.a-mo.net",
        Vt = "aa2.14.0-704b382",
        Ft = "assets.a-mo.net/js";
    const $t = window,
        qt = $t.document,
        Ht = $t.navigator,
        Xt = $t,
        Jt = $t.location,
        Qt = $t.screen,
        Bt = t => {
            try {
                return decodeURIComponent(Zt(t))
            } catch (n) {
                return Zt(t)
            }
        };
    let Wt = [];
    const Gt = (t, n) => $t.setTimeout(i(t), n),
        Yt = (t, n) => $t.setInterval(i(t), n),
        Zt = String;
    class Kt extends Error {
        Rs() {
            var t;
            return null != (t = this.extra) ? t : {}
        }
        Ts() {}
        constructor(t, n) {
            let i = "string" != typeof t;
            super(i ? t.message : t), this.extra = n;
            try {
                i && (this.stack = t.stack, this.zs = t.zs, this.name = t.name)
            } catch (t) {}
        }
    }
    class tn extends Error {
        constructor(t) {
            super(t)
        }
    }
    const nn = (t, n) => t instanceof tn ? t : t && t instanceof Error ? new Kt(t, n) : new Kt(Zt(t), n),
        en = "text/xml",
        sn = null != (Pt = $t.requestAnimationFrame) ? Pt : Xt.webkitRequestAnimationFrame;
    let rn = null,
        ln = null,
        hn = qt.documentElement,
        an = [].slice;
    const on = t => {
            try {
                return encodeURIComponent(Zt(t))
            } catch (i) {
                return n(dn(i), {
                    value: t
                }), ""
            }
        },
        cn = function () {
            try {
                let t = x(),
                    n = t[t.length - 1];
                return /(?:msn|microsoft|outlook)\.com/i.test(n)
            } catch (t) {
                return !1
            }
        }();
    let un = /^\s*<\??(?:vast|xml)/i;
    const dn = t => null != t && t instanceof Error ? t : nn(Zt(t));
    let pn = Function.prototype.toString,
        fn = !1;
    Nt = "https://1x1.a-mo.net/";
    class vn extends Error {
        constructor(t) {
            super(t), this.reason = t
        }
    }
    vn.gu = t => null != t && t instanceof vn;
    let gn = [],
        mn = Date.now();
    class bn {
        data(t) {
            var n, i;
            let e = null != (n = this.Pu) ? n : {};
            return null == t ? e : null != (i = e[t]) ? i : null
        }
        qu(t) {
            let n = new bn;
            return n.add(this.Pu), n.add(t), n
        }
        qs(t) {
            return void 0 === t && (t = {}), d(z({}, this.Pu, t))
        }
        add(t) {
            this.Pu = z({}, this.Pu, t)
        }
        Vu(t) {
            if (void 0 === t && (t = !1), !this.Wu() && !t) return void Gt((() => this.Vu()), 4e3);
            let n = gn.slice();
            if (0 === n.length) return;
            gn = [];
            let i = {
                c: this.Pu,
                e: n
            };
            mn = Date.now();
            let e = Nt + "e",
                s = JSON.stringify(i);
            if (navigator.sendBeacon(e, s));
            else {
                let t = new XMLHttpRequest;
                t.open("POST", e + "?ts=" + Date.now()), t.setRequestHeader("content-type", "text/plain"), t.send(s)
            }
        }
        Wu() {
            return 0 !== gn.length && (Date.now() - mn > this.Ju || gn.length > this.Gu)
        }
        Yu(t, n) {
            gn.push(z({}, n, {
                n: t,
                eid: u(),
                ts: Date.now()
            })), this.Vu()
        }
        Qu(t, n) {
            (new Image).src = this.Ku(t, n)
        }
        Ku(t, n) {
            return Nt + "hbx/" + t + "?" + d(z({}, this.Pu, n, {
                eid: u(),
                ts: Date.now()
            }))
        }
        constructor(n = 4e3, i = 4, s = !1) {
            this.Ju = n, this.Gu = i, this.Zu = s, this.Pu = {
                aid: null != ln ? ln : ln = function (t) {
                    try {
                        return btoa(t.toLowerCase()).replace(/=+$/, "")
                    } catch (n) {
                        throw nn("btoaf", {
                            no: t
                        })
                    }
                }(null != rn ? rn : rn = function () {
                    let t = w().replace(/:\d+/, "").split("."),
                        n = /\.co\.\w{2,4}$/.test(Jt.host) ? 3 : 2;
                    return t.slice(t.length - n).join(".")
                }()),
                b: w(),
                M: Zt(function () {
                    try {
                        if ($t === top) return 0;
                        if (null != Xt.$sf) return function (t) {
                            try {
                                if (!t || null == t.$sf || null == t.$sf.ext) return !1;
                                let n = t.$sf;
                                if (n.ext.supports) {
                                    let t = n.ext.supports();
                                    return t && (t["exp-ovr"] || t["exp-push"])
                                }
                            } catch (t) {}
                            return !1
                        }(Xt) ? e(qt.domain, "google") ? 10 : 11 : 25;
                        if (R($t) || R($t.parent)) {
                            if ($t.parent === top) return 20;
                            let t = x();
                            return t.length > 0 && e(t[1], "safeframe") ? 21 : 0 === t.length ? 23 : 22
                        }
                        if ("about:srcdoc" === Jt.href && null != qt.documentElement && e(qt.documentElement.className, "-amphtml")) return 18;
                        if (e(Jt.href, "safeframe.") && null == Xt.$sf) try {
                            if ($t.parent && null != $t.parent.$sf) return 16
                        } catch (t) {
                            if (e(Jt.href, "googlesyndication.com")) return 17
                        }
                        if ("about:blank" === Jt.href) return 12;
                        if ("about:srcdoc" === Jt.href) return 19;
                        try {
                            return top && null != top.location.href ? 13 : -3
                        } catch (t) {}
                        return "http:" === Jt.protocol ? 14 : 15
                    } catch (t) {
                        return -1
                    }
                }()),
                v: Vt
            };
            let r = t();
            null != r && (this.Pu.cv = function (t) {
                if (null == t || null == t.src) return "unk";
                let n = t.src.replace(Ft, "").replace(/^https?:\/\//, "").replace(/^\//, "").replace(/[#\?].+/, ""); - 1 !== Ft.indexOf("d-pl") && (n = "d_" + n);
                let i = e(t.src, "#ab=") || e(t.src, "&ab=");
                return e(t.src, "#mp") ? n + "_mp" : n + (i ? "_ab" : "")
            }(r)), null != Ht.language && (this.Pu.lng = Ht.language), ["pagehide", "unload"].forEach((t => {
                $t.addEventListener(t, (() => this.Vu(!0)))
            })), this.Zu && Yt((() => {
                this.Vu()
            }), this.Ju)
        }
    }
    class xn {
        go() {
            throw this.Ap
        }
        constructor(t) {
            this.Ap = nn(t)
        }
    }
    let wn = /([&\?]p=)[\d\.]+/,
        yn = /([&\?]np=)[\d\.]+/,
        kn = /([&\?]pp=)[\d\.]+/;
    u();
    let _n = Function.prototype,
        En = {
            po: Reflect.get.bind(Reflect),
            dn: Function.toString + ""
        };
    Jt.search.indexOf("__iif");
    let Sn = null;
    class Tn {
        end() {
            this.endTime = Date.now()
        }
        Ep() {
            return 0 === this.endTime ? -1 : this.endTime - this.startTime
        }
        constructor() {
            this.startTime = Date.now(), this.endTime = 0
        }
    }
    let An = [],
        In = 0,
        Cn = [],
        Mn = 0,
        Dn = !1;
    "amx".split("").map((t => t.charCodeAt(0))).length;
    class On {
        Ip() {
            return this.Cp
        }
        Mp(t, n) {
            let i = Gt(t, n);
            return this.Dp.push(i), i
        }
        Op(t) {
            clearTimeout(t)
        }
        jp(t) {
            if (null == (null == t ? void 0 : t.querySelector)) return null;
            if (null != _(t, ".adchoices")) return null;
            if (t.insertAdjacentHTML("beforeend", '\n<div class="v-cl" data-cl="close">&times;</div>\n<div class="adchoices" style="width:14px;height:14px;position:absolute;top:6px;right:4px;">\n<svg class="adchoices-logo" style="width:14px;height:14px;" viewBox=".2 0 19.4 20" xmlns="http://www.w3.org/2000/svg">\n<path d="m2.2 20c1 0 1.7-.5 2.4-.9.6-.3 1.2-.7 1.9-1 3.2-1.7 6.4-3.5 9.6-5.3 1-.5 2.3-1 3-1.9.2-.3.5-.7.4-1.2-.3-1.1-1.7-1.5-2.6-2-2.2-1.2-4.5-2.5-6.7-3.7-.8-.5-2-1.4-3-.7-.4.2-.6.4-.7.7-.1.4 0 .9 0 1.3v3.2c0 .9-.1 1.6.5 2 .2.1.6.2.9.1 1-.4.7-2.2.7-3.6v-1.1c1.7.9 3.4 1.8 5.1 2.6.6.3 1.6.6 1.8 1.4.2.9-1.7 1.6-2.3 1.9l-6.9 3.9c-.5.3-1.8 1.3-2.6 1-.3-.1-.5-.4-.5-.6-.1-.4-.1-1-.1-1.5v-3.2-5.4c0-.8-.1-1.8.2-2.3.7-1 2.3.8 2.8-.8.1-.4-.1-.8-.3-1-.4-.6-2.2-1.5-2.9-1.7-.2-.1-.7-.2-1-.2-1.7.3-1.3 3-1.3 5v9.9c0 1.5-.2 3.5.4 4.4.3.5.6.5 1.2.7zm5.2-6.5c1.5 0 1.6-1.9.2-2.2-.8-.1-1.4.7-1.2 1.4.2.5.5.6 1 .8z" fill="#00aecd"/>\n</svg>\n</div>\n'), cn) {
                let n = _(t, ".v-cl");
                null != n && (n.style.display = "none")
            }
            return _(t, ".adchoices")
        }
        Pp(t) {
            let n = this.jp(t);
            if (null == n || n.addEventListener("click", this.Np), t.insertAdjacentHTML("beforeend", '\n<div class="__mi-w" style="width:14px;height:14px;position:absolute;left:0px;bottom:6px">\n<svg style="width:14px;height:14px;" class="mi-l" enable-background="new 0 0 384 384" version="1.1" viewBox="0 0 384 384" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n\t\t\t<path d="m288 192c0-37.653-21.76-70.187-53.333-85.867v47.147l52.373 52.373c0.64-4.48 0.96-9.066 0.96-13.653z"/>\n\t\t\t<path d="M341.333,192c0,20.053-4.373,38.933-11.52,56.32l32.32,32.32C376,254.08,384,224,384,192     c0-91.307-63.893-167.68-149.333-187.093V48.96C296.32,67.307,341.333,124.373,341.333,192z"/>\n\t\t\t<polygon points="192 21.333 147.41 65.92 192 110.51"/>\n\t\t\t<path d="M27.2,0L0,27.2L100.8,128H0v128h85.333L192,362.667V219.2l90.773,90.773c-14.293,10.987-30.4,19.84-48.107,25.173V379.2     c29.333-6.72,56.107-20.16,78.613-38.613L356.8,384l27.2-27.2l-192-192L27.2,0z"/>\n</svg>\n</div>\n'), null == t.querySelector) return;
            let i = _(t, ".__mi-w");
            null == i || i.addEventListener("click", (t => {
                try {
                    this.Lp(), t.preventDefault(), t.stopPropagation(), null != i && (i.style.display = "none")
                } catch (t) {}
            })), this.Rp = () => {
                l(i), l(n)
            }
        }
        zp(t) {
            this.track.verr({}, {
                Up: String(t)
            })
        }
        vp() {
            return "-1"
        }
        played() {
            return this.Vp
        }
        Fp() {
            this.Rp(), this.Dp.forEach((t => {
                this.Op(t)
            }))
        }
        constructor(t, n, i) {
            this.ad = t, this.ro = n, this.root = i, this.end = function (t) {
                let n, i, e = h(((t, e) => {
                        n = n => {
                            n instanceof Promise || null != n && n.then ? n.then((t => {
                                s.v = t
                            })) : s.v = n, t(n)
                        }, i = e
                    })),
                    s = {
                        v: null,
                        r: n,
                        j: i,
                        p: e
                    };
                return [s.r, s.j, () => s.v, s.p]
            }(), this.Rp = () => {}, this.Vp = !1, this.Cp = !1, this.Dp = [], this.Np = t => (t.stopPropagation(), t.preventDefault(), this.ad.$p(), !1), this.track = t.qp(this.ro)
        }
    }
    let jn = "##dcc",
        Pn = ["adCfid", "adChoicesText", "adChoicesDiv", "adChoicesImage"];
    class Nn {
        Hp() {
            var t;
            return null != (null == (t = this.io.defaultView) ? void 0 : t.frameElement)
        }
        Sp(t) {}
        Xp(t) {
            if (this.Hp() && null != this.io && null != this.io.defaultView) {
                t(this.io);
                try {
                    this.Sp(this.io.defaultView)
                } catch (t) {
                    let n = y(this.Jp);
                    this.ro.Yu("g_vpberr", {
                        e: D(t),
                        c1: n.host,
                        c2: n.pathname,
                        c3: this.Jp
                    })
                }
            } else if (null == this.Qp) {
                this.Qp = T("iframe", "fif", this.io), this.Qp.width = "10", this.Qp.height = "10", A(this.Qp, "style", "position:fixed;top:-3000px;display:inline;z-index:-9999;"), this.Qp.src = "about:blank", this.root.appendChild(this.Qp);
                try {
                    this.Sp(this.Qp.contentWindow)
                } catch (t) {}
                null != this.Qp.contentDocument && null != this.Qp.contentWindow ? t(this.Qp.contentDocument) : Gt((() => {
                    var n;
                    null == (null == (n = this.Qp) ? void 0 : n.contentDocument) || null == this.Qp.contentWindow ? t(this.io) : t(this.Qp.contentDocument)
                }), 550)
            }
        }
        getTime() {
            try {
                let t = this.Bp().getAdRemainingTime();
                return this.Bp().getAdDuration() - t
            } catch (t) {
                return -1
            }
        }
        click() {
            this.videoSlot.click()
        }
        resize(t) {
            this.videoSlot.height = t, this.videoSlot.className += " vel-resize", this.videoSlot.style.height = t + "px"
        }
        Wp() {
            return this.Gp
        }
        el() {
            return this.Yp
        }
        Zp() {
            return h(((t, n) => {
                this.Xp((i => {
                    if (null == i) return void n(nn("nodoc"));
                    let e = i.defaultView;
                    null != e && null != i ? t(W(this.Jp, i, this.ro, 0).then((() => e))) : n(nn("no," + (null == e ? "w" : "d") + "," + this.Jp))
                }))
            }))
        }
        Bp() {
            if (null == this.Kp) throw nn("novp/" + this.Jp);
            return this.Kp
        }
        play() {
            this.slot.classList.add("playing");
            let t = this.Bp();
            try {
                t.setAdVolume(0)
            } catch (t) {}
            return h(((t, n) => {
                Gt((() => {
                    try {
                        this.Bp().startAd(), t(this)
                    } catch (t) {
                        n(t)
                    }
                }), 250)
            }))
        }
        tv() {
            let t = this.Bp();
            this.videoSlot.muted = !1, t.setAdVolume(1)
        }
        Fp() {
            l(this.Qp), l(this.slot), l(this.Yp), l(this.Gp), l(this.videoSlot)
        }
        get() {
            return this.Zp().then((t => h(((n, i) => {
                var e, s;
                let r = null != (s = e = t) && null != s.getVPAIDAd ? e : null;
                if (null == r) return void i(nn("NOVP"));
                this.Kp = r.getVPAIDAd(), this.Kp.subscribe((() => {
                    n(this)
                }), "AdLoaded"), this.Kp.subscribe((function () {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    let s = n.filter((t => null != t))[0],
                        r = s,
                        l = f(null != r ? r : nn(s), "vpaid");
                    i(l)
                }), "AdError");
                let l = {
                    videoSlot: this.videoSlot,
                    videoSlotCanAutoPlay: !0,
                    slot: this.slot
                };
                return h(((t, n) => {
                    Gt((() => {
                        try {
                            var i;
                            t(null == (i = this.Kp) ? void 0 : i.initAd(this.ev.v.w, this.ev.v.h, "normal", 200, this.sv, l))
                        } catch (t) {
                            n(nn("vpinit:" + t))
                        }
                    }), 500)
                }))
            })).catch((t => {
                throw this.Fp(), t instanceof Error ? t : nn("initAd/" + D(t))
            }))))
        }
        constructor(t, n, i, e, s, r, l) {
            var h;
            this.Jp = t, this.root = n, this.rv = i, this.ev = e, this.sv = s, this.bid = r, this.ro = l, this.Qp = null, this.Kp = null, this.io = null != (h = this.root.ownerDocument) ? h : document, this.videoSlot = T("video", "avsl", this.io), I(this.videoSlot, {
                id: "vad_" + this.rv,
                muted: !0,
                "webkit-playsinline": !0,
                lv: !0
            }), this.videoSlot.volume = 0, this.videoSlot.muted = !0, this.videoSlot.width = this.ev.v.w, this.videoSlot.height = this.ev.v.h, this.Yp = B(this.root, this.io, this.ev, "vpaid"), this.Gp = T("div", "vel-slot-iso", this.io), A(this.Gp, "style", "height:" + this.ev.v.h + "px;width:" + this.ev.v.w + "px;"), this.slot = T("div", "vpaid-slot", this.io), C(this.root, this.Yp), C(this.Yp, this.Gp);
            try {
                Z(this.io, this)
            } catch (t) {}
            C(this.Gp, this.slot), C(this.Gp, this.videoSlot)
        }
    }
    let Ln = /\[([A-Z]+)\]/g,
        Rn = ["verr", "pv", "nv", "ct", "vfq", "vmp", "vtq", "pg", "vcmp", "p", "r", "um", "mu", "sk", "start", "vimp"],
        zn = t => "Linear TrackingEvents Tracking[event=" + t + "]",
        Un = /\/(?:getuid|setuid|sync|usersync|match)/,
        Vn = zn("progress"),
        Fn = {
            start: 1,
            sk: 1,
            um: 1,
            mu: 1,
            r: 1,
            p: 1,
            ct: 1,
            nv: 1,
            pv: 1
        },
        $n = {
            ct: "hclk",
            um: "vum",
            start: "vstart"
        },
        qn = /^\s*(?:https?:)?\/\//,
        Hn = -1 !== Jt.hash.indexOf("__vp=true") ? 400 : 3.5;
    const Xn = "Wrapper",
        Jn = "InLine",
        Qn = "vpaid",
        Bn = "anvpaid",
        Wn = "vidbvpaid",
        Gn = "yhvpaid";
    let Yn = /https?:\/\/acdn.adnxs(?:-simple)?.com\/vx\/static\/w\/anwrapper/;
    class Zn extends class {
        at() {
            return "base"
        }
        ys() {
            return "none"
        }
        hv() {
            return this.bid
        }
        lo() {
            return this.ev
        }
        dp() {
            let t = t => 0 | Math.floor(t),
                n = {
                    v: {
                        w: t(this.ev.v.w),
                        h: t(this.ev.v.h),
                        x: t(this.ev.v.x),
                        y: t(this.ev.v.y),
                        v: !0
                    },
                    c: {
                        w: t(this.ev.c.w),
                        h: t(this.ev.c.h),
                        x: t(this.ev.c.x),
                        y: t(this.ev.c.y),
                        v: !0
                    },
                    t: this.ev.t,
                    s: [t(this.ev.s[0]), t(this.ev.s[1])]
                };
            return {
                w: [],
                m: [],
                ee: this.ov,
                t: "uk",
                j: "",
                d: 0,
                as: [],
                l: n
            }
        }
        add(t, n) {
            this.uv[t] = (this.uv[t] || []).concat(n)
        }
        qp(t) {
            let n = this.dv(),
                i = this;
            return function (t, n) {
                var i;
                let e = {};
                for (let i of Rn) {
                    let s = i;
                    e[s] = st(i, t, s, n)
                }
                return e.pg = (i = t, function (t) {
                    if ("number" != typeof t || t < 0) return 0;
                    let n = Math.round(t + .1),
                        e = i().pg,
                        s = e[n];
                    if (null == s || 0 === s.length) return 0;
                    let r = 0;
                    for (let t of s) try {
                        (new Image).src = t, r++
                    } catch (t) {}
                    return e[n] = [], r
                }), e
            }((() => this.uv), (function (s, r) {
                var l;
                try {
                    i.ov.push({
                        e: s,
                        t: Date.now()
                    })
                } catch (t) {}
                if (s in Fn && !$n[s]) return null;
                try {
                    ! function (t, n, i) {
                        if ("vimp" !== n || null == i || 0 === i.length) return;
                        let s = i.findIndex((t => e(t, "casalemedia.com/impression")));
                        if (null != s && -1 !== s) {
                            let n = i[s];
                            t.Qu("g_ixvidi", {
                                bid: n.slice(0, 500)
                            })
                        }
                    }(t, s, r)
                } catch (t) {}
                return t.Ku(null != (l = $n[s]) ? l : s, n)
            }))
        }
        tag() {
            return "base"
        }
        $p() {}
        dv() {
            return {
                bid: this.bid.id,
                cr: this.bid.crid,
                c2: this.ys(),
                c1: this.at()
            }
        }
        constructor(t, n, i, e, s, r = !1, l = 0) {
            this.bid = t, this.fv = n, this.ev = i, this.price = e, this.root = s, this.vv = r, this.wn = l, this.id = u(), this.uv = Object.assign({}, {
                verr: [],
                pv: [],
                nv: [],
                ct: [],
                vfq: [],
                vmp: [],
                pg: {},
                vtq: [],
                vcmp: [],
                p: [],
                r: [],
                um: [],
                mu: [],
                sk: [],
                start: [],
                vimp: []
            }), this.bt = function (t, n) {
                function i(t, i) {
                    return P(t, ht(n, zn(i)))
                }
                var e, s, r;
                return {
                    verr: P(t.verr, ht(n, "Error")),
                    pv: P(t.pv, ht(n, "Viewable, AdVerifications Verification ViewableImpression")),
                    pg: (e = t.pg, o(n, Vn).forEach((t => {
                        let n = M(t.getAttribute("offset")),
                            i = lt(t);
                        null != i && (e[n] = e[n] || [], e[n].push(i))
                    })), e),
                    nv: P(t.nv, ht(n, "NotViewable")),
                    ct: P(t.ct, ht(n, "VideoClicks ClickTracking")),
                    vfq: i(t.vfq, "firstQuartile"),
                    vmp: i(t.vmp, "midpoint"),
                    vtq: i(t.vtq, "thirdQuartile"),
                    vcmp: i(t.vcmp, "complete"),
                    p: i(t.p, "pause"),
                    r: i(t.r, "resume"),
                    um: i(t.um, "unmute"),
                    mu: i(t.mu, "mute"),
                    start: i(t.start, "start"),
                    sk: i(t.sk, "skip"),
                    vimp: (s = P(i(t.vimp, "creativeView"), ht(n, "Impression")), r = at, s.length <= 100 ? s : s.filter(r))
                }
            }, this.gv = M, this.mv = {}, this.ov = [], this.ov.push({
                e: "init",
                t: Date.now()
            })
        }
    } {
        at() {
            return this.bv
        }
        ys() {
            if (null == this.xv || 0 === this.xv.length) return "";
            if (null == this.yv) {
                let t = y(this.xv);
                this.yv = t.host
            }
            return this.yv
        }
        kv() {
            return this.bv == Qn || null != this.xv && this.xv.length > 0
        }
        get(t) {
            var n;
            return this._v(null != (n = this.fv) ? n : this.bid.nurl, 0, t).then((n => {
                if (n.vv) return n;
                if (Date.now() - this.startTime > 900) return n;
                if (O((n.kv() ? .25 : 1) * Hn)) {
                    let i = this.Ev();
                    return function (t) {
                        let n = t.data("_e");
                        if (null == n) return g(nn("no _e"));
                        let i = "https://verify.amxrtb.com?" + d({
                            _e: n,
                            ts: Date.now(),
                            C: t.data("C"),
                            cv: t.data("cv")
                        });
                        return h(((t, n) => {
                            let e = new XMLHttpRequest;
                            e.open("GET", i), e.onreadystatechange = () => {
                                e.readyState >= 4 && function () {
                                    try {
                                        let i = JSON.parse(e.responseText);
                                        if (null == i) return void n(nn("inv data"));
                                        t(i)
                                    } catch (t) {
                                        n(t)
                                    }
                                }()
                            }, e.onerror = n, e.withCredentials = !1, e.send()
                        }))
                    }(t).then((e => {
                        if (null != i) {
                            let n = O(85) ? this.Sv(e, i) : this.Tv(e, i);
                            return this.Av(n, t)
                        }
                        return n
                    })).catch((t => n))
                }
                return n
            }))
        }
        Iv() {
            if (!this.Cv && !this.Kp) throw this.error("noctu");
            this.Cv && $t.open(this.Cv, "_blank")
        }
        $p() {
            null != this.Mv && $t.open(this.Mv, "_blank")
        }
        src() {
            return this.mediaFiles.slice()
        }
        dv() {
            return ct({}, super.dv(), {
                us: null != this.Kp ? "vp" : "va" + this.ver,
                i: this.Tp,
                M: this.ct() + "",
                cn: this.Ep
            })
        }
        ct() {
            return null == this.Kp ? isNaN(this.ver) ? 1 : parseFloat(this.ver) : 6
        }
        Dv(t) {
            return qn.test(t) ? (n = t.trim(), void 0 === i && (i = 1700), nt(n, i, (t => t.overrideMimeType(en)), 0).then(tt)).catch((t => {
                throw t
            })) : h(((n, i) => {
                try {
                    n(K(t))
                } catch (t) {
                    if (!(t instanceof Error)) return;
                    i(nn("rXTV:" + D(t)))
                }
            }));
            var n, i
        }
        Ev() {
            return null == this.Ov[0] || null == this.Ov[0].url ? null : this.Ov[0].url
        }
        Tv(t, n) {
            return "https://v.adsrvs.com/1/vps?" + d(ct({
                jv: n
            }, t.w.d, t.w.p, {
                ti: this.bid.id,
                dm: this.ev.v.w + "x" + this.ev.v.h,
                bt: "pbv"
            }))
        }
        Av(t, n) {
            let i = new Zn(this.bid, t, this.ev, this.price, this.root, !0);
            return i.mv = ct({}, this.mv, i.mv), i.get(n)
        }
        Sv(t, n) {
            var i, e, s, r;
            return "https://svastx.moatads.com/appmonetvpaid328605938503/template.xml?" + d({
                ad_title: this.title,
                ad_width: this.ev.v.w,
                ad_height: this.ev.v.h,
                ad_duration: this.Ep,
                level1: null != (i = t.m.d.moatClientLevel1) ? i : "",
                level2: null != (e = t.m.d.moatClientLevel2) ? e : "",
                level3: null != (s = t.m.d.moatClientLevel3) ? s : "",
                level4: this.bid.crid,
                slicer1: null != (r = t.m.d.moatClientSlicer1) ? r : "",
                tmode: 1,
                vast_url: n
            })
        }
        _v(t, n, i) {
            return this.Dv(t).then((e => {
                try {
                    this.parse(e)
                } catch (e) {
                    if (this.Pv < 2) return this.Pv += 1, this._v(t, n, i);
                    throw nn("parsefail:" + D(e))
                }
                if (qn.test(t) && this.Ov.push({
                        url: t,
                        type: this.bv.slice(),
                        depth: n
                    }), this.bv === Wn && this.wn < 2) {
                    let t = this.Nv;
                    if (t && t.length > 0) return this._v(t, n + 1, i)
                }
                if (this.bv === Bn && this.wn < 2) {
                    var s, r;
                    let t = null == (r = null == (s = this.Lv) ? void 0 : s.ads[0]) ? void 0 : r.rtb.content_b64;
                    if (t && t.length > 0) try {
                        let e = function (t) {
                            let n = String(t).replace(/[-_]/g, (function (t) {
                                return "-" == t ? "+" : "/"
                            })).replace(/[^A-Za-z0-9\+\/]/g, "");
                            return atob(n)
                        }(t);
                        return this._v(e, n + 1, i)
                    } catch (t) {}
                }
                if (this.bv === Gn && this.wn < 2 && null != this.Rv && /^https/.test(this.Rv)) return this._v(this.Rv, n + 1, i);
                if (this.bv === Xn) {
                    if (n > ni) throw this.error("mxdpth");
                    return this._v(this.zv[this.zv.length - 1], n + 1, i)
                }
                if (this.bv === Qn || this.bv === Bn || this.bv === Gn || "acuvpaid" === this.bv || this.bv === Wn) return this.Uv(i);
                if (!this.Vv()) throw this.error("inv");
                return this
            }))
        }
        Vv() {
            return function (t) {
                for (let n of t)
                    if (null != n && n.url.length > 0 && -1 !== n.type.toLowerCase().indexOf("video")) return !0;
                return !1
            }(this.mediaFiles)
        }
        zp(t) {
            var n;
            let i = null != (n = this.uv.verr) ? n : [];
            for (let n of i)(new Image).src = n.replace("[ERRORCODE]", String(t))
        }
        dp() {
            var t;
            return this.ov.push({
                e: "dump",
                t: Date.now()
            }), ct({}, super.dp(), {
                w: this.zv,
                m: this.mediaFiles.map((t => {
                    let {
                        url: n,
                        type: i,
                        bitrate: e
                    } = t;
                    return {
                        u: n,
                        t: i,
                        b: e
                    }
                })),
                t: this.bv === Jn ? "va" : "vp",
                ee: this.ov,
                as: this.Fv,
                j: null != (t = this.xv) ? t : "",
                d: this.Ep
            })
        }
        tag() {
            return [null != this.Kp ? "vp" : "va", null != this.xv ? "js" : "o", this.Fv.join("-"), this.mediaFiles.length, this.zv.length, this.bid.crid, this.id].join("_")
        }
        Uv(t) {
            return null == this.xv ? g(nn("novpaid")) : (this.Kp = new Nn(this.xv, this.root, this.id, this.ev, {
                AdParameters: this.$v
            }, this.bid, t), this.Kp.get().then((() => this)))
        }
        qv(t, n) {
            if (null != ut(t, Xn)) return Xn;
            let i = !1;
            for (let t of n) {
                if (0 === t.type.indexOf("video")) return Jn; - 1 !== t.type.indexOf("javascript") && (i = !0)
            }
            return i ? Qn : Jn
        }
        error(t) {
            return nn(t + "|w:" + this.zv.length + ",h:" + this.Fv.join(",") + ",C:" + this.bid.crid)
        }
        Hv(t) {
            try {
                return ht(t, "Extension PlaybackConfig").reduce(((t, n) => {
                    try {
                        return ct({}, t, JSON.parse(n))
                    } catch (n) {
                        return t
                    }
                }), {})
            } catch (t) {}
            return {}
        }
        Xv(t, n, i) {
            return null != t && t.length > 0 ? t : ht(n, i)[0]
        }
        Jv(t) {
            return this.bv === Qn && null != this.xv && null != this.$v && 0 === this.xv.indexOf(t)
        }
        parse(t) {
            var n, i, e, s, r, l, h, a, c, u;
            let d = ut(t, "Ad");
            if (null == d) throw this.error("noad");
            let p = P(this.mediaFiles.filter((t => {
                let {
                    type: n
                } = t;
                return -1 === n.indexOf("javascript")
            })), o(t, dt("MediaFile")).map((t => {
                var n;
                return {
                    url: null != (n = function (t) {
                        var n, i, e;
                        let s = j(null != (n = t.textContent) ? n : "");
                        if (null != s && s.length > 0) return s;
                        if (t.childNodes.length > 0) {
                            let n = t.childNodes[0];
                            if (n.nodeType === Node.COMMENT_NODE) return j(null != (e = null != (i = n.textContent) ? i : n.nodeValue) ? e : "").replace(/.*\[CDATA\[\s*/, "").replace(/\s*\]+$/, "")
                        }
                        return null
                    }(t)) ? n : "",
                    type: S(t, "type", "video/*"),
                    bitrate: k(S(t, "bitrate", "800"))
                }
            })));
            this.bv = this.qv(t, p), this.Fv = P(this.Fv, ht(t, "AdSystem"));
            let f = this.price.toFixed(2);
            this.ver = "0" !== this.ver ? this.ver : S(t.documentElement, "version", "0"), this.adid = this.adid || S(d, "id", null), this.uv = this.bt(this.uv, d), this.zv = P(P(this.zv, ht(c = t, "VASTAdTagURI")), ht(c, "VASTAdTagURL")).map((t => t.replace("${AUCTION_PRICE}", f))), this.Ep = this.Ep > 0 ? this.Ep : this.gv(ht(d, "Duration")[0]), this.title = this.Xv(this.title, t, "AdTitle"), this.description = this.Xv(this.description, t, "Description"), this.Qv = this.Xv(this.Qv, t, "Advertiser"), this.mediaFiles = p, this.Mv = null != (n = this.Mv) ? n : this.Bv(d), this.Wv = P(this.Wv, ht(t, "AdVerifications Verification JavaScriptResource")), this.Cv = ht(t, dt("Linear VideoClicks ClickThrough"))[0] || null, this.Gv = P(this.Gv, ht(t, "ViewableImpression Viewable")), this.mv = ct({}, this.mv, this.Hv(t));
            let v = ht(t, "Extension Country");
            if (v && v[0]) {
                this.Yv = [v[0], 0, 0];
                let n = ht(t, "Extension Bandwidth");
                n && n[0] && (this.Yv[1] = parseInt(n[0], 10));
                let i = ht(t, "Extension BandwidthKbps");
                i && i[0] && (this.Yv[2] = parseInt(i[0], 10))
            }
            if (this.bv === Qn && (this.xv = null != (e = null == (i = this.mediaFiles.find((t => {
                    let {
                        type: n
                    } = t;
                    return -1 !== n.indexOf("javascript")
                }))) ? void 0 : i.url) ? e : null, this.$v = (null != (s = ht(t, "AdParameters")) ? s : [])[0]), this.bv === Qn && null != this.xv && null != this.$v && Yn.test(this.xv)) try {
                this.Lv = JSON.parse(this.$v), null != (null == (r = this.Lv) ? void 0 : r.ads) && null != (null == (l = this.Lv.ads[0]) || null == (h = l.rtb) ? void 0 : h.content_b64) && (this.bv = Bn)
            } catch (t) {
                this.bv = Qn
            }
            if (this.bv === Qn && "https://s.yimg.com/ff/vista.js" === this.xv && null != this.$v && O(80)) try {
                let t = (u = this.$v, JSON.parse(u));
                if (t && null != t.vastAdTagURI) {
                    for (let n of (this.bv = Gn, this.Gv.push(t.viewableImpression), this.Cv = t.videoClicks.clickThrough, this.Ep = this.gv(t.duration), t.trackingEvents)) {
                        let t = ot(n);
                        if (null == t) continue;
                        let [i, e] = t;
                        if ("pg" !== i) "string" == typeof e && (this.uv[i] = this.uv[i] || [], this.uv[i].push(e));
                        else {
                            let [t, n] = e, i = null != (a = this.uv.pg[t]) ? a : [];
                            i.push(n), this.uv.pg = ct({}, this.uv.pg, {
                                [t]: i
                            })
                        }
                    }
                    this.uv.ct = (this.uv.ct || []).concat(t.videoClicks.clickTracking), this.Rv = t.vastAdTagURI
                }
            } catch (t) {
                this.bv = Qn
            }
            if (O(95) && this.Jv("https://acds.prod.vidible.tv/o2shim")) try {
                let t = new URL("https://ad.ads?" + this.$v).searchParams.get("adXML");
                if (!(null != t && t.length > 0)) throw nn("noax");
                this.Nv = t, this.bv = Wn
            } catch (t) {
                this.bv = Qn
            }
        }
        Bv(t) {
            var n;
            let i = ut(t, "Icon IconClickThrough");
            return null != (n = null == i ? void 0 : i.textContent) ? n : null
        }
        constructor(...t) {
            super(...t), this.startTime = Date.now(), this.bv = Xn, this.Fv = [], this.adid = null, this.ver = "0", this.Lv = null, this.Rv = null, this.Nv = null, this.Ep = 0, this.title = "", this.description = "", this.Qv = "", this.mediaFiles = [], this.Wv = [], this.Cv = null, this.Ov = [], this.zv = [], this.xv = null, this.$v = null, this.Yv = null, this.Mv = null, this.Gv = [], this.Tp = 0, this.Kp = null, this.Pv = 0, this.yv = null
        }
    }
    let Kn, ti, ni = 8;
    const ii = [],
        ei = [],
        si = [],
        ri = [],
        li = Promise.resolve();
    let hi = !1,
        ai = !1;
    const oi = new Set,
        ci = new Set;
    Lt = Array.prototype.slice, Rt = "undefined" != typeof Set ? Set : function (t) {
        var n = {};
        return t.forEach((function (t) {
            return n[t] = 1
        })), {
            has: function (t) {
                return !!n[t]
            }
        }
    }, jt('.sc-cc.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{width:100%;text-align:right;padding-right:10px}.pl-1.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{padding-left:5px}.sci-i.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{width:18px;height:18px;cursor:pointer}.sci-i.sci-in.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{margin-left:-6px}.sci-v.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{transition:opacity 0.25s ease-in;opacity:0;overflow:hidden;position:absolute;top:-54px;padding:4.5px 0px;left:0px;border-radius:18px;background-color:white;align-items:center;box-shadow:0px 0px 1px rgba(0, 0, 0, 0.3);display:flex}.sci-v.show.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{opacity:1}.sci-v.hide.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{opacity:0}.sci-v.v-ax-1phsbal-gwdncc .sci-oo.v-ax-1phsbal-gwdncc{margin:0px 6px;display:inline-block;padding:4.5px;transition:background-color 0.25s linear;border-radius:18px}.sci-v.v-ax-1phsbal-gwdncc .sci-oo.v-ax-1phsbal-gwdncc:hover{background-color:#eee}.sci-v.columns.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{top:0;left:-250%}.s-w.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{display:flex;flex-direction:column;text-decoration:none;color:#65676b;padding:1px;z-index:2}.sci-g.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{position:relative}.sic.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{width:18px;height:18px;background-repeat:no-repeat;background-size:auto;filter:invert(0.39) sepia(0.21) saturate(2) saturate(1.095) hue-rotate(174deg) brightness(0.94) contrast(0.86)}.sr-stat.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{padding-bottom:5px;padding-top:8px;border-bottom:1px solid #ddd}.sr-act.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{padding-top:8px}.s-c.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{flex:0;font-family:"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif;cursor:pointer;display:flex;align-items:center;font-size:15px;line-height:19.99px;padding-right:18px;padding-right:var(--sc-pl)}.s-c.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc:hover{color:#020202}.s-c.ss-g.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{padding-right:0;flex:1}.s-c.s-mt.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{justify-content:flex-end;padding-right:10px}.s-c.v-ax-1phsbal-gwdncc>span.v-ax-1phsbal-gwdncc{padding-left:5px}.s-c.v-ax-1phsbal-gwdncc>span.v-ax-1phsbal-gwdncc,.s-c.v-ax-1phsbal-gwdncc i.v-ax-1phsbal-gwdncc{display:inline-block}.s-r.v-ax-1phsbal-gwdncc.v-ax-1phsbal-gwdncc{display:flex;width:100%;flex-direction:row}');
    class ui extends class {
        Zc() {
            ! function (t, n) {
                const i = t.mn;
                null !== i.kn && (mt(i.vn), i.kn && i.kn.d(1), i.vn = i.kn = null, i.On = [])
            }(this), this.Zc = ft
        }
        th(t, n) {
            const i = this.mn.yn[t] || (this.mn.yn[t] = []);
            return i.push(n), () => {
                const t = i.indexOf(n); - 1 !== t && i.splice(t, 1)
            }
        }
        Nn(t) {
            var n;
            this.nh && (n = t, 0 !== Object.keys(n).length) && (this.mn.Cn = !0, this.nh(t), this.mn.Cn = !1)
        }
    } {
        constructor(t) {
            super(),
                function (t, n, i, e, s, r, l, h = [-1]) {
                    const a = ti;
                    Ct(t);
                    const o = t.mn = {
                        kn: null,
                        On: null,
                        En: r,
                        update: ft,
                        Dn: s,
                        bound: gt(),
                        bn: [],
                        vn: [],
                        Mn: [],
                        jn: [],
                        Sn: [],
                        context: new Map(a ? a.mn.context : n.context || []),
                        yn: gt(),
                        _n: h,
                        Cn: !1,
                        root: n.target || a.mn.root
                    };
                    l && l(o.root);
                    let c = !1;
                    if (o.On = i ? i(t, n.En || {}, ((n, i, ...e) => {
                            const r = e.length ? e[0] : i;
                            return o.On && s(o.On[n], o.On[n] = r) && (!o.Cn && o.bound[n] && o.bound[n](r), c && function (t, n) {
                                -1 === t.mn._n[0] && (ii.push(t), hi || (hi = !0, li.then(Dt)), t.mn._n.fill(0)), t.mn._n[n / 31 | 0] |= 1 << n % 31
                            }(t, n)), i
                        })) : [], o.update(), c = !0, mt(o.jn), o.kn = !!e && e(o.On), n.target) {
                        if (n.Rn) {
                            const t = function (t) {
                                return Array.from(t.childNodes)
                            }(n.target);
                            o.kn && o.kn.l(t), t.forEach(kt)
                        } else o.kn && o.kn.c();
                        n.Tn && (u = t.mn.kn) && u.i && (ci.delete(u), u.i(void 0)),
                            function (t, n, i, e) {
                                const {
                                    kn: s,
                                    bn: r,
                                    vn: l,
                                    Sn: h
                                } = t.mn;
                                s && s.m(n, i), e || Mt((() => {
                                    const n = r.map(vt).filter(bt);
                                    l ? l.push(...n) : mt(n), t.mn.bn = []
                                })), h.forEach(Mt)
                            }(t, n.target, n.anchor, n.zn), Dt()
                    }
                    var u;
                    Ct(a)
                }(this, t, (function (t, n, i) {
                    let e, s, {
                            Zv: r = ""
                        } = n,
                        {
                            ev: l = {
                                w: 300
                            }
                        } = n,
                        {
                            Kv: h = ((t, n, i) => {})
                        } = n,
                        a = !1,
                        o = null;
                    return t.nh = t => {
                        "Zv" in t && i(0, r = t.Zv), "ev" in t && i(11, l = t.ev), "Kv" in t && i(12, h = t.Kv)
                    }, t.mn.update = () => {
                        2048 & t.mn._n && i(3, e = Math.max(Math.round(l.w / 25), 6)), 2048 & t.mn._n && i(2, s = l.w > 270 ? "Learn More" : "More")
                    }, [r, a, s, e, 100 + Math.floor(100 * Math.random()), "2." + (Math.floor(8 * Math.random()) + 1), {
                        r: "react",
                        cc: "comment_count",
                        l: "like",
                        c: "comment",
                        tg: "learn_more"
                    }, {
                        me: "mouseenter",
                        ml: "mouseleave",
                        c: "click"
                    }, function (t, n) {
                        return i => h(t, i, n)
                    }, function () {
                        clearTimeout(o), i(1, a = !0)
                    }, function () {
                        clearTimeout(o), o = setTimeout((() => {
                            i(1, a = !1)
                        }), 300)
                    }, l, h]
                }), (function (t) {
                    let n, i, e, s, r, l, h, a, o, c, u, d, p, f, v, g, m, b, x, w, y, k, _, E, S, T, A, I, C, M, D, O, j, P, N, L, R, z, U, V, F, $, q, H, X;
                    return {
                        c() {
                            n = _t("div"), i = _t("div"), e = _t("div"), s = _t("span"), r = _t("img"), h = St(), a = _t("img"), c = St(), u = _t("img"), p = St(), f = _t("div"), v = _t("div"), v.innerHTML = '<img data-cl="react.like_ol" data-="" src="https://assets.a-mo.net/c/v2/like.png" class="sci-i v-ax-1phsbal-gwdncc"/>', g = St(), m = _t("div"), m.innerHTML = '<img data-cl="react.wow_ol" src="https://assets.a-mo.net/c/v2/wow.png" class="sci-i v-ax-1phsbal-gwdncc"/>', b = St(), x = _t("div"), x.innerHTML = '<img data-cl="react.love_ol" src="https://assets.a-mo.net/c/v2/love.png" class="sci-i v-ax-1phsbal-gwdncc"/>', y = St(), k = _t("span"), k.textContent = t[5] + "k", _ = St(), E = _t("div"), S = _t("span"), S.textContent = t[4] + " Comments", T = St(), A = _t("div"), I = _t("div"), C = _t("i"), M = St(), D = _t("span"), D.textContent = "Like", O = St(), j = _t("div"), P = _t("i"), N = St(), L = _t("span"), L.textContent = "Comment", R = St(), z = _t("div"), U = _t("i"), V = St(), F = _t("span"), $ = Et(t[2]), At(r, "data-cl", "react.like"), At(r, "data-", ""), wt(r.src, l = "https://assets.a-mo.net/c/v2/like.png") || At(r, "src", "https://assets.a-mo.net/c/v2/like.png"), At(r, "class", "sci-i v-ax-1phsbal-gwdncc"), At(a, "data-cl", "react.wow"), wt(a.src, o = "https://assets.a-mo.net/c/v2/wow.png") || At(a, "src", "https://assets.a-mo.net/c/v2/wow.png"), At(a, "class", "sci-i sci-in v-ax-1phsbal-gwdncc"), At(u, "data-cl", "react.love"), wt(u.src, d = "https://assets.a-mo.net/c/v2/love.png") || At(u, "src", "https://assets.a-mo.net/c/v2/love.png"), At(u, "class", "sci-i sci-in v-ax-1phsbal-gwdncc"), At(v, "class", "sci-oo v-ax-1phsbal-gwdncc"), At(v, "data-cl", "like_l"), At(m, "class", "sci-oo v-ax-1phsbal-gwdncc"), At(m, "data-cl", "wow_l"), At(x, "class", "sci-oo v-ax-1phsbal-gwdncc"), At(x, "data-cl", "love_l"), At(f, "class", w = "sci-v " + t[0] + " " + (t[1] ? "show" : "hide") + " v-ax-1phsbal-gwdncc"), At(s, "class", "sci-g v-ax-1phsbal-gwdncc"), At(k, "data-cl", "react.count"), At(k, "class", "v-ax-1phsbal-gwdncc"), At(e, "data-cl", "react"), At(e, "class", "s-c ss-g v-ax-1phsbal-gwdncc"), At(S, "data-cl", "comment_count"), At(S, "class", "sc-cc v-ax-1phsbal-gwdncc"), At(E, "class", "s-c ss-g v-ax-1phsbal-gwdncc"), At(i, "class", "s-r sr-stat v-ax-1phsbal-gwdncc"), At(C, "data-cl", "like.icon"), At(C, "class", "sic v-ax-1phsbal-gwdncc"), At(C, "style", "background-image:url(https://assets.a-mo.net/c/v2/sicon.png);background-position-y:-38px;"), At(D, "data-cl", "like.text"), At(D, "class", "v-ax-1phsbal-gwdncc"), At(I, "data-cl", "like"), At(I, "class", "s-c pl-1 v-ax-1phsbal-gwdncc"), At(P, "data-cl", "comment.icon"), At(P, "class", "sic v-ax-1phsbal-gwdncc"), At(P, "style", "background-image:url(https://assets.a-mo.net/c/v2/sicon.png);background-position-y:0px;"), At(L, "data-cl", "comment.text"), At(L, "class", "v-ax-1phsbal-gwdncc"), At(j, "data-cl", "comment"), At(j, "class", "s-c v-ax-1phsbal-gwdncc"), At(U, "data-cl", "learn_more.icon"), At(U, "class", "sic v-ax-1phsbal-gwdncc"), At(U, "style", "background-image:url(https://assets.a-mo.net/c/v2/sicon.png);background-position-y:-57px;"), At(F, "data-cl", "learn_more.text"), At(F, "class", "v-ax-1phsbal-gwdncc"), At(z, "data-cl", "learn_more"), At(z, "class", "s-c ss-g s-mt v-ax-1phsbal-gwdncc"), At(A, "class", "s-r sr-act v-ax-1phsbal-gwdncc"), It(n, "--sc-pl", t[3] + "px"), At(n, "class", q = "s-w " + t[0] + " v-ax-1phsbal-gwdncc")
                        },
                        m(l, o) {
                            (function (t, n, i) {
                                t.insertBefore(n, i || null)
                            })(l, n, o), yt(n, i), yt(i, e), yt(e, s), yt(s, r), yt(s, h), yt(s, a), yt(s, c), yt(s, u), yt(s, p), yt(s, f), yt(f, v), yt(f, g), yt(f, m), yt(f, b), yt(f, x), yt(e, y), yt(e, k), yt(i, _), yt(i, E), yt(E, S), yt(n, T), yt(n, A), yt(A, I), yt(I, C), yt(I, M), yt(I, D), yt(A, O), yt(A, j), yt(j, P), yt(j, N), yt(j, L), yt(A, R), yt(A, z), yt(z, U), yt(z, V), yt(z, F), yt(F, $), H || (X = [Tt(s, "mouseleave", t[10]), Tt(s, "mouseenter", t[9]), Tt(e, "mouseenter", t[8](t[6].r, t[7].me)), Tt(e, "mouseleave", t[8](t[6].r, t[7].ml)), Tt(e, "click", t[8](t[6].r, t[7].c)), Tt(E, "mouseenter", t[8](t[6].cc, t[7].me)), Tt(E, "mouseleave", t[8](t[6].cc, t[7].ml)), Tt(E, "click", t[8](t[6].cc, t[7].c)), Tt(I, "mouseenter", t[8](t[6].l, t[7].me)), Tt(I, "mouseleave", t[8](t[6].l, t[7].ml)), Tt(I, "click", t[8](t[6].l, t[7].c)), Tt(j, "mouseenter", t[8](t[6].c, t[7].me)), Tt(j, "mouseleave", t[8](t[6].c, t[7].ml)), Tt(j, "click", t[8](t[6].c, t[7].me)), Tt(z, "mouseenter", t[8](t[6].tg, t[7].me)), Tt(z, "mouseleave", t[8](t[6].tg, t[7].ml)), Tt(z, "click", t[8](t[6].tg, t[7].c))], H = !0)
                        },
                        p(t, i) {
                            let [e] = i;
                            3 & e && w !== (w = "sci-v " + t[0] + " " + (t[1] ? "show" : "hide") + " v-ax-1phsbal-gwdncc") && At(f, "class", w), 4 & e && function (t, n) {
                                n = "" + n, t.wholeText !== n && (t.data = n)
                            }($, t[2]), 8 & e && It(n, "--sc-pl", t[3] + "px"), 1 & e && q !== (q = "s-w " + t[0] + " v-ax-1phsbal-gwdncc") && At(n, "class", q)
                        },
                        i: ft,
                        o: ft,
                        d(t) {
                            t && kt(n), H = !1, mt(X)
                        }
                    }
                }), xt, {
                    Zv: 0,
                    ev: 11,
                    Kv: 12
                })
        }
    }
    class di {
        Fp() {
            l(this.el)
        }
        ng() {
            this.cta = T("a", "bcta-w " + this.ev.t, this.io), this.cta.href = "#", this.el.appendChild(this.cta), new ui({
                target: this.cta,
                En: {
                    Kv: (t, n, i) => {
                        this.ro.Yu("g_vsocc", {
                            c1: t,
                            c2: i,
                            cn: n.pageX,
                            cn2: n.pageY,
                            w: this.ev.s[0],
                            h: this.ev.s[1]
                        })
                    },
                    ev: this.ev.c,
                    Zv: this.ev.t
                }
            })
        }
        ig() {
            this.cta = T("a", "bcta " + this.ev.t, this.io), this.cta.href = "#", this.cta.innerHTML = null != this.mv.cta && this.mv.cta.length > 0 ? this.mv.cta : "Learn More";
            let t = "__cta" + u();
            this.cta.id = t;
            let n = "__ctar" + u();
            if (this.el.id = n, this.mv.ctas && this.mv.ctas.length > 0) {
                let i = this.mv.ctas.replace(/\$cta/g, "#" + t).replace(/\$container/g, "#" + n),
                    e = T("style", "", this.io);
                e.id = "__cfgstyle", e.textContent = i, this.io.head.appendChild(e)
            }
            this.el.appendChild(this.cta)
        }
        eg(t) {
            this.el.addEventListener("click", (n => (t(), n.stopPropagation(), n.preventDefault(), !1)))
        }
        constructor(t, n, i, e, s, r) {
            this.io = t, this.ad = n, this.root = i, this.mv = e, this.ev = s, this.ro = r, this.el = T("div", "brand-container " + s.t, this.io), this.small = this.ev.s[1] < 225 || this.ev.c.w < 200;
            let l = "0" == this.ro.data("r") || cn;
            if (this.small || l) this.ig();
            else {
                this.el.className += " social ";
                try {
                    this.ng(), "inset" === this.ev.t && Gt((() => {
                        this.el.className += " show ", null != $t.CustomEvent && this.root.dispatchEvent(new CustomEvent("social.show", {
                            bubbles: !0,
                            detail: this.el.clientHeight
                        }))
                    }), 5e3)
                } catch (t) {}
            }
            A(this.el, "style", "width:" + this.ev.c.w + "px;height:" + this.ev.c.h + "px"), this.root.appendChild(this.el)
        }
    }
    class pi {
        constructor(t) {
            this.type = t
        }
    }
    class fi {
        end(t) {
            return this.duration
        }
        start(t) {
            return 0
        }
        get length() {
            return this.duration <= 0 ? 0 : 1
        }
        constructor(t) {
            this.duration = t
        }
    }
    class vi {
        on(t, n) {
            var i;
            let e = null != (i = this.zh.get(t)) ? i : [];
            e.push(n), this.zh.set(t, e)
        }
        played() {
            return new fi(this.currentTime())
        }
        finished() {
            return this.sg >= this.rg
        }
        currentTime() {
            return 1e3 * this.sg / 1e3
        }
        createEvent(t) {
            try {
                return new Event(t)
            } catch (t) {}
            try {
                if (null != qt.createEvent) return qt.createEvent(t)
            } catch (t) {}
            return "undefined" != typeof CustomEvent ? new CustomEvent(t) : new pi(t)
        }
        lg(t) {
            let n = this.createEvent(t);
            if (this.hg(t, this, n), !this.zh.has(t)) return;
            let i = this.zh.get(t);
            if (Array.isArray(i))
                for (let t of i) try {
                    t.call(this, n)
                } catch (t) {}
        }
        ag() {
            return Q(this.src, this.sg)
        }
        og() {
            this.sg += 1, this.ug.src = this.ag()
        }
        play() {
            return this.loop(), m(this)
        }
        constructor(t, n, i, e, s, r) {
            this.crid = t, this.src = n, this.duration = i, this.root = e, this.ro = s, this.hg = r, this.dg = 0, this.sg = 0, this.zh = new Map, this.loop = () => {
                let t = v(),
                    n = t - this.dg;
                if (0 === this.sg && this.lg("playing"), n >= 1e3) {
                    if (0 === this.sg) try {
                        (new Image).src = this.ro.Ku("g_pfplay2", {})
                    } catch (t) {}
                    this.lg("timeupdate"), this.og(), this.finished() && this.lg("ended"), this.dg = t
                }
                this.finished() || Gt(this.loop, 100)
            }, this.rg = 1e3 * this.duration / 1e3;
            let l = this.root.ownerDocument,
                h = this.root.parentElement;
            if (null == l || null == h) throw nn("nodoc/img");
            this.fg = T("div", "am-fp-w", l);
            let a = _(l, ".smrtp-vel");
            null != a && (this.fg.style.height = a.clientHeight + "px"), this.ug = T("img", "am-fp-img", l), this.fg.appendChild(this.ug), h.className += " am-fp-play ", C(h, this.fg), b(this.root, "currentTime", (() => this.currentTime())), b(this.root, "duration", (() => this.duration)), b(this.root, "ended", (() => this.finished())), b(this.root, "played", (() => this.played()))
        }
    }! function (t) {
        t[t.vg = 0] = "INITIAL", t[t.gg = 1] = "LOAD_REQUEST", t[t.mg = 2] = "LOADSTART", t[t.bg = 3] = "CANPLAY", t[t.xg = 4] = "PLAYING", t[t.wg = 5] = "WAITING_UI", t[t.yg = 6] = "UI_SUCCESS", t[t.kg = 7] = "UI_FAIL"
    }(zt || (zt = {}));
    let gi = ["touchstart", "play", "mouseup", "pointerup", "touchend", "click"];
    class mi {
        _g() {
            return isNaN(this.Eg) || this.Eg < 0 ? 6e3 : this.Eg <= 1e3 ? 4e3 : this.Eg <= 2e3 ? 5e3 : 6e3
        }
        Sg() {
            let t = 0;
            for (let n = 0, i = this.Tg.buffered.length; n < i; n += 1) t += this.Tg.buffered.end(n) - this.Tg.buffered.start(n);
            return t
        }
        resize(t, n) {
            this.Tg.className += " vel-resize ", this.Tg.style.maxHeight = n + "px"
        }
        um() {
            this.Tg.volume = 1, this.Tg.removeAttribute("muted"), this.Tg.muted = !1
        }
        Ag() {
            return 0 === this.Tg.duration || isNaN(this.Tg.duration) ? -1 : this.Sg() / (1 * this.Tg.duration)
        }
        tag() {
            var t, n;
            return [this.state, this.Tg.networkState, this.Tg.readyState, this.Ig, Date.now() - this.Cg, this.sources.length, this.Mg, null != (n = null == (t = this.Dg) ? void 0 : t.bitrate) ? n : -1].join(",")
        }
        Og() {
            this.ev.v.w > 0 && (this.Tg.width = this.ev.v.w), this.Tg.height = this.ev.v.h, this.Tg.muted = !0, this.Tg.volume = 0, this.Tg.preload = "auto", this.config.loop && (this.Tg.loop = !0), this.Tg.playsInline = !0, I(this.Tg, {
                lv: !0,
                preload: "auto",
                "webkit-playsinline": !0,
                "data-player-id": this.jg
            })
        }
        Pg(t) {
            let n = this.Ng[t];
            if (null != n)
                for (let t of n) this.Op(t);
            this.Ng[t] = []
        }
        Lg() {
            let t = this.Tg.played,
                n = 0;
            for (let i = 0, e = t.length; i < e; i += 1) n += t.end(i) - t.start(i);
            return n
        }
        played() {
            return !!this.Rg || (this.Rg = this.Lg() > 0 || this.Tg.currentTime > 0, this.Rg)
        }
        zg(t) {
            this.Cg = Date.now(), this.state = t
        }
        Ug(t) {
            if (null == t) return this.onerror("failure", this.Mg + "/" + this.sources.length + ";" + this.Vg.map((t => t.type)).join(",")), !1;
            if (this.state > 1 && 2 === this.Tg.networkState) return !1;
            if (Date.now() - this.Fg < .5 * this._g()) return !1;
            let n = this.Dg;
            return this.Ig += 1, this.Dg = t, this.Pg("loadstart"), this.Ig > 2 ? (this.Pg("playing"), this.$g(this.Tg, n), !0) : (this.qg(this.Hg, this._g(), "loadstart"), this.Pg("canplay"), this.once("loadstart", (() => {
                this.Fg = Date.now(), this.zg(2), this.qg((() => {
                    this.Tg.play().catch((t => {}))
                }), 1500, "canplay"), this.qg(this.Xg, this._g(), "canplay")
            })), this.Tg.src = this.Dg.url, this.zg(1), this.Tg.load(), !0)
        }
        Mp(t, n) {
            let i = Gt(t, n);
            return this.Jg.push(i), i
        }
        Op(t) {
            clearTimeout(t), this.Jg = this.Jg.filter((n => n !== t))
        }
        qg(t, n, i) {
            var e;
            let s = this.Mp(t, n);
            this.Ng[i] = null != (e = this.Ng[i]) ? e : [], this.Ng[i].push(s), this.once(i, (() => {
                this.Op(s)
            }))
        }
        Qg() {
            this.onerror("abort", "media_error_abort_event")
        }
        Bg() {
            let t = this.Mg + 1,
                n = this.sources[t];
            return null == n || n.bitrate && n.bitrate > 600 ? this.Wg() : void(this.Ug(n) && (this.Mg = t))
        }
        Wg() {
            this.Ug(this.Dg)
        }
        Gg(t) {
            if (null == t) return;
            let n = t instanceof Event ? t.type : t.name,
                i = t instanceof ErrorEvent || t instanceof Error ? t.message : String(t),
                e = t instanceof Event ? t.target : {};
            e instanceof MediaError && (i = "media error: " + e.code);
            try {
                this.onerror(n, i)
            } catch (t) {}
        }
        Yg() {
            this.on("error", this.Zg), this.on("playing", (t => {
                this.played() || this.zg(4)
            })), this.on("stalled", (t => {
                let n = this.Tg.networkState >= this.Tg.NETWORK_LOADING ? 2 : 1,
                    i = this._g() * n,
                    e = Date.now();
                !this.played() && e - this.Kg > i && e - this.Fg > i && e - this.nm > i && (this.nm = Date.now(), this.Zg(new ErrorEvent("stalled")))
            }))
        }
        _u() {
            return Qt.availWidth < 800 || this.ev.v.w <= 300
        }
        getSources(t, n) {
            let i = t.filter((t => null != t && function (t) {
                    try {
                        return new URL(t), !0
                    } catch (t) {
                        return !1
                    }
                }(t.url) && -1 !== t.type.indexOf("video/") && (n || -1 === t.type.indexOf("/3g")) && "" !== this.Tg.canPlayType(t.type))).sort(((t, n) => t.bitrate - n.bitrate)),
                e = X(),
                s = q();
            if (e < 20 || s > 2e3) return i;
            let r = this._u() ? 200 : 300;
            for (let t = 0, n = i.length; t < n; t += 1) {
                let n = i[t];
                if (n.bitrate >= r) return i.splice(t, 1), i.unshift(n), i
            }
            return i
        }
        im(t, n) {
            this.Tg.removeEventListener(t, n)
        }
        once(t, n) {
            let i = this;
            this.on(t, (function e(s) {
                n.call(this, s), i.im(t, e)
            }))
        }
        play() {
            return h((t => {
                this.Kg = Date.now(), this.Pg("playing"), this.qg((() => {
                    this.played() || this.$g(this.Tg, this.sources[0])
                }), 18e3, "playing"), this.qg((() => {
                    this.played() || 1 !== this.Tg.networkState && 2 !== this.Tg.networkState && this.$g(this.Tg, this.sources[0])
                }), 11e3, "playing");
                let n = 0,
                    i = () => {
                        clearInterval(n), this.played() || (this.zg(3), t(this.Tg.play().catch(this.sm).then((() => this))))
                    };
                this.once("canplay", i), n = Yt((() => {
                    this.Tg.readyState > this.Tg.HAVE_METADATA && i()
                }), 300);
                let e = () => {
                    this.Ag() > 0 && (i(), this.im("progress", e))
                };
                this.on("progress", e);
                try {
                    this.Ug(this.Dg)
                } catch (t) {
                    this.Bg()
                }
            }))
        }
        ended() {
            return this.Tg.ended
        }
        rm() {
            return isNaN(this.Tg.duration) || this.Tg.duration <= 0 ? 0 : this.Tg.currentTime / this.Tg.duration
        }
        lm() {
            var t, n;
            return null != (n = null == (t = this.Tg) ? void 0 : t.currentTime) ? n : 0
        }
        Fp() {
            this.Jg.slice().forEach((t => {
                this.Op(t)
            }))
        }
        on(t, n) {
            this.Tg.addEventListener(t, n)
        }
        constructor(t, n, i, e, s, r, l) {
            this.Vg = t, this.config = n, this.ev = i, this.root = e, this.hm = s, this.onerror = r, this.$g = l, this.Mg = 0, this.Rg = !1, this.Jg = [], this.Kg = 0, this.nm = 0, this.Fg = 0, this.Cg = Date.now(), this.jg = u(), this.Ng = {}, this.Eg = q(), this.Hg = () => {
                this.Zg(new ErrorEvent("loadstart"))
            }, this.Xg = () => {
                this.Zg(new ErrorEvent("canplay"))
            }, this.Zg = t => {
                var n;
                if (this.played()) return;
                this.Gg(t);
                let i = null == (n = t.target) ? void 0 : n.error;
                if (null != i && null != i.code) {
                    let t = i;
                    switch (t.code) {
                        case t.MEDIA_ERR_ABORTED:
                            return void this.Qg();
                        case t.MEDIA_ERR_DECODE:
                        case t.MEDIA_ERR_SRC_NOT_SUPPORTED:
                            return void this.Bg();
                        case t.MEDIA_ERR_NETWORK:
                            return void this.Wg()
                    }
                }
                switch (this.Tg.networkState) {
                    case this.Tg.NETWORK_NO_SOURCE:
                        return void this.Bg();
                    case this.Tg.NETWORK_EMPTY:
                        return void this.Wg()
                }
                this.Tg.readyState, this.Tg.HAVE_NOTHING, this.Wg()
            }, this.sm = () => {
                let t = [this.io.documentElement, this.io.body, qt.documentElement, qt.body].filter((t => null != t));
                try {
                    t.push(parent.document.documentElement), null != top && null != top.document && t.push(top.document.documentElement)
                } catch (t) {}
                return h((n => {
                    let i = !1,
                        e = t => {
                            "click" === t.type && t.preventDefault(), !i && (this.played() || (this.zg(5), i = !0, this.Tg.play().then((() => {
                                i = !1, s(!1), this.zg(6), n(this)
                            })).catch((t => {
                                i = !1, this.zg(7)
                            }))))
                        },
                        s = n => {
                            t.forEach((t => {
                                gi.forEach((i => {
                                    try {
                                        t[n ? "addEventListener" : "removeEventListener"](i, e)
                                    } catch (t) {}
                                }))
                            }))
                        };
                    s(!0), this.Tg.play().catch((t => {}))
                }))
            };
            let a = this.root.ownerDocument;
            if (null == a) throw nn("no-doc-vel");
            this.state = 0, this.io = a, this.Ig = 0, this.Tg = T("video", "smrtp-vel " + this.hm, this.io), cn && (this.Tg.controls = !0), this.root.appendChild(this.Tg);
            let o = this.getSources(t, !1);
            this.sources = 0 === o.length ? this.getSources(t, !0) : o, 0 === this.sources.length && (this.sources = t), this.Dg = this.sources[this.Mg], Gt((() => {
                var t, n;
                t = this.io, n = this.Dg.url, $t.CustomEvent && t.dispatchEvent(new CustomEvent("__am.src", {
                    detail: n,
                    bubbles: !0
                }))
            }), 120), this.Og(), this.Yg()
        }
    }
    class bi extends On {
        Fp() {
            var t;
            super.Fp(), this.om.Fp(), l(this.pm), null == (t = this.fm) || t.Fp()
        }
        vp() {
            return null != this.om ? this.om.tag() : "va-unk"
        }
        Lp() {
            this.om.um(), this.track.um()
        }
        vm(t) {
            return this.om.play().then((() => this))
        }
        gm() {
            return m(this)
        }
        bm() {
            this.Vp = !0
        }
        xm() {
            let t = this.ro.data("v");
            this.track.vimp({
                M: this.ad.ct(),
                v: null != t ? Zt(t) : void 0
            })
        }
        bind(t, n) {
            var i;
            this.wm[t] = null != (i = this.wm[t]) ? i : [], this.wm[t].push(n), this.om.on(t, n)
        }
        Yg() {
            this.io.addEventListener("social.show", (t => {
                if (t instanceof CustomEvent) {
                    let n = this.ad.lo(),
                        i = n.v.h - t.detail;
                    this.om.resize(n.v.h, i)
                }
            })), this.bind("timeupdate", this.ym), this.bind("ended", this.km), this.bind("playing", (() => {
                this.bm(), this.track.start(), this.xm()
            })), this.bind("pause", (() => {
                this.om.ended() || this.track.p()
            })), this.root.addEventListener("click", this._m)
        }
        Og() {
            let t = this.ad.lo(),
                n = "columns" === t.t ? "banner" : "mrect";
            this.root.className += " " + n + " ";
            let i = B(this.root, this.io, t, ""),
                e = T("div", "vel-w", this.io);
            C(this.root, i), C(i, e), this.pm = i, this.Pp(e), this.om = new mi(this.ad.src(), Object.assign({}, this.ad.mv), t, e, "video-player " + n, ((t, n) => {}), ((t, n) => {
                let i = this.ad;
                new vi(i.bid.crid, n.url, i.Ep, t, this.ro, this.hg).play()
            })), pt(this.ad) && (this.fm = new di(this.io, this.ad, i, this.ad.mv, t, this.ro))
        }
        constructor(t, n, i) {
            var e;
            super(t, n, i), this.pm = null, this.fm = null, this.wm = {}, this.ym = () => {
                let t = this.om.rm();
                this.track.pg(this.om.lm()), t >= 0 && (this.bm(), this.xm(), this.track.start()), t >= .25 && this.track.vfq(), t >= .5 && this.track.vmp(), t >= .75 && this.track.vtq(), t >= .99 && this.track.vcmp()
            }, this.km = () => {
                this.track.vcmp(), this.end[0](this)
            }, this.hg = (t, n, i) => {
                let e = this.wm[t];
                if (null != e && 0 !== e.length)
                    for (let s of e) try {
                        s.call(n, i)
                    } catch (n) {
                        try {
                            (new Image).src = this.ro.Ku("g_pfplaye", {
                                e: D(n),
                                c1: t,
                                cn: e.length
                            })
                        } catch (t) {}
                    }
            }, this._m = t => {
                t.preventDefault();
                let [n, i] = (e = t) instanceof MouseEvent || e instanceof TouchEvent ? e instanceof MouseEvent ? [null != (l = e.pageX) ? l : -2, null != (h = e.pageY) ? h : -2] : [null != (a = null == (s = e.touches[0]) ? void 0 : s.pageX) ? a : -2, null != (o = null == (r = e.touches[0]) ? void 0 : r.pageY) ? o : -2] : [-1, -1];
                var e, s, r, l, h, a, o;
                return this.track.ct({
                    c4: function (t) {
                        let n = t.target;
                        if (null == n || !(n instanceof Element)) return "unk";
                        let i = n.getAttribute("data-cl");
                        return null != i && i.length > 0 ? i : n.tagName + "." + n.className.replace(/\s+/g, ".")
                    }(t),
                    cn: n,
                    cn2: i
                }), this.ad.Iv(), !1
            }, this.io = null != (e = this.root.ownerDocument) ? e : document, this.Og(), this.Yg()
        }
    }
    class xi {
        Em(t) {
            let n = this.height,
                i = t * n;
            for (; i > this.width;) n -= 1, i = t * n;
            return [i, n]
        }
        Sm(t) {
            let n = this.width,
                i = t * n;
            if (this.height > i && this.height - i < 50) return [n, this.height];
            for (; i > this.height;) n -= 1, i = t * n;
            return [n, i]
        }
        Tm(t, n) {
            let i = this.width - t,
                e = "columns",
                s = {
                    x: t,
                    y: 0,
                    h: n,
                    w: Math.min(i, n),
                    v: !0
                },
                r = [s.w + t, n];
            return i < 60 && (e = "inset", s = {
                x: 0,
                y: .7 * n,
                w: t,
                h: .3 * n,
                v: !0
            }, r = [this.width, n]), {
                v: {
                    x: 0,
                    y: 0,
                    w: "inset" === e ? this.width : t,
                    h: n,
                    v: !0
                },
                s: r,
                c: s,
                t: e
            }
        }
        Am(t, n) {
            t -= 16 / 9 * 10, n -= 10;
            let i = .4 * (this.width - t),
                e = [this.width, this.height],
                s = (this.width - (t + i)) / 2,
                r = (this.height - n) / 2;
            return {
                t: "smart",
                c: {
                    x: s + t,
                    y: r = 0 == r ? -1 : r,
                    w: i,
                    h: n,
                    v: !0
                },
                v: {
                    x: s,
                    y: r,
                    w: t,
                    h: n,
                    v: !0
                },
                s: e
            }
        }
        Im(t, n) {
            let i = this.height - n,
                e = "rows",
                s = {
                    x: 0,
                    y: n,
                    w: this.width,
                    h: Math.min(i, n),
                    v: !0
                },
                r = [this.width, s.h + n];
            return i < 60 && (e = "inset", s = {
                x: 0,
                y: .7 * n,
                w: t,
                h: .3 * n,
                v: !0
            }, r = [t, this.height]), {
                v: {
                    x: 0,
                    y: 0,
                    w: t,
                    h: "inset" === e ? this.height : n,
                    v: !0
                },
                s: r,
                c: s,
                t: e
            }
        }
        get() {
            let [t, n] = this.Em(1.7777777777777777), [i, e] = this.Sm(.5625);
            return this.height <= 130 ? this.Am(t, n) : t * n >= i * e ? this.Tm(t, n) : this.Im(i, e)
        }
        constructor(t, n) {
            var i, e, s, r;
            let l = t.ownerDocument.defaultView;
            this.width = Math.max(t.clientWidth, null != (i = n.w) ? i : 0, null != (e = null == l ? void 0 : l.innerWidth) ? e : 0), this.height = Math.max(t.clientHeight, null != (s = n.h) ? s : 0, null != (r = null == l ? void 0 : l.innerHeight) ? r : 0)
        }
    }
    class wi extends On {
        Lp() {
            this.Kp.tv()
        }
        vp() {
            return "vp"
        }
        vm(t) {
            return h((t => {
                Gt((() => {
                    t(this.Cm())
                }), 150)
            }))
        }
        Cm() {
            try {
                this.Mm()
            } catch (t) {}
            return h(((t, n) => {
                this.Kp.play().catch((t => {
                    n(f(null != t ? t : nn("vpplay"), "vpplay"))
                })), this.Mp((() => {
                    this.Vp || this.Kp.play().catch((t => {
                        this.Vp || n(f(t, "vpagain"))
                    }))
                }), 4e3), this.Dm = Gt((() => {
                    if (this.Vp) return;
                    let t = this.Kp.getTime();
                    !isNaN(t) && t > 0 ? this.Om(t) : n(nn("vpto!@Y:" + t))
                }), 14e3), this.end[3].then((n => {
                    clearInterval(this.jm), this.Pm(), t(n)
                })).catch((t => {
                    this.Pm(), this.Vp || n(f(t, "venp"))
                }))
            }))
        }
        gm() {
            return this.adunit.stopAd(), clearInterval(this.jm), this.Pm(), m(this)
        }
        Fp() {
            var t;
            super.Fp(), this.Kp.Fp(), null == (t = this.fm) || t.Fp(), this.Pm()
        }
        Pm() {
            0 !== this.Dm && (clearTimeout(this.Dm), this.Dm = 0)
        }
        Mm() {
            this.jm = $t.setInterval((() => {
                sn((() => {
                    let t = this.adunit.getAdRemainingTime();
                    this.currentTime = t < 0 ? 400 * this.Nm : this.duration - t
                }))
            }), 400)
        }
        Om(t) {
            this.Pm(), this.Vp = !0, this.track.start(), this.track.vimp({
                cn2: t
            }), this.ro.Yu("g_ueplay", {
                cn2: t
            })
        }
        Lm() {
            var t, n = this;
            null == (t = this.root.ownerDocument) || t.addEventListener("social.show", (t => {
                if (t instanceof CustomEvent) {
                    let n = this.ad.lo();
                    this.Kp.Wp().className += " iso-res ";
                    let i = n.v.h - t.detail,
                        e = () => this.adunit.resizeAd(n.v.w, i, "normal");
                    this.Kp.resize(i), e()
                }
            }));
            let i = (t, n) => this.adunit.subscribe(n, "Ad" + t),
                e = t => () => {
                    this.Pm(), t(), this.end[0](this)
                };
            try {
                this.adunit.setAdVolume(0)
            } catch (t) {}
            i("Error", (function () {
                for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++) i[e] = arguments[e];
                let s = a(null != i ? i : []).filter((t => null != t))[0];
                n.track.verr({
                    e: D(s)
                })
            }));
            let s = () => {
                this.Pm(), this.Vp = !0, this.track.start();
                let t = this.ro.data("v");
                this.track.vimp({
                    v: null != t ? Zt(t) : void 0
                })
            };
            i("Impression", s), i("Started", s), i("VideoStart", s), i("Playing", s), i("VolumeChange", (() => {
                let t = this.adunit.getAdVolume();
                t > 0 && this.track.um({
                    cn2: t
                })
            })), i("Stopped", e(this.track.p)), i("VideoFirstQuartile", (() => {
                this.Vp = !0, this.Pm(), this.track.vfq()
            })), i("VideoComplete", e(this.track.vcmp)), i("Skipped", e(this.track.sk)), i("VideoMidpoint", this.track.vmp), i("VideoThirdQuartile", this.track.vtq), i("ClickThru", (() => {
                this.track.ct({
                    c4: "vpaid_player"
                }), this.ad.Iv()
            }))
        }
        constructor(t, n, i) {
            var e, s;
            if (super(t, n, i), this.jm = 0, this.currentTime = 0, this.Nm = 0, this.Dm = 0, this.fm = null, this.Vp = !1, null == t.Kp) throw nn("novpaid!");
            this.Kp = t.Kp, this.adunit = this.Kp.Bp(), this.duration = null != (e = this.adunit.getAdDuration()) ? e : 15, this.duration <= 0 && (this.duration = 15), this.Pp(this.Kp.Wp());
            let r = new di(null != (s = i.ownerDocument) ? s : document, t, this.Kp.el(), this.ad.mv, this.ad.lo(), this.ro);
            r.eg((() => {
                this.Kp.click()
            })), this.fm = r, this.Lm()
        }
    }
    let yi = !1;
    jt('body {\n  margin: 0;\n  background: transparent;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n}\n\nvideo {\n  background: black;\n  object-fit: cover;\n  max-height: 100%;\n}\nvideo.vel-resize {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  object-fit: contain;\n  width: auto !important;\n}\nvideo.playing {\n  z-index: 10;\n}\n\n.mrect video {\n  width: 100%;\n}\n.mrect.smart video {\n  width: inherit;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.3), 0px 0px 2px rgba(0, 0, 0, 0.3);\n}\n\n.vpaid video {\n  width: 100%;\n}\n\n.smart .vpaid video,\n.columns .vpaid video {\n  width: initial !important;\n}\n\n.vpaid .vel-slot-iso {\n  background: black;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n.mrect {\n  position: relative;\n}\n.mrect .vel-container {\n  flex-direction: column;\n  border-top: 1px solid #ddd;\n}\n.mrect .vel-container .brand-container {\n  flex: 1;\n}\n.mrect .vel-container.vpaid video {\n  height: initial;\n}\n.mrect .vel-container.vpaid .brand-container {\n  flex: 0;\n  flex-basis: 50px;\n}\n.mrect.smart .brand-container {\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.mrect.smart .vel-container {\n  position: absolute;\n  border-top: none;\n  flex-direction: row;\n  align-items: center;\n  background-color: transparent;\n}\n.mrect.smart .vel-container video {\n  object-fit: cover;\n}\n\nbody.larger {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nbody.larger .__aa-ad-root {\n  position: relative;\n  top: initial !important;\n  left: initial !important;\n  transform: none !important;\n}\n\n.__aa-ad-root {\n  width: 100%;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 50%;\n  flex-direction: column;\n  overflow: hidden;\n  transform: translateX(-50%);\n  align-self: center;\n  justify-self: center;\n  border: 1px solid #eee;\n  box-sizing: border-box;\n}\n.__aa-ad-root.banner .__mi-w {\n  top: initial;\n  bottom: 6px;\n}\n\n.ima-vel-container {\n  position: relative;\n  overflow: hidden;\n  border-bottom: none;\n}\n\n.vel-container {\n  background-color: black;\n  display: flex;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vel-container.vpaid {\n  display: block;\n}\n.vel-container.vpaid.columns {\n  display: flex;\n}\n\n.smart .vel-container {\n  background-color: transparent;\n}\n.smart .vel-container.vpaid {\n  display: flex;\n}\n\n.vel-slot-iso {\n  flex: 1;\n  position: relative;\n  width: 100%;\n}\n\n.smart .vpaid .vel-slot-iso {\n  width: auto;\n  position: relative;\n  display: inline;\n  flex: initial;\n}\n\n.vi-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #3f3e5c;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.brand-container {\n  align-items: center;\n  justify-content: center;\n  z-index: 999999;\n  display: flex;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 0 5px;\n}\n.brand-container.smart {\n  background-color: transparent;\n}\n.brand-container.inset {\n  position: absolute;\n  left: 0px;\n  bottom: 6px;\n  background-color: transparent;\n  padding-right: 1em;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.brand-container.inset.social {\n  bottom: -100%;\n  padding-right: 0;\n  background-color: white;\n}\n.brand-container.inset.social.show {\n  bottom: 0px;\n}\n.brand-container.mrect {\n  width: 100%;\n  border-top: 1px solid #ddd;\n  padding: 0.25em 0;\n}\n.brand-container .bcta {\n  padding: 0.5em 1em;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  font-size: min(24px, 7vh);\n  text-decoration: none;\n  line-height: 1;\n  font-weight: 700;\n  background-color: #3f3e5c;\n  color: white;\n  border-bottom: 1px solid #201f2e;\n  border-right: 1px solid #201f2e;\n  border-radius: 0.3em;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5), inset 0px 0px 1px white;\n}\n.brand-container .bcta:hover {\n  background-color: #54537a;\n}\n.brand-container .bcta.smart {\n  font-size: 14px;\n  font-size: max(15px, min(26px, 3vw));\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);\n}\n.brand-container.banner {\n  padding: 0 0.35em;\n  flex: 0;\n}\n.brand-container.banner.sm {\n  padding: 0 0.1em;\n  flex: 1;\n}\n.brand-container.banner.sm .bcta {\n  padding: 0.5em;\n}\n\n.bcta-w {\n  width: 100%;\n  text-decoration: none;\n  height: 100%;\n  cursor: default;\n}\n\n.vel-w {\n  position: relative;\n}\n\nsvg.adchoices-logo,\nsvg.mi-l {\n  width: 14px;\n  height: 14px;\n  opacity: 1;\n}\n\n.adchoices,\n.__mi-w {\n  width: 14px;\n  height: 14px;\n  opacity: 1;\n  position: absolute;\n  right: 4px;\n  top: 6px;\n  z-index: 99999;\n}\n\n.__mi-w {\n  padding: 6px 8px;\n  left: 0px;\n  bottom: 6px;\n  top: initial;\n  fill: rgba(255, 255, 255, 0.8);\n  right: none;\n  background: radial-gradient(rgba(0, 0, 0, 0.1), transparent);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n}\n\n.vpaid-slot {\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n}\n\n.imasl {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n}\n.imasl > div {\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.am-fp-w {\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  background: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nimg.am-fp-img {\n  width: 100%;\n}\n\n.v-cl {\n  display: inline-block;\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  padding: 2px 6px;\n  color: rgba(255, 255, 255, 0.3);\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n  font-weight: 400;\n  font-size: 20px;\n  z-index: 10;\n}\n.v-cl:hover {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.vi-bgc {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}');
    let ki = function () {
        let t = function () {
            var t;
            let n = null != (t = V("_c")) ? t : V("_b");
            if (null == n) throw U("noenv");
            return n
        }();
        if (null == t || t.length < 3) throw U("ienv");
        let n = function (t) {
                var n;
                let i = new bn,
                    e = p(t),
                    s = (null != (n = e.v) ? n : "pba0.0") + "-" + Vt,
                    r = e.r = O(50) ? 1 : 0;
                return e.v = s + "-" + r, i.add(e), i
            }(t[2]),
            i = function (t) {
                try {
                    return JSON.parse(atob(t))
                } catch (t) {
                    throw U("ibid")
                }
            }(t[0]);
        var e;
        return [i, parseFloat(t[1]), n, null != (e = i.adm) && (un.test(e) || /^\s*<!\-\-/.test(e) && /vast/i.test(e)), t[3]]
    }();
    try {
        ! function () {
            let n = ki[3],
                i = ki[2];
            try {
                if (n) {
                    var a;
                    let t = ki[0],
                        n = null != (a = i.data()) ? a : {};
                    (new Image).src = i.Ku("iwin", {
                        _e: n._e,
                        c3: t.crid,
                        c1: E(),
                        p: t.price,
                        c2: "v",
                        bid: t.id
                    })
                }! function (t) {
                    function n(n) {
                        null != n && (e || (e = !0, n.forEach((n => {
                            n && n.body && "HeavyAdIntervention" === n.body.id && (i.Yu("g_hai", {
                                bid: t[0].id,
                                c3: t[0].crid,
                                e: n.body.message,
                                c1: n.body.sourceFile,
                                do: w(),
                                c2: n.url
                            }), i.Vu(!0))
                        }))))
                    }
                    if (!("ReportingObserver" in Xt)) return;
                    let i = t[2],
                        e = !1,
                        r = new(0, Xt.ReportingObserver)(n, {
                            buffered: !0
                        });
                    r.observe(), ["unload", "pagehide"].forEach((t => {
                        ! function (t, n, i, e) {
                            void 0 === e && (e = !1);
                            try {
                                if (r = t.addEventListener, _n.toString.call(r) === (void 0 === (h = r.name) && (h = ""), En.dn.replace("toString", h || "")) && r.toString.toString() === En.dn) return t.addEventListener(n, i);
                                if (e) try {
                                    t.addEventListener(n, i)
                                } catch (t) {}
                                if (null == Sn) {
                                    let [t, n] = function () {
                                        try {
                                            var t;
                                            let n = function (t) {
                                                let n = s("iframe");
                                                if (n.src = "about:blank", n.width = n.height = "0", n.style.display = "none", null != qt.head.replaceChildren) {
                                                    let t = s("div");
                                                    return qt.head.appendChild(t), t.replaceChildren(n), n
                                                }
                                                return qt.head.appendChild(n), n
                                            }();
                                            return [null != (t = n.contentWindow) ? t : $t, () => l(n)]
                                        } catch (t) {
                                            return [$t, () => {}]
                                        }
                                    }();
                                    Sn = t.addEventListener, n()
                                }
                                Sn.call(t, n, i)
                            } catch (t) {}
                            var r, h
                        }($t, t, (() => {
                            n(r.takeRecords())
                        }))
                    }))
                }(ki)
            } catch (t) {}
            n ? function (n) {
                var i;
                try {
                    L(n[0], n[2])
                } catch (t) {}! function (n, i, s, l, a, o, c) {
                    let u = 0,
                        d = "init";
                    try {
                        i.id, i.crid, i.crid, $t.addEventListener("unload", (() => {
                            Date.now(), i.id, i.crid, i.crid
                        }))
                    } catch (t) {}
                    Date.now(),
                        function (t, n) {
                            return function () {
                                try {
                                    null != top && top.location.href
                                } catch (t) {
                                    return !1
                                }
                            }(), m(function (t, n) {
                                var i, e;
                                let s = n,
                                    r = null != (i = n.body) ? i : function (t, n) {
                                        if (void 0 === t && (t = qt), void 0 === n && (n = hn), null != t.body) return t.body;
                                        let i = t.createElement("body");
                                        return n.appendChild(i), i
                                    }(n);
                                if (null == r || null == s) throw nn("NOP!");
                                let l = function (t, n) {
                                        return new xi(t, n).get()
                                    }(r, t),
                                    h = T("div", "__aa-ad-root " + l.t, s);
                                return I(h, {
                                    style: "height:" + l.s[1] + "px;width:" + l.s[0] + "px;"
                                }), r.appendChild(h), [h, null != (e = h.ownerDocument) ? e : document, l]
                            }(t, n))
                        }(i, n).then((n => {
                            let [c, v, b] = n;
                            return a.add({
                                    w: b.v.w,
                                    h: b.v.h
                                }), u = Date.now(), d = "bsap",
                                function (n, i, s, l, a, o, c) {
                                    let u = function (n) {
                                            void 0 === n && (n = "");
                                            let i = t(n);
                                            if (null == i) return {};
                                            i.className += "  amx-aco-active ";
                                            let e = y(i.src);
                                            if (null == e) return {};
                                            let s = p(e.hash.slice(1));
                                            return J({}, p(e.search.slice(1)), s, "object" == typeof _QPP_ && null != _QPP_ && _QPP_ !== Xt.fp ? _QPP_ : {})
                                        }(),
                                        d = null != (null == u ? void 0 : u.__m) && "true" === u.__m;
                                    try {
                                        if (d && !yi) {
                                            for (let t of s)(new Image).src = e(v = t, Nt) ? v + "&M=vio" : v;
                                            yi = !0
                                        }
                                    } catch (t) {
                                        d = !1
                                    }
                                    var v;
                                    let b = (t, e) => {
                                        let u;
                                        return ((t, e) => {
                                            var r;
                                            if (t > 2) return g(nn("tfail"));
                                            let h = new Zn(n, i, a, null != (r = n.price) ? r : 0, l, !1, t);
                                            d || h.add("vimp", s);
                                            try {
                                                L(n, o, void 0, h)
                                            } catch (t) {}
                                            return m(h)
                                        })(t).then((i => i.get(o).then((t => {
                                            n.id, n.crid, n.crid;
                                            let i = pt(t) && null != t.Kp ? wi : bi;
                                            return (u = new i(t, o, l)).vm(!1)
                                        })).catch((e => {
                                            var s;
                                            let l = D(f(e, "render"));
                                            if (null == u || !u.played()) {
                                                Gt((() => {
                                                    try {
                                                        O(5) && L(n, o, l)
                                                    } catch (t) {}
                                                }), 10), o.Yu("verr", {
                                                    e: l,
                                                    c1: null != (s = null == u ? void 0 : u.vp()) ? s : "-uk",
                                                    c2: i.tag(),
                                                    bid: i.bid.id,
                                                    c3: i.bid.crid,
                                                    cr: i.bid.crid,
                                                    cn: Math.round(100 * X()),
                                                    cn2: q(),
                                                    M: Zt(i.ct())
                                                });
                                                try {
                                                    c(e, i, u)
                                                } catch (t) {}
                                                if (t > 2) throw e;
                                                return null != u && u.Fp(), h((n => Gt((() => n(b(t + 1))), r(300) + 250)))
                                            }
                                        }))))
                                    };
                                    return b(0, "")
                                }(i, s, l, c, b, a, o)
                        })).catch((t => {
                            a.Yu("g_bsenve", {
                                e: D(t),
                                bid: i.id,
                                c1: i.crid,
                                c2: i.adomain ? i.adomain[0] : "",
                                p: i.price
                            })
                        }))
                }(qt, n[0], F(n[0].adm, null == (i = n[0].ext) || i.gp), function (t) {
                    let n = (t[4] || []).concat(null != t[0].nurl ? [t[0].nurl] : []),
                        i = null;
                    try {
                        let n = t[2].data();
                        i = n.v
                    } catch (t) {}
                    return n.map((n => {
                        var i, s;
                        return null != (s = n) && e(s, "hbx/himp") && /aid=[^_]/.test(s) ? function (t, n) {
                            var i, e;
                            let s = $(kn, Math.floor(1e4 * n[0].price), $(wn, n[0].price, t, "p"), "pp");
                            return $(yn, null != (e = null == (i = n[0].ext) ? void 0 : i.gp) ? e : n[0].price, s, "np")
                        }(n, t) : F(n, null != (null == (i = t[0].ext) ? void 0 : i.gp) || t[0].price)
                    })).map((t => {
                        try {
                            return t.replace(/([\?&]v=)(pba[^&]+)/, ((t, n, e) => n + (null != i ? i : e)))
                        } catch (n) {
                            return t
                        }
                    }))
                }(n), n[2], ((t, i, e) => {
                    let s = "vp" === i.dp().t ? 901 : 900;
                    if (null != e) try {
                        e.zp(s)
                    } catch (t) {} else i.zp(s);
                    L(n[0], n[2], D(null != t ? t : "playback_fail"), i)
                }))
            }(ki) : i.Qu("g_ivdx", {})
        }()
    } catch (t) {
        (null == t || null == t.go) && U(Zt(t))
    }
}();
//# sourceMappingURL=v.js.map