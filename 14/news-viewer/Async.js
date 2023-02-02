function increase(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error("50초과. 에러.");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}
async function runTask() {
  let res = await increase(0);
  console.log(res);

  res = await increase(res);
  console.log(res);

  res = await increase(res);
  console.log(res);

  res = await increase(res);
  console.log(res);

  res = await increase(res);
  console.log(res);

  res = await increase(res);
  console.log(res);
  //   try {
  //     let res = await increase(0);
  //     console.log(res);

  //     res = await increase(res);
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
}

runTask();
