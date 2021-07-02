"use strict";

function myfunc() {
  // Setting DOM to all boxes or input field
  var topLeft = document.getElementById("t1").value;
  var topMid = document.getElementById("t2").value;
  var topRight = document.getElementById("t3").value;
  var midLeft = document.getElementById("m1").value;
  var midMid = document.getElementById("m2").value;
  var midRight = document.getElementById("m3").value;
  var btmLeft = document.getElementById("bt1").value;
  var btmMid = document.getElementById("bt2").value;
  var btmRight = document.getElementById("bt3").value; // Checking if Player X won or not and after 
  // that disabled all the other fields

  if (topLeft == 'X' && topMid == 'X' && topRight == 'X') {
    var textSequence = function textSequence(i) {
      if (xWinningMessage.length > i) {
        setTimeout(function () {
          document.getElementById("print").innerHTML = xWinningMessage[i];
          textSequence(++i);
        }, 1000);
      } else if (flashing.length == i) {
        // Loop
        textSequence(6);
      }
    };

    var xWinningMessage = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won'];
    textSequence(0);
    document.getElementById("m1").disabled = true;
    document.getElementById("m2").disabled = true;
    document.getElementById("m3").disabled = true;
    document.getElementById("bt1").disabled = true;
    document.getElementById("bt2").disabled = true;
    document.getElementById("bt3").disabled = true;
  } else if (topLeft == 'X' && midLeft == 'X' && btmLeft == 'X') {
    var _textSequence = function _textSequence(i) {
      if (_xWinningMessage.length > i) {
        setTimeout(function () {
          document.getElementById("print").innerHTML = _xWinningMessage[i];

          _textSequence(++i);
        }, 1000);
      } else if (flashing.length == i) {
        // Loop
        _textSequence(6);
      }
    };

    var _xWinningMessage = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won'];

    _textSequence(0);

    document.getElementById("t2").disabled = true;
    document.getElementById("t3").disabled = true;
    document.getElementById("m2").disabled = true;
    document.getElementById("m3").disabled = true;
    document.getElementById("bt2").disabled = true;
    document.getElementById("bt3").disabled = true;
  } else if (btmLeft == 'X' && btmMid == 'X' && btmRight == 'X') {
    var _textSequence2 = function _textSequence2(i) {
      if (_xWinningMessage2.length > i) {
        setTimeout(function () {
          document.getElementById("print").innerHTML = _xWinningMessage2[i];

          _textSequence2(++i);
        }, 1000);
      } else if (flashing.length == i) {
        // Loop
        _textSequence2(6);
      }
    };

    var _xWinningMessage2 = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won'];

    _textSequence2(0);

    document.getElementById("t1").disabled = true;
    document.getElementById("t2").disabled = true;
    document.getElementById("t3").disabled = true;
    document.getElementById("m1").disabled = true;
    document.getElementById("m2").disabled = true;
    document.getElementById("m3").disabled = true;
  } else if (topRight == 'X' && midRight == 'X' && btmRight == 'X') {
    var _textSequence3 = function _textSequence3(i) {
      if (_xWinningMessage3.length > i) {
        setTimeout(function () {
          document.getElementById("print").innerHTML = _xWinningMessage3[i];

          _textSequence3(++i);
        }, 1000);
      } else if (flashing.length == i) {
        // Loop
        _textSequence3(6);
      }
    };

    var _xWinningMessage3 = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won'];

    _textSequence3(0);

    document.getElementById("t1").disabled = true;
    document.getElementById("t2").disabled = true;
    document.getElementById("m1").disabled = true;
    document.getElementById("m2").disabled = true;
    document.getElementById("bt1").disabled = true;
    document.getElementById("bt2").disabled = true;
  } else if (topLeft == 'X' && midMid == 'X' && btmRight == 'X') {
    var _textSequence4 = function _textSequence4(i) {
      if (_xWinningMessage4.length > i) {
        setTimeout(function () {
          document.getElementById("print").innerHTML = _xWinningMessage4[i];

          _textSequence4(++i);
        }, 1000);
      } else if (flashing.length == i) {
        // Loop
        _textSequence4(6);
      }
    };

    var _xWinningMessage4 = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won'];

    _textSequence4(0);

    document.getElementById("t2").disabled = true;
    document.getElementById("t3").disabled = true;
    document.getElementById("m1").disabled = true;
    document.getElementById("m3").disabled = true;
    document.getElementById("bt1").disabled = true;
    document.getElementById("bt2").disabled = true;
  } else if (topRight == 'X' && midMid == 'X' && btmLeft == 'X') {
    var _textSequence5 = function _textSequence5(i) {
      if (_xWinningMessage5.length > i) {
        setTimeout(function () {
          document.getElementById("print").innerHTML = _xWinningMessage5[i];

          _textSequence5(++i);
        }, 1000);
      } else if (flashing.length == i) {
        // Loop
        _textSequence5(6);
      }
    };

    var _xWinningMessage5 = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won'];

    _textSequence5(0);

    document.getElementById("t1").disabled = true;
    document.getElementById("t2").disabled = true;
    document.getElementById("m1").disabled = true;
    document.getElementById("m3").disabled = true;
    document.getElementById("bt2").disabled = true;
    document.getElementById("bt3").disabled = true;
  } else if (topMid == 'X' && midMid == 'X' && btmMid == 'X') {
    var _textSequence6 = function _textSequence6(i) {
      if (_xWinningMessage6.length > i) {
        setTimeout(function () {
          document.getElementById("print").innerHTML = _xWinningMessage6[i];

          _textSequence6(++i);
        }, 1000);
      } else if (flashing.length == i) {
        // Loop
        _textSequence6(6);
      }
    };

    var _xWinningMessage6 = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won'];

    _textSequence6(0);

    document.getElementById("t1").disabled = true;
    document.getElementById("t3").disabled = true;
    document.getElementById("m1").disabled = true;
    document.getElementById("m3").disabled = true;
    document.getElementById("bt1").disabled = true;
    document.getElementById("bt3").disabled = true;
  } else if (midLeft == 'X' && midMid == 'X' && midRight == 'X') {
    var _textSequence7 = function _textSequence7(i) {
      if (_xWinningMessage7.length > i) {
        setTimeout(function () {
          document.getElementById("print").innerHTML = _xWinningMessage7[i];

          _textSequence7(++i);
        }, 1000);
      } else if (flashing.length == i) {
        // Loop
        _textSequence7(6);
      }
    };

    var _xWinningMessage7 = ['Player X won', 'X is the Winner', 'Player X won', 'X is the Winner', 'Your father would be proud', 'Player X won'];

    _textSequence7(0);

    document.getElementById("t1").disabled = true;
    document.getElementById("t2").disabled = true;
    document.getElementById("t3").disabled = true;
    document.getElementById("bt1").disabled = true;
    document.getElementById("bt2").disabled = true;
    document.getElementById("bt3").disabled = true;
  } // Checking of Player X finsh
  // Checking for Player 0 starts, Is player 0 won or
  // not and after that disabled all the other fields
  else if (topLeft == '0' && topMid == '0' && topRight == '0') {
      var _textSequence8 = function _textSequence8(i) {
        if (oWinningMessage.length > i) {
          setTimeout(function () {
            document.getElementById("print").innerHTML = oWinningMessage[i];

            _textSequence8(++i);
          }, 1000);
        } else if (flashing.length == i) {
          // Loop
          _textSequence8(6);
        }
      };

      var oWinningMessage = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won'];

      _textSequence8(0);

      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;
    } else if (topLeft == '0' && midLeft == '0' && btmLeft == '0') {
      var _textSequence9 = function _textSequence9(i) {
        if (_oWinningMessage.length > i) {
          setTimeout(function () {
            document.getElementById("print").innerHTML = _oWinningMessage[i];

            _textSequence9(++i);
          }, 1000);
        } else if (flashing.length == i) {
          // Loop
          _textSequence9(6);
        }
      };

      var _oWinningMessage = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won'];

      _textSequence9(0);

      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;
    } else if (btmLeft == '0' && btmMid == '0' && btmRight == '0') {
      var _textSequence10 = function _textSequence10(i) {
        if (_oWinningMessage2.length > i) {
          setTimeout(function () {
            document.getElementById("print").innerHTML = _oWinningMessage2[i];

            _textSequence10(++i);
          }, 1000);
        } else if (flashing.length == i) {
          // Loop
          _textSequence10(6);
        }
      };

      var _oWinningMessage2 = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won'];

      _textSequence10(0);

      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("m3").disabled = true;
    } else if (topRight == '0' && midRight == '0' && btmRight == '0') {
      var _textSequence11 = function _textSequence11(i) {
        if (_oWinningMessage3.length > i) {
          setTimeout(function () {
            document.getElementById("print").innerHTML = _oWinningMessage3[i];

            _textSequence11(++i);
          }, 1000);
        } else if (flashing.length == i) {
          // Loop
          _textSequence11(6);
        }
      };

      var _oWinningMessage3 = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won'];

      _textSequence11(0);

      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m2").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
    } else if (topLeft == '0' && midMid == '0' && btmRight == '0') {
      var _textSequence12 = function _textSequence12(i) {
        if (_oWinningMessage4.length > i) {
          setTimeout(function () {
            document.getElementById("print").innerHTML = _oWinningMessage4[i];

            _textSequence12(++i);
          }, 1000);
        } else if (flashing.length == i) {
          // Loop
          _textSequence12(6);
        }
      };

      var _oWinningMessage4 = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won'];

      _textSequence12(0);

      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
    } else if (topRight == '0' && midMid == '0' && btmLeft == '0') {
      var _textSequence13 = function _textSequence13(i) {
        if (_oWinningMessage5.length > i) {
          setTimeout(function () {
            document.getElementById("print").innerHTML = _oWinningMessage5[i];

            _textSequence13(++i);
          }, 1000);
        } else if (flashing.length == i) {
          // Loop
          _textSequence13(6);
        }
      };

      var _oWinningMessage5 = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won'];

      _textSequence13(0);

      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;
    } else if (topMid == '0' && midMid == '0' && btmMid == '0') {
      var _textSequence14 = function _textSequence14(i) {
        if (_oWinningMessage6.length > i) {
          setTimeout(function () {
            document.getElementById("print").innerHTML = _oWinningMessage6[i];

            _textSequence14(++i);
          }, 1000);
        } else if (flashing.length == i) {
          // Loop
          _textSequence14(6);
        }
      };

      var _oWinningMessage6 = ['Player 0 won', '0 is the Winner', 'Player 0 won', 'X is the Winner', 'Your father would be proud', 'Player 0 won'];

      _textSequence14(0);

      document.getElementById("t1").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("m1").disabled = true;
      document.getElementById("m3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt3").disabled = true;
    } else if (midLeft == '0' && midMid == '0' && midRight == '0') {
      var _textSequence15 = function _textSequence15(i) {
        if (_oWinningMessage7.length > i) {
          setTimeout(function () {
            document.getElementById("print").innerHTML = _oWinningMessage7[i];

            _textSequence15(++i);
          }, 1000);
        } else if (flashing.length == i) {
          // Loop
          _textSequence15(6);
        }
      };

      var _oWinningMessage7 = ['Eaaassssyyyyyyy', 'Eaaaaaaasssssyyyyy', 'Easy', 'Easy!', 'Easy!!', 'Player 0 won'];

      _textSequence15(0);

      document.getElementById("t1").disabled = true;
      document.getElementById("t2").disabled = true;
      document.getElementById("t3").disabled = true;
      document.getElementById("bt1").disabled = true;
      document.getElementById("bt2").disabled = true;
      document.getElementById("bt3").disabled = true;
    } // Checking of Player 0 finsh
    // Here, Checking about Tie
    else if ((topLeft == 'X' || topLeft == '0') && (topMid == 'X' || topMid == '0') && (topRight == 'X' || topRight == '0') && (midLeft == 'X' || midLeft == '0') && (midMid == 'X' || midMid == '0') && (midRight == 'X' || midRight == '0') && (btmLeft == 'X' || btmLeft == '0') && (btmMid == 'X' || btmMid == '0') && (btmRight == 'X' || btmRight == '0')) {
        document.getElementById('print').innerHTML = "Draw!";
      } else {
        // Here, Printing Result
        if (flag == 1) {
          document.getElementById('print').innerHTML = "Player X Turn";
        } else {
          document.getElementById('print').innerHTML = "Player 0 Turn";
        }
      }
} // Here onwards, functions check turn of the player 
// and put accordingly value X or 0


