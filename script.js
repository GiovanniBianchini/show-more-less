    //define initial element 
    let elementNumbers = $('#works-list .gen-works-cont').length;

    //define a counter to compare every click on show more how much elements are still hidden
    let counter = 0;

    //define a number to select how much slide show at first and every time counter will be incrementd
    let magickNumber = 6;

    //let's hide all list elemements
    $('#works-list .gen-works-cont').hide();

    if (elementNumbers > magickNumber) {
        counter = magickNumber;
        //it show only the first selected elements by counter
        $('#works-list .gen-works-cont').slice(0, counter).show();
        //show the 'show more' button
        $('.showMoreLess').addClass('show-toggle-visible');
    } else {
        //if elements are less than counter, there will be all element visible
        $('#works-list .gen-works-cont').show();
        $('.showMoreLess').addClass('show-toggle-invisible');
    }

    //when show more button is triggered
    $('.showMoreLess').click(function(){
        //if counter is < than elements it mean that there are other hidden elements,
        //so it will show remaning elements
        if(counter < elementNumbers) {
            counter= counter + magickNumber;
            $('#works-list .gen-works-cont').slice(0, counter).show();
            $('.showMoreLess').html('mostra di più');
            if(counter >= elementNumbers) {
                $('.showMoreLess').html('mostra meno');
            }
        } else {
            //if there aren't other elements to display, another click will collapse list to starter point
            counter = magickNumber;
            $('#works-list .gen-works-cont').hide();
            $('#works-list .gen-works-cont').slice(0, counter).show();
            $('.showMoreLess').html('mostra di più');
            //go up to list start
            $('html, body').animate({
                scrollTop: $('#works-list').offset().top + - 150
            });
        }
    });
