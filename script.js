$(document).ready(function () {
    /*
    you only have to call function with the following paramaters:
    1) General container
    2) Which element inside container will be hidden
    3) How many items show at first
    4) How many items add to list every time "show more" is triggered
    */
    showMoreLess(
        $('#first-cont'),
        'li',
        6,
        3
    );

    showMoreLess($('#second-cont'), 'li', 2, 2);
});