var currentFlagImage = document.getElementById('currentFlag');
flag = 1;

function topLeftPress() {
  if (flag == 1) {
    document.getElementById("t1").innerHTML = "<img src=\"./images/flag-england-flagge-quadratisch-85x85.gif\" alt=\"\" id=\"currentFlag\">";
    document.getElementById("t1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("t1").innerHTML = "<img src=\"./images/flag-argentina-flagge-quadratischschwarz-83x83.gif\" alt=\"\" id=\"Argentina Flag\">";
    document.getElementById("t1").disabled = true;
    flag = 1;
  }
}

function topMidPress() {
  if (flag == 1) {
    document.getElementById("t2").innerHTML = "<img src=\"./images/flag-england-flagge-quadratisch-85x85.gif\" alt=\"\" id=\"currentFlag\">";
    document.getElementById("t2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("t2").innerHTML = "<img src=\"./images/flag-argentina-flagge-quadratischschwarz-83x83.gif\" alt=\"\" id=\"Argentina Flag\">";
    document.getElementById("t2").disabled = true;
    flag = 1;
  }
}

function topRightPress() {
  if (flag == 1) {
    document.getElementById("t3").innerHTML = "<img src=\"./images/flag-england-flagge-quadratisch-85x85.gif\" alt=\"\" id=\"currentFlag\">";
    document.getElementById("t3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("t3").innerHTML = "<img src=\"./images/flag-argentina-flagge-quadratischschwarz-83x83.gif\" alt=\"\" id=\"Argentina Flag\">";
    document.getElementById("t3").disabled = true;
    flag = 1;
  }
}

function midLeftPress() {
  if (flag == 1) {
    document.getElementById("m1").innerHTML = "<img src=\"./images/flag-england-flagge-quadratisch-85x85.gif\" alt=\"\" id=\"currentFlag\">";
    document.getElementById("m1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("m1").innerHTML = "<img src=\"./images/flag-argentina-flagge-quadratischschwarz-83x83.gif\" alt=\"\" id=\"Argentina Flag\">";
    document.getElementById("m1").disabled = true;
    flag = 1;
  }
}

function midMidPress() {
  if (flag == 1) {
    document.getElementById("m2").innerHTML = "<img src=\"./images/flag-england-flagge-quadratisch-85x85.gif\" alt=\"\" id=\"currentFlag\">";
    document.getElementById("m2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("m2").innerHTML = "<img src=\"./images/flag-argentina-flagge-quadratischschwarz-83x83.gif\" alt=\"\" id=\"Argentina Flag\">";
    document.getElementById("m2").disabled = true;
    flag = 1;
  }
}

function midRightPress() {
  if (flag == 1) {
    document.getElementById("m3").innerHTML = "<img src=\"./images/flag-england-flagge-quadratisch-85x85.gif\" alt=\"\" id=\"currentFlag\">";
    document.getElementById("m3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("m3").innerHTML = "<img src=\"./images/flag-argentina-flagge-quadratischschwarz-83x83.gif\" alt=\"\" id=\"Argentina Flag\">";
    document.getElementById("m3").disabled = true;
    flag = 1;
  }
}

function btmLeftPress() {
  if (flag == 1) {
    document.getElementById("bt1").innerHTML = "<img src=\"./images/flag-england-flagge-quadratisch-85x85.gif\" alt=\"\" id=\"currentFlag\">";
    document.getElementById("bt1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("bt1").innerHTML = "<img src=\"./images/flag-argentina-flagge-quadratischschwarz-83x83.gif\" alt=\"\" id=\"Argentina Flag\">";
    document.getElementById("bt1").disabled = true;
    flag = 1;
  }
}

function btmMidPress() {
  if (flag == 1) {
    document.getElementById("bt2").innerHTML = "<img src=\"./images/flag-england-flagge-quadratisch-85x85.gif\" alt=\"\" id=\"currentFlag\">";
    document.getElementById("bt2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("bt2").innerHTML = "<img src=\"./images/flag-argentina-flagge-quadratischschwarz-83x83.gif\" alt=\"\" id=\"Argentina Flag\">";
    document.getElementById("bt2").disabled = true;
    flag = 1;
  }
}

function btmRightPress() {
  if (flag == 1) {
    document.getElementById("bt3").innerHTML = "<img src=\"./images/flag-england-flagge-quadratisch-85x85.gif\" alt=\"\" id=\"currentFlag\">";
    document.getElementById("bt3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("bt3").innerHTML = "<img src=\"./images/flag-argentina-flagge-quadratischschwarz-83x83.gif\" alt=\"\" id=\"Argentina Flag\">";
    document.getElementById("bt3").disabled = true;
    flag = 1;
  }
} // Function to reset game


function resetFunc() {
  document.getElementById('t1').innerHTML = '';
  document.getElementById("t1").disabled = false;
  document.getElementById("t2").innerHTML = '';
  document.getElementById("t2").disabled = false;
  document.getElementById("t3").innerHTML = '';
  document.getElementById("t3").disabled = false;
  document.getElementById("m1").innerHTML = '';
  document.getElementById("m1").disabled = false;
  document.getElementById("m2").innerHTML = '';
  document.getElementById("m2").disabled = false;
  document.getElementById("m3").innerHTML = '';
  document.getElementById("m3").disabled = false;
  document.getElementById("bt1").innerHTML = '';
  document.getElementById("bt1").disabled = false;
  document.getElementById("bt2").innerHTML = '';
  document.getElementById("bt2").disabled = false;
  document.getElementById("bt3").innerHTML = '';
  document.getElementById("bt3").disabled = false;
}