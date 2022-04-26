import "./index.css";

let root = document.getElementById("root");

let h1 = document.createElement("h1");

h1.innerHTML="Notes App";
h1.setAttribute("id","title")



document.getElementById("myForm").addEventListener("submit",addItem)
let output = document.getElementById("output")
let arr = [];
function addItem(event){
   event.preventDefault();
   let name = document.getElementById("name").value;
  let todoObj = {
      totoname:name,
  }
  arr.push(todoObj);
  console.log(arr)

  localStorage.setItem("todoList",  JSON.stringify(arr))
  let h2 = document.createElement("h2")
  arr.map(function(ele){
  
      h2.innerText=ele.totoname

  })
output.append(h2)
}

root.append(h1,input)