// // function add(num1 , num2)
// // {
// //     return num1 + num2;
// // }
// // function mul(num1 , num2)
// // {
// //     return num1 * num2;
// // }
// // function div(num1 , num2)
// // {
// //     return num1 / num2;
// // }
// // function sub(num1 , num2)
// // {
// //     return num1 - num2;
// // }

// // function calculator(num1 , num2 , operator)
// // {
// //     return operator(num1 , num2)
// // }

// // console.log(calculator(5,5,mul));


// //constructor function

// function HouseKeeping ( name , age , experienced , languagesKnown  )
// {

//  this.name = name;
//  this.age = age;
//  this.experienced = experienced;
//  this.languagesKnown = languagesKnown;

// }

// var houseKeeper1 = new HouseKeeping ( "hella" , 24 , true ,["tamil" , "english" , "hindi"]);

// console.log(houseKeeper1.name);
























            /*     clicking and calling the function   makingSound()       */

            
var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
  document
    .querySelectorAll("button")
  [i].addEventListener("click", function() {

    makingSound(this.innerHTML)
    
  });
}

            /*     pressing the keyboard and calling the function  makingSound() 
             NOTE:event.key tells you which button that u pressed (event is an object with bunch of keys)  */


document.addEventListener("keypress" , function(event)
{
  makingSound(event.key)
})

            /*     makingSound function which consists of
             parameter (can be of keyboard or by clickig the button) value, using switch statement      */

function makingSound(letter)
{

  switch (letter) {
    case "w":
      var playingW = new Audio("sounds/tom-1.mp3");
      playingW.play();
      break;
    case "a":
      var playinga = new Audio("sounds/tom-2.mp3");
      playinga.play();
      break;
    case "s":
      var playings = new Audio("sounds/tom-3.mp3");
      playings.play();
      break;
    case "d":
      var playingd = new Audio("sounds/tom-4.mp3");
      playingd.play();
      break;
    case "j":
      var playingj = new Audio("sounds/kick-bass.mp3");
      playingj.play();
      break;
    case "k":
      var playingk = new Audio("sounds/snare.mp3");
      playingk.play();
      break;
    case "l":
      var playingl = new Audio("sounds/crash.mp3");
      playingl.play();
      break;
  
    default:
      console.log("it's working");
      break;
  }

}





























