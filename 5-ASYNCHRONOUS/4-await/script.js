const pelanggan1 = () => {
  return new Promise((promise) => {
    setTimeout(() => {
      promise(console.log(`ini pelanggan satu`));
    }, 1000);
  });
};

const pelanggan2 = () => {
  console.log("ini pelanggan dua");
};
const pelanggan3 = () => {
  return new Promise((promise) => {
    setTimeout(() => {
      promise(console.log("ini pelanggan tiga "));
    }, 3000);
  });
};
const pelanggan4 = () => {
  setTimeout(() => {
    console.log("ini pelanggan empat");
  }, 2000);
};

const sycnAwait = async () => {
  await pelanggan1();
  pelanggan2();
  await pelanggan3();
  pelanggan4();
};

sycnAwait();
