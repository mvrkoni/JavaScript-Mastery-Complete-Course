(function(){

    "use strict";

    let convertType = "miles";
    const heading = document.querySelector("h1");
    const intro = document.querySelector("p");
    const answerDiv = document.getElementById("answer");
    const form = document.getElementById("convert");

    document.addEventListener('keydown', function(evt){
        const key = evt.code;
    
        if(key === 'KeyK'){
            convertType = 'kilometers';
            heading.innerHTML = 'Kilometers to miles conventer';
            intro.innerHTML = 'Type in a number of kilometers and click the button to check how many miles it is!';
        
        
        }       
        else if(key === 'KeyM'){
            convertType = 'miles';
            heading.innerHTML = 'miles to kilometers conventer';
            intro.innerHTML = 'Type in a number of miles and click the button to check how many kilometers it is!';
        }

    });

    form.addEventListener('submit', function(evt){
        evt.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if(distance && convertType === 'kilometers'){
            const mile = (distance * 0.621371).toFixed(3); 
            answer.innerHTML = `<h2>${distance} kilometers converts to ${mile} miles.</h2>`
        }
        else if(distance && convertType === 'miles'){
            const kilometer = (distance * 1.609344).toFixed(3); 
            answer.innerHTML = `<h2>${distance} miles converts to ${kilometer} kilometers.</h2>` 
        }
        else {
            answer.innerHTML = '<h2>Please provide a number!</h2>';
        }
    });
})();