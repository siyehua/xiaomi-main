!function (e) {
    var t, n, o, i, l,
        d = '<svg><symbol id="icon-angle-right" viewBox="0 0 1024 1024"><path d="M610.88 512L192 93.12 285.12 0l512 512-512 512L192 930.88z"  ></path></symbol><symbol id="icon-angle-left" viewBox="0 0 1024 1024"><path d="M378.24 512l418.88 418.88L704 1024 192 512l512-512 93.12 93.12z"  ></path></symbol></svg>',
        c = (c = document.getElementsByTagName("script"))[c.length - 1].getAttribute("data-injectcss"),
        a = function (e, t) {
            t.parentNode.insertBefore(e, t)
        };
    if (c && !e.__iconfont__svg__cssinject__) {
        e.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }

    function s() {
        l || (l = !0, o())
    }

    function r() {
        try {
            i.documentElement.doScroll("left")
        } catch (e) {
            return void setTimeout(r, 50)
        }
        s()
    }

    t = function () {
        var e, t = document.createElement("div");
        t.innerHTML = d, d = null, (t = t.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", t = t, (e = document.body).firstChild ? a(t, e.firstChild) : e.appendChild(t))
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (n = function () {
        document.removeEventListener("DOMContentLoaded", n, !1), t()
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t, i = e.document, l = !1, r(), i.onreadystatechange = function () {
        "complete" == i.readyState && (i.onreadystatechange = null, s())
    })
}(window);