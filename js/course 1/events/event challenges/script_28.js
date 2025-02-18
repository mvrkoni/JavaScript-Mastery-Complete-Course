(function(){

    "use strict";

    const heading = document.querySelector('h1');
    const box = document.querySelector('div');

    box.addEventListener('mouseover', function(){
        box.className = "big";
    });

    box.addEventListener('mouseout', function(){
        box.removeAttribute('class');
    });

})();