(function(){

    "use strict";

    const btn = document.querySelector('button');
    const newParagraph = document.createElement('p');
    const newText = document.createTextNode('Here is a new paragraph');
    const myDiv = document.querySelector('div');

    btn.addEventListener('click', function() { 
        myDiv.appendChild(newParagraph.appendChild(newText));
    }); //kod długi

        /* document.querySelector('button').addEventListener('click', function() {
            var newParagraph = document.createElement('p'); 
            newParagraph.appendChild(document.createTextNode('Here is a new paragraph'));
            document.querySelector('div').appendChild(newParagraph);
        }); //kod skrócony */
})();