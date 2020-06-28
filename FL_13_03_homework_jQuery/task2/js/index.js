const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
const $remove = $(".item-remove");
const $complete = $(".item-text");
const $searchInput = $("#search-input");
const $searchSubmit = $("#search-submit");
const $searchClear = $("#search-clear");

let toDoListStore = [
  {
    id: Math.floor(Math.random() * 10000),
    text: "Buy milk",
    done: false,
  },
  {
    id: Math.floor(Math.random() * 10000),
    text: "Play with dog",
    done: true,
  },
];

(function ($) {
  $.fn.addResultAmount = function (result, place) {
    place ? this.eq(place).text(result) : this.text(result);
    return this;
  };
})(jQuery);

function saveToLocalStorage() {
  let stringifyToDoList = JSON.stringify(toDoListStore);
  localStorage.setItem(`toDoListStore`, stringifyToDoList);
}

if (localStorage.getItem(`toDoListStore`) === null) {
  saveToLocalStorage();
} else {
  let toDoListString = localStorage.getItem(`toDoListStore`);
  toDoListStore = $.parseJSON(toDoListString);
}

$add.on("click", function (event) {
  let inputValue = $input.val();

  toDoListStore.push({
    id: Math.floor(Math.random() * 10000),
    text: inputValue,
    done: false,
  });

  saveToLocalStorage();
  renderTodoList(toDoListStore);

  event.preventDefault();
});

$searchSubmit.on("click", function (event) {
  let inputValue = $searchInput.val();
  let searchValue = toDoListStore.filter(item => item.text.includes(inputValue));

  renderTodoList(searchValue);

  event.preventDefault();
});

$searchClear.on("click", function (event) {
  renderTodoList(toDoListStore);

  event.preventDefault();
});

function removeFunc(event) {
  let idElement = parseInt(this.parentElement.id, 10);

  let itemIndex = toDoListStore.indexOf((item) => item.id === idElement);
  toDoListStore.splice(itemIndex, 1);

  saveToLocalStorage();
  renderTodoList(toDoListStore);

  event.preventDefault();
};

function completeFunc(event) {
  let idElement = parseInt(this.parentElement.id, 10);

  let item = toDoListStore.find((item) => item.id === idElement);
  item.done = !item.done;

  saveToLocalStorage();
  renderTodoList(toDoListStore);

  event.preventDefault();
};

function renderToDOListAmount() {
  let inProgress = 0;
  let done = 0;
  for (let i = 0; i < toDoListStore.length; i++) {
    if (toDoListStore[i].done) {
      done++;
    } else {
      inProgress++;
    };
  };

  let total = toDoListStore.length;

  $(".amount p span").addResultAmount(done, 0);
  $(".amount p span").addResultAmount(inProgress, 1);
  $(".amount b span").addResultAmount(total);
}

function renderTodoList(toDoList) {
  $list.empty();

  for (let i = 0; i < toDoList.length; i++) {
    let newItem = $(`<li class="item" id="${toDoList[i].id}"></li>`);

    let itemTextStyle = toDoList[i].done === false ? "item-text" :  "item-text done";

    let newItemText = $(`<span>${toDoList[i].text}</span>`)
      .addClass(itemTextStyle)
      .on("click", completeFunc);

    let newItemButton = $(`<button>Remove</button>`)
      .addClass("item-remove")
      .on("click", removeFunc);

    newItem.append(newItemText);
    newItem.append(newItemButton);
    $list.append(newItem);
  }

  renderToDOListAmount();
}

renderTodoList(toDoListStore);
