const addButton = document.querySelector('.add-button');
const todoInput = document.querySelector('.input-todo');
const todoContainer = document.querySelector('.todos-container');
const todoDateInput = document.querySelector('.todo-date');


const todos = [{
  name:'Drink water',
  date: '2024-04-21'
  },
  {
    name:'Watch youtube',
    date: '2024-04-21'
  }];

  function renderTodos() {
    let todoHTML = '';
    todos.forEach((todo,i)=>{
      todoHTML += `
      <h3>${todo.name}</h3>
      <h4>${todo.date}</h4>
      <button onclick='
        todos.splice(${i},${1});
        renderTodos();
      '>DELETE</button>`;
    });
    todoContainer.innerHTML = todoHTML;
  }
  renderTodos();
  
  addButton.addEventListener('click',()=> {
    const name = todoInput.value;
    const date = todoDateInput.value;
    todos.push({name,date});
    renderTodos();
    todoInput.value = '';
    todoDateInput.value = '';
  });






