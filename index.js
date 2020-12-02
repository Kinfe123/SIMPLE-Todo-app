//Js
let addTodoBtn = document.getElementById("addTodo")
let container = document.getElementById("container")
let inputField = document.getElementById("inputfield")
addTodoBtn.addEventListener("click" , ()=>{
    var paragraph = document.createElement("p")
    paragraph.classList.add("paragraph-styling")
    paragraph.innerText = inputField.value
    if(paragraph.innerText == ""){
        alert("You didnt enter anything!")
    }else {
        container.appendChild(paragraph)
        inputField.value = ""
    }
    
    paragraph.addEventListener("click" , ()=>{
        paragraph.style.textDecoration ="line-through"
    })
    paragraph.addEventListener("dblclick" , ()=>{
        container.removeChild(paragraph)
    })


    
})