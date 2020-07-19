const itemsWrap = document.getElementById("items-wrap");
const allEmployeesTab = document.getElementById("allEmployeesTab");
const allUnitsTab = document.getElementById("allUnitsTab");
const warningEmployeesTab = document.getElementById("warningEmployeesTab");
let rootEmployee;

class Employees {
  constructor(options) {
    this.id = options.id;
    this.rm_id = options.rm_id;
    this.name = options.name;
    this.performance = options.performance;
    this.salary = options.salary;

    this.last_vacation_date = options.last_vacation_date;

    this.isRM = options.isRM;
    this.pool_name = options.pool_name;
    this.children = options.children;
  }
}

fetch("https://roman4ak.github.io/fe-oop-lab/mocks/epms.json")
  .then((response) => response.json())
  .then((data) => {
    rootEmployee = getRoot(data);
    onTabClick();
  });

function getRoot(data) {
  const newRootEmployee = new Employees({
    ...data[0],
    isRM: true,
    children: [],
    marginValue: 0,
  });

  function searchTree(element, matchingId) {
    if (element.id == matchingId) {
      return element;
    } else if (element.pool_name) {
      let result = null;
      for (let i = 0; result == null && i < element.children.length; i++) {
        result = searchTree(element.children[i], matchingId);
      }
      return result;
    }
    return null;
  }

  for (let i = 1; i < data.length; i++) {
    let Employee = new Employees({
      ...data[i],
    });

    Employee.last_vacation_date = data[i].last_vacation_date
      ? data[i].last_vacation_date
      : `Unknown`;

    if (data[i].pool_name) {
      Employee.isRM = true;
      Employee.pool_name = data[i].pool_name;
      Employee.children = [];
    }

    let rmId = data[i].rm_id;
    let hisRM = searchTree(newRootEmployee, rmId);

    hisRM.children.push(Employee);
  }

  return newRootEmployee;
}

class AllEmployeesRender {
  render() {
    this.renderAll(rootEmployee);
  }

  renderItem(item, deepLevel) {
    let itemWrap = document.createElement("div");
    itemWrap.id = `item-wrap ${item.id}`;
    itemWrap.className = "item-wrap";
    itemsWrap.appendChild(itemWrap);

    let itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemWrap.appendChild(itemDiv);

    let itemText = document.createElement("p");

    itemText.className = item.isRM
      ? "item-text pm-item-text"
      : "item-text";
    itemText.style.marginLeft = `${30 * deepLevel}px`;
    itemText.innerHTML = item.isRM
      ? `${item.name}`
      : `– ${item.name}`;
      itemDiv.appendChild(itemText);

    let itemButton = document.createElement("button");
    itemButton.className = "button-more";
    itemButton.onclick = () => {
      itemMore.style.display === "none"
        ? (itemMore.style.display = "flex")
        : (itemMore.style.display = "none");
    };
    itemButton.innerHTML = `More info`;
    itemDiv.appendChild(itemButton);

    let itemMore = document.createElement("div");
    itemMore.style.display = "none";
    itemMore.className = "item-more";
    itemWrap.appendChild(itemMore);

    let itemMoreText = document.createElement("p");
    let mainInnerHTML = `Performance: ${item.performance}
        <br>Last vacation date: ${item.last_vacation_date}
        <br>Salary: ${item.salary}`;

    itemMoreText.innerHTML = !item.isRM
      ? mainInnerHTML
      : mainInnerHTML +
        `<br>Pool: ${item.children.length} employees <br>Pool Name: ${item.pool_name}`;

    itemMore.appendChild(itemMoreText);
  }

  renderAll(value, deepLevel = 0) {
    this.renderItem(value, deepLevel);

    if (value.children) {
      for (let i = 0; i < value.children.length; i++) {
        this.renderAll(value.children[i], deepLevel + 1);
      }
    }
  }
}

class AllUnitsRender {
  render() {
    this.renderAll(rootEmployee);
  }

