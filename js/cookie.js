function deleteCookie(cname) {
    document.cookie = cname + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function WriteCookie(name, value) {
    var argv = WriteCookie.arguments;
    var argc = WriteCookie.arguments.length;
    var expires = argc > 2 ? argv[2] : null;
    var path = argc > 3 ? argv[3] : null;
    var domain = argc > 4 ? argv[4] : null;
    var secure = argc > 5 ? argv[5] : false;
    document.cookie =
        name +
        "=" +
        value +
        (expires == null ? "" : "; expires=" + expires.toGMTString()) +
        "; path=/" +
        (domain == null ? "" : "; domain=" + domain) +
        (secure == true ? "; secure" : "");
}
function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) {
        endstr = document.cookie.length;
    }
    return document.cookie.substring(offset, endstr);
}
function ReadCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var var2;
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            var2 = getCookieVal(j);
            return unescape(var2);
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) {
            break;
        }
    }
    return "null";
}