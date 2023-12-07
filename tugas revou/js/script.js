// document.getElementById("segitigaForm").addEventListener("submit", function(event){
//     event.preventDefault();
//     let sisi1 = parseFloat(document.getElementById("sisi1").value);
//     let sisi2 = parseFloat(document.getElementById("sisi2").value);
//     let sisi3 = parseFloat(document.getElementById("sisi3").value);

//     // Mengkonversi nilai keliling ke format angka dengan dua digit di belakang koma
//     let keliling = parseFloat(document.getElementById("segitigaForm").value);
//     keliling = Number(keliling.toFixed(2));

//     // Menampilkan rumus keliling segitiga
//     let rumus = `K = ${sisi1} + ${sisi2} + ${sisi3}`;

//     // Mengubah isi elemen HTML dengan hasil perhitungan keliling dan rumusnya
//     document.getElementById("result").innerHTML = `
//         Keliling segitiga adalah : <b>${keliling}</b>
//         <br />
//         Rumus : <b>${rumus}</b>
//     `;
// });

// function hitungLuas() {
//     const alas = parseFloat(document.getElementById("alas").value);
//     const tinggi = parseFloat(document.getElementById("tinggi").value);
  
//     if (isNaN(alas) || alas < 0) {
//       document.getElementById("alas").setCustomValidity("Alas harus berupa angka positif.");
//     } else {
//       document.getElementById("alas").setCustomValidity("");
//     }
  
//     if (isNaN(tinggi) || tinggi < 0) {
//       document.getElementById("tinggi").setCustomValidity("Tinggi harus berupa angka positif.");
//     } else {
//       document.getElementById("tinggi").setCustomValidity("");
//     }
  
//     const luas = (alas * tinggi) / 2;
  
//     document.getElementById("result-luas").innerHTML = `
//       <h2>Luas Segitiga</h2>
//       <p>Luas segitiga adalah : <b>${luas.toFixed(2)}</b></p>
//       <p><b>Keterangan:</b></p>
//       <ul>
//         <li>Luas segitiga adalah 1/2 x alas x tinggi</li>
//         <li>Alas dan tinggi harus berupa angka positif</li>
//       </ul>
//     `;
//   }

document.addEventListener('DOMContentLoaded', function () {
    // Function to calculate the perimeter (keliling) of a triangle
    function hitungKeliling() {
      var sisi1 = parseFloat(document.getElementById('kelilingSisi1').value);
      var sisi2 = parseFloat(document.getElementById('kelilingSisi2').value);
      var sisi3 = parseFloat(document.getElementById('kelilingSisi3').value);

      var keliling = sisi1 + sisi2 + sisi3;
      document.getElementById('kelilingResult').innerHTML = 'Keliling: ' + keliling;
    }

    // Function to calculate the area (luas) of a triangle
    function hitungLuas() {
      var alas = parseFloat(document.getElementById('luasAlas').value);
      var tinggi = parseFloat(document.getElementById('luasTinggi').value);

      var luas = 0.5 * alas * tinggi;
      document.getElementById('luasResult').innerHTML = 'Luas: ' + luas;
    }

    // Form submit event for keliling calculation
    document.getElementById('kelilingForm').addEventListener('submit', function (event) {
      event.preventDefault();
      hitungKeliling();
    });

    // Form submit event for luas calculation
    document.getElementById('luasForm').addEventListener('submit', function (event) {
      event.preventDefault();
      hitungLuas();
    });
});

