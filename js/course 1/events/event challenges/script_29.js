(function(){

    "use strict";

    let pagetop
    const pagebody = document.querySelector('body');

    window.addEventListener('scroll', function(){
        pagetop = window.scrollY;
        
        switch (true) {
            case (pagetop <= 500):
                pagebody.removeAttribute('class');
                pagebody.className = "one";
                break;
            case (pagetop <= 1000):
                pagebody.removeAttribute('class');
                pagebody.className = "two";;
                break;
            case (pagetop <= 1500):
                pagebody.removeAttribute('class');
                pagebody.className = "three";
                break;
            case (pagetop <= 2000):
                pagebody.removeAttribute('class');
                pagebody.className = "four";;
                break;
            default:
                pagebody.removeAttribute('class');
                pagebody.className = "five";
            }
    });

})();