! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 17)
}([function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
}, function(e, t) {
    var n = {},
        r = function(e) {
            var t;
            return function() {
                return void 0 === t && (t = e.apply(this, arguments)), t
            }
        },
        o = r(function() {
            return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
        }),
        i = r(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        a = null,
        c = 0,
        s = [];

    function l(e, t) {
        for (var r = 0; r < e.length; r++) {
            var o = e[r],
                i = n[o.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);
                for (; a < o.parts.length; a++) i.parts.push(h(o.parts[a], t))
            } else {
                var c = [];
                for (a = 0; a < o.parts.length; a++) c.push(h(o.parts[a], t));
                n[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: c
                }
            }
        }
    }

    function u(e) {
        for (var t = [], n = {}, r = 0; r < e.length; r++) {
            var o = e[r],
                i = o[0],
                a = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
            n[i] ? n[i].parts.push(a) : t.push(n[i] = {
                id: i,
                parts: [a]
            })
        }
        return t
    }

    function f(e, t) {
        var n = i(),
            r = s[s.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), s.push(t);
        else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t)
        }
    }

    function p(e) {
        e.parentNode.removeChild(e);
        var t = s.indexOf(e);
        t >= 0 && s.splice(t, 1)
    }

    function d(e) {
        var t = document.createElement("style");
        return t.type = "text/css", f(e, t), t
    }

    function h(e, t) {
        var n, r, o;
        if (t.singleton) {
            var i = c++;
            n = a || (a = d(t)), r = m.bind(null, n, i, !1), o = m.bind(null, n, i, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet", f(e, t), t
        }(t), r = function(e, t) {
            var n = t.css,
                r = t.sourceMap;
            r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var o = new Blob([n], {
                    type: "text/css"
                }),
                i = e.href;
            e.href = URL.createObjectURL(o), i && URL.revokeObjectURL(i)
        }.bind(null, n), o = function() {
            p(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = d(t), r = function(e, t) {
            var n = t.css,
                r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), o = function() {
            p(n)
        });
        return r(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else o()
            }
    }
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        void 0 === (t = t || {}).singleton && (t.singleton = o()), void 0 === t.insertAt && (t.insertAt = "bottom");
        var r = u(e);
        return l(r, t),
            function(e) {
                for (var o = [], i = 0; i < r.length; i++) {
                    var a = r[i];
                    (c = n[a.id]).refs--, o.push(c)
                }
                e && l(u(e), t);
                for (i = 0; i < o.length; i++) {
                    var c;
                    if (0 === (c = o[i]).refs) {
                        for (var s = 0; s < c.parts.length; s++) c.parts[s]();
                        delete n[c.id]
                    }
                }
            }
    };
    var g = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }();

    function m(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = g(t, o);
        else {
            var i = document.createTextNode(o),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
}, , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o, i = n(18),
        a = (n.n(i), n(21));
    n.n(a);

    function c(e) {
        return document.getElementById(e)
    }

    function s(e) {
        c(e).style.display = "block"
    }

    function l(e) {
        e && e.length ? function e(t, n) {
            n = n || 0;
            var i = t[n];
            var a = n === t.length - 1;
            const c = `chrome-extension://${chrome.i18n.getMessage("@@extension_id")}/editor.html?img=${i}`;
            r.incognito && 0 === n ? chrome.windows.create({
                url: c,
                incognito: !1,
                focused: a
            }, function(e) {
                o = e.id
            }) : chrome.tabs.create({
                url: c,
                active: a,
                windowId: o,
                openerTabId: r.id,
                index: (r.incognito ? 0 : r.index) + 1 + n
            });
            a || e(t, n + 1)
        }(e) : s("uh-oh")
    }

    function u(e) {
        s("uh-oh")
    }

    function f(e) {
        0 === e ? s("loading") : c("bar").style.width = parseInt(100 * e, 10) + "%"
    }

    function p() {
        s("split-image")
    }
    chrome.tabs.query({
            active: !0,
            currentWindow: !0
        }, function(e) {
            var t = e[0];
            r = t;
            var n = function(e) {
                var t = e.split("?")[0].split("#")[0];
                return "screenshot" + (t = t ? "-" + (t = t.replace(/^https?:\/\//, "").replace(/[^A-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^[_\-]+/, "").replace(/[_\-]+$/, "")) : "") + "-" + Date.now() + ".png"
            }(t.url);
            CaptureAPI.captureToFiles(t, n, l, u, f, p)
        }),
        function() {
            for (var e = document.querySelectorAll("[i18n]"), t = 0; t < e.length; ++t) e[t].textContent = chrome.i18n.getMessage(e[t].getAttribute("i18n"));
            for (e = document.querySelectorAll("[i18n-alt]"), t = 0; t < e.length; ++t) {
                var n = chrome.i18n.getMessage(e[t].getAttribute("i18n-alt"));
                e[t].alt = n, e[t].title = n
            }
        }()
}, function(e, t, n) {
    var r = n(19);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    n(1)(r, {});
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    (e.exports = n(0)()).push([e.i, "html {\n    overflow: scroll;\n    overflow-x: hidden;\n}\n::-webkit-scrollbar {\n    width: 0px;  /* remove scrollbar space */\n}\nbody {\n    font: normal 12px/16px 'Roboto', sans-serif\n}\ndiv,p { margin: 0; padding: 0; }\n\n.clr { overflow: hidden; }\n.left { float: left; }\n.right { float: right; }\n\na {\n\tcolor: #3681b3;\n\ttext-decoration: none;\n}\na:hover { color: #265c80; }\na:active { color: #000; }\n\n#wrap {\n    width: 300px;\n    padding-top: 9px;\n    font-size: 12px;\n    color: #888;\n}\n\n#wrap>div { display: none; }\n#wrap>#loading { \n    display: block; \n    padding-top: 12px;\n}\n\n#loading .loader {\n    position: relative;\n    border-bottom: 3px dashed #888;\n    height: 12px;\n}\n\n#loading .bar {\n    position: absolute;\n    top: -21px;\n    left: 0;\n    height: 30px;\n    width: 0%;\n    background: rgba(0, 0, 0, 0) url(" + n(20) + ") scroll no-repeat center right;\n    transition: width 0.2s ease-in-out;\n}\np { word-wrap: break-word; }\n\n.warning {\n    margin-top: 1em;\n    color: #aa8d3b;\n    font-style: italic;\n    font-weight: bold;\n}\n.error {\n    margin-top: 1em;\n    font-weight: bold;\n    color: #b33;\n}\n.error a {\n    color: #f75;\n}", ""])
}, function(e, t, n) {
    e.exports = n.p + "loader.png"
}, function(e, t) {
    function n(e) {
        return document.getElementById(e)
    }
    window.CaptureAPI = function() {
        var e = 3e4,
            t = 8e3,
            r = e * t,
            o = ["http://*/*", "https://*/*", "ftp://*/*", "file://*/*"],
            i = [/^https?:\/\/chrome.google.com\/.*$/];

        function a(o, i, a, c) {
            chrome.tabs.captureVisibleTab(null, {
                format: "png",
                quality: 100
            }, function(s) {
                if (s) {
                    var l = new Image;
                    l.onload = function() {
                        if (o.image = {
                                width: l.width,
                                height: l.height
                            }, o.windowWidth !== l.width) {
                            var s = l.width / o.windowWidth;
                            o.x *= s, o.y *= s, o.totalWidth *= s, o.totalHeight *= s
                        }
                        i.length || (Array.prototype.push.apply(i, function(n, o) {
                                var i, a, c, s, l, u = o > e || n > e || o * n > r,
                                    f = n > o,
                                    p = u ? f ? e : t : n,
                                    d = u ? f ? t : e : o,
                                    h = Math.ceil(n / p),
                                    g = Math.ceil(o / d),
                                    m = 0,
                                    v = [];
                                for (i = 0; i < g; i++)
                                    for (a = 0; a < h; a++)(c = document.createElement("canvas")).width = a == h - 1 && n % p || p, c.height = i == g - 1 && o % d || d, s = a * p, l = i * d, v.push({
                                        canvas: c,
                                        ctx: c.getContext("2d"),
                                        index: m,
                                        left: s,
                                        right: s + c.width,
                                        top: l,
                                        bottom: l + c.height
                                    }), m++;
                                return v
                            }(o.totalWidth, o.totalHeight)), i.length > 1 && (c && c(), n("screenshot-count").innerText = i.length)),
                            function(e, t, n, r, o) {
                                var i = e + n,
                                    a = t + r;
                                return o.filter(function(n) {
                                    return e < n.right && i > n.left && t < n.bottom && a > n.top
                                })
                            }(o.x, o.y, l.width, l.height, i).forEach(function(e) {
                                e.ctx.drawImage(l, o.x - e.left, o.y - e.top)
                            }), a(JSON.stringify(o, null, 4) || !0)
                    }, l.src = s
                }
            })
        }

        function c(e, t, n, r, c) {
            var s = !1,
                l = [],
                u = !1,
                f = function() {};
            t = t || f, n = n || f, r = r || f,
                function(e) {
                    var t;
                    for (t = i.length - 1; t >= 0; t--)
                        if (i[t].test(e)) return !1;
                    for (t = o.length - 1; t >= 0; t--)
                        if (new RegExp("^" + o[t].replace(/\*/g, ".*") + "$").test(e)) return !0;
                    return !1
                }(e.url) || n("invalid url"), chrome.runtime.onMessage.addListener(function(e, t, o) {
                    return "capture" === e.msg ? (r(e.complete), a(e, l, o, c), !0) : (console.error("Unknown message received from content script: " + e.msg), n("internal error"), !1)
                }), chrome.tabs.executeScript(e.id, {
                    file: "page.bundle.js"
                }, function() {
                    u ? console.error("Timed out too early while waiting for chrome.tabs.executeScript. Try increasing the timeout.") : (s = !0, r(0), function(e, t) {
                        chrome.tabs.sendMessage(e.id, {
                            msg: "scrollPage"
                        }, function() {
                            t()
                        })
                    }(e, function() {
                        t(function(e) {
                            return e.map(function(e) {
                                for (var t = e.canvas.toDataURL(), n = atob(t.split(",")[1]), r = t.split(",")[0].split(":")[1].split(";")[0], o = new ArrayBuffer(n.length), i = new Uint8Array(o), a = 0; a < n.length; a++) i[a] = n.charCodeAt(a);
                                return new Blob([o], {
                                    type: r
                                })
                            })
                        }(l))
                    }))
                }), window.setTimeout(function() {
                    s || (u = !0, n("execute timeout"))
                }, 3e3)
        }
        return {
            captureToBlobs: c,
            captureToFiles: function(e, t, n, r, o, i) {
                c(e, function(e) {
                    var o = 0,
                        i = e.length,
                        a = [];
                    ! function c() {
                        ! function(e, t, n, r, o) {
                            function i() {
                                var e = "filesystem:chrome-extension://" + chrome.i18n.getMessage("@@extension_id") + "/temporary/" + t;
                                r(e)
                            }
                            t = function(e, t) {
                                if (!t) return e;
                                var n = e.split("."),
                                    r = n.pop();
                                return n.join(".") + "-" + (t + 1) + "." + r
                            }(t, n);
                            var a = e.size + 512;
                            (window.requestFileSystem || window.webkitRequestFileSystem)(window.TEMPORARY, a, function(n) {
                                n.root.getFile(t, {
                                    create: !0
                                }, function(t) {
                                    t.createWriter(function(t) {
                                        t.onwriteend = i, t.write(e)
                                    }, o)
                                }, o)
                            }, o)
                        }(e[o], t, o, function(e) {
                            o++, a.push(e), o >= i ? n(a) : c()
                        }, r)
                    }()
                }, r, o, i)
            }
        }
    }()
}]);