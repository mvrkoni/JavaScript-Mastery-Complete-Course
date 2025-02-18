(function(){

    "use strict";

    document.getElementById('convert').addEventListener('submit', function(evt){
        evt.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer');

        if(distance){
          let mile = (distance * 0.621371).toFixed(3); 
          /* var roundedmile = mile.toFixed(3);
                          //(Math.round(mile * 1000)) / 1000; */
        
        answer.innerHTML = `<h2>${distance} kilometers converts to ${mile} miles.</h2>`
        }
        else {
            answer.innerHTML = `<h2>This is not a number!</h2>`;
        }
    })

    

    
})();