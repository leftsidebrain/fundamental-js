const pelanggan1 = (cb, myName) => {
  setTimeout(() => {
    cb(console.log("ini pelanggan satu " + myName));
  }, 1000);
};
const pelanggan2 = () => {
  console.log("ini pelanggan dua");
};
const pelanggan3 = (cb, age) => {
  setTimeout(() => {
    cb(console.log("ini pelanggan tiga " + age));
  }, 3000);
};
const pelanggan4 = () => {
  setTimeout(() => {
    console.log("ini pelanggan empat");
  }, 2000);
};

const myName = "ruddi";
const age = 40;

pelanggan1(() => {
  pelanggan2();
  pelanggan3(() => {
    pelanggan4();
  }, age);
}, myName);
