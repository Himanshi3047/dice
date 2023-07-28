let randomNumber1 = Math.round(Math.random() * 6) +1;

let randomDiceImage = "dice" +  randomNumber1  + ".png "  ; // gives dice1.png etc

let randomImgSource = "images/" + randomDiceImage ; // gives images/dice1.png etc

// for left image
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImgSource);

// for right image
let randomNumber2 = Math.round(Math.random() * 6)+1;
let randomImgSource2 = "images/dice" + randomNumber2  + ".png " ; // gives images/dice1.png wtc
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImgSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!!";
}
if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!";
}