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
    /*var alertDiv = document.createElement("div");
    var alertImg = document.createElement("img");
    alertImg.src = "../img/sharingan/msharingan.png";
    alertDiv.appendChild(alertImg);

    console.log('clicked android');
    alert();*/
    bootbox.alert("What's up?", function () {
        console.log("called bootbox");
    });

    bootbox.alert({
        size: 'small',
        message: "<h1>Yo</h1><br><br>More text!",
        callback: function () { console.log("bootboxed"); }
    })

});

//<li class="timeline-inverted wow rotateIn">
//    <div class="timeline-image">
//        <img class="img-circle img-responsive" src="../img/sharingan/msharingan.png" alt="Mangekyo Sharingan">
//    </div>
//</li>