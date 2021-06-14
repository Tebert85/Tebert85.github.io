//start button
function start() {
    console.log("start button");
    //creating a line to read Reading Data.. and setting the timing
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    //turns off the start button when click on
    document.getElementById("startButton").disabled = true;
    //turns on the stop button after the start button is clicked on
    document.getElementById("stopButton").disabled = false;
}

function stop() {
    clearInterval(timer);
    console.log("stop button push");
    //turns off the stop button when click on
    document.getElementById("stopButton").disabled = true;
    //turns on the stat button after the stop button is click on
    document.getElementById("startButton").disabled = false;
}
//making a data row for the information to come in and reset
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
//making a function to get the load the data and then return the data
function getDate() {
    var loadedData = loadData();
    return loadedData;
}


//making a fuction to setup the playStation
function playStation() {
    console.log("playStation() started");
    mySound = new sound("01-The Greatest Dwarven King.mp3");
    mySound.play();
}
//making fuction for the sound src
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    //creating the play function
    this.play = function () {
        this.sound.play();
    }
    //create a stop function
    this.stop = function () {
        this.sound.pause();
    }
}



//even better code wk3.1.1
/*as requsted by the fleetadmiral, we will go to:“Warning Less than ½ way to launch, time left = at 5 sec*/
function evenBtrCountdownTimer() {
    //setting the count variable to 10
    var count = 10;
    //setting the varisble
    for (var i = 0; i < 11; i++) {
        //setting the function for an if for the countdown to Blastoff!!
        if (i == 10) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
            }, i * 1000);
            //setting the else if fuction for the half way countdown
        } else if (i > 4) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
                count--;
            }, i * 1000);
            //setting the else fuction for the coutdown
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = count;
                count--;
            }, i * 1000);
        }
    }
}


//better countdown timer with loops for Wk 3-1
function btrCountdownTimer() {
    //setting the count variable to 10
    var count = 10;
    //setting the varisble
    for (var i = 0; i < 10; i++) {
        //setting the time for the countdown timer
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = count;
            count--;
        }, 1000 * i);//setting the wait time
    }
    //setting the time out function to display Blastoff!!! when the timer is at 0
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
    }, 10000);
}


//wk1-2 countdown timer should run from 10....1 then Blastoff!!!
function startCountdown() {
    var count = 10;
    //the count down timer should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //after 1 sec. will run code in here
        //the count down timer should display 9
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 1
        count = count - 1;
    }, 1000); //set the wait time as 1 sec

    setTimeout(function () {
        //the count down timer should display 8
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000); //set the wait time as 2 sec

    setTimeout(function () {
        //the count down timer should display 7
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000); //set the wait time as 3 sec

    setTimeout(function () {
        //the count down timer should display 6
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000); //set the wait time as 4 sec

    setTimeout(function () {
        //the count down timer should display 5
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000); //set the wait time as 5 sec

    setTimeout(function () {
        //the count down timer should display 4
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000); //set the wait time as 6 sec

    setTimeout(function () {
        //the count down timer should display 3
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000); //set the wait time as 7 sec

    setTimeout(function () {
        //the count down timer should display 2
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000); //set the wait time as 8 sec

    setTimeout(function () {
        //the count down timer should display 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000); //set the wait time as 9 sec

    setTimeout(function () {
        //the count down timer should display Blastoff!!!
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 10000);
}

//function to play craps
function playCraps() {
    //displaying on the console log that the Craps game has started
    console.log("playCraps has stated");
    //when die1 is roll will only get a whole number between 1 and 6 and then display it
    var die1;
    die1 = Math.ceil(Math.random() * 6);
    document.getElementById("die1Results").innerHTML = "The value of die1 is: " + die1;
    //when die1 is roll will only get a whole number between 1 and 6 and then display it
    var die2;
    die2 = Math.ceil(Math.random() * 6);
    document.getElementById("die2Results").innerHTML = "The value of die2 is: " + die2;
    //show the dieSum of die1 and die2
    var dieSum = die1 + die2;
    document.getElementById("sumResults").innerHTML = "The sum of die1 plus die2 is: " + dieSum;
    //dieSum == 7 or dieSum == 11 is a test for when you lose 
    if (dieSum == 7 || dieSum == 11) {
        document.getElementById("crapsResults").innerHTML = "Craps! You lose!!!";
        //die1 == die2 is a test for doubles, die1 % 2 == 0 is a test for evens
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Hurray!! Doubles! You win!!";
        //if you do not get doubles or a 7 or 11 then you will try again
    } else {
        document.getElementById("crapsResults").innerHTML = "Please try again.";
    }
}
//creating a class for the DAta to be inputed in at.
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;

    }

}
//setting up the function for the button to go to index
function indexTrans() {
    location.replace("index.html");
}
//setting up the function for the button to go to odjectives
function odjTrans() {
    location.replace("odjectives.html");
}
//setting up the fuction for the login button
function loginTrans() {
    location.replace("login.html");
}