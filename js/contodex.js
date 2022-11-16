function waktu() {
  const tanggalTujuan = new Date("Oct 17, 2022 22:40:40").getTime();

  const hitungMundur = setInterval(function () {
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);

    const teks = document.getElementById("teks-01");
    teks.innerHTML =
      "Waktu anda tinggal : " +
      hari +
      " hari " +
      jam +
      " jam " +
      menit +
      " menit " +
      detik +
      " detik lagi";

    if (selisih < 0) {
      clearInterval(hitungMundur);
      teks.innerHTML = "Waktu Anda Habis";
    }
  }, 1000);
}

// const submit = document.getElementById("submit");
// submit.addEventListener("click", function () {
//   waktu();
// });

// const svg = document.querySelector("div.card-01 a");
// svg.addEventListener("click", function () {
//     const submit = document.getElementById("submit");
//     submit.addEventListener("click", function () {
//       waktu();
//     });
// });
