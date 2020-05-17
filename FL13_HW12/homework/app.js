const NUMBER2 = 2;
const NUMBER3 = 3;
const NUMBER4 = 4;
const NUMBER300 = 300;

const mainPlace = document.getElementById(`root`);

let getBooksString = localStorage.getItem(`books`);
let booksInArray = JSON.parse(getBooksString);

let mainTag = document.createElement(`main`);
mainPlace.appendChild(mainTag);

let leftSection = document.createElement(`aside`);
leftSection.className = `left-section`;
mainTag.appendChild(leftSection);

let leftSectionTop = document.createElement(`div`);
leftSectionTop.className = `left-section-top`;
leftSection.appendChild(leftSectionTop);

let leftSectionTitle = document.createElement(`div`);
leftSectionTitle.className = `left-section-title`;
leftSectionTop.appendChild(leftSectionTitle);

let leftSectionTitleP = document.createElement(`p`);
leftSectionTitleP.innerHTML = `My books`;
leftSectionTitle.appendChild(leftSectionTitleP);

let listOfBooks = document.createElement(`div`);
listOfBooks.className = `list-of-books`;
leftSectionTop.appendChild(listOfBooks);

let addBookButton = document.createElement(`button`);
addBookButton.className = `add-book-button`;
addBookButton.innerHTML = `Add book`;
addBookButton.id = `add`;
leftSection.appendChild(addBookButton);

addBookButton.onclick = addBookButtonFunc;

let rightSection = document.createElement(`section`);
rightSection.className = `right-section`;
mainTag.appendChild(rightSection);

function setItems(book, place) {
  let bookNode = document.createElement(`div`);
  bookNode.className = `book`;
  bookNode.id = book.id;
  place.appendChild(bookNode);

  bookNode.onclick = previewBookButtonFunc;

  let bookImage = document.createElement(`img`);
  bookImage.className = `list-book-image`;
  bookImage.src = book.imageUrl;
  bookNode.appendChild(bookImage);

  let listTextWrap = document.createElement(`div`);
  listTextWrap.className = `list-text-wrap`;
  bookNode.appendChild(listTextWrap);

  let bookNameNode = document.createElement(`label`);
  bookNameNode.className = `book-name`;
  bookNameNode.innerHTML = book.bookName;
  listTextWrap.appendChild(bookNameNode);

  let editBookButton = document.createElement(`button`);
  editBookButton.className = `edit-book-button`;
  editBookButton.innerHTML = `Edit book`;
  editBookButton.id = book.id;
  listTextWrap.appendChild(editBookButton);

  editBookButton.onclick = editBookButtonFunc;
}

function fileTree(booksInArray, place) {
  for (let i = 0; i < booksInArray.length; i++) {
    setItems(booksInArray[i], place);
  }
}

fileTree(booksInArray, listOfBooks);

if (location.search.includes(`id`)) {
  let book = getSelectedBook(location.search[NUMBER4], booksInArray);

  if (location.hash === `#preview`) {
    bookPreview(book, rightSection);
  } else if (location.hash === `#edit`) {
    bookEdit(book, rightSection);
  }
}

if (location.hash.includes(`add`)) {
  bookAdd(rightSection);
}

window.addEventListener(`hashchange`, function () {
  let book = getSelectedBook(location.search[NUMBER4], booksInArray);

  if (location.hash === `#preview`) {
    bookPreview(book, rightSection);
  } else if (location.hash === `#edit`) {
    bookEdit(book, rightSection);
  } else if (location.hash === `#add`) {
    bookAdd(rightSection);
  }
});

function getSelectedBook(bookId, booksInArray) {
  for (let i = 0; i < booksInArray.length; i++) {
    if (booksInArray[i].id === bookId) {
      return booksInArray[i];
    }
  }
}

function editBookButtonFunc(event) {
  setNewHash(event, `edit`);
  event.stopPropagation();
}

function addBookButtonFunc(event) {
  location.href = location.origin + location.pathname + `#add`;
  event.stopPropagation();
}

function previewBookButtonFunc(event) {
  setNewHash(event, `preview`);
  event.stopPropagation();
}

function setNewHash(event, result) {
  let hashValue = `#${result}`;
  let searchValue = `?id=${event.currentTarget.id}`;
  // setNewSearch(event);

  location.href = location.origin + location.pathname + searchValue + hashValue;
}

