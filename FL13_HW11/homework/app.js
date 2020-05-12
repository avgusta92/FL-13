const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

// TODO: your code goes here

rootNode.className = 'main-wrap';

let contextMenu = document.createElement('div');
contextMenu.className = `context-menu`;
rootNode.appendChild(contextMenu);

let contextMenuRenameItem = document.createElement('lable');
contextMenuRenameItem.className = `context-menu-item`;
contextMenuRenameItem.innerHTML = `Rename`;
contextMenu.appendChild(contextMenuRenameItem);

let contextMenuDeleteItem = document.createElement('lable');
contextMenuDeleteItem.className = `context-menu-item`;
contextMenuDeleteItem.innerHTML = `Delete item`;
contextMenu.appendChild(contextMenuDeleteItem);

let curentActiveFolder;

function contextMenyHide() {
  contextMenu.style.display = 'none';
}

function folderShow() {
  contextMenu.style.display = 'flex';
}

function onContextMenu(event) {
  event.currentTarget.className = `folder `;

  curentActiveFolder = event.currentTarget;

  contextMenu.style.top = event.clientY + 'px';
  contextMenu.style.left = event.clientX + 'px';

  folderShow()

  event.stopPropagation();
  return false;
}

function deleteItem(event) {
  let parentFolder = curentActiveFolder.parentElement;

  parentFolder.remove()


  if (parentFolder.querySelector('folder') === null) {
    let emptyFolder = document.createElement('lable');
    emptyFolder.className = `lable empty-lable`;
    emptyFolder.innerHTML = `Folder is empty`;
    parentFolder.appendChild(emptyFolder);

  }

  contextMenyHide()

  event.stopPropagation();
  return false;
}

function renameItem(event) {
  curentActiveFolder.lastChild.style.display = 'none';

  let setInput = document.createElement('input');
  setInput.setAttribute('type', 'text');
  setInput.className = `folder`;
  curentActiveFolder.appendChild(setInput);
  setInput.focus();

  contextMenyHide()

  event.stopPropagation();
  return false;
}

function setNewName(event) {
  curentActiveFolder.lastChild.remove();
  curentActiveFolder.querySelector('lable').innerHTML = event.target.value;

  let lable = document.createElement('lable');
  lable.className = `lable`;
  lable.innerHTML = event.target.value;
  curentActiveFolder.appendChild(lable);
}

let getInput = document.querySelector('body');

getInput.onchange = setNewName;

//  ПОДПИСЫВАЕТСЯ И ВЫЗЫВАЕТ ФУНКЦИЮ НА ВСЕ ИВЕНТЫ СО ЗНАЧЕНИЕМ CLICK
document.addEventListener('click', function (event) {
  contextMenu.style.display = 'none';
  event.stopPropagation();
  return false;
});


function newItem(value, place) {

  // ООБЕРКА ДЛЯ НЕСКОЛЬКИХ ПАПОК-ОБЕРТОК
  let wrap = document.createElement('div');
  wrap.className = `wrap`;
  place.appendChild(wrap);

  // ПАПКА-ОБЕРКА (ВНУТРИ ИКОНКА + НАЗВАНИЕ)
  let folder = document.createElement('div');
  folder.className = `folder`;
  wrap.appendChild(folder);

  // ИКОНКА 
  let icon = document.createElement('i');
  icon.innerHTML = 'folder';
  folder.appendChild(icon);

  // НАЗВАНИЕ
  let lable = document.createElement('lable');
  lable.className = `lable`;
  lable.innerHTML = value.title;
  folder.appendChild(lable);

  // ЕСЛИ ЭТО ПАПКА ТО СЕТАЕМ ИКОНКУ ПАПКИ ЕСЛИ ЭТО ФАЙЛ СЕТАЕМ ИКОНКУ ФАЙЛА
  if (value.folder === true) {
    icon.className = `icon icon-folder material-icons`;
    icon.innerHTML = 'folder';

  } else if (value.folder !== true) {
    icon.className = `icon icon-file material-icons`;
    icon.innerHTML = 'insert_drive_file';
  }

  if (value.children === false || value.children === null) {

    let newWrap = document.createElement('div');
    newWrap.className = `wrap`;
    wrap.appendChild(newWrap);

    let emptyFolder = document.createElement('lable');
    emptyFolder.className = `lable empty-lable`;
    emptyFolder.innerHTML = `Folder is empty`;
    newWrap.appendChild(emptyFolder);
  }

  // ОТКРЫТИЕ ПАПКИ
  function openFolder() {
    let childrenArray = this.children;

    contextMenu.style.display = 'none'; //  ПРЯЧЕТСЯ КОНТЕКСТНОЕ МЕНЮ (НУЖНО ПЕРЕДЕЛАТЬ)

    for (let i = 0; i < childrenArray.length; i++) {
      let children = childrenArray[i];

      if (children.className === 'wrap') {
        icon.innerHTML = 'folder_open';
        children.style.display = 'block';
      }
    }
  }

  // ЗАКРЫТИЕ ПАПКИ
  function closeFolder() {
    let childrenArray = this.children;

    contextMenu.style.display = 'none'; //  ПРЯЧЕТСЯ КОНТЕКСТНОЕ МЕНЮ (НУЖНО ПЕРЕДЕЛАТЬ)

    for (let i = 0; i < childrenArray.length; i++) {
      let children = childrenArray[i];

      if (children.className === 'wrap') {
        icon.innerHTML = 'folder';
        children.style.display = 'none';
      }
    }
  }

  // ФУНКЦИЯ ПРИ КЛИКЕ - КАК ОТОБРАЖАТЬ ПАПКУ (ОТКРЫТОЙ ИЛИ ЗАКРЫТОЙ)
  function displayFolderFunc(event) {
    let iconFolder = wrap.children[0].children[0];
    if (iconFolder.innerHTML === 'folder') {
      openFolder.apply(wrap);
    } else if (iconFolder.innerHTML === 'folder_open') {
      closeFolder.apply(wrap);
    }
    event.stopPropagation();
  }

  folder.onclick = displayFolderFunc;

  folder.oncontextmenu = onContextMenu;

  contextMenuDeleteItem.onclick = deleteItem;
  contextMenuRenameItem.onclick = renameItem;

  return wrap;
}

function fileTree(array, place) {

  for (let i = 0; i < array.length; i++) {
    let object = array[i];
    let newPlace = newItem(object, place);

    if (object.children) {
      let newArray = object.children;
      fileTree(newArray, newPlace);
    }
  }

}

fileTree(data, rootNode);