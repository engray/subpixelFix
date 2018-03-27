function subpixelFix() {
  var subpixelElement = document.querySelectorAll(".subpixel-fix");
  subpixelElement.forEach(function(cur_el) {
        let style = window.getComputedStyle(cur_el);
        let matrix;

        // switch between non standard matrix elements
        if (typeof DOMMatrix !== 'undefined') {
            matrix = new DOMMatrix(style.transform);
        } else if (typeof CSSMatrix !== 'undefined') {
            matrix = new CSSMatrix(style.transform);
        } else if (typeof MSCSSMatrix !== 'undefined') {
            matrix = new MSCSSMatrix(style.transform);
        } else if (typeof WebKitCSSMatrix !== 'undefined') {
            matrix = new WebKitCSSMatrix(style.webkitTransform);
        }

        let transX = matrix.m41;
        let transY = matrix.m42;
        if ((transX % 2) || (transY % 2)) {
            cur_el.style.transform = "translate(" + transX.toFixed(0) + "px," + transY.toFixed(0) + "px)";
        }
  });
}
subpixelFix();
