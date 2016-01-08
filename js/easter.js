console.log("current version - 1");

/** GISD - Sharingan **/
$("#gisd-image").click(addSharingan());

// create image
var img = document.createElement("img");
img.className = "img-circle img-responsive";
img.src = "../img/sharingan/msharingan.png";
img.alt = "Mangekyo Sharingan";

// create div
var div = document.createElement("div");
div.className = "timeline-image";

// create li
var li = document.createElement("li");
li.className = "timeline-inverted wow rotateIn";

// add to timeline
function addSharingan() {
    div.appendChild(img);
    li.appendChild(div);
    $("#timeline-list").append(li);
}

var easterImg = document.createElement("img");
easterImg.className = "text-center";
easterImg.style.width = "100%";
easterImg.style.height = "100%";

function updtImg(newSrc) {
    easterImg.src = "../img/easter-eggs/" + newSrc;
}

// Android
$("#android-image").click(function () {
    updtImg("android-doughnut.jpg");
    bootbox.alert({
        size: 'large',
        title: 'My kind of doughnut! (me at Google HQ)',
        message: easterImg.innerHTML,
        callback: function () {
            console.log("bootbox over and out");
        }
    })

});