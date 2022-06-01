function showMoreLess(starterElement, whichElementToHide, starterNumber, itemsShowIcrementer) {
    //content
    let initialElement = document.getElementById(starterElement);

    //define which element inside container you have to hide
    let elementToHide = whichElementToHide;

    //define initial element length
    let elementNumbers = initialElement.querySelectorAll(elementToHide).length;

    //define a counter to compare every click on show more how much elements are still hidden
    let counter = 0;

    //define a number to select how much elements show at first and every time counter will be incremented
    let showItemsAtStart = starterNumber;

    //define how much items will appear every time show more is triggered
    let showItemsincrementer = itemsShowIcrementer;

    //let's hide all list elemements
    initialElement.querySelectorAll(elementToHide).forEach(eh => {
        eh.style.display = "none";
    });

    //if I have more elements than showItemsAtStart
    if (elementNumbers > showItemsAtStart) {
        counter = showItemsAtStart;
        //it show only the first selected elements by counter
        Array.from(initialElement.querySelectorAll(elementToHide)).slice(0, counter).forEach(eth => {
            eth.style.display = 'block';
        });
        //show the 'show more' button
        initialElement.querySelector('.showMoreLess').style.display = 'block';
    } else {
        //if elements are less than counter, there will be all element visible
        initialElement.querySelectorAll(elementToHide).forEach(sae => {
            sae.style.display = 'block';
        });
        initialElement.querySelector('.showMoreLess').style.display = "none";
    }

    initialElement.querySelector('.showMoreLess').addEventListener('click', function(){
        //if counter is < than elements it means that there are other hidden elements, so it will show remaning elements
        if (counter < elementNumbers) {
            counter = counter + showItemsincrementer;
            Array.from(initialElement.querySelectorAll(elementToHide)).slice(0, counter).forEach(eth => {
                eth.style.display = 'block';
            });
            initialElement.querySelector('.showMoreLess').textContent = 'show more';
            if (counter >= elementNumbers) {
                initialElement.querySelector('.showMoreLess').textContent = 'show less';
            }
        } else {
            //if there aren't other elements to display, another click will collapse list to starter point
            counter = showItemsAtStart;
            initialElement.querySelectorAll(elementToHide).forEach(eh => {
                eh.style.display = "none";
            });
            Array.from(initialElement.querySelectorAll(elementToHide)).slice(0, counter).forEach(eth => {
                eth.style.display = 'block';
            });
            initialElement.querySelector('.showMoreLess').textContent = 'show more';
            //go up to list start
            initialElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
        }
    });

}
