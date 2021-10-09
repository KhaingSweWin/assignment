var categories=document.querySelector("#categories");
console.log(categories.children.length);
document.querySelector(".cat_list").innerHTML="Total number of categories "+categories.children.length;

var start_element=document.querySelector("li:nth-child(even)");
console.log(start_element)
console.log(start_element.previousElementSibling)
console.log(start_element.nextElementSibling)
console.log(start_element.parentNode)
console.log(categories.children[3])

var btns=document.querySelectorAll(".btn-delete")
btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        var list_item=btn.parentNode;
        list_item.style.display="none"
        //categories.removeChild(list_item)
    })
})

var today=new Date();
console.log(today.getFullYear()+"/"+(today.getMonth()+1)+"/"+today.getDate());
var bd=new Date("1990/10/5");
var difference=today-bd;
console.log(Math.floor(difference/(365*24*60*60*1000)))