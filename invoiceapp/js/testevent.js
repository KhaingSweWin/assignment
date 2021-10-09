document.addEventListener('DOMContentLoaded',function(){

var show_button=document.getElementById('show');
var event=document.getElementById('event')

show_button.addEventListener('click',function(){
    for(var i=0;i<3;i++){
        var card=document.createElement("div");
        card.classList.add("card");
        card.classList.add("col-md-4");
        var cardbody=document.createElement("div");
        cardbody.classList.add("card-body");
        cardbody.style.backgroundColor="red";
        var para=document.createElement("p")
        para.appendChild(document.createTextNode("Hello"));
        cardbody.appendChild(para);
        card.appendChild(cardbody);
        event.appendChild(card);
    }

    
})
document.querySelector("#todolist").onsubmit=function(){
    const li=document.createElement('li');
    li.innerHTML=document.querySelector("#new-task").value;
    
    document.querySelector("#tasks").append(li);
    document.querySelector("#new-task").value="";

   
};
})