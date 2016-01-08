// create image
var img = document.createElement("img");
img.addClass("img-circle");
img.addClass("img-responsive");
img.src = "../img/sharingan/msharingan.png";
img.alt = "Mangekyo Sharingan";

// create div
var div = document.createElement("div");
div.className = "timeline-image";

// create li
var li = document.createElement("li");
li.addClass("timeline-inverted");
li.addClass("wow");
li.addClass("rotateIn");

// add to timeline
div.appendChild(img);
$("#timeline-list").append(li);

//<li class="timeline-inverted wow rotateIn">
//    <div class="timeline-image">
//        <img class="img-circle img-responsive" src="../img/sharingan/msharingan.png" alt="Mangekyo Sharingan">
//    </div>
//</li>