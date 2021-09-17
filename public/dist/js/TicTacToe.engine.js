var id;
var xo = "X";
var state = 1;

var quadrant = ["a", "b", "c", "d", "e", "f", "g", "h", "k"];
const board = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];




function sendToBoard() {

    let boarddata = document.getElementById("existingdata").value;
    boarddata = boarddata.replace(/'/g, '"');
    boarddata = JSON.parse(boarddata);
    state = 0;
    console.clear();
    for (let index = 0; index < boarddata.length; index++) {


        if (boarddata[index] != '' && boarddata[index] != null) {

            if (index % 2 == 0) {
                document.getElementById(board[index]).style.color = "white";
            } else {
                document.getElementById(board[index]).style.color = "#2F4F4F";
            }

            document.getElementById(board[index]).innerHTML = boarddata[index];
            quadrant[index] = boarddata[index]
        }
    }
}



function check(estado, id) {
    if (estado % 2 == 0) {
        document.getElementById(id).style.color = "white";
        return (xo = "X");
    } else {
        document.getElementById(id).style.color = "#2F4F4F";
        return (xo = "O");
    }
}

function restartGame() {
    location.reload();
}

function checkTheWinner(winner) {
    alert("The Winner is  ....  >>>>>  " + winner);
}
function checkAllPossibles() {
    if (quadrant[0] == quadrant[1] && quadrant[1] == quadrant[2]) {
        checkTheWinner(quadrant[0]);
    }
    if (quadrant[3] == quadrant[4] && quadrant[3] == quadrant[5]) {
        checkTheWinner(quadrant[3]);
    }
    if (quadrant[6] == quadrant[7] && quadrant[7] == quadrant[8]) {
        checkTheWinner(quadrant[6]);
    }
    if (quadrant[0] == quadrant[3] && quadrant[3] == quadrant[6]) {
        checkTheWinner(quadrant[0]);
    }
    if (quadrant[1] == quadrant[4] && quadrant[4] == quadrant[7]) {
        checkTheWinner(quadrant[1]);
    }
    if (quadrant[2] == quadrant[5] && quadrant[5] == quadrant[8]) {
        checkTheWinner(quadrant[2]);
    }
    if (quadrant[0] == quadrant[4] && quadrant[4] == quadrant[8]) {
        checkTheWinner(quadrant[0]);
    }
    if (quadrant[2] == quadrant[4] && quadrant[4] == quadrant[6]) {
        checkTheWinner(quadrant[2]);
    }
}

function nextTurn(square) {
    if (quadrant[0] != "O" && quadrant[0] != "X" && square == 0) {
        id = "um";
        document.getElementById("um").innerHTML = check(state, id);
        quadrant[square] = xo;
        state = state + 1;
        checkAllPossibles();
    }
    if (quadrant[1] != "O" && quadrant[1] != "X" && square == 1) {
        id = "dois";
        document.getElementById("dois").innerHTML = check(state, id);
        quadrant[square] = check(state, id);
        state = state + 1;
        checkAllPossibles();
    }
    if (quadrant[2] != "O" && quadrant[2] != "X" && square == 2) {
        id = "tres";
        document.getElementById("tres").innerHTML = check(state, id);
        quadrant[square] = check(state, id);
        state = state + 1;
        checkAllPossibles();
    }
    if (quadrant[3] != "O" && quadrant[3] != "X" && square == 3) {
        id = "quatro";
        document.getElementById("quatro").innerHTML = check(state, id);
        quadrant[square] = check(state, id);
        state = state + 1;
        checkAllPossibles();
    }
    if (quadrant[4] != "O" && quadrant[4] != "X" && square == 4) {
        id = "cinco";
        document.getElementById("cinco").innerHTML = check(state, id);
        quadrant[square] = check(state, id);
        state = state + 1;
        checkAllPossibles();
    }
    if (quadrant[5] != "O" && quadrant[5] != "X" && square == 5) {
        id = "seis";
        document.getElementById("seis").innerHTML = check(state, id);
        quadrant[square] = check(state, id);
        state = state + 1;
        checkAllPossibles();
    }
    if (quadrant[6] != "O" && quadrant[6] != "X" && square == 6) {
        id = "sete";
        document.getElementById("sete").innerHTML = check(state, id);
        quadrant[square] = check(state, id);
        state = state + 1;
        checkAllPossibles();
    }
    if (quadrant[7] != "O" && quadrant[7] != "X" && square == 7) {
        id = "oito";
        document.getElementById("oito").innerHTML = check(state, id);
        quadrant[square] = check(state, id);
        state = state + 1;
        checkAllPossibles();
    }
    if (quadrant[8] != "O" && quadrant[8] != "X" && square == 8) {
        id = "nove";
        document.getElementById("nove").innerHTML = check(state, id);
        quadrant[square] = check(state, id);
        state = state + 1;
        checkAllPossibles();
    }
}
