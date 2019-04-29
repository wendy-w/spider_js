var Sanctuary = {};
Sanctuary.Leo = {};
document={}
navigator={}
location={}
window={}
Sanctuary.Leo.LightningPlasma = function(b, s) {
    var c = b.b;
    var x = b.d;
    var t = {
        isNaN: isNaN,
        document: document,
        parseInt: parseInt,
        JSON: JSON,
        Date: Date,
        Object: Object,
        clearInterval: clearInterval,
        navigator: navigator,
        String: String,
        console: console,
        location: location,
        parseFloat: parseFloat,
        encodeURIComponent: encodeURIComponent,
        Function: Function,
        RegExp: RegExp,
        Boolean: Boolean,
        Number: Number,
        window: window,
        decodeURIComponent: decodeURIComponent,
        Array: Array,
        global: t,
        setTimeout: setTimeout,
        Math: Math,
        isFinite: isFinite,
        Error: Error,
        clearTimeout: clearTimeout,
        setInterval: setInterval
    };
    Array.prototype.indexOf = Array.prototype.indexOf || function(E, D) {
        var z;
        if (this == null) {
            throw new TypeError('"this" is null or not defined')
        }
        var C = Object(this);
        var A = C.length >>> 0;
        if (A === 0) {
            return -1
        }
        var B = +D || 0;
        if (Math.abs(B) === Infinity) {
            B = 0
        }
        if (B >= A) {
            return -1
        }
        z = Math.max(B >= 0 ? B : A - Math.abs(B), 0);
        while (z < A) {
            if (z in C && C[z] === E) {
                return z
            }
            z++
        }
        return -1
    }
    ;
    Array.prototype.map = Array.prototype.map || function(I, H) {
        var B, z, C;
        if (this == null) {
            throw new TypeError(" this is null or not defined")
        }
        var E = Object(this);
        var F = E.length >>> 0;
        if (Object.prototype.toString.call(I) != "[object Function]") {
            throw new TypeError(I + " is not a function")
        }
        if (H) {
            B = H
        }
        z = new Array(F);
        C = 0;
        while (C < F) {
            var D, G;
            if (C in E) {
                D = E[C];
                G = I.call(B, D, C, E);
                z[C] = G
            }
            C++
        }
        return z
    }
    ;
    Array.prototype.reduce = Array.prototype.reduce || function(B) {
        if (this === null) {
            throw new TypeError("Array.prototype.reduce " + "called on null or undefined")
        }
        if (typeof B !== "function") {
            throw new TypeError(B + " is not a function")
        }
        var C = Object(this);
        var A = C.length >>> 0;
        var z = 0;
        var D;
        if (arguments.length >= 2) {
            D = arguments[1]
        } else {
            while (z < A && !(z in C)) {
                z++
            }
            if (z >= A) {
                throw new TypeError("Reduce of empty array " + "with no initial value")
            }
            D = C[z++]
        }
        while (z < A) {
            if (z in C) {
                D = B(D, C[z], z, C)
            }
            z++
        }
        return D
    }
    ;
    Function.prototype.bind = Function.prototype.bind || function(A) {
        if ("function" != typeof this) {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
        }
        var z = Array.prototype.slice.call(arguments, 1)
          , D = this
          , C = function() {}
          , B = function() {
            return D.apply(this instanceof B ? this : A, z.concat(Array.prototype.slice.call(arguments)))
        };
        return this.prototype && (C.prototype = this.prototype),
        B.prototype = new C,
        B
    }
    ;
    var p = function(B) {
        if (!B) {
            return ""
        }
        var z = function(J) {
            var K = []
              , L = J.length;
            var M = 0;
            for (var M = 0; M < L; M++) {
                var O = J.charCodeAt(M);
                if (((O >> 7) & 255) == 0) {
                    K.push(J.charAt(M))
                } else {
                    if (((O >> 5) & 255) == 6) {
                        var G = J.charCodeAt(++M);
                        var F = (O & 31) << 6;
                        var H = G & 63;
                        var N = F | H;
                        K.push(String.fromCharCode(N))
                    } else {
                        if (((O >> 4) & 255) == 14) {
                            var G = J.charCodeAt(++M);
                            var I = J.charCodeAt(++M);
                            var F = (O << 4) | ((G >> 2) & 15);
                            var H = ((G & 3) << 6) | (I & 63);
                            var N = ((F & 255) << 8) | H;
                            K.push(String.fromCharCode(N))
                        }
                    }
                }
            }
            return K.join("")
        };
        var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
        var A = B.length;
        var D = 0;
        var E = [];
        while (D < A) {
            code1 = C.indexOf(B.charAt(D++));
            code2 = C.indexOf(B.charAt(D++));
            code3 = C.indexOf(B.charAt(D++));
            code4 = C.indexOf(B.charAt(D++));
            c1 = (code1 << 2) | (code2 >> 4);
            c2 = ((code2 & 15) << 4) | (code3 >> 2);
            c3 = ((code3 & 3) << 6) | code4;
            E.push(String.fromCharCode(c1));
            if (code3 != 64) {
                E.push(String.fromCharCode(c2))
            }
            if (code4 != 64) {
                E.push(String.fromCharCode(c3))
            }
        }
        return z(E.join(""))
    };
    var n = [Array, RegExp, t, isFinite, setTimeout, navigator, Math, Object, document, Date, setInterval, JSON, Number, window, parseInt, Boolean, encodeURIComponent, String, decodeURIComponent, console, Function, parseFloat, clearInterval, location, isNaN, Error, clearTimeout];
    var h = []
      , g = []
      , u = {}
      , e = {}
      , y = {
        c: t
    };
    var r = p(c).split("").reduce(function(z, A) {
        if ((!z.length) || z[z.length - 1].length == 5) {
            z.push([])
        }
        z[z.length - 1].push(A.charCodeAt() - 1);
        return z
    }, []);
    var k = function(A, C, z, B) {
        return {
            v: A,
            o: C,
            k: z,
            r: B
        }
    };
    var w = function(z) {
        return z.r ? z.o[z.k] : z.v
    };
    var a = function(z) {
        var A = {
            Oxff: e
        };
        while (A = A.Oxff) {
            if (A.hasOwnProperty(z)) {
                return k(0, A, z, 1)
            }
        }
        return k(0, e, z, 1)
    };
    var q = function() {
        e = (e.Oxff) ? e.Oxff : e
    };
    var j = function() {
        e = {
            "Oxff": e
        }
    };
    var v = function(A, z) {
        return d[A] ? d[A](z) : k(0, 0, 0, 0)
    };
    var l = function(A, z) {
        return w(v(A, z))
    };
    var m = function(A, C, z, B) {
        f[0] = k(A, C, z, B)
    };
    var o = function(z) {
        var A = 0;
        while (A < z.length) {
            var B = z[A];
            A = i[B[0]](B[1], B[2], B[3], B[4], A, r)
        }
    };
    var d = [s, function(z) {
        return f[z]
    }
    , function(z) {
        return k(g[z], s, s, 0)
    }
    , function(z) {
        return a(z)
    }
    , function(z) {
        return k(0, n, z, 1)
    }
    , function(z) {
        return k(y.c, 0, 0, 0)
    }
    , function(z) {
        return k(0, x, z, 1)
    }
    ];
    var f = [k(0, 0, 0, 0), k(0, 0, 0, 0)];
    var i = [function(E, D, C, B, A, z) {
        return ++A
    }
    , function(E, D, C, B, A, z) {
        return l(E, D)
    }
    , function(E, D, C, B, A, z) {
        f[1] = h.pop(f[0]);
        return ++A
    }
    , function(F, E, D, C, B, z) {
        var A = v(F, E);
        m(delete A.o[A.k], s, s, 0);
        return ++B
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) || l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) / l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m({}, s, s, 0);
        return ++A
    }
    , function(I, H, G, F, E, D) {
        var B = l(I, H);
        if (h.length < B) {
            return ++E
        }
        var C = h.splice(h.length - B, B).map(w);
        var z = h.pop();
        var A = w(z);
        m(new (Function.prototype.bind.apply(A, [null].concat(C))), s, s, 0);
        return ++E
    }
    , function(E, D, C, B, A, z) {
        h.push(f[0]);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) | l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        if (h.length > 0) {
            f[0] = h[h.length - 1]
        }
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) + l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) * l(C, B), s, s, 0);
        return ++A
    }
    , function(G, F, D, C, B, z) {
        var A = v(G, F);
        var E = l(G, F) - 1;
        A.o[A.k] = E;
        m(E, s, s, 0);
        return ++B
    }
    , function(E, D, C, B, A, z) {
        q();
        m(s, s, s, 0, 0);
        return Infinity
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) < l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) & l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(-l(E, D), s, s, 0);
        return ++A
    }
    , function(H, G, F, E, D, C) {
        var z = l(H, G);
        var A = l(F, E);
        if (!u[z]) {
            u[z] = {}
        }
        if (!u[z][A]) {
            var B = C.slice(z, A + 1);
            u[z][A] = function() {
                y = {
                    c: this || t,
                    p: y
                };
                g = Array.prototype.concat.apply([], arguments);
                o(B);
                y = y.p;
                return w(f[0])
            }
        }
        m(u[z][A], s, s, 0);
        return ++D
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) << l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D)instanceof l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(!l(E, D), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        return ++A
    }
    , function(G, F, D, C, B, z) {
        var A = v(G, F);
        var E = l(G, F) + 1;
        A.o[A.k] = E;
        m(E, s, s, 0);
        return ++B
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) - l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        e[D] = 0;
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(+l(E, D), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) <= l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) && l(C, B), s, s, 0);
        return ++A
    }
    , function(F, E, D, B, A, z) {
        var C = l(F, E);
        m(h.splice(h.length - C, C).map(w), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) % l(C, B), s, s, 0);
        return ++A
    }
    , function(G, E, C, B, A, z) {
        var F = v(G, E);
        var D = l(C, B);
        if (F.r) {
            m(0, F.o[F.k], D, 1)
        } else {
            if (F.v[D] == s) {
                F.v[D] = 0
            }
            m(0, F.v, D, 1)
        }
        return ++A
    }
    , function(G, F, D, C, B, z) {
        var A = v(G, F);
        var E = l(G, F);
        m(E, s, s, 0);
        A.o[A.k] = E + 1;
        return ++B
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) >= l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) ^ l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) >> l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(typeof l(E, D), s, s, 0);
        return ++A
    }
    , function(G, F, D, C, B, z) {
        var A = v(G, F);
        var E = l(G, F);
        m(E, s, s, 0);
        A.o[A.k] = E - 1;
        return ++B
    }
    , function(E, D, C, B, A, z) {
        j();
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) === l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        return Infinity
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) > l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        return ++A
    }
    , function(G, F, D, C, B, z) {
        var A = v(G, F);
        var E = l(D, C);
        A.o[A.k] = E;
        return ++B
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) != l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D), s, s, 0);
        return ++A
    }
    , function(I, H, G, F, E, D) {
        var B = l(I, H);
        if (h.length < B) {
            return ++E
        }
        var C = h.splice(h.length - B, B).map(w);
        var z = h.pop();
        var A = w(z);
        m(A.apply(z.o, C), s, s, 0);
        return ++E
    }
    , function(E, D, C, B, A, z) {
        return (!w(f[0])) ? l(E, D) : ++A
    }
    , function(E, D, C, B, A, z) {
        m(~l(E, D), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) == l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        return w(f[0]) ? l(E, D) : ++A
    }
    , function(E, D, C, B, A, z) {
        m(l(E, D) !== l(C, B), s, s, 0);
        return ++A
    }
    , function(E, D, C, B, A, z) {
        q();
        return Infinity
    }
    ];
    return o(r)
}
;
Sanctuary.Leo.LightningPlasma({
    "b": "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",
    "d": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 26, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 4, "join", "", 1, 9, 5, 8, 6, 10, 2147483647, 214013, 2531011, 0, 1552287018854, 414, 479, 482, 508, 256, 398, "0x", 384, 16, 367, 2, 360, 511, 563, 566, 608, 14, 25, 3, 62, 49, 38, 255, 11, " ", "(", ")", "{", "[", "]", "}", 15]
});

