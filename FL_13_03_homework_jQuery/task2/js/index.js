const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
const $remove = $(".item-remove");
const $complete = $(".item-text");

let toDoList = [
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
    if (place) {
      this.eq(place).text(result);
    } else {
      this.text(result);
    }
    return this;
  };
})(jQuery);

function updateLocalStorage() {
  let stringifyToDoList = JSON.stringify(toDoList);
  localStorage.setItem(`toDoList`, stringifyToDoList);
}

if (localStorage.getItem(`toDoList`) === null) {
  updateLocalStorage();
} else {
  let getToDoListString = localStorage.getItem(`toDoList`);
  toDoList = JSON.parse(getToDoListString);
}

function renderTodoList() {
  $list.empty();

  for (let i = 0; i < toDoList.length; i++) {
    let newItem = $(`<li class="item" id="${toDoList[i].id}"></li>`);

    let itemTextStyle;
    if (toDoList[i].done === false) {
      itemTextStyle = "item-text";
    } else {
      itemTextStyle = "item-text done";
    }

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

renderTodoList();

function renderToDOListAmount() {
  let inProgress = 0;
  let done = 0;
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].done === true) {
      done++;
    } else {
      inProgress++;
    };
  };

  let total = toDoList.length;

  $(".amount p span").addResultAmount(done, 0);
  $(".amount p span").addResultAmount(inProgress, 1);
  $(".amount b span").addResultAmount(total);
}

$add.on("click", function (event) {
  let inputValue = $input.val();

  toDoList.push({
    id: Math.floor(Math.random() * 10000),
    text: inputValue,
    done: false,
  });

  updateLocalStorage();
  renderTodoList();

  event.preventDefault();
});

function removeFunc(event) {
  let idElement = parseInt(this.parentElement.id, 10);

  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].id === idElement) {
      toDoList.splice(i, 1);
    }
  }

  updateLocalStorage();
  renderTodoList();

  event.preventDefault();
};

function completeFunc(event) {
  let idElement = parseInt(this.parentElement.id, 10);

  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].id === idElement) {
      if (toDoList[i].done === false) {
        toDoList[i].done = true;
      } else {
        toDoList[i].done = false;
      }
    }
  }

  updateLocalStorage();
  renderTodoList();

  event.preventDefault();
};
