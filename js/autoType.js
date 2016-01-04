var debug = false;
var trace = false;

var text = [];
var delay = 50;
var currentWord = 0;
var currentChar = 0;
var dest = null;

console.log("testing - 1");

// Title
document.title = "Spencer's Portfolio";

// Description
$('meta[name=description]').remove();
$('head').append('<meta name="description" content="A portolio about Spencer Shadley regarding projects, resume, etc.">');

// Favicon
var link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = '../img/favicon.png';
document.getElementsByTagName('head')[0].appendChild(link);

// Background image (header)
var classCycle = ['androids1', 'androids2', 'androids3', 'androids4', 'androids5', 'androids6', 'androids7', 'androids8'];
var randomNumber = Math.floor(Math.random() * classCycle.length);
var classToAdd = classCycle[randomNumber];
$('header').addClass(classToAdd);

setInterval("fadeImage()", 15000);

function fadeImage() {

    // remove old class
    randomNumber = Math.floor(Math.random() * classCycle.length);
    $('header').removeClass(classToAdd);

    // add new class
    classToAdd = classCycle[randomNumber];
    $('header').addClass(classToAdd);
}


/*
// Background image (header)
//var ogClass = $('header').className;
//console.log(ogClass);
var classCycle = ['androids1', 'androids2', 'androids3'];
var randomNumber = Math.floor(Math.random() * classCycle.length);
var classToAdd = classCycle[randomNumber];
$('header').addClass = classToAdd;

$('header').fadeOut(500, function () {
    $(this).css('background', 'url(../img/androids' + 1 + '.jpg)').fadeIn(1000);
});

setInterval(
    function () {
        console.log("running setInterval");
        console.log("old className: " + $('header').className);

        $('header').removeClass(classToAdd);

        randomNumber = Math.floor(Math.random() * classCycle.length);
        classToAdd = classCycle[randomNumber];

        $('header').addClass = classToAdd;

        console.log("new className: " + $('header').className);
    }, 5000
);
*/



function type() {
    if(debug && trace) console.log("type()");
    dest.innerHTML = text[currentWord].substr(0, ++currentChar);
    if (currentChar > text[currentWord].length) setTimeout("unType()", 1500);
    else                                        setTimeout("type()", delay);
}

function unType() {
    if (debug && trace) console.log("unType()");

    dest.innerHTML = text[currentWord].substr(0, currentChar);
    if (--currentChar === 0) {
        dest.innerHTML = "<br>"; // otherwise page will jump due to line deletion
        if (currentWord + 1 === text.length) currentWord = 0;
        else ++currentWord;
        setTimeout("type()", 750);
    } else {
        setTimeout("unType()", delay/2);
    }
}

function startTyping(textParam, delayParam, destinationParam) {
    if (debug && trace) console.log("startTyping()");

    text = textParam;
    delay = delayParam;
    dest = document.getElementById(destinationParam);
    setTimeout("type()", 500);
}

window.onload = startTyping(["Software Developer", "University of Texas Student", "Entrepreneur"], 50, "messages");