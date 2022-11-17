const btnReturn = document.querySelector(".btn-return");
btnReturn.addEventListener("click", () => {
  document.location.href = "../index.html";
});

// const btnKirim = document.querySelector(".btn-kirim");
// btnKirim.addEventListener("click", () => {
//   document.location.href = "../index.html";
//   waktu();
// });

function whatsapp() {
  var name = document.getElementById("name").value;
  var npm = document.getElementById("npm").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var pesan = document.getElementById("pesan").value;

  var url =
    "https://wa.me/+6289519510955?text=" +
    "Name: " +
    name +
    "%0a" +
    "Npm: " +
    npm +
    "%0a" +
    "Email: " +
    email +
    "%0a" +
    "Number: " +
    number +
    "%0a" +
    "Pesan: " +
    pesan;

  window.open(url, "_blank").focus();
}
