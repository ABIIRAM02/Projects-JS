var signup = document.getElementById("signup-btn")
var login = document.getElementById("login-btn")
var title = document.getElementById("title")
var box = document.getElementById("box")
var password = document.getElementById("password")
var digin = document.getElementById("digin")
// login.addEventListener("click", function() 
// {
//     title.innerHTML = "login";
// })

login.onclick = function()
{
    title.textContent = "LOG IN";
    box.style.maxHeight = "0"
    password.style.maxHeight = "0"
    login.classList.remove("disable")
    signup.classList.add("disable")
    digin.innerHTML = " Remember me"
}
signup.onclick = function()
{
    title.textContent = "SIGN UP";
    box.style.maxHeight = "100px"
    password.style.maxHeight = "100px"
    login.classList.add("disable")
    signup.classList.remove("disable")
    digin.innerHTML = " AGREE <a> Terms & Conditions</a>";
}

var fa_input_1 = document.getElementById("fa-input-1")
var fa_input_2 = document.getElementById("fa-input-2")

function clickFunction(icon)
{    

    fa_input_1.type == "password" ? fa_input_1.type = "text" & icon.classList.add("fa-eye") :
                                    icon.classList.remove("fa-eye") & (fa_input_1.type = "password")

    fa_input_2.type == "password" ? fa_input_2.type = "text" & icon.classList.add("fa-eye") : 
                        icon.classList.remove("fa-eye") & (fa_input_2.type = "password")

}




