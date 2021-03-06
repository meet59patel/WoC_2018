//<!--Created by Meet Patel (201801415). All rights reserved :P -->
var currentGenre = localStorage.getItem("genreSelected");

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question dynamically
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options dynamically
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            checkifcorrect("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function checkifcorrect(id, checkifcorrect) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.checkifcorrect(checkifcorrect);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("questionStatus");
    var y = localStorage.getItem("storedName");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length +  ".&nbsp;&nbsp;" + y + " is playing.";
    element.innerHTML += "<br>" + "Genre: " + currentGenre;
    document.getElementById("dot"+currentQuestionNumber).style.backgroundColor = "#2fe66c";

};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    document.getElementById("time").remove();
    document.getElementById("creditfooter").style.fontSize = "40px";
    localStorage.setItem("currentScore", quiz.score);
    if(quiz.score == questions.length){
        gameOverHTML +=  "Perfect Score!    ";
        gameOverHTML += "<br>"+"<img src=\"dancing.gif\">";
    }
    else{
        gameOverHTML += "<br>" + "Do better next time.";
        gameOverHTML += "<br>"+"<img src=\"tenor.gif\">";
    }
    //var element = document.getElementById("quiz");
    var element = document.getElementById("question");
    element.innerHTML = gameOverHTML;
    document.getElementById("options").remove();
    document.getElementById("questionStatus").innerHTML = "";
    var y = localStorage.getItem("storedName");
    document.getElementById("playAgain").innerHTML = "Click to play again, " + y + "!";
    document.getElementById("feedback").innerHTML = "<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSeQE6tjV0aU_iWYfYCPyBTlGKmdBEdy9O8ONvC1GwjdkrjVCQ/viewform?embedded=true\" width=\"1430\" height=\"450\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"100\">Loading...</iframe>";
    document.getElementById("score").scrollIntoView();
    document.getElementById("statusDots").remove();
    document.getElementById("leaderboardBtn").style.visibility = "visible";
};

function showLeaderboard(){
    javascript:window.location='leaderboards.html';
}

var string1 = "Computer";
var string2 = "BigBangTheory";
var string3 = "Politics";
var questions;

