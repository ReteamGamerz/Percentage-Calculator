
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

//--- Code For The Buttons ----//

function get_10() {
    document.getElementById("input_total").value = "10";
 }
 
 function get_20() {
     document.getElementById("input_total").value = "20";
 }
 
 function get_30() {
     document.getElementById("input_total").value = "30";
 }
 
 function get_40() {
     document.getElementById("input_total").value = "40";
 }
 
 function get_50() {
     document.getElementById("input_total").value = "50";
 }
 
 function get_60() {
     document.getElementById("input_total").value = "60";
 }
 
 
 function get_70() {
     document.getElementById("input_total").value = "70";
 }
 
 function get_80() {
     document.getElementById("input_total").value = "80";
 }
 
 function get_90() {
     document.getElementById("input_total").value = "90";
 }
 
 function get_100() {
     document.getElementById("input_total").value = "100";
 }

 //-----Code to get Percentage ----//

 function getTotalPercent() {

    Maths = document.getElementById("input_received_maths").value;
    Science = document.getElementById("input_received_science").value;
    Social = document.getElementById("input_received_social").value;
    Second = document.getElementById("input_received_2nd").value;
    Third = document.getElementById("input_received_3rd").value;
    English = document.getElementById("input_received_english").value;
    Total_Marks = document.getElementById("input_total").value;

    total_mul_6 = document.getElementById("input_total").value * 6;
    recieved = Number(Maths) + Number(Science) + Number(Social) + Number(Second) + Number(Third) + Number(English);
    answer = (recieved / total_mul_6) * 100;
    marksLost = total_mul_6 - recieved;

    document.getElementById("Percentage").innerHTML = "Total Percentage = " + answer + "%";
    document.getElementById("Marks").innerHTML = "Total Marks = " + recieved;
    document.getElementById("error_marks").innerHTML = "Total Marks Lost = " + marksLost ;

    console.log("Maths = " + Maths);
    console.log("Science = " + Science);
    console.log("Social = " + Social);
    console.log("2nd Language = " + Second);
    console.log("3rd Language = " + Third);
    console.log("English = " + English);
    console.log("Total Marks Of The Exam = " + Total_Marks);

    console.log("Total Marks = " + total_mul_6);
    console.log("Recieved Marks = " + recieved);
    console.log("Total Percent = " + answer);
    console.log("Total Marks Lost = " + marksLost);

    //------ Code For Zenbot ---------------//

    ////------------ NoInputError---------------////

    if (Maths == "") {
        document.getElementById("error_zenfinder").innerHTML = "Error : Please Input A Number (Maths)";

        document.getElementById("Marks").innerHTML = "Total Marks = %Error%";
        document.getElementById("Percentage").innerHTML = "Total Percentage = %Error%";
        document.getElementById("error_marks").innerHTML = "Total Marks Lost = %Error%";
        document.getElementById("error_marks_average").innerHTML = "Average Marks : %Error%"
        //------Code For Console Display -------//
        console.log("Console : NoInputError -> Maths");
    }

    if (Science == "") {
        document.getElementById("error_zenfinder").innerHTML = "Error : Please Input A Number (Science)";

        document.getElementById("Marks").innerHTML = "Total Marks = %Error%";
        document.getElementById("Percentage").innerHTML = "Total Percentage = %Error%";
        document.getElementById("error_marks").innerHTML = "Total Marks Lost = %Error%";
        document.getElementById("error_marks_average").innerHTML = "Average Marks : %Error%"
        //------Code For Console Display -------//
        console.log("Console : NoInputError -> Science");
    }

    if (Social == "") {
        document.getElementById("error_zenfinder").innerHTML = "Error : Please Input A Number (Social)";

        document.getElementById("Marks").innerHTML = "Total Marks = %Error%";
        document.getElementById("Percentage").innerHTML = "Total Percentage = %Error%";
        document.getElementById("error_marks").innerHTML = "Total Marks Lost = %Error%";
        document.getElementById("error_marks_average").innerHTML = "Average Marks : %Error%"
        //------Code For Console Display -------//
        console.log("Console : NoInputError -> Social");
    } 

    if (English == "") {
        document.getElementById("error_zenfinder").innerHTML = "Error : Please Input A Number (English)";

        document.getElementById("Marks").innerHTML = "Total Marks = %Error%";
        document.getElementById("Percentage").innerHTML = "Total Percentage = %Error%";
        document.getElementById("error_marks").innerHTML = "Total Marks Lost = %Error%";
        document.getElementById("error_marks_average").innerHTML = "Average Marks : %Error%"
        //------Code For Console Display -------//
        console.log("Console : NoInputError -> English");
    }

    if (Second == "") {
        document.getElementById("error_zenfinder").innerHTML = "Error : Please Input A Number (II Lang)";

        document.getElementById("Marks").innerHTML = "Total Marks = %Error%";
        document.getElementById("Percentage").innerHTML = "Total Percentage = %Error%";
        document.getElementById("error_marks").innerHTML = "Total Marks Lost = %Error%";
        document.getElementById("error_marks_average").innerHTML = "Average Marks : %Error%"
        //------Code For Console Display -------//
        console.log("Console : NoInputError -> II Language");
    }

    if (Third == "") {
        document.getElementById("error_zenfinder").innerHTML = "Error : Please Input A Number (III Lang)";

        document.getElementById("Marks").innerHTML = "Total Marks = %Error%";
        document.getElementById("Percentage").innerHTML = "Total Percentage = %Error%";
        document.getElementById("error_marks").innerHTML = "Total Marks Lost = %Error%";
        document.getElementById("error_marks_average").innerHTML = "Average Marks : %Error%"
        //------Code For Console Display -------//
        console.log("Console : NoInputError -> III Language");
    }

    if (total_mul_6 == "") {
        document.getElementById("error_zenfinder").innerHTML = "Error : Please Input A Number (Total Marks)";

        document.getElementById("Marks").innerHTML = "Total Marks = %Error%";
        document.getElementById("Percentage").innerHTML = "Total Percentage = %Error%";
        document.getElementById("error_marks").innerHTML = "Total Marks Lost = %Error%";
        document.getElementById("error_marks_average").innerHTML = "Average Marks : %Error%"
        //------Code For Console Display -------//
        console.log("Console : NoInputError -> Total Marks");
    }

    
    ///------------------------------------///

    ///// --------------- Code For Averaging -----------------------/////

    // ------- Code Of Average Marks ---------//

    average_marks = ( recieved ) / 6;
    document.getElementById("error_marks_average").innerHTML = "Average Marks = " + average_marks;
    console.log("Average Marks = " + average_marks);  

    ///// ---------------------------------------------------------/////

    //------ Code For 'Out Of Marks' -------//

    if(Total_Marks == 10) {
        document.getElementById("Marks").innerHTML = "Total Marks = " + recieved + " | 60";
    }

    if(Total_Marks == 20) {
        document.getElementById("Marks").innerHTML = "Total Marks = " + recieved + " | 120";
    }

    if(Total_Marks == 30) {
        document.getElementById("Marks").innerHTML = "Total Marks = " + recieved + " | 180";
    }

    if(Total_Marks == 40) {
        document.getElementById("Marks").innerHTML = "Total Marks = " + recieved + " | 240";
    }

    if(Total_Marks == 50) {
        document.getElementById("Marks").innerHTML = "Total Marks = " + recieved + " | 300";
    }

    if(Total_Marks == 60) {
        document.getElementById("Marks").innerHTML = "Total Marks = " + recieved + " | 360";
    }

    if(Total_Marks == 70) {
        document.getElementById("Marks").innerHTML = "Total Marks = " + recieved + " | 420";
    }

    if(Total_Marks == 80) {
        document.getElementById("Marks").innerHTML = "Total Marks = " + recieved + " | 480";
    }

    if(Total_Marks == 90) {
        document.getElementById("Marks").innerHTML = "Total Marks = " + recieved + " | 540";
    }

    if(Total_Marks == 100) {
        document.getElementById("Marks").innerHTML = "Total Marks = " + recieved + " | 600";
    }
 }

 function InputClear() {

     document.getElementById("input_received_maths").value = "";
     document.getElementById("input_received_science").value = "";
     document.getElementById("input_received_social").value = "";
     document.getElementById("input_received_2nd").value = "";
     document.getElementById("input_received_3rd").value = "";
     document.getElementById("input_received_english").value = "";
     document.getElementById("input_total").value = "";

     document.getElementById("Marks").innerHTML = "Total Marks = ";
     document.getElementById("Percentage").innerHTML = "Total Percentage = ";
     document.getElementById("error_marks").innerHTML = "Total Marks Lost = ";
     document.getElementById("error_marks_average").innerHTML = "Average Marks = "

     console.log("Deleted Text -> Maths");
     console.log("Deleted Text -> Science");
     console.log("Deleted Text -> Social");
     console.log("Deleted Text -> II Language");
     console.log("Deleted Text -> III Language");
     console.log("Deleted Text -> Total Marks");

     console.log("Deleted Text -> Marks | Total Marks");
     console.log("Deleted Text -> Percentage");
     console.log("Deleted Text -> Marks Lost");
     console.log("Deleted Text -> Average Marks");

  
 }




// ---- Code For Help Navigation ----//

function Help() {
    window.location = "help.html";
}