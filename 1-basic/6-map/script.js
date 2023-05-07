const dataMobil = [
  {
    id: "aa001",
    namaProduct: "avanza",
    brand: "toyota",
  },
  {
    id: "aa002",
    namaProduct: "Jazz",
    brand: "Honda",
  },
  {
    id: "aa003",
    namaProduct: "Terios",
    brand: "Daihatsu",
  },
];

let tableDataMobil = "";
dataMobil.map((item, index) => {
  tableDataMobil += `<tr>`;
  tableDataMobil += `<td>${index}</td>`;
  tableDataMobil += `<td>${item.id}</td>`;
  tableDataMobil += `<td>${item.brand}</td>`;
  tableDataMobil += `<td>${item.namaProduct}</td>`;
  tableDataMobil += `</tr>`;
});
document.getElementById("dataMobil").innerHTML = tableDataMobil;
