function getData(){
    axios.get("https://api.vschool.io/davidwangen/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}
// call the getData function
getData()
// function to clear the list or existing dada
function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}
// eventListner for post request
const todoForm = document["todo-form"]
todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value,
        description:todoForm.description.value,
        price:todoForm.price.value
    }
    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value=""
    todoForm.imgUrl.value=""
    clearList();   //clear the list entry after click
    // returns todo items after clearing
    axios.post("https://api.vschool.io/davidwangen/todo", newTodo)
        .then(res=> getData())
        .catch(err=> console.log(err))
})
// creates todo on the DOM
 function listData(data){
      const todoList=document.getElementById("todo-list")
      clearList();
    for(let i = 0; i < data.length; i++){
        const div= document.createElement("div")
        const title = document.createElement('h2')
        const description = document.createElement('h2')
        const price=document.createElement('h2')
        const image=document.createElement('img')
        const deleteBtn= document.createElement("button")
        const completed= document.createElement("input")
        const id= data[i]._id
        title.textContent = data[i].title
        description.textContent = data[i].description
        price.textContent = `$${data[i].price}`
        image.src=data[i].imgUrl
        deleteBtn.textContent="delete"
        completed.type= "checkbox"
        completed.value=data[i].completed //mandatory for checkboxes and radio buttons
        completed.label="completed"// put the text in the box?
        completed.checked=data[i].completed
        
    deleteBtn.addEventListener("click",(e)=>{   
axios.delete(`https://api.vschool.io/davidwangen/todo/${id}`)
            .then(res=> res.data)
                .catch(err=> console.log(err))
                getData()
        })
        
        completed.addEventListener("click", (e)=>{
            const check= e.target.checked
                axios.put(`https://api.vschool.io/davidwangen/todo/${id}`, { completed: check })
                    .then((res) => {
                    if(res.data.completed===true){
                        title.style.textDecoration="line-through"
                        description.style.textDecoration="line-through"
                        price.style.textDecoration="line-through"
                    }
                    else {
                        title.style.textDecoration="none"
                        description.style.textDecoration="none"
                        price.style.textDecoration="none"
                    }
                })
                .catch(err=> console.log(err))        
    })
       div.appendChild(title)
       div.appendChild(description)
       div.appendChild(price)
       div.appendChild(image)
       div.appendChild(deleteBtn)
       div.appendChild(completed)
       todoList.appendChild(div)
                
    }
    // evenListner for completing the checkboxes
    // PUT click boxes
/*completed.addEventListener("click", (e)=>{
        const check= e.target.checked
    axios
    .put(`https://api.vschool.io/davidwangen/todo/${id}`, check)
    .then((res) => {
        if(res.data.completed===true){
            title.style.textDecoration="line-through"
            description.style.textDecoration="line-through"
            price.style.textDecoration="line-through"
        }
        else {
            title.style.textDecoration="none"
            description.style.textDecoration="none"
            price.style.textDecoration="none"
        }
        })
    .catch(err=> console.log(err))
})
// create an eventListner for delete
deleteBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    axios.delete(`https://api.vschool.io/davidwangen/todo/${id}`)
    .then(res=> res.data)
        .catch(err=> console.log(err))
        getData()
})
}
*/}