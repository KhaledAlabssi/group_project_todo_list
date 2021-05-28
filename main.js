// alert("Hello")
const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('ul')


// creating array of object
let todos = [
    {'text': 'Walk the dog', 'complete': false},
]
// updateTodos()


if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify(todos))
} else {
    todos = JSON.parse(localStorage.getItem('todos'))
    console.log(todos)
}

// Update todos list
function updateTodos () {
    list.innerHTML = ''
    
    todos.forEach(i => {
        let item = document.createElement('li')
        
        i.complete ? item.classList.add('complete') : item.classList.add('item')
        
        item.innerText = i.text
        item.addEventListener('click', j => {
            
            // i.preventDefault()
            if (item.classList.contains('complete')) {
                i.complete = false
                updateTodos()

            } else {
                i.complete = true
            updateTodos()

            }
                      
        })
        item.addEventListener('click', j => {
            
            
            if (item.classList.contains('complete')) {
                i.complete = false
                localStorage.setItem('todos', JSON.stringify(todos))
                updateTodos()

            } else {
                i.complete = true
                localStorage.setItem('todos', JSON.stringify(todos))
            updateTodos()

            }
                      
        })

        item.addEventListener('contextmenu', k => {
            k.preventDefault()

            item.remove()
            todos.splice(i, 1)
            localStorage.setItem('todos', JSON.stringify(todos))
        })
 
        list.appendChild(item)
        
    })
}

// Create todo
form.addEventListener('submit', i => {
    i.preventDefault()

    todos.push({'text': input.value, 'complete': false})
    localStorage.setItem('todos', JSON.stringify(todos))
    input.value = ''
    updateTodos()

})

window.addEventListener('load', updateTodos())