function get_hash_code(c,a,s,m){
tc = []
md = function (n, m, k) {
    var p;
    if (t[m])
        return t[m];
    if (m == 1) {
        t[m] = n % k;
        return t[m]
    }
    if (m & 1) {
        p = (m - 1) >> 1;
        t[1] = n % k;
        t[m] = (md(n, p, k) + md(n, p, k) + n % k) % k;
        return t[m]
    }
    p = m >> 1;
    t[m] = (md(n, p, k) + md(n, p, k)) % k;
    return t[m]
}
rd = function () {
    t = [0];
    s = (md(a, s, m) + c % m) % m;
    return s
}
for (var i = 0; i < 256; i++) {
    var r = '0x';
    for (var j = 0; j < 8; j++) {
        r += (rd() % 16).toString(16)
    }
    tc.push(parseInt(r, 16))
}

function hashCode() {
    var _0x24e50e = {
        'pmqAv': function _0x3bc67a(_0x21f6a6, _0xeed6f) {
            return _0x21f6a6 < _0xeed6f;
        },
        'tUguD': function _0x529e47(_0x6476ea, _0x5ee855) {
            return _0x6476ea ^ _0x5ee855;
        },
        'bTlKh': function _0x4d3092(_0x4010ff, _0xde8cef) {
            return _0x4010ff ^ _0xde8cef;
        },
        'PFtAy': function _0x59e07b(_0x3240f1, _0x482071) {
            return _0x3240f1 & _0x482071;
        },
        'DppDN': function _0x580566(_0x3bb80b, _0x142af4) {
            return _0x3bb80b >> _0x142af4;
        },
        'WavRi': function _0x1cb726(_0x320a0b, _0x1acb93) {
            return _0x320a0b & _0x1acb93;
        },
        'EcTAI': function _0x22ee49(_0x3277f3, _0x196702) {
            return _0x3277f3 >> _0x196702;
        },
        'ZjAoT': function _0x1c129a(_0x52c557, _0x5722fa) {
            return _0x52c557 & _0x5722fa;
        }
    };
    var _0x328279 = _0x3eceb6 = this.length
        , _0x5da81b = 0x0;
    for (; _0x24e50e.pmqAv(_0x5da81b, _0x3eceb6); _0x5da81b++) {
        var _0x238d5f = this.charCodeAt(_0x5da81b);
        if (_0x238d5f >> 0x8) {
            _0x328279 = _0x24e50e[_0x4f05('0x7', '\x6f\x79\x59\x26')](_0x328279 >> 0x8, tc[_0x24e50e['\x62\x54\x6c\x4b\x68'](_0x24e50e[_0x4f05('0x8', '\x6a\x66\x4d\x25')](_0x328279, 0xff), _0x24e50e[_0x4f05('0x9', '\x42\x73\x36\x74')](_0x238d5f, 0x8))]);
            _0x238d5f = _0x24e50e[_0x4f05('0xa', '\x21\x21\x23\x33')](_0x238d5f, 0xff);
        }
        _0x328279 = _0x24e50e.EcTAI(_0x328279, 0x8) ^ tc[_0x24e50e.bTlKh(_0x24e50e.ZjAoT(_0x328279, 0xff), _0x238d5f)];
    }
    return _0x328279;
}
return hashCode
}
c = 0x269ec3,
a = 0x343fd,
s = 1552287018864,// 这几个值是前端网页动态生成的，最好定时更新。
m = 0x7FFFFFFF
String.prototype.hashCode = get_hash_code(c,a,s,m)
function get_cookies(text) {
    let fcerror = get_fcerror(text)
    let _zQdjfing = get_zQdjfing(fcerror)
    let _hotelnewguid = get_hotelnewguid(text)
    return {fcerror:fcerror,_zQdjfing:_zQdjfing,_hotelnewguid:_hotelnewguid}
}
function get_zQdjfing(fcerror) {
return fcerror.replace(/.{1}/g, (item)=> {

            return Math.abs((item + 32).hashCode()).toString(0x10).substr(0x0, 0x6);
        });
}

function get_hotelnewguid(hotelid) {
    return (Math.abs(hotelid.hashcode())+'').replace(/.{1}/g, function(_0x4cf606) {
                        return Math['abs']((_0x4cf606+ 13).hashcode()).toString(0x10).substr(0x0, 0x6);
                    });
}

function get_fcerror(text) {
    return  Math.abs(text.hashCode())+"";
}
console.log(get_hotelnewguid('6410223'))

// console.log(get_fcerror("6410223Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"))
// console.log(get_fcerror("6410223Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"))
