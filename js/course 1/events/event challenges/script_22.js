(function(){

    "use strict";

    const paragraph = document.querySelector('p');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function() { 
        paragraph.style.color = "green";
    }); //#1

    /* btn.onclick = function(){
            paragraph.style.color = "green";
        }   //#2 */

})();