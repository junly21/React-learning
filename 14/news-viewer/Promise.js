function increase(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error('50을 초과했다.');
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

increase(0)
  .then((result) => {
    console.log(result);
    return increase(result);
  })
  .then((num) => {
    console.log(num);
    return increase(num);
  })
  .then((again) => {
    console.log(again);
    return increase(again);
  })
  .then((again2) => {
    console.log(again2);
    return increase(again2);
  })
  .then((again3) => {
    console.log(again3);
    return increase(again3);
  })
  .catch((e) => {
    console.log(e);
  });
