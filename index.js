var randNum=Math.random()*6;
randNum1=(Math.floor(randNum)+1);
var randDice="dice"+ randNum1+ ".png";
var imgdsrc="images/" +randDice;
var imag1=document.querySelectorAll("img")[0];
imag1.setAttribute("src",imgdsrc);

var randNum2=Math.random()*6;
randNum3=(Math.floor(randNum2)+1);
var randDice1="dice"+ randNum3+ ".png";
var imgdsrc2="images/" +randDice1;
var imag2=document.querySelectorAll("img")[1];
imag2.setAttribute("src",imgdsrc2);

if(randNum1 > randNum3){
  document.querySelector("h1").innerHTML="🚩PLAYER1 Wins!";
}
if(randNum1 < randNum3){
  document.querySelector("h1").innerHTML="🚩PLAYER2 Wins!";
}

if(randNum1 == randNum3){
  document.querySelector("h1").innerHTML="🚩DRAW";
}
