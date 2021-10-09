
var div1=document.getElementById("div1");

var div2=document.getElementById("div2");
for(var count=1;count<6;count++){
    //create element heading
    var heading=document.createElement("h"+count);
    heading.innerHTML="Heading "+count;
    console.log(heading);
    //check 
    if(count%2==0)
    {
      heading.style.color="#999";
      heading.style.backgroundColor="red";
        
    }
    else{
        heading.style.backgroundColor="blue";
        heading.style.color="white";
    }
    //add element to the parent container
    div1.appendChild(heading);
}

var image=document.createElement("img");
    image.src="img/logo.png";
    div2.appendChild(image);

var university={
    name:"Kentuky University",
    email:"admin@ku.com",
    phone:"+0014589997",
    address:"US"
    
}
//card creation
var card=document.createElement("div");
card.classList.add("card");
//image creation
var image=document.createElement("img");
image.src="img/image1.jpg";
image.classList.add("card-top-img");

card.appendChild(image);

//create card body
// University Name heading
// Information in the list

var universities=document.getElementById("universities");
universities.appendChild(card);

//initialization
var loop=1;

while(loop<5)
{
    console.log("Round: "+loop);
    loop++;
}

//create 4 columns using while loop
loop=1;
var rounds=document.querySelector('#rounds');
do
{
    var column=document.createElement("div");
    column.classList.add("col");
    column.style.height="200px";
    column.style.backgroundColor="gray";
    column.innerHTML="Lorem....";
   // rounds.appendChild(column);
    loop++;
}while(loop<5);