(async () => {
  const result1 = await new Promise((resolve) => {
    setTimeout(() => resolve('abcd'), 3_000);
  });

  console.log(result1);

  const result2 = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('xyz');
    }, 2_000);
  });

  console.log(result2);
})();

console.log('finish');
