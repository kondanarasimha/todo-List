const addButton = document.querySelector('.add-button');
const todoInput = document.querySelector('.input-todo');
const todoContainer = document.querySelector('.todos-container');

const todos = ['Drink water','Watch youtube'];

  function renderTodos() {
    let todoHTML = '';
    todos.forEach((todo)=>{
      todoHTML += `<h3>${todo}</h3>`;
    });//itraction
    todoContainer.innerHTML = todoHTML;
  }
  

addButton.addEventListener('click',()=> {
    const todo = todoInput.value;
    todos.push(todo);
    console.log(todos);
    renderTodos();
  });




