const nama = "khairudin";
const tempat = "bengkok";

function cobaParamater(n, t) {
  console.log(`nama saya adalah ` + n + ` dan saya tinggal di ` + t);
}

cobaParamater(nama, tempat);

const fungctionKedua = new Function(console.log("ini adalah function kedua"));

const fucntionKetiga = (nama, tempat) => {
  console.log("ini adalah function ketiga " + nama + " " + tempat);
};

fungctionKedua();
fucntionKetiga(nama, tempat);
