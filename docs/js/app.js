(function (t) {
  function n(n) {
    for (var s, r, c = n[0], o = n[1], l = n[2], u = 0, _ = []; u < c.length; u++) r = c[u], Object.prototype.hasOwnProperty.call(a, r) && a[r] && _.push(a[r][0]), a[r] = 0;
    for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
    v && v(n);
    while (_.length) _.shift()();
    return i.push.apply(i, l || []), e()
  }

  function e() {
    for (var t, n = 0; n < i.length; n++) {
      for (var e = i[n], s = !0, c = 1; c < e.length; c++) {
        var o = e[c];
        0 !== a[o] && (s = !1)
      }
      s && (i.splice(n--, 1), t = r(r.s = e[0]))
    }
    return t
  }
  var s = {},
    a = {
      app: 0
    },
    i = [];

  function r(n) {
    if (s[n]) return s[n].exports;
    var e = s[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(e.exports, e, e.exports, r), e.l = !0, e.exports
  }
  r.m = t, r.c = s, r.d = function (t, n, e) {
    r.o(t, n) || Object.defineProperty(t, n, {
      enumerable: !0,
      get: e
    })
  }, r.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, r.t = function (t, n) {
    if (1 & n && (t = r(t)), 8 & n) return t;
    if (4 & n && "object" === typeof t && t && t.__esModule) return t;
    var e = Object.create(null);
    if (r.r(e), Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      }), 2 & n && "string" != typeof t)
      for (var s in t) r.d(e, s, function (n) {
        return t[n]
      }.bind(null, s));
    return e
  }, r.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t["default"]
    } : function () {
      return t
    };
    return r.d(n, "a", n), n
  }, r.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n)
  }, r.p = "/mogamiya_vue/";
  var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
    o = c.push.bind(c);
  c.push = n, c = c.slice();
  for (var l = 0; l < c.length; l++) n(c[l]);
  var v = o;
  i.push([0, "chunk-vendors"]), e()
})({
  0: function (t, n, e) {
    t.exports = e("56d7")
  },
  "0bfe": function (t, n, e) {
    t.exports = e.p + "img/店舗ロゴ背景透明化.png"
  },
  "10cb": function (t, n, e) {
    t.exports = e.p + "img/金華豚証明書.jpg"
  },
  1544: function (t, n, e) {
    "use strict";
    var s = e("f24d"),
      a = e.n(s);
    a.a
  },
  1552: function (t, n, e) {
    "use strict";
    var s = e("8139"),
      a = e.n(s);
    a.a
  },
  "167d": function (t, n, e) {
    t.exports = e.p + "img/純粋金華豚1.jpg"
  },
  1905: function (t, n, e) {
    t.exports = e.p + "img/総称山形牛1.jpg"
  },
  3283: function (t, n, e) {
    "use strict";
    var s = e("7651"),
      a = e.n(s);
    a.a
  },
  "39f6": function (t, n, e) {},
  "4f02": function (t, n) {
    t.exports = "data:image/png;base64,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"
  },
  "56d7": function (t, n, e) {
    "use strict";
    e.r(n);
    e("e260"), e("e6cf"), e("cca6"), e("a79d");
    var s = e("2b0e"),
      a = function () {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("div", {
          attrs: {
            id: "app"
          }
        }, [e("MainHeader"), e("router-view"), e("div", {
          staticClass: "mainfooter"
        }, [e("MainFooter")], 1), e("transition", {
          attrs: {
            name: "fade"
          }
        }, [e("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.scY > 10,
            expression: "scY > 10"
          }],
          attrs: {
            id: "pagetop"
          },
          on: {
            click: t.toTop
          }
        }, [e("a", [t._v("トップへ")])])])], 1)
      },
      i = [],
      r = function () {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("div", {
          attrs: {
            id: "app"
          }
        }, [e("div", {
          staticClass: "wrap"
        }, [e("header", {
          staticClass: "header"
        }, [e("div", {
          attrs: {
            id: "gnav__toggle"
          },
          on: {
            click: function (n) {
              return t.openToggle()
            }
          }
        }, [e("span", {
          staticClass: "gnav__toggle__icon"
        }), e("span", {
          staticClass: "gnav__toggle__icon"
        }), e("span", {
          staticClass: "gnav__toggle__icon"
        }), t._v("menu ")]), e("div", {
          attrs: {
            id: "gnav__list"
          },
          on: {
            click: function (n) {
              return t.closeToggle()
            }
          }
        }, [e("ul", [e("li", [e("router-link", {
          attrs: {
            to: "/"
          }
        }, [t._v("ホーム")])], 1), e("li", [e("router-link", {
          attrs: {
            to: "/yamagatagyu"
          }
        }, [t._v("総称山形牛")])], 1), e("li", [e("router-link", {
          attrs: {
            to: "/kinkabuta"
          }
        }, [t._v("純粋金華豚")])], 1), e("li", [e("router-link", {
          attrs: {
            to: "/yonezawabuta"
          }
        }, [t._v("米澤豚")])], 1), e("li", [e("router-link", {
          attrs: {
            to: "/shopinfo"
          }
        }, [t._v("店舗情報")])], 1), t._m(0)])])])])])
      },
      c = [function () {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("li", [e("a", {
          attrs: {
            href: "http://www.110298.com/"
          }
        }, [t._v("通販ページ")])])
      }],
      o = {
        name: "MainHeader",
        methods: {
          openToggle: function () {
            document.getElementById("gnav__toggle").classList.toggle("open"), document.getElementById("gnav__list").classList.toggle("open")
          },
          closeToggle: function () {
            document.getElementById("gnav__toggle").classList.remove("open"), document.getElementById("gnav__list").classList.remove("open")
          }
        },
        mounted: function () {
          window.addEventListener("resize", (function () {
            var t = window.innerWidth;
            t > 620 && (document.getElementById("gnav__toggle").classList.remove("open"), document.getElementById("gnav__list").classList.remove("open"))
          }), !1)
        }
      },
      l = o,
      v = (e("9749"), e("2877")),
      u = Object(v["a"])(l, r, c, !1, null, "00045349", null),
      _ = u.exports,
      p = function () {
        var t = this,
          n = t.$createElement;
        t._self._c;
        return t._m(0)
      },
      d = [function () {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("div", {
          staticClass: "footer"
        }, [e("p", {
          staticClass: "footer__inner"
        }, [t._v(" © 2020 最上屋 ")])])
      }],
      f = {
        name: "MainFooter"
      },
      g = f,
      m = (e("1552"), Object(v["a"])(g, p, d, !1, null, "8b03abbc", null)),
      b = m.exports,
      h = {
        name: "app",
        components: {
          MainHeader: _,
          MainFooter: b
        },
        data: function () {
          return {
            scTimer: 0,
            scY: 0
          }
        },
        created: function () {
          window.addEventListener("scroll", this.handleScroll)
        },
        beforeDestroy: function () {
          window.removeEventListener("scroll", this.handleScroll)
        },
        methods: {
          toTop: function () {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          },
          handleScroll: function () {
            var t = this;
            this.scTimer || (this.scTimer = setTimeout((function () {
              t.scY = window.scrollY, clearTimeout(t.scTimer), t.scTimer = 0
            }), 100))
          }
        }
      },
      A = h,
      C = (e("5c0b"), Object(v["a"])(A, a, i, !1, null, null, null)),
      w = C.exports,
      x = e("8c4f"),
      T = function () {
        var t = this,
          n = t.$createElement;
        t._self._c;
        return t._m(0)
      },
      y = [function () {
        var t = this,
          n = t.$createElement,
          s = t._self._c || n;
        return s("div", {
          staticClass: "wrap"
        }, [s("p", {
          staticClass: "logo"
        }, [s("img", {
          attrs: {
            src: e("0bfe"),
            alt: "最上屋ロゴマーク"
          }
        })]), s("div", {
          staticClass: "main"
        }, [s("div", {
          staticClass: "content"
        }, [s("h3", {
          staticClass: "content__ttl"
        }, [t._v(" 本当においしいお肉をお届けしたい。 ")]), s("div", {
          staticClass: "content__txt"
        }, [s("p", [t._v(" 「本当においしいお肉だけをお届けしたい。」"), s("br"), t._v(" そんな想いで私たちは「最上屋」をつくりました。"), s("br"), t._v(" 総称山形牛を中心にA4・A5ランクの雌牛（処女牛）を仕入れており、去勢牛、交雑種は一切扱っておりません。"), s("br"), t._v(" 平田牧場から超希少価値のある幻の豚「純粋金華豚」を直接仕入れております。 ")])])]), s("div", {
          staticClass: "content"
        }, [s("h3", {
          staticClass: "content__ttl"
        }, [t._v(" “雌牛”へのこだわり ")]), s("div", {
          staticClass: "content__txt"
        }, [s("p", [t._v(" 雌牛の肉質はキメ細やかで、口どけなめらかな脂は、融点が低く甘みがあり、さっぱりとしています。"), s("br"), t._v(" 「サシの入ったお肉はあまり食べられない」"), s("br"), t._v(" 「脂で胃もたれする」"), s("br"), t._v(" そういった方にも食べていただきたく、当店は雌牛にこだわって仕入れております。 ")])])])])])
      }],
      j = (e("9a9a"), {}),
      O = Object(v["a"])(j, T, y, !1, null, "ca7e7b16", null),
      D = O.exports,
      E = function () {
        var t = this,
          n = t.$createElement;
        t._self._c;
        return t._m(0)
      },
      Y = [function () {
        var t = this,
          n = t.$createElement,
          s = t._self._c || n;
        return s("div", {
          staticClass: "wrap"
        }, [s("div", {
          staticClass: "main"
        }, [s("h2", {
          staticClass: "heading"
        }, [t._v("総称山形牛")]), s("div", {
          staticClass: "content"
        }, [s("img", {
          staticClass: "content__img--big",
          attrs: {
            src: e("1905"),
            alt: "山形牛ロースの写真"
          }
        }), s("div", [s("h3", {
          staticClass: "content__ttl"
        }, [t._v(" “味の山形牛”とも言われる最上級のブランド黒毛和牛 ")]), s("p", {
          staticClass: "content__txt"
        }, [t._v(" 総称山形牛は、山形県内において最も長く育成・飼育された黒毛和種であり、社団法人日本食肉格付協会の定める肉質等級4以上のものであることが、 出荷に対して基準として設けられています。"), s("br"), t._v(" 通常は月齢8~11ヶ月の子牛から育て、出荷は30~36ヶ月。しかし寒暖の差が大きい山形県では、じっくりゆっくり増体するため、出荷までもう少しかかります。 そのため、肉質はきめ細やかでサシ(脂肪交雑)も非常に良い状態に仕上がるのです。"), s("br"), t._v(" そして、山形県は清流の宝庫であり、その良質な水が良い肉牛になるための好条件なのです。"), s("br"), s("br"), t._v(" 当店では、その山形牛の中から特に上質の“A4・A5ランクの雌牛（処女牛）”を厳選して仕入れています。 ")])])]), s("div", {
          staticClass: "content"
        }, [s("img", {
          staticClass: "content__img--small",
          attrs: {
            src: e("ed7b"),
            alt: "山形牛切落しの写真"
          }
        }), s("div", {
          staticClass: "content__inner"
        }, [s("h3", {
          staticClass: "content__ttl"
        }, [t._v(" ①家柄よし ")]), s("p", {
          staticClass: "content__txt"
        }, [t._v(" 産地、生産者が確かなので安全・安心です。"), s("br"), t._v(" 飼料の安全性をはじめ、産地や生産者が確かな山形牛だけに設定しています。"), s("br"), t._v(" 個体識別番号以外にも、子牛登記証明書、産地証明書、牛肉安全確認証などがついています。 ")]), s("h3", {
          staticClass: "content__ttl"
        }, [t._v(" ②育ちよし ")]), s("p", {
          staticClass: "content__txt"
        }, [t._v(" 良質な肉質を育む自然環境です。"), s("br"), t._v(" 昼と夜の寒暖差と、夏と冬の厳しさがキメ細やかな肉目を作ります。"), s("br"), t._v(" 絹のような霜降りと口の中でとろける上品な味わいは、その気候風土と愛情の恵みです。 ")])])])])])
      }],
      H = (e("3283"), {}),
      z = Object(v["a"])(H, E, Y, !1, null, "dc76eb6e", null),
      B = z.exports,
      M = function () {
        var t = this,
          n = t.$createElement;
        t._self._c;
        return t._m(0)
      },
      P = [function () {
        var t = this,
          n = t.$createElement,
          s = t._self._c || n;
        return s("div", {
          staticClass: "wrap"
        }, [s("div", {
          staticClass: "main"
        }, [s("h2", {
          staticClass: "headding"
        }, [t._v("純粋金華豚")]), s("div", {
          staticClass: "content"
        }, [s("h3", {
          staticClass: "content__ttl"
        }, [t._v(" 国内で限られた生産量（1日2～3頭）「純粋金華豚」ってどういう豚？ ")]), s("p", {
          staticClass: "content__txt"
        }, [t._v(" 1988年に平田牧場が中国より導入しました。 "), s("br"), t._v(" もともと純粋金華豚は中国浙江省金華が原産の豚で、 "), s("br"), t._v(" 最高級中華食材「金華ハム」の原料として知られています。 "), s("br"), t._v(" 掛合せた平牧金華豚ではありません！ "), s("br"), t._v(" 掛合せていない金華豚、それが「純粋金華豚」です。 ")]), s("h3", {
          staticClass: "content__ttl"
        }, [t._v(" 高価で希少、幻と言われる豚 ")]), s("p", {
          staticClass: "content__txt"
        }, [t._v(" 頭と尻尾だけが黒い独特の風貌は金華豚純粋種の証です。 "), s("br"), t._v(" パークシャー種（黒豚）よりもさらに小さく、さらに成熟日数も多く "), s("br"), t._v(" かかる品種であることが、高価で希少、幻と言われる由縁です。 "), s("br"), t._v(" 身体が小さく成熟日数も長くかかるため経済効率が悪く、 "), s("br"), t._v(" 非常に割高な豚肉になってしまいます。 "), s("br"), t._v(" おこめ育ち金華豚は、普通の豚肉と比べ優れた味わいを持っていますので、"), s("br"), t._v(" 格段の違いを実感して頂けることでしょう。 ")])]), s("div", {
          staticClass: "content__img"
        }, [s("p", [s("img", {
          attrs: {
            src: e("167d"),
            alt: "金華豚ロースの写真"
          }
        })]), s("p", [s("img", {
          attrs: {
            src: e("efb7"),
            alt: "金華豚切落しの写真"
          }
        })]), s("p", [s("img", {
          attrs: {
            src: e("65d1"),
            alt: "金華豚の写真"
          }
        })])]), s("div", {
          staticClass: "content"
        }, [s("h3", {
          staticClass: "content__ttl"
        }, [t._v("①飼育環境へのこだわり")]), s("p", {
          staticClass: "content__txt"
        }, [t._v(" 一般的な豚よりも長めに、純粋金華豚は約230日、肥育しています（一般豚約160日）。 "), s("br"), t._v(" 開放豚舎で、のびのびとゆっくり育てることで、ストレスを感じない健康な豚が育ちます。 "), s("br"), t._v(" 衛生環境のよい豚舎で育てることで、豚特有の臭みがありません。 ")]), s("h3", {
          staticClass: "content__ttl"
        }, [t._v("②飼料へのこだわり")]), s("p", {
          staticClass: "content__txt"
        }, [t._v(" 餌には遺伝子組み換えのない（NON-GMO）、トウモロコシ、大豆粕、大麦、飼料用米を与えています。 "), s("br"), t._v(" NON-GMOの選別は現代では大変難しくなってきています。さらにトウモロコシはポストハーベストフリー（PHF）（収穫後、無農薬）のものを使用。 ")]), s("h3", {
          staticClass: "content__ttl"
        }, [t._v("③飼料用米について")]), s("p", {
          staticClass: "content__txt"
        }, [t._v(" 山形県の使っていない田んぼ（休耕田）を利用して餌の米を作ることによって、日本の食糧自給率の向上へも貢献しています。 "), s("br"), t._v(" 食味もさらにアップ！脂が甘くなります。 ")])]), s("div", {
          staticClass: "kinkabuta-certificate"
        }, [s("img", {
          attrs: {
            src: e("10cb"),
            alt: "最上屋は「平田牧場純粋金華豚」の正規取扱店です。"
          }
        })])])])
      }],
      N = (e("1544"), {}),
      F = Object(v["a"])(N, M, P, !1, null, "6dc0abba", null),
      L = F.exports,
      k = function () {
        var t = this,
          n = t.$createElement;
        t._self._c;
        return t._m(0)
      },
      K = [function () {
        var t = this,
          n = t.$createElement,
          s = t._self._c || n;
        return s("div", {
          staticClass: "wrap"
        }, [s("div", {
          staticClass: "main"
        }, [s("h2", {
          staticClass: "headding"
        }, [t._v("米澤豚一番育ち")]), s("div", {
          staticClass: "content"
        }, [s("div", [s("h3", {
          staticClass: "content__ttl"
        }, [t._v(" おいしい！ヘルシー！米澤豚一番育ち ")]), s("p", {
          staticClass: "content__txt"
        }, [t._v(" 豚肉は、おいしい、値段も手頃、その上、ビタミン、ミネラルも豊富です。 "), s("br"), t._v(" お肉の消費量第一位で、「とんかつ」、「豚しゃぶ」 "), s("br"), t._v(" など年齢を問わず皆様に愛させております。 "), s("br"), t._v(" 老化予防や疲労回復にも効果があると言われて "), s("br"), t._v(" おり、女性にも人気があります。 ")]), s("br"), s("p", {
          staticClass: "content__txt"
        }, [t._v(" 当店ではそのような豚肉の中でも "), s("br"), t._v(" 「こだわりの豚肉=米澤豚一番育ち」を取り扱っております。 "), s("br"), t._v(" お中元、お歳暮、記念日の贈答用として、満足して頂ける一品です。 ")])])]), s("div", {
          staticClass: "content"
        }, [s("div", [s("h3", {
          staticClass: "content__ttl"
        }, [t._v(" 老化防止・美肌効果ビタミンEをたっぷり ")]), s("p", {
          staticClass: "content__txt"
        }, [t._v(" 抗酸化作用のあるビタミンEは血行をよくしたり、美肌や若さを保つ働きがあるといわれています。"), s("br"), t._v(" また、豚肉そのものの酸化が抑制され鮮度も長く保たれ旨味が長持ちします。 ")])]), s("img", {
          staticClass: "section2_img",
          attrs: {
            src: e("4f02")
          }
        })]), s("div", {
          staticClass: "content"
        }, [s("div", [s("h3", {
          staticClass: "content__ttl"
        }, [t._v("①飼育環境へのこだわり")]), s("p", {
          staticClass: "content__txt"
        }, [t._v(" きれい好きな動物の豚は、清潔な豚舎づくりが最も重要なポイントです。女性スタッフによる、心配りのゆき届いた管理体制、清潔、消毒などに厳しい目を配り健康な豚に育てています。 "), s("br"), t._v(" 女性特有の感性と優しい愛情で、ストレスを与えず穏和に育てることが、よい豚肉、おいしい肉づくりのポイントです。 ")])]), s("div", [s("h3", {
          staticClass: "content__ttl"
        }, [t._v("②飼料へのこだわり")]), s("p", {
          staticClass: "content__txt"
        }, [t._v(" 肉の甘みを引き出すトウモロコシ、麦類、ビタミンをたくさん含んだ海藻など、最高の肉質に仕上げるため、独自にブレンドしたこだわりの飼料で育てられています。 "), s("br"), t._v(" 豚肉の質は、その豚が日々食べている飼料で決まるといっても過言ではありません。 ")])])])])])
      }],
      X = {
        name: "Yonezawabuta"
      },
      W = X,
      J = (e("e14d"), Object(v["a"])(W, k, K, !1, null, "f37bade8", null)),
      Q = J.exports,
      q = function () {
        var t = this,
          n = t.$createElement;
        t._self._c;
        return t._m(0)
      },
      R = [function () {
        var t = this,
          n = t.$createElement,
          s = t._self._c || n;
        return s("div", {
          staticClass: "wrap"
        }, [s("div", {
          staticClass: "content"
        }, [s("h2", {
          staticClass: "headding"
        }, [t._v("店舗情報")]), s("table", {
          staticClass: "table"
        }, [s("tr", [s("th", [t._v("店名")]), s("td", [t._v("最上屋")])]), s("tr", [s("th", [t._v("所在地")]), s("td", [t._v("〒562-0035 大阪府箕面市船場東3-10-28")])]), s("tr", [s("th", [t._v("電話")]), s("td", [t._v("072-729-1551")])]), s("tr", [s("th", [t._v("FAX")]), s("td", [t._v("072-729-1561")])]), s("tr", [s("th", [t._v("Email")]), s("td", [t._v("mogamiya@110298.com")])]), s("tr", [s("th", [t._v("営業時間")]), s("td", [t._v(" 午前10時00分～午後7時00分 "), s("br"), t._v(" 定休日:木曜日 ※祝日の場合は営業 ")])])])]), s("div", {
          staticClass: "content"
        }, [s("h2", {
          staticClass: "headding"
        }, [t._v("店舗風景")]), s("div", {
          staticClass: "content__img"
        }, [s("img", {
          attrs: {
            src: e("f670"),
            alt: "店舗外観の写真"
          }
        }), s("img", {
          attrs: {
            src: e("a0ed"),
            alt: "店内全体の写真"
          }
        })])])])
      }],
      Z = (e("6777"), {}),
      V = Object(v["a"])(Z, q, R, !1, null, "0000bcdc", null),
      S = V.exports;
    s["a"].use(x["a"]);
    var G = new x["a"]({
        mode: "history",
        base: "/mogamiya_vue/",
        routes: [{
          path: "/",
          name: "Home",
          component: D
        }, {
          path: "/yamagatagyu",
          name: "Yamagatagyu",
          component: B
        }, {
          path: "/kinkabuta",
          name: "Kinkabuta",
          component: L
        }, {
          path: "/yonezawabuta",
          name: "Yonezawabuta",
          component: Q
        }, {
          path: "/shopinfo",
          name: "ShopInfo",
          component: S
        }],
        scrollBehavior: function (t, n, e) {
          return e || (t.hash ? {
            selector: t.hash
          } : {
            x: 0,
            y: 0
          })
        }
      }),
      U = e("f309");
    s["a"].use(U["a"]);
    var I = new U["a"]({});
    s["a"].config.productionTip = !1, new s["a"]({
      router: G,
      vuetify: I,
      render: function (t) {
        return t(w)
      }
    }).$mount("#app")
  },
  "5c0b": function (t, n, e) {
    "use strict";
    var s = e("7694"),
      a = e.n(s);
    a.a
  },
  "65d1": function (t, n, e) {
    t.exports = e.p + "img/純粋金華豚3.jpg"
  },
  6777: function (t, n, e) {
    "use strict";
    var s = e("e022"),
      a = e.n(s);
    a.a
  },
  7651: function (t, n, e) {},
  7694: function (t, n, e) {},
  8139: function (t, n, e) {},
  9749: function (t, n, e) {
    "use strict";
    var s = e("39f6"),
      a = e.n(s);
    a.a
  },
  "9a9a": function (t, n, e) {
    "use strict";
    var s = e("a4dd"),
      a = e.n(s);
    a.a
  },
  a0ed: function (t, n, e) {
    t.exports = e.p + "img/店内全体.jpg"
  },
  a4dd: function (t, n, e) {},
  b985: function (t, n, e) {},
  e022: function (t, n, e) {},
  e14d: function (t, n, e) {
    "use strict";
    var s = e("b985"),
      a = e.n(s);
    a.a
  },
  ed7b: function (t, n, e) {
    t.exports = e.p + "img/総称山形牛2.jpg"
  },
  efb7: function (t, n, e) {
    t.exports = e.p + "img/純粋金華豚2.jpg"
  },
  f24d: function (t, n, e) {},
  f670: function (t, n, e) {
    t.exports = e.p + "img/店舗外観.jpg"
  }
});