(function(){

    "use strict";

    const myForm = document.querySelector('form');
    myForm.addEventListener('submit', function(evt){
        evt.preventDefault();
        const formData = document.querySelector('input').value;

        if(!isNaN(parseInt(formData, 10)) && parseInt(formData, 10) >= 0 && formData !==''){
            const h1Element = document.querySelector('h1');//to !isNaN sprytne gówno
            const fontSizey = parseInt(formData, 10); //ta dziesiątka to system dziesiętny
            h1Element.style.fontSize = fontSizey + 'px';
        }
        else {
            alert("Ty skurwysynu nie rób sobie jaj");
        }
    });

})();