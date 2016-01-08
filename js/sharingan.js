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

// on clicking GISD the sharingan appears
$("#gisd-image").click(addSharingan());

$("#android-image").click(function () {
    var alertImg = document.createElement("img");
    alertImg.src = "../img/sharingan/msharingan.png";

    console.log('clicked android');

    bootbox.alert({
        size: 'large',
        message: "<img src='../img/sharingan/msharingan.png' class='text-center'>",
        callback: function () { console.log("bootboxed"); }
    })

});

//<li class="timeline-inverted wow rotateIn">
//    <div class="timeline-image">
//        <img class="img-circle img-responsive" src="../img/sharingan/msharingan.png" alt="Mangekyo Sharingan">
//    </div>
//</li>