function bookPreview(book, place) {
  if (place.childNodes.length !== 0) {
    place.removeChild(place.childNodes[0]);
  }

  let bookPreview = document.createElement(`div`);
  bookPreview.className = `book-preview`;
  place.appendChild(bookPreview);

  let imgWrap = document.createElement(`div`);
  imgWrap.className = `img-wrap`;
  bookPreview.appendChild(imgWrap);

  let bookImage = document.createElement(`img`);
  bookImage.className = `book-image`;
  bookImage.src = book.imageUrl;
  imgWrap.appendChild(bookImage);

  let textWrap = document.createElement(`div`);
  textWrap.className = `preview-text-wrap`;
  bookPreview.appendChild(textWrap);

  let bookAuthor = document.createElement(`h4`);
  bookAuthor.className = `preview-book-author`;
  bookAuthor.innerHTML = book.author;
  textWrap.appendChild(bookAuthor);

  let bookName = document.createElement(`h1`);
  bookName.className = `preview-book-name`;
  bookName.innerHTML = book.bookName;
  textWrap.appendChild(bookName);

  let bookPlot = document.createElement(`p`);
  bookPlot.className = `preview-book-plot`;
  bookPlot.innerHTML = book.plot;
  textWrap.appendChild(bookPlot);
}

function setItemsFunc(book, place) {
  if (place.childNodes.length !== 0) {
    place.removeChild(place.childNodes[0]);
  }

  let bookEdit = document.createElement(`div`);
  bookEdit.className = `book-edit`;
  place.appendChild(bookEdit);

  let bookEditName = document.createElement(`div`);
  bookEditName.className = `book-edit-name`;
  bookEdit.appendChild(bookEditName);

  let bookEditNameText = document.createElement(`p`);
  bookEditNameText.innerHTML = `Edit book`;
  bookEditName.appendChild(bookEditNameText);

  let bookEditForm = document.createElement(`form`);
  bookEditForm.className = `book-edit-form`;
  bookEdit.appendChild(bookEditForm);

  let inputs = document.createElement(`div`);
  inputs.className = `inputs`;
  bookEditForm.appendChild(inputs);

  let inputsTop = document.createElement(`div`);
  inputsTop.className = `inputs-top`;
  inputs.appendChild(inputsTop);

  let inputWrapName = document.createElement(`div`);
  inputWrapName.className = `input-wrap input-wrap-top input-wrap-name`;
  inputsTop.appendChild(inputWrapName);

  let inputLabelName = document.createElement(`label`);
  inputLabelName.setAttribute(`for`, `input-book-name`);
  inputLabelName.innerHTML = `Book name`;
  inputWrapName.appendChild(inputLabelName);

  let inputName = document.createElement(`input`);
  inputName.setAttribute(`type`, `text`);
  inputName.setAttribute(`required`, null);
  inputName.className = `input-book-name`;
  inputWrapName.appendChild(inputName);

  let inputWrapAuthor = document.createElement(`div`);
  inputWrapAuthor.className = `input-wrap input-wrap-top input-wrap-name`;
  inputsTop.appendChild(inputWrapAuthor);

  let inputLabelAuthor = document.createElement(`label`);
  inputLabelAuthor.setAttribute(`for`, `input-book-author`);
  inputLabelAuthor.innerHTML = `Book author`;
  inputWrapAuthor.appendChild(inputLabelAuthor);

  let inputAuthor = document.createElement(`input`);
  inputAuthor.setAttribute(`type`, `text`);
  inputAuthor.setAttribute(`required`, null);
  inputAuthor.className = `input-book-author`;
  inputWrapAuthor.appendChild(inputAuthor);

  let inputWrapImageUrl = document.createElement(`div`);
  inputWrapImageUrl.className = `input-wrap input-wrap-image-url`;
  inputs.appendChild(inputWrapImageUrl);

  let inputLabelImageUrl = document.createElement(`label`);
  inputLabelImageUrl.setAttribute(`for`, `input-book-image-url`);
  inputLabelImageUrl.innerHTML = `Book image`;
  inputWrapImageUrl.appendChild(inputLabelImageUrl);

  let inputImageUrl = document.createElement(`input`);
  inputImageUrl.setAttribute(`type`, `text`);
  inputImageUrl.setAttribute(`required`, null);
  inputImageUrl.className = `input-book-image-url`;
  inputWrapImageUrl.appendChild(inputImageUrl);

  let inputWrapPlot = document.createElement(`div`);
  inputWrapPlot.className = `input-wrap input-wrap-plot`;
  inputs.appendChild(inputWrapPlot);

  let inputLabelPlot = document.createElement(`label`);
  inputLabelPlot.setAttribute(`for`, `input-book-plot`);
  inputLabelPlot.innerHTML = `Book plot`;
  inputWrapPlot.appendChild(inputLabelPlot);

  let inputPlot = document.createElement(`textarea`);
  inputPlot.className = `input-book-plot`;
  inputPlot.setAttribute(`required`, null);
  inputWrapPlot.appendChild(inputPlot);

  let buttons = document.createElement(`div`);
  buttons.className = `buttons`;
  bookEditForm.appendChild(buttons);

  let cancelButton = document.createElement(`button`);
  cancelButton.className = `button cancel-button`;
  cancelButton.innerHTML = `Cancel`;
  buttons.appendChild(cancelButton);

  cancelButton.onclick = function () {
    let modalWindow = confirm(`Discard changes?`);
    if (modalWindow) {
      location.href = location.origin + location.pathname;
    }
    return false;
  };

  let formArray = {
    inputName: inputName,
    inputAuthor: inputAuthor,
    inputImageUrl: inputImageUrl,
    inputPlot: inputPlot,
    bookEditForm: bookEditForm,
    buttons: buttons
  };

  return formArray;
}

