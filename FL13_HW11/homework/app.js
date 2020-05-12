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

rootNode.className = 'main-wrap';

let contextMenu = document.createElement('div');
contextMenu.className = `context-menu`;
rootNode.appendChild(contextMenu);

let contextMenuRenameItem = document.createElement('label');
contextMenuRenameItem.className = `context-menu-item`;
contextMenuRenameItem.innerHTML = `Rename`;
contextMenu.appendChild(contextMenuRenameItem);

let contextMenuDeleteItem = document.createElement('label');
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
    let emptyFolder = document.createElement('label');
    emptyFolder.className = `label empty-label`;
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
  setInput.onchange = setNewName;
  curentActiveFolder.appendChild(setInput);
  setInput.focus();
  contextMenyHide()
  event.stopPropagation();
  return false;
}

function setNewName(event) {
  curentActiveFolder.lastChild.remove();
  curentActiveFolder.querySelector('label').innerHTML = event.target.value;
  let label = document.createElement('label');
  label.className = `label`;
  label.innerHTML = event.target.value;
  curentActiveFolder.appendChild(label);
}

document.addEventListener('click', function (event) {
  contextMenu.style.display = 'none';
  event.stopPropagation();
  return false;
});

function newItem(value, place) {
  let wrap = document.createElement('div');
  wrap.className = `wrap`;
  place.appendChild(wrap);

  let folder = document.createElement('div');
  folder.className = `folder`;
  wrap.appendChild(folder);

  let icon = document.createElement('i');
  icon.innerHTML = 'folder';
  folder.appendChild(icon);

  let label = document.createElement('label');
  label.className = `label`;
  label.innerHTML = value.title;
  folder.appendChild(label);

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

    let emptyFolder = document.createElement('label');
    emptyFolder.className = `label empty-label`;
    emptyFolder.innerHTML = `Folder is empty`;
    newWrap.appendChild(emptyFolder);
  }

  function openFolder() {
    let childrenArray = this.children;

    contextMenu.style.display = 'none';

    for (let i = 0; i < childrenArray.length; i++) {
      let children = childrenArray[i];

      if (children.className === 'wrap') {
        icon.innerHTML = 'folder_open';
        children.style.display = 'block';
      }
    }
  }

  function closeFolder() {
    let childrenArray = this.children;

    contextMenu.style.display = 'none';

    for (let i = 0; i < childrenArray.length; i++) {
      let children = childrenArray[i];

      if (children.className === 'wrap') {
        icon.innerHTML = 'folder';
        children.style.display = 'none';
      }
    }
  }

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