// const history = document.querySelector(".history");

// const textNpm = document.createTextNode(npm);

function clearForm() {
  const inputs = document.querySelectorAll(".livelong-satu input");
  inputs.forEach((input) => (input.value = ""));
}

function pcalcu() {
  renderHistory();
  clearForm();
}

const form = document.querySelector(".login");
const buttons = form.querySelector(".button");

buttons.addEventListener("click", function () {
  // inputDigit(target.innerText);

  const npm = document.getElementById("npm").value;
  const nama = document.getElementById("nama").value;
  const jurusan = document.getElementById("jurusan").value;
  const semester = document.getElementById("semester").value;

  const historys = {
    no: "1",
    npm: npm,
    nama: nama,
    jurusan: jurusan,
    semester: semester,
  };

  const history = {
    npm: historys.npm,
    nama: historys.nama,
    jurusan: historys.jurusan,
    semester: historys.semester,
  };

  putHistory(history);

  pcalcu();
});
