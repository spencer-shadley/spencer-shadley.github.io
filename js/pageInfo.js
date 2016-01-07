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

// Preload android images
function preloadImages() {
    var images = new Array();
    for (var i = 1; i <= 8; ++i) {
        images[i] = new Image();
        images[i].src = "../img/androids/" + i + ".jpg";
    }
}
setTimeout("preloadImages()", 10000);