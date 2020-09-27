/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
$(document).ready(function () {
    "use strict";
    $("#clickMe").click(function (e) {
        alert("hello world!");
    });
});
//NORMAL JS
function changeImage1(img1, img2, picId) {
    s=picId;
    if (document.images[s].alt == "Letter") {
        document.images[s].src = img2;
        document.images[s].alt = "Image";
    }
    else {
        document.images[s].src = img1;
        document.images[s].alt = "Letter";
    }
}
function Check() {
    alert("Hi");
}
function pl(a)
{
    var snd = new Audio(a);
    snd.play();
}