(function(){

    "use strict";

    const myPhotos = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    let currentImage = 0;

    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');
    
    function doStuff() {
        const newSlide = document.createElement('img');
        newSlide.src = `../slides/${myPhotos[currentImage]}`;
        newSlide.className = "fadeinimg";
        container.appendChild(newSlide);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
            }
    }

    nextBtn.addEventListener('click', function (evt){
        evt.preventDefault();

        currentImage++
        if (currentImage > myPhotos.length - 1){
                currentImage = 0;
            }
        
        doStuff();
    });


    prevBtn.addEventListener('click', function(evt) {
        evt.preventDefault();

        currentImage--;
            if(currentImage < 0){
                currentImage = myPhotos.length - 1;
            }

        doStuff();
    });
})();