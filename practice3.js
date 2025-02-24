function verify() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if (pass1.length < 8) {
        alert("Your Password Must Be At Least 8 Characters Long.");
    } else if (pass1 !== pass2) {
        alert("Passwords Do Not Match. Try Again.");
    } else {
        alert("There's A Match!");
    }
}
