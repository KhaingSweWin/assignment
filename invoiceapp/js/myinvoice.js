document.addEventListener("DOMContentLoaded",function(){
 var addrow=document.querySelector("#addrow");
 var rowcount=0;
 addrow.addEventListener('click',addRows);
  
 function addRows(){
    var rowcontainer=document.querySelector(".rowcontainer");

    var tr=document.createElement("tr");
    for(let element=0;element<5;element++){
        var item=document.createElement("td");   
    if(element==0)
    {        
        var select=createSelect();
        item.appendChild(select)
        tr.appendChild(item);
        
    }
    else if(element==4){
        var input=createInput(element);      
        input.value=0;        
        item.appendChild(input);
        tr.appendChild(item)
        input.disabled=true;
    }
    else{
        var input=createInput(element);      
        input.value=0;        
        item.appendChild(input);
        tr.appendChild(item)
        input.setAttribute('keyup','calculateSubTotal(this)')
    }
    }       
    tr.classList.add("rows")
    rowcontainer.appendChild(tr);   
    rowcount++;
}

function createSelect(){
    var select=document.createElement("select");
    var items=['item1','item2','item3'];
    for(let count=0;count<items.length;count++)
    {
        var option=document.createElement("option");
        option.text=items[count];
        option.value=items[count];
        select.appendChild(option);
    }
   // console.log(select)
    return select;
}

function createInput(element)
{
    var input=document.createElement("input")
    input.setAttribute("type","text");
    input.setAttribute("name",`input${element}`)
    input.setAttribute("id",`input${rowcount}${element}`);
    console.log(input)
    return input;
}

function calculateSubTotal(e){
    console.log(e.value);
}
});

