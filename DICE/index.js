
var randomNumberLeft = Math.floor(Math.random() * 6 + 1);

var randomImage = "./images/" + "dice" + randomNumberLeft + ".png";

var changeLeftImage = document.querySelectorAll("img")[0].setAttribute("src" , randomImage );


var randomNumberRight = Math.floor(Math.random() * 6 + 1);

var randomImage = "./images/" + "dice" + randomNumberRight + ".png";

var changeRightImage = document.querySelectorAll("img")[1].setAttribute("src" , randomImage );



if(randomNumberLeft > randomNumberRight)
{
    document.querySelector("h1").textContent = "haha PLAYER 1 WINS🚩!"
}
else if(randomNumberLeft == randomNumberRight)
{
    document.querySelector("h1").textContent = "DRAW MAN..."
}
else
{
    document.querySelector("h1").textContent = "shit PLAYER 2 WINS..."
    
}







































