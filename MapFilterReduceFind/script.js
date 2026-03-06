let data=JSON.parse(localStorage.getItem("users")) || []
let id=data.length+1;

function addUser(){
    let user=document.getElementById("user").value;
    let age=document.getElementById("age").value;
    let salary=document.getElementById("salary").value;
    let status=document.getElementById("status").value;
    data.push({id:id,name:user,age:age,salary:salary,status:status})
    localStorage.setItem("users",JSON.stringify(data))
}

function searchById(){
    let searchid=document.getElementById("id").value;
    let value=data.find((item)=>item.id===parseInt(searchid))
    if(value){
        document.getElementById("message").innerHTML=`id: ${value.id} <br> Name: ${value.name} <br>Salary: ${value.salary} <br>Status: ${value.status}<br>`
    }
    else{
        document.getElementById("message").innerHTML="No User Found"
    }
}

function sumAll(){
    let sum=data.reduce((sum,value)=>{
        return sum=sum+(parseInt(value.salary) || 0)
    },0)
    document.getElementById("summessage").innerHTML=sum
}

function ActiveAll(){
    let Activemessage=document.getElementById("Activemessage")
    Activemessage.innerHTML=""
    let filtered=data.filter((item)=>item.status==="Active")
    filtered.map((item)=>{
        let p=document.createElement("p");
        p.innerHTML=`id: ${item.id} <br> Name: ${item.name} <br>Salary: ${item.salary} <br>Status: ${item.status}<br><hr>`
        Activemessage.appendChild(p)
    })
}

function deleteUsers(){
    localStorage.removeItem("users")
    data=[]
    let Activemessage=document.getElementById("Activemessage")
    document.getElementById("summessage").innerHTML=""
    Activemessage.innerHTML=""
}