let elWrapper = document.querySelector(".wrapper")
let elForm = document.querySelector(".form")
let elInput = document.querySelector(".form-control")
let ulEl = document.createElement("ol")
let arr = []

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    let inputValue = elInput.value.trim();
    elInput.value = "";
    let  obj = {
        id: arr.length,
        name: inputValue
    }
    
    arr.push(obj.name);
    
    if(inputValue === ""){
        arr.pop(obj.name)
    }
    
    todo()
});

function todo(){
    ulEl.innerHTML = "";
    for(let i of arr){
        let todoItem = document.createElement("li")
        todoItem.setAttribute("class", "p-3 fs-4")
        todoItem.textContent = i;
        let btn = document.createElement("btn")
        btn.setAttribute("class", "btn btn-danger float-end")
        btn.textContent = "Delete"
        todoItem.appendChild(btn)
        ulEl.appendChild(todoItem);
        elWrapper.appendChild(ulEl)

        btn.addEventListener("click", function(){
            
        })
    }
   
}




