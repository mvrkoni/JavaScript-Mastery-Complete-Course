(function(){

    "use strict";

    const pagebody = document.querySelector('body');
    let btn;
    document.addEventListener('keydown', function(evt){
        evt.preventDefault();
        btn = evt.key;
        switch (btn) {
            case 'b':
                pagebody.removeAttribute('class');
                pagebody.className = "one";
                break;
            case 'v':
                pagebody.removeAttribute('class');
                pagebody.className = "two";
                break;
            case 'c':
                pagebody.removeAttribute('class');
                pagebody.className = "three";
                break;
            case 'f':
                pagebody.removeAttribute('class');
                pagebody.className = "four";
                break;
            case 'g':
                pagebody.removeAttribute('class');
                pagebody.className = "five";
                break;
            default:
                alert("wypierdalaj");
            }
    });

})();