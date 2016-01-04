var debug = false;
var trace = false;

var text = [];
var delay = 50;
var currentWord = 0;
var currentChar = 0;
var dest = null;

console.log("testing - 3");

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
var classCycle = ['androids1', 'androids2', 'androids3'];

setInterval(
    function () {
        var randomNumber = Math.floor(Math.random() * classCycle.length);
        var classToAdd = classCycle[randomNumber];
        $('header').addClass(classToAdd);
    }, 1000
);


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