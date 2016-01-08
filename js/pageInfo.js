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

// Preload images of androids
function preloadImages() {
    var images = new Array();
    for (var i = 1; i <= 8; ++i) {
        images[i] = new Image();
        images[i].src = "../img/androids/" + i + ".jpg";
    }
}
setTimeout("preloadImages()", 10000);

// Preload eggs
function preloadEggs() {
    var imagesLocs = new Array();
    var images = new Array();

    imageLocs.push("../img/sharingan/msharingan.png");
    imageLocs.push("../img/sharingan/msharingan-color.png");
    imageLocs.push("../img/sharingan/sharingan.png");
    imageLocs.push("../img/easter-eggs/android-doughnut.jpg");
    imageLocs.push("../img/easter-eggs/banana.jpg");
    imageLocs.push("../img/easter-eggs/daisy-straw.jpg");
    imageLocs.push("../img/easter-eggs/dragonball.png");
    imageLocs.push("../img/easter-eggs/eyepatch.jpg");
    imageLocs.push("../img/easter-eggs/fairytail.png");
    imageLocs.push("../img/easter-eggs/floppy-disk.jpg");
    imageLocs.push("../img/easter-eggs/geass.png");
    imageLocs.push("../img/easter-eggs/paypal-ceo.jpg");
    imageLocs.push("../img/easter-eggs/rasengan.png");
    imageLocs.push("../img/easter-eggs/steins-gate.png");
    imageLocs.push("../img/easter-eggs/white-beard.png");

    for (var i = 0; i < imagesLocs.length; ++i) {
        images[i] = new Image();
        images[i].src = imageLocs[i];
    }
}
setTimeout("preloadEggs()", 20000);