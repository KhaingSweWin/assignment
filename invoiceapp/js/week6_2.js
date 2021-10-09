console.log("External js");
document.write("See in external js file")


{
    var name="Host MM"; //global scope
    var email="admin@hostmm.tech"; //local scope
    const phone="+959456099876"; //local scope & constant (no update)
    
    console.log("Email address is "+email);
   // phone="+959786666543";
    console.log("Phone no is "+phone);
}

console.log("Welcome to "+name);
//div1
//name,email,address
var address="Mandalay";
document.getElementById('div1').innerHTML=`<h3> ${name}</h3><h4>${email}</h4><h5>${address}</h5>`;

//div2
//Job position, Message , age , status
var age=25;
var swimming_status=false;
document.getElementById("div2").innerHTML=`swimming status ${swimming_status}`;

//document.getElementById('div2').className=swimming_status;
document.getElementById('div2').classList.add(swimming_status);

//array
var colors=["white","red","yellow"];
console.log(colors[0]);
console.log(colors.length);

//change div's color using array colors values
document.getElementById('div1').classList.remove("bg-primary");
var color=colors[1];
var div1=document.getElementById("div1");
div1.classList.add(color);

//hidden_status array 
// assign true, false
// var check=false, div1 disappear in page. 

var employees=new Array("david","michel","john");
console.log(employees[0]);

var check=new Array("hide","appear");

//div (rows:2, cols:3)
//default: div is hidden
//check[1]: div is shown
document.getElementById('mydiv').classList.remove("mydiv_hide");
document.getElementById('mydiv').classList.add(check[1])

console.log(exchangeUSD(200000).toFixed(2));
var value="3500000";
console.log(exchangeUSD(parseInt(value)).toFixed(2));
var dob=new Date("1984/01/23");
console.log(Date.now());
var age=new Date(Date.now()-dob.getTime());
console.log(age);
console.log(Math.abs(age.getUTCFullYear() - 1970));


function exchangeUSD(kyat)
{
    return kyat/1933;
}