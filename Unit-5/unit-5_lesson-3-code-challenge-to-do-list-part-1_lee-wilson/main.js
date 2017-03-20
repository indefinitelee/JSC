function addItem() {
  var newItemText = document.getElementsByTagName('input')[0].value;
  document.getElementsByTagName('input')[0].calue='';
  var newItem = document.createElement('li');
  newItem.innerHTML='newItemText';
  document.getElementById('todoList').appendChild(newItem);
}

document.getElementsByTagName('button').addEventListener('click', addItem);