function ticTacToe() {
  
  // Setting DOM to all boxes or input field
  
  let topLeft = document.getElementById("t1").value;
  let topMid = document.getElementById("t2").value;
  let topRight = document.getElementById("t3").value;
  let midLeft = document.getElementById("m1").value;
  let midMid= document.getElementById("m2").value;
  let midRight = document.getElementById("m3").value;
  let btmLeft = document.getElementById("bt1").value;
  let btmMid= document.getElementById("bt2").value;
  let btmRight = document.getElementById("bt3").value;

  // Checking if Player X won or not and after 
  // that disabled all the other fields
  if ((topLeft == 'X') && (topMid == 'X') && (topRight == 'X')) {

      var xWinningMessage = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won' ];

      textSequence(0);
      function textSequence(i) {

          if (xWinningMessage.length > i) {
              setTimeout(function() {
                  document.getElementById("print").innerHTML = xWinningMessage[i];
                  textSequence(++i);
              }, 1000); 
          } else if (flashing.length == i) { // Loop
              textSequence(6);
          }

      }
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;
      
  }
  else if ((topLeft == 'X') && (midLeft == 'X') && (btmLeft == 'X')) {

    var xWinningMessage = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won' ];

    textSequence(0);
    function textSequence(i) {

        if (xWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = xWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;

    
  }
  else if ((btmLeft == 'X') && (btmMid == 'X') && (btmRight == 'X')) {

    var xWinningMessage = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won' ];

    textSequence(0);
    function textSequence(i) {

        if (xWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = xWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;

  }
  else if ((topRight == 'X') && (midRight == 'X') && (btmRight == 'X')) {

    var xWinningMessage = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won' ];

    textSequence(0);
    function textSequence(i) {

        if (xWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = xWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;

  }
  else if ((topLeft == 'X') && (midMid == 'X') && (btmRight == 'X')) {

    var xWinningMessage = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won' ];

    textSequence(0);
    function textSequence(i) {

        if (xWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = xWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;

  }
  else if ((topRight == 'X') && (midMid == 'X') && (btmLeft == 'X')) {

    var xWinningMessage = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won' ];

    textSequence(0);
    function textSequence(i) {

        if (xWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = xWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;

  }
  else if ((topMid == 'X') && (midMid == 'X') && (btmMid == 'X')) {

    var xWinningMessage = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won' ];

    textSequence(0);
    function textSequence(i) {

        if (xWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = xWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t1").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt3").disabled = true;

  }
  else if ((midLeft == 'X') && (midMid == 'X') && (midRight == 'X')) {

    var xWinningMessage = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won' ];

    textSequence(0);
    function textSequence(i) {

        if (xWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = xWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;

  }

  // Checking of Player X finsh
  // Checking for Player 0 starts, Is player 0 won or
  // not and after that disabled all the other fields
  else if ((topLeft == '0') && (topMid == '0') && (topRight == '0')) {

    var oWinningMessage = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won' ];

    textSequence(0);
    function textSequence(i) {

        if (oWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = oWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;

  }
  else if ((topLeft == '0') && (midLeft == '0') && (btmLeft == '0')) {

    var oWinningMessage = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won' ];

    textSequence(0);
    function textSequence(i) {

        if (oWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = oWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;

  }
  else if ((btmLeft == '0') && (btmMid == '0') && (btmRight == '0')) {

    var oWinningMessage = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won' ];

    textSequence(0);
    function textSequence(i) {

        if (oWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = oWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;

  }
  else if ((topRight == '0') && (midRight == '0') && (btmRight == '0')) {

    var oWinningMessage = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won' ];

    textSequence(0);
    function textSequence(i) {

        if (oWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = oWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;

  }
  else if ((topLeft == '0') && (midMid == '0') && (btmRight == '0')) {

    var oWinningMessage = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won' ];

    textSequence(0);
    function textSequence(i) {

        if (oWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = oWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;

  }
  else if ((topRight == '0') && (midMid == '0') && (btmLeft == '0')) {

    var oWinningMessage = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won' ];

    textSequence(0);
    function textSequence(i) {

        if (oWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = oWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;

  }
  else if ((topMid == '0') && (midMid == '0') && (btmMid == '0')) {

    var oWinningMessage = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won' ];

    textSequence(0);
    function textSequence(i) {

        if (oWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = oWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t1").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt3").disabled = true;

  }
  else if ((midLeft == '0') && (midMid == '0') && (midRight == '0')) {

    var oWinningMessage = ['Eaaassssyyyyyyy', 'Eaaaaaaasssssyyyyy', 'Easy', 'Easy!', 'Easy!!', 'Player 0 won' ];

    textSequence(0);
    function textSequence(i) {

        if (oWinningMessage.length > i) {
            setTimeout(function() {
                document.getElementById("print").innerHTML = oWinningMessage[i];
                textSequence(++i);
            }, 1000); 
        } else if (flashing.length == i) { // Loop
            textSequence(6);
        }

    }
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;

  }

  // Checking of Player 0 finsh
  // Here, Checking about Tie
  else if ((topLeft == 'X' || topLeft == '0') && (topMid == 'X' 
      || topMid == '0') && (topRight == 'X' || topRight == '0') && 
      (midLeft == 'X' || midLeft == '0') && (midMid == 'X' || 
      midMid == '0') && (midRight == 'X' || midRight == '0') && 
      (btmLeft == 'X' || btmLeft == '0') && (btmMid == 'X' || 
      btmMid == '0') && (btmRight == 'X' || btmRight == '0')) {
          document.getElementById('print')
              .innerHTML = "Draw!";

  }
  else {

      // Here, Printing Result
      if (flag == 1) {
          document.getElementById('print')
              .innerHTML = "Player X Turn";
      }
      else {
          document.getElementById('print')
              .innerHTML = "Player 0 Turn";
      }
  }
}



// Here onwards, functions check turn of the player 
// and put accordingly value X or 0
flag = 1;
function topLeftPress() {
  if (flag == 1) {
      document.getElementById("t1").value = "X";
      document.getElementById("t1").style.textAlign = "center";
      document.getElementById("t1").style.fontSize = "50px"
      document.getElementById("t1").style.color = "red";
      document.getElementById("t1").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("t1").value = "0";
      document.getElementById("t1").style.textAlign = "center";
      document.getElementById("t1").style.fontSize = "50px"
      document.getElementById("t1").style.color = "blue";
      document.getElementById("t1").disabled = true;
      flag = 1;
  }
}

function topMidPress() {
  if (flag == 1) {
      document.getElementById("t2").value = "X";
      document.getElementById("t2").style.textAlign = "center";
      document.getElementById("t2").style.fontSize = "50px"
      document.getElementById("t2").style.color = "red";
      document.getElementById("t2").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("t2").value = "0";
      document.getElementById("t2").style.textAlign = "center";
      document.getElementById("t2").style.fontSize = "50px"
      document.getElementById("t2").style.color = "blue";
      document.getElementById("t2").disabled = true;
      flag = 1;
  }
}

function topRightPress() {
  if (flag == 1) {
      document.getElementById("t3").value = "X";
      document.getElementById("t3").style.textAlign = "center";
      document.getElementById("t3").style.fontSize = "50px"
      document.getElementById("t3").style.color = "red";
      document.getElementById("t3").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("t3").value = "0";
      document.getElementById("t3").style.textAlign = "center";
      document.getElementById("t3").style.fontSize = "50px"
      document.getElementById("t3").style.color = "blue";
      document.getElementById("t3").disabled = true;
      flag = 1;
  }
}

function midLeftPress() {
  if (flag == 1) {
      document.getElementById("m1").value = "X";
      document.getElementById("m1").style.textAlign = "center";
      document.getElementById("m1").style.fontSize = "50px"
      document.getElementById("m1").style.color = "red";
      document.getElementById("m1").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("m1").value = "0";
      document.getElementById("m1").style.textAlign = "center";
      document.getElementById("m1").style.fontSize = "50px"
      document.getElementById("m1").style.color = "blue";
      document.getElementById("m1").disabled = true;
      flag = 1;
  }
}

function midMidPress() {
  if (flag == 1) {
      document.getElementById("m2").value = "X";
      document.getElementById("m2").style.textAlign = "center";
      document.getElementById("m2").style.fontSize = "50px"
      document.getElementById("m2").style.color = "red";
      document.getElementById("m2").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("m2").value = "0";
      document.getElementById("m2").style.textAlign = "center";
      document.getElementById("m2").style.fontSize = "50px"
      document.getElementById("m2").style.color = "blue";
      document.getElementById("m2").disabled = true;
      flag = 1;
  }
}

function midRightPress() {
  if (flag == 1) {
      document.getElementById("m3").value = "X";
      document.getElementById("m3").style.textAlign = "center";
      document.getElementById("m3").style.fontSize = "50px"
      document.getElementById("m3").style.color = "red";
      document.getElementById("m3").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("m3").value = "0";
      document.getElementById("m3").style.textAlign = "center";
      document.getElementById("m3").style.fontSize = "50px"
      document.getElementById("m3").style.color = "blue";
      document.getElementById("m3").disabled = true;
      flag = 1;
  }
}

function btmLeftPress() {
  if (flag == 1) {
      document.getElementById("bt1").value = "X";
      document.getElementById("bt1").style.textAlign = "center";
      document.getElementById("bt1").style.fontSize = "50px"
      document.getElementById("bt1").style.color = "red";
      document.getElementById("bt1").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("bt1").value = "0";
      document.getElementById("bt1").style.textAlign = "center";
      document.getElementById("bt1").style.fontSize = "50px"
      document.getElementById("bt1").style.color = "blue";
      document.getElementById("bt1").disabled = true;
      flag = 1;
  }
}

function btmMidPress() {
  if (flag == 1) {
      document.getElementById("bt2").value = "X";
      document.getElementById("bt2").style.textAlign = "center";
      document.getElementById("bt2").style.fontSize = "50px"
      document.getElementById("bt2").style.color = "red";
      document.getElementById("bt2").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("bt2").value = "0";
      document.getElementById("bt2").style.textAlign = "center";
      document.getElementById("bt2").style.fontSize = "50px"
      document.getElementById("bt2").style.color = "blue";
      document.getElementById("bt2").disabled = true;
      flag = 1;
  }
}

function btmRightPress() {
  if (flag == 1) {
      document.getElementById("bt3").value = "X";
      document.getElementById("bt3").style.textAlign = "center";
      document.getElementById("bt3").style.fontSize = "50px"
      document.getElementById("bt3").style.color = "red";
      document.getElementById("bt3").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("bt3").value = "0";
      document.getElementById("bt3").style.textAlign = "center";
      document.getElementById("bt3").style.fontSize = "50px"
      document.getElementById("bt3").style.color = "blue";
      document.getElementById("bt3").disabled = true;
      flag = 1;
  }
}

// Function to reset game
function resetFunc() {
  document.getElementById('t1').value = '';
  document.getElementById("t1").disabled = false;
  document.getElementById("t2").value = '';
  document.getElementById("t2").disabled = false;
  document.getElementById("t3").value = '';
  document.getElementById("t3").disabled = false;
  document.getElementById("m1").value = '';
  document.getElementById("m1").disabled = false;
  document.getElementById("m2").value = '';
  document.getElementById("m2").disabled = false;
  document.getElementById("m3").value = '';
  document.getElementById("m3").disabled = false;
  document.getElementById("bt1").value = '';
  document.getElementById("bt1").disabled = false;
  document.getElementById("bt2").value = '';
  document.getElementById("bt2").disabled = false;
  document.getElementById("bt3").value = '';
  document.getElementById("bt3").disabled = false;

}