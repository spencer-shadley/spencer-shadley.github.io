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

    var narutoEggs = [
        "../img/sharingan/msharingan.png",
        "../img/sharingan/msharingan-color.png",
        "../img/sharingan/sharingan.png",
        "../img/easter-eggs/rasengan.png"
    ];
    var otherEggs = [
        "../img/easter-eggs/dragonball.png",
        "../img/easter-eggs/fairytail.png",
        "../img/easter-eggs/geass.png",
        "../img/easter-eggs/steins-gate.png",
        "../img/easter-eggs/white-beard.png",
        "../img/sharingan/msharingan.png",
        "../img/sharingan/msharingan-color.png",
        "../img/sharingan/sharingan.png",
        "../img/easter-eggs/rasengan.png"
    ];

    // create image
    var img = document.createElement("img");
    img.className = "img-circle img-responsive";
    img.alt = "Easter Egg " + randNum + " Special";
    img.onclick = rasengan;

    function setEgg(eggs) {

        // find a new picture
        var randNum = Math.floor(Math.random() * eggs.length);
        while ($.inArray(randNum, chosenNums) != -1)
            randNum = Math.floor(Math.random() * eggs.length);
        chosenNums.push(randNum);

        img.src = eggs[randNum];
    }

    function geassEgg() {
        console.log("You were chosen");
    }

    // egg picking
    if (eggCount++ < narutoEggs.length) setEgg(narutoEggs);
    else if (eggCount === 10)           geassEgg();
    else                                setEgg(otherEggs);

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
        title: 'She helped make this site',
        message: easterImg,
        callback: function () {
            console.log("bootbox over and out");
        }
    });
});