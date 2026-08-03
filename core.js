var _yt_m = {};
(function(g) {
    var window = this;
    var baa, caa, za, Va, Wa, ib, pb, vb, yb, laa, maa, Db, naa, Jb, Nb, Sb, oaa, Yb, fc, taa, Dc, raa, Ec, Gc, Jc, Vc, Wc, vaa, Zc, $c, ad, waa, nd, kd, rd, qd, xaa, vd, yaa, Hd, Jd, Md, Od, Pd, Yd, Zd, $d, ae, ee, ne, Aaa, pe, Caa, Baa, Daa, Eaa, ze, Faa, Gaa, Ce, Ee, Ge, Ie, Me, Ne, Oe, Ke, Re, Le, Se, Ve, We, $e, af, bf, cf, df, ef, gf, jf, mf, rf, vf, If, Qaa, Qf, dg, hg, gg, ig, jg, og, pg, qg, Vaa, Waa, Dg, Fg, Zaa, Ig, Xaa, Mg, $aa, Pg, dba, eba, fba, gh, gba, hba, jba, Ch, Eh, Fh, Gh, Hh, mba, nba, bi, ci, oba, di, ei, pba, li, qba, oi, pi, rba, wi, xi, Ai, Ci, sba, zi, tba, Gi, Ni, Oi, Pi, Li, Qi, Si, wba, Yi, aj, ej, xba, ij, yba, zba, Bba, qj, Dba, Cba, Eba, Bj, Fba, Gba, Gj, Hba, Ij, Jj, Jba, Kba, Lba, Rj, Qj, Mba, Uj, Vj, Yj, Zj, hk, Qba, qk, rk, Rba, xk, Sba, Gk, Tba, Wba, Yba, Xba, Zba, $ba, aca, Ok, dca, cca, bca, eca, fca, Xk, $k, Zk, al, cl, fl, hl, nl, pl, rl, ica, sl, vl, gl, ol, ll, Dl, Fl, Gl, Il, Jl, Hl, Kl, Ll, Ml, Nl, Ol, lca, Iba;
    g.m = function(a) {
        return function() {
            return g.aa[a].apply(this, arguments)
        }
    }
    ;
    g.n = function(a) {
        return void 0 !== a
    }
    ;
    g.q = function(a, b, c) {
        a = a.split(".");
        c = c || g.ba;
        a[0]in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            !a.length && g.n(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
    }
    ;
    g.r = function(a, b) {
        for (var c = a.split("."), d = b || g.ba, e; e = c.shift(); )
            if (null != d[e])
                d = d[e];
            else
                return null;
        return d
    }
    ;
    g.u = function() {}
    ;
    g.ca = function(a) {
        a.ra = function() {
            return a.ib ? a.ib : a.ib = new a
        }
    }
    ;
    g.da = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
    ;
    g.ea = function(a) {
        return "array" == g.da(a)
    }
    ;
    g.fa = function(a) {
        var b = g.da(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    ;
    g.ga = function(a) {
        return "string" == typeof a
    }
    ;
    g.ha = function(a) {
        return "number" == typeof a
    }
    ;
    g.ia = function(a) {
        return "function" == g.da(a)
    }
    ;
    g.ka = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    ;
    g.na = function(a) {
        return a[ma] || (a[ma] = ++aaa)
    }
    ;
    baa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    ;
    caa = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    ;
    g.x = function(a, b, c) {
        g.x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? baa : caa;
        return g.x.apply(null, arguments)
    }
    ;
    g.oa = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    ;
    g.pa = function(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    ;
    g.y = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.J = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.zH = function(a, c, f) {
            for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++)
                k[l - 2] = arguments[l];
            return b.prototype[c].apply(a, k)
        }
    }
    ;
    g.qa = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }
    ;
    g.ra = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    ;
    g.A = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }
    ;
    g.sa = function(a) {
        return (0,
        window.encodeURIComponent)(String(a))
    }
    ;
    g.ta = function(a) {
        return (0,
        window.decodeURIComponent)(a.replace(/\+/g, " "))
    }
    ;
    g.ua = function(a) {
        if (!daa.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(eaa, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(faa, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(gaa, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(haa, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(iaa, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(jaa, "&#0;"));
        return a
    }
    ;
    g.va = function(a, b) {
        return -1 != a.indexOf(b)
    }
    ;
    g.wa = function(a, b) {
        return g.va(a.toLowerCase(), b.toLowerCase())
    }
    ;
    g.C = function(a) {
        return null == a ? "" : String(a)
    }
    ;
    g.Aa = function(a, b) {
        for (var c = 0, d = (0,
        g.xa)(String(a)).split("."), e = (0,
        g.xa)(String(b)).split("."), f = Math.max(d.length, e.length), k = 0; 0 == c && k < f; k++) {
            var l = d[k] || ""
              , p = e[k] || ""
              , w = RegExp("(\\d*)(\\D*)", "g")
              , B = RegExp("(\\d*)(\\D*)", "g");
            do {
                var z = w.exec(l) || ["", "", ""]
                  , H = B.exec(p) || ["", "", ""];
                if (0 == z[0].length && 0 == H[0].length)
                    break;
                c = za(0 == z[1].length ? 0 : (0,
                window.parseInt)(z[1], 10), 0 == H[1].length ? 0 : (0,
                window.parseInt)(H[1], 10)) || za(0 == z[2].length, 0 == H[2].length) || za(z[2], H[2])
            } while (0 == c)
        }
        return c
    }
    ;
    za = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;
    g.Ba = function(a) {
        for (var b = 0, c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }
    ;
    g.Ca = function(a, b, c) {
        for (var d = a.length, e = g.ga(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return f;
        return -1
    }
    ;
    g.Ea = function(a, b) {
        return 0 <= (0,
        g.Da)(a, b)
    }
    ;
    g.Ga = function(a, b) {
        var c = (0,
        g.Da)(a, b), d;
        (d = 0 <= c) && g.Fa(a, c);
        return d
    }
    ;
    g.Fa = function(a, b) {
        Array.prototype.splice.call(a, b, 1)
    }
    ;
    g.Ha = function(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }
    ;
    g.Ia = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    ;
    g.Ja = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (g.fa(d)) {
                var e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (var k = 0; k < f; k++)
                    a[e + k] = d[k]
            } else
                a.push(d)
        }
    }
    ;
    g.Ka = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    ;
    g.La = function(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    ;
    g.Ma = function(a, b, c) {
        var d = {}, e;
        for (e in a)
            b.call(c, a[e], e, a) && (d[e] = a[e]);
        return d
    }
    ;
    g.Na = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    ;
    g.Oa = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    ;
    g.Pa = function(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a))
                return d
    }
    ;
    g.Qa = function(a) {
        for (var b in a)
            delete a[b]
    }
    ;
    g.Sa = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Ra.length; f++)
                c = Ra[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;
    g.Ua = function(a) {
        return g.va(g.Ta, a)
    }
    ;
    Va = function() {
        return g.Ua("Opera") || g.Ua("OPR")
    }
    ;
    Wa = function() {
        return (g.Ua("Chrome") || g.Ua("CriOS")) && !Va() && !g.Ua("Edge")
    }
    ;
    g.Ya = function() {
        this.b = "";
        this.g = Xa
    }
    ;
    g.Za = function(a) {
        return a instanceof g.Ya && a.constructor === g.Ya && a.g === Xa ? a.b : "type_error:Const"
    }
    ;
    g.$a = function(a) {
        var b = new g.Ya;
        b.b = a;
        return b
    }
    ;
    g.bb = function() {
        this.b = "";
        this.g = ab
    }
    ;
    g.cb = function(a) {
        if (a instanceof g.bb && a.constructor === g.bb && a.g === ab)
            return a.b;
        g.da(a);
        return "type_error:SafeStyle"
    }
    ;
    g.db = function(a) {
        var b = new g.bb;
        b.b = a;
        return b
    }
    ;
    g.fb = function() {
        this.b = "";
        this.g = eb
    }
    ;
    g.gb = function(a) {
        if (a instanceof g.fb && a.constructor === g.fb && a.g === eb)
            return a.b;
        g.da(a);
        return "type_error:SafeUrl"
    }
    ;
    g.jb = function(a) {
        if (a instanceof g.fb)
            return a;
        a = a.qh ? a.ef() : String(a);
        kaa.test(a) || (a = "about:invalid#zClosurez");
        return ib(a)
    }
    ;
    ib = function(a) {
        var b = new g.fb;
        b.b = a;
        return b
    }
    ;
    g.lb = function() {
        this.b = "";
        this.g = kb
    }
    ;
    g.nb = function(a) {
        if (a instanceof g.lb && a.constructor === g.lb && a.g === kb)
            return a.b;
        g.da(a);
        return "type_error:TrustedResourceUrl"
    }
    ;
    pb = function() {
        this.b = "";
        this.o = ob;
        this.g = null
    }
    ;
    g.qb = function(a) {
        if (a instanceof pb && a.constructor === pb && a.o === ob)
            return a.b;
        g.da(a);
        return "type_error:SafeHtml"
    }
    ;
    g.sb = function(a) {
        if (a instanceof pb)
            return a;
        var b = null;
        a.Qs && (b = a.zi());
        a = g.ua(a.qh ? a.ef() : String(a));
        return g.rb(a, b)
    }
    ;
    g.rb = function(a, b) {
        var c = new pb;
        c.b = a;
        c.g = b;
        return c
    }
    ;
    g.tb = function(a, b, c) {
        g.Za(a);
        g.Za(a);
        return g.rb(b, c || null)
    }
    ;
    g.ub = function(a) {
        return function() {
            return a
        }
    }
    ;
    vb = function(a) {
        return a
    }
    ;
    g.wb = function() {}
    ;
    yb = function(a) {
        if (a instanceof g.wb)
            return a;
        if ("function" == typeof a.ed)
            return a.ed(!1);
        if (g.fa(a)) {
            var b = 0
              , c = new g.wb;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw xb;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    ;
    g.zb = function(a, b, c) {
        if (g.fa(a))
            try {
                (0,
                g.D)(a, b, c)
            } catch (d) {
                if (d !== xb)
                    throw d;
            }
        else {
            a = yb(a);
            try {
                for (; ; )
                    b.call(c, a.next(), void 0, a)
            } catch (d) {
                if (d !== xb)
                    throw d;
            }
        }
    }
    ;
    laa = function(a) {
        if (g.fa(a))
            return g.Ia(a);
        a = yb(a);
        var b = [];
        g.zb(a, function(a) {
            b.push(a)
        });
        return b
    }
    ;
    g.Ab = function(a, b) {
        this.o = {};
        this.g = [];
        this.yg = this.b = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof g.Ab ? (c = a.qb(),
            d = a.jb()) : (c = g.Oa(a),
            d = g.Na(a));
            for (var e = 0; e < c.length; e++)
                this.set(c[e], d[e])
        }
    }
    ;
    g.Cb = function(a, b) {
        return g.Bb(a.o, b)
    }
    ;
    maa = function(a, b) {
        return a === b
    }
    ;
    Db = function(a) {
        if (a.b != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length; ) {
                var d = a.g[b];
                g.Bb(a.o, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.b != a.g.length) {
            for (var e = {}, c = b = 0; b < a.g.length; )
                d = a.g[b],
                g.Bb(e, d) || (a.g[c++] = d,
                e[d] = 1),
                b++;
            a.g.length = c
        }
    }
    ;
    g.Bb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;
    g.Eb = function() {
        return g.Ua("iPhone") && !g.Ua("iPod") && !g.Ua("iPad")
    }
    ;
    naa = function() {
        var a = g.Ta;
        if (g.Fb)
            return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (g.Gb)
            return /Edge\/([\d\.]+)/.exec(a);
        if (g.Hb)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (g.Ib)
            return /WebKit\/(\S+)/.exec(a)
    }
    ;
    Jb = function() {
        var a = g.ba.document;
        return a ? a.documentMode : void 0
    }
    ;
    g.Mb = function(a) {
        return Kb[a] || (Kb[a] = 0 <= g.Aa(g.Lb, a))
    }
    ;
    Nb = function(a, b, c, d, e, f, k) {
        var l = "";
        a && (l += a + ":");
        c && (l += "//",
        b && (l += b + "@"),
        l += c,
        d && (l += ":" + d));
        e && (l += e);
        f && (l += "?" + f);
        k && (l += "#" + k);
        return l
    }
    ;
    g.Ob = function(a) {
        return a ? (0,
        window.decodeURI)(a) : a
    }
    ;
    g.Qb = function(a, b) {
        return b.match(g.Pb)[a] || null
    }
    ;
    g.Rb = function(a) {
        return g.Ob(g.Qb(3, a))
    }
    ;
    Sb = function(a) {
        var b = a.indexOf("#");
        return 0 > b ? null : a.substr(b + 1)
    }
    ;
    g.Tb = function(a) {
        a = a.match(g.Pb);
        return Nb(a[1], a[2], a[3], a[4])
    }
    ;
    g.Ub = function(a) {
        a = a.match(g.Pb);
        return Nb(null, null, null, null, a[5], a[6], a[7])
    }
    ;
    g.Vb = function(a) {
        var b = a.indexOf("#");
        return 0 > b ? a : a.substr(0, b)
    }
    ;
    oaa = function(a, b) {
        if (a)
            for (var c = a.split("&"), d = 0; d < c.length; d++) {
                var e = c[d].indexOf("=")
                  , f = null
                  , k = null;
                0 <= e ? (f = c[d].substring(0, e),
                k = c[d].substring(e + 1)) : f = c[d];
                b(f, k ? g.ta(k) : "")
            }
    }
    ;
    g.Wb = function(a) {
        if (a[1]) {
            var b = a[0]
              , c = b.indexOf("#");
            0 <= c && (a.push(b.substr(c)),
            a[0] = b = b.substr(0, c));
            c = b.indexOf("?");
            0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
        }
        return a.join("")
    }
    ;
    g.Xb = function(a, b, c) {
        if (g.ea(b))
            for (var d = 0; d < b.length; d++)
                g.Xb(a, String(b[d]), c);
        else
            null != b && c.push("&", a, "" === b ? "" : "=", g.sa(b))
    }
    ;
    Yb = function(a, b) {
        for (var c in b)
            g.Xb(c, b[c], a);
        return a
    }
    ;
    g.$b = function(a) {
        a = Yb([], a);
        a[0] = "";
        return a.join("")
    }
    ;
    g.ac = function(a, b) {
        return g.Wb(Yb([a], b))
    }
    ;
    g.bc = function(a, b, c) {
        a = [a, "&", b];
        null != c && a.push("=", g.sa(c));
        return g.Wb(a)
    }
    ;
    g.cc = function(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e),
                !f || 61 == f || 38 == f || 35 == f)
                    return b;
            b += e + 1
        }
        return -1
    }
    ;
    g.ec = function(a, b) {
        var c = a.search(g.dc)
          , d = g.cc(a, 0, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return g.ta(a.substr(d, e - d))
    }
    ;
    fc = function(a, b) {
        for (var c = a.search(g.dc), d = 0, e, f = []; 0 <= (e = g.cc(a, d, b, c)); )
            f.push(a.substring(d, e)),
            d = Math.min(a.indexOf("&", e) + 1 || c, c);
        f.push(a.substr(d));
        return f.join("").replace(paa, "$1")
    }
    ;
    g.gc = function(a, b, c) {
        return g.bc(fc(a, b), b, c)
    }
    ;
    g.hc = function(a, b) {
        var c;
        c = b instanceof g.fb ? b : g.jb(b);
        a.href = g.gb(c)
    }
    ;
    g.lc = function(a) {
        return a ? new g.ic(g.jc(a)) : kc || (kc = new g.ic)
    }
    ;
    g.mc = function(a) {
        return g.ga(a) ? window.document.getElementById(a) : a
    }
    ;
    g.oc = function(a, b) {
        var c = b || window.document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : g.nc("*", a, b)
    }
    ;
    g.pc = function(a, b) {
        var c = b || window.document
          , d = null;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = g.nc("*", a, b)[0];
        return d || null
    }
    ;
    g.nc = function(a, b, c) {
        var d = window.document;
        c = c || d;
        a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b))
            return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, f = 0, k; k = c[f]; f++)
                    a == k.nodeName && (d[e++] = k);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (f = e = 0; k = c[f]; f++)
                a = k.className,
                "function" == typeof a.split && g.Ea(a.split(/\s+/), b) && (d[e++] = k);
            d.length = e;
            return d
        }
        return c
    }
    ;
    g.rc = function(a, b) {
        g.La(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : qc.hasOwnProperty(d) ? a.setAttribute(qc[d], b) : g.qa(d, "aria-") || g.qa(d, "data-") ? a.setAttribute(d, b) : a[d] = b
        })
    }
    ;
    g.tc = function(a, b, c) {
        return g.sc(window.document, arguments)
    }
    ;
    g.sc = function(a, b) {
        var c = b[0]
          , d = b[1];
        if (!qaa && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', g.ua(d.name), '"');
            if (d.type) {
                c.push(' type="', g.ua(d.type), '"');
                var e = {};
                g.Sa(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (g.ga(d) ? c.className = d : g.ea(d) ? c.className = d.join(" ") : g.rc(c, d));
        2 < b.length && g.uc(a, c, b, 2);
        return c
    }
    ;
    g.uc = function(a, b, c, d) {
        function e(c) {
            c && b.appendChild(g.ga(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !g.fa(f) || g.ka(f) && 0 < f.nodeType ? e(f) : (0,
            g.D)(raa(f) ? g.Ia(f) : f, e)
        }
    }
    ;
    g.vc = function(a) {
        return window.document.createElement(a)
    }
    ;
    g.wc = function(a, b) {
        a.appendChild(b)
    }
    ;
    g.xc = function(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    ;
    g.yc = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    ;
    g.zc = function(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }
    ;
    g.Bc = function(a) {
        return saa && void 0 != a.children ? a.children : (0,
        g.Ac)(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    }
    ;
    g.Cc = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    g.jc = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    ;
    taa = function(a, b) {
        var c = [];
        return Dc(a, b, c, !0) ? c[0] : void 0
    }
    ;
    Dc = function(a, b, c, d) {
        if (null != a)
            for (a = a.firstChild; a; ) {
                if (b(a) && (c.push(a),
                d) || Dc(a, b, c, d))
                    return !0;
                a = a.nextSibling
            }
        return !1
    }
    ;
    raa = function(a) {
        if (a && "number" == typeof a.length) {
            if (g.ka(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (g.ia(a))
                return "function" == typeof a.item
        }
        return !1
    }
    ;
    g.Fc = function(a, b, c, d) {
        if (!b && !c)
            return null;
        var e = b ? b.toUpperCase() : null;
        return Ec(a, function(a) {
            return (!e || a.nodeName == e) && (!c || g.ga(a.className) && g.Ea(a.className.split(/\s+/), c))
        }, d)
    }
    ;
    Ec = function(a, b, c) {
        for (var d = 0; a && (null == c || d <= c); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            d++
        }
        return null
    }
    ;
    g.ic = function(a) {
        this.b = a || g.ba.document || window.document
    }
    ;
    Gc = function(a) {
        Gc[" "](a);
        return a
    }
    ;
    g.Hc = function(a, b) {
        try {
            return Gc(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    ;
    g.Ic = function(a, b) {
        a.style.display = b ? "" : "none"
    }
    ;
    Jc = function(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return g.ga(a) && a.match(/\S+/g) || []
    }
    ;
    g.Kc = function(a, b) {
        return a.classList ? a.classList.contains(b) : g.Ea(Jc(a), b)
    }
    ;
    g.Lc = function(a, b) {
        a.classList ? a.classList.add(b) : g.Kc(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }
    ;
    g.Mc = function(a, b) {
        if (a.classList)
            (0,
            g.D)(b, function(b) {
                g.Lc(a, b)
            });
        else {
            var c = {};
            (0,
            g.D)(Jc(a), function(a) {
                c[a] = !0
            });
            (0,
            g.D)(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c)
                a.className += 0 < a.className.length ? " " + d : d
        }
    }
    ;
    g.Nc = function(a, b) {
        a.classList ? a.classList.remove(b) : g.Kc(a, b) && (a.className = (0,
        g.Ac)(Jc(a), function(a) {
            return a != b
        }).join(" "))
    }
    ;
    g.Oc = function(a, b) {
        a.classList ? (0,
        g.D)(b, function(b) {
            g.Nc(a, b)
        }) : a.className = (0,
        g.Ac)(Jc(a), function(a) {
            return !g.Ea(b, a)
        }).join(" ")
    }
    ;
    g.Pc = function(a, b, c) {
        c ? g.Lc(a, b) : g.Nc(a, b)
    }
    ;
    g.E = function() {
        this.ob = this.ob;
        this.Ka = this.Ka
    }
    ;
    g.F = function(a, b) {
        g.Qc(a, g.oa(g.Sc, b))
    }
    ;
    g.Qc = function(a, b) {
        a.ob ? b.call(void 0) : (a.Ka || (a.Ka = []),
        a.Ka.push(g.n(void 0) ? (0,
        g.x)(b, void 0) : b))
    }
    ;
    g.Sc = function(a) {
        a && "function" == typeof a.dispose && a.dispose()
    }
    ;
    g.Tc = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.A = !1;
        this.SB = !0
    }
    ;
    Vc = function(a) {
        return g.Ib ? "webkit" + a : g.Uc ? "o" + a.toLowerCase() : a.toLowerCase()
    }
    ;
    Wc = function(a, b) {
        g.Tc.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.g = this.state = null;
        a && this.init(a, b)
    }
    ;
    g.Yc = function(a) {
        return !(!a || !a[Xc])
    }
    ;
    vaa = function(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.Ze = !!d;
        this.De = e;
        this.key = ++uaa;
        this.removed = this.bn = !1
    }
    ;
    Zc = function(a) {
        a.removed = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.De = null
    }
    ;
    $c = function(a) {
        this.src = a;
        this.b = {};
        this.g = 0
    }
    ;
    g.bd = function(a, b, c, d, e, f) {
        var k = b.toString();
        b = a.b[k];
        b || (b = a.b[k] = [],
        a.g++);
        var l = ad(b, c, e, f);
        -1 < l ? (a = b[l],
        d || (a.bn = !1)) : (a = new vaa(c,a.src,k,!!e,f),
        a.bn = d,
        b.push(a));
        return a
    }
    ;
    g.cd = function(a, b) {
        var c = b.type;
        c in a.b && g.Ga(a.b[c], b) && (Zc(b),
        0 == a.b[c].length && (delete a.b[c],
        a.g--))
    }
    ;
    g.dd = function(a, b, c, d, e) {
        a = a.b[b.toString()];
        b = -1;
        a && (b = ad(a, c, d, e));
        return -1 < b ? a[b] : null
    }
    ;
    ad = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.removed && f.listener == b && f.Ze == !!c && f.De == d)
                return e
        }
        return -1
    }
    ;
    g.ed = function(a, b, c, d, e) {
        if (g.ea(b)) {
            for (var f = 0; f < b.length; f++)
                g.ed(a, b[f], c, d, e);
            return null
        }
        c = g.fd(c);
        return g.Yc(a) ? a.listen(b, c, d, e) : g.gd(a, b, c, !1, d, e)
    }
    ;
    g.gd = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var k = !!e
          , l = g.id(a);
        l || (a[jd] = l = new $c(a));
        c = g.bd(l, b, c, d, e, f);
        if (c.proxy)
            return c;
        d = waa();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            a.addEventListener(b.toString(), d, k);
        else if (a.attachEvent)
            a.attachEvent(kd(b.toString()), d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        ld++;
        return c
    }
    ;
    waa = function() {
        var a = xaa
          , b = md ? function(c) {
            return a.call(b.src, b.listener, c)
        }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
        ;
        return b
    }
    ;
    nd = function(a, b, c, d, e) {
        if (g.ea(b))
            for (var f = 0; f < b.length; f++)
                nd(a, b[f], c, d, e);
        else
            c = g.fd(c),
            g.Yc(a) ? a.Ia(b, c, d, e) : a && (a = g.id(a)) && (b = g.dd(a, b, c, !!d, e)) && g.od(b)
    }
    ;
    g.od = function(a) {
        if (!g.ha(a) && a && !a.removed) {
            var b = a.src;
            if (g.Yc(b))
                g.cd(b.P, a);
            else {
                var c = a.type
                  , d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.Ze) : b.detachEvent && b.detachEvent(kd(c), d);
                ld--;
                (c = g.id(b)) ? (g.cd(c, a),
                0 == c.g && (c.src = null,
                b[jd] = null)) : Zc(a)
            }
        }
    }
    ;
    kd = function(a) {
        return a in pd ? pd[a] : pd[a] = "on" + a
    }
    ;
    rd = function(a, b, c, d) {
        var e = !0;
        if (a = g.id(a))
            if (b = a.b[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.Ze == c && !f.removed && (f = qd(f, d),
                    e = e && !1 !== f)
                }
        return e
    }
    ;
    qd = function(a, b) {
        var c = a.listener
          , d = a.De || a.src;
        a.bn && g.od(a);
        return c.call(d, b)
    }
    ;
    xaa = function(a, b) {
        if (a.removed)
            return !0;
        if (!md) {
            var c = b || g.r("window.event")
              , d = new Wc(c,this)
              , e = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == c.keyCode)
                        try {
                            c.keyCode = -1;
                            break a
                        } catch (p) {
                            f = !0
                        }
                    if (f || void 0 == c.returnValue)
                        c.returnValue = !0
                }
                c = [];
                for (f = d.currentTarget; f; f = f.parentNode)
                    c.push(f);
                for (var f = a.type, k = c.length - 1; !d.A && 0 <= k; k--) {
                    d.currentTarget = c[k];
                    var l = rd(c[k], f, !0, d)
                      , e = e && l
                }
                for (k = 0; !d.A && k < c.length; k++)
                    d.currentTarget = c[k],
                    l = rd(c[k], f, !1, d),
                    e = e && l
            }
            return e
        }
        return qd(a, new Wc(b,this))
    }
    ;
    g.id = function(a) {
        a = a[jd];
        return a instanceof $c ? a : null
    }
    ;
    g.fd = function(a) {
        if (g.ia(a))
            return a;
        a[sd] || (a[sd] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[sd]
    }
    ;
    g.td = function() {
        g.E.call(this);
        this.P = new $c(this);
        this.vb = this;
        this.wa = null
    }
    ;
    g.ud = function(a) {
        a.P && a.P.removeAll(void 0)
    }
    ;
    g.xd = function(a) {
        vd(g.wd, arguments)
    }
    ;
    g.yd = function(a, b) {
        return a in g.wd ? g.wd[a] : b
    }
    ;
    g.Ad = function(a, b) {
        g.ia(a) && (a = g.zd(a));
        return window.setTimeout(a, b)
    }
    ;
    g.Bd = function(a) {
        window.clearTimeout(a)
    }
    ;
    g.zd = function(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                throw g.Cd(b),
                b;
            }
        }
        : a
    }
    ;
    g.Cd = function(a, b) {
        var c = g.r("yt.logging.errors.log");
        c ? c(a, b) : (c = g.yd("ERRORS", []),
        c.push([a, b]),
        g.xd("ERRORS", c))
    }
    ;
    g.Ed = function(a) {
        vd(Dd, arguments)
    }
    ;
    g.Fd = function(a, b, c) {
        var d = b || {};
        if (a = a in Dd ? Dd[a] : c)
            for (var e in d)
                a = a.replace(new RegExp("\\$" + e,"gi"), function() {
                    return d[e]
                });
        return a
    }
    ;
    vd = function(a, b) {
        if (1 < b.length) {
            var c = b[0];
            a[c] = b[1]
        } else {
            var d = b[0];
            for (c in d)
                a[c] = d[c]
        }
    }
    ;
    yaa = function() {}
    ;
    g.Gd = function() {}
    ;
    Hd = function(a) {
        this.b = a
    }
    ;
    g.Id = function() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.b = a
    }
    ;
    Jd = function() {
        var a = null;
        try {
            a = window.sessionStorage || null
        } catch (b) {}
        this.b = a
    }
    ;
    g.Kd = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
    ;
    g.Ld = function(a) {
        return eval("(" + a + ")")
    }
    ;
    g.Nd = function(a) {
        return (new Md(void 0)).Xd(a)
    }
    ;
    Md = function(a) {
        this.b = a
    }
    ;
    Od = function(a, b, c) {
        if (null == b)
            c.push("null");
        else {
            if ("object" == typeof b) {
                if (g.ea(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e),
                        e = d[f],
                        Od(a, a.b ? a.b.call(d, String(f), e) : e, c),
                        e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (e = b[d],
                        "function" != typeof e && (c.push(f),
                        Pd(d, c),
                        c.push(":"),
                        Od(a, a.b ? a.b.call(b, d, e) : e, c),
                        f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                Pd(b, c);
                break;
            case "number":
                c.push((0,
                window.isFinite)(b) && !(0,
                window.isNaN)(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
    ;
    Pd = function(a, b) {
        b.push('"', a.replace(zaa, function(a) {
            var b = Qd[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1),
            Qd[a] = b);
            return b
        }), '"')
    }
    ;
    g.Rd = function(a) {
        this.b = a
    }
    ;
    g.Sd = function(a) {
        this.b = a
    }
    ;
    g.Ud = function(a) {
        a = (a.b.cookie || "").split(Td);
        for (var b = [], c = [], d, e, f = 0; e = a[f]; f++)
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    }
    ;
    g.Wd = function(a, b, c) {
        g.Vd.set("" + a, b, c, "/", "youtube.com")
    }
    ;
    g.Xd = function(a) {
        return g.Vd.get("" + a, void 0)
    }
    ;
    Yd = function(a) {
        this.b = a
    }
    ;
    Zd = function(a) {
        this.data = a
    }
    ;
    $d = function(a) {
        return !g.n(a) || a instanceof Zd ? a : new Zd(a)
    }
    ;
    ae = function(a) {
        this.b = a
    }
    ;
    g.be = function(a) {
        var b = a.creation;
        a = a.expiration;
        return !!a && a < (0,
        g.G)() || !!b && b > (0,
        g.G)()
    }
    ;
    g.ce = function(a) {
        this.b = a
    }
    ;
    g.de = function(a) {
        return 0 <= g.Ta.search(a)
    }
    ;
    ee = function(a) {
        this.b = a.ids || [];
        this.g = a.flags || {};
        this.Qr = a.fexp || ""
    }
    ;
    g.ge = function(a) {
        return !!g.fe.g[a]
    }
    ;
    g.je = function() {
        return he && "desktop" == g.ie
    }
    ;
    g.ke = function() {
        return (window.screen ? window.screen.height : 0) || 32 * Math.round((window.innerHeight + 70) / 32)
    }
    ;
    ne = function() {
        var a = (window.screen ? window.screen.width : 0) || window.innerWidth
          , b = g.ke();
        le = Math.min(a, b);
        g.me = Math.max(a, b)
    }
    ;
    g.oe = function(a, b, c) {
        this.A = b;
        this.g = c;
        this.B = a;
        this.o = !0
    }
    ;
    g.qe = function(a) {
        for (var b = [], c = Aaa, d = a.elements, e, f = 0; e = d[f]; f++)
            if (e.form == a && !e.disabled && "FIELDSET" != e.tagName) {
                var k = e.name;
                switch (e.type.toLowerCase()) {
                case "file":
                case "submit":
                case "reset":
                case "button":
                    break;
                case "select-multiple":
                    e = pe(e);
                    if (null != e)
                        for (var l, p = 0; l = e[p]; p++)
                            c(b, k, l);
                    break;
                default:
                    l = pe(e),
                    null != l && c(b, k, l)
                }
            }
        d = a.getElementsByTagName("INPUT");
        for (f = 0; e = d[f]; f++)
            e.form == a && "image" == e.type.toLowerCase() && (k = e.name,
            c(b, k, e.value),
            c(b, k + ".x", "0"),
            c(b, k + ".y", "0"));
        return b.join("&")
    }
    ;
    Aaa = function(a, b, c) {
        a.push((0,
        window.encodeURIComponent)(b) + "=" + (0,
        window.encodeURIComponent)(c))
    }
    ;
    pe = function(a) {
        var b = a.type;
        if (!g.n(b))
            return null;
        switch (b.toLowerCase()) {
        case "checkbox":
        case "radio":
            return a.checked ? a.value : null;
        case "select-one":
            return b = a.selectedIndex,
            0 <= b ? a.options[b].value : null;
        case "select-multiple":
            for (var b = [], c, d = 0; c = a.options[d]; d++)
                c.selected && b.push(c.value);
            return b.length ? b : null;
        default:
            return g.n(a.value) ? a.value : null
        }
    }
    ;
    g.re = function(a, b) {
        for (var c = a.split(b), d = {}, e = 0, f = c.length; e < f; e++) {
            var k = c[e].split("=");
            if (1 == k.length && k[0] || 2 == k.length) {
                var l = g.ta(k[0] || "")
                  , k = g.ta(k[1] || "");
                l in d ? g.ea(d[l]) ? g.Ja(d[l], k) : d[l] = [d[l], k] : d[l] = k
            }
        }
        return d
    }
    ;
    g.se = function(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        return g.re(a, "&")
    }
    ;
    g.te = function(a, b) {
        var c, d = b || {}, e = a.split("#", 2);
        c = e[0];
        var e = 1 < e.length ? "#" + e[1] : ""
          , f = c.split("?", 2);
        c = f[0];
        var f = g.se(f[1] || ""), k;
        for (k in d)
            f[k] = d[k];
        return g.ac(c, f) + e
    }
    ;
    g.ue = function(a) {
        var b;
        b || (b = window.location.href);
        var c = g.Qb(1, a)
          , d = g.Rb(a);
        c && d ? (a = a.match(g.Pb),
        b = b.match(g.Pb),
        a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? g.Rb(b) == d && (+g.Qb(4, b) || null) == (+g.Qb(4, a) || null) : !0;
        return a
    }
    ;
    g.ve = function(a) {
        switch (a && "status"in a ? a.status : -1) {
        case 200:
        case 201:
        case 202:
        case 203:
        case 204:
        case 205:
        case 206:
        case 304:
            return !0;
        default:
            return !1
        }
    }
    ;
    Caa = function(a, b, c, d, e, f, k) {
        function l() {
            4 == (p && "readyState"in p ? p.readyState : 0) && b && g.zd(b)(p)
        }
        var p = we && we();
        if (!("open"in p))
            return null;
        "onloadend"in p ? p.addEventListener("loadend", l, !1) : p.onreadystatechange = l;
        c = (c || "GET").toUpperCase();
        d = d || "";
        p.open(c, a, !0);
        f && (p.responseType = f);
        k && (p.withCredentials = !0);
        f = "POST" == c;
        if (e = Baa(a, e))
            for (var w in e)
                p.setRequestHeader(w, e[w]),
                "content-type" == w.toLowerCase() && (f = !1);
        f && p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        p.send(d);
        return p
    }
    ;
    Baa = function(a, b) {
        b = b || {};
        for (var c in xe) {
            var d = g.yd(xe[c]), e;
            if ((e = d) && !(e = g.ue(a))) {
                e = c;
                var f = g.yd("CORS_HEADER_WHITELIST") || {}
                  , k = g.Rb(a);
                e = k ? (f = f[k]) ? g.Ea(f, e) : !1 : !0
            }
            e && (b[c] = d)
        }
        return b
    }
    ;
    Daa = function(a, b) {
        var c = g.yd("XSRF_FIELD_NAME", void 0), d;
        b.headers && (d = b.headers["Content-Type"]);
        return !b.k1 && (!g.Rb(a) || b.withCredentials || g.Rb(a) == window.document.location.hostname) && "POST" == b.method && (!d || "application/x-www-form-urlencoded" == d) && !(b.Sd && b.Sd[c])
    }
    ;
    g.ye = function(a, b) {
        var c = b.format || "JSON";
        b.M1 && (a = window.document.location.protocol + "//" + window.document.location.hostname + (window.document.location.port ? ":" + window.document.location.port : "") + a);
        var d = g.yd("XSRF_FIELD_NAME", void 0)
          , e = g.yd("XSRF_TOKEN", void 0)
          , f = b.pv;
        f && (f[d] && delete f[d],
        a = g.te(a, f));
        var k = b.kj || ""
          , f = b.Sd;
        Daa(a, b) && (f || (f = {}),
        f[d] = e);
        f && g.ga(k) && (d = g.se(k),
        g.Sa(d, f),
        k = g.$b(d));
        var l = !1, p, w = Caa(a, function(a) {
            if (!l) {
                l = !0;
                p && g.Bd(p);
                var d = g.ve(a)
                  , e = null;
                if (d || 400 <= a.status && 500 > a.status)
                    e = Eaa(c, a, b.K0);
                if (d)
                    a: {
                        switch (c) {
                        case "XML":
                            d = 0 == (0,
                            window.parseInt)(e && e.return_code, 10);
                            break a;
                        case "RAW":
                            d = !0;
                            break a
                        }
                        d = !!e
                    }
                var e = e || {}
                  , f = b.context || g.ba;
                d ? b.rb && b.rb.call(f, a, e) : b.onError && b.onError.call(f, a, e);
                b.fj && b.fj.call(f, a, e)
            }
        }, b.method, k, b.headers, b.responseType, b.withCredentials);
        b.ke && 0 < b.timeout && (p = (0,
        g.Ad)(function() {
            l || (l = !0,
            w.abort(),
            g.Bd(p),
            b.ke.call(b.context || g.ba, w))
        }, b.timeout));
        return w
    }
    ;
    Eaa = function(a, b, c) {
        var d = null;
        switch (a) {
        case "JSON":
            a = b.responseText;
            b = b.getResponseHeader("Content-Type") || "";
            a && 0 <= b.indexOf("json") && (d = g.Ld(a));
            break;
        case "XML":
            if (b = (b = b.responseXML) ? Faa(b) : null)
                d = {},
                (0,
                g.D)(b.getElementsByTagName("*"), function(a) {
                    d[a.tagName] = Gaa(a)
                })
        }
        c && ze(d);
        return d
    }
    ;
    ze = function(a) {
        if (g.ka(a))
            for (var b in a)
                "html_content" == b || g.ra(b, "_html") ? a[b] = g.tb(g.$a("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"), a[b]) : ze(a[b])
    }
    ;
    Faa = function(a) {
        return a ? (a = ("responseXML"in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }
    ;
    Gaa = function(a) {
        var b = "";
        (0,
        g.D)(a.childNodes, function(a) {
            b += a.nodeValue
        });
        return b
    }
    ;
    g.Be = function(a) {
        return (a = g.Qb(6, a || "")) ? g.Ae(a) : {}
    }
    ;
    g.Ae = function(a) {
        var b = {};
        a && (0,
        g.D)(a.split("&"), function(a) {
            a = a.split("=");
            var d = a[0];
            if (d) {
                var e = "";
                try {
                    a[1] && (e = (0,
                    window.decodeURIComponent)(a[1].replace(/\+/g, " ")))
                } catch (f) {}
                b[(0,
                window.decodeURIComponent)(d)] = e
            }
        });
        return b
    }
    ;
    Ce = function(a) {
        return /^([a-z\+\.\-0-9]+:)?\/\//.test(a)
    }
    ;
    g.De = function(a, b) {
        var c = a, d;
        for (d in b)
            c = g.gc(c, d, b[d]);
        return c
    }
    ;
    Ee = function(a, b) {
        (0,
        g.D)(b, function(b) {
            a = fc(a, (0,
            window.encodeURIComponent)(b))
        });
        return a
    }
    ;
    g.Je = function(a, b, c) {
        this.G = b || g.Fe.uF;
        this.Ka = c || 0;
        this.L = 40;
        this.b = 1;
        this.N = 0;
        this.B = 3;
        this.M = this.g = 0;
        this.S = !1;
        this.K = this.C = "";
        this.o = "-";
        this.D = "";
        this.H = 1;
        this.A = [];
        this.P = this.R = !1;
        this.F = 0;
        if ("number" == typeof a)
            switch (a) {
            case 1:
                Ge(this, g.Fe.ow);
                break;
            case 2:
                Ge(this, g.Fe.zG);
                break;
            case 3:
                Ge(this, g.Fe.qG);
                break;
            case 4:
                a = g.Fe.rF;
                b = ["0"];
                c = g.He[this.G][0] & 7;
                if (0 < c) {
                    b.push(".");
                    for (var d = 0; d < c; d++)
                        b.push("0")
                }
                a = a.replace(/0.00/g, b.join(""));
                Ge(this, a);
                break;
            case 5:
                Ie(this, 1);
                break;
            case 6:
                Ie(this, 2);
                break;
            default:
                throw Error("Unsupported pattern type.");
            }
        else
            Ge(this, a)
    }
    ;
    Ge = function(a, b) {
        b.replace(/ /g, "\u00a0");
        var c = [0];
        a.C = Ke(a, b, c);
        for (var d = c[0], e = -1, f = 0, k = 0, l = 0, p = -1, w = b.length, B = !0; c[0] < w && B; c[0]++)
            switch (b.charAt(c[0])) {
            case "#":
                0 < k ? l++ : f++;
                0 <= p && 0 > e && p++;
                break;
            case "0":
                if (0 < l)
                    throw Error('Unexpected "0" in pattern "' + b + '"');
                k++;
                0 <= p && 0 > e && p++;
                break;
            case ",":
                0 < p && a.A.push(p);
                p = 0;
                break;
            case ".":
                if (0 <= e)
                    throw Error('Multiple decimal separators in pattern "' + b + '"');
                e = f + k + l;
                break;
            case "E":
                if (a.P)
                    throw Error('Multiple exponential symbols in pattern "' + b + '"');
                a.P = !0;
                a.M = 0;
                c[0] + 1 < w && "+" == b.charAt(c[0] + 1) && (c[0]++,
                a.S = !0);
                for (; c[0] + 1 < w && "0" == b.charAt(c[0] + 1); )
                    c[0]++,
                    a.M++;
                if (1 > f + k || 1 > a.M)
                    throw Error('Malformed exponential pattern "' + b + '"');
                B = !1;
                break;
            default:
                c[0]--,
                B = !1
            }
        0 == k && 0 < f && 0 <= e && (k = e,
        0 == k && k++,
        l = f - k,
        f = k - 1,
        k = 1);
        if (0 > e && 0 < l || 0 <= e && (e < f || e > f + k) || 0 == p)
            throw Error('Malformed pattern "' + b + '"');
        l = f + k + l;
        a.B = 0 <= e ? l - e : 0;
        0 <= e && (a.g = f + k - e,
        0 > a.g && (a.g = 0));
        a.b = (0 <= e ? e : l) - f;
        a.P && (a.L = f + a.b,
        0 == a.B && 0 == a.b && (a.b = 1));
        a.A.push(Math.max(0, p));
        a.R = 0 == e || e == l;
        d = c[0] - d;
        a.K = Ke(a, b, c);
        c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++,
        a.o = Ke(a, b, c),
        c[0] += d,
        a.D = Ke(a, b, c)) : (a.o = a.C + a.o,
        a.D += a.K)
    }
    ;
    Ie = function(a, b) {
        a.F = b;
        Ge(a, g.Fe.ow);
        a.g = 0;
        a.B = 2;
        if (0 < a.g)
            throw Error("Can't combine significant digits and minimum fraction digits");
        a.N = 2
    }
    ;
    Me = function(a, b) {
        var c = Math.pow(10, a.B), d;
        if (0 >= a.N)
            d = Math.round(b * c);
        else {
            d = b * c;
            var e = a.B;
            if (d) {
                var f = a.N - Le(d) - 1;
                f < -e ? (e = Math.pow(10, e),
                d = Math.round(d / e) * e) : (e = Math.pow(10, f),
                d = Math.round(d * e) / e)
            }
            d = Math.round(d)
        }
        e = d;
        (0,
        window.isFinite)(e) ? (d = Math.floor(e / c),
        c = Math.floor(e - d * c)) : (d = b,
        c = 0);
        return {
            kz: d,
            ZI: c
        }
    }
    ;
    Ne = function(a, b, c, d) {
        if (a.g > a.B)
            throw Error("Min value must be less than max value");
        d || (d = []);
        b = Me(a, b);
        var e = Math.pow(10, a.B)
          , f = b.kz
          , k = b.ZI
          , l = 0 < a.g || 0 < k || !1;
        b = a.g;
        l && (b = a.g);
        for (var p = "", w = f; 1E20 < w; )
            p = "0" + p,
            w = Math.round(w / 10);
        var p = w + p
          , B = g.Fe.pw
          , w = g.Fe.wq.charCodeAt(0)
          , z = p.length
          , H = 0;
        if (0 < f || 0 < c) {
            for (f = z; f < c; f++)
                d.push(String.fromCharCode(w));
            if (2 <= a.A.length)
                for (c = 1; c < a.A.length; c++)
                    H += a.A[c];
            c = z - H;
            if (0 < c)
                for (var f = a.A, S = H = z = 0, X = g.Fe.sq, ya = p.length, la = 0; la < ya; la++) {
                    if (d.push(String.fromCharCode(w + 1 * +p.charAt(la))),
                    1 < ya - la)
                        if (S = f[H],
                        la < c) {
                            var Zb = c - la;
                            (1 === S || 0 < S && 1 === Zb % S) && d.push(X)
                        } else
                            H < f.length && (la === c ? H += 1 : S === la - c - z + 1 && (d.push(X),
                            z += S,
                            H += 1))
                }
            else {
                c = p;
                p = a.A;
                f = g.Fe.sq;
                H = 0;
                S = c.length;
                X = [];
                for (z = p.length - 1; 0 <= z && 0 < S; z--) {
                    H = p[z];
                    for (ya = 0; ya < H && 0 <= S - ya - 1; ya++)
                        X.push(String.fromCharCode(w + 1 * +c.charAt(S - ya - 1)));
                    S -= H;
                    0 < S && X.push(f)
                }
                d.push.apply(d, X.reverse())
            }
        } else
            l || d.push(String.fromCharCode(w));
        (a.R || l) && d.push(B);
        a = "" + (k + e);
        for (e = a.length; "0" == a.charAt(e - 1) && e > b + 1; )
            e--;
        for (f = 1; f < e; f++)
            d.push(String.fromCharCode(w + 1 * +a.charAt(f)))
    }
    ;
    Oe = function(a, b, c) {
        c.push(g.Fe.rw);
        0 > b ? (b = -b,
        c.push(g.Fe.eG)) : a.S && c.push(g.Fe.rG);
        b = "" + b;
        for (var d = g.Fe.wq, e = b.length; e < a.M; e++)
            c.push(d);
        c.push(b)
    }
    ;
    Ke = function(a, b, c) {
        for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
            var k = b.charAt(c[0]);
            if ("'" == k)
                c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++,
                d += "'") : e = !e;
            else if (e)
                d += k;
            else
                switch (k) {
                case "#":
                case "0":
                case ",":
                case ".":
                case ";":
                    return d;
                case "\u00a4":
                    if (c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1))
                        c[0]++,
                        d += a.G;
                    else
                        switch (a.Ka) {
                        case 0:
                            d += g.He[a.G][1];
                            break;
                        case 2:
                            var k = a.G
                              , l = g.He[k]
                              , d = d + (k == l[1] ? k : k + " " + l[1]);
                            break;
                        case 1:
                            d += g.He[a.G][2]
                        }
                    break;
                case "%":
                    if (1 != a.H)
                        throw Error("Too many percent/permill");
                    a.H = 100;
                    d += g.Fe.xw;
                    break;
                case "\u2030":
                    if (1 != a.H)
                        throw Error("Too many percent/permill");
                    a.H = 1E3;
                    d += g.Fe.yw;
                    break;
                default:
                    d += k
                }
        }
        return d
    }
    ;
    Re = function(a, b) {
        var c = 1 == a.F ? Pe.hF : Pe.gF;
        if (3 > b)
            return Qe;
        b = Math.min(14, b);
        c = c[Math.pow(10, b)];
        if (!c)
            return Qe;
        c = c.other;
        return c && "0" != c ? (c = /([^0]*)(0+)(.*)/.exec(c)) ? {
            prefix: c[1],
            Xl: c[3],
            Br: b - (c[2].length - 1)
        } : Qe : Qe
    }
    ;
    Le = function(a) {
        for (var b = 0; 1 <= (a /= 10); )
            b++;
        return b
    }
    ;
    Se = function() {
        throw Error("Do not instantiate directly");
    }
    ;
    Ve = function(a) {
        if (a.Jd === Te)
            return g.sb(a.toString());
        if (a.Jd !== g.Ue)
            throw Error("Sanitized content was not of kind TEXT or HTML.");
        return g.tb(g.$a("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), a.toString(), a.Ae)
    }
    ;
    We = function() {
        Se.call(this)
    }
    ;
    g.Xe = function(a) {
        if (!g.ka(a))
            return String(a);
        if (a instanceof Se) {
            if (a.Jd === g.Ue)
                return a.getContent();
            if (a.Jd === Te)
                return g.ua(a.getContent())
        }
        return "zSoyz"
    }
    ;
    g.Ye = function(a, b) {
        return null != a && a.Jd === b
    }
    ;
    g.Ze = function(a) {
        if (null != a)
            switch (a.Ae) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
            }
        return null
    }
    ;
    $e = function() {
        Se.call(this)
    }
    ;
    g.J = function(a) {
        return null != a && a.Jd === g.Ue ? a : a instanceof pb ? (0,
        g.I)(g.qb(a), a.zi()) : (0,
        g.I)(g.ua(String(String(a))), g.Ze(a))
    }
    ;
    af = function() {
        Se.call(this)
    }
    ;
    bf = function() {
        Se.call(this)
    }
    ;
    cf = function() {
        Se.call(this)
    }
    ;
    df = function() {
        Se.call(this)
    }
    ;
    ef = function() {
        Se.call(this)
    }
    ;
    g.ff = function(a, b) {
        this.content = String(a);
        this.Ae = null != b ? b : null
    }
    ;
    gf = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a) {
            return new b(String(a))
        }
    }
    ;
    g.hf = function(a, b) {
        function c() {}
        c.prototype = a;
        var d = new c, e;
        for (e in b)
            d[e] = b[e];
        return d
    }
    ;
    jf = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a) {
            return (a = String(a)) ? new b(a) : ""
        }
    }
    ;
    g.kf = function(a) {
        return (a = String(a)) ? new g.ff(a,void 0) : ""
    }
    ;
    g.K = function(a) {
        return g.J(a)
    }
    ;
    g.lf = function(a) {
        return String(a).replace(Haa, "").replace(Iaa, "&lt;")
    }
    ;
    mf = function(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }
    ;
    g.L = function(a) {
        return g.Ye(a, g.Ue) ? g.nf(g.lf(a.getContent())) : g.ua(String(a))
    }
    ;
    g.M = function(a) {
        if (g.Ye(a, pf))
            return a.getContent().replace(/([^"'\s])$/, "$1 ");
        a = String(a);
        a = Jaa.test(a) ? a : "zSoyz";
        return a
    }
    ;
    rf = function(a) {
        return g.qf(a)
    }
    ;
    g.wf = function(a) {
        if (g.Ye(a, sf) || g.Ye(a, tf))
            return g.qf(a);
        a instanceof g.fb ? a = rf(g.gb(a)) : a instanceof g.lb ? a = rf(g.nb(a)) : (a = String(a),
        a = Kaa.test(a) ? a.replace(uf, vf) : "#zSoyz");
        return a
    }
    ;
    g.xf = function(a) {
        if (g.Ye(a, sf) || g.Ye(a, tf))
            return g.qf(a);
        a instanceof g.fb ? a = rf(g.gb(a)) : a instanceof g.lb ? a = rf(g.nb(a)) : (a = String(a),
        a = Laa.test(a) ? a.replace(uf, vf) : "about:invalid#zSoyz");
        return a
    }
    ;
    g.zf = function(a) {
        if (g.Ye(a, yf))
            return mf(a.getContent());
        null == a ? a = "" : a instanceof g.bb ? a = mf(g.cb(a)) : (a = String(a),
        a = Maa.test(a) ? a : "zSoyz");
        return a
    }
    ;
    g.Af = function(a) {
        return Naa[a]
    }
    ;
    vf = function(a) {
        return Oaa[a]
    }
    ;
    g.nf = function(a) {
        return String(a).replace(Paa, g.Af)
    }
    ;
    g.qf = function(a) {
        return String(a).replace(uf, vf)
    }
    ;
    g.Bf = function() {
        return window.document.location.href
    }
    ;
    g.Cf = function(a) {
        console.log(a);
        return a;
    }
    ;
    g.Df = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a.apply(this, arguments),
            b = !0);
            return c
        }
    }
    ;
    g.Ef = function(a) {
        return (a || "").replace(/#?\/?(.*)/, "$1")
    }
    ;
    g.Ff = function(a) {
        try {
            return g.Kd(a)
        } catch (b) {
            return g.Kd(a.replace(/\\U[0-9a-fA-F]{8}/g, ""))
        }
    }
    ;
    g.Hf = function(a) {
        var b = "nirvana_phone";
        g.Gf && (b = "nirvana_tablet");
        return a.replace("__", "_" + b + "_")
    }
    ;
    If = function(a) {
        a.preventDefault()
    }
    ;
    Qaa = function(a) {
        a.stopPropagation();
        return !1
    }
    ;
    g.Kf = function() {
        Jf || (window.document.addEventListener("touchmove", If, !1),
        Jf = !0)
    }
    ;
    g.Lf = function() {
        window.document.removeEventListener("touchmove", If, !1);
        Jf = !1
    }
    ;
    g.Mf = function(a, b) {
        return a.toString(36) + Math.floor(Math.random() * b).toString(36)
    }
    ;
    g.Nf = function(a) {
        window.document.title = a ? a + " - YouTube" : "YouTube"
    }
    ;
    Qf = function(a) {
        var b = g.mc("content-container");
        b && (2 == g.Of && (b.style.display = a ? "" : "none"),
        g.Pf && !g.Gf && g.Pc(b, "_mz", !a))
    }
    ;
    g.Sf = function() {
        var a = Sb(g.Bf()) || "";
        return Rf ? /\/.+/.test(a) ? a : g.Vb(g.Ub(g.Bf())) || "" : a
    }
    ;
    g.Tf = function(a) {
        return !Ce(a) && Rf && /^([^#]*)#\/.*$/.test(a) ? a.substring(a.indexOf("#") + 1) : a
    }
    ;
    g.Vf = function(a) {
        a.rdm = g.Mf(Uf, 1E4);
        return a
    }
    ;
    g.Wf = function(a) {
        return function(b) {
            return (0,
            g.G)() - b <= a
        }
    }
    ;
    g.ag = function(a, b, c, d) {
        var e = "";
        b instanceof g.oe && (b.name = "AdError",
        b.message = b.getErrorCode() + ": " + b.getMessage(),
        e = b.b ? b.b.toString() : "");
        var f;
        if (f = b) {
            f = b;
            var k = g.r("window.location.href");
            if (g.ga(f))
                f = {
                    message: f,
                    name: "Unknown error",
                    lineNumber: "Not available",
                    fileName: k,
                    stack: "Not available"
                };
            else {
                var l, p, w = !1;
                try {
                    l = f.lineNumber || f.B2 || "Not available"
                } catch (ya) {
                    l = "Not available",
                    w = !0
                }
                try {
                    p = f.fileName || f.filename || f.sourceURL || g.ba.$googDebugFname || k
                } catch (ya) {
                    p = "Not available",
                    w = !0
                }
                f = !w && f.lineNumber && f.fileName && f.stack && f.message && f.name ? f : {
                    message: f.message || "Not available",
                    name: f.name || "UnknownError",
                    lineNumber: l,
                    fileName: p,
                    stack: f.stack || "Not available"
                }
            }
        }
        l = (b = f) ? b.message : "<No Error object.>";
        p = !1;
        var B = window.document.referrer;
        window.getBlazerCurrentReferer && (B = window.getBlazerCurrentReferer());
        d = d || "ERROR";
        if (!(l == Xf && Raa(Yf) || Saa(Yf))) {
            Yf = (0,
            g.G)();
            Xf = l;
            p = b ? b.name : "";
            f = b ? b.fileName : "";
            k = b ? b.lineNumber : "";
            w = g.Bf();
            b = b ? b.stack : "";
            var z = g.Zf, H = g.$f, S;
            if (l) {
                S = "";
                var X = Taa.exec(l);
                X && 2 <= X.length && (X = X[1],
                S += "[" + X + "=" + new String(window[X]) + "]")
            } else
                S = "";
            a = {
                Sd: {
                    "client.name": "MWEB",
                    type: p,
                    msg: l,
                    file: f,
                    line: k,
                    url: w,
                    level: d,
                    stack: b,
                    type_code: a,
                    lang: z,
                    locale: H,
                    prev_url: B,
                    misc: S + e + c.substr(0, 300)
                },
                method: "POST"
            };
            (c = g.yd("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (a.Sd["client.version"] = c);
            g.ye("/error_204", a);
            p = !0
        }
        return p
    }
    ;
    dg = function(a) {
        return bg || cg && !g.Ea(Uaa, a) ? !1 : (bg = !0,
        g.Cf(g.De("/", g.Vf({
            reload: a
        })) + "#" + g.Sf()),
        !0)
    }
    ;
    g.eg = function(a) {
        (0,
        window.setTimeout)(g.oa(dg, a), 1E3)
    }
    ;
    g.fg = function(a, b, c) {
        if (!window.yterr || !g.ag(a, b, c))
            throw JSON.stringify(b),
            b;
    }
    ;
    hg = function(a, b) {
        if (a) {
            if (a == window.document)
                return "(document)";
            if (a == window)
                return "(window)"
        } else
            return "(null)";
        if (!g.ka(a) || 1 != a.nodeType)
            return "(node:" + a.nodeType + ")";
        for (var c = [a.tagName + gg(a.className)], d = a.parentNode; d; d = d.parentNode) {
            var e = gg(d.className);
            e && c.unshift(e)
        }
        if (b)
            for (d = 0,
            e = c.length - 1; 0 <= e; e--)
                if (d += c[e].length + 1,
                d >= b && 0 < e) {
                    c = g.Ka(c, e);
                    break
                }
        return c.join(" ")
    }
    ;
    gg = function(a) {
        if (!a)
            return "";
        a = (0,
        g.Ac)(a.split(" "), function(a) {
            return !!a
        });
        return (0,
        g.N)(a, function(a) {
            return "." + a
        }).join("")
    }
    ;
    ig = function(a, b, c, d, e) {
        var f = Array.prototype.slice.call(arguments, 4);
        return function() {
            try {
                var e = [];
                arguments && (0,
                g.D)(arguments, function(a) {
                    e.push(a)
                });
                (0,
                g.D)(f, function(a) {
                    e.push(a)
                });
                return a.apply(b, e)
            } catch (l) {
                return g.fg(c, l, d.apply(b, e)),
                g.eg(c),
                !1
            }
        }
    }
    ;
    jg = function(a) {
        return hg(a)
    }
    ;
    g.lg = function(a) {
        return g.Ea(kg, a)
    }
    ;
    g.ng = function(a, b) {
        if (!g.lg(a)) {
            var c = [];
            a in mg && (c = mg[a]);
            c.push(b);
            mg[a] = c
        }
    }
    ;
    og = function(a) {
        kg.push(a);
        var b = mg[a];
        if (b) {
            for (var c = 0; c < b.length; c++)
                b[c]();
            delete mg[a]
        }
    }
    ;
    g.rg = function(a) {
        pg(a);
        qg()
    }
    ;
    pg = function(a) {
        if (!g.Ea(sg, a)) {
            var b = g.tg[a] || ug[a];
            b && ((0,
            g.D)(b.dependency, pg),
            sg.push(a))
        }
    }
    ;
    qg = function() {
        for (var a = 0; a < sg.length && !vg; a++) {
            var b = sg[a]
              , c = g.tg[b];
            if (ug[b] && !g.Ea(wg, b))
                break;
            else if (c && (c = c.src) && !g.Ea(xg, c)) {
                vg = !0;
                b = c;
                a = g.tc("script", {
                    src: b
                });
                b = ig(Vaa, g.ba, 19, vb, b);
                Waa(a, b);
                window.document.body.appendChild(a);
                break
            }
            g.lg(b) || og(b)
        }
    }
    ;
    Vaa = function(a) {
        vg = !1;
        xg.push(a);
        qg()
    }
    ;
    Waa = function(a, b) {
        var c = !1;
        a.onload = function() {
            c || (c = !0,
            b())
        }
        ;
        a.onreadystatechange = function() {
            var b = a.readyState;
            if ("complete" == b || "loaded" == b)
                a.onload()
        }
    }
    ;
    g.yg = function(a, b) {
        this.g = this.H = this.A = "";
        this.D = null;
        this.G = this.o = "";
        this.B = !1;
        var c;
        a instanceof g.yg ? (this.B = g.n(b) ? b : a.B,
        g.zg(this, a.A),
        this.H = a.H,
        g.Ag(this, a.g),
        g.Bg(this, a.D),
        this.o = a.o,
        g.Cg(this, a.b.clone()),
        this.G = a.F()) : a && (c = String(a).match(g.Pb)) ? (this.B = !!b,
        g.zg(this, c[1] || "", !0),
        this.H = Dg(c[2] || ""),
        g.Ag(this, c[3] || "", !0),
        g.Bg(this, c[4]),
        this.o = Dg(c[5] || "", !0),
        g.Cg(this, c[6] || "", !0),
        this.G = Dg(c[7] || "")) : (this.B = !!b,
        this.b = new g.Eg(null,0,this.B))
    }
    ;
    g.zg = function(a, b, c) {
        a.A = c ? Dg(b, !0) : b;
        a.A && (a.A = a.A.replace(/:$/, ""))
    }
    ;
    g.Ag = function(a, b, c) {
        a.g = c ? Dg(b, !0) : b;
        return a
    }
    ;
    g.Bg = function(a, b) {
        if (b) {
            b = +b;
            if ((0,
            window.isNaN)(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.D = b
        } else
            a.D = null;
        return a
    }
    ;
    g.Cg = function(a, b, c) {
        b instanceof g.Eg ? (a.b = b,
        Xaa(a.b, a.B)) : (c || (b = Fg(b, Yaa)),
        a.b = new g.Eg(b,0,a.B));
        return a
    }
    ;
    Dg = function(a, b) {
        return a ? b ? (0,
        window.decodeURI)(a.replace(/%25/g, "%2525")) : (0,
        window.decodeURIComponent)(a) : ""
    }
    ;
    Fg = function(a, b, c) {
        return g.ga(a) ? (a = (0,
        window.encodeURI)(a).replace(b, Zaa),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
    ;
    Zaa = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    ;
    g.Eg = function(a, b, c) {
        this.b = this.g = null;
        this.o = a || null;
        this.A = !!c
    }
    ;
    g.Hg = function(a) {
        a.g || (a.g = new g.Ab,
        a.b = 0,
        a.o && oaa(a.o, function(b, c) {
            g.Gg(a, g.ta(b), c)
        }))
    }
    ;
    g.Gg = function(a, b, c) {
        g.Hg(a);
        a.o = null;
        b = Ig(a, b);
        var d = a.g.get(b);
        d || a.g.set(b, d = []);
        d.push(c);
        a.b = a.b + 1
    }
    ;
    g.Jg = function(a, b) {
        g.Hg(a);
        b = Ig(a, b);
        return g.Cb(a.g, b)
    }
    ;
    g.Kg = function(a, b, c) {
        a.remove(b);
        0 < c.length && (a.o = null,
        a.g.set(Ig(a, b), g.Ia(c)),
        a.b = a.b + c.length)
    }
    ;
    Ig = function(a, b) {
        var c = String(b);
        a.A && (c = c.toLowerCase());
        return c
    }
    ;
    Xaa = function(a, b) {
        b && !a.A && (g.Hg(a),
        a.o = null,
        a.g.forEach(function(a, b) {
            var e = b.toLowerCase();
            b != e && (this.remove(b),
            g.Kg(this, e, a))
        }, a));
        a.A = b
    }
    ;
    g.Lg = function(a, b, c) {
        a && (c ? a && (a = g.tc("iframe", {
            src: 'javascript:"data:text/html,<body><img src=\\"' + a + '\\"></body>"',
            style: "display:none"
        }),
        g.jc(a).body.appendChild(a)) : $aa(a, b))
    }
    ;
    Mg = function(a) {
        try {
            window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, "") || g.Lg(a, void 0)
        } catch (b) {
            g.Lg(a, void 0)
        }
    }
    ;
    g.Ng = function(a) {
        return g.A(g.C(a)) ? !1 : aba.test(a) || bba.test(a)
    }
    ;
    $aa = function(a, b) {
        var c = new window.Image
          , d = "" + cba++;
        Og[d] = c;
        c.onload = c.onerror = function() {
            b && Og[d] && b();
            delete Og[d]
        }
        ;
        c.src = a
    }
    ;
    Pg = function(a, b) {
        var c = a || {};
        if (c["X-SPF-Referer"])
            return c;
        var d = void 0
          , e = b ? "getBlazerCurrentLocation" : "getBlazerCurrentReferer";
        window[e] && (d = window[e]());
        c["X-SPF-Referer"] = d || "";
        return c
    }
    ;
    g.Qg = function(a, b) {
        if (a) {
            var c = b || g.Ng(a) ? {
                "X-SPF-Referer": ""
            } : Pg({}, !0);
            g.ye(a, {
                headers: c
            })
        }
    }
    ;
    g.Rg = function(a) {
        a = g.ac("/gen_204", a);
        g.Qg(a)
    }
    ;
    g.Vg = function(a) {
        if (g.Sg)
            try {
                return g.Tg.getItem(a)
            } catch (b) {
                g.Ug(b) && g.ag(17, b, "LS-Get")
            }
        return null
    }
    ;
    g.Wg = function(a, b) {
        if (g.Sg)
            try {
                g.Tg.removeItem(a),
                g.Tg.setItem(a, b)
            } catch (c) {
                g.Ug(c) && g.ag(17, c, "LS-Set:" + b.length)
            }
    }
    ;
    g.Ug = function(a) {
        return !a.code == a.QUOTA_EXCEEDED_ERR && 0 > a.message.indexOf("QUOTA_EXCEEDED_ERR") && .1 > Math.random()
    }
    ;
    dba = function() {
        var a = !!g.Vg("remoteLoad")
          , b = g.Hf("mobile_blazer_remote_mod");
        g.lg(b) ? (0,
        g.Xg)() : (g.ng(b, function() {
            (0,
            g.Xg)()
        }),
        a ? g.rg(b) : g.Yg && g.rg(b))
    }
    ;
    eba = function(a) {
        g.Zg = a || "";
        a = g.Hf("mobile_blazer_remote_mod");
        g.lg(a) ? (0,
        g.$g)() : (g.ng(a, function() {
            (0,
            g.$g)()
        }),
        g.rg(a))
    }
    ;
    fba = function(a) {
        g.ah = a;
        a = g.Hf("mobile_blazer_remote_mod");
        g.lg(a) ? (0,
        g.bh)() : (g.ng(a, function() {
            (0,
            g.bh)()
        }),
        g.rg(a))
    }
    ;
    g.ch = function() {
        return (0,
        g.I)("Cancel")
    }
    ;
    g.dh = function() {
        return (0,
        g.I)("Loading")
    }
    ;
    g.eh = function() {
        return (0,
        g.I)("Sign in")
    }
    ;
    gh = function() {
        return (0,
        g.I)("Settings")
    }
    ;
    g.hh = function() {
        return (0,
        g.I)("Home")
    }
    ;
    g.ih = function(a) {
        return (0,
        g.I)(g.K(g.O(a.content)))
    }
    ;
    g.lh = function(a) {
        a = a || {};
        var b = a.text;
        return (0,
        g.I)('<div class="_mjs">' + g.jh(g.hf(a, {
            yj: a.yj || (g.Gf ? 60 : 22),
            message: (0,
            g.kh)("" + (b ? g.J(b) : g.K(g.dh())))
        })) + "</div>")
    }
    ;
    g.mh = function(a) {
        a = a || {};
        var b = a.color;
        a = a.size;
        return (0,
        g.I)('<canvas class="_mf _mls"' + (a ? 'style="width:' + g.L(g.zf(a)) + "px;height:" + g.L(g.zf(a)) + "px;background-size:" + g.L(g.zf(a)) + "px " + g.L(g.zf(a)) + 'px;"' : "") + (b ? 'data-spinner-color="' + g.L(b) + '"' : "") + g.M((0,
        g.P)("")) + "></canvas>")
    }
    ;
    g.jh = function(a) {
        var b = a.message
          , c = a.yj;
        return (0,
        g.I)('<div class="_mns">' + g.mh(g.hf(a, {
            size: c ? c : 30,
            color: a.color
        })) + '<div class="_mos"' + (g.Gf ? "" : 'style="line-height:' + g.L(g.zf(c ? c : 30)) + 'px;"') + ">" + g.J(b) + "</div></div>")
    }
    ;
    g.nh = function(a) {
        var b = a.dA
          , c = !!a.hm
          , d = a.Ii;
        a = a.yj;
        c = "<div " + g.M(g.Q("toast")) + ' class="_mdf _mef ' + (c ? "_mff" : "") + '"><div class="_mgf"><div role="alertdialog" tabindex="0" aria-describedby="toast-content" class="_mhf"><div class="_mps">' + (a ? g.mh({
            size: a
        }) : '<div class="' + g.L(d) + '"></div>') + '</div><div id="toast-content" class="_mif">';
        d = b.length;
        for (a = 0; a < d; a++)
            c += "<div>" + g.J(b[a]) + "</div>";
        return (0,
        g.I)(c + "</div></div></div></div>")
    }
    ;
    gba = function(a) {
        var b = g.zf(a.names) + "{background:no-repeat url(" + g.wf(a.url) + "); background-size:" + g.zf(a.Tq) + "px " + g.zf(a.Sq) + "px; -moz-background-size:" + g.zf(a.Tq) + "px " + g.zf(a.Sq) + "px; -webkit-background-size:" + g.zf(a.Tq) + "px " + g.zf(a.Sq) + "px;}";
        a = a.rR;
        for (var c = a.length, d = 0; d < c; d++)
            var e = a[d]
              , b = b + (g.zf(e.className) + "{background-position:" + g.zf(e.cu) + "px " + g.zf(e.Al) + "px; width:" + g.zf(e.width) + "px; height:" + g.zf(e.height) + "px;}");
        return oh(b)
    }
    ;
    hba = function() {
        return (0,
        g.I)("The connection timed-out.  Check your network connection.  Would you like to retry?")
    }
    ;
    g.ph = function(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.rotation = this.clientY = this.clientX = 0;
        this.scale = 1;
        this.changedTouches = this.touches = null;
        if (a = a || window.event) {
            this.event = a;
            for (var b in a)
                b in iba || (this[b] = a[b]);
            this.scale = a.scale;
            this.rotation = a.rotation;
            (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
            this.target = b;
            if (b = a.relatedTarget)
                try {
                    b = b.nodeName ? b : null
                } catch (c) {
                    b = null
                }
            else
                "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            this.b = a.pageX;
            this.g = a.pageY
        }
    }
    ;
    jba = function(a, b, c, d) {
        return g.Pa(qh, function(e) {
            return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
        })
    }
    ;
    g.sh = function(a, b, c, d) {
        if (!a || !a.addEventListener && !a.attachEvent)
            return "";
        d = !!d;
        var e = jba(a, b, c, d);
        if (e)
            return e;
        var e = ++rh.count + "", f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter"in window.document), k;
        k = f ? function(d) {
            d = new g.ph(d);
            if (!Ec(d.relatedTarget, function(b) {
                return b == a
            }))
                return d.currentTarget = a,
                d.type = b,
                c.call(a, d)
        }
        : function(b) {
            b = new g.ph(b);
            b.currentTarget = a;
            return c.call(a, b)
        }
        ;
        k = g.zd(k);
        qh[e] = [a, b, c, k, d];
        a.addEventListener ? "mouseenter" == b && f ? a.addEventListener("mouseover", k, d) : "mouseleave" == b && f ? a.addEventListener("mouseout", k, d) : "mousewheel" == b && "MozBoxSizing"in window.document.documentElement.style ? a.addEventListener("MozMousePixelScroll", k, d) : a.addEventListener(b, k, d) : a.attachEvent("on" + b, k);
        return e
    }
    ;
    g.uh = function(a) {
        a && ("string" == typeof a && (a = [a]),
        (0,
        g.D)(a, function(a) {
            if (a in qh) {
                var c = qh[a]
                  , d = c[0]
                  , e = c[1]
                  , f = c[3]
                  , c = c[4];
                d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent && d.detachEvent("on" + e, f);
                delete qh[a]
            }
        }))
    }
    ;
    g.vh = function(a) {
        for (var b in qh)
            qh[b][0] == a && g.uh(b)
    }
    ;
    g.wh = function() {}
    ;
    g.yh = function(a) {
        a.src && (g.xh && 0 < a.readyState && (a.currentTime = Math.max(kba, 0)),
        a.removeAttribute("src"),
        a.load(),
        !a.Vh || !a.Vh.b || a.Vh && a.Vh.Wa(null) || (a.Vh && a.Vh.dispose(),
        a.Vh = null))
    }
    ;
    g.zh = function() {
        this.b = [];
        this.g = []
    }
    ;
    Ch = function(a, b, c) {
        c = window.document.createElement(c ? "audio" : "video");
        g.pa(c, lba);
        g.sh(c, "loadeddata", (0,
        g.x)(c.RH, c));
        g.sh(c, "volumechange", (0,
        g.x)(c.TH, c));
        g.Ah && 6 <= g.Bh && g.sh(c, "webkitbeginfullscreen", (0,
        g.x)(c.play, c));
        b || c.src || c.load();
        a.g.push(c);
        return c
    }
    ;
    Eh = function() {
        var a = g.Xd("PREF");
        if (a)
            for (var a = (0,
            window.unescape)(a).split("&"), b = 0; b < a.length; b++) {
                var c = a[b].split("=")
                  , d = c[0];
                (c = c[1]) && (Dh[d] = c.toString())
            }
    }
    ;
    Fh = function(a) {
        if (/^f([1-9][0-9]*)$/.test(a))
            throw "ExpectedRegexMatch: " + a;
    }
    ;
    Gh = function(a) {
        if (!/^\w+$/.test(a))
            throw "ExpectedRegexMismatch: " + a;
    }
    ;
    Hh = function(a) {
        a = void 0 !== Dh[a] ? Dh[a].toString() : null;
        return null != a && /^[A-Fa-f0-9]+$/.test(a) ? (0,
        window.parseInt)(a, 16) : null
    }
    ;
    mba = function() {
        function a(a) {
            return b && a in b ? b[a] : ""
        }
        var b = window.images;
        g.Ih = a("defaultProfile");
        g.Jh = a("pairingNormal");
        g.Kh = a("pairingSuccess");
        Lh = a("consentLightboxMasthead");
        g.Mh = a("musicpassHero");
        g.Nh = a("musicpassIconBackground");
        g.Oh = a("musicpassIconNoAds");
        g.Ph = a("musicpassIconOffline");
        g.Qh = a("musicpassFeature1");
        g.Rh = a("musicpassFeature2");
        g.Sh = a("musicpassFeature3");
        g.Th = a("musicpassFeature4");
        g.Uh = a("musicpassLogo");
        g.Vh = a("musicpassBackgroundBanner");
        g.Wh = a("signInPromo");
        g.Xh = a("tipJarCheck");
        g.Yh = a("zeroStateSubs")
    }
    ;
    g.Zh = function() {
        var a = window.event;
        a && (a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0)
    }
    ;
    g.$h = function() {
        var a = window.event || window.event;
        return a ? a.target || a.srcElement : null
    }
    ;
    nba = function(a, b, c, d) {
        return d + "[" + c + "] on " + hg(b, 150)
    }
    ;
    g.ai = function(a, b, c, d, e) {
        var f = a || window.document;
        a = ig(c, a || g.ba, 16, nba, f, b, e ? e + "  " : "");
        f.addEventListener(b, a, !!d);
        return a
    }
    ;
    bi = function() {
        this.b = []
    }
    ;
    ci = function(a) {
        this.A = a;
        this.A._wect = this;
        this.g = {};
        this.b = {};
        this.o = {}
    }
    ;
    oba = function(a) {
        a._wect || new ci(a);
        return a._wect
    }
    ;
    di = function(a, b) {
        a.o[b] || (a.o[b] = (0,
        g.x)(a.B, a, b));
        return a.o[b]
    }
    ;
    ei = function(a, b, c, d) {
        d = !!d;
        var e = b + ":" + (d ? "capture" : "bubble");
        a.b[e] || (a.b[e] = [],
        a.A.addEventListener(b, di(a, e), d));
        a.b[e].push(c)
    }
    ;
    g.fi = function(a, b, c, d, e) {
        var f = oba(a);
        ei(f, b, c, d);
        e && pba(a, function() {
            ei(f, b, c, d)
        }, function() {
            var a = !!d
              , e = b + ":" + (a ? "capture" : "bubble");
            if (f.b[e]) {
                f.g[e] && (f.b[e] = f.b[e].slice(0));
                var p = f.b[e].indexOf(c);
                -1 != p && f.b[e].splice(p, 1);
                0 == f.b[e].length && (f.b[e] = void 0,
                f.A.removeEventListener(b, di(f, e), a))
            }
        })
    }
    ;
    pba = function(a, b, c) {
        a.addEventListener("DOMFocusIn", function(a) {
            a.target && "TEXTAREA" == a.target.tagName && b()
        }, !1);
        a.addEventListener("DOMFocusOut", function(a) {
            a.target && "TEXTAREA" == a.target.tagName && c()
        }, !1)
    }
    ;
    g.gi = function(a, b, c, d) {
        var e = window.document.createEvent("HTMLEvents");
        e.initEvent(b, !0, !0);
        e.sender = c;
        e.ay = d;
        a.dispatchEvent(e)
    }
    ;
    g.ii = function() {
        return g.Gf && window.matchMedia ? window.matchMedia("(orientation:landscape) and (min-width: 801px)").matches : !g.ha(window.orientation) || 3 <= g.hi ? window.screen.height < window.screen.width : 90 == (window.orientation + 180) % 180
    }
    ;
    li = function() {
        var a = g.ii();
        if (null == ji || ji != a)
            ji = a,
            g.gi(window.document.body, ki, window.document.body, a)
    }
    ;
    qba = function() {
        10 <= g.mi || g.Pf ? g.ai(window, "orientationchange", li) : g.ai(window, "resize", function() {
            var a = !1
              , b = window.innerWidth
              , a = b != ni;
            ni = b;
            a && li()
        }, !1, "orientation")
    }
    ;
    oi = function(a) {
        a.nr = function(b) {
            return a(b.ay)
        }
        ;
        g.fi(window.document.body, ki, a.nr)
    }
    ;
    pi = function(a) {
        var b = window.document.body
          , c = a ? "_me" : "_md";
        g.Nc(b, a ? "_md" : "_me");
        g.Lc(b, c)
    }
    ;
    g.ri = function() {
        return qi ? window.screen.height / window.screen.width * window.document.body.clientWidth : window.innerHeight
    }
    ;
    rba = function(a) {
        if ("none" != a.style.display) {
            var b = 3 * Math.min(a.clientWidth, a.clientHeight);
            a.height = a.width = b;
            var c;
            c = a.getAttribute("data-spinner-color") ? a.getAttribute("data-spinner-color") : "153,153,153";
            a = a.getContext("2d");
            var d = b / 2
              , e = Math.ceil(.24 * b / 2)
              , f = Math.floor(b / 2 - e);
            try {
                a.save();
                a.clearRect(0, 0, b, b);
                a.translate(d, d);
                a.rotate(si * ti / 8);
                for (b = 0; 8 > b; b++) {
                    var k = ui[b];
                    a.fillStyle = "rgba(" + c + "," + k.opacity + ")";
                    var d = a
                      , l = f * k.nS
                      , p = f * k.oS
                      , w = e;
                    d.beginPath();
                    d.arc(l, p, w, 0, ti, !0);
                    d.closePath();
                    d.fill()
                }
                a.restore()
            } catch (B) {
                if (!(g.Pf && 5 > g.Of))
                    throw B;
            }
        }
    }
    ;
    wi = function() {
        if (vi = g.oc("_mf"))
            si = Math.floor((0,
            g.G)() / 120) % 8,
            (0,
            g.D)(vi, rba);
        window.setTimeout(wi, 120)
    }
    ;
    xi = function(a) {
        var b = g.vc("style");
        b.type = "text/css";
        b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(window.document.createTextNode(String(a)));
        g.nc("head", void 0, void 0)[0].appendChild(b)
    }
    ;
    Ai = function(a) {
        if (yi[a]) {
            a = yi[a];
            a = "low" == zi() ? a[0] : a[1];
            var b = g.vc("link");
            b.rel = "stylesheet";
            b.href = a;
            g.nc("head", void 0, void 0)[0].appendChild(b)
        }
    }
    ;
    Ci = function(a, b) {
        var c = zi()
          , d = Bi[a]
          , e = (0,
        g.N)(d.styles, sba);
        tba(d.urls[c], e, d.bg_width, d.bg_height);
        b && (c = d.urls[c],
        (new window.Image).src = c)
    }
    ;
    sba = function(a) {
        return {
            className: oh(uba[a[0]] || "." + a[0]),
            cu: a[1],
            Al: a[2],
            width: a[3],
            height: a[4]
        }
    }
    ;
    zi = function() {
        var a = window.devicePixelRatio || 1;
        return 2 <= a ? "vhigh" : 1.5 <= a ? "high" : "low"
    }
    ;
    tba = function(a, b, c, d) {
        var e = (0,
        g.N)(b, function(a) {
            return a.className
        }).join(",")
          , e = oh(e);
        a = gba({
            url: a,
            Tq: c,
            Sq: d,
            names: e,
            rR: b
        });
        xi(a)
    }
    ;
    g.Ei = function(a, b, c) {
        if (Ce(a))
            return !0;
        Di(g.Ef(a), !!c, b || {});
        return !1
    }
    ;
    g.Fi = function(a, b) {
        if (!a)
            throw "target/clicked element not found";
        if ("A" != a.nodeName && (a = g.Fc(g.$h(), "A"),
        !a))
            return !0;
        var c = g.Tf(a.getAttribute("href"))
          , d = a.getAttribute("data-click-tracking-params");
        d && (c = g.bc(c, "itct", d));
        return g.Ei(c, b)
    }
    ;
    Gi = function(a, b) {
        a = g.Fc(a, "FORM");
        if (!a)
            throw "form not found";
        var c = g.Ef(a.getAttribute("action"))
          , d = 0 <= c.indexOf("?") ? "&" : "?"
          , e = g.qe(a);
        return g.Ei(c + d + e, b)
    }
    ;
    g.Hi = function(a, b, c, d, e) {
        var f = Array.prototype.slice.call(arguments, 4);
        return (0,
        window.setTimeout)(function() {
            try {
                return b.apply(d, f)
            } catch (e) {
                a += " @" + c + " {",
                d && d.hasOwnProperty ? g.La(d, function(b, c, d) {
                    d.hasOwnProperty(c) && (a += c + (":" + b).substr(0, 5) + ";")
                }) : a += "" + d,
                a += "}," + f.join(","),
                g.fg(15, e, a)
            }
        }, c)
    }
    ;
    g.Ji = function(a, b) {
        var c = ["onclick"];
        g.Ja(c, arguments);
        return g.Ii.apply(this, c)
    }
    ;
    g.Ii = function(a, b, c) {
        return Ki.DH.apply(Ki, arguments)
    }
    ;
    g.O = function(a, b) {
        return Ki.CH.apply(Ki, arguments)
    }
    ;
    g.Mi = function(a, b) {
        var c = Ki;
        c.xa[a] = b;
        c = "<div" + (' id="' + Li(c, a) + '" ') + 'class="koya-partial">' + c.Ec(a) + "</div>";
        return (0,
        g.I)(c)
    }
    ;
    Ni = function(a) {
        this.Za = a;
        this.W = {};
        this.X = {};
        this.xa = {};
        this.M = {};
        this.H = String(vba++);
        this.wa = 0
    }
    ;
    Oi = function(a) {
        return "koya_child_" + a.H
    }
    ;
    g.R = function(a, b) {
        var c = a.V(b);
        if (c) {
            var d = (0,
            g.I)(a.Ec(b))
              , d = Ve(d);
            c.innerHTML = g.qb(d);
            a.Ca(b);
            a.tl(b)
        }
    }
    ;
    Pi = function(a, b) {
        var c = "<" + b + ' id="' + Oi(a) + '" class="koya-komponent-binding">'
          , c = c + g.K(a.Ec());
        return (0,
        g.I)(c + ("</" + b + ">"))
    }
    ;
    Li = function(a, b) {
        if (a.ha())
            return "";
        var c = a.X[b];
        c || (c = a.H + "_" + a.wa++,
        a.X[b] = c);
        return "koya_elem_" + c
    }
    ;
    g.Q = function(a) {
        return (0,
        g.P)(' id="' + Li(Ki, a) + '" ')
    }
    ;
    Qi = function(a) {
        return a instanceof Se ? a.getContent() : a
    }
    ;
    g.Ri = function(a) {
        Ni.call(this, a || g.ub(""));
        this.display = !0;
        this.Fi = {};
        this.N = new bi;
        g.F(this, this.N)
    }
    ;
    Si = function(a, b) {
        (0,
        g.D)(a.getChildren(), b)
    }
    ;
    wba = function(a, b) {
        var c = a.V(b);
        c && (0,
        g.D)(g.nc("a", void 0, c), function(a) {
            var b = a.getAttribute("href");
            b && (g.qa(b, "#//") || Ti && g.qa(b, "#/")) && a.setAttribute("href", b.substring(1))
        })
    }
    ;
    g.Ui = function(a, b) {
        a.display = b;
        g.R(a)
    }
    ;
    g.Vi = function(a, b, c, d, e, f) {
        var k = a.V(b);
        if (k)
            if (d) {
                if (f)
                    for (var l in a.Fi)
                        f = a.V(l),
                        g.Kc(f, c) && (g.Nc(f, c),
                        e && g.Lc(f, e),
                        delete a.Fi[l]);
                e && g.Nc(k, e);
                g.Lc(k, c)
            } else
                g.Nc(k, c),
                e && g.Lc(k, e);
        a.Fi[b] = d
    }
    ;
    g.Xi = function(a, b, c) {
        g.Ri.call(this, a);
        this.dA = b;
        this.duration = c ? c : 2E3 * b.length;
        this.hm = g.Wi;
        this.b = this.g = -1
    }
    ;
    Yi = function(a) {
        return a.V("toast")
    }
    ;
    g.Zi = function(a, b, c) {
        g.Xi.call(this, g.nh, b, c);
        this.Ii = a
    }
    ;
    g.bj = function(a) {
        $i.push(a);
        1 == $i.length && aj()
    }
    ;
    g.cj = function(a, b, c) {
        c ? g.bj(new g.Zi("_mx",[a],b)) : g.bj(new g.Zi("_my",[a],b))
    }
    ;
    g.dj = function(a, b) {
        a && a.length && (b ? g.bj(new g.Zi("_mx",a)) : g.bj(new g.Zi("_my",a)))
    }
    ;
    aj = function() {
        $i.length && $i[0].show(function() {
            $i.shift();
            aj()
        })
    }
    ;
    ej = function(a) {
        var b;
        a: {
            if (a = g.qa(a, ")]}'") ? a.substring(4) : null)
                try {
                    b = g.Ff(a);
                    break a
                } catch (c) {}
            b = null
        }
        return new xba(b)
    }
    ;
    g.hj = function(a, b, c) {
        a = fc(a, "ajax");
        b = Sb(a);
        Ce(a) || b ? b = g.Cf : (b = function(a, b) {
            g.Ei(a, b, !0)
        }
        ,
        c && (g.dj(g.fj(c), !0),
        g.dj(g.gj(c))));
        (0,
        window.setTimeout)(g.oa(b, a), 1)
    }
    ;
    xba = function(a) {
        (this.cg = !a) ? (this.content = {},
        this.result = "error",
        this.errors = [(0,
        g.I)("Invalid response received.")]) : (this.content = a.content,
        this.o = a.location,
        this.b = a.conn,
        this.username = a.signed_in_username,
        this.g = a.build_signature,
        this.timestamp = a.timestamp || 0,
        this.result = a.result,
        this.messages = a.messages,
        this.errors = a.errors)
    }
    ;
    ij = function(a, b) {
        return a[b] && a[b].length ? a[b] : null
    }
    ;
    g.gj = function(a) {
        return ij(a, "messages")
    }
    ;
    g.fj = function(a) {
        return ij(a, "errors")
    }
    ;
    yba = function(a) {
        if (a.cg)
            a = null;
        else {
            var b = a.username;
            if (g.n(b) && b !== g.jj)
                a = 2;
            else {
                if (b = kj && lj)
                    b = a.g,
                    b = !(!b || mj === b);
                a = b && (a.timestamp && nj ? Math.random() < Math.max(.2, (a.timestamp - nj) / 86400 / 14) : .2 > Math.random()) ? 7 : null
            }
        }
        return a
    }
    ;
    g.oj = function(a, b, c, d, e, f) {
        function k(a) {
            d(a.responseText)
        }
        function l() {}
        f = Pg(f);
        try {
            g.ye(zba(a), {
                method: b ? "POST" : "GET",
                format: "RAW",
                headers: f,
                kj: c,
                timeout: 3E4,
                rb: k,
                onError: l,
                ke: e
            })
        } catch (p) {
            p instanceof window.DOMException && g.Rg({
                action: "invalid_http_header",
                url: a,
                headers: JSON.stringify(f)
            })
        }
    }
    ;
    zba = function(a) {
        var b = new g.yg(a)
          , c = b.o
          , d = Aba.exec(c);
        if (!d || d[0] != c)
            throw "invalid url [" + a + "]";
        return b.toString()
    }
    ;
    Bba = function(a, b, c, d, e) {
        g.oj(a, b, c, function(a) {
            a = ej(a);
            d(a)
        }, e)
    }
    ;
    g.pj = function(a, b, c) {
        this.name = a;
        this.A = c;
        this.B = b;
        c = Cba();
        g.pa(c, b);
        b = g.$b(c).split("&");
        b.sort();
        b = b.join("&");
        this.url = Ce(a) || g.qa(a, "/") ? a : "/" + a;
        this.A ? this.content = b : (this.url += "?" + b,
        this.content = "");
        this.o = [];
        this.g = []
    }
    ;
    qj = function(a) {
        for (var b = 0; b < a.g.length; b++)
            a.g[b]()
    }
    ;
    Dba = function(a, b) {
        if (a.g || a.o)
            if (b)
                if ("redirect" === b.result)
                    a.b ? a.b(b.o, a, b) : qj(a);
                else {
                    var c = yba(b);
                    null !== c && dg(c) || ((0,
                    g.D)(a.o, function(a) {
                        a(b)
                    }),
                    (0,
                    g.D)(rj, function(a) {
                        a(b)
                    }))
                }
            else
                qj(a)
    }
    ;
    Cba = function() {
        var a = {
            ajax: 1,
            tsp: 1,
            layout: g.Gf ? "tablet" : "mobile",
            utcoffset: -(new Date).getTimezoneOffset(),
            ipadtype: sj,
            player: tj
        }
          , a = g.Ma(a, function(a) {
            return a
        });
        g.Sa(a, uj);
        return a
    }
    ;
    g.vj = function() {
        this.o = [];
        this.g = [];
        this.url = g.Sf()
    }
    ;
    Eba = function() {
        wj && (wj = !1,
        "onhashchange"in window ? xj && (window.removeEventListener("hashchange", xj, !1),
        xj = null) : (window.clearInterval(yj),
        yj = null))
    }
    ;
    Bj = function() {
        if (wj) {
            var a = g.Sf();
            zj != a && (zj = a,
            Aj(a))
        }
    }
    ;
    g.Cj = function() {
        return null
    }
    ;
    g.Dj = function(a) {
        a = a || {};
        var b = a.Ug
          , c = a.Bb
          , d = a.id
          , e = a.Lb
          , f = a.ad
          , k = a.wb
          , l = a.small
          , p = a.style
          , w = a.ua
          , B = a.type
          , z = a.kb;
        return (0,
        g.I)("<button" + (d ? ' id="' + g.L(d) + '"' : "") + (a.ia ? null != f ? g.M((0,
        g.Ji)(a.ia, f)) : g.M((0,
        g.Ji)(a.ia)) : "") + (k ? " " + g.M((0,
        g.P)("")) : "") + (e ? " disabled" : "") + (b ? 'aria-label="' + g.L(b) + '"' : "") + (B ? ' type="' + g.L(B) + '"' : "") + ' class="_msc' + (p ? " " + g.L(p) : "") + (c ? " " + g.L(c) : "") + (l ? " _mhh" : "") + (z ? " _mbf" : "") + '">' + (w ? g.J(w) : "") + "</button>")
    }
    ;
    g.Ej = function(a) {
        a = a || {};
        return (0,
        g.I)(g.Dj(g.hf(a, {
            style: g.kf("_mtc")
        })))
    }
    ;
    g.Fj = function(a) {
        a = a || {};
        var b = a.Bb
          , c = a.id
          , d = a.Ie
          , e = a.pM
          , f = a.ad
          , k = a.wb
          , l = a.rel
          , p = a.small
          , w = a.style
          , B = a.ua
          , z = a.kb;
        return (0,
        g.I)('<a href="' + (d ? g.L(g.wf(d)) : "#") + '"' + (c ? ' id="' + g.L(c) + '"' : "") + (k ? g.M((0,
        g.P)("")) : "") + (a.ia ? null != f ? g.M((0,
        g.Ji)(a.ia, f)) : g.M((0,
        g.Ji)(a.ia)) : 'onClick="return clk(this);"') + (e ? 'target="_blank"' : "") + (l ? 'rel="' + g.L(l) + '"' : "") + ' class="_msc' + (w ? " " + g.L(w) : "") + (b ? " " + g.L(b) : "") + (p ? " _mhh" : "") + (z ? " _mbf" : "") + '">' + (B ? g.J(B) : "") + "</a>")
    }
    ;
    Fba = function(a) {
        var b = a.gI, c = g.I, d;
        d = (0,
        g.I)("A privacy reminder from YouTube, a Google company");
        d = '<div class="_mnj"><div class="_moj"><div class="_mpj"><div class="_mqj"></div></div><div class="_mrj ' + (1 == b ? "_msj" : 2 == b ? "_mtj" : "") + '">' + d + "</div></div>";
        var e;
        if (2 == b) {
            e = '<div class="_muj"><span>' + (0,
            g.I)("To be consistent with data protection laws, we're asking you to take a moment to review some key points of our Privacy Policy, which covers all Google services and describes how we use data and what options you have.") + '</span> <span class="_mvj">';
            var f;
            f = (0,
            g.I)("We'll need you to do this today.");
            e = e + f + "</span></div>"
        } else
            e = "";
        d = d + e + '<div class="_mwj">';
        e = a.pl;
        f = (0,
        g.I)("Read later");
        d += g.K(g.Ej({
            ia: e,
            ua: (0,
            g.kh)("" + f)
        }));
        e = g.kf("_mxj");
        a = a.CA;
        b = 1 == b ? (0,
        g.I)("Review") : 2 == b ? (0,
        g.I)("Review now") : "";
        return c(d + g.K(g.Ej({
            Bb: e,
            ia: a,
            ua: (0,
            g.kh)("" + b)
        })) + "</div></div>")
    }
    ;
    Gba = function(a) {
        var b = g.I, c = '<div class="_myj"><div class="_mzj"><img class="_mak" src="' + g.L(g.xf(Lh)) + '" /><div class="_mbk">', d;
        d = (0,
        g.I)("Before you continue to YouTube...");
        c = c + d + '</div><div class="_mck">';
        d = (0,
        g.I)("To be consistent with data protection laws, we're asking you to take a moment to review some key points of our Privacy Policy. We'll need you to do this in order to continue using Google Services.");
        c = c + d + "</div>";
        d = g.kf("_mdk");
        a = a.CA;
        var e;
        e = (0,
        g.I)("Next");
        return b(c + g.K(g.Ej({
            Bb: d,
            ia: a,
            ua: (0,
            g.kh)("" + e)
        })) + "</div></div>")
    }
    ;
    Gj = function(a) {
        g.Ri.call(this, a);
        this.b = g.De("https://consent.google.com", {
            "continue": window.location.href,
            origin: window.location.origin,
            pc: "yt",
            m: "1",
            gl: g.$f,
            hl: g.Zf,
            fexp: g.fe.Qr
        })
    }
    ;
    Hba = function() {
        var a = Hj;
        return 1 == a || 2 == a ? new Ij(a) : 3 == a ? new Jj : null
    }
    ;
    Ij = function(a) {
        Gj.call(this, Fba);
        this.gI = a
    }
    ;
    Jj = function() {
        Gj.call(this, Gba);
        Qf(!1)
    }
    ;
    Jba = function(a) {
        var b = a.eh
          , c = a.oK;
        a = g.I;
        var d = (g.jj ? "" : g.K(g.Fj({
            Ie: "#/signin",
            kb: !0,
            ua: g.kf("" + g.eh()),
            wb: "header_menu_signin_button"
        }))) + g.K(g.Fj({
            Ie: "#/select_site",
            kb: !0,
            ua: g.kf("" + gh()),
            wb: "header_menu_settings_button"
        })), e;
        e = (0,
        g.I)("Privacy & Terms");
        d += g.K(g.Fj({
            Ie: "#/terms",
            kb: !0,
            ua: g.kf("" + e),
            wb: "header_menu_privacy_button"
        }));
        e = (0,
        g.I)("Feedback");
        d += g.K(g.Fj({
            ia: Iba,
            kb: !0,
            ua: g.kf("" + e),
            wb: "header_menu_feedback_button"
        }));
        e = (0,
        g.I)("Help");
        c = d + g.K(g.Fj({
            ia: g.Cf,
            ad: c,
            kb: !0,
            ua: g.kf("" + e),
            wb: "header_menu_help_button"
        }));
        d = (0,
        g.I)("Desktop");
        return a(c + g.K(g.Fj({
            ia: g.Cf,
            ad: b,
            kb: !0,
            ua: g.kf("" + d),
            wb: "header_menu_desktop_button"
        })))
    }
    ;
    Kba = function(a) {
        return (0,
        g.I)("<div " + g.M((0,
        g.Ji)(a.unregister)) + ' class="_mug" style="height:' + g.L(g.zf(a.ax)) + 'px"><div ' + g.M(g.Q("lightbox")) + " " + g.M((0,
        g.Ji)(a.ZN)) + ' class="_mll" style="max-height: ' + g.L(g.zf(a.bM)) + 'px" role="dialog" tabindex="-1"' + (a.title ? 'aria-labelledby="lightbox_title"' : "") + ">" + (a.title ? '<div class="_mml"><h1 id="lightbox_title" class="_maf" ' + g.M((0,
        g.P)("")) + ">" + g.J(a.title) + "</h1></div>" : "") + "<div " + g.M(g.Q("lightboxContent")) + ' class="_mbc">' + g.K(g.Mi("lightbox_content", a.SL)) + "</div>" + (a.up ? g.K(g.Dj({
            id: "cancel_button",
            ia: a.unregister,
            wb: "cancel",
            ua: (0,
            g.kh)("" + g.K(g.ch())),
            kb: !0
        })) : "") + "</div></div>")
    }
    ;
    g.Lj = function(a, b) {
        g.Ri.call(this, Kba);
        this.SL = a;
        this.ax = g.Kj();
        this.bM = Math.round(.75 * g.ri());
        this.title = b;
        this.o = 0
    }
    ;
    Lba = function() {
        g.Mj.map(function(a) {
            a.unregister()
        })
    }
    ;
    g.Nj = function(a) {
        g.Mj.push(a);
        a.register(g.mc("lightbox"));
        a.b = (0,
        g.x)(a.Il, a);
        oi(a.b);
        g.Kf();
        g.pc("_mbc").addEventListener("touchmove", Qaa, !1);
        Qf(!1);
        g.mc("content-container").setAttribute("aria-hidden", !0);
        g.mc("player") && g.mc("player").setAttribute("aria-hidden", !0);
        a.g = window.document.activeElement;
        (g.mc("cancel_button") || a.V("lightbox")).focus()
    }
    ;
    g.Kj = function() {
        var a = Math.max(window.document.body.scrollHeight, window.document.body.scrollWidth)
          , b = g.mc("content-container");
        b && (a = Math.max(a, b.scrollHeight, b.scrollWidth));
        return a
    }
    ;
    g.Oj = function(a, b) {
        g.Lj.call(this, g.ih, b || "");
        this.content = a;
        a.b = this
    }
    ;
    g.Pj = function(a) {
        g.Ri.call(this, a);
        this.b = null
    }
    ;
    Rj = function(a, b) {
        var c = g.ac("//support.google.com/youtube/?src=web", {
            hl: g.Zf,
            p: a || "yt_mobile_web"
        });
        g.Oj.call(this, new Qj(c,b))
    }
    ;
    Qj = function(a, b) {
        g.Pj.call(this, Jba);
        this.eh = b;
        this.oK = a
    }
    ;
    Mba = function(a) {
        var b = "", c = '<div class="_mbl" ' + g.M((0,
        g.Ji)(a.EA)) + '></div><div class="_mcl"><a class="_mdl" href=\'#\' ' + g.M((0,
        g.Ji)(a.EA)) + '><img src="' + g.L(g.xf(Sj)) + '" class="_mel"></a><div class="_mfl"><a href=\'#\' ' + g.M((0,
        g.Ji)(a.ia)) + '><img src="' + g.L(g.xf(Tj)) + '" class="_mgl" alt="YouTube"></a></div><div class="_mhl"><a href=\'#\' ' + g.M((0,
        g.Ji)(a.ia)) + ">", d;
        d = (0,
        g.I)("YouTube");
        c = c + d + '</a></div><div class="_mil">';
        d = (0,
        g.I)("The official app is here");
        c = c + d + '</div><div class="_mil">';
        d = (0,
        g.I)("Available on the App Store");
        a = b + (c + d + "</div><div class=\"_mjl\"><a href='#' " + g.M((0,
        g.Ji)(a.ia)) + '><span class="_mkl">INSTALL</span></a></div></div>');
        return (0,
        g.I)(a)
    }
    ;
    Uj = function(a) {
        Nba && g.Rg({
            action_ios_app_promo: 1,
            event: a,
            promo: "interstitial"
        })
    }
    ;
    Vj = function(a) {
        try {
            var b = g.Vg(a);
            if (b)
                return g.Ff(b)
        } catch (c) {}
        return null
    }
    ;
    g.Wj = function(a, b) {
        var c = Oba.Xd(b);
        c && g.Wg(a, c)
    }
    ;
    Yj = function() {
        g.Ri.call(this, Mba);
        Xj = !1;
        Uj("show")
    }
    ;
    g.ak = function(a) {
        a = a || {};
        var b = ""
          , c = "" + Zj()
          , c = (0,
        g.kh)(c)
          , b = b + ('<div class="_mgr"><button class="_mhr" type="submit" aria-label="' + g.L(c) + '"' + g.M(g.Q("submit")) + g.M((0,
        g.P)("")) + (a.dB ? g.M((0,
        g.Ji)(a.dB)) : ' onclick="return formSubmit(this);"') + '><span class="' + (a.rI ? "_mir" : "_mdh") + '"' + g.M(g.Q("submitSearchButton")) + "></span></button></div>");
        return (0,
        g.I)(b)
    }
    ;
    g.bk = function(a) {
        var b = ""
          , c = "" + (0,
        g.I)("Clear current search text")
          , c = (0,
        g.kh)(c)
          , b = b + ('<div class="_mjr"><a ' + g.M((0,
        g.Ji)(a.Jt)) + 'class="_mkr" role="button" aria-label="' + g.L(c) + '"' + g.M((0,
        g.P)("")) + '><span class="_mlr"' + g.M(g.Q("clearSearchButton")) + ' style="display:none;"></span></a></div>');
        return (0,
        g.I)(b)
    }
    ;
    g.ek = function(a) {
        return (0,
        g.I)('<input type="' + (3 > g.Of || ck ? "text" : "search") + '" class="_mmr" ' + g.M(g.Q("textbox")) + g.M(g.Ii("onchange", a.onChange)) + g.M(g.Ii("onkeyup", a.Oe)) + 'value="' + g.L(a.query) + '" autocapitalize="off" autocomplete="off" autocorrect="off" tabindex="1" name="q"' + (g.dk ? 'placeholder="' + g.L(a.placeholder) + '"' : "") + (3 != g.Of ? 'style="height:26px"' : "") + 'aria-autocomplete="list" aria-haspopup="true"' + g.M((0,
        g.P)("")) + " />")
    }
    ;
    g.gk = function(a) {
        var b = g.I;
        a = '<div class="_mnr' + (fk ? "" : " _mor") + '"' + g.M(g.Q("searchbar")) + " " + g.M((0,
        g.P)("")) + '><div class="_mpr"><form action="#/results" ' + g.M(g.Q("form")) + ">" + g.ak(a) + '<div class="_mqr"><div class="_mrr">' + g.ek(g.hf(a, {
            placeholder: (0,
            g.kh)("" + Zj())
        })) + "</div>" + g.bk(a) + "</div></form></div>";
        var c;
        c = (0,
        g.I)('<div class="_mfr"><div class="_mhc" id="acContainer"><div id="historyActionList" style="display:none;"><div id="clearAll">Clear History</div><div id="turnOn">Enable History</div><div id="turnOff">Disable History</div></div><table id="suggestTable"></table></div></div>');
        return b(a + c + "</div>")
    }
    ;
    Zj = function() {
        return (0,
        g.I)("Search YouTube")
    }
    ;
    g.ik = function(a, b, c) {
        a && (a.dataset ? a.dataset[hk(b)] = c : a.setAttribute("data-" + b, c))
    }
    ;
    g.jk = function(a, b) {
        return a ? a.dataset ? a.dataset[hk(b)] : a.getAttribute("data-" + b) : null
    }
    ;
    hk = function(a) {
        return kk[a] || (kk[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }))
    }
    ;
    g.lk = function(a) {
        g.ba.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;
    g.nk = function(a, b) {
        var c = a;
        b && (c = (0,
        g.x)(a, b));
        c = Pba(c);
        !g.ia(g.ba.setImmediate) || g.ba.Window && g.ba.Window.prototype && !g.Ua("Edge") && g.ba.Window.prototype.setImmediate == g.ba.setImmediate ? (mk || (mk = Qba()),
        mk(c)) : g.ba.setImmediate(c)
    }
    ;
    Qba = function() {
        var a = g.ba.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !g.Ua("Presto") && (a = function() {
            var a = window.document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            window.document.documentElement.appendChild(a);
            var b = a.contentWindow
              , a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random()
              , d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host
              , a = (0,
            g.x)(function(a) {
                if (("*" == d || a.origin == d) && a.data == c)
                    this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !g.Ua("Trident") && !g.Ua("MSIE")) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (g.n(c.next)) {
                    c = c.next;
                    var a = c.kx;
                    c.kx = null;
                    a()
                }
            }
            ;
            return function(a) {
                d.next = {
                    kx: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof window.document && "onreadystatechange"in window.document.createElement("SCRIPT") ? function(a) {
            var b = window.document.createElement("SCRIPT");
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            }
            ;
            window.document.documentElement.appendChild(b)
        }
        : function(a) {
            g.ba.setTimeout(a, 0)
        }
    }
    ;
    g.ok = function(a, b, c) {
        this.B = c;
        this.o = a;
        this.A = b;
        this.g = 0;
        this.b = null
    }
    ;
    g.pk = function(a, b) {
        a.A(b);
        a.g < a.B && (a.g++,
        b.next = a.b,
        a.b = b)
    }
    ;
    qk = function() {
        this.g = this.b = null
    }
    ;
    rk = function() {
        this.next = this.g = this.b = null
    }
    ;
    g.wk = function(a, b) {
        sk || Rba();
        tk || (sk(),
        tk = !0);
        var c = uk
          , d = vk.get();
        d.set(a, b);
        c.g ? c.g.next = d : c.b = d;
        c.g = d
    }
    ;
    Rba = function() {
        if (g.ba.Promise && g.ba.Promise.resolve) {
            var a = g.ba.Promise.resolve(void 0);
            sk = function() {
                a.then(xk)
            }
        } else
            sk = function() {
                g.nk(xk)
            }
    }
    ;
    xk = function() {
        for (var a = null; a = uk.remove(); ) {
            try {
                a.b.call(a.g)
            } catch (b) {
                g.lk(b)
            }
            g.pk(vk, a)
        }
        tk = !1
    }
    ;
    g.yk = function(a) {
        g.E.call(this);
        this.bl = 1;
        this.o = [];
        this.A = 0;
        this.b = [];
        this.g = {};
        this.B = !!a
    }
    ;
    Sba = function(a, b, c) {
        g.wk(function() {
            a.apply(b, c)
        })
    }
    ;
    g.Ek = function(a, b, c) {
        var d = g.zk();
        if (d) {
            var e = d.subscribe(a, function() {
                if (!Ak || Ak != e) {
                    var d = arguments
                      , k = function() {
                        g.Bk[e] && b.apply(c || window, d)
                    };
                    try {
                        g.Ck[a] ? k() : (0,
                        g.Ad)(k, 0)
                    } catch (l) {
                        g.Cd(l)
                    }
                }
            }, c);
            g.Bk[e] = !0;
            Dk[a] || (Dk[a] = []);
            Dk[a].push(e);
            return e
        }
        return 0
    }
    ;
    g.Fk = function(a, b) {
        var c = g.zk();
        c && c.publish.apply(c, arguments)
    }
    ;
    Gk = function(a) {
        Dk[a] && (a = Dk[a],
        (0,
        g.D)(a, function(a) {
            g.Bk[a] && delete g.Bk[a]
        }),
        a.length = 0)
    }
    ;
    Tba = function(a) {
        var b = g.zk();
        if (b)
            if (b.clear(a),
            a)
                Gk(a);
            else
                for (var c in Dk)
                    Gk(c)
    }
    ;
    g.zk = function() {
        return g.r("yt.pubsub.instance_")
    }
    ;
    g.Hk = function(a, b) {
        if (window.spf) {
            var c = "";
            if (a) {
                var d = a.indexOf("jsbin/")
                  , e = a.lastIndexOf(".js")
                  , f = d + 6;
                -1 < d && -1 < e && e > f && (c = a.substring(f, e),
                c = c.replace(Uba, ""),
                c = c.replace(Vba, ""),
                c = c.replace("debug-", ""),
                c = c.replace("tracing-", ""))
            }
            window.spf.script.load(a, c, b)
        } else
            Wba(a, b)
    }
    ;
    Wba = function(a, b) {
        var c = Xba(a)
          , d = window.document.getElementById(c)
          , e = d && g.jk(d, "loaded")
          , f = d && !e;
        if (e)
            b && b();
        else {
            if (b) {
                var e = g.Ek(c, b)
                  , k = "" + g.na(b);
                g.Ik[k] = e
            }
            f || (d = Yba(a, c, function() {
                if (!g.jk(d, "loaded")) {
                    g.ik(d, "loaded", "true");
                    g.Fk(c);
                    var a = g.oa(Tba, c);
                    (0,
                    g.Ad)(a, 0)
                }
            }))
        }
    }
    ;
    Yba = function(a, b, c) {
        var d = window.document.createElement("script");
        d.id = b;
        d.onload = function() {
            c && (0,
            window.setTimeout)(c, 0)
        }
        ;
        d.onreadystatechange = function() {
            switch (d.readyState) {
            case "loaded":
            case "complete":
                d.onload()
            }
        }
        ;
        d.src = a;
        a = window.document.getElementsByTagName("head")[0] || window.document.body;
        a.insertBefore(d, a.firstChild);
        return d
    }
    ;
    Xba = function(a) {
        var b = window.document.createElement("a");
        g.hc(b, a);
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "js-" + g.Ba(a)
    }
    ;
    Zba = function() {
        Jk()
    }
    ;
    $ba = function(a) {
        return a.q.value ? Gi(a, {
            tM: !0
        }) : !1
    }
    ;
    aca = function(a, b) {
        (0,
        window.setTimeout)(function() {
            var c = {
                EXPERIMENT_ID: g.fe.o.mobile_suggest_exp_id,
                IS_RTL: "rtl" == Kk,
                PSUGGEST_TOKEN: Lk,
                REQUEST_LANGUAGE: "en",
                SESSION_INDEX: g.Mk
            }, d;
            d = (0,
            g.I)("Clear history");
            var e;
            e = (0,
            g.I)("Clear history?");
            var f = (0,
            g.I)("Remove"), k;
            k = (0,
            g.I)("Suggestion removed");
            window.ytsboxinstall(b.form, a, b, c, {
                CLEAR_HISTORY: d,
                CONFIRM_CLEAR_HISTORY: e,
                SUGGESTION_DISMISS_LABEL: f,
                SUGGESTION_DISMISSED_LABEL: k
            }, $ba)
        }, 10)
    }
    ;
    g.Nk = function(a, b) {
        g.Ri.call(this, this.xD);
        this.query = b || "";
        this.b = !1;
        this.o = a;
        this.g = !1
    }
    ;
    Ok = function(a) {
        return a.V("textbox")
    }
    ;
    dca = function(a) {
        var b = g.I
          , c = g.K(g.O(a.nL));
        a = (0,
        g.I)("<div " + g.M(g.Q("pageContainer")) + 'class="_msg ' + g.L(a.np) + (a.Fi.pageContainer ? " _mcb" : "") + '"><div class="_mhd"' + g.M((0,
        g.P)("")) + ">" + g.K(g.Mi("header", bca)) + g.K(g.O(a.Wd)) + '</div><div class="_mqb">' + g.K(g.Mi("contentMask", cca)) + "<div " + g.M(g.Q("pageContent")) + 'class="_mtg ' + (a.Fi.pageContent ? "_mdb" : "") + '"' + g.M((0,
        g.P)("")) + ">" + g.K(g.Mi("content", a.hI)) + "</div></div></div>");
        return b(c + a)
    }
    ;
    cca = function(a) {
        return (0,
        g.I)('<div class="_mfc _mug"' + g.M(g.Q("pageContentMask")) + g.M((0,
        g.Ji)(a.eO)) + "></div>")
    }
    ;
    bca = function(a) {
        return (0,
        g.I)('<div class="_mvg"><div class="_mwg"><button ' + g.M((0,
        g.Ji)(a.RN)) + " " + g.M((0,
        g.P)("")) + 'title="' + g.L(g.hh()) + '"><span class="_mxg _myg"></span></button></div></div><div class="_mzg">' + (a.tC ? '<div class="_mwg"><div class="_mah">' + g.K(g.Mi("spinner", g.mh)) + "</div></div>" : "") + '<div class="_mwg _mbh">' + (a.cast ? g.K(g.O(a.cast)) : "") + "</div>" + (a.Gi ? "" : '<div class="_mwg _mch"><button ' + g.M((0,
        g.Ji)(a.$O)) + 'title="' + g.L(Zj()) + '"><span class="_mxg _mdh"></span></button></div>') + '<div class="_mwg _meh"><button ' + g.M((0,
        g.Ji)(a.SN)) + " " + g.M((0,
        g.P)("")) + 'title="' + g.L(gh()) + '"><span class="_mxg _mfh"/></button></div></div>' + (a.title ? '<h1 class="_mgh">' + g.J(a.title) + "</h1>" : ""))
    }
    ;
    eca = function() {
        var a = window.document.getElementsByTagName("head")[0].getElementsByTagName("link")
          , a = (0,
        g.Ac)(a, function(a) {
            return "apple-touch-icon-precomposed" == a.getAttribute("rel")
        });
        g.D(a, g.yc)
    }
    ;
    fca = function() {
        var a = Pk;
        eca();
        var b = window.document.getElementsByTagName("head")[0];
        g.La(a, function(a, d) {
            var e, f = {
                sizes: d,
                href: a
            };
            e = g.lc();
            var f = f || g.Qk
              , f = (0,
            g.I)('<link rel="apple-touch-icon-precomposed" href="' + g.L(g.wf(f.href)) + '"' + (f.sizes ? 'sizes="' + g.L(f.sizes) + '" ' : "") + "/>")
              , f = g.Xe(f)
              , k = e.b;
            e = k.createElement("DIV");
            g.Hb ? (e.innerHTML = "<br>" + f,
            e.removeChild(e.firstChild)) : e.innerHTML = f;
            if (1 == e.childNodes.length)
                e = e.removeChild(e.firstChild);
            else {
                for (f = k.createDocumentFragment(); e.firstChild; )
                    f.appendChild(e.firstChild);
                e = f
            }
            b.appendChild(e)
        })
    }
    ;
    g.Rk = function(a, b) {
        g.Ri.call(this, dca);
        this.ya = a;
        this.hI = b;
        this.Wd = this.fx();
        this.np = this.Gi ? "" : this.Wd.b ? "_mab" : "_mbb";
        this.R = 1;
        this.ga = (0,
        g.x)(this.Rb, this);
        this.nL = this.Hx();
        this.title = "YouTube";
        g.ng(g.Hf("mobile_blazer_remote_mod"), (0,
        g.x)(function() {
            this.Gb && this.Vt()
        }, this));
        this.eO = (0,
        g.x)(this.Wd.Hu, this.Wd, !1);
        this.B = null;
        "/experiments" != window.document.location.pathname && (this.B = Hba()) && this.B.register(g.mc("content-overlay"))
    }
    ;
    g.Sk = function(a, b) {
        var c = {
            app: "desktop",
            persist_app: 1
        };
        g.Sa(c, b || {});
        return g.ac("//www.youtube.com/" + a, c)
    }
    ;
    g.Uk = function(a, b) {
        g.Tk[a] = b
    }
    ;
    g.Vk = function(a, b) {
        g.Uk(a, function(a, d, e) {
            return new b(a,d,e)
        })
    }
    ;
    Xk = function(a, b, c, d) {
        d = !d;
        for (var e = a.split("/"); 0 < e.length; ) {
            var f = e.join("/");
            if (d) {
                var k = g.Wk[f];
                if (k && k.b)
                    return Xk(k.b(b), k.g(b), c, !0)
            }
            if (g.Tk[f])
                return g.Tk[f](b, a, c || {});
            e.pop()
        }
        return null
    }
    ;
    $k = function(a, b, c) {
        var d = Xk(a, b, c), e;
        if (e = !d)
            a: {
                for (e = 0; e < Yk.length; e++)
                    if (!g.lg(Yk[e]) && g.tg[Yk[e]]) {
                        e = !1;
                        break a
                    }
                e = !0
            }
        e && (d = new Zk(a,b),
        a = d.b(b),
        b = d.g(b),
        d = Xk(a, b, c));
        return d
    }
    ;
    Zk = function(a, b) {
        this.o = a;
        this.A = {
            vanity: 1
        };
        g.pa(this.A, b)
    }
    ;
    al = function() {
        g.Rk.call(this, {}, g.lh)
    }
    ;
    g.bl = function(a, b, c, d, e, f) {
        this.F = a;
        this.D = b;
        this.C = c || {};
        this.ib = f;
        this.b = !1;
        this.g = d;
        this.B = !1;
        this.H = e;
        this.A = 0;
        this.o = !1
    }
    ;
    cl = function(a, b) {
        this.version = a;
        this.args = b
    }
    ;
    g.dl = function(a, b) {
        this.g = a;
        this.b = b
    }
    ;
    g.el = function() {
        return g.r("yt.pubsub2.instance_")
    }
    ;
    fl = function(a) {
        cl.call(this, 1, arguments);
        this.b = a
    }
    ;
    g.jl = function(a, b, c) {
        gl(c)[a] = b || (0,
        g.G)();
        b || gca(a);
        b = g.yd("TIMING_ACTION", void 0);
        a = gl(c);
        if (g.r("yt.timing.ready_") && b && a._start && hl(c)) {
            b = !0;
            var d = g.yd("TIMING_WAIT", []);
            if (d.length)
                for (var e = 0, f = d.length; e < f; ++e)
                    if (!(d[e]in a)) {
                        b = !1;
                        break
                    }
            (b || c) && g.il(c)
        }
    }
    ;
    g.kl = function(a, b) {
        var c = gl(b);
        return a in c
    }
    ;
    g.ml = function(a) {
        ll(a);
        hca();
        g.q("yt.timing.pingSent_", !1, void 0)
    }
    ;
    hl = function(a) {
        a = gl(a);
        if (a.aft)
            return a.aft;
        for (var b = g.yd("TIMING_AFT_KEYS", ["ol"]), c = b.length, d = 0; d < c; d++) {
            var e = a[b[d]];
            if (e)
                return e
        }
        return window.NaN
    }
    ;
    nl = function(a, b) {
        var c = [], d;
        for (d in b)
            "_" != d.charAt(0) && c.push(d + "." + b[d]);
        a.it = c.join(",")
    }
    ;
    pl = function(a, b) {
        var c = b || ol(void 0).span, d;
        d = a.redirectEnd - a.redirectStart;
        0 < d && (c.rtime_ = d);
        d = a.domainLookupEnd - a.domainLookupStart;
        0 < d && (c.dns_ = d);
        d = a.connectEnd - a.connectStart;
        0 < d && (c.tcp_ = d);
        d = a.connectEnd - a.secureConnectionStart;
        a.secureConnectionStart >= a.navigationStart && 0 < d && (c.stcp_ = d);
        d = a.responseStart - a.requestStart;
        0 < d && (c.req_ = d);
        d = a.responseEnd - a.responseStart;
        0 < d && (c.rcv_ = d)
    }
    ;
    rl = function(a) {
        return Math.round(g.ql.timing.navigationStart + a)
    }
    ;
    ica = function(a) {
        var b = window.location.protocol
          , c = g.ql.getEntriesByType("resource")
          , d = c.filter(function(a) {
            return 0 == a.name.indexOf(b + "//fonts.googleapis.com/css?family=")
        })[0]
          , c = c.filter(function(a) {
            return 0 == a.name.indexOf(b + "//fonts.gstatic.com/s/")
        }).reduce(function(a, b) {
            return b.duration > a.duration ? b : a
        }, {
            duration: 0
        });
        d && 0 < d.startTime && 0 < d.responseEnd && (a.wfcs = rl(d.startTime),
        a.wfce = rl(d.responseEnd));
        c && 0 < c.startTime && 0 < c.responseEnd && (a.wffs = rl(c.startTime),
        a.wffe = rl(c.responseEnd))
    }
    ;
    sl = function(a) {
        a.p = g.yd("CLIENT_PROTOCOL") || "unknown";
        a.t = g.yd("CLIENT_TRANSPORT") || "unknown"
    }
    ;
    g.il = function(a) {
        var b = gl(a)
          , c = ol(a).span
          , d = g.tl(a)
          , e = g.r("yt.timing.reportbuilder_");
        if (e) {
            if (e = e(b, c, d, a))
                g.ul(e),
                g.ml(a)
        } else {
            var f = g.yd("CSI_SERVICE_NAME", "youtube")
              , e = {
                v: 2,
                s: f,
                action: g.yd("TIMING_ACTION", void 0)
            };
            if (g.ql.now && g.ql.timing) {
                var k = g.ql.timing.navigationStart + g.ql.now()
                  , k = Math.round((0,
                g.G)() - k);
                d.yt_hrd = k
            }
            var k = g.yd("TIMING_INFO", {}), l;
            for (l in k)
                d[l] = k[l];
            l = d.srt;
            delete d.srt;
            var p;
            l || 0 === l || (p = g.ql.timing || {},
            l = Math.max(0, p.responseStart - p.navigationStart),
            (0,
            window.isNaN)(l) && d.pt && (l = d.pt));
            if (l || 0 === l)
                d.srt = l;
            d.h5jse && (k = window.location.protocol + g.r("ytplayer.config.assets.js"),
            (k = g.ql.getEntriesByName ? g.ql.getEntriesByName(k)[0] : null) ? d.h5jse = Math.round(d.h5jse - k.responseEnd) : delete d.h5jse);
            b.aft = hl(a);
            k = b._start;
            if ("cold" == d.yt_lt) {
                p || (p = g.ql.timing || {});
                var w;
                a: if (w = p,
                w.msFirstPaint)
                    w = Math.max(0, w.msFirstPaint);
                else {
                    var B = window.chrome;
                    if (B && (B = B.loadTimes,
                    g.ia(B))) {
                        var B = B()
                          , z = 1E3 * Math.min(B.requestTime || window.Infinity, B.startLoadTime || window.Infinity)
                          , z = window.Infinity === z ? 0 : w.navigationStart - z;
                        w = Math.max(0, Math.round(1E3 * B.firstPaintTime + z) || 0);
                        break a
                    }
                    w = 0
                }
                0 < w && w > k && (b.fpt = w);
                pl(p, c);
                g.ql.getEntriesByType && ica(b)
            }
            B = gl(a);
            p = B.pbr;
            w = B.vc;
            B = B.pbs;
            p && w && B && p < w && w < B && 1 == g.tl(a).yt_vis && "youtube" == f && (g.tl(a).yt_lt = "hot_bg",
            f = b.vc,
            p = b.pbs,
            delete b.aft,
            c.aft = Math.round(p - f));
            (f = g.yd("PREVIOUS_ACTION")) && (d.pa = f);
            sl(d);
            window.navigator && window.navigator.sendBeacon && (d.ba = 1);
            for (var H in d)
                "_" != H.charAt(0) && (e[H] = d[H]);
            b.ps = (0,
            g.G)();
            d = {};
            H = [];
            for (var S in b)
                "_" != S.charAt(0) && (w = Math.max(Math.round(b[S] - k), 0),
                d[S] = w,
                H.push(S + "." + w));
            e.rt = H.join(",");
            nl(e, c);
            (b = g.r("ytdebug.logTiming")) && b(e, d, c);
            g.ml(a);
            g.yd("EXP_DEFER_CSI_PING") ? (vl(),
            g.q("yt.timing.deferredPingArgs_", e, void 0),
            a = (0,
            g.Ad)(vl, 0),
            g.q("yt.timing.deferredPingTimer_", a, void 0)) : g.ul(e);
            a = new fl(d.aft + (l || 0));
            (c = g.el()) && c.publish.call(c, g.wl.toString(), g.wl, a)
        }
    }
    ;
    g.ul = function(a) {
        if (g.yd("DEBUG_CSI_DATA")) {
            var b = g.r("yt.timing.csiData");
            b || (b = [],
            g.q("yt.timing.csiData", b, void 0));
            b.push({
                page: window.location.href,
                time: new Date,
                args: a
            })
        }
        g.yd("EXP_DEFER_CSI_PING") && (g.Bd(g.r("yt.timing.deferredPingTimer_")),
        g.q("yt.timing.deferredPingArgs_", null, void 0));
        var c = "https:" == window.location.protocol ? "https://gg.google.com/csi" : "http://csi.gstatic.com/csi", c = g.yd("CSI_LOG_WITH_YT") ? "/csi_204" : c, b = "", d;
        for (d in a)
            b += "&" + d + "=" + a[d];
        a = c + "?" + b.substring(1);
        b = g.yd("DOUBLE_LOG_CSI") ? "/csi_204?" + b.substring(1) : null;
        window.navigator && window.navigator.sendBeacon ? (Mg(a),
        b && Mg(b)) : (g.Lg(a),
        b && g.Lg(b));
        g.q("yt.timing.pingSent_", !0, void 0)
    }
    ;
    vl = function(a) {
        if (g.yd("EXP_DEFER_CSI_PING")) {
            var b = g.r("yt.timing.deferredPingArgs_");
            b && (a && (b.yt_fss = a),
            g.ul(b))
        }
    }
    ;
    gl = function(a) {
        return ol(a).tick
    }
    ;
    g.tl = function(a) {
        return ol(a).info
    }
    ;
    ol = function(a) {
        return g.r("ytcsi." + (a || "") + "data_") || ll(a)
    }
    ;
    ll = function(a) {
        var b = {
            tick: {},
            span: {},
            info: {}
        };
        g.q("ytcsi." + (a || "") + "data_", b, void 0);
        return b
    }
    ;
    g.xl = function(a) {
        g.r("yt.timing.pingSent_") || (g.jl("aa"),
        g.tl(void 0).ap = 1,
        g.tl(void 0).yt_fss = a,
        g.il())
    }
    ;
    g.zl = function() {
        if (window.navigator.connection && window.navigator.connection.type) {
            var a = window.navigator.connection.type;
            return a == window.navigator.connection.WIFI ? "wifi" : "string" === typeof a && 0 < a.toLowerCase().indexOf("wifi") ? "wifi" : "mob"
        }
        return yl
    }
    ;
    g.Al = function(a, b) {
        g.xd((b || "") + "TIMING_ACTION", a)
    }
    ;
    g.Bl = function(a) {
        return g.yd((a || "") + "TIMING_ACTION") || ""
    }
    ;
    g.Cl = function() {
        return !!g.yd("CSI_ENABLED")
    }
    ;
    Dl = function() {
        g.kl("_start") && g.xl("n");
        g.ml();
        g.jl("_start");
        g.tl(void 0).yt_lt = "warm";
        g.jl("_start", void 0, "blz_watch_ads");
        g.jl("_start", void 0, "blz_home_ads");
        g.jl("_start", void 0, "blz_search_ads")
    }
    ;
    g.El = function(a) {
        return "html5" == a ? "html5il" : "desktop" == a ? "html5" : a
    }
    ;
    Fl = function(a, b, c) {
        this.b = a;
        this.A = b;
        this.g = c;
        if (a = g.ec(this.b, "feature"))
            this.g.video || (this.g.video = {}),
            this.g.video.Ld || (this.g.video.Ld = a);
        this.o = "/" + Ee(this.b, jca)
    }
    ;
    Gl = function(a) {
        return g.Tb(g.Bf()) + "/" + a.b
    }
    ;
    Il = function(a) {
        this.b = [];
        Hl(this, a, !1);
        Di = (0,
        g.x)(this.Et, this)
    }
    ;
    Jl = function(a, b, c, d) {
        var e;
        e = g.Ob(g.Qb(5, c.b)) || "";
        var f = g.Be(c.b)
          , k = c.g
          , l = $k(e, f, k);
        l || (l = new g.bl(e,f,k,Yk,!0,new al));
        if (e = l) {
            f = a.Tc;
            a.Tc = e;
            f && f.Fa();
            e = g.mc("content");
            f = e.firstChild;
            if (k = g.Bc(e))
                for (l = k.length - 1; 0 < l; l--)
                    g.yc(k[l]);
            k = g.vc("div");
            a.Tc.Mf(k);
            f ? g.zc(k, f) : e.appendChild(k);
            a.Tc.jg(d);
            g.gi(e, kca, a, {
                z1: b ? b.b : null,
                m4: c.b,
                direction: d
            })
        }
    }
    ;
    Hl = function(a, b, c, d) {
        b = b || "";
        var e = Kl(a)
          , f = window.document.referrer;
        e && (f = Gl(e));
        b = a.Ix(b, f, d);
        a.g(b, c);
        a.b.splice(a.hd + 1, a.b.length - a.hd, b);
        a.hd = a.b.length - 1;
        b && Jl(a, e, b, 0)
    }
    ;
    Kl = function(a) {
        return a.b && 0 <= a.hd ? a.b[a.hd] : null
    }
    ;
    Ll = function(a, b) {
        var c;
        a: {
            var d = a.hd;
            c = a.b.length - a.hd - 1;
            for (var e = 1; e <= Math.max(d, c); e++) {
                if (e <= d && a.b[a.hd - e].b == b) {
                    c = a.hd - e;
                    break a
                }
                if (e <= c && a.b[a.hd + e].b == b) {
                    c = a.hd + e;
                    break a
                }
                if (d <= e && c <= e)
                    break
            }
            c = -1
        }
        d = 0 > c ? 0 : c > a.hd ? 1 : -1;
        try {
            if (0 == d)
                Hl(a, b, !1);
            else {
                var f = Kl(a);
                a.hd = c;
                var k = Kl(a);
                f && k && Jl(a, f, k, d)
            }
        } catch (l) {
            g.fg(10, l, "history:" + d + "  " + b),
            g.eg(10)
        }
    }
    ;
    Ml = function(a) {
        Il.call(this, a);
        wj || (wj = !0,
        "onhashchange"in window ? xj = g.ai(window, "hashchange", Bj, !1, "history") : (yj = window.setInterval(Bj, 150),
        Bj()));
        g.ai(window, "unload", Eba, !1, "history");
        Aj = (0,
        g.x)(this.o, this)
    }
    ;
    Nl = function(a) {
        Il.call(this, a);
        g.ai(window, "popstate", (0,
        g.x)(this.o, this))
    }
    ;
    Ol = function() {
        return window.redirect_on_initialize || null
    }
    ;
    g.Ql = function() {
        var a = g.Bf();
        if (g.Pl)
            var b = Kl(g.Pl)
              , a = b ? Gl(b) : a;
        return a
    }
    ;
    g.Rl = function() {
        var a = window.document.referrer;
        if (g.Pl)
            var b = Kl(g.Pl)
              , a = b ? b.A : a;
        return a
    }
    ;
    lca = function() {
        g.je() ? g.Sl.activateTags() : g.Sl.fillPool(4)
    }
    ;
    Iba = function(a) {
        a = {
            productId: "77522",
            locale: "en",
            bucket: a ? a : g.Gf ? "nightshade" : "blazer"
        };
        g.ge("gfeedback_for_signed_out_mweb_users_enabled") && (a.allowNonLoggedInFeedback = !0);
        var b = {
            experiments: g.fe.b.join(","),
            logged_in: !!g.jj,
            Device: g.Ta,
            "Is on WiFi": Tl
        };
        a.timeOfStartCall = (new Date).getTime();
        if ("help" == a.flow) {
            var c = g.r("document.location.href", g.ba);
            !a.helpCenterContext && c && (a.helpCenterContext = c.substring(0, 1200));
            c = !0;
            if (b && JSON && JSON.stringify) {
                var d = JSON.stringify(b);
                (c = 1200 >= d.length) && (a.psdJson = d)
            }
            c || (b = {
                invalidPsd: !0
            })
        }
        b = [a, b, void 0];
        g.ba.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
        c = a.serverUri || "//www.google.com/tools/feedback";
        if (d = g.ba.GOOGLE_FEEDBACK_START)
            d.apply(g.ba, b);
        else {
            var b = c + "/load.js?", e;
            for (e in a)
                c = a[e],
                null != c && !g.ka(c) && (b += (0,
                window.encodeURIComponent)(e) + "=" + (0,
                window.encodeURIComponent)(c) + "&");
            e = g.ba.document;
            a = e.createElement("script");
            a.src = b;
            e.body.appendChild(a)
        }
    }
    ;
    g.Wl = function(a) {
        a = Ee(a || g.Bf(), ["ytsession"]);
        a = g.ac(a, g.Vf({}));
        a = (0,
        window.encodeURIComponent)((0,
        window.encodeURIComponent)(a));
        a = Ul.replace(Vl, a);
        return Ee(a, ["shdf"])
    }
    ;
    g.aa = [];
    if (window.jstiming) {
        window.jstiming.cx = {};
        window.jstiming.BQ = 1;
        var Xl = function(a, b, c) {
            var d = a.t[b]
              , e = a.t.start;
            if (d && (e || c))
                return d = a.t[b][0],
                void 0 != c ? e = c : e = e[0],
                Math.round(d - e)
        }
          , mca = function(a, b, c) {
            var d = "";
            window.jstiming.srt && (d += "&srt=" + window.jstiming.srt,
            delete window.jstiming.srt);
            window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt,
            delete window.jstiming.pt);
            try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (z) {}
            var e = window.chrome;
            if (e && (e = e.loadTimes)) {
                e().wasFetchedViaSpdy && (d += "&p=s");
                if (e().wasNpnNegotiated) {
                    var d = d + "&npn=1"
                      , f = e().npnNegotiatedProtocol;
                    f && (d += "&npnv=" + (window.encodeURIComponent || window.escape)(f))
                }
                e().wasAlternateProtocolAvailable && (d += "&apa=1")
            }
            var k = a.t, l = k.start, e = [], f = [], p;
            for (p in k)
                if ("start" != p && 0 != p.indexOf("_")) {
                    var w = k[p][1];
                    w ? k[w] && f.push(p + "." + Xl(a, p, k[w][0])) : l && e.push(p + "." + Xl(a, p))
                }
            delete k.start;
            if (b)
                for (var B in b)
                    d += "&" + B + "=" + b[B];
            (b = c) || (b = "https:" == window.document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            return [b, "?v=3", "&s=" + (window.jstiming.sn || "_s") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
        }
          , Yl = function(a, b, c) {
            a = mca(a, b, c);
            if (!a)
                return "";
            b = new window.Image;
            var d = window.jstiming.BQ++;
            window.jstiming.cx[d] = b;
            b.onload = b.onerror = function() {
                window.jstiming && delete window.jstiming.cx[d]
            }
            ;
            b.src = a;
            b = null;
            return a
        };
        window.jstiming.report = function(a, b, c) {
            if ("prerender" == window.document.webkitVisibilityState) {
                var d = !1
                  , e = function() {
                    if (!d) {
                        b ? b.prerender = "1" : b = {
                            prerender: "1"
                        };
                        var f;
                        "prerender" == window.document.webkitVisibilityState ? f = !1 : (Yl(a, b, c),
                        f = !0);
                        f && (d = !0,
                        window.document.removeEventListener("webkitvisibilitychange", e, !1))
                    }
                };
                window.document.addEventListener("webkitvisibilitychange", e, !1);
                return ""
            }
            return Yl(a, b, c)
        }
    }
    ;var ma, aaa;
    g.Zl = g.Zl || {};
    g.ba = this;
    ma = "closure_uid_" + (1E9 * Math.random() >>> 0);
    aaa = 0;
    g.G = Date.now || function() {
        return +new Date
    }
    ;
    var kc;
    var eaa, faa, gaa, haa, iaa, jaa, daa;
    g.xa = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
    ;
    eaa = /&/g;
    faa = /</g;
    gaa = />/g;
    haa = /"/g;
    iaa = /'/g;
    jaa = /\x00/g;
    daa = /[\x00&<>"']/;
    g.$l = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
    ;
    g.nca = 2147483648 * Math.random() | 0;
    g.Da = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    }
    : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (g.ga(a))
            return g.ga(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    g.oca = Array.prototype.lastIndexOf ? function(a, b, c) {
        return Array.prototype.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
    }
    : function(a, b, c) {
        c = null == c ? a.length - 1 : c;
        0 > c && (c = Math.max(0, a.length + c));
        if (g.ga(a))
            return g.ga(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
        for (; 0 <= c; c--)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    g.D = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = g.ga(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
    ;
    g.Ac = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, k = g.ga(a) ? a.split("") : a, l = 0; l < d; l++)
            if (l in k) {
                var p = k[l];
                b.call(c, p, l, a) && (e[f++] = p)
            }
        return e
    }
    ;
    g.N = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = g.ga(a) ? a.split("") : a, k = 0; k < d; k++)
            k in f && (e[k] = b.call(c, f[k], k, a));
        return e
    }
    ;
    g.am = Array.prototype.reduce ? function(a, b, c, d) {
        d && (b = (0,
        g.x)(b, d));
        return Array.prototype.reduce.call(a, b, c)
    }
    : function(a, b, c, d) {
        var e = c;
        (0,
        g.D)(a, function(c, k) {
            e = b.call(d, e, c, k, a)
        });
        return e
    }
    ;
    g.bm = Array.prototype.some ? function(a, b, c) {
        return Array.prototype.some.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = g.ga(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return !0;
        return !1
    }
    ;
    g.cm = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = g.ga(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a))
                return !1;
        return !0
    }
    ;
    var Ra = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    g.dm = RegExp("[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");
    g.pca = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");
    g.qca = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");
    a: {
        var em = g.ba.navigator;
        if (em) {
            var fm = em.userAgent;
            if (fm) {
                g.Ta = fm;
                break a
            }
        }
        g.Ta = ""
    }
    ;g.Ya.prototype.qh = !0;
    g.Ya.prototype.ef = function() {
        return this.b
    }
    ;
    g.Ya.prototype.toString = function() {
        return "Const{" + this.b + "}"
    }
    ;
    var Xa = {};
    g.bb.prototype.qh = !0;
    var ab = {};
    g.bb.prototype.ef = function() {
        return this.b
    }
    ;
    g.rca = g.db("");
    g.fb.prototype.qh = !0;
    g.fb.prototype.ef = function() {
        return this.b
    }
    ;
    g.fb.prototype.Qs = !0;
    g.fb.prototype.zi = function() {
        return 1
    }
    ;
    var kaa = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i
      , eb = {};
    ib("about:blank");
    g.lb.prototype.qh = !0;
    g.lb.prototype.ef = function() {
        return this.b
    }
    ;
    g.lb.prototype.Qs = !0;
    g.lb.prototype.zi = function() {
        return 1
    }
    ;
    var kb = {};
    pb.prototype.Qs = !0;
    pb.prototype.zi = function() {
        return this.g
    }
    ;
    pb.prototype.qh = !0;
    pb.prototype.ef = function() {
        return this.b
    }
    ;
    var ob = {};
    g.rb("<!DOCTYPE html>", 0);
    g.rb("", 0);
    g.rb("<br>", 0);
    g.gm = g.ub(!1);
    var xb = "StopIteration"in g.ba ? g.ba.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    g.wb.prototype.next = function() {
        throw xb;
    }
    ;
    g.wb.prototype.ed = function() {
        return this
    }
    ;
    g.h = g.Ab.prototype;
    g.h.Cb = function() {
        return this.b
    }
    ;
    g.h.jb = function() {
        Db(this);
        for (var a = [], b = 0; b < this.g.length; b++)
            a.push(this.o[this.g[b]]);
        return a
    }
    ;
    g.h.qb = function() {
        Db(this);
        return this.g.concat()
    }
    ;
    g.h.$e = g.m(2);
    g.h.Wa = function(a, b) {
        if (this === a)
            return !0;
        if (this.b != a.Cb())
            return !1;
        var c = b || maa;
        Db(this);
        for (var d, e = 0; d = this.g[e]; e++)
            if (!c(this.get(d), a.get(d)))
                return !1;
        return !0
    }
    ;
    g.h.Ua = g.m(6);
    g.h.clear = function() {
        this.o = {};
        this.yg = this.b = this.g.length = 0
    }
    ;
    g.h.remove = function(a) {
        return g.Bb(this.o, a) ? (delete this.o[a],
        this.b--,
        this.yg++,
        this.g.length > 2 * this.b && Db(this),
        !0) : !1
    }
    ;
    g.h.get = function(a, b) {
        return g.Bb(this.o, a) ? this.o[a] : b
    }
    ;
    g.h.set = function(a, b) {
        g.Bb(this.o, a) || (this.b++,
        this.g.push(a),
        this.yg++);
        this.o[a] = b
    }
    ;
    g.h.forEach = function(a, b) {
        for (var c = this.qb(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    g.h.clone = function() {
        return new g.Ab(this)
    }
    ;
    g.h.ed = function(a) {
        Db(this);
        var b = 0
          , c = this.yg
          , d = this
          , e = new g.wb;
        e.next = function() {
            if (c != d.yg)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length)
                throw xb;
            var e = d.g[b++];
            return a ? e : d.o[e]
        }
        ;
        return e
    }
    ;
    var Kb, lm;
    g.Uc = Va();
    g.Hb = g.Ua("Trident") || g.Ua("MSIE");
    g.Gb = g.Ua("Edge");
    g.sca = g.Gb || g.Hb;
    g.Fb = g.Ua("Gecko") && !(g.wa(g.Ta, "WebKit") && !g.Ua("Edge")) && !(g.Ua("Trident") || g.Ua("MSIE")) && !g.Ua("Edge");
    g.Ib = g.wa(g.Ta, "WebKit") && !g.Ua("Edge");
    g.hm = g.Ib && g.Ua("Mobile");
    g.im = g.Ua("Macintosh");
    g.jm = g.Ua("Android");
    g.tca = g.Eb();
    g.km = g.Ua("iPad");
    g.Lb = function() {
        if (g.Uc && g.ba.opera) {
            var a;
            var b = g.ba.opera.version;
            try {
                a = b()
            } catch (c) {
                a = b
            }
            return a
        }
        a = "";
        (b = naa()) && (a = b ? b[1] : "");
        return g.Hb && (b = Jb(),
        b > (0,
        window.parseFloat)(a)) ? String(b) : a
    }();
    Kb = {};
    lm = g.ba.document;
    g.mm = lm && g.Hb ? Jb() || ("CSS1Compat" == lm.compatMode ? (0,
    window.parseInt)(g.Lb, 10) : 5) : void 0;
    var paa;
    g.Pb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
    g.dc = /#|$/;
    paa = /[?&]($|#)/;
    var qaa, saa;
    qaa = !g.Hb || 9 <= +g.mm;
    saa = !g.Fb && !g.Hb || g.Hb && 9 <= +g.mm || g.Fb && g.Mb("1.9.1");
    g.nm = g.Hb && !g.Mb("9");
    g.uca = g.Hb || g.Uc || g.Ib;
    var qc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    g.h = g.ic.prototype;
    g.h.V = function(a) {
        return g.ga(a) ? this.b.getElementById(a) : a
    }
    ;
    g.h.setProperties = g.rc;
    g.h.ry = g.m(8);
    g.h.createElement = function(a) {
        return this.b.createElement(a)
    }
    ;
    g.h.appendChild = g.wc;
    g.h.getChildren = g.Bc;
    g.h.contains = g.Cc;
    Gc[" "] = g.u;
    g.E.prototype.ob = !1;
    g.E.prototype.ha = function() {
        return this.ob
    }
    ;
    g.E.prototype.dispose = function() {
        this.ob || (this.ob = !0,
        this.O())
    }
    ;
    g.E.prototype.O = function() {
        if (this.Ka)
            for (; this.Ka.length; )
                this.Ka.shift()()
    }
    ;
    g.Tc.prototype.stopPropagation = function() {
        this.A = !0
    }
    ;
    g.Tc.prototype.preventDefault = function() {
        this.SB = !1
    }
    ;
    var md = !g.Hb || 9 <= +g.mm
      , vca = g.Hb && !g.Mb("9");
    !g.Ib || g.Mb("528");
    g.Fb && g.Mb("1.9b") || g.Hb && g.Mb("8") || g.Uc && g.Mb("9.5") || g.Ib && g.Mb("528");
    g.Fb && !g.Mb("8") || g.Hb && g.Mb("9");
    g.wca = {
        CLICK: "click",
        iZ: "rightclick",
        nW: "dblclick",
        QX: "mousedown",
        WX: "mouseup",
        VX: "mouseover",
        UX: "mouseout",
        TX: "mousemove",
        RX: "mouseenter",
        SX: "mouseleave",
        lZ: "selectstart",
        v_: "wheel",
        tX: "keypress",
        sX: "keydown",
        uX: "keyup",
        OV: "blur",
        TW: "focus",
        oW: "deactivate",
        UW: g.Hb ? "focusin" : "DOMFocusIn",
        VW: g.Hb ? "focusout" : "DOMFocusOut",
        aW: "change",
        cZ: "reset",
        kZ: "select",
        IZ: "submit",
        mX: "input",
        VY: "propertychange",
        HW: "dragstart",
        BW: "drag",
        EW: "dragenter",
        GW: "dragover",
        FW: "dragleave",
        IW: "drop",
        DW: "dragend",
        VZ: "touchstart",
        UZ: "touchmove",
        TZ: "touchend",
        SZ: "touchcancel",
        LV: "beforeunload",
        gW: "consolemessage",
        iW: "contextmenu",
        vW: "DOMContentLoaded",
        ERROR: "error",
        dX: "help",
        AX: "load",
        KX: "losecapture",
        BY: "orientationchange",
        ZY: "readystatechange",
        dZ: "resize",
        jZ: "scroll",
        d_: "unload",
        YW: "hashchange",
        EY: "pagehide",
        FY: "pageshow",
        RY: "popstate",
        jW: "copy",
        GY: "paste",
        lW: "cut",
        HV: "beforecopy",
        IV: "beforecut",
        JV: "beforepaste",
        zY: "online",
        vY: "offline",
        OX: "message",
        fW: "connect",
        zV: Vc("AnimationStart"),
        xV: Vc("AnimationEnd"),
        yV: Vc("AnimationIteration"),
        YZ: Vc("TransitionEnd"),
        KY: "pointerdown",
        QY: "pointerup",
        JY: "pointercancel",
        NY: "pointermove",
        PY: "pointerover",
        OY: "pointerout",
        LY: "pointerenter",
        MY: "pointerleave",
        XW: "gotpointercapture",
        LX: "lostpointercapture",
        aY: "MSGestureChange",
        bY: "MSGestureEnd",
        cY: "MSGestureHold",
        dY: "MSGestureStart",
        eY: "MSGestureTap",
        fY: "MSGotPointerCapture",
        gY: "MSInertiaStart",
        hY: "MSLostPointerCapture",
        iY: "MSPointerCancel",
        jY: "MSPointerDown",
        kY: "MSPointerEnter",
        lY: "MSPointerHover",
        mY: "MSPointerLeave",
        nY: "MSPointerMove",
        oY: "MSPointerOut",
        pY: "MSPointerOver",
        qY: "MSPointerUp",
        TEXT: "text",
        JZ: "textInput",
        dW: "compositionstart",
        eW: "compositionupdate",
        cW: "compositionend",
        PW: "exit",
        BX: "loadabort",
        CX: "loadcommit",
        DX: "loadredirect",
        EX: "loadstart",
        FX: "loadstop",
        fZ: "responsive",
        tZ: "sizechanged",
        e_: "unresponsive",
        q_: "visibilitychange",
        EZ: "storage",
        AW: "DOMSubtreeModified",
        wW: "DOMNodeInserted",
        yW: "DOMNodeRemoved",
        zW: "DOMNodeRemovedFromDocument",
        xW: "DOMNodeInsertedIntoDocument",
        tW: "DOMAttrModified",
        uW: "DOMCharacterDataModified",
        KV: "beforeprint",
        oV: "afterprint"
    };
    g.y(Wc, g.Tc);
    Wc.prototype.init = function(a, b) {
        var c = this.type = a.type
          , d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var e = a.relatedTarget;
        e ? g.Fb && (g.Hc(e, "nodeName") || (e = null)) : "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
        this.relatedTarget = e;
        null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
        this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.g = a;
        a.defaultPrevented && this.preventDefault()
    }
    ;
    Wc.prototype.stopPropagation = function() {
        Wc.J.stopPropagation.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    }
    ;
    Wc.prototype.preventDefault = function() {
        Wc.J.preventDefault.call(this);
        var a = this.g;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        vca)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    var Xc = "closure_listenable_" + (1E6 * Math.random() | 0)
      , uaa = 0;
    $c.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.b))
            return !1;
        var e = this.b[a];
        b = ad(e, b, c, d);
        return -1 < b ? (Zc(e[b]),
        g.Fa(e, b),
        0 == e.length && (delete this.b[a],
        this.g--),
        !0) : !1
    }
    ;
    $c.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.b)
            if (!a || c == a) {
                for (var d = this.b[c], e = 0; e < d.length; e++)
                    ++b,
                    Zc(d[e]);
                delete this.b[c];
                this.g--
            }
        return b
    }
    ;
    var jd = "closure_lm_" + (1E6 * Math.random() | 0)
      , pd = {}
      , ld = 0
      , sd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    g.y(g.td, g.E);
    g.td.prototype[Xc] = !0;
    g.h = g.td.prototype;
    g.h.Fh = g.m(9);
    g.h.addEventListener = function(a, b, c, d) {
        g.ed(this, a, b, c, d)
    }
    ;
    g.h.removeEventListener = function(a, b, c, d) {
        nd(this, a, b, c, d)
    }
    ;
    g.h.U = g.m(10);
    g.h.O = function() {
        g.td.J.O.call(this);
        g.ud(this);
        this.wa = null
    }
    ;
    g.h.listen = function(a, b, c, d) {
        return g.bd(this.P, String(a), b, !1, c, d)
    }
    ;
    g.h.Ia = function(a, b, c, d) {
        return this.P.remove(String(a), b, c, d)
    }
    ;
    g.wd = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
    g.q("yt.config_", g.wd, void 0);
    g.q("yt.tokens_", window.yt && window.yt.tokens_ || {}, void 0);
    var Dd = window.yt && window.yt.msgs_ || g.r("window.ytcfg.msgs") || {};
    g.q("yt.msgs_", Dd, void 0);
    g.om = window.performance && window.performance.now ? function() {
        return window.performance.now()
    }
    : g.G;
    g.y(g.Gd, yaa);
    g.Gd.prototype.Cb = function() {
        var a = 0;
        g.zb(this.ed(!0), function() {
            a++
        });
        return a
    }
    ;
    g.Gd.prototype.clear = function() {
        var a = laa(this.ed(!0))
          , b = this;
        (0,
        g.D)(a, function(a) {
            b.remove(a)
        })
    }
    ;
    g.y(Hd, g.Gd);
    g.h = Hd.prototype;
    g.h.isAvailable = function() {
        if (!this.b)
            return !1;
        try {
            return this.b.setItem("__sak", "1"),
            this.b.removeItem("__sak"),
            !0
        } catch (a) {
            return !1
        }
    }
    ;
    g.h.set = function(a, b) {
        try {
            this.b.setItem(a, b)
        } catch (c) {
            if (0 == this.b.length)
                throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    }
    ;
    g.h.get = function(a) {
        a = this.b.getItem(a);
        if (!g.ga(a) && null !== a)
            throw "Storage mechanism: Invalid value was encountered";
        return a
    }
    ;
    g.h.remove = function(a) {
        this.b.removeItem(a)
    }
    ;
    g.h.Cb = function() {
        return this.b.length
    }
    ;
    g.h.ed = function(a) {
        var b = 0
          , c = this.b
          , d = new g.wb;
        d.next = function() {
            if (b >= c.length)
                throw xb;
            var d;
            d = c.key(b++);
            if (a)
                return d;
            d = c.getItem(d);
            if (!g.ga(d))
                throw "Storage mechanism: Invalid value was encountered";
            return d
        }
        ;
        return d
    }
    ;
    g.h.clear = function() {
        this.b.clear()
    }
    ;
    g.h.key = function(a) {
        return this.b.key(a)
    }
    ;
    g.y(g.Id, Hd);
    g.y(Jd, Hd);
    Md.prototype.Xd = function(a) {
        var b = [];
        Od(this, a, b);
        return b.join("")
    }
    ;
    var Qd = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , zaa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    g.Rd.prototype.set = function(a, b) {
        g.n(b) ? this.b.set(a, g.Nd(b)) : this.b.remove(a)
    }
    ;
    g.Rd.prototype.get = function(a) {
        var b;
        try {
            b = this.b.get(a)
        } catch (c) {
            return
        }
        if (null !== b)
            try {
                return g.Kd(b)
            } catch (c) {
                throw "Storage: Invalid value was encountered";
            }
    }
    ;
    g.Rd.prototype.remove = function(a) {
        this.b.remove(a)
    }
    ;
    var Td = /\s*;\s*/;
    g.h = g.Sd.prototype;
    g.h.set = function(a, b, c, d, e, f) {
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        g.n(c) || (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date((0,
        g.G)() + 1E3 * c)).toUTCString();
        this.b.cookie = a + "=" + b + e + d + c + f
    }
    ;
    g.h.get = function(a, b) {
        for (var c = a + "=", d = (this.b.cookie || "").split(Td), e = 0, f; f = d[e]; e++) {
            if (0 == f.lastIndexOf(c, 0))
                return f.substr(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    g.h.remove = function(a, b, c) {
        var d = g.n(this.get(a));
        this.set(a, "", 0, b, c);
        return d
    }
    ;
    g.h.qb = function() {
        return g.Ud(this).keys
    }
    ;
    g.h.jb = function() {
        return g.Ud(this).values
    }
    ;
    g.h.Ua = g.m(4);
    g.h.Cb = function() {
        return this.b.cookie ? (this.b.cookie || "").split(Td).length : 0
    }
    ;
    g.h.$e = g.m(1);
    g.h.clear = function() {
        for (var a = g.Ud(this).keys, b = a.length - 1; 0 <= b; b--)
            this.remove(a[b])
    }
    ;
    g.Vd = new g.Sd(window.document);
    g.Vd.g = 3950;
    g.y(Yd, g.Rd);
    Yd.prototype.set = function(a, b) {
        Yd.J.set.call(this, a, $d(b))
    }
    ;
    Yd.prototype.g = function(a) {
        a = Yd.J.get.call(this, a);
        if (!g.n(a) || a instanceof Object)
            return a;
        throw "Storage: Invalid value was encountered";
    }
    ;
    Yd.prototype.get = function(a) {
        if (a = this.g(a)) {
            if (a = a.data,
            !g.n(a))
                throw "Storage: Invalid value was encountered";
        } else
            a = void 0;
        return a
    }
    ;
    g.y(ae, Yd);
    ae.prototype.set = function(a, b, c) {
        if (b = $d(b)) {
            if (c) {
                if (c < (0,
                g.G)()) {
                    ae.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = (0,
            g.G)()
        }
        ae.J.set.call(this, a, b)
    }
    ;
    ae.prototype.g = function(a, b) {
        var c = ae.J.g.call(this, a);
        if (c)
            if (!b && g.be(c))
                ae.prototype.remove.call(this, a);
            else
                return c
    }
    ;
    g.y(g.ce, ae);
    var qm, sm;
    qm = new g.Id;
    g.pm = qm.isAvailable() ? new g.ce(qm) : null;
    sm = new Jd;
    g.rm = sm.isAvailable() ? new g.ce(sm) : null;
    var um = g.Ta
      , um = um.toLowerCase();
    if (g.va(um, "android")) {
        var vm = um.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);
        if (vm)
            g.hi = +vm[1];
        else {
            var wm = {
                cupcake: 1.5,
                donut: 1.6,
                eclair: 2,
                froyo: 2.2,
                gingerbread: 2.3,
                honeycomb: 3,
                "ice cream sandwich": 4,
                jellybean: 4.1
            }
              , xm = um.match("(" + g.Oa(wm).join("|") + ")");
            g.hi = xm ? wm[xm[0]] : 0
        }
    } else
        g.hi = void 0;
    g.tm = 0 <= g.hi;
    var zm = g.Ta, Am = zm.match(/\((iPad|iPhone|iPod)( Simulator)?;/), ym;
    if (!Am || 2 > Am.length)
        g.Bh = void 0;
    else {
        var Bm = zm.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d_\d)[_ ]/);
        g.Bh = Bm && 6 == Bm.length ? +Bm[5].replace("_", ".") : 0
    }
    g.Of = Math.floor(g.Bh);
    ym = (g.Pf = 0 <= g.Bh) && g.de("Safari") && g.de("Version");
    ee.prototype.o = function(a) {
        return (0,
        window.parseInt)(this.g[a], 10) || 0
    }
    ;
    var Pk, Kk, Uf, mj, Dm, nj, Em, Hj, kj, yi, ug, lj, Lk, Km, Tj, Lm, Sj, Nm, fk, Tl, cg, Vl, Ul, tj, uj, Bi, Ym, he, an;
    g.q("yt.mobile.blazer.blazer_config.isMobilePersistentUniplayer", g.je, void 0);
    (function(a) {
        function b(b, d) {
            return a && b in a ? a[b] : d
        }
        g.Cm = b("airplay", !1);
        Pk = b("appleIconUrls", {});
        Kk = b("isRtl", !1) ? "rtl" : "ltr";
        Uf = b("build_id", 0);
        mj = b("build_signature", "");
        Dm = b("build_label", "unknown");
        nj = b("build_timestamp", 0);
        Em = b("client_version", "");
        Hj = b("consentState", 0);
        kj = window.navigator.cookieEnabled;
        g.Fm = b("deviceClassification", {});
        g.fe = new ee(b("experiments", {}));
        g.tg = b("onDemandModules", {});
        yi = b("externalSpriteCssPaths", []);
        g.Gm = g.ge("mweb_masthead_fusion");
        g.Hm = b("gaiaPhotoUrl", "");
        g.Im = b("gapiParams", null);
        g.$f = b("gl", "");
        g.Jm = b("googlePlusShareUrl", "");
        ug = b("lateLoadedModules", {});
        lj = b("inProduction", !0);
        Lk = b("psuggestToken", "");
        Km = b("thumbnail_sizes", {});
        Tj = b("iosAppIconUrl", "");
        Lm = "DEFAULT";
        "DEFAULT" == Lm && (Lm = b("iosAppUrl", ""));
        Sj = b("iosCloseIconUrl", "");
        g.Mm = !0;
        Nm = b("isBigTablet", !1);
        g.Om = b("isLightweight", !1);
        fk = g.ge("searchbox_upgrade_mobile");
        g.Gf = b("isTablet", !1);
        Tl = b("isWifi", !1);
        g.Zf = b("language", "en");
        g.Pm = b("languageName", "en");
        cg = b("lastReloadReason", "");
        g.Qm = b("locale", "");
        g.Rm = b("localeName", "");
        Vl = b("loginPlaceHolder", "");
        Ul = b("loginURLFormat", "");
        tj = b("player", "");
        g.ie = b("playerType", null);
        uj = b("propagatedAjaxParams", {});
        g.Sm = b("resizedPlayer", !1);
        g.Tm = b("sts", 0);
        g.Mk = b("sessionIndex", 0);
        g.Um = b("signed_in_email", "");
        g.jj = b("signed_in_username", "");
        Bi = b("spriteInfo", {});
        g.Vm = b("spacecastAddrs", []);
        g.Wm = b("spacecastXsrfToken", "");
        g.Xm = b("supportsAutoplay", !1);
        g.Yg = b("supportsCastV2", !1);
        Ym = b("supportsCssScroller", !1);
        g.Zm = b("supportsSms", !0);
        he = b("supportsPersistence", !0);
        g.$m = g.ge("mobile_pyv_add_description_url");
        an = b("variants_checksum", "");
        g.bn = !!window.bootstrap_data;
        g.xd("INNERTUBE_CONTEXT_CLIENT_VERSION", Em);
        g.xd("PAGE_CL", Uf);
        g.xd("PAGE_BUILD_LABEL", Dm);
        g.xd("VARIANTS_CHECKSUM", an)
    }
    )(window.settings);
    var qi, dn, gn, Rf, Ti, le;
    ne();
    (0,
    window.setTimeout)(ne, 0);
    qi = g.de(/Android.*(Opera Mobi|Opera Tablet)/);
    g.cn = g.de(/\ (CrMo|Chrome|CriOS)\//);
    dn = g.de("AppleWebKit");
    g.en = g.de("Windows Phone");
    g.fn = g.de("(Kindle Fire|Silk)");
    gn = g.de("Symbian/3; Series60/5.[3-9].*NokiaBrowser/(?:7.4.[2-9]|7.[5-9]|[89])");
    g.hn = g.de("Factory Media Production");
    g.jn = g.de("Tizen");
    g.dk = !g.tm || 2 < g.hi;
    Rf = !(g.Pf && 5 > g.Of) && !(g.tm && 2.3 >= g.hi) && !g.fn && g.n(window.history.pushState) && g.n(window.history.replaceState);
    g.kn = !gn;
    g.Wi = 5 <= g.Bh || 4 <= g.hi;
    g.ln = 3 < g.Of;
    Ti = !(g.Pf && 7 > g.Bh && ym);
    g.oe.prototype.getMessage = function() {
        return this.A
    }
    ;
    g.oe.prototype.getErrorCode = function() {
        return this.g
    }
    ;
    g.oe.prototype.getType = g.m(11);
    g.oe.prototype.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.b ? " Caused by: " + this.b : "")
    }
    ;
    (0,
    g.G)();
    var we = null;
    "undefined" != typeof window.XMLHttpRequest ? we = function() {
        return new window.XMLHttpRequest
    }
    : "undefined" != typeof window.ActiveXObject && (we = function() {
        return new window.ActiveXObject("Microsoft.XMLHTTP")
    }
    );
    var xe = {
        "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
        "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
        "X-YouTube-Page-CL": "PAGE_CL",
        "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
        "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
    };
    var mn = {
        hF: {
            1E3: {
                other: "0K"
            },
            1E4: {
                other: "00K"
            },
            1E5: {
                other: "000K"
            },
            1E6: {
                other: "0M"
            },
            1E7: {
                other: "00M"
            },
            1E8: {
                other: "000M"
            },
            1E9: {
                other: "0B"
            },
            1E10: {
                other: "00B"
            },
            1E11: {
                other: "000B"
            },
            1E12: {
                other: "0T"
            },
            1E13: {
                other: "00T"
            },
            1E14: {
                other: "000T"
            }
        },
        gF: {
            1E3: {
                other: "0 thousand"
            },
            1E4: {
                other: "00 thousand"
            },
            1E5: {
                other: "000 thousand"
            },
            1E6: {
                other: "0 million"
            },
            1E7: {
                other: "00 million"
            },
            1E8: {
                other: "000 million"
            },
            1E9: {
                other: "0 billion"
            },
            1E10: {
                other: "00 billion"
            },
            1E11: {
                other: "000 billion"
            },
            1E12: {
                other: "0 trillion"
            },
            1E13: {
                other: "00 trillion"
            },
            1E14: {
                other: "000 trillion"
            }
        }
    }
      , Pe = mn
      , Pe = mn;
    g.He = {
        AED: [2, "dh", "\u062f.\u0625.", "DH"],
        ALL: [0, "Lek", "Lek"],
        AUD: [2, "$", "AU$"],
        BDT: [2, "\u09f3", "Tk"],
        BGN: [2, "lev", "lev"],
        BRL: [2, "R$", "R$"],
        CAD: [2, "$", "C$"],
        CDF: [2, "FrCD", "CDF"],
        CHF: [2, "CHF", "CHF"],
        CLP: [0, "$", "CL$"],
        CNY: [2, "\u00a5", "RMB\u00a5"],
        COP: [32, "$", "COL$"],
        CRC: [0, "\u20a1", "CR\u20a1"],
        CZK: [50, "K\u010d", "K\u010d"],
        DKK: [50, "kr.", "kr."],
        DOP: [2, "RD$", "RD$"],
        EGP: [2, "\u00a3", "LE"],
        ETB: [2, "Birr", "Birr"],
        EUR: [2, "\u20ac", "\u20ac"],
        GBP: [2, "\u00a3", "GB\u00a3"],
        HKD: [2, "$", "HK$"],
        HRK: [2, "kn", "kn"],
        HUF: [34, "Ft", "Ft"],
        IDR: [0, "Rp", "Rp"],
        ILS: [34, "\u20aa", "IL\u20aa"],
        INR: [2, "\u20b9", "Rs"],
        IRR: [0, "Rial", "IRR"],
        ISK: [0, "kr", "kr"],
        JMD: [2, "$", "JA$"],
        JPY: [0, "\u00a5", "JP\u00a5"],
        KRW: [0, "\u20a9", "KR\u20a9"],
        LKR: [2, "Rs", "SLRs"],
        LTL: [2, "Lt", "Lt"],
        MNT: [0, "\u20ae", "MN\u20ae"],
        MVR: [2, "Rf", "MVR"],
        MXN: [2, "$", "Mex$"],
        MYR: [2, "RM", "RM"],
        NOK: [50, "kr", "NOkr"],
        PAB: [2, "B/.", "B/."],
        PEN: [2, "S/.", "S/."],
        PHP: [2, "\u20b1", "Php"],
        PKR: [0, "Rs", "PKRs."],
        PLN: [50, "z\u0142", "z\u0142"],
        RON: [2, "RON", "RON"],
        RSD: [0, "din", "RSD"],
        RUB: [50, "\u20bd", "RUB"],
        SAR: [2, "Rial", "Rial"],
        SEK: [50, "kr", "kr"],
        SGD: [2, "$", "S$"],
        THB: [2, "\u0e3f", "THB"],
        TRY: [2, "TL", "YTL"],
        TWD: [2, "NT$", "NT$"],
        TZS: [0, "TSh", "TSh"],
        UAH: [2, "\u0433\u0440\u043d.", "UAH"],
        USD: [2, "$", "US$"],
        UYU: [2, "$", "$U"],
        VND: [48, "\u20ab", "VN\u20ab"],
        YER: [0, "Rial", "Rial"],
        ZAR: [2, "R", "ZAR"]
    };
    var nn;
    nn = {
        pw: ".",
        sq: ",",
        xw: "%",
        wq: "0",
        rG: "+",
        eG: "-",
        rw: "E",
        yw: "\u2030",
        tq: "\u221e",
        jG: "NaN",
        ow: "#,##0.###",
        zG: "#E0",
        qG: "#,##0%",
        rF: "\u00a4#,##0.00",
        uF: "USD"
    };
    g.Fe = nn;
    g.Fe = nn;
    g.Je.prototype.parse = g.m(12);
    g.Je.prototype.format = function(a) {
        if ((0,
        window.isNaN)(a))
            return g.Fe.jG;
        var b = [], c;
        c = a;
        if (0 == this.F)
            c = Qe;
        else {
            c = Math.abs(c);
            var d = Re(this, 1 >= c ? 0 : Le(c)).Br;
            c = Re(this, d + Le(Me(this, c / Math.pow(10, d)).kz))
        }
        a /= Math.pow(10, c.Br);
        b.push(c.prefix);
        d = 0 > a || 0 == a && 0 > 1 / a;
        b.push(d ? this.o : this.C);
        if ((0,
        window.isFinite)(a))
            if (a = a * (d ? -1 : 1) * this.H,
            this.P)
                if (0 == a)
                    Ne(this, a, this.b, b),
                    Oe(this, 0, b);
                else {
                    var e = Math.floor(Math.log(a) / Math.log(10) + 2E-15);
                    a /= Math.pow(10, e);
                    var f = this.b;
                    if (1 < this.L && this.L > this.b) {
                        for (; 0 != e % this.L; )
                            a *= 10,
                            e--;
                        f = 1
                    } else
                        1 > this.b ? (e++,
                        a /= 10) : (e -= this.b - 1,
                        a *= Math.pow(10, this.b - 1));
                    Ne(this, a, f, b);
                    Oe(this, e, b)
                }
            else
                Ne(this, a, this.b, b);
        else
            b.push(g.Fe.tq);
        b.push(d ? this.D : this.K);
        b.push(c.Xl);
        return b.join("")
    }
    ;
    var Qe = {
        prefix: "",
        Xl: "",
        Br: 0
    };
    g.Hb && g.Mb(8);
    var sf, tf, pf, yf, Te;
    g.Ue = {};
    g.on = {};
    sf = {};
    tf = {};
    pf = {};
    yf = {};
    Te = {};
    Se.prototype.Ae = null;
    Se.prototype.getContent = function() {
        return this.content
    }
    ;
    Se.prototype.toString = function() {
        return this.content
    }
    ;
    g.y(We, Se);
    g.Qk = {};
    var oh;
    g.y($e, Se);
    $e.prototype.Jd = g.Ue;
    g.y(af, Se);
    af.prototype.Jd = g.on;
    af.prototype.Ae = 1;
    g.y(bf, Se);
    bf.prototype.Jd = sf;
    bf.prototype.Ae = 1;
    g.y(cf, Se);
    cf.prototype.Jd = tf;
    cf.prototype.Ae = 1;
    g.y(df, Se);
    df.prototype.Jd = pf;
    df.prototype.Ae = 1;
    g.y(ef, Se);
    ef.prototype.Jd = yf;
    ef.prototype.Ae = 1;
    g.y(g.ff, We);
    g.ff.prototype.Jd = Te;
    g.I = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = new b(String(a));
            void 0 !== d && (e.Ae = d);
            return e
        }
    }($e);
    gf(af);
    g.pn = gf(bf);
    gf(cf);
    g.P = gf(df);
    oh = gf(ef);
    g.kh = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = String(a);
            if (!e)
                return "";
            e = new b(e);
            void 0 !== d && (e.Ae = d);
            return e
        }
    }($e);
    jf(af);
    jf(cf);
    g.qn = jf(bf);
    g.xca = jf(df);
    jf(ef);
    var Naa = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    }
      , Oaa = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    }
      , Paa = /[\x00\x22\x27\x3c\x3e]/g
      , uf = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
      , Maa = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i
      , Kaa = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i
      , Laa = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i
      , Jaa = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i
      , Haa = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
      , Iaa = /</g;
    var Jf;
    (0,
    g.G)();
    g.rn = new g.Je(1);
    Jf = !1;
    g.sn = g.Df(function() {
        return 0 <= g.Bf().search("m.youtube.com")
    });
    var bg = !1
      , Uaa = [2, 5, 6, 9]
      , Taa = /'([^']+)' of object \[object DOMWindow\]/
      , Raa = g.Wf(12E4)
      , Saa = g.Wf(3E4)
      , Yf = 0
      , Xf = null;
    g.q("reloadForAutoSignin", function() {
        dg(9)
    }, void 0);
    g.q("yt.logging.errors.log", function(a, b) {
        window.yterr && g.ag(-1, a, "", b) || JSON.stringify(a)
    }, void 0);
    var kg = []
      , wg = []
      , sg = []
      , xg = []
      , vg = !1
      , mg = {};
    g.q("notifyScriptLoaded", function(a) {
        wg.push(a);
        g.rg(a)
    }, void 0);
    g.q("onDelayLoadedModuleLoaded", og, void 0);
    g.yg.prototype.toString = function() {
        var a = []
          , b = this.A;
        b && a.push(Fg(b, tn, !0), ":");
        var c = this.g;
        if (c || "file" == b)
            a.push("//"),
            (b = this.H) && a.push(Fg(b, tn, !0), "@"),
            a.push(g.sa(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.D,
            null != c && a.push(":", String(c));
        if (c = this.o)
            this.g && "/" != c.charAt(0) && a.push("/"),
            a.push(Fg(c, "/" == c.charAt(0) ? yca : zca, !0));
        (c = this.b.toString()) && a.push("?", c);
        (c = this.F()) && a.push("#", Fg(c, Aca));
        return a.join("")
    }
    ;
    g.yg.prototype.clone = function() {
        return new g.yg(this)
    }
    ;
    g.yg.prototype.K = g.m(13);
    g.yg.prototype.F = function() {
        return this.G
    }
    ;
    var tn = /[#\/\?@]/g
      , zca = /[\#\?:]/g
      , yca = /[\#\?]/g
      , Yaa = /[\#\?@]/g
      , Aca = /#/g;
    g.h = g.Eg.prototype;
    g.h.Cb = function() {
        g.Hg(this);
        return this.b
    }
    ;
    g.h.remove = function(a) {
        g.Hg(this);
        a = Ig(this, a);
        return g.Cb(this.g, a) ? (this.o = null,
        this.b = this.b - this.g.get(a).length,
        this.g.remove(a)) : !1
    }
    ;
    g.h.clear = function() {
        this.g = this.o = null;
        this.b = 0
    }
    ;
    g.h.Ua = g.m(3);
    g.h.$e = g.m(0);
    g.h.qb = function() {
        g.Hg(this);
        for (var a = this.g.jb(), b = this.g.qb(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    g.h.jb = function(a) {
        g.Hg(this);
        var b = [];
        if (g.ga(a))
            g.Jg(this, a) && (b = g.Ha(b, this.g.get(Ig(this, a))));
        else {
            a = this.g.jb();
            for (var c = 0; c < a.length; c++)
                b = g.Ha(b, a[c])
        }
        return b
    }
    ;
    g.h.set = function(a, b) {
        g.Hg(this);
        this.o = null;
        a = Ig(this, a);
        g.Jg(this, a) && (this.b = this.b - this.g.get(a).length);
        this.g.set(a, [b]);
        this.b = this.b + 1;
        return this
    }
    ;
    g.h.get = function(a, b) {
        var c = a ? this.jb(a) : [];
        return 0 < c.length ? String(c[0]) : b
    }
    ;
    g.h.toString = function() {
        if (this.o)
            return this.o;
        if (!this.g)
            return "";
        for (var a = [], b = this.g.qb(), c = 0; c < b.length; c++)
            for (var d = b[c], e = g.sa(d), d = this.jb(d), f = 0; f < d.length; f++) {
                var k = e;
                "" !== d[f] && (k += "=" + g.sa(d[f]));
                a.push(k)
            }
        return this.o = a.join("&")
    }
    ;
    g.h.clone = function() {
        var a = new g.Eg;
        a.o = this.o;
        this.g && (a.g = this.g.clone(),
        a.b = this.b);
        return a
    }
    ;
    g.h.extend = g.m(14);
    var bba = /^https?.*#ocr$|^https?:\/\/(secure\-..\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|aksecure\.imrworldwide\.com\/)/
      , aba = /^https?:\/\/(www\.google\.com\/pagead\/sul|www\.youtube\.com\/pagead\/sul)/;
    var Og = {}
      , cba = 0
      , Bca = g.r("yt.net.ping.workerUrl_") || null;
    g.q("yt.net.ping.workerUrl_", Bca, void 0);
    try {
        g.Tg = window.localStorage
    } catch (a) {
        g.Tg = null
    }
    g.Sg = !!g.Tg;
    try {
        g.Wg("LS_TEST_KEY", "TEST_VALUE"),
        g.Sg = "TEST_VALUE" == g.Vg("LS_TEST_KEY")
    } catch (a) {
        g.Sg = !1,
        g.Ug(a) && g.ag(17, a, "LS-Support")
    }
    ;g.Xg = g.u;
    g.$g = g.u;
    g.bh = g.u;
    g.Cca = RegExp("'([{}#].*?)'", "g");
    g.Dca = RegExp("''", "g");
    var vn;
    g.un = g.Ib ? "webkit" : g.Fb ? "moz" : g.Hb ? "ms" : g.Uc ? "o" : "";
    vn = g.r("yt.dom.getNextId_");
    if (!vn) {
        vn = function() {
            return ++Eca
        }
        ;
        g.q("yt.dom.getNextId_", vn, void 0);
        var Eca = 0
    }
    ;g.ph.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1,
        this.event.preventDefault && this.event.preventDefault())
    }
    ;
    g.ph.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0,
        this.event.stopPropagation && this.event.stopPropagation())
    }
    ;
    g.ph.prototype.stopImmediatePropagation = g.m(15);
    var iba = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1,
        webkitMovementX: 1,
        webkitMovementY: 1
    };
    var qh = g.r("yt.events.listeners_") || {};
    g.q("yt.events.listeners_", qh, void 0);
    var rh = g.r("yt.events.counter_") || {
        count: 0
    };
    g.q("yt.events.counter_", rh, void 0);
    g.wn = g.Ua("Firefox");
    g.Ah = g.Eb() || g.Ua("iPod");
    g.xn = g.Ua("iPad");
    g.yn = g.Ua("Android") && !(Wa() || g.Ua("Firefox") || Va() || g.Ua("Silk"));
    g.zn = Wa();
    g.An = g.Ua("Safari") && !(Wa() || g.Ua("Coast") || Va() || g.Ua("Edge") || g.Ua("Silk") || g.Ua("Android")) && !(g.Eb() || g.Ua("iPad") || g.Ua("iPod"));
    g.xh = g.Ah || g.xn;
    var kba = g.Pf && 4 > g.Bh ? .1 : 0
      , lba = new g.wh;
    g.h = g.wh.prototype;
    g.h.Vh = null;
    g.h.getCurrentTime = g.m(16);
    g.h.pauseVideo = g.m(17);
    g.h.setVolume = g.m(19);
    g.h.mute = g.m(20);
    g.h.unMute = g.m(21);
    g.h.RH = function() {
        this.hasAttribute("controls") && this.setAttribute("controls", "true")
    }
    ;
    g.h.TH = function() {}
    ;
    g.ca(g.zh);
    g.Sl = g.r("yt.player.utils.VideoTagPool.instance_") || g.zh.ra();
    g.q("yt.player.utils.VideoTagPool.instance_", g.Sl, void 0);
    g.h = g.zh.prototype;
    g.h.dy = function(a) {
        if (!(this.b.length >= a)) {
            a -= this.b.length;
            for (var b = 0; b < a; b++) {
                var c = Ch(this);
                this.b.push(c)
            }
        }
    }
    ;
    g.h.iV = function(a, b) {
        return this.b.length ? this.b.pop() : Ch(this, a, b)
    }
    ;
    g.h.xQ = function(a) {
        a && g.Ea(this.g, a) && (g.yh(a),
        g.vh(a),
        g.Ga(this.g, a))
    }
    ;
    g.h.kw = function(a) {
        return this.b.length >= (a || 1)
    }
    ;
    g.h.eH = function() {
        this.b = [];
        this.kw(4) ? (0,
        g.D)(this.g, function(a) {
            a.src || a.load();
            this.b.push(a)
        }, this) : this.dy(4)
    }
    ;
    g.zh.prototype.fillPool = g.zh.prototype.dy;
    g.zh.prototype.getTag = g.zh.prototype.iV;
    g.zh.prototype.releaseTag = g.zh.prototype.xQ;
    g.zh.prototype.hasTags = g.zh.prototype.kw;
    g.zh.prototype.activateTags = g.zh.prototype.eH;
    g.ca(Eh);
    var Dh = g.r("yt.prefs.UserPrefs.prefs_") || {};
    g.q("yt.prefs.UserPrefs.prefs_", Dh, void 0);
    Eh.prototype.get = function(a, b) {
        Gh(a);
        Fh(a);
        var c = void 0 !== Dh[a] ? Dh[a].toString() : null;
        return null != c ? c : b ? b : ""
    }
    ;
    Eh.prototype.set = function(a, b) {
        Gh(a);
        Fh(a);
        if (null == b)
            throw "ExpectedNotNull";
        Dh[a] = b.toString()
    }
    ;
    Eh.prototype.remove = function(a) {
        Gh(a);
        Fh(a);
        delete Dh[a]
    }
    ;
    Eh.prototype.clear = function() {
        Dh = {}
    }
    ;
    var Lh;
    g.Bn = 0;
    var ki, kca;
    ki = "blazer:orientation_change_" + g.Bn++;
    kca = "blazer:module_transition_" + g.Bn++;
    g.Fca = "blazer:comments_" + g.Bn++;
    g.y(bi, g.E);
    bi.prototype.O = function() {
        (0,
        g.D)(this.b, function(a) {
            a.element.removeEventListener(a.g, a.b, a.Ze)
        });
        bi.J.O.call(this)
    }
    ;
    ci.prototype.B = function(a, b) {
        void 0 == this.g[a] && (this.g[a] = 0);
        this.g[a]++;
        for (var c = this.b[a], d = c.length, e, f = 0; f < d; f++)
            try {
                c[f](b)
            } catch (k) {
                e = e || k
            }
        this.g[a]--;
        if (e)
            throw e;
    }
    ;
    var Cn = g.Ta, Dn = Cn.match(/\((BB10|PlayBook|BlackBerry);/), ck;
    if (!Dn || 2 > Dn.length)
        g.mi = void 0;
    else {
        var En = Cn.match(/Version\/(\d+\.\d+)/);
        g.mi = En ? +En[1] : 0
    }
    ck = 0 <= g.mi;
    var Hn = g.Ta.match(/Mozilla\/[\d\.]+ \(Mobile;.* rv:([\d\.]+)\) Gecko\/[\d\.]+ Firefox\/[\d\.]+/), Gn;
    Gn = Hn ? +Hn[1] : void 0;
    g.Fn = 0 <= Gn;
    var sj;
    sj = 0;
    g.xn && (sj = 2 == window.devicePixelRatio ? 3 : 1,
    sj = g.Vg("ipadtype") || sj,
    1 == sj && (window.ondevicemotion = function(a) {
        a && a.acceleration && (sj = 2,
        g.Wg("ipadtype", "2"));
        window.ondevicemotion = g.u
    }
    ));
    g.In = Ym;
    var ni = null
      , ji = null;
    for (var ti = 2 * Math.PI, ui = [], Jn = 0; 8 > Jn; Jn++) {
        var Kn = Jn / 8 * ti;
        ui.push({
            nS: Math.cos(Kn),
            oS: Math.sin(Kn),
            opacity: Math.max((Jn + 1 - 4) / 4, .15)
        })
    }
    var si = 0
      , vi = [];
    var uba = {
        "ytp-button-volume-2": ".ytp-button-volume[data-value=max],.ytp-button-volume[data-value=loud]",
        "ytp-button-volume-1": ".ytp-button-volume[data-value=normal],.ytp-button-volume[data-value=quiet]",
        "ytp-button-volume-0": ".ytp-button-volume[data-value=min]",
        "ytp-button-volume-mute": ".ytp-button-volume[data-value=off]",
        _mg: "._mh:after",
        _mi: "._mj > button span",
        _mk: "._ml",
        _mm: "._mn:after",
        _mo: "._mp._mq ._mr ._mo:after",
        _ms: "._mp._mq ._mr ._ms:after",
        _mt: "._mp._mq ._mu ._mv ._mw:after"
    };
    var Di = g.u
      , Gca = ig(Gi, g.ba, 6, jg);
    g.q("formSubmit", Gca, void 0);
    var Hca = ig(g.Fi, g.ba, 5, jg);
    g.q("clk", Hca, void 0);
    g.Ad = function(a, b) {
        return g.Hi("yt.timeout", a, b, this)
    }
    ;
    var vba = 0
      , Ln = []
      , Mn = {}
      , Ki = null;
    g.y(Ni, g.E);
    g.h = Ni.prototype;
    g.h.V = function(a) {
        if (this.ha())
            return null;
        var b, c;
        c = a ? "koya_elem_" + this.X[a] : Oi(this);
        if (b = g.mc(c))
            return b;
        for (var d in Mn) {
            var e = Mn[d];
            b = null;
            if (g.ka(e) && 1 == e.nodeType) {
                if (d == Oi(this))
                    b = e;
                else
                    for (var e = g.oc("koya-komponent-binding", e), f = e.length, k = 0; k < f; k++)
                        if (e[k].id == Oi(this)) {
                            b = e[k];
                            break
                        }
                if (b)
                    return a ? taa(b, function(a) {
                        return a.id == c
                    }) || null : b
            }
        }
        return null
    }
    ;
    g.h.register = function(a, b) {
        if (!this.ha()) {
            var c = Ve(Pi(this, b || "div"));
            a.innerHTML = g.qb(c);
            g.Ea(Ln, this) || (Ln.push(this),
            Mn[Oi(this)] = a);
            this.Ca();
            this.tl()
        }
    }
    ;
    g.h.unregister = function() {
        this.ha() || (g.Ga(Ln, this),
        delete Mn[Oi(this)])
    }
    ;
    g.h.tl = g.u;
    g.h.Ca = function(a) {
        if (!this.ha()) {
            a = this.V(a);
            for (var b in this.M) {
                var c = this.M[b]
                  , d = c.V();
                d && g.Cc(a, d) && c.Ca()
            }
        }
    }
    ;
    g.h.getChildren = function() {
        return g.Na(this.M)
    }
    ;
    g.h.to = function(a, b) {
        return this.ha() ? !1 : this.H == a.split("_")[0] ? (this.W[a].apply(this, b),
        !0) : 0 <= g.Ca(this.getChildren(), function(c) {
            return c.to(a, b)
        })
    }
    ;
    g.h.Ec = function(a) {
        return this.Vd(a ? this.xa[a] : this.Za)
    }
    ;
    g.h.Vd = function(a, b) {
        if (this.ha())
            return "";
        var c = Ki;
        Ki = this;
        var d = this;
        b && (d = function(a) {
            for (var b in a)
                this[b] = a[b]
        }
        ,
        d.prototype = this,
        d = new d(b));
        d = a(d);
        Ki = c;
        return d
    }
    ;
    g.h.DH = function(a, b, c) {
        var d;
        a: {
            d = this.W;
            for (var e in d)
                if (d[e] == b) {
                    d = e;
                    break a
                }
            d = null
        }
        d || (d = this.H + "_" + this.wa++,
        this.W[d] = b);
        e = "";
        for (var f = 2; f < arguments.length; f++)
            e += "," + g.ua(g.Nd(Qi(arguments[f])));
        return (0,
        g.P)(" " + a + "=\"return koya.onEvent(arguments[0]||window.event,'" + d + "'" + e + ')" ')
    }
    ;
    g.h.CH = function(a, b) {
        if (!a)
            return (0,
            g.I)("");
        this.M[a.H] = a;
        a.Da = [];
        for (var c = 1; c < arguments.length; c++)
            a.Da.push(arguments[c]);
        g.F(this, a);
        return Pi(a, "div")
    }
    ;
    g.h.O = function() {
        Ni.J.O.call(this);
        g.Qa(this);
        this.ha = function() {
            return !0
        }
    }
    ;
    g.q("koya.onEvent", function(a, b, c) {
        window.event = a;
        var d = g.Ka((0,
        g.N)(arguments, Qi), 2);
        return 0 > g.Ca(Ln, function(a) {
            return a.to(b, d)
        })
    }, void 0);
    g.y(g.Ri, Ni);
    g.h = g.Ri.prototype;
    g.h.Rb = function(a) {
        Si(this, function(b) {
            b.Rb(a)
        })
    }
    ;
    g.h.Fa = function() {
        Si(this, function(a) {
            a.Fa()
        })
    }
    ;
    g.h.tl = function(a) {
        g.Ri.J.tl.call(this, a);
        wba(this, a)
    }
    ;
    g.h.Ec = function(a) {
        return this.display ? g.Ri.J.Ec.call(this, a) : ""
    }
    ;
    g.h.to = function(a, b) {
        try {
            return g.Ri.J.to.call(this, a, b)
        } catch (c) {
            return g.fg(5, c, "[" + a + "] - " + hg(g.$h())),
            g.eg(5),
            !1
        }
    }
    ;
    g.h.Kh = g.m(22);
    g.y(g.Xi, g.Ri);
    g.Xi.prototype.show = function(a) {
        this.B = a;
        this.register(g.mc("toast"));
        g.Lc(Yi(this), "_moc");
        g.Hi("toast-fout", this.C, this.duration, this);
        this.A()
    }
    ;
    g.Xi.prototype.A = function() {
        this.hm || (this.b = g.Hi("toast-repos", this.A, 100, this));
        if (this.g != window.pageYOffset) {
            this.g = window.pageYOffset;
            var a = Yi(this).clientWidth
              , b = Yi(this).clientHeight
              , a = (window.document.documentElement.clientWidth - a) / 2;
            Yi(this).style.left = a + "px";
            var a = g.ri()
              , c = 0
              , c = this.hm ? (a - b) / 2 : g.Pf && 3 > g.Bh ? window.pageYOffset + a - b - 30 : 120 + b <= a ? window.pageYOffset + 120 : window.pageYOffset + (a - b) / 2;
            Yi(this).style.top = c + "px"
        }
    }
    ;
    g.Xi.prototype.C = function() {
        this.V() && (g.Nc(Yi(this), "_moc"),
        g.Hi("toast-dereg", this.unregister, 1E3, this))
    }
    ;
    g.Xi.prototype.unregister = function() {
        this.V() && (-1 != this.b && ((0,
        window.clearInterval)(this.b),
        this.b = -1),
        g.Xi.J.unregister.call(this),
        g.yc(this.V()),
        this.B())
    }
    ;
    g.y(g.Zi, g.Xi);
    var $i = [];
    g.q("toast", g.cj, void 0);
    var Aba, rj;
    Aba = /\/(?:[-a-zA-Z0-9_\+~&\/=]*)/;
    g.Nn = null;
    rj = [];
    g.y(g.pj, g.E);
    g.h = g.pj.prototype;
    g.h.clone = function(a, b) {
        var c = new g.pj(a ? a : this.name,b ? b : this.B,this.A);
        c.o = this.o;
        c.C = this.C;
        c.g = this.g;
        g.Nn == this && (g.Nn = c);
        return c
    }
    ;
    g.h.send = function() {
        var a = (0,
        g.x)(this.pD, this);
        Bba(this.url, this.A, this.content, a, (0,
        g.x)(this.GS, this))
    }
    ;
    g.h.pD = function(a) {
        try {
            Dba(this, a)
        } catch (b) {
            a = this.A ? "POST" : "GET",
            a += " " + this.url,
            g.fg(4, b, a),
            g.eg(4)
        }
    }
    ;
    g.h.GS = function() {
        if (g.Nn == this)
            if (window.confirm(hba())) {
                var a = {
                    retry: (+this.B.retry || 0) + 1
                };
                g.pa(a, this.B);
                this.clone(void 0, a).send()
            } else
                qj(this);
        else
            qj(this)
    }
    ;
    g.h.O = function() {
        g.pj.J.O.call(this);
        g.Qa(this)
    }
    ;
    g.y(g.vj, g.pj);
    g.vj.b = g.bn;
    g.vj.prototype.send = function() {
        var a = ej(window.bootstrap_data);
        g.Hi("WatchBootstrap", this.pD, 0, this, a);
        window.bootstrap_data = null;
        g.vj.b = !1
    }
    ;
    var zj = g.Sf()
      , yj = null
      , wj = !1
      , Aj = g.u
      , xj = null;
    g.y(Gj, g.Ri);
    Gj.prototype.pl = function() {
        g.Wd("HideTicker", "true", 86400);
        g.Ui(this, !1)
    }
    ;
    Gj.prototype.CA = function() {
        g.hj(this.b)
    }
    ;
    g.y(Ij, Gj);
    g.y(Jj, Gj);
    g.y(g.Lj, g.Ri);
    g.Lj.prototype.up = !0;
    g.Mj = [];
    g.h = g.Lj.prototype;
    g.h.ZN = function() {
        g.Zh()
    }
    ;
    g.h.unregister = function() {
        g.Ga(g.Mj, this);
        this.V() && g.xc(this.V());
        window.document.body.removeEventListener(ki, this.b.nr, !1);
        g.Lf();
        Qf(!0);
        g.Lj.J.unregister.call(this);
        this.g && this.g.focus();
        g.mc("content-container").removeAttribute("aria-hidden");
        g.mc("player") && g.mc("player").removeAttribute("aria-hidden")
    }
    ;
    g.h.Ca = function(a) {
        g.Lj.J.Ca.call(this, a);
        a || (this.Il(),
        this.o = g.Pl.Tc.jd())
    }
    ;
    g.h.Il = function() {
        var a = this.V("lightbox")
          , b = this.V("lightboxContent")
          , c = Math.round(.75 * g.ri());
        a.style["max-height"] = c + "px";
        b.style["max-height"] = c - 40 - 36 + "px";
        b = (window.document.documentElement.clientWidth - a.clientWidth) / 2;
        c = (g.ri() - a.clientHeight) / 2;
        c += window.pageYOffset;
        a.style.left = b + "px";
        a.style.top = c + "px"
    }
    ;
    g.h.onBlur = g.m(23);
    g.y(g.Oj, g.Lj);
    g.y(g.Pj, g.Ri);
    g.y(Rj, g.Oj);
    g.y(Qj, g.Pj);
    var Xj = !0
      , Nba = .05 > Math.random();
    var Oba = new Md;
    g.y(Yj, g.Ri);
    Yj.prototype.EA = function() {
        Uj("close");
        g.Wj("IOS_PROMO_BANNER", 1);
        g.Ui(this, !1)
    }
    ;
    Yj.prototype.ia = function() {
        Uj("click");
        g.Wj("IOS_PROMO_BANNER", 1);
        var a = g.oa(g.Cf, Lm);
        window.setTimeout(a, 100);
        g.Ui(this, !1)
    }
    ;
    Yj.prototype.Fa = function() {
        g.Ui(this, !1);
        Yj.J.Fa.call(this)
    }
    ;
    var kk = {};
    var mk, Pba = vb;
    g.ok.prototype.get = function() {
        var a;
        0 < this.g ? (this.g--,
        a = this.b,
        this.b = a.next,
        a.next = null) : a = this.o();
        return a
    }
    ;
    var vk = new g.ok(function() {
        return new rk
    }
    ,function(a) {
        a.reset()
    }
    ,100);
    qk.prototype.remove = function() {
        var a = null;
        this.b && (a = this.b,
        this.b = this.b.next,
        this.b || (this.g = null),
        a.next = null);
        return a
    }
    ;
    rk.prototype.set = function(a, b) {
        this.b = a;
        this.g = b;
        this.next = null
    }
    ;
    rk.prototype.reset = function() {
        this.next = this.g = this.b = null
    }
    ;
    var sk, tk = !1, uk = new qk;
    g.y(g.yk, g.E);
    g.h = g.yk.prototype;
    g.h.subscribe = function(a, b, c) {
        var d = this.g[a];
        d || (d = this.g[a] = []);
        var e = this.bl;
        this.b[e] = a;
        this.b[e + 1] = b;
        this.b[e + 2] = c;
        this.bl = e + 3;
        d.push(e);
        return e
    }
    ;
    g.h.xd = function(a) {
        var b = this.b[a];
        if (b) {
            var c = this.g[b];
            0 != this.A ? (this.o.push(a),
            this.b[a + 1] = g.u) : (c && g.Ga(c, a),
            delete this.b[a],
            delete this.b[a + 1],
            delete this.b[a + 2])
        }
        return !!b
    }
    ;
    g.h.publish = function(a, b) {
        var c = this.g[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                d[e - 1] = arguments[e];
            if (this.B)
                for (e = 0; e < c.length; e++) {
                    var k = c[e];
                    Sba(this.b[k + 1], this.b[k + 2], d)
                }
            else {
                this.A++;
                try {
                    for (e = 0,
                    f = c.length; e < f; e++)
                        k = c[e],
                        this.b[k + 1].apply(this.b[k + 2], d)
                } finally {
                    if (this.A--,
                    0 < this.o.length && 0 == this.A)
                        for (; c = this.o.pop(); )
                            this.xd(c)
                }
            }
            return 0 != e
        }
        return !1
    }
    ;
    g.h.clear = function(a) {
        if (a) {
            var b = this.g[a];
            b && ((0,
            g.D)(b, this.xd, this),
            delete this.g[a])
        } else
            this.b.length = 0,
            this.g = {}
    }
    ;
    g.h.Cb = function(a) {
        if (a) {
            var b = this.g[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.g)
            a += this.Cb(b);
        return a
    }
    ;
    g.h.O = function() {
        g.yk.J.O.call(this);
        this.clear();
        this.o.length = 0
    }
    ;
    var Ica = g.r("yt.pubsub.instance_") || new g.yk;
    g.yk.prototype.subscribe = g.yk.prototype.subscribe;
    g.yk.prototype.unsubscribeByKey = g.yk.prototype.xd;
    g.yk.prototype.publish = g.yk.prototype.publish;
    g.yk.prototype.clear = g.yk.prototype.clear;
    g.q("yt.pubsub.instance_", Ica, void 0);
    g.Bk = g.r("yt.pubsub.subscribedKeys_") || {};
    g.q("yt.pubsub.subscribedKeys_", g.Bk, void 0);
    var Dk = g.r("yt.pubsub.topicToKeys_") || {};
    g.q("yt.pubsub.topicToKeys_", Dk, void 0);
    g.Ck = g.r("yt.pubsub.isSynchronous_") || {};
    g.q("yt.pubsub.isSynchronous_", g.Ck, void 0);
    var Ak = g.r("yt.pubsub.skipSubId_") || null;
    g.q("yt.pubsub.skipSubId_", Ak, void 0);
    var Uba, Vba;
    Uba = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/;
    Vba = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;
    g.Ik = {};
    var Jk = null;
    g.y(g.Nk, g.Ri);
    g.h = g.Nk.prototype;
    g.h.xD = g.gk;
    g.h.Hu = function(a) {
        this.b = a;
        g.Pc(this.V("searchbar"), "_mec", this.b);
        var b = g.pc("_mfc");
        b && g.Pc(b, "_mgc", this.b);
        if (a) {
            if (!this.g) {
                a = Ok(this);
                var b = g.pc("_mhc", this.V())
                  , c = this.V("submit")
                  , d = !!Jk;
                Jk = g.oa(aca, a, c, b);
                window.ytsboxinstall ? Jk() : d || g.Hk(g.yd("SEARCHBOX_URL", void 0), Zba);
                this.g = !0
            }
            g.Gf && window.scrollTo(0, 1);
            Ok(this).focus()
        }
        this.o()
    }
    ;
    g.h.Oe = function() {
        this.b && g.Ic(this.V("clearSearchButton"), Ok(this).value)
    }
    ;
    g.h.Ca = function(a) {
        g.Nk.J.Ca.call(this, a);
        this.Hu(this.b);
        !a && this.b && this.Oe()
    }
    ;
    g.h.onChange = function() {
        this.query = Ok(this).value;
        this.Oe()
    }
    ;
    g.h.Jt = function() {
        var a = Ok(this);
        this.query = a.value = "";
        this.Oe();
        a.focus()
    }
    ;
    g.y(g.Rk, g.Ri);
    g.h = g.Rk.prototype;
    g.h.Hx = function() {
        return Xj && Lm && 1 > +Vj("IOS_PROMO_BANNER") ? new Yj : null
    }
    ;
    g.h.eh = g.Sk("");
    g.h.tC = !1;
    g.h.Gb = !1;
    g.h.Gi = !1;
    g.h.qe = null;
    g.h.cast = null;
    g.h.Xk = g.m(24);
    g.h.Mf = function(a) {
        oi(this.ga);
        this.Gb = !0;
        this.fill();
        this.cast = this.on();
        this.register(a)
    }
    ;
    g.h.Ju = g.m(25);
    g.h.jg = function() {
        g.Nf();
        this.iC()
    }
    ;
    g.h.iC = function() {
        fca()
    }
    ;
    g.h.Rb = function(a) {
        g.Rk.J.Rb.call(this, a);
        pi(a)
    }
    ;
    g.h.Fa = function() {
        this.R = this.jd();
        this.Gb = !1;
        window.document.body.removeEventListener(ki, this.ga.nr, !1);
        g.Rk.J.Fa.call(this);
        this.unregister();
        Lba();
        this.cast && this.cast.Gu(g.u);
        g.Hi("BaseMod-Dispose", this.dispose, 0, this)
    }
    ;
    g.h.$O = function() {
        this.Wd && (this.Wd.Hu(!this.Wd.b),
        this.Wd.Oe())
    }
    ;
    g.h.cB = function() {
        var a = this.V("pageContainer");
        this.np = this.Gi ? "" : this.Wd.b ? "_mab" : "_mbb";
        g.Oc(a, ["_mab", "_mbb"]);
        this.np && g.Lc(a, this.np);
        g.Pf && !g.Gf && g.Pc(a, "_mz", this.Wd.b)
    }
    ;
    g.h.fx = function() {
        return new g.Nk((0,
        g.x)(this.cB, this))
    }
    ;
    g.h.RN = function() {
        g.hj("/")
    }
    ;
    g.h.SN = function() {
        g.Nj(new Rj(this.qe,this.eh))
    }
    ;
    g.h.qd = g.m(26);
    g.h.ue = g.m(28);
    g.h.jd = function() {
        return window.pageYOffset
    }
    ;
    g.h.Uf = g.m(30);
    g.h.on = function() {
        var a = g.Cj();
        a && a.Gu((0,
        g.x)(function(a) {
            g.Vi(this, "pageContainer", "_mcb", a)
        }, this));
        g.Vi(this, "pageContainer", "_mcb", !!a && a.wD());
        return a
    }
    ;
    g.h.Vt = function() {
        this.cast = this.on();
        yi ? Ai("remote") : Ci("remote", !0);
        this.V() && g.R(this, "header")
    }
    ;
    g.h.fill = g.u;
    var Yk;
    g.Tk = {};
    g.Wk = {};
    Yk = [g.Hf("mobile_blazer_noncore_mod"), g.Hf("mobile_blazer_logged_in_users_mod")];
    Zk.prototype.b = function() {
        return this.o ? "user/" + this.o : ""
    }
    ;
    Zk.prototype.g = function() {
        return this.o ? this.A : {}
    }
    ;
    g.y(al, g.Rk);
    al.prototype.iC = g.u;
    al.prototype.Hx = function() {
        return null
    }
    ;
    g.h = g.bl.prototype;
    g.h.iO = function() {
        this.B = !0;
        if (this.o && !this.b) {
            var a = $k(this.F, this.D, this.C);
            a && (this.ib.Fa(),
            this.ib = a,
            this.ib.Mf(this.G),
            this.ib.jg(this.A),
            this.b = !0)
        }
    }
    ;
    g.h.ra = function() {
        return this.ib
    }
    ;
    g.h.jg = function(a) {
        this.o = !0;
        this.A = a;
        this.ib.jg(a);
        if (this.g) {
            a = (0,
            g.x)(this.iO, this);
            for (var b = 0; b < this.g.length; b++) {
                var c = this.g[b];
                g.ng(c, a);
                this.H && g.rg(c)
            }
            this.g = null
        }
    }
    ;
    g.h.Mf = function(a) {
        this.G = a;
        if (!this.b && this.B) {
            var b = $k(this.F, this.D, this.C);
            b && (this.ib = b,
            this.b = !0)
        }
        this.ib && this.ib.Mf(a)
    }
    ;
    g.h.Fa = function() {
        this.o = !1;
        this.ib.Fa()
    }
    ;
    g.h.Rb = function(a) {
        this.ib.Rb(a)
    }
    ;
    g.h.ue = g.m(27);
    g.h.jd = function() {
        return this.ib.jd()
    }
    ;
    g.h.Uf = g.m(29);
    cl.prototype.Xd = function() {
        return {
            version: this.version,
            args: this.args
        }
    }
    ;
    g.dl.prototype.toString = function() {
        return this.g
    }
    ;
    var Jca = g.r("yt.pubsub2.instance_") || new g.yk;
    g.yk.prototype.subscribe = g.yk.prototype.subscribe;
    g.yk.prototype.unsubscribeByKey = g.yk.prototype.xd;
    g.yk.prototype.publish = g.yk.prototype.publish;
    g.yk.prototype.clear = g.yk.prototype.clear;
    g.q("yt.pubsub2.instance_", Jca, void 0);
    g.On = g.r("yt.pubsub2.subscribedKeys_") || {};
    g.q("yt.pubsub2.subscribedKeys_", g.On, void 0);
    g.Pn = g.r("yt.pubsub2.topicToKeys_") || {};
    g.q("yt.pubsub2.topicToKeys_", g.Pn, void 0);
    g.Qn = g.r("yt.pubsub2.isAsync_") || {};
    g.q("yt.pubsub2.isAsync_", g.Qn, void 0);
    g.q("yt.pubsub2.skipSubKey_", null, void 0);
    g.y(fl, cl);
    g.wl = new g.dl("timing-sent",fl);
    var hca, gca;
    g.ql = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
    hca = (0,
    g.x)(g.ql.clearResourceTimings || g.ql.webkitClearResourceTimings || g.ql.mozClearResourceTimings || g.ql.msClearResourceTimings || g.ql.oClearResourceTimings || g.u, g.ql);
    gca = g.ql.mark ? function(a) {
        g.ql.mark(a)
    }
    : g.u;
    var yl = null;
    rj.push(function(a) {
        a.b && (yl = a.b)
    });
    g.Rn = 0;
    g.q("yt.timing.reportbuilder_", function(a, b, c, d) {
        if (!a || !g.Cl() || !a._start)
            return null;
        !d && g.Rn && (g.Bd(g.Rn),
        g.Rn = 0);
        b || (b = {});
        var e = a._start
          , f = g.Bl(d);
        g.Al(null, d);
        if (e && 1 < g.Oa(a).length) {
            d = {
                v: 2,
                s: "youtube_mobile",
                action: f,
                e: g.fe.Qr
            };
            if (c) {
                sl(c);
                for (var k in c)
                    "_" != k.charAt(0) && (d[k] = c[k])
            }
            c = b;
            a.aft || (a.pbr && a.pbr < a.pbs ? a.aft = a.pbr : a.pbs ? a.aft = a.pbs : a.ur ? a.aft = a.ur : a.ol ? a.aft = a.ol : c.pbr && c.pbr < c.pbs ? c.ttp = c.pbr : c.pbs && (c.ttp = c.pbs));
            c = [];
            for (var l in a)
                "_" != l.charAt(0) && c.push(l + "." + Math.max(Math.round(a[l] - e), 0));
            d.rt = c.join(",");
            g.jj && (d.yt_li = "1");
            d.yt_pt || (d.yt_pt = g.El(g.ie));
            a = g.zl();
            !d.yt_nt && a && (d.yt_nt = a);
            d.yt_lt || (d.yt_lt = "cold");
            g.ql.timing && "cold" == d.yt_lt && pl(g.ql.timing, b);
            nl(d, b);
            return d
        }
        return null
    }, void 0);
    window.onbeforeunload = function() {
        g.xl("u")
    }
    ;
    var jca;
    jca = ["itct", "disconnect", "pairingCode"];
    g.h = Il.prototype;
    g.h.hd = 0;
    g.h.ez = !0;
    g.h.Tc = null;
    g.h.Et = function(a, b, c) {
        this.ez = !1;
        Dl();
        Hl(this, a, b, c)
    }
    ;
    g.h.Ix = function(a, b, c) {
        return new Fl(a,b,c || {})
    }
    ;
    g.y(Ml, Il);
    Ml.prototype.Et = function(a, b, c) {
        g.bn ? g.Cf("/#/" + a) : Ml.J.Et.call(this, a, b, c)
    }
    ;
    Ml.prototype.g = function(a) {
        a && !g.bn && ((a = g.Ef(a.o)) && (a = "/" + a),
        zj = a,
        window.document.location.hash = a)
    }
    ;
    Ml.prototype.o = function(a) {
        (a = g.Ef(a)) || (a = "");
        Dl();
        Ll(this, a)
    }
    ;
    g.y(Nl, Il);
    Nl.prototype.g = function(a, b) {
        var c = Kl(this);
        b ? window.history.replaceState(c, "", a.o) : (c && window.history.replaceState(c, "", c.o),
        window.history.pushState(a, "", a.o))
    }
    ;
    Nl.prototype.Ix = function(a, b, c) {
        var d = g.ec(a, "pairingCode");
        d && eba(d);
        (d = g.ec(a, "disconnect")) && fba(d);
        return new Fl(a,b,c || {})
    }
    ;
    Nl.prototype.o = function(a) {
        a = a.state;
        var b = Kl(this)
          , b = b ? b.b : null;
        a && a.b !== b && (Dl(),
        Ll(this, a.b))
    }
    ;
    g.q("getBlazerCurrentLocation", g.Ql, void 0);
    g.q("getBlazerCurrentReferer", g.Rl, void 0);
    var Sn = !1;
    var Wn;
    g.Tn = null;
    g.Un = null;
    g.Vn = g.Wf(36E5);
    Wn = Vj("PQ_SETTING");
    if (Wn) {
        var Xn = Wn.lastTime;
        Xn && (0,
        g.Vn)(Xn) && (g.Tn = Wn.quality,
        g.Un = Xn)
    }
    ;g.q("initBlazer", function() {
        var a = Ol();
        if (!a || "/" == a[0] && "//" != a.slice(0, 2)) {
            var a = window.document.body
              , b = dn ? ["_ma"] : [];
            g.Gf && b.push("_mb");
            g.In && b.push("_mc");
            g.Mc(a, b);
            qba();
            mba();
            window.document.documentElement.setAttribute("dir", Kk);
            if (g.ge("mweb_external_sprite_styles"))
                if (g.ge("mweb_external_sprite_styles_dpi_cookie")) {
                    if (Eh.ra(),
                    b = 1 < window.devicePixelRatio,
                    !!((Hh("f" + (Math.floor(119 / 31) + 1)) || 0) & 67108864) != b) {
                        var a = "f" + (Math.floor(119 / 31) + 1)
                          , c = Hh(a) || 0
                          , c = b ? c | 67108864 : c & -67108865;
                        0 == c ? delete Dh[a] : (b = c.toString(16),
                        Dh[a] = b.toString());
                        var a = [], d;
                        for (d in Dh)
                            a.push(d + "=" + (0,
                            window.escape)(Dh[d]));
                        g.Wd("PREF", a.join("&"), 63072E3)
                    }
                } else
                    yi && Ai("main");
            else
                Bi && Ci("main");
            if (!Sn) {
                a = Km;
                d = [];
                for (var e in a)
                    d.push({
                        nI: "." + e,
                        width: a[e][0],
                        height: a[e][1]
                    });
                e = "";
                a = d.length;
                for (b = 0; b < a; b++)
                    c = d[b],
                    e += g.zf(c.nI) + "{width:" + g.zf(c.width) + "px; height:" + g.zf(c.height) + "px;}";
                e = oh(e);
                xi(e);
                Sn = !0
            }
            "desktop" != g.ie || g.ge("mweb_cougar") || Ci("desktop_player");
            pi(g.ii());
            (g.Xm || g.je()) && g.ai(window.document.body, "click", lca, !0);
            dba();
            d = g.Bf();
            e = g.Ef(Sb(d) || "");
            (a = Ol()) ? e = g.Ef(Sb(a) || a) : g.vj.b && (d = g.Vb(g.Ub(d)),
            0 == d.indexOf("/watch?") && (e = g.Ef(d)));
            Rf ? g.Pl = new Nl(e) : g.Pl = new Ml(e);
            window.setTimeout(wi, 120);
            e = g.me;
            d = le;
            (!g.Gf && 600 < e && 400 < d || !Nm && 1024 <= e && 600 < d || Nm && 1024 > e && 600 >= d) && .1 > Math.random() ? g.Rg({
                action: "weird_dimensions",
                dimension: e + "x" + d,
                isTablet: g.Gf ? "1" : "0",
                isBigTablet: Nm ? "1" : "0"
            }) : .025 > Math.random() && g.Rg({
                action: "screen_dimensions",
                dimension: e + "x" + d,
                isTablet: g.Gf ? "1" : "0",
                isBigTablet: Nm ? "1" : "0"
            });
            g.Vm && 0 < g.Vm.length && (e = g.Hf("mobile_blazer_spacecast_mod"),
            g.lg(g.tg[e]) || g.rg(e));
            g.hn && g.jj && (e = g.De("/vendor_signin", {
                vendor: "NINTENDO"
            }),
            g.Qg(e, !0))
        } else
            g.Cf(a)
    }, void 0);
    g.q("yt.getMsg", g.Fd, void 0);
    g.q("yt.setMsg", g.Ed, void 0);
    g.q("yt.setConfig", g.xd, void 0);
}
)(_yt_m);
