(function(){

    "use strict";

    const btn1 = document.querySelector('#first');
    const btn2 = document.querySelector('#second');
    const myDiv = document.querySelector('div');
    let i = 1;

     btn1.addEventListener('click', function() { 
        i++;
        const newParagraph = document.createElement('p');
        const newText = document.createTextNode(`This is paragraph number ${i}`);
        newParagraph.appendChild(newText);
        myDiv.appendChild(newParagraph);
        });

    btn2.addEventListener('click', function() { 
        const allParagraphs = document.querySelectorAll('p'); //musi być all ponieważ to wybiera cały wektor paragrafów a my chcemy usuwac ostatni dodany
        if (allParagraphs.length > 1) {
            const lastParagraph = allParagraphs[allParagraphs.length - 1];
            myDiv.removeChild(lastParagraph);
            }
        else if (allParagraphs.length === 1) {
            const confirmDelete = confirm("Do you really want to remove the last paragraph?");
            if (confirmDelete) {
                myDiv.removeChild(allParagraphs[0]);
                }
            }
        }); 
})();