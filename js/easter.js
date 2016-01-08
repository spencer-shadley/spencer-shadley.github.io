console.log("current version - 2");

/** GISD - Sharingan **/
$("#gisd-image").click(function () {

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

    div.appendChild(img);
    li.appendChild(div);
    $("#timeline-list").append(li);
});

var easterImg = document.createElement("img");
easterImg.className = "text-center";
easterImg.style.width = "100%";
easterImg.style.height = "100%";
easterImgStr = "initial";

function updtImg(newSrc) {
    easterImg.src = "../img/easter-eggs/" + newSrc;
    easterImgStr = "easterImg.innerHTML";
}

// Android
$("#android-image").click(function () {
    updtImg("android-doughnut.jpg");
    console.log(easterImgStr);
    console.log(easterImg.innerHTML);
    console.log(easterImg.innerText);
    console.log(easterImg.toString);
    bootbox.alert({
        size: 'large',
        title: 'My kind of doughnut! (me at Google HQ)',
        message: easterImgStr,
        callback: function () {
            console.log("bootbox over and out");
        }
    })

});