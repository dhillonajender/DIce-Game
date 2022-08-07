var randomNumber1 = Math.random(); //range (0-0.99)
var randomNumber2 = Math.random(); //range (0-0.99)

randomNumber1 = (randomNumber1*6)+1;//range (1-6.94)
randomNumber1=Math.floor(randomNumber1);//range(1-6)
randomNumber2 = (randomNumber2*6)+1;//range (1-6.94)
randomNumber2=Math.floor(randomNumber2);//range(1-6)

var diceNew1= "images/"+"dice"+randomNumber1+".png";
var diceNew2= "images/"+"dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",diceNew1);
document.querySelector(".img2").setAttribute("src",diceNew2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="Player2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
