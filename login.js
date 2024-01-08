let username=document.getElementById("username");
let password=document.getElementById("password");
let anchorTag=document.getElementById("anchor");
let loginbtn=document.getElementById("button");
let para=document.getElementById("para");
localStorage.setItem("username","roshitha");
localStorage.setItem("password","aiml");
user=localStorage.getItem("username");
pass=localStorage.getItem("password")
loginbtn.addEventListener('click',loginfunction);
function loginfunction()
{
    if(username.value===user && password.value===pass)
    {
        anchorTag.href="admindashboard.html";
        username.value="";
        password.value="";
        para.textContent="";
    }
    else
    {
        para.textContent="**Incorrect username or password";
        username.value="";
        password.value="";
    }
}
