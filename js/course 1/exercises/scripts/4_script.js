(function(){

    "use strict";

    const detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener('submit', handleFormSubmit)
    
    //grab the form element and put it in a variable. Then add an event listener, which fires when the form is submitted

    function handleFormSubmit(evt){
        evt.preventDefault();

        //1. extract the value from each form field
        const destName = evt.target.elements['name'].value;
        const destLoc = evt.target.elements['location'].value;
        const destPhoto = evt.target.elements['photo'].value;
        const destDesc = evt.target.elements['description'].value;

        //2. clear out the form fields
        for (let i = 0; i < detailsForm.length; i++){
            detailsForm.elements[i].value = ""; //empty value setting
        }

        const destCard = createDestinationCard(destName, destLoc, destPhoto, destDesc);

        //3. run a function that creates the new card (if needed, change the header at the top of the desination list)
        const wishListContainer = document.getElementById('destinations_container');

        if(wishListContainer.children.length === 0){
            document.getElementById('title').innerHTML = 'My Wish List';
        }

        document.querySelector('#destinations_container').appendChild(destCard);
    }


    //4. add the card
    function createDestinationCard(name, location, photoURL, description){

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.setAttribute('alt', name);

        const constphotoURL = '../slides/signpost.jpg';

        if(photoURL.length === 0){
            img.setAttribute('src', constphotoURL);
        }
        else {
            img.setAttribute('src', photoURL);
        }
        
        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        const cardSubtitle = document.createElement('h4');
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);

        if (description.length !== 0){
            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }

        const cardDeleteBtn = document.createElement("button");
        cardDeleteBtn.innerText = "remove";

        cardDeleteBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;
    }

    //5. remove the card
    function removeDestination(evt){
        const card = evt.target.parentElement.parentElement;
        card.remove();
    }
})();
