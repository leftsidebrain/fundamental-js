let dataArray1 = [
  {
    id: 001,
    nama: "mobil",
    stok: 2,
  },
  {
    id: 002,
    nama: "motor",
    stok: 3,
  },
];

let dataArray2 = [
  {
    id: 004,
    nama: "ayam",
    stok: 2,
  },
  {
    id: 196,
    nama: "sapi",
    stok: 3,
  },
];

// menggabungkan aray
// 1. concat

const gabunganArray = dataArray1.concat(dataArray2);
console.log(`ini array gabungan `, gabunganArray);

// 2. push

dataArray1.push(dataArray2);
console.log(dataArray1);

// maping

insertInto = "";
gabunganArray.map((item, index) => {
  insertInto += `<tr>`;
  insertInto += `<td>${(index += 1)}</td>`;
  insertInto += `<td>${item.id}</td>`;
  insertInto += `<td>${item.nama}</td>`;
  insertInto += `<td>${item.stok}</td>`;

  insertInto += `<tr/>`;
});

document.getElementById("table").innerHTML = insertInto;
