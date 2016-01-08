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

var easterImgClass = "text-center";
var easterImgStyle = "width: 100%; height: auto;";
var easterImgSrcBase = "../img/easter-eggs/";
var easterImg = "some HTML string -> use setImg()";

function setImg(newSrc) {
    easterImg = "<img src='" + easterImgSrcBase + newSrc + "'" +
                    " class = '" + easterImgClass + "'" +
                    " style='" + easterImgStyle + "'" +
                    " >";
}

// Android
$("#android-image").click(function () {
    setImg("android-doughnut.jpg");
    bootbox.alert({
        size: 'large',
        title: 'My kind of doughnut! (me at Google HQ)',
        message: easterImg,
        callback: function () {
            console.log("bootbox over and out");
        }
    });
});