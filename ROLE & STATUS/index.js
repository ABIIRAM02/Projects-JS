var x = 0;

var box = document.querySelector("#boxes");
var upArrow = document.getElementById("AU")
var downArrow = document.getElementById("AD")

upArrow.addEventListener("click" , function()
{
   if(x > -600){
   x = x - 250;
   box.style.top = x + "px";
   console.log(box);}
})

downArrow.addEventListener("click" , function()
{
   if(x < 0){
   x = x + 250;
   box.style.top = x + "px";}
})
