var userScore = document.querySelector("#userscore");
var compScore = document.querySelector("#compscore");
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissor = document.querySelector("#scissor");
var justTrying = document.querySelector("#justtrying");
var us = 0;
var cs = 0;
var reset = 0;
var rockvalue = 1;
var papervalue = 2;
var scissorvalue = 3;
var userSide = document.querySelector("#userside");
var compSide = document.querySelector("#compside");
var justDisplay = document.querySelector("#just");
var resultShow = document.querySelector("#resultshow");
var resetButton = document.querySelector("#reset");
var commentLine = document.querySelector("#comment");
var winningScore = 5;
var userValue = document.querySelector("#user");
var compValue = document.querySelector("#comp");


rock.addEventListener("click", function() {
    if (us !== 5 && cs!== 5) {
        resultShow.style.opacity = "0";
        var selectedmove = rock.innerHTML;
        setTimeout(function() {userSide.innerHTML = selectedmove;}, 2000);
        var compval = randomComp();
        setTimeout(function() {
            if (compval === 1) {
                tiedGame();
                compSide.innerHTML = rock.innerHTML;
            }
            else if (compval === 2) {
                loseGame();
                compSide.innerHTML = paper.innerHTML;
            }
            else {
                wonGame();
                compSide.innerHTML = scissor.innerHTML;
            }
            resultShow.style.opacity = "0.6";
        }, 2000);
    }
    else if (us === 5) {
        userWins();
    }
    else {
        compWins();
    }

    
    
});

paper.addEventListener("click", function() {
    if (us !== 5 && cs !== 5) {
        resultShow.style.opacity = "0";
        var selectedmove = paper.innerHTML;
        setTimeout(function() {userSide.innerHTML = selectedmove;}, 2000);
        var compval = randomComp();
        setTimeout(function() {
            if (compval === 1) {
                wonGame();
                compSide.innerHTML = rock.innerHTML;
            }
            else if (compval === 2) {
                tiedGame();
                compSide.innerHTML = paper.innerHTML;
            }
            else {
                loseGame();
                compSide.innerHTML = scissor.innerHTML;
            }
            resultShow.style.opacity = "0.6";
        }, 2000);
    }
    else if (us === 5) {
        userWins();
    }
    else {
        compWins();
    }
    
    
});

scissor.addEventListener("click", function() {
    if (us !== 5 && cs !== 5) {
        resultShow.style.opacity = "0";
        var selectedmove = scissor.innerHTML;
        setTimeout(function() {userSide.innerHTML = selectedmove;}, 2000);
        var compval = randomComp();
        setTimeout(function() {
            if (compval === 1) {
                loseGame();
                compSide.innerHTML = rock.innerHTML;
            }
            else if (compval === 2) {
                wonGame();
                compSide.innerHTML = paper.innerHTML;
            }
            else {
                tiedGame();
                compSide.innerHTML = scissor.innerHTML;
            }
            resultShow.style.opacity = "0.6";
        }, 2000);
    }
    else if (us === 5) {
        userWins();
    }
    else {
        compWins();
    }
    
    
});

resetButton.addEventListener("click", function() {
    justTrying.classList.remove("red");
    justTrying.classList.remove("normal");
    justTrying.classList.remove("green");
    userScore.classList.remove("green");
    compScore.classList.remove("red");
    userValue.classList.remove("greenbackground");
    compValue.classList.remove("redbackground");
    userValue.classList.remove("redbackground");
    compValue.classList.remove("greenbackground");
    justTrying.innerHTML = "Make your move";
    resetButton.innerHTML = "RESET";
    justDisplay.innerHTML = "Just a game";
    rock.style.border = "2px solid white";
    paper.style.border = "2px solid white";
    scissor.style.border = "2px solid white";
    us = 0;
    cs = 0
    userScore.innerHTML = reset;
    compScore.innerHTML = reset;
    setTimeout(function() {
        commentLine.innerHTML = "Your scores have been reset";
        commentLine.style.opacity = "1";
    }, 2500);
    userSide.style.opacity = "0";
    compSide.style.opacity = "0";
})

function wonGame() {
    /*rock.style.border = "2px solid rgb(28, 62, 90)";
    paper.style.border = "2px solid rgb(28, 62, 90)";
    scissor.style.border = "2px solid rgb(28, 62, 90)";*/
    justTrying.classList.remove("red");
    justTrying.classList.remove("normal");
    justTrying.innerHTML = "YOU WIN!!";
    justTrying.classList.add("green");
    justDisplay.innerHTML = "wins over";
    rock.style.border = "2px solid green";
    paper.style.border = "2px solid green";
    scissor.style.border = "2px solid green";
    us += 1;
    userScore.innerHTML = us;
    commentLine.innerHTML = "Nice work!! Correct move";
    commentLine.style.opacity = "1";
}

function loseGame() {
    /*rock.style.border = "2px solid rgb(28, 62, 90)";
    paper.style.border = "2px solid rgb(28, 62, 90)";
    scissor.style.border = "2px solid rgb(28, 62, 90)";*/
    justTrying.classList.remove("green");
    justTrying.classList.remove("normal");
    justTrying.innerHTML = "YOU LOSE:(";
    justTrying.classList.add("red");
    rock.style.border = "2px solid red";
    paper.style.border = "2px solid red";
    scissor.style.border = "2px solid red";
    justDisplay.innerHTML = "loses to";
    cs += 1;
    compScore.innerHTML = cs;
    commentLine.innerHTML = "Bad luck!! Better luck next time";
    commentLine.style.opacity = "1";
}

function tiedGame() {
    /*rock.style.border = "2px solid rgb(28, 62, 90)";
    paper.style.border = "2px solid rgb(28, 62, 90)";
    scissor.style.border = "2px solid rgb(28, 62, 90)";*/
    justTrying.classList.remove("green");
    justTrying.classList.remove("red");
    justTrying.innerHTML = "TIED:|";
    justTrying.classList.add("normal");
    justDisplay.innerHTML = "draw";
    rock.style.border = "2px solid white";
    paper.style.border = "2px solid white";
    scissor.style.border = "2px solid white";
    commentLine.innerHTML = "Its a draw";
    commentLine.style.opacity = "1";
}

function userWins() {
    justTrying.classList.remove("green");
    justTrying.classList.remove("red");
    justTrying.classList.remove("normal");
    userScore.classList.add("green");
    justTrying.innerHTML = "YOU WON THE GAME!!";
    justTrying.classList.add("green");
    justDisplay.innerHTML = "YOU WON!!";
    justDisplay.classList.add("green");
    userValue.classList.add("greenbackground");
    compValue.classList.add("greenbackground");
    rock.style.border = "2px solid green";
    paper.style.border = "2px solid green";
    scissor.style.border = "2px solid green";
    commentLine.innerHTML = "Congratulations you defeated the Computer!!";
    commentLine.style.opacity = "1";
    userSide.style.opacity = "0";
    compSide.style.opacity = "0";
    resetButton.innerHTML = "PLAY AGAIN?";
}

function compWins() {
    justTrying.classList.remove("green");
    justTrying.classList.remove("red");
    justTrying.classList.remove("normal");
    compScore.classList.add("red");
    justTrying.innerHTML = "COMPUTER WON THE GAME:(:(";
    justTrying.classList.add("red");
    justDisplay.innerHTML = "COMPUTER WON:(";
    justDisplay.classList.add("red");
    userValue.classList.add("redbackground");
    compValue.classList.add("redbackground");
    rock.style.border = "2px solid red";
    paper.style.border = "2px solid red";
    scissor.style.border = "2px solid red";
    commentLine.innerHTML = "Computer won!! Don't worry you can win the next one";
    commentLine.style.opacity = "1";
    userSide.style.opacity = "0";
    compSide.style.opacity = "0";
    resetButton.innerHTML = "PLAY AGAIN?";
}

function randomComp() {
    var compValue = Math.round(Math.random()*3);
    return compValue;
}
