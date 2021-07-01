function myfunc() {
  
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
  if ((topLeft == 'x' || topLeft == 'X') && (topMid == 'x' ||
  topMid == 'X') && (topRight == 'x' || topRight == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;
      window.alert('Player X won');
  }
  else if ((topLeft == 'x' || topLeft == 'X') && (midLeft == 'x' ||
  midLeft == 'X') && (btmLeft == 'x' || btmLeft == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;

      window.alert('Player X won');
  }
  else if ((btmLeft == 'x' || btmLeft == 'X') && (btmMid == 'x' || 
  btmMid == 'X') && (btmRight == 'x' || btmRight == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
      window.alert('Player X won');
  }
  else if ((topRight == 'x' || topRight == 'X') && (midRight == 'x' || 
  midRight == 'X') && (btmRight == 'x' || btmRight == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      window.alert('Player X won');
  }
  else if ((topLeft == 'x' || topLeft == 'X') && (midMid == 'x' || 
  midMid == 'X') && (btmRight == 'x' || btmRight == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      window.alert('Player X won');
  }
  else if ((topRight == 'x' || topRight == 'X') && (midMid == 'x' || 
  midMid == 'X') && (btmLeft == 'x' || btmLeft == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;
      window.alert('Player X won');
  }
  else if ((topMid == 'x' || topMid == 'X') && (midMid == 'x' || 
  midMid == 'X') && (btmMid == 'x' || btmMid == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("t1").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt3").disabled = true;
      window.alert('Player X won');
  }
  else if ((midLeft == 'x' || midLeft == 'X') && (midMid == 'x' || 
  midMid == 'X') && (midRight == 'x' || midRight == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;
      window.alert('Player X won');
  }

  // Checking of Player X finsh
  // Checking for Player 0 starts, Is player 0 won or
  // not and after that disabled all the other fields
  else if ((topLeft == '0' || topLeft == '0') && (topMid == '0' || 
  topMid == '0') && (topRight == '0' || topRight == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((topLeft == '0' || topLeft == '0') && (midLeft == '0' || 
  midLeft == '0') && (btmLeft == '0' || btmLeft == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((btmLeft == '0' || btmLeft == '0') && (btmMid == '0' || 
  btmMid == '0') && (btmRight == '0' || btmRight == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((topRight == '0' || topRight == '0') && (midRight == '0' || 
  midRight == '0') && (btmRight == '0' || btmRight == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((topRight == '0' || topRight == '0') && (midMid == '0' || 
  midMid == '0') && (btmRight == '0' || btmRight == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((topRight == '0' || topRight == '0') && (midMid == '0' || 
  midMid == '0') && (btmRight == '0' || btmRight == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((topMid == '0' || topMid == '0') && (midMid == '0' || 
  midMid == '0') && (btmMid == '0' || btmMid == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("t1").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt3").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((midLeft == '0' || midLeft == '0') && (midMid == '0' || 
      midMid == '0') && (midRight == '0' || midRight == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;
      window.alert('Player 0 won');
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
              .innerHTML = "Match Tie";
          window.alert('Match Tie');
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

// Function to reset game
function resetFunc() {
  
  document.getElementById('t1').value = '';
  document.getElementById("t2").value = '';
  document.getElementById("t3").value = '';
  document.getElementById("m1").value = '';
  document.getElementById("m2").value = '';
  document.getElementById("m3").value = '';
  document.getElementById("bt1").value = '';
  document.getElementById("bt2").value = '';
  document.getElementById("bt3").value = '';

}

// Here onwards, functions check turn of the player 
// and put accordingly value X or 0
flag = 1;
function topLeftPress() {
  if (flag == 1) {
      document.getElementById("t1").value = "X";
      document.getElementById("t1").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("t1").value = "0";
      document.getElementById("t1").disabled = true;
      flag = 1;
  }
}

function topMidPress() {
  if (flag == 1) {
      document.getElementById("t2").value = "X";
      document.getElementById("t2").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("t2").value = "0";
      document.getElementById("t2").disabled = true;
      flag = 1;
  }
}

function topRightPress() {
  if (flag == 1) {
      document.getElementById("t3").value = "X";
      document.getElementById("t3").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("t3").value = "0";
      document.getElementById("t3").disabled = true;
      flag = 1;
  }
}

function midLeftPress() {
  if (flag == 1) {
      document.getElementById("m1").value = "X";
      document.getElementById("m1").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("m1").value = "0";
      document.getElementById("m1").disabled = true;
      flag = 1;
  }
}

function midMidPress() {
  if (flag == 1) {
      document.getElementById("m2").value = "X";
      document.getElementById("m2").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("m2").value = "0";
      document.getElementById("m2").disabled = true;
      flag = 1;
  }
}

function midRightPress() {
  if (flag == 1) {
      document.getElementById("m3").value = "X";
      document.getElementById("m3").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("m3").value = "0";
      document.getElementById("m3").disabled = true;
      flag = 1;
  }
}

function btmLeftPress() {
  if (flag == 1) {
      document.getElementById("bt1").value = "X";
      document.getElementById("bt1").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("bt1").value = "0";
      document.getElementById("bt1").disabled = true;
      flag = 1;
  }
}

function btmMidPress() {
  if (flag == 1) {
      document.getElementById("bt2").value = "X";
      document.getElementById("bt2").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("bt2").value = "0";
      document.getElementById("bt2").disabled = true;
      flag = 1;
  }
}

function btmRightPress() {
  if (flag == 1) {
      document.getElementById("bt3").value = "X";
      document.getElementById("bt3").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("bt3").value = "0";
      document.getElementById("bt3").disabled = true;
      flag = 1;
  }
}