var _0xcd12=["\x57\x68\x69\x63\x68\x20\x6F\x6E\x65\x20\x69\x73\x20\x6E\x6F\x74\x20\x61\x6E\x20\x6F\x62\x6A\x65\x63\x74\x20\x6F\x72\x69\x65\x6E\x74\x65\x64\x20\x70\x72\x6F\x67\x72\x61\x6D\x6D\x69\x6E\x67\x20\x6C\x61\x6E\x67\x75\x61\x67\x65\x3F","\x4A\x61\x76\x61","\x43\x23","\x52\x75\x62\x79","\x43","\x57\x68\x69\x63\x68\x20\x6C\x61\x6E\x67\x75\x61\x67\x65\x20\x69\x73\x20\x75\x73\x65\x64\x20\x66\x6F\x72\x20\x73\x74\x79\x6C\x69\x6E\x67\x20\x77\x65\x62\x20\x70\x61\x67\x65\x73\x3F","\x48\x54\x4D\x4C","\x4A\x51\x75\x65\x72\x79","\x43\x53\x53","\x58\x4D\x4C","\x57\x68\x69\x63\x68\x20\x61\x6D\x6F\x6E\x67\x20\x74\x68\x65\x20\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x20\x66\x61\x63\x69\x6C\x69\x74\x61\x74\x65\x73\x20\x75\x73\x65\x72\x73\x20\x74\x6F\x20\x75\x70\x6C\x6F\x61\x64\x20\x77\x65\x62\x20\x70\x61\x67\x65\x20\x66\x69\x6C\x65\x73\x20\x66\x72\x6F\x6D\x20\x74\x68\x65\x20\x70\x65\x72\x73\x6F\x6E\x61\x6C\x20\x63\x6F\x6D\x70\x75\x74\x65\x72\x73\x20\x74\x6F\x20\x73\x65\x72\x76\x65\x72\x3F","\x54\x72\x61\x6E\x73\x6D\x69\x73\x73\x69\x6F\x6E\x20\x43\x6F\x6E\x74\x72\x6F\x6C\x20\x50\x72\x6F\x74\x6F\x63\x6F\x6C","\x46\x69\x6C\x65\x20\x54\x72\x61\x6E\x73\x66\x65\x72\x20\x50\x72\x6F\x74\x6F\x63\x6F\x6C","\x50\x48\x50","\x48\x54\x54\x50","\x42\x49\x4F\x53\x20\x69\x73\x20\x5F\x5F\x5F\x5F\x5F\x5F\x2E","\x42\x65\x74\x74\x65\x72\x20\x49\x6E\x74\x65\x67\x72\x61\x74\x65\x64\x20\x4F\x70\x65\x72\x61\x74\x69\x6E\x67\x20\x53\x79\x73\x74\x65\x6D","\x42\x61\x74\x74\x65\x72\x79\x20\x49\x6E\x74\x65\x67\x72\x61\x74\x65\x64\x20\x4F\x70\x65\x72\x61\x74\x69\x6E\x67\x20\x53\x79\x73\x74\x65\x6D","\x42\x61\x73\x69\x63\x20\x49\x6E\x70\x75\x74\x20\x4F\x75\x74\x70\x75\x74\x20\x53\x79\x73\x74\x65\x6D","\x42\x61\x63\x6B\x75\x70\x20\x49\x6E\x70\x75\x74\x20\x4F\x75\x74\x70\x75\x74\x20\x53\x79\x73\x74\x65\x6D","\x57\x41\x56\x20\x66\x69\x6C\x65\x20\x66\x6F\x72\x6D\x61\x74\x20\x69\x73\x20\x61\x73\x73\x6F\x63\x69\x61\x74\x65\x64\x20\x77\x69\x74\x68\x20\x5F\x5F\x5F\x2E","\x41\x75\x64\x69\x6F","\x56\x69\x64\x65\x6F","\x49\x6D\x61\x67\x65","\x4D\x53\x20\x57\x6F\x72\x64\x20\x43\x6F\x6E\x66\x69\x67\x75\x72\x61\x74\x69\x6F\x6E\x20\x46\x69\x6C\x65","\x46\x4F\x52\x54\x52\x41\x4E\x20\x69\x73\x20\x61\x63\x72\x6F\x6E\x79\x6D\x20\x66\x6F\x72\x3F","\x46\x6F\x72\x20\x54\x72\x61\x6E\x73\x6C\x61\x74\x69\x6E\x67","\x46\x6F\x72\x74\x75\x6E\x61\x74\x65\x20\x52\x61\x6E\x64\x6F\x6D\x69\x73\x65\x72","\x46\x4F\x52\x54\x20\x52\x61\x69\x6E\x20\x41\x63\x74\x69\x6F\x6E\x20\x4E\x65\x74\x77\x6F\x72\x6B","\x46\x6F\x72\x6D\x75\x6C\x61\x20\x54\x72\x61\x6E\x73\x6C\x61\x74\x69\x6F\x6E","\x47\x4E\x55\x20\x73\x74\x61\x6E\x64\x73\x20\x66\x6F\x72\x20\x5F\x5F\x5F\x2E","\x47\x65\x72\x6D\x61\x6E\x20\x4E\x61\x74\x69\x6F\x6E\x61\x6C\x20\x55\x6E\x69\x76\x65\x72\x73\x69\x74\x79","\x47\x61\x6C\x69\x6C\x65\x6F\x20\x4E\x6F\x64\x65\x20\x55\x62\x75\x6E\x74\x75","\x47\x69\x74\x20\x4E\x65\x74\x77\x6F\x72\x6B\x20\x55\x74\x69\x6C\x69\x74\x79","\x47\x6E\x75\x20\x4E\x6F\x74\x20\x4C\x69\x6E\x75\x78","\x54\x69\x6D\x65\x20\x63\x6F\x6D\x70\x6C\x65\x78\x69\x74\x79\x20\x6F\x66\x20\x4D\x65\x72\x67\x65\x20\x73\x6F\x72\x74\x20\x69\x73\x20\x5F\x5F\x5F\x2E","\x4F\x28\x6E\x6C\x6F\x67\x6E\x29","\x4F\x28\x6C\x6F\x67\x6E\x29","\x4F\x28\x6E\x2A\x6E\x29","\x4F\x28\x6E\x21\x29","\x43\x6F\x6D\x70\x69\x6C\x65\x72\x20\x67\x65\x6E\x65\x72\x61\x74\x65\x73\x20\x5F\x5F\x5F\x20\x66\x69\x6C\x65\x2E","\x45\x78\x65\x63\x75\x74\x61\x62\x6C\x65\x20\x63\x6F\x64\x65","\x4F\x62\x6A\x65\x63\x74\x20\x63\x6F\x64\x65","\x41\x73\x73\x65\x6D\x62\x6C\x79\x20\x63\x6F\x64\x65","\x4E\x6F\x6E\x65","\x54\x68\x65\x20\x64\x65\x66\x61\x75\x6C\x74\x20\x61\x63\x63\x65\x73\x73\x20\x73\x70\x65\x63\x69\x66\x65\x72\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x63\x6C\x61\x73\x73\x20\x6D\x65\x6D\x62\x65\x72\x73\x20\x69\x6E\x20\x43\x2B\x2B\x20\x69\x73\x20\x5F\x5F\x5F\x2E","\x70\x75\x62\x6C\x69\x63","\x70\x72\x69\x76\x61\x74\x65","\x70\x72\x6F\x74\x65\x63\x74\x65\x64","\x57\x68\x61\x74\x20\x73\x6F\x6E\x67\x20\x64\x6F\x65\x73\x20\x53\x68\x65\x6C\x64\x6F\x6E\x20\x72\x65\x71\x75\x69\x72\x65\x20\x68\x69\x73\x20\x63\x61\x72\x65\x74\x61\x6B\x65\x72\x20\x74\x6F\x20\x73\x69\x6E\x67\x20\x74\x6F\x20\x68\x69\x6D\x20\x77\x68\x65\x6E\x20\x68\x65\x20\x69\x73\x20\x73\x69\x63\x6B\x3F","\x53\x6F\x66\x74\x20\x4B\x69\x74\x74\x79","\x42\x61\x61\x20\x42\x61\x61\x20\x42\x6C\x61\x63\x6B\x20\x73\x68\x65\x65\x70","\x44\x65\x73\x70\x61\x63\x69\x74\x6F","\x44\x69\x6C\x62\x61\x72","\x57\x68\x69\x63\x68\x20\x61\x63\x74\x6F\x72\x20\x70\x6C\x61\x79\x73\x20\x53\x68\x65\x6C\x64\x6F\x6E\x20\x43\x6F\x6F\x70\x65\x72\x27\x73\x20\x72\x6F\x6C\x65\x3F","\x4A\x6F\x68\x6E\x6E\x79\x20\x47\x61\x6C\x65\x63\x6B\x69","\x53\x69\x6D\x6F\x6E\x20\x48\x65\x6C\x62\x65\x72\x67","\x4A\x69\x6D\x20\x50\x61\x72\x73\x6F\x6E\x73","\x53\x74\x61\x6E\x20\x4C\x65\x65","\x49\x6E\x20\x77\x68\x61\x74\x20\x79\x65\x61\x72\x20\x64\x69\x64\x20\x54\x68\x65\x20\x42\x69\x67\x20\x42\x61\x6E\x67\x20\x54\x68\x65\x6F\x72\x79\x20\x70\x72\x65\x6D\x69\x65\x72\x65\x3F","\x32\x30\x30\x36","\x32\x30\x30\x37","\x32\x30\x30\x39","\x32\x30\x31\x31","\x57\x68\x61\x74\x20\x61\x63\x74\x6F\x72\x20\x6F\x6E\x20\x74\x68\x65\x20\x73\x68\x6F\x77\x20\x68\x61\x73\x20\x61\x20\x64\x6F\x63\x74\x6F\x72\x61\x74\x65\x20\x69\x6E\x20\x72\x65\x61\x6C\x20\x6C\x69\x66\x65\x3F","\x45\x6C\x6F\x6E\x20\x4D\x75\x73\x6B","\x4D\x61\x79\x69\x6D\x20\x42\x69\x61\x6C\x69\x6B","\x48\x6F\x77\x20\x6F\x6C\x64\x20\x73\x68\x65\x6C\x64\x6F\x6E\x20\x77\x61\x73\x20\x77\x68\x65\x6E\x20\x68\x65\x20\x73\x74\x61\x72\x74\x65\x64\x20\x68\x69\x73\x20\x63\x6F\x6C\x6C\x65\x67\x65\x3F","\x37","\x31\x31","\x31\x33","\x31\x35","\x57\x68\x61\x74\x20\x69\x73\x20\x53\x68\x65\x6C\x64\x6F\x6E\x27\x73\x20\x6D\x69\x64\x64\x6C\x65\x20\x6E\x61\x6D\x65\x3F","\x4C\x65\x65","\x52\x65\x67\x69\x6E\x61\x6C\x64","\x54\x68\x6F\x6D\x61\x73","\x53\x74\x61\x6E\x6C\x65\x79","\x57\x68\x61\x74\x20\x69\x73\x20\x52\x61\x6A\x27\x73\x20\x6D\x69\x64\x64\x6C\x65\x20\x6E\x61\x6D\x65\x3F","\x53\x68\x69\x76\x70\x61\x6C\x6C\x69","\x52\x61\x6D\x61\x6E\x75\x6A\x61\x6E","\x4D\x61\x68\x65\x73\x68","\x52\x61\x6D\x61\x79\x61\x6E","\x57\x68\x61\x74\x20\x69\x73\x20\x48\x6F\x77\x61\x72\x64\x20\x61\x6C\x6C\x65\x72\x67\x69\x63\x20\x74\x6F\x3F","\x46\x69\x73\x68","\x53\x74\x72\x61\x77\x62\x65\x72\x72\x69\x65\x73","\x45\x67\x67\x73","\x4E\x75\x74\x73","\x46\x69\x6E\x69\x73\x68\x20\x74\x68\x69\x73\x20\x67\x61\x6D\x65\x20\x74\x69\x74\x6C\x65\x3A\x20\x22\x52\x6F\x63\x6B\x2C\x20\x70\x61\x70\x65\x72\x2C\x20\x73\x63\x69\x73\x73\x6F\x72\x73\x2C\x20\x6C\x69\x7A\x61\x72\x64\x2C\x20\x5F\x5F\x5F\x5F\x5F\x5F\x22","\x4B\x69\x72\x6B","\x50\x69\x63\x61\x72\x64","\x53\x70\x6F\x63\x6B","\x44\x61\x74\x61","\x48\x6F\x77\x20\x6F\x6C\x64\x20\x73\x68\x65\x6C\x64\x6F\x6E\x20\x77\x61\x73\x20\x77\x68\x65\x6E\x20\x68\x65\x20\x67\x6F\x74\x20\x68\x69\x73\x20\x50\x68\x44\x3F","\x31\x36","\x31\x32","\x31\x39","\x32\x33","\x57\x68\x6F\x20\x68\x61\x73\x20\x6E\x69\x63\x6B\x6E\x61\x6D\x65\x20\x50\x61\x70\x70\x75\x3F","\x4E\x61\x72\x65\x6E\x64\x72\x61\x20\x4D\x6F\x64\x69","\x52\x61\x68\x75\x6C\x20\x47\x61\x6E\x64\x68\x69","\x42\x61\x62\x61\x20\x52\x61\x6D\x64\x65\x76","\x59\x6F\x67\x69\x20\x41\x64\x69\x74\x79\x61\x6E\x61\x74\x68","\x57\x68\x6F\x20\x69\x73\x20\x63\x75\x72\x72\x65\x6E\x74\x20\x67\x6F\x76\x65\x72\x6E\x6F\x72\x20\x6F\x66\x20\x52\x65\x73\x65\x72\x76\x65\x20\x42\x61\x6E\x6B\x20\x6F\x66\x20\x49\x6E\x64\x69\x61\x3F","\x52\x61\x67\x68\x75\x72\x61\x6D\x20\x52\x61\x6A\x61\x6E","\x55\x72\x6A\x69\x74\x20\x50\x61\x74\x65\x6C","\x53\x68\x61\x6E\x74\x69\x6B\x61\x6E\x74\x61\x20\x44\x61\x73","\x41\x72\x75\x6E\x20\x4A\x61\x69\x74\x6C\x65\x79","\x57\x68\x61\x74\x20\x69\x73\x20\x4E\x44\x41\x20\x77\x69\x74\x68\x20\x72\x65\x73\x70\x65\x63\x74\x20\x74\x6F\x20\x49\x6E\x64\x69\x61\x6E\x20\x50\x6F\x6C\x69\x74\x69\x63\x73\x3F","\x4E\x6F\x6E\x20\x44\x69\x73\x63\x6C\x6F\x73\x75\x72\x65\x20\x41\x67\x72\x65\x65\x6D\x65\x6E\x74","\x4E\x61\x74\x69\x6F\x6E\x61\x6C\x20\x44\x65\x6D\x6F\x63\x72\x65\x74\x69\x63\x20\x41\x6C\x6C\x69\x61\x6E\x63\x65","\x4E\x61\x74\x69\x6F\x6E\x61\x6C\x20\x44\x65\x66\x65\x6E\x63\x65\x20\x41\x63\x61\x64\x65\x6D\x79","\x4E\x61\x72\x65\x6E\x64\x72\x61\x20\x44\x61\x6D\x6F\x64\x61\x72\x64\x61\x73\x20\x4D\x6F\x64\x69","\x57\x68\x65\x72\x65\x20\x69\x73\x20\x45\x6C\x65\x63\x74\x69\x6F\x6E\x20\x43\x6F\x6D\x6D\x69\x73\x73\x69\x6F\x6E\x20\x6C\x6F\x63\x61\x74\x65\x64\x3F","\x4D\x75\x6D\x62\x61\x69","\x50\x61\x74\x68\x69\x6B\x2D\x41\x61\x73\x68\x72\x61\x6D","\x4E\x65\x77\x20\x44\x65\x6C\x68\x69","\x43\x68\x65\x6E\x6E\x61\x69","\x57\x68\x6F\x20\x69\x73\x20\x70\x72\x65\x73\x69\x64\x65\x6E\x74\x20\x6F\x66\x20\x42\x61\x68\x75\x6A\x61\x6E\x20\x53\x61\x6D\x61\x6A\x20\x50\x61\x72\x74\x79\x3F","\x4D\x61\x6D\x74\x61\x20\x42\x61\x6E\x65\x72\x6A\x65\x65","\x4C\x61\x6C\x75\x20\x59\x61\x64\x61\x76","\x4D\x61\x79\x61\x76\x61\x74\x69","\x4B\x69\x6E\x6A\x61\x6C\x20\x44\x61\x76\x65","\x57\x68\x6F\x20\x68\x61\x6E\x64\x6C\x65\x73\x20\x74\x68\x65\x20\x4D\x69\x6E\x69\x73\x74\x72\x79\x20\x6F\x66\x20\x45\x78\x74\x65\x72\x6E\x61\x6C\x20\x41\x66\x66\x61\x69\x72\x73\x3F","\x52\x61\x6A\x6E\x61\x74\x68\x20\x53\x69\x6E\x67\x68","\x53\x75\x73\x68\x6D\x61\x20\x53\x77\x61\x72\x61\x6A","\x55\x6D\x61\x20\x42\x68\x61\x72\x61\x74\x69","\x48\x61\x72\x73\x68\x20\x56\x61\x72\x64\x68\x61\x6E","\x44\x65\x70\x61\x72\x74\x6D\x65\x6E\x74\x20\x6F\x66\x20\x41\x74\x6F\x6D\x69\x63\x20\x45\x6E\x65\x72\x67\x79\x20\x69\x73\x20\x6C\x65\x61\x64\x20\x62\x79\x20\x5F\x5F\x5F\x2E","\x54\x61\x69\x6D\x75\x72\x20\x41\x6C\x69\x20\x4B\x68\x61\x6E","\x4E\x69\x72\x6D\x61\x6C\x61\x20\x53\x69\x74\x68\x61\x72\x61\x6D\x61\x6E","\x56\x69\x63\x65\x20\x50\x72\x65\x73\x69\x64\x65\x6E\x74\x20\x6F\x66\x20\x49\x6E\x64\x69\x61\x20\x69\x73\x20\x5F\x5F\x5F\x5F\x2E","\x56\x65\x6E\x6B\x61\x69\x61\x68\x20\x4E\x61\x69\x64\x75","\x52\x61\x6D\x6E\x61\x74\x68\x20\x4B\x6F\x76\x69\x6E\x64","\x54\x68\x69\x72\x75\x20\x45\x64\x61\x70\x70\x61\x64\x69\x20\x4B\x2E\x20\x50\x61\x6C\x61\x6E\x69\x73\x77\x61\x6D\x69","\x4B\x61\x6D\x61\x6C\x20\x4E\x61\x74\x68","\x4E\x75\x6D\x62\x65\x72\x20\x6F\x66\x20\x73\x74\x61\x74\x65\x73\x20\x69\x6E\x20\x49\x6E\x64\x69\x61\x3F","\x32\x36","\x33\x33","\x32\x39","\x33\x31","\x4E\x75\x6D\x62\x65\x72\x20\x6F\x66\x20\x55\x6E\x69\x6F\x6E\x20\x54\x65\x72\x72\x69\x74\x6F\x72\x69\x65\x73\x20\x69\x6E\x20\x49\x6E\x64\x69\x61\x20\x69\x73\x20\x5F\x5F\x5F\x2E","\x36"];if(currentGenre=== string1){questions= [ new Question(_0xcd12[0],[_0xcd12[1],_0xcd12[2],_0xcd12[3],_0xcd12[4]],_0xcd12[4]), new Question(_0xcd12[5],[_0xcd12[6],_0xcd12[7],_0xcd12[8],_0xcd12[9]],_0xcd12[8]), new Question(_0xcd12[10],[_0xcd12[11],_0xcd12[12],_0xcd12[13],_0xcd12[14]],_0xcd12[12]), new Question(_0xcd12[15],[_0xcd12[16],_0xcd12[17],_0xcd12[18],_0xcd12[19]],_0xcd12[18]), new Question(_0xcd12[20],[_0xcd12[21],_0xcd12[22],_0xcd12[23],_0xcd12[24]],_0xcd12[21]), new Question(_0xcd12[25],[_0xcd12[26],_0xcd12[27],_0xcd12[28],_0xcd12[29]],_0xcd12[29]), new Question(_0xcd12[30],[_0xcd12[31],_0xcd12[32],_0xcd12[33],_0xcd12[34]],_0xcd12[34]), new Question(_0xcd12[35],[_0xcd12[36],_0xcd12[37],_0xcd12[38],_0xcd12[39]],_0xcd12[36]), new Question(_0xcd12[40],[_0xcd12[41],_0xcd12[42],_0xcd12[43],_0xcd12[44]],_0xcd12[42]), new Question(_0xcd12[45],[_0xcd12[46],_0xcd12[47],_0xcd12[48],_0xcd12[44]],_0xcd12[47])]}else {if(currentGenre=== string2){questions= [ new Question(_0xcd12[49],[_0xcd12[50],_0xcd12[51],_0xcd12[52],_0xcd12[53]],_0xcd12[50]), new Question(_0xcd12[54],[_0xcd12[55],_0xcd12[56],_0xcd12[57],_0xcd12[58]],_0xcd12[57]), new Question(_0xcd12[59],[_0xcd12[60],_0xcd12[61],_0xcd12[62],_0xcd12[63]],_0xcd12[61]), new Question(_0xcd12[64],[_0xcd12[65],_0xcd12[56],_0xcd12[66],_0xcd12[57]],_0xcd12[66]), new Question(_0xcd12[67],[_0xcd12[68],_0xcd12[69],_0xcd12[70],_0xcd12[71]],_0xcd12[69]), new Question(_0xcd12[72],[_0xcd12[73],_0xcd12[74],_0xcd12[75],_0xcd12[76]],_0xcd12[73]), new Question(_0xcd12[77],[_0xcd12[78],_0xcd12[79],_0xcd12[80],_0xcd12[81]],_0xcd12[81]), new Question(_0xcd12[82],[_0xcd12[83],_0xcd12[84],_0xcd12[85],_0xcd12[86]],_0xcd12[86]), new Question(_0xcd12[87],[_0xcd12[88],_0xcd12[89],_0xcd12[90],_0xcd12[91]],_0xcd12[90]), new Question(_0xcd12[92],[_0xcd12[93],_0xcd12[94],_0xcd12[95],_0xcd12[96]],_0xcd12[93])]}else {if(currentGenre=== string3){questions= [ new Question(_0xcd12[97],[_0xcd12[98],_0xcd12[99],_0xcd12[100],_0xcd12[101]],_0xcd12[99]), new Question(_0xcd12[102],[_0xcd12[103],_0xcd12[104],_0xcd12[105],_0xcd12[106]],_0xcd12[105]), new Question(_0xcd12[107],[_0xcd12[108],_0xcd12[109],_0xcd12[110],_0xcd12[111]],_0xcd12[109]), new Question(_0xcd12[112],[_0xcd12[113],_0xcd12[114],_0xcd12[115],_0xcd12[116]],_0xcd12[115]), new Question(_0xcd12[117],[_0xcd12[118],_0xcd12[119],_0xcd12[120],_0xcd12[121]],_0xcd12[120]), new Question(_0xcd12[122],[_0xcd12[123],_0xcd12[124],_0xcd12[125],_0xcd12[126]],_0xcd12[124]), new Question(_0xcd12[127],[_0xcd12[98],_0xcd12[128],_0xcd12[129],_0xcd12[123]],_0xcd12[98]), new Question(_0xcd12[130],[_0xcd12[131],_0xcd12[132],_0xcd12[133],_0xcd12[134]],_0xcd12[131]), new Question(_0xcd12[135],[_0xcd12[136],_0xcd12[137],_0xcd12[138],_0xcd12[139]],_0xcd12[138]), new Question(_0xcd12[140],[_0xcd12[69],_0xcd12[94],_0xcd12[68],_0xcd12[141]],_0xcd12[68])]}}}
var quiz = new Quiz(questions); //makes new quiz instance
populate(); //starts the quiz