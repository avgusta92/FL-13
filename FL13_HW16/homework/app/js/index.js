const baseUrl = `http://localhost:3000`;
const appContainer = document.getElementById(`app-container`);

let inputName = document.getElementById(`input-name`);
let inputFullName = document.getElementById(`input-full-name`);
let buttonAddNewUser = document.getElementById(`button-add-new-user`);

let usersTable = document.getElementById(`users-table`);

const xhr = new XMLHttpRequest();
xhr.open(`GET`, `${baseUrl}/users`);

xhr.send();

let loading = document.createElement(`p`);
loading.className = `loading`;
loading.innerHTML = `Loading...`;
usersTable.appendChild(loading);

buttonAddNewUser.onclick = function (event) {
  event.stopPropagation();
  event.preventDefault();

  const xhr2 = new XMLHttpRequest();
  xhr2.open(`POST`, `${baseUrl}/users`);
  xhr2.setRequestHeader(`Content-Type`, `application/json`);

  let newUser = {
    name: inputName.value,
    username: inputFullName.value
  };

  xhr2.onload = function () {
    location.reload();
  };

  xhr2.send(JSON.stringify(newUser));
};

xhr.onload = function () {
  loading.remove();

  let users = JSON.parse(xhr.response);

  for (let i = 0; i < users.length; i++) {
    let tableRow = document.createElement(`tr`);
    usersTable.appendChild(tableRow);

    let userId = document.createElement(`td`);
    userId.className = `td-1`;
    userId.innerHTML = users[i].id;
    tableRow.appendChild(userId);

    let nameTable = document.createElement(`td`);
    nameTable.className = `td-2`;
    tableRow.appendChild(nameTable);

    let name = document.createElement(`input`);
    name.className = `input-table input-name`;
    name.type = `text`;
    name.value = users[i].name;
    nameTable.appendChild(name);

    let userNameTable = document.createElement(`td`);
    userNameTable.className = `td-3`;
    tableRow.appendChild(userNameTable);

    let userName = document.createElement(`input`);
    userName.className = `input-table input-userName`;
    userName.type = `text`;
    userName.value = users[i].username;
    userNameTable.appendChild(userName);

    let updateButtonTable = document.createElement(`td`);
    updateButtonTable.className = `td-4`;
    tableRow.appendChild(updateButtonTable);

    let updateButton = document.createElement(`button`);
    updateButton.className = `button-table`;
    updateButton.innerHTML = `Update`;
    updateButtonTable.appendChild(updateButton);

    updateButton.onclick = function (event) {
      event.stopPropagation();
      event.preventDefault();

      const xhr3 = new XMLHttpRequest();
      xhr3.open(`PUT`, `${baseUrl}/users/${users[i].id}`);
      xhr3.setRequestHeader(`Content-Type`, `application/json`);

      let newUser = {
        name: name.value,
        username: userName.value
      };

      xhr3.onload = function () {
        location.reload();
      };

      xhr3.send(JSON.stringify(newUser));
    };

    let deleteButtonTable = document.createElement(`td`);
    deleteButtonTable.className = `td-5`;
    tableRow.appendChild(deleteButtonTable);

    let deleteButton = document.createElement(`button`);
    deleteButton.id = `delete-button-${i}`;
    deleteButton.className = `button-table`;
    deleteButton.innerHTML = `Delete`;
    deleteButtonTable.appendChild(deleteButton);

    deleteButton.onclick = function (event) {
      event.stopPropagation();
      event.preventDefault();

      const xhr4 = new XMLHttpRequest();
      xhr4.open(`DELETE`, `${baseUrl}/users/${users[i].id}`);
      xhr4.setRequestHeader(`Authorization`, `admin`);

      xhr4.onload = function () {
        location.reload();
      };

      xhr4.send();
    };
  }
};
