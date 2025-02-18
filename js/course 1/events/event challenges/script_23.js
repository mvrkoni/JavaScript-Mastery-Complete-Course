(function(){

    "use strict";

    
        const paragraphs = document.querySelectorAll('p');
        /* console.log(paragraphs); //NodeList */
        const btn = document.querySelector('button');

        btn.addEventListener('click', function() {
            /* paragraphs.forEach(function(paragraph){
                paragraph.style.color = "green";
            }); //#1 */

            for (const paragraph of paragraphs) {
                paragraph.style.color = "green";
            }   //#2

            /* for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.color = "green";
            }   //#3 */
        });
    
})();