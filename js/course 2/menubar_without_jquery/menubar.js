(function(){

    "use strict";

    const submenus = document.querySelectorAll('ul li ul'); //wszystkie "dzieci"
    
    const menuHidder = function(){
        for (let i = 0; i < submenus.length; i++) {
        submenus[i].className = 'hide-menu';
        }
    }

    menuHidder();

    const menulinks = document.querySelectorAll('.menulink');
    
    for (let j = 0; j < menulinks.length; j++) {
        menulinks[j].addEventListener('click', function(evt) {
            evt.preventDefault();

            const thisMenu = this.parentNode.querySelector('ul'); //this wybiera to co chcesz użyć, a parentNode bierze swoje dzieci
            
            if (thisMenu.className === 'hide-menu'){
                
                menuHidder(); //to też sprytne, fajna funkcja
            
                thisMenu.className = 'show-menu';
            } else {
                thisMenu.className = 'hide-menu';
            }
            //ciekawe podejscie
        });
    }

})();