
let userName = document.querySelector(".userName");
let userPass = document.querySelector(".userPass");
let logInBtn = document.querySelector(".logInBtn")

localStorage.setItem("user", "admin")
localStorage.setItem("pass", "admin")

let user = localStorage.getItem("user");
let pass = localStorage.getItem("pass");

logInBtn.addEventListener("click", function(){
  if(user == userName.value && pass == userPass.value){
    window.location.href="../Front-end/documentholder.html";
    localStorage.clear();
  } else{
    alert("ERROR")
  }
})
