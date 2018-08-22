console.log("testin one");

/*variables */
var surpriseArray = ["Are you a kid or a Squid?", "You might just be the fatest gun in the West","N U T T", "Things never turn out the way you expect them to","Where are your fingers?","G R A S S","Y I F F","MC Ride & you", "Your Moms might get Clapped","AURORA BOREALIS!","7.8/10 too much text","Eddy Went!","If your reading this, you can read","Don't worry, at least your not dead"," A S C E N D E D"];

var incrementScore = 1;
var ascendingLevels = 0;

var scoreText = document.getElementById("scoreText");

var button = document.getElementById("scoreButton");
var resetButton = document.getElementById("resetButton")
var resetConfirm = document.getElementById("resetSure");

var surpriseContainer = document.getElementById("surpriseContainer");

var audioForWoomies = document.getElementById("hidden_sounds1");
var audioForVeemos = document.getElementById("hidden_sounds2");

/* variables end */


/* checks if session storage is undefined */
if(localStorage.getItem("score") == undefined) {
    localStorage.setItem("score",0);
    scoreText.innerHTML = localStorage.score;
} else {
    scoreText.innerHTML = localStorage.score;
}

//event listener for score button
button.addEventListener("click", function(){
    
    localStorage.score = parseInt(localStorage.score) + incrementScore; // session storage stores int to strings; so parseInt does the job

    scoreText.innerHTML = localStorage.score; //displays incremented score
    
    if((parseInt(localStorage.score) % 10 == 0) && (parseInt(localStorage.score) !== 100) && (parseInt(localStorage.score) !== 420)) {
        audioForWoomies.play();
        Surprises(parseInt(localStorage.score)); //guds for reaching a certain score
    } else if(parseInt(localStorage.score) === 69) { //sexy Easter Egg
        audioForVeemos.play();
        EasterEggs(69);
    }
    else if(parseInt(localStorage.score) === 100) { //You missed some
        audioForVeemos.play();
        EasterEggs(100);
    }
    else if(parseInt(localStorage.score) === 420) {
        audioForVeemos.play();
        EasterEggs(420);
    }
});

//event listener for Reset Button 
resetButton.addEventListener("click", function() {
        resetConfirm.style.display = "inline-block";
});

//event listener for people with 5000 iq
scoreText.addEventListener("click", function() {
    ascendingLevels++;
    if(ascendingLevels % 20 === 0) {
        audioForVeemos.play();
        EasterEggs("CODENAME_ascended");
    }
})

function Surprises(score) {
    var surpriseElement = document.createElement("DIV");
    var surpriseText = document.createElement("p");

    surpriseElement.style.display = "table";
    surpriseElement.style.margin = "0% auto 5% auto";
    surpriseElement.style.width = "86%";
    surpriseElement.style.minHeight = "5em";
    surpriseElement.style.border = "3.25px solid rgb(183, 255, 212)";
    surpriseElement.style.borderRadius = "0.5%";
    
    surpriseText.style.fontSize = "1em";
    surpriseText.style.textAlign = "center";
    surpriseText.innerHTML = surpriseArray[Math.floor(Math.random()*surpriseArray.length)]; //makes a random surpise for every divisionals of 10
    
    surpriseElement.append(surpriseText);
    surpriseContainer.insertBefore(surpriseElement, surpriseContainer.firstChild);
    surpriseElement.className = "animateElements";
}

/* easter egg categories */
function EasterEggs(occasion) {
    var surpriseElement = document.createElement("DIV");
    var surpriseText;

    surpriseElement.style.display = "table";
    surpriseElement.style.margin = "0% auto 5% auto";
    surpriseElement.style.width = "86%";
    surpriseElement.style.minHeight = "5em";
    surpriseElement.style.border = "3.25px solid rgb(183, 255, 212)";
    surpriseElement.style.borderRadius = "0.5%";

    //checking for what the occasion is
    if(occasion === 69) {
        surpriseText = document.createElement("p");
        surpriseText.innerHTML = "How to Unsex Myself?";
        surpriseText.style.textAlign = "center";
    } else if(occasion === 100) {
        surpriseText = document.createElement("p");
        surpriseText.innerHTML = "There are hidden surprises that you probably never disovered";
        surpriseText.style.textAlign = "center";
    } else if(occasion === "CODENAME_woomy" || occasion === "CODENAME_veemo") {
        surpriseText = document.createElement("img");
        surpriseText.src = occasion === "CODENAME_woomy" ? "Secret/woomy.jpg" : "Secret/veemo.jpg";
        surpriseText.style.width = "10em";
        surpriseText.style.height = "10em";
        surpriseText.style.display = "table";
        surpriseText.style.margin = "0 auto";
        surpriseText.style.padding = "2.5%";
    } else if(occasion === 420) {
        surpriseText = document.createElement("img");
        surpriseText.src = "Secret/Grass.gif";
        surpriseText.style.width = "10em";
        surpriseText.style.height = "10em";
        surpriseText.style.display = "table";
        surpriseText.style.margin = "0 auto";
        surpriseText.style.padding = "2.5%";
    } else if(occasion === "CODENAME_ascended") {
        surpriseText = document.createElement("img");
        surpriseText.src = "Secret/ascending.jpg";
        surpriseText.style.width = "10em";
        surpriseText.style.height = "10em";
        surpriseText.style.display = "table";
        surpriseText.style.margin = "0 auto";
        surpriseText.style.padding = "2.5%";
    }

    surpriseElement.append(surpriseText);
    surpriseContainer.insertBefore(surpriseElement, surpriseContainer.firstChild);
    surpriseElement.className = "animateEasterEggs";
}

//to reset 
function Reset() {
    if(Reset.hidden === undefined) //functions can hold permanent values within them
        Reset.hidden = 0;

    localStorage.score = 0;
    scoreText.innerHTML = localStorage.score;
    resetConfirm.style.display = "none";
    Reset.hidden += 1;

    if(Reset.hidden === 10) { //secret Easter Egg for woomies
        EasterEggs("CODENAME_woomy");
    }
}

//to not reset 
function NoReset() {
    if(NoReset.hidden === undefined) //functions can hold permanent values within them
        NoReset.hidden = 0;
    resetConfirm.style.display = "none";
    NoReset.hidden += 1;

    if(NoReset.hidden === 10) //secret Easter Egg for Veemos
        EasterEggs("CODENAME_veemo");
}