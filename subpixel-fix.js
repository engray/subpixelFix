//https://stackoverflow.com/questions/42267189/how-to-get-value-translatex-by-javascript
function getTranslateX(current_el) {
    var style = window.getComputedStyle(current_el);
    var matrix = new WebKitCSSMatrix(style.webkitTransform);
    return matrix.m41;
}

//subpixel fix
function subpixelFix() {
    var subpixelElement = document.querySelectorAll(".subpixel-fix");
    subpixelElement.forEach(function(current_el) {
        if (getTranslateX(current_el) % 2) {
            console.log(current_el);
            var tempValue = getTranslateX(current_el);
            tempValue.toFixed(0);
            current_el.style.transform = "translate(" + tempValue.toFixed(0) + "px,0)";
        }
    });
}
subpixelFix();
