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
    s = picId;
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
function pl(a) {
    var snd = new Audio(a);
    snd.play();
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var x = 0, y=0;
function myFunction()
{
    document.getElementById('score').innerHTML = "---";
}
function starttest(k) {
    y++;
    var s = ["Aligator", "Elephant", "Hippo", "Tiger", "Bird", "Monkey", "Kenguru"];
    if (k == document.getElementById('Animal').textContent) {
        //alert("YES");
        document.getElementById('Animal').innerHTML = s[getRandomInt(7)];
        x++;
        if (y == 8)
        {
            alert("YOUR SCORE IS " + x + " / 8");
            y=0;
            x=0;
        }
        document.getElementById('score').innerHTML = "CORRECT";
        setTimeout(myFunction, 1000);
    }
    else {
        //alert("NO");
        document.getElementById('score').innerHTML = "TRY AGAIN";
        setTimeout(myFunction, 1000);
    }
}