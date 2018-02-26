//https://stackoverflow.com/questions/42267189/how-to-get-value-translatex-by-javascript
function getTranslateX(cur_el) {
    var style = window.getComputedStyle(cur_el);
    var matrix = new WebKitCSSMatrix(style.webkitTransform);
    return matrix.m41;
}

function getTranslateY(cur_el) {
    var style = window.getComputedStyle(cur_el);
    var matrix = new WebKitCSSMatrix(style.webkitTransform);
    return matrix.m42;
}

//subpixel fix
function subpixelFix() {
    var subpixelElement = document.querySelectorAll(".subpixel-fix");
    subpixelElement.forEach(function(cur_el) {
        if ((getTranslateX(cur_el) % 2) || (getTranslateY(cur_el) % 2)) {
            var tempValueX = getTranslateX(cur_el);
            var tempValueY = getTranslateY(cur_el);
            cur_el.style.transform = "translate(" + tempValueX.toFixed(0) + "px," + tempValueY.toFixed(0) + "px)";
        }
    });
}
subpixelFix();
