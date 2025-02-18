(function(){

    "use strict";

    const btn1 = document.querySelector('#first');
    const btn2 = document.querySelector('#second');
    const myDiv = document.querySelector('div');


    btn1.addEventListener('click', function() { 
        const newParagraph = document.createElement('p');
        const newText = document.createTextNode('Here is a new paragraph');
        newParagraph.appendChild(newText);
        myDiv.appendChild(newParagraph);
    });

    btn2.addEventListener('click', function() { 
        const remParagraph = document.querySelector('p');
        myDiv.removeChild(remParagraph);
    }); //tyle zmiennych, żebys rozumiał
})();