  renderPool(pool, deepLevel) {
    let itemWrap = document.createElement("div");
    itemWrap.className = "item-wrap";
    itemsWrap.appendChild(itemWrap);

    let item = document.createElement("div");
    item.className = "item";
    itemWrap.appendChild(item);

    let itemTextWrap = document.createElement("div");
    itemTextWrap.className = "item-content-wrap";
    item.appendChild(itemTextWrap);

    let itemText = document.createElement("p");
    itemText.className = "item-text";
    itemText.innerHTML = `${pool.pool_name}`;
    itemText.style.marginLeft = `${10 * deepLevel}px`;
    itemTextWrap.appendChild(itemText);

    let sumSalary = 0;
    let textMore = `Pool RM: ${pool.name}, <br> Employees:`;
    let num = 1;

    for (let i = 0; i < pool.children.length; i++) {
      sumSalary += pool.children[i].salary;
      textMore += `<br> ${num}. ${pool.children[i].name}`;
      num++;
    }

    let averageValueWrap = document.createElement("div");
    averageValueWrap.className = "item-content-wrap";
    item.appendChild(averageValueWrap);

    let averageValue = document.createElement("p");
    averageValue.className = "item-text";
    averageValue.innerHTML = `Average salary: ${Math.floor(
      sumSalary / pool.children.length
    )}`;
    averageValueWrap.appendChild(averageValue);

    let howManyWrap = document.createElement("div");
    howManyWrap.className = "item-content-wrap";
    item.appendChild(howManyWrap);

    let howMany = document.createElement("p");
    howMany.className = "item-text";
    howMany.innerHTML = `${pool.children.length} employees in pool`;
    howManyWrap.appendChild(howMany);

    let itemMoreButtonWrap = document.createElement("div");
    itemMoreButtonWrap.className = "item-more-button-wrap";
    item.appendChild(itemMoreButtonWrap);

    let itemButton = document.createElement("button");
    itemButton.className = "button-more";
    itemButton.onclick = () => {
      itemMore.style.display === "none"
        ? (itemMore.style.display = "flex")
        : (itemMore.style.display = "none");
    };
    itemButton.innerHTML = `More info`;
    itemMoreButtonWrap.appendChild(itemButton);

    let itemMore = document.createElement("div");
    itemMore.style.display = "none";
    itemMore.className = "item-more";
    itemWrap.appendChild(itemMore);

    let itemMoreText = document.createElement("p");
    itemMoreText.innerHTML = textMore;
    itemMore.appendChild(itemMoreText);
  }

  renderAll(value, deepLevel = 0) {
    this.renderPool(value, deepLevel);

    for (let i = 0; i < value.children.length; i++) {
      if (value.children[i].children) {
        this.renderAll(value.children[i], deepLevel + 1);
      }
    }
  }
}

class WarningEmployeesRender {
  render() {
    this.renderWarningEmployees(rootEmployee);
  }

  renderItem(item) {
    let itemWrap = document.createElement("div");
    itemWrap.id = `item-wrap ${item.id}`;
    itemWrap.className = "item-wrap";
    itemsWrap.appendChild(itemWrap);

    let itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemWrap.appendChild(itemDiv);

    let itemText = document.createElement("p");

    itemText.className = "item-text";
    itemText.innerHTML = `${item.name}`;
    itemDiv.appendChild(itemText);

    let itemButton = document.createElement("button");
    itemButton.className = "button-more";
    itemButton.onclick = () => {
      itemMore.style.display === "none"
        ? (itemMore.style.display = "flex")
        : (itemMore.style.display = "none");
    };
    itemButton.innerHTML = `More info`;
    itemDiv.appendChild(itemButton);

    let itemMore = document.createElement("div");
    itemMore.style.display = "none";
    itemMore.className = "item-more";
    itemWrap.appendChild(itemMore);

    let itemMoreText = document.createElement("p");
    itemMoreText.innerHTML = `Performance: ${item.performance}
        <br>Last vacation date: ${item.last_vacation_date}
        <br>Salary: ${item.salary}`;

    itemMore.appendChild(itemMoreText);
  }

  renderWarningEmployees(value) {
    if (value.performance === `low`) {
      this.renderItem(value);
    }

    if (value.children) {
      for (let i = 0; i < value.children.length; i++) {
        this.renderWarningEmployees(value.children[i]);
      }
    }
  }
}

function onTabClick(tabName = "allEmployees") {
  itemsWrap.innerHTML = "";

  let renderStrategy = {};

  if (tabName === "allEmployees") {
    allUnitsTab.className = "tab-button";
    warningEmployeesTab.className = "tab-button";
    allEmployeesTab.className = "tab-button tab-button-active";

    renderStrategy = new AllEmployeesRender();
  } else if (tabName === "allUnits") {
    allUnitsTab.className = "tab-button tab-button-active";
    allEmployeesTab.className = "tab-button";
    warningEmployeesTab.className = "tab-button";

    renderStrategy = new AllUnitsRender();
  } else if (tabName === "warningEmployees") {
    warningEmployeesTab.className = "tab-button tab-button-active";
    allEmployeesTab.className = "tab-button";
    allUnitsTab.className = "tab-button";

    renderStrategy = new WarningEmployeesRender();
  }

  renderStrategy.render();
}
