// ----- Code For Navigation -----//

function redirect_marks() {
    window.location = "marks_percent.html";
}

function redirect_home() {
    window.location = "index.html";
}

function redirect_total() {
    window.location = "total_percent.html";
}

function redirect_help() {
    window.location = "help.html";
}

function redirect_feedback() {
    window.location = "feedback.html";
}

// ---- Feedback Send ---- //

Name = document.getElementById("Name").value;
Email = document.getElementById("Email").value;

console.log(Name);
console.log(Email);

function Send() {
    if ( Name == "" ) {
        document.getElementById("Name").innerHTML = "Please Enter This"
    }
}