// alert("Hello")
const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('ul')


// creating array of object
let todos = [
    { 'text': 'Walk the dog', 'complete': false },
]
// updateTodos()


if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify(todos))
} else {
    todos = JSON.parse(localStorage.getItem('todos'))
    console.log(todos)
}

// Update todos list
function updateTodos() {

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
        item.addEventListener('click', l => {


            if (item.classList.contains('complete')) {
                l.complete = false
                localStorage.setItem('todos', JSON.stringify(todos))
                updateTodos()

            } else {
                l.complete = true
                localStorage.setItem('todos', JSON.stringify(todos))
                updateTodos()

            }

        })

        item.addEventListener('contextmenu', k => {
            k.preventDefault()
            if(todos.length < 2) {
                alert('You are deleting your last to-do\nDo not forget to add new to-do before you leave the page :)')
            }

            let index = todos.findIndex(p => p.text === k.target.innerText)
            console.log(k.target.innerText)


            todos.splice(index, 1)
            localStorage.setItem('todos', JSON.stringify(todos))
            updateTodos()

        })

        list.appendChild(item)

    })
}

// Create todo
form.addEventListener('submit', i => {
    i.preventDefault()
    if(todos.length > 5) {
        alert('You are using the free version of C & K to-dos\nPlease contact the contributors or delete some of the to-dos below\nin order to add new to-do item.')
    } else {
        todos.unshift({ 'text': input.value, 'complete': false })
    localStorage.setItem('todos', JSON.stringify(todos))
    input.value = ''
    updateTodos()

    }

    

})

window.addEventListener('load', updateTodos())