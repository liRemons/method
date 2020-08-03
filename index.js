module.exports = (function (e) {
  var r = {};
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  return (
    (t.m = e),
    (t.c = r),
    (t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, r) {
      if ((1 & r && (e = t(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (t.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & r && "string" != typeof e)
      )
        for (var o in e)
          t.d(
            n,
            o,
            function (r) {
              return e[r];
            }.bind(null, o)
          );
      return n;
    }),
    (t.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(r, "a", r), r;
    }),
    (t.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (t.p = ""),
    t((t.s = 0))
  );
})([
  function (e, r, t) {
    "use strict";
    var n = t(1);
    e.exports = {
      dateFormat: n.dateFormat,
      deepClone: n.deepClone,
      removeArrRepeat: n.removeArrRepeat,
      arrSUM: n.arrSUM,
      arrFlat: n.arrFlat,
      arrGroup: n.arrGroup,
      IsPC: n.IsPC,
      SUM: n.SUM,
    };
  },
  function (e, r, t) {
    "use strict";
    var n =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    e.exports = {
      dateFormat: function (e, r) {
        function t(e) {
          return e < 10 ? "0" + e : e;
        }
        var n = void 0,
          o = (n =
            e && "number" == typeof e
              ? new Date(e)
              : e && "string" == typeof e
              ? new Date(parseInt(e))
              : new Date()).getFullYear(),
          u = t(n.getMonth() + 1),
          a = t(n.getDate()),
          i = t(n.getHours()),
          f = t(n.getMinutes()),
          c = t(n.getSeconds()),
          l = o + "-" + u + "-" + a + " " + i + ":" + f + ":" + c;
        return (
          "yyyy/MM/dd HH:mm:ss" == r
            ? (l = o + "/" + u + "/" + a + " " + i + ":" + f + ":" + c)
            : "yyyy/MM/dd" == r
            ? (l = o + "/" + u + "/" + a)
            : "yyyy-MM-dd" == r
            ? (l = o + "-" + u + "-" + a)
            : "HH:mm:ss" == r && (l = i + ":" + f + ":" + c),
          l
        );
      },
      deepClone: function e(r) {
        var t = {};
        for (var o in r)
          Object.prototype.hasOwnProperty.call(r, o) &&
            ("object" === n(r[o]) ? (t[o] = e(r[o])) : (t[o] = r[o]));
        return t;
      },
      removeArrRepeat: function (e, r) {
        var t = {};
        return (e = e.reduce(function (e, n) {
          return !t[n[r]] && (t[n[r]] = e.push(n)), e;
        }, []));
      },
      arrSUM: function (e) {
        return e.reduce(function (e, r) {
          return e + r;
        });
      },
      arrFlat: function e(r) {
        return (
          r instanceof Array &&
            r.forEach(function (t) {
              t instanceof Array ? (t = e(t)) : (r = r.flat());
            }),
          r
        );
      },
      arrGroup: function (e, r) {
        if ("number" == typeof r) {
          if (e instanceof Array) {
            for (var t = [], o = 0, u = e.length; o < u; o += r)
              t.push(e.slice(o, o + r));
            return t;
          }
          var a = void 0 === e ? "undefined" : n(e);
          return console.error("The expected array, get" + a), e;
        }
        console.error("The second parameter should be a number");
      },
      IsPC: function () {
        for (
          var e = navigator.userAgent,
            r = [
              "Android",
              "iPhone",
              "SymbianOS",
              "Windows Phone",
              "iPad",
              "iPod",
            ],
            t = !0,
            n = 0;
          n < r.length;
          n++
        )
          if (e.indexOf(r[n]) > 0) {
            t = !1;
            break;
          }
        return t;
      },
      SUM: function (e, r) {
        var t = void 0;
        return (
          e.forEach(function (e) {
            "number" == typeof e && (t = "number");
          }),
          "number" === t
            ? e.reduce(function (e, r) {
                return e + r;
              })
            : e.reduce(function (e, t) {
                return e + t[r];
              }, 0)
        );
      },
    };
  },
]);
