window.addEventListener("load",()=>{
  document.querySelector("#username").focus();
})
form_login=document.querySelector("#login");
var username=document.querySelector("#username");//element
var password=document.querySelector("#password")
//1. parmeter("eventname",callback function)
//2. event.preventDefault();
form_login.addEventListener("submit",(e)=>{
  
  var uname=username.value; // input text
  console.log(uname);
  
  var pw=password.value;
  if(uname.length<5){
    document.querySelector("#uname_error").innerHTML="Username must be more than 5";
  }
  if(pw.length<8)
  {
      document.querySelector("#pwd_error").innerHTML="Password must be more than 8";
  }
  e.preventDefault();
});

var reset=document.querySelector("#reset");
reset.addEventListener("click",(e)=>{
    username.value="";
    password.value="";
    e.preventDefault();
    
})

username.addEventListener("focus",(e)=>{
  document.querySelector("#uname_error").innerHTML="Please add username of at least 5 characters";
  e.preventDefault();
})
username.addEventListener("blur",()=>{
    document.querySelector("#uname_error").innerHTML="You must add username";
  })

var radios=document.querySelectorAll("input[type='radio'][name='person_type']"); //radios node list
console.log(radios);
console.log(radios[0]);
radios.forEach(radio=>{
    radio.addEventListener("change",()=>{
       
    })
})
/*
var courses=["engineering","science","it"]
for(var count=0;count<courses.length;count++)
{
  var option=document.createElement("option")
  option.text=courses[count];
  option.value=courses[count];
  console.log(option)
  document.getElementById("course").append(option)
}
*/
document.querySelector("#agreement").addEventListener('change',function(){
    console.log(document.querySelector("#agreement").checked);
})

var today=new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getUTCMonth()+1)
console.log(today.getDate())
var birthdate=new Date('1994/10/3');
console.log(365*24*60*60*1000)
console.log((today-birthdate)/31556900000)

var description=document.querySelector("#description");
description.addEventListener("keyup",()=>{
  var count=180-description.value.length;
  document.getElementById("message").innerHTML="Characters Left "+count;
})

description.addEventListener("keydown",(e)=>{
  console.log(description.value);
  console.log(e.keyCode);
})

//for
//for in (object)
//forEach(function()) (for nodelist obj)

