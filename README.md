# show-more-less
A simple script that allows you to decide how many elements to show initially, how many elements to show when clicking on "show more". When there aren't more hidden elements to show then the whole thing will collapse to the initial situation.

You only have to call function with the following paramaters:
1) General container
2) Which type of element inside container will be hidden
3) How many items show at first
4) How many items add to list every time "show more" is triggered


In this case I used a list but you can target every element with/without a class/id.

Example:

showMoreLess(
    'first-cont', //general container with elements to hide inside
    'li', //which element inside the above declared container hide
    6, //how many elements show at first
    3 //how many elements show every time "show more" button is triggered
);
