function showMoreLess(starterElement, starterNumber, itemsShowIcrementer) {
    //content
    let initialElement = starterElement;

    //define initial element length
    let elementNumbers = initialElement.find('li').length;

    //define a counter to compare every click on show more how much elements are still hidden
    let counter = 0;

    //define a number to select how much elements show at first and every time counter will be incremented
    let showItemsAtStart = starterNumber;

    //define how much items will appear every time show more is triggered
    let showItemsincrementer = itemsShowIcrementer;

    //let's hide all list elemements
    initialElement.find('li').hide();

    //if I have more elements than showItemsAtStart
    if (elementNumbers > showItemsAtStart) {
        counter = showItemsAtStart;
        //it show only the first selected elements by counter
        initialElement.find('li').slice(0, counter).show();
        //show the 'show more' button
        initialElement.find('.showMoreLess').addClass('show-toggle-visible');
    } else {
        //if elements are less than counter, there will be all element visible
        initialElement.find('li').show();
        initialElement.find('.showMoreLess').addClass('show-toggle-invisible');
    }

    //when show more button is triggered
    initialElement.find('.showMoreLess').click(function () {
        //if counter is < than elements it means that there are other hidden elements, so it will show remaning elements
        if (counter < elementNumbers) {
            counter = counter + itemsShowIcrementer;
            initialElement.find('li').slice(0, counter).show();
            initialElement.find('.showMoreLess').html('show more');
            if (counter >= elementNumbers) {
                initialElement.find('.showMoreLess').html('show less');
            }
        } else {
            //if there aren't other elements to display, another click will collapse list to starter point
            counter = showItemsAtStart;
            initialElement.find('li').hide();
            initialElement.find('li').slice(0, counter).show();
            initialElement.find('.showMoreLess').html('show more');
            //go up to list start
            $('html, body').animate({
                scrollTop: starterElement.offset().top + - 150
            });
        }
    });
}

/*
there you decide which element will have show more/less function 
and how many items show at start and every time you click "show more" button
*/

//who is selected, how much elements show at first, how much more elements show every time show more is triggered
showMoreLess($('#first-cont'), 6, 3);

showMoreLess($('#second-cont'), 2 , 2);
