// get to grab data
function getData(){
    axios.get("https://api.vschool.io/davidwangen/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

const toDoList = document.getElementById('todo-list')

// list the to do items
function listData(data){
    clearList()
    for(let i = 0; i < data.length; i++){
        const title = document.createElement('h1')
        const description = document.createElement('h3')
        const price = document.createElement('h3')
        const imgUrl =document.createElement('img')
        const completed = document.createElement('input')
        const deleteBtn = document.createElement('button')
        const completedQuestion = document.createElement('h4')
        const deleteQuestion = document.createElement('h4')
        const id= data[i]._id       
        title.textContent = data[i].title
        description.textContent = data[i].description
        price.textContent = `$${data[i].price}`
        imgUrl.src= data[i].imgUrl
        imgUrl.style = "width:200px;height:200px"
        deleteBtn.textContent = "Delete"
        completedQuestion.textContent = "Check box if complete. "
        deleteQuestion.textContent = `Click "Delete" button to delete item.`
        completed.type = 'checkbox'
        completed.value = data[i].completed
        completed.checked = data[i].completed
        if(completed.checked===true){
            title.style.textDecoration="line-through"
            description.style.textDecoration="line-through"
            price.style.textDecoration="line-through"
        }
        // delete button
        deleteBtn.addEventListener("click",(e)=>{   
            axios.delete(`https://api.vschool.io/davidwangen/todo/${id}`)
                .then(res=> res.data)
                .catch(err=> console.log(err))
                getData()
        })
        // event to cross off items
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

    toDoList.appendChild(title)
        toDoList.appendChild(description)
        toDoList.appendChild(price)
        toDoList.appendChild(imgUrl)
        toDoList.appendChild(completedQuestion)
        toDoList.appendChild(completed)
        toDoList.appendChild(deleteQuestion)
        toDoList.appendChild(deleteBtn)
    }
}
// clear list
function clearList(){
    while(toDoList.firstChild){
        toDoList.removeChild(toDoList.firstChild)
    }
}

getData()


// form to post 
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price:todoForm.price.value,
        imgUrl:todoForm.img.value
    }
    
    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""
    todoForm.img.value = ""
    
    axios.post("https://api.vschool.io/davidwangen/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})


