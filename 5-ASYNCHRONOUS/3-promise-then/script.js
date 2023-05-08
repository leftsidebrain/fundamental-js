const pelanggan1 = (myName) => {
  return new Promise((promise) => {
    setTimeout(() => {
      promise(console.log(`ini pelanggan satu ${myName}`));
    }, 1000);
  });
};

const pelanggan2 = () => {
  console.log("ini pelanggan dua");
};
const pelanggan3 = (umur) => {
  return new Promise((promise) => {
    setTimeout(() => {
      promise(console.log("ini pelanggan tiga " + umur));
    }, 3000);
  });
};
const pelanggan4 = () => {
  setTimeout(() => {
    console.log("ini pelanggan empat");
  }, 2000);
};

pelanggan1("ruddi").then(() => {
  pelanggan2();
  pelanggan3(40).then(() => {
    pelanggan4();
  });
});
