const pelanggan1 = () => {
  setTimeout(() => {
    console.log("ini pelanggan satu");
  }, 1000);
};
const pelanggan2 = () => {
  console.log("ini pelanggan dua");
};
const pelanggan3 = () => {
  setTimeout(() => {
    console.log("ini pelanggan tiga");
  }, 3000);
};

pelanggan1();
pelanggan2();
pelanggan3();
