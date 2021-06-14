function checkCreds() {
    //setting up the criteria for login
    console.log("checkCreds() stated");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName + " " + lastName;
    var badgeNumb = document.getElementById("badgeID").value;

    //validate fullName
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Invalid Full Name, please resubmit";
        //validate badgeNumb
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number, please resubmit";
        //login is granted after fullName and badgeNumb is validated
    } else {
        console.log("submission passes!");
        alert("Access granted! Welcome, " + fullName);
        location.replace("UATSpace.html");
    }



}