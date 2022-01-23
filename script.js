//alert("helloWorld");
let input = document.getElementById("input_text");
let add = document.getElementById("addToDo");
let list= document.getElementById("toDoList");

add.addEventListener('click', function(){
var paragraph = document.createElement("p");
paragraph.innerText = input.value;
list.appendChild(paragraph);
input.value = "";
paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration ="line-through";
})
paragraph.addEventListener('dblclick', function(){
    list.removeChild(paragraph);
})

//input.addEventListener("keyup", function(event){
//if(event.keycode===13){
  //  input.submit;
   // return false;
//}
//})
});