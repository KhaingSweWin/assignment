console.log("hello");
var name="khaing";
console.log("hello "+name);
console.log(`Morning ${name}`);
document.write(name);
document.getElementById('result').innerText="Hello "+name;
document.getElementById('result').style.backgroundColor="#00ffee";

var swimming=false
document.getElementById('result').className=swimming;

var today=new Date();
var hours=today.getHours();
console.log('current time is '+hours);
