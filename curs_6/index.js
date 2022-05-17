function doRequest(success, error, finall) {
  return new Promise((resolve, reject) => resolve("xyz"))
    .then((value) => {
      success();
      return value + " hahahaha";
    })
    .then((value) => {
      console.log(value);
      return value;
    })
    .catch((value) => {
      error();
      console.log(value);
      return error;
    })
    .finally((value) => {
      finall();
      console.log(3);
      return value;
    });
}

async function treatRequest() {
  const resp = await doRequest(
    () => {
      console.log("success");
    },
    () => {
      console.log("error");
    },
    () => {
      console.log("finally");
    }
  );

  console.log(resp);
}
