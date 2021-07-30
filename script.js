let column = document.querySelector(".column-name-container");
let row = document.querySelector(".row-name-container");
let cellContainer = document.querySelector(".input-cell-container");
load();
function load() {
  for (let i = 1; i <= 100; i++) {
    let str = "";
    let n = i;

    while (n > 0) {
      let rem = n % 26;
      if (rem == 0) {
        str = "Z" + str;
        n = Math.floor(n / 26) - 1;
      } else {
        str = String.fromCharCode(rem - 1 + 65) + str;
        n = Math.floor(n / 26);
      }
    }

    let columnName = document.createElement("div");
    columnName.innerHTML = `<div class="column-name colId-${i}" id="colCod-${str}">${str}</div>`;
    column.append(columnName);

    let rowName = document.createElement("div");
    rowName.innerHTML = `<div class="row-name" id="rowId-${i}">${i}</div>`;
    row.append(rowName);
  }
  for (let i = 1; i <= 100; i++) {
    let row = document.createElement("div");
    row.classList.add("cell-row");
    for (let j = 1; j <= 100; j++) {
      let colCode = document.querySelector(`.colId-${j}`);
      let colId = colCode.getAttribute("id").split("-")[1];
      let column = document.createElement("div");
      column.innerHTML = `<div class="input-cell" spellcheck="false"  id="row-${i}-col-${colId}" ></div>`;
      row.appendChild(column);
    }
    cellContainer.append(row);
  }
}

let alignicon = document.querySelectorAll(".align-icon");
for (let i = 0; i < alignicon.length; i++) {
  alignicon[i].addEventListener("click", function (e) {
    for (let j = 0; j < alignicon.length; j++) {
      if (alignicon[j].classList.contains("selected")) {
        alignicon[j].classList.remove("selected");
      }
    }

    e.currentTarget.classList.add("selected");
  });
}

let inputCellSel = document.querySelectorAll(".input-cell");
for (let i = 0; i < inputCellSel.length; i++) {
  inputCellSel[i].addEventListener("click", function (e) {
    for (let j = 0; j < inputCellSel.length; j++) {
      if (inputCellSel[j].classList.contains("input-cell-selected")) {
        inputCellSel[j].classList.remove("input-cell-selected");
      }
    }
    e.currentTarget.classList.add("input-cell-selected");
  });
}

for(let i = 0; i < inputCellSel.length; i++){
  inputCellSel[i].addEventListener("dblclick", function(e){
    for (let j = 0; j < inputCellSel.length; j++) {
      if (inputCellSel[j].classList.contains("input-cell-selected")) {
        inputCellSel[j].classList.remove("input-cell-selected");
      }
    }
    e.currentTarget.classList.add("input-cell-selected");
    e.currentTarget.setAttribute("contenteditable", "true");
    e.currentTarget.focus();
  })

}



let styelFormat = document.querySelectorAll(".style-format");
for (let i = 0; i < styelFormat.length; i++) {
  styelFormat[i].addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("style-icon");
  });
}

//scroll left and top
let columnNameCont = document.querySelector(".column-name-container");
let rowNameCont = document.querySelector(".row-name-container");
cellContainer.addEventListener("scroll", function () {
  columnNameCont.scrollLeft = this.scrollLeft;
  rowNameCont.scrollTop = this.scrollTop;
});
