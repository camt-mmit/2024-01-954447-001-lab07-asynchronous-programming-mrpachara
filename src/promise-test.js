const source = new Promise((resolve) => {
  setTimeout(() => resolve('abcd'), 3_000);
});

const next = source.then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('xyz');
    }, 2_000);
  });
});

next.then((value) => console.log(value));

console.log('finish');
