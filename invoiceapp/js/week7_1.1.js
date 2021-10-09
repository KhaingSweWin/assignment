var form_tasks=document.querySelector("#tasks");

//event submit handler
form_tasks.onsubmit=()=>{
    var newtask=document.querySelector("#newtask").value;
    var li=document.createElement("li");
    li.innerHTML=newtask;
    document.querySelector("#tasklist").appendChild(li);
    document.querySelector("#newtask").value="";
    return false; // prevent going to another link or refresh
}

//Assignment Login
// input text username , password
// submit button
// When click submit, length of values in username and password
//if length of username < 5, username has more than 5
// if length of password < 8, pwd must have more than 8.