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
    var geassEggs = [
        "../img/easter-eggs/geass.png",
        "../img/easter-eggs/geass.png"
    ];
    var otherEggs = [
        "../img/easter-eggs/dragonball.png",
        "../img/easter-eggs/fairytail.png",
        "../img/easter-eggs/steins-gate.png",
        "../img/easter-eggs/white-beard.png",
        "../img/sharingan/msharingan.png",
        "../img/sharingan/msharingan-color.png",
        "../img/sharingan/sharingan.png",
        "../img/easter-eggs/rasengan.png"
    ];

    var geassQuotes = ["You don't want it to end here, do you?",
                        "You appear to have a reason for living.",
                        "If I grant you power, could you go on? I propose a deal - in exchange for this power, you must agree to make my one wish come true. Accept this contract, and you accept its conditions. While living in the world of humans, you will live unlike any other: a different providence, a different time, a different life. The Power of the King will condemn you to a life of solitude. Are you prepared for this?"
    ];

    // create image
    var img = document.createElement("img");
    img.className = "img-circle img-responsive";
    img.alt = "Easter Egg Special";
    img.onclick = rasengan;

    // egg picking
    if (eggCount++ < narutoEggs.length) {
        setEgg(narutoEggs, true); // TODO: make setEgg return the string to set
    }
    else if (eggCount === 13) {
        makeGeassBox();
    }
    else {
        setEgg(otherEggs, false);
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

    function setEgg(eggs, naruto) {

        // find a new picture
        var randNum = Math.floor(Math.random() * eggs.length);
        while (naruto && $.inArray(randNum, chosenNums) != -1)
            randNum = Math.floor(Math.random() * eggs.length);
        chosenNums.push(randNum);

        img.src = eggs[randNum];
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

                        if (geassQuotes.empty() !== 0)
                            makeGeassBox();
                        else {
                            console.log("Geass activated.");
                            setEgg(geassEggs, false);
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