$(document).ready(function () {
  $("#peminjaman-2").on("click", function () {
    $("#container-data").show();
    $("div.content-page div.content div.container").hide();
  });
  $("#dashboard").on("click", function () {
    $("#container-data").hide();
    $("div.content-page div.content div.container").show();
  });
});

$(document).ready(function () {
  $("#datatable").DataTable();
  $("#datapeminjaman").DataTable();
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const btn = document.getElementById("button");
// const navbar = document.querySelector(".navbar");

btn.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    this.classList.add("not-active");
  } else {
    this.classList.add("active");
    this.classList.remove("not-active");
  }
  // hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  // navbar.classList.toggle("active");
});

// document.querySelectorAll(".nav-link").forEach((n) =>
//   n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//   })
// );

// setInterval(() => {
//   let date = new Date();
//   let clock = document.getElementById("clock");
//   clock.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// }, 1000);
