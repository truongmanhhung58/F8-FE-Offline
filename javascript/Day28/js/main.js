const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const incompleteTodoEl = $('.incomplete-todo')
const completedTodoEl = $('.completed-todo')
const loading = $('.loading')

const app = {
    
    todos: [],
    getTodos () {
        fetch("https://7wxkfg-8080.csb.app/todo")
            .then(response => response.json())
            .then(todos => {
                this.todos = todos
                this.render()
            })
    },
    async postTodo(data) {
        return await fetch("https://7wxkfg-8080.csb.app/todo", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            this.todos.push(data)
            this.render()
        })
        .catch(error => console.error(error))
    },
    async deleteTodo(id) {
        return await fetch("https://7wxkfg-8080.csb.app/todo/" + id, {
            method: "DELETE"
        })
        .then(response => response.ok && this.getTodos())
    },
    async editTodo(id, data) {
        return await fetch("https://7wxkfg-8080.csb.app/todo/" + id, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            response.ok && this.getTodos()
        })
        .catch(error => console.error(error))
    },
    render() {
        let countCompletedTodo = 0
        let completedTodosHtml = ''
        let incompleteTodosHtml = ''
        this.todos.forEach(todo => {
            const todoTemplate = `
                <li class="todo-item" data-id="${todo.id}">
                    <span>${todo.title}</span>
                    <div class="actions">
                        <div class="delete-todo">
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                        <label class="edit-todo" for="edit-form-toggle">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </label>
                        <label class="complete-toggle">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 576 512">
                                    <path class="fill-white"
                                        d="M96 80c0-26.5 21.5-48 48-48H432c26.5 0 48 21.5 48 48V384H96V80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48H64V416H512V288h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336z">
                                    </path>
                                </svg>
                            </i>
                        </label>
                    </div>
                </li>
            `
            if(todo.is_completed) {
                countCompletedTodo++
                completedTodosHtml += todoTemplate
            }else {
                incompleteTodosHtml += todoTemplate
            }
        })

        incompleteTodoEl.innerHTML = incompleteTodosHtml
        completedTodoEl.innerHTML = completedTodosHtml
        $('.completed-quantity').innerText = countCompletedTodo

        this.handleEvents()
    },
    handleEvents() {
        
        // On search Input
        const searchInput = $('.search-input')
        const handleHighlightText = function() {
            const inputValue = searchInput.value.trim()
            const todos = $$('.incomplete-todo .todo-item')
            todos.forEach(todo => {
                const todoTitle = todo.querySelector('span')
                if(todoTitle.innerText.toLowerCase().includes(inputValue.toLowerCase())) {
                    if(inputValue != '') {
                        const replaceIndex = todoTitle.innerText.toLowerCase().match(inputValue.toLowerCase()).index
                        const replaceText = todoTitle.innerText.slice(replaceIndex, replaceIndex + inputValue.length)
                        todoTitle.innerHTML = todoTitle.innerText.replace(replaceText, `<span class="highlight">${replaceText}</span>`)
                    }else {
                        todoTitle.innerHTML = todoTitle.innerText.replaceAll('<span class="highlight">', '').replaceAll('</span>', '')
                    }
                    todo.style.display = ''
                }else {
                    todo.style.display = 'none'
                }
            })
        }
        handleHighlightText()
        searchInput.oninput = handleHighlightText


        // Submit add form
        const addForm = $('.add-form')
        addForm.onsubmit = (e) => {
            e.preventDefault()
            const titleInput = addForm.querySelector('.todo-title')
            const title = titleInput.value.trim('')
            const is_completed = false
            if(title) {
                loading.style.display = 'flex'
                $('#add-form-toggle').checked = false
                this.postTodo({ title, is_completed }).then(() => {
                    titleInput.value = ''
                    loading.style.display = 'none'
                    titleInput.classList.remove('error')
                })
            }else {
                titleInput.classList.add('error')
                titleInput.value = ''
            }
            addForm.querySelector('.cancel').onclick = () => titleInput.classList.remove('error')
        }

        // Delete todo
        const deleteBtns = $$('.delete-todo')
        deleteBtns.forEach(btn => {
            btn.onclick = () => {
                const todoId = btn.closest('[data-id]').dataset.id
                loading.style.display = 'flex'
                this.deleteTodo(todoId).then(() => 
                    loading.style.display = 'none'
                )
            }
        })

        // Edit todo
        const editBtns = $$('.edit-todo')
        editBtns.forEach(btn => {
            btn.onclick = () => {
                const todoTitle = btn.closest('[data-id]').querySelector('span').innerText
                const editForm = $('.edit-form')
                const titleInput = editForm.querySelector('.todo-title')
                titleInput.value = todoTitle // dat ten bien chan qua

                editForm.onsubmit = (e) => {
                    e.preventDefault()
                    if(titleInput.value) {
                        const newTitle = titleInput.value
                        const todoId = btn.closest('[data-id]').dataset.id
                        loading.style.display = 'flex'
                        titleInput.value = ''
                        $('#edit-form-toggle').checked = false
                        this.editTodo(todoId, {title: newTitle}).then(() => {
                            loading.style.display = 'none'
                            titleInput.classList.remove('error')
                        })
                    }else {
                        titleInput.classList.add('error')
                        titleInput.value = ''
                    }
                    editForm.querySelector('.cancel').onclick = () => titleInput.classList.remove('error')
                }
            }
        })

        // Handle Complete Todo
        const completeBtns = $$('.complete-toggle')
        completeBtns.forEach(btn => {
            btn.onclick = () => {
                const todoId = btn.closest('[data-id]').dataset.id
                console.log(todoId)
                const isCompleted = this.todos.find(todo => todo.id == todoId).is_completed
                loading.style.display = 'flex'
                this.editTodo(todoId, {is_completed: !isCompleted}).then(() => {
                    loading.style.display = 'none'
                })
            }
        })

    },
    start() {
        this.getTodos()
    }
}

app.start()