function bookAdd(place) {
  let formArray = setItemsFunc(null, place);

  let addButton = document.createElement(`input`);
  addButton.setAttribute(`type`, `submit`);
  addButton.setAttribute(`value`, `Add`);
  addButton.className = `button add-button`;
  formArray.buttons.appendChild(addButton);

  formArray.bookEditForm.onsubmit = addBookValueFunc;
}

function bookEdit(book, place) {
  let formArray = setItemsFunc(book, place);

  formArray.inputName.setAttribute(`value`, book.bookName);
  formArray.inputAuthor.setAttribute(`value`, book.author);
  formArray.inputImageUrl.setAttribute(`value`, book.imageUrl);
  formArray.inputPlot.innerHTML = book.plot;

  let editButton = document.createElement(`input`);
  editButton.setAttribute(`type`, `submit`);
  editButton.setAttribute(`value`, `Save`);
  editButton.className = `button save-button`;
  formArray.buttons.appendChild(editButton);

  formArray.bookEditForm.onsubmit = function (submitEvent) {
    editBookValueFunc(submitEvent, book);
    return false;
  };
}

function editBookValueFunc(submitEvent, book) {
  let newbook;

  for (let i = 0; i < booksInArray.length; i++) {
    if (booksInArray[i].id === book.id) {
      newbook = i;
    }
  }

  booksInArray[newbook].bookName = submitEvent.target[0].value;
  booksInArray[newbook].author = submitEvent.target[1].value;
  booksInArray[newbook].imageUrl = submitEvent.target[NUMBER2].value;
  booksInArray[newbook].plot = submitEvent.target[NUMBER3].value;

  localStorage.setItem(`editSubmit`, `show`);

  location.hash = `#preview`;

  let stringifyBooks = JSON.stringify(booksInArray);
  localStorage.setItem(`books`, stringifyBooks);

  location.reload(true);
}

function addBookValueFunc(submitEvent) {
  booksInArray.push({
    id: String(booksInArray.length + 1),
    bookName: submitEvent.target[0].value,
    author: submitEvent.target[1].value,
    imageUrl: submitEvent.target[NUMBER2].value,
    plot: submitEvent.target[NUMBER3].value
  });

  let stringifyBooks = JSON.stringify(booksInArray);
  localStorage.setItem(`books`, stringifyBooks);

  location.href = location.origin + location.pathname;

  return false;
}

window.onload = function () {
  if (localStorage.editSubmit === `show`) {
    setTimeout(alert(`Book successfully updated`), NUMBER300);
    localStorage.setItem(`editSubmit`, `noShow`);
  }
};
