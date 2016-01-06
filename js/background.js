// Alternate background images for the header
var classCycle = ['androids1', 'androids2', 'androids3', 'androids4', 'androids5', 'androids6', 'androids7', 'androids8'];
var randomNumber = Math.floor(Math.random() * classCycle.length);
var classToAdd = classCycle[randomNumber];
$('header').addClass(classToAdd);

setInterval("changeImage()", 30000);

function changeImage() {

    // remove old class
    randomNumber = Math.floor(Math.random() * classCycle.length);
    $('header').removeClass(classToAdd);

    // add new class
    classToAdd = classCycle[randomNumber];
    $('header').addClass(classToAdd);
}