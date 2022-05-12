$(document).ready(function () {
    //content
    let initialElement = $('#gen-1');

    //define initial element length
    let elementNumbers = initialElement.find('li').length;

    //define a counter to compare every click on show more how much elements are still hidden
    let counter = 0;

    //define a number to select how much slide show at first and every time counter will be incrementd
    let magickNumber = 2;
    console.log('gen1: ' + magickNumber);

    //let's hide all list elemements
    initialElement.find('li').hide();

    if (elementNumbers > magickNumber) {
        counter = magickNumber;
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
        //if counter is < than elements it mean that there are other hidden elements,
        //so it will show remaning elements
        if (counter < elementNumbers) {
            counter = counter + magickNumber;
            initialElement.find('li').slice(0, counter).show();
            initialElement.find('.showMoreLess').html('mostra di più');
            if (counter >= elementNumbers) {
                initialElement.find('.showMoreLess').html('mostra meno');
            }
        } else {
            //if there aren't other elements to display, another click will collapse list to starter point
            counter = magickNumber;
            initialElement.find('li').hide();
            initialElement.find('li').slice(0, counter).show();
            initialElement.find('.showMoreLess').html('mostra di più');
            //go up to list start
            $('html, body').animate({
                scrollTop: $('#gen-1').offset().top + - 150
            });
        }
    });
});
