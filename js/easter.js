var clicked = false;
var eggCount = 0;
var chosenNums = [];
var easterImgClass = "text-center";
var easterImgStyle = "width: 100%; height: auto;";
var easterImgSrcBase = "../img/easter-eggs/";
var easterImg = "some HTML string -> use setImg()";

function setImg(newSrc) {
    easterImg = "<img src='" + easterImgSrcBase + newSrc + "'" +
                    " class = '" + easterImgClass + "'" +
                    " style='" + easterImgStyle + "'" +
                    " >" + 
                    "You found an Easter Egg!";
}

// GISD - Sharingan
$("#gisd-image").click(function () {

    if (clicked) return;
    else clicked = true;

    rasengan();
});

function rasengan() {
    console.log("rasengan!");

    // create image
    var img = document.createElement("img");
    img.className = "img-circle img-responsive";
    img.alt = "Easter Egg " + randNum + " Special";
    img.onclick = rasengan;

    // Start with Naruto only
    if (eggCount++ <= 3) {

        // find a new picture
        var randNum = Math.floor(Math.random() * 4);
        while ($.inArray(randNum, chosenNums) != -1) {
            randNum = Math.floor(Math.random() * 4);
        }
        chosenNums.push(randNum);

        switch (randNum) {
            case 0: img.src = "../img/sharingan/msharingan.png"; break;
            case 1: img.src = "../img/sharingan/msharingan-color.png"; break;
            case 2: img.src = "../img/sharingan/sharingan.png"; break;
            case 3: img.src = "../img/easter-eggs/rasengan.png"; break;
        }
    }

    // non-Naruto easter-eggs
    else {
        var randNum = Math.floor(Math.random() * 6);
        switch (randNum) {
            case 0: img.src = "../img/easter-eggs/dragonball.png"; break;
            case 1: img.src = "../img/easter-eggs/fairytail.png"; break;
            case 2: img.src = "../img/easter-eggs/geass.png"; break;
            case 3: img.src = "../img/easter-eggs/stens-gate.png"; break;
            case 4: img.src = "../img/easter-eggs/straw-hats.png"; break;
            case 5: img.src = "../img/easter-eggs/white-beard.png"; break;
        }
    }

    // create div
    var div = document.createElement("div");
    div.className = "timeline-image";

    // create li
    var li = document.createElement("li");
    li.className = "timeline-inverted wow rotateIn";

    div.appendChild(img);
    li.appendChild(div);
    $("#timeline-list").append(li);
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

// HomeAway
$("#homeaway-image").click(function () {
    setImg("banana.jpg");
    bootbox.alert({
        size: 'large',
        title: "I don't work there at this time of writing so....here's a funny banana I made :p",
        message: easterImg,
        callback: function () {
            console.log("bootbox over and out");
        }
    });
});

// PayPal
$("#paypal-image").click(function () {
    setImg("paypal-ceo.jpg");
    bootbox.alert({
        size: 'large',
        title: 'Me and Dan Schulman (CEO of PayPal)',
        message: easterImg,
        callback: function () {
            console.log("bootbox over and out");
        }
    });
});

// IBM
$("#ibm-image").click(function () {
    setImg("floppy-disk.jpg");
    bootbox.alert({
        size: 'large',
        title: 'The oldest of companies',
        message: easterImg,
        callback: function () {
            console.log("bootbox over and out");
        }
    });
});

// Interests
$("#interests-image").click(function () {
    setImg("eyepatch.jpg");
    bootbox.alert({
        size: 'large',
        title: 'Why so serious?',
        message: easterImg,
        callback: function () {
            console.log("bootbox over and out");
        }
    });
});

// Details
$("#details-image").click(function () {
    setImg("daisy-straw.jpg");
    bootbox.alert({
        size: 'large',
        title: 'She helped on the website',
        message: easterImg,
        callback: function () {
            console.log("bootbox over and out");
        }
    });
});