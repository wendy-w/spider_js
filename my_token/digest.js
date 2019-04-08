var utils = {
    stringToBytes: function (t) {
        for (var e = [], n = 0; n < t.length; n++)
            e.push(255 & t.charCodeAt(n));
        return e
    },
    bytesToWords: function (t) {
        for (var e = [], n = 0, r = 0; n < t.length; n++,
            r += 8)
            e[r >>> 5] |= t[n] << 24 - r % 32;
        return e
    },
    rotl: function (t, e) {
        return t << e | t >>> 32 - e
    },
    endian: function (t) {
        if (t.constructor == Number)
            return 16711935 & utils.rotl(t, 8) | 4278255360 & utils.rotl(t, 24);
        for (var e = 0; e < t.length; e++)
            t[e] = utils.endian(t[e]);
        return t
    },
    wordsToBytes: function (t) {
        for (var e = [], n = 0; n < 32 * t.length; n += 8)
            e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
        return e
    },
    bytesToHex: function (t) {
        for (var e = [], n = 0; n < t.length; n++)
            e.push((t[n] >>> 4).toString(16)),
                e.push((15 & t[n]).toString(16));
        return e.join("")
    }

}

var digest = function (t) {
    t = utils.stringToBytes(t + "9527" + t.substr(0, 6))
    for (var n = utils.bytesToWords(t), c = 8 * t.length, s = 1732584193, f = -271733879, l = -1732584194, p = 271733878, d = 0; d < n.length; d++)
        n[d] = 16711935 & (n[d] << 8 | n[d] >>> 24) | 4278255360 & (n[d] << 24 | n[d] >>> 8);
    n[c >>> 5] |= 128 << c % 32
    n[14 + (c + 64 >>> 9 << 4)] = c
    h = function (t, e, n, r, o, i, a) {
        var u = t + (e & n | ~e & r) + (o >>> 0) + a;
        return (u << i | u >>> 32 - i) + e
    }
    v = function (t, e, n, r, o, i, a) {
        var u = t + (e & r | n & ~r) + (o >>> 0) + a;
        return (u << i | u >>> 32 - i) + e
    }
    y = function (t, e, n, r, o, i, a) {
        var u = t + (e ^ n ^ r) + (o >>> 0) + a;
        return (u << i | u >>> 32 - i) + e
    }
    g = function (t, e, n, r, o, i, a) {
        var u = t + (n ^ (e | ~r)) + (o >>> 0) + a;
        return (u << i | u >>> 32 - i) + e
    }
    for (d = 0; d < n.length; d += 16) {
        var m = s, b = f, _ = l, w = p;
        f = g(f = g(f = g(f = g(f = y(f = y(f = y(f = y(f = v(f = v(f = v(f = v(f = h(f = h(f = h(f = h(f, l = h(l, p = h(p, s = h(s, f, l, p, n[d + 0], 7, -680876936), f, l, n[d + 1], 12, -389564586), s, f, n[d + 2], 17, 606105819), p, s, n[d + 3], 22, -1044525330), l = h(l, p = h(p, s = h(s, f, l, p, n[d + 4], 7, -176418897), f, l, n[d + 5], 12, 1200080426), s, f, n[d + 6], 17, -1473231341), p, s, n[d + 7], 22, -45705983), l = h(l, p = h(p, s = h(s, f, l, p, n[d + 8], 7, 1770035416), f, l, n[d + 9], 12, -1958414417), s, f, n[d + 10], 17, -42063), p, s, n[d + 11], 22, -1990404162), l = h(l, p = h(p, s = h(s, f, l, p, n[d + 12], 7, 1804603682), f, l, n[d + 13], 12, -40341101), s, f, n[d + 14], 17, -1502002290), p, s, n[d + 15], 22, 1236535329), l = v(l, p = v(p, s = v(s, f, l, p, n[d + 1], 5, -165796510), f, l, n[d + 6], 9, -1069501632), s, f, n[d + 11], 14, 643717713), p, s, n[d + 0], 20, -373897302), l = v(l, p = v(p, s = v(s, f, l, p, n[d + 5], 5, -701558691), f, l, n[d + 10], 9, 38016083), s, f, n[d + 15], 14, -660478335), p, s, n[d + 4], 20, -405537848), l = v(l, p = v(p, s = v(s, f, l, p, n[d + 9], 5, 568446438), f, l, n[d + 14], 9, -1019803690), s, f, n[d + 3], 14, -187363961), p, s, n[d + 8], 20, 1163531501), l = v(l, p = v(p, s = v(s, f, l, p, n[d + 13], 5, -1444681467), f, l, n[d + 2], 9, -51403784), s, f, n[d + 7], 14, 1735328473), p, s, n[d + 12], 20, -1926607734), l = y(l, p = y(p, s = y(s, f, l, p, n[d + 5], 4, -378558), f, l, n[d + 8], 11, -2022574463), s, f, n[d + 11], 16, 1839030562), p, s, n[d + 14], 23, -35309556), l = y(l, p = y(p, s = y(s, f, l, p, n[d + 1], 4, -1530992060), f, l, n[d + 4], 11, 1272893353), s, f, n[d + 7], 16, -155497632), p, s, n[d + 10], 23, -1094730640), l = y(l, p = y(p, s = y(s, f, l, p, n[d + 13], 4, 681279174), f, l, n[d + 0], 11, -358537222), s, f, n[d + 3], 16, -722521979), p, s, n[d + 6], 23, 76029189), l = y(l, p = y(p, s = y(s, f, l, p, n[d + 9], 4, -640364487), f, l, n[d + 12], 11, -421815835), s, f, n[d + 15], 16, 530742520), p, s, n[d + 2], 23, -995338651), l = g(l, p = g(p, s = g(s, f, l, p, n[d + 0], 6, -198630844), f, l, n[d + 7], 10, 1126891415), s, f, n[d + 14], 15, -1416354905), p, s, n[d + 5], 21, -57434055), l = g(l, p = g(p, s = g(s, f, l, p, n[d + 12], 6, 1700485571), f, l, n[d + 3], 10, -1894986606), s, f, n[d + 10], 15, -1051523), p, s, n[d + 1], 21, -2054922799), l = g(l, p = g(p, s = g(s, f, l, p, n[d + 8], 6, 1873313359), f, l, n[d + 15], 10, -30611744), s, f, n[d + 6], 15, -1560198380), p, s, n[d + 13], 21, 1309151649), l = g(l, p = g(p, s = g(s, f, l, p, n[d + 4], 6, -145523070), f, l, n[d + 11], 10, -1120210379), s, f, n[d + 2], 15, 718787259), p, s, n[d + 9], 21, -343485551),
            s = s + m >>> 0,
            f = f + b >>> 0,
            l = l + _ >>> 0,
            p = p + w >>> 0
    }
    return utils.bytesToHex(utils.wordsToBytes(utils.endian([s, f, l, p])))
}
module.exports={
    digest:digest
}