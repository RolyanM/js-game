let playerOne = "X";
let playerTwo = "O";
let currnetPlayer = "It's player One's go (X)"

//Boxes Dom
//Top
let topOne = document.querySelector(".t1").value;
let topTwo = document.querySelector(".t2").value;
let topThree = document.querySelector(".t3").value;
//Mid
let midOne = document.querySelector(".m1").value;
let midTwo = document.querySelector(".m2").value;
let midThree = document.querySelector(".m3").value;
//Bottom
let btmOne = document.querySelector(".b1").value;
let btmTwo = document.querySelector(".b2").value;
let btmThree = document.querySelector(".t3").value;



//function to place appropriate X or O in the correct box and then make it the other players go. 
const playerTurn = () => {
flag = 1;
function topLeftPress() {
    if (flag == 1) {
        document.querySelector(".t1").innerHTML = "X";
        document.querySelector(".t1").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector(".t1").value = "0";
        document.querySelector(".t1").disabled = true;
        flag = 1;
    }
}
  
function topMiddlePress() {
    if (flag == 1) {
        document.querySelector(".t2").value = "X";
        document.uerySelector(".t2").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector(".t2").value = "0";
        document.querySelector(".t2").disabled = true;
        flag = 1;
    }
}
  
function topRightPress() {
    if (flag == 1) {
        document.querySelector(".t3").value = "X";
        document.querySelector(".t3").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector(".t3").value = "0";
        document.querySelector(".t3").disabled = true;
        flag = 1;
    }
}
  
function middleLeftPress() {
    if (flag == 1) {
        document.querySelector(".m1").value = "X";
        document.querySelector(".m1").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector(".m1").value = "0";
        document.querySelector(".m1").disabled = true;
        flag = 1;
    }
}
  
function middleMiddlePress() {
    if (flag == 1) {
        document.querySelector(".m2").value = "X";
        document.querySelector(".m2").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector(".m2").value = "0";
        document.querySelector(".m2").disabled = true;
        flag = 1;
    }
}
  
function middleRightPress() {
    if (flag == 1) {
        document.querySelector(".m3").value = "X";
        document.querySelector(".m3").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector(".m3").value = "0";
        document.querySelector(".m3").disabled = true;
        flag = 1;
    }
}
  
function bottomLeftPress() {
    if (flag == 1) {
        document.querySelector(".b1").value = "X";
        document.querySelector(".b1").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector(".b1").value = "0";
        document.querySelector(".b1").disabled = true;
        flag = 1;
    }
}
  
function bottomRightPress() {
    if (flag == 1) {
        document.querySelector(".b2").value = "X";
        document.querySelector(".b2").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector(".b2").value = "0";
        document.querySelector(".b2").disabled = true;
        flag = 1;
    }
}
  
function bottomLeftPress() {
    if (flag == 1) {
        document.querySelector(".t3").value = "X";
        document.querySelector(".t3").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector(".t3").value = "0";
        document.querySelector(".t3").disabled = true;
        flag = 1;
    }
}
}

//reset button 

// Function to reset game
function resetButton() {
  location.reload();
  document.querySelector(".t1").value = '';
  document.querySelector(".t2").value = '';
  document.querySelector(".t3").value = '';
  document.querySelector(".m1").value = '';
  document.querySelector(".m2").value = '';
  document.querySelector(".m3").value = '';
  document.querySelector(".b1").value = '';
  document.querySelector(".b2").value = '';
  document.querySelector(".t3").value = '';

}