/*
TicTacToe Javascript v1.0
Last Updated: 2015-03-28
Author: William R.A.D. Funk - http://WilliamRobertFunk.com 
*/

//Makes sure a player's "click" on a
//previously selected tile doesn't register.
function checkIfAvailable(cellId) {
    if ($(cellId).hasClass("p1Cell")) {
        return false;
    }
    else if ($(cellId).hasClass("p2Cell")) {
        return false;
    }
    else {return true;}
}
//If not previously chosen, the selecting player's tag is added
//to the tile, and their token is placed as background-image.
function attachPlayerToCell(cellId, pTurn) {
    if (pTurn == "1") {
        $(cellId).css("background-image", "url(images/ticTac-X.png)");
        $(cellId).addClass("p1Cell");
    }
    else if (pTurn == "2") {
        $(cellId).css("background-image", "url(images/ticTac-O.png)");
        $(cellId).addClass("p2Cell");
    }
    else {alert("ERROR: Player number has exceeded bounds!");}
}
//With each legitimate click, the turn is transferred from
//one player to the next. Background color is changed, as
//well as number and alignment for player in h2 tag
function changeTurn(pTurn) {
    var player1Color = "#99FF99";
    var player2Color = "#FF99FF";
    if (pTurn == "1") {
        $("h2 span.p_number").html("2");
        $("h2 span.p_token").html("O");
        $("h2").css("text-align", 'right');
        $("body").css("background-color", player2Color);
    }
    else if (pTurn == "2") {
        $("h2 span.p_number").html("1");
        $("h2 span.p_token").html("X");
        $("h2").css("text-align", 'left');
        $("body").css("background-color", player1Color);
    }
    else {alert("ERROR: Player number has exceeded bounds!");}
}
//Cycles through tiles based on last player action (to reduce
//wasteful iterations). Each nested for-loop checks for a
//possible win scenario based on last tile chosen.
function checkForWin(cellId, pTurn) {
    if (pTurn == "1") {
        var player = "p1Cell";
    }
    else if (pTurn == "2") {
        var player = "p2Cell";
    }
    else {alert("ERROR: Player number has exceeded bounds!");}
    switch (cellId) {
        //Checks all win scenarios associated with Upper-Left square.
        case "#square_one":
            if ($("#square_two").hasClass(player)) {
                if ($("#square_three").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_five").hasClass(player)) {
                if ($("#square_nine").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_four").hasClass(player)) {
                if ($("#square_seven").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            break;
        //Checks all win scenarios associated with Upper-Middle square.
        case "#square_two":
            if ($("#square_one").hasClass(player)) {
                if ($("#square_three").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_five").hasClass(player)) {
                if ($("#square_eight").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            break;
        //Checks all win scenarios associated with Upper-Right square.
        case "#square_three":
            if ($("#square_two").hasClass(player)) {
                if ($("#square_one").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_five").hasClass(player)) {
                if ($("#square_seven").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_six").hasClass(player)) {
                if ($("#square_nine").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            break;
        //Checks all win scenarios associated with Middle-Left square.
        case "#square_four":
            if ($("#square_one").hasClass(player)) {
                if ($("#square_seven").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_five").hasClass(player)) {
                if ($("#square_six").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            break;
        //Checks all win scenarios associated with Center square.
        case "#square_five":
            if ($("#square_one").hasClass(player)) {
                if ($("#square_nine").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_three").hasClass(player)) {
                if ($("#square_seven").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_two").hasClass(player)) {
                if ($("#square_eight").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_four").hasClass(player)) {
                if ($("#square_six").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            break;
        //Checks all win scenarios associated with Middle-Right square.
        case "#square_six":
            if ($("#square_three").hasClass(player)) {
                if ($("#square_nine").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_five").hasClass(player)) {
                if ($("#square_four").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            break;
        //Checks all win scenarios associated with Lower-Left square.
        case "#square_seven":
            if ($("#square_four").hasClass(player)) {
                if ($("#square_one").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_five").hasClass(player)) {
                if ($("#square_three").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_eight").hasClass(player)) {
                if ($("#square_nine").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            break;
        //Checks all win scenarios associated with Lower-Middle square.
        case "#square_eight":
            if ($("#square_five").hasClass(player)) {
                if ($("#square_two").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_seven").hasClass(player)) {
                if ($("#square_nine").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            break;
        //Checks all win scenarios associated with Lower-Right square.
        case "#square_nine":
            if ($("#square_six").hasClass(player)) {
                if ($("#square_three").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_five").hasClass(player)) {
                if ($("#square_one").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            if ($("#square_eight").hasClass(player)) {
                if ($("#square_seven").hasClass(player)) {
                    alert("Player " + pTurn + " wins the round!\n\n");
                    increaseScore(pTurn);
                    resetBoard();
                    return;
                }
            }
            break;
        default:
            alert("ERROR: checkForWin(cellId, pTurn) switch statement has hit default.");
            break;
    }
    //Iterates through tile-list checking if
    //it's full without a win, if so it resets the board.
    $("li").each(function(index) {
        if ($(this).hasClass("p1Cell") || $(this).hasClass("p2Cell")) {
            if (index == 8)
            {
                alert("Tie Game! No points awarded.");
                resetBoard();
                return;
            }
            return true;
        }
        else { return false; }
    });
}

function increaseScore(pTurn) {
    var score;
    if (pTurn == "1") {
        score = Number($("#p1_score span").text());
        score += 1;
        $("#p1_score span").html(score);
    }
    else if (pTurn == "2") {
        score = Number($("#p2_score span").text());
        score += 1;
        $("#p2_score span").html(score);
    }
    else {alert("ERROR: increaseScore(pTurn) called with invalid pTurn argument");}
    if (score >= 10) {
        alert("Congratulations!\n\nPlayer " + pTurn + " has won.\n\n");
        $("#p1_score span").html("0");
        $("#p2_score span").html("0");
    }
}

function resetBoard() {
    $("li").each(function(event) {
        $(this).css("background-image", "none");
        $(this).removeClass("p1Cell");
        $(this).removeClass("p2Cell");
    });
}

$( document ).ready(function() {
    $("li")
        .click(function(event) {
            var pTurn = $("h2 span.p_number").text();
            var cellId = event.target.id;
            cellId = "#" + cellId;
	    if (checkIfAvailable(cellId)) {
                attachPlayerToCell(cellId, pTurn);
                changeTurn(pTurn);
            }
            checkForWin(cellId, pTurn);
        })
        .mouseover(function(event) {
            var cellId = event.target.id;
            cellId = "#" + cellId;
	    if (checkIfAvailable(cellId)) {
                $(cellId).css("opacity", '0.5');
            }
        })
        .mouseout(function(event) {
            var cellId = event.target.id;
            cellId = "#" + cellId;
            $(cellId).css("opacity", '1.0');
        });
    $("button")
        .click(function(event) {
            resetBoard();
            $("#p1_score span").html("0");
            $("#p2_score span").html("0");
            changeTurn("2");
        });
});