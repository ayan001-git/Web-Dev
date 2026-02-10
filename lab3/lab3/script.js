'use strict';

const form = document.querySelector('#todo-form');
const taskInput = document.querySelector('#task-input');
const todoList = document.querySelector('#todo-list');

function normalizeText(value) {
  return value.trim().replace(/\s+/g, ' ');
}

function createTodoItem(text) {
  const li = document.createElement('li');
  li.className = 'item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'item__checkbox';
  checkbox.setAttribute('aria-label', 'Mark as done');

  const span = document.createElement('span');
  span.className = 'item__text';
  span.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'item__delete';
  deleteButton.setAttribute('aria-label', 'Delete item');
  deleteButton.textContent = '🗑';

  // Mark done (change event)
  checkbox.addEventListener('change', () => {
    li.classList.toggle('item--done', checkbox.checked);
  });

  // Delete item (click event)
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  return li;
}

function addTask(rawText) {
  const text = normalizeText(rawText);

  if (!text) return;

  const item = createTodoItem(text);
  todoList.appendChild(item);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(taskInput.value);
  taskInput.value = '';
  taskInput.focus();
});

/* Optional: demo items like in the sample screenshot */
addTask('First item');
addTask('Second item');
addTask('Third item');
