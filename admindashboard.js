let user=document.getElementById("users");
let envelope=document.getElementById("envelope");
envelope.addEventListener("click",envelopefunction);
let background=document.getElementById("backgroundContainer");
let light=document.getElementById("light-theme");
light.addEventListener("click",lightTheme);
let dark=document.getElementById("dark-theme");
dark.addEventListener("click",darkTheme);
let homeContainer=document.getElementById("homeContainer");
let createContainer=document.getElementById("create-user");

let createbackground=document.getElementById("createbackground");



 // Call the function


let sidehome=document.getElementById("sidehome");
let userslist=document.getElementById("users-list");
let list=document.getElementById("list");
let imagegallery=document.getElementById("imagegallery");
let images=document.getElementById("images");


function darkTheme()
{
    background.style.backgroundColor="black";
}
function lightTheme()
{   
    background.style.backgroundColor="#cbcaca";
}
function envelopefunction()
{
    alert("No Current Messages");
}
let updatedValue=null;
let users=0;
updatedValue=setInterval(function()
{
    users=users+10;
    user.textContent=users+"+";
    if(users===2500)
    {
        clearInterval(updatedValue);
    }
    
},10);
let average=document.getElementById("avg");
let updatedvalue1=null;
let avg=0.00;
updatedvalue1=setInterval(function()
{
    avg=avg+3;
    average.textContent=avg+" min";
    if(avg===123)
    {
       clearInterval(updatedvalue1);
    }
},100);
let download=document.getElementById("download");
let updated=null;
let down=0;
updated=setInterval(function(){
    down=down+100;
    download.textContent=down+"+";
    if(down===1700)
    {
        clearInterval(updated)
    }
},100);

let comment=document.getElementById("comment");
let update=null;
let comment1=0;
update=setInterval(function()
{
    comment1=comment1+1;
    comment.textContent=comment1+".5K+";
    if(comment1===5)
    {
        clearInterval(update);
    }
},500);
 function createUser()
{  
  createbackground.style.backgroundColor="#42378F";
   sidehome.style.backgroundColor="transparent";
   list.style.backgroundColor="transparent";
   createContainer.classList.remove("d-none");
   sidehome.style.color="white";
   homeContainer.classList.add("d-none");
   userslist.classList.add("d-none");
   images.style.backgroundColor="transparent";
   sidecontact.style.backgroundColor="transparent";
   imagegallery.classList.add("d-none");
   contactbg.classList.add("d-none");
  
}
function home()
{    
    sidehome.style.backgroundColor=" #cbcaca";
    createbackground.style.backgroundColor="transparent";
    list.style.backgroundColor="transparent";
    sidehome.style.color="black";
    createContainer.classList.add("d-none");
    homeContainer.classList.remove("d-none");
    images.style.backgroundColor="transparent";
    sidecontact.style.backgroundColor="transparent";
    userslist.classList.add("d-none");
    imagegallery.classList.add("d-none");
    contactbg.classList.add("d-none");
}
function userlist()
{   
   list.style.backgroundColor="#42378F";
   images.style.backgroundColor="transparent";
   sidehome.style.color="white";
   createbackground.style.backgroundColor="transparent";
   sidehome.style.backgroundColor="transparent";
   sidecontact.style.backgroundColor="transparent";
   createContainer.classList.add("d-none");
   homeContainer.classList.add("d-none");
   userslist.classList.remove("d-none");
   imagegallery.classList.add("d-none");
   contactbg.classList.add("d-none");
}
function gallery()
{   
    images.style.backgroundColor="#42378F";
    list.style.backgroundColor="transparent";
   sidehome.style.color="white";
   createbackground.style.backgroundColor="transparent";
   sidecontact.style.backgroundColor="transparent";
   sidehome.style.backgroundColor="transparent";
    imagegallery.classList.remove("d-none");
    createContainer.classList.add("d-none");
    homeContainer.classList.add("d-none");
    userslist.classList.add("d-none");
    contactbg.classList.add("d-none");
}
let sidecontact=document.getElementById("side-contact");
let contactbg=document.getElementById("contactbg");
function contactus()
{
    sidecontact.style.backgroundColor="#42378F";
    images.style.backgroundColor="transparent";
    list.style.backgroundColor="transparent";
   sidehome.style.color="white";
   createbackground.style.backgroundColor="transparent";
   sidehome.style.backgroundColor="transparent";
    contactbg.classList.remove("d-none");
    createContainer.classList.add("d-none");
    homeContainer.classList.add("d-none");
    userslist.classList.add("d-none");
    imagegallery.classList.add("d-none");

}


document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const studentTable = document.getElementById("studentTable");
    
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const student = getStudentFromForm();
        addStudentToTable(student);
        saveStudentToLocalstorage(student);
        registrationForm.reset();
    });
function getStudentFromForm() {
    const student = {};
    student.name = document.getElementById("name").value;
    student.regdno = document.getElementById("regdno").value;
    student.email = document.getElementById("email").value;
    student.branch = document.getElementById("branch").value;
    student.gender = getSelectedGender();
    student.ssccgpa = document.getElementById("ssccgpa").value;
    student.intercgpa = document.getElementById("intercgpa").value;
    student.btechcgpa = document.getElementById("btechcgpa").value;
    return student;
}

function getSelectedGender() {
    const genderRadios = document.getElementsByName("gender");
        for (let i = 0; i < genderRadios.length; i++) {
            if (genderRadios[i].checked) {
                return genderRadios[i].value;
            }
        }
    return "";
}
    
function addStudentToTable(student) {
    const row = document.createElement("tr");

    appendCell(row, student.name);
    appendCell(row, student.regdno);
    appendCell(row, student.email);
    appendCell(row, student.branch);
    appendCell(row, student.gender);
    appendCell(row, student.ssccgpa);
    appendCell(row, student.intercgpa);
    appendCell(row, student.btechcgpa);

    studentTable.appendChild(row);
}

function appendCell(row, value) {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
}
    
function saveStudentToLocalstorage(student) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
}
    
function loadStudentsFromLocalstorage() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(function(student) {
        addStudentToTable(student);
    });
}
    
loadStudentsFromLocalstorage();
});
const deleteUser = async (userId) => {
    try {
        console.log(`Deleting user with ID: ${userId}`);

        const response = await fetch(`/api/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message); // Display success message
            // Optionally, you can remove the deleted row from the table
            document.querySelector(`[data-user-id="${userId}"]`).remove();
        } else {
            console.error('Error deleting user');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
