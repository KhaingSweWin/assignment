let tf=100;
//1.function implementation
function changetoCelsius(tf){
    return (tf-32)*5/9;
}

//2.call function
console.log(changetoCelsius(tf).toFixed(3));
document.getElementById('input_value').innerText=tf+" Fah";
document.getElementById('result_cel').innerText+=changetoCelsius(100).toFixed(3)+" Celsius";

/// to usd
var rate=1817;
function currencyExchangeUSD(kyat){

    return kyat/rate;
}

//to kyat

function currencyExchangeKyat(usd){
    document.getElementById('result_usd').innerText= usd*rate;
}

currencyExchangeKyat(100);

//room_charge=35000;
//no_rooms=5;
//discount=10% of room_charge
//total cost???
//function calculateCost()

function calculateCost(){
    var room_charge=35000;
    var no_room=5;
    var discount=room_charge*10/100;
    var totalcost=(room_charge-discount)*no_room;
    return totalcost;
}

document.getElementById('total_cost').innerText="total room charges:"+calculateCost();

//Object Creation

var employee={
    name:"David",
    email:"david@yahoo.com",
    address:"Mdy"
}

console.log(employee.name +","+employee.email+","+employee.address);

//student (firstname,lastname,dob,address,phone)
var student={
    firstName:"David",
    lastName:"Bluoin",
    doyear:1980,
    address:"Singapore",
    phone:"+656999870",
    age:function(){
        return 2021-this.doyear;
    }
}
console.log(student.age());

//online_course object
// property: name,duration,fee,no_seats,booked;
// property:checkAvailibilty()
//display no of available seats
var online_course={
    name:"PM",
    duration:"1 month",
    fee:"100000",
    no_seats:40,
    booked:10,
    checkAvailability:function(){
        return this.no_seats-this.booked;
    }
}

console.log(online_course.checkAvailability());
//obj constructor
function Hotel(name,address){
    this.name=name;
    this.address=address;
}
//obj creation
var eskala=new Hotel("Eskala","Ngwe Saung");
var sedona=new Hotel("sedona","Ygn");

console.log(eskala.name);
eskala.email="admin@eskala.com";
eskala.pool=true;
eskala.check_room=function(){
    var total_room=45;
    var booking=19;
    return total_room-booking;
}
console.log(eskala.check_room());

//product obj using constructor
// name,type,qty,price
// object creation (pawsan,rice,200,52000)
//obj creation(ayarmin,rice,350,48000)
//obj creation(pawsan_new,rice,288,50000)
// each obj's totalcost using function

console.log(window.innerHeight);
console.log(window.screen.height);
console.log(window.innerWidth);
console.log(window.screen.width);

var name="khaing";
console.log(name.toUpperCase());
console.log(name.indexOf('a'));
console.log(name.length);

var year="1980";
console.log(parseInt(year)/5);
