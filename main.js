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
        function changeImage1() {
            if (document.images["pic"].alt == "Letter") {
                document.images["pic"].src = "pic/a1.png";
                document.images["pic"].alt = "Image";
            } 
            else 
            {
                document.images["pic"].src = "pic/a.png";
                document.images["pic"].alt = "Letter";
            }
        }
        function Check()
        {
            alert("Hi");
        }