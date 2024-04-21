const addButton = document.querySelector('.add-button');
const todoInput = document.querySelector('.input-todo');
const todoContainer = document.querySelector('.todos-container');

const todos = ['Drink water','Watch youtube'];

  function renderTodos() {
    let todoHTML = '';
    todos.forEach((todo,i)=>{
      todoHTML += `
      <p>${todo}</p>
      <button onclick='
        todos.splice(${i},${1});
        renderTodos();
      '>DELETE</button>`;
    });//itraction
    todoContainer.innerHTML = todoHTML;
  }
  


  addButton.addEventListener('click',()=> {
    const todo = todoInput.value;
    todos.push(todo);
    console.log(todos);
    renderTodos();
    todoInput.value = '';
  });




