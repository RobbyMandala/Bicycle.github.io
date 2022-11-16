const CACHA_KEY = "history";

function checkForStorage() {
  return typeof Storage !== "undefined";
}

function putHistory(data) {
  if (checkForStorage()) {
    let historyData = null;
    if (localStorage.getItem(CACHA_KEY) === null) {
      historyData = [];
    } else {
      historyData = JSON.parse(localStorage.getItem(CACHA_KEY));
    }

    historyData.unshift(data);

    if (historyData.length > 5) {
      historyData.pop();
    }

    localStorage.setItem(CACHA_KEY, JSON.stringify(historyData));
  }
}

function showHistory() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(CACHA_KEY)) || [];
  } else {
    return [];
  }
}

function renderHistory() {
  const historyData = showHistory();
  let historyList = document.querySelector("#historyList");
  historyList.innerHTML = "";

  for (let history of historyData) {
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + history.npm + "</td>";
    row.innerHTML += "<td>" + history.nama + "</td>";
    row.innerHTML += "<td>" + history.jurusan + "</td>";
    row.innerHTML += "<td>" + history.semester + "</td>";

    historyList.appendChild(row);
  }
}

renderHistory();
