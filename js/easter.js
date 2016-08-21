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
    preloadEggs();
}

function pictureBox(imgName, titleText) {
    setImg(imgName);
    bootbox.alert({
        size: 'large',
        title: titleText,
        message: easterImg,
        callback: function () {
            console.log("bootbox over and out");
        }
    });
}

$.ajax({
    url: "http://spencer-shadley.github.io/img/easter-eggs",
    success: function(data){
        $(data).find("td > a").each(function(){
            // will loop through
            alert("Found a file: " + $(this).attr("href"));
        });
    }
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
        "../img/easter-eggs/steins-gate.png",
        "../img/easter-eggs/white-beard.png",
        "../img/sharingan/msharingan.png",
        "../img/sharingan/msharingan-color.png",
        "../img/sharingan/sharingan.png",
        "../img/easter-eggs/rasengan.png",
        "../img/easter-eggs/pokeball-pixels.png",
        "../img/easter-eggs/pokeball-cyndaquil.png",
        "../img/easter-eggs/ansatsu_kyoushitsu.png",
        "../img/easter-eggs/nanatsu_fox.png",
        "../img/easter-eggs/nanatsu_dragon.png",
        "../img/easter-eggs/nanatsu_hawk.png",
        "../img/easter-eggs/nanatsu_snake.png"
    ];

    var geassQuotes = [ "If I grant you power, could you go on? I propose a deal - in exchange for this power, you must agree to make my one wish come true. Accept this contract, and you accept its conditions. While living in the world of humans, you will live unlike any other: a different providence, a different time, a different life. The Power of the King will condemn you to a life of solitude. Are you prepared for this?",
                        "You appear to have a reason for living.",
                        "You don't want it to end here, do you?"
    ];

    // create image
    var img = document.createElement("img");
    img.className = "img-circle img-responsive";
    img.alt = "Easter Egg Special";
    img.onclick = rasengan;

    // egg picking
    if (eggCount++ < narutoEggs.length)     setEgg(narutoEggs);
    else if (eggCount === 13)               makeGeassBox();
    else                                    setEgg(otherEggs);

    // create div
    var div = document.createElement("div");
    div.className = "timeline-image";

    // create li
    var li = document.createElement("li");
    li.className = "timeline-inverted wow rotateIn";

    div.appendChild(img);
    li.appendChild(div);
    $("#timeline-list").append(li);

    function setEgg(eggs) {

        // find a new picture
        var randNum = Math.floor(Math.random() * eggs.length);
        while ($.inArray(randNum, chosenNums) != -1)
            randNum = Math.floor(Math.random() * eggs.length);
        chosenNums.push(randNum);

        // set the picture
        img.src = eggs[randNum];

        // reset the chosen eggs if all have been chosen
        if(chosenNums.length === eggs.length)
            chosenNums = [];
    }

    function makeGeassBox() {
        bootbox.dialog({
            size: 'small',
            title: 'Contract',
            message: geassQuotes.pop(),
            buttons: {
                success: {
                    label: "Accept",
                    className: "btn-success",
                    callback: function () {
                        console.log("accepted");

                        if (geassQuotes.length !== 0)
                            makeGeassBox();
                        else {
                            console.log("Geass activated.");
                            // setEgg(geassEggs, false);
                            img.src = "../img/easter-eggs/geass.png";
                        }
                    }
                },
                danger: {
                    label: "Reject",
                    className: "btn-danger",
                    callback: function () {
                        console.log("rejected");
                        setEgg(otherEggs, false);
                    }
                }
            }
        });
    }
}

// GISD - Infinite Circles
$("#gisd-image").click(function () {

    if (clicked) return;
    else clicked = true;

    rasengan();
    preloadEggs();
});

// Android
$("#android-image").click(function () {
    pictureBox("android-doughnut.jpg", "My kind of doughnut! (me at Google HQ)");
});

// Bizler
$("#bizler-image").click(function () {
    pictureBox("banana.jpg", "It's still a secret so here's a banana I made");
});

// PayPal
$("#paypal-image").click(function () {
    pictureBox("paypal-ceo.jpg", "Me and Dan Schulman (CEO of PayPal)");
});

// IBM
$("#ibm-image").click(function () {
    pictureBox("floppy-disk.jpg", "The oldest of companies");
});

// Interests
$("#interests-image").click(function () {
    pictureBox("eyepatch.jpg", "Why so serious?");
});

// Details
$("#details-image").click(function () {
    pictureBox("daisy-straw.jpg", "She helped make this site");
});

// Creative Easter Egg
$("#creative-egg").click(function () {
    pictureBox("ralph.gif", "Keep going, there are more to be found!");
});

// IE
$("#ie-egg").click(function () {
    pictureBox("ie-pokemon.jpg", "But it's pre-installed!");
});

// IE Face
$("#ie-face-egg").click(function () {
    pictureBox( "ie-graph.jpg", "Consumers think they know the pain");
});