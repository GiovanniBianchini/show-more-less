// link utile
// https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/#:~:text=The%20equivalent%20to%20%24()%20or,call%20with%20a%20CSS%20selector.

function showMoreLess(starterElement, whichElementToHide, starterNumber, itemsShowIcrementer){
    //content
    let initialElement = starterElement;

    //define which element inside container you have to hide
    let elementToHide = whichElementToHide;

    //define initial element length
    let elementNumbers = initialElement.querySelector(elementToHide).length;
}

/* function showMoreLess(starterElement, whichElementToHide, starterNumber, itemsShowIcrementer) {
    //content
    let initialElement = starterElement;

    //define which element inside container you have to hide
    let elementToHide = whichElementToHide;

    //define initial element length
    let elementNumbers = initialElement.find(elementToHide).length;

    //define a counter to compare every click on show more how much elements are still hidden
    let counter = 0;

    //define a number to select how much elements show at first and every time counter will be incremented
    let showItemsAtStart = starterNumber;

    //define how much items will appear every time show more is triggered
    let showItemsincrementer = itemsShowIcrementer;

    //let's hide all list elemements
    initialElement.find(elementToHide).hide();

    //if I have more elements than showItemsAtStart
    if (elementNumbers > showItemsAtStart) {
        counter = showItemsAtStart;
        //it show only the first selected elements by counter
        initialElement.find(elementToHide).slice(0, counter).show();
        //show the 'show more' button
        initialElement.find('.showMoreLess').show();
    } else {
        //if elements are less than counter, there will be all element visible
        initialElement.find(elementToHide).show();
        initialElement.find('.showMoreLess').hide();
    }

    //when show more button is triggered
    initialElement.find('.showMoreLess').click(function () {
        //if counter is < than elements it means that there are other hidden elements, so it will show remaning elements
        if (counter < elementNumbers) {
            counter = counter + showItemsincrementer;
            initialElement.find(elementToHide).slice(0, counter).show();
            initialElement.find('.showMoreLess').html('show more');
            if (counter >= elementNumbers) {
                initialElement.find('.showMoreLess').html('show less');
            }
        } else {
            //if there aren't other elements to display, another click will collapse list to starter point
            counter = showItemsAtStart;
            initialElement.find(elementToHide).hide();
            initialElement.find(elementToHide).slice(0, counter).show();
            initialElement.find('.showMoreLess').html('show more');
            //go up to list start
            $('html, body').animate({
                scrollTop: starterElement.offset().top + - 150
            });
        }
    });
} */
