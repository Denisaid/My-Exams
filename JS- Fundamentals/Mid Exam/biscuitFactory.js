function biscuitFactory(arr) {
  let productForDay = Number(arr[0]);
  let otherFabric = Number(arr[2]);
  let totalProduct = 0;
  let countWorker = Number(arr[1]);
  let productThird = Math.floor(productForDay * countWorker * 0.75);

  for (let index = 1; index < 31; index++) {
    if (index % 3 == 0) {
      totalProduct += productThird;
    } else {
      totalProduct += productForDay * countWorker;
    }
  }

  console.log(`You have produced ${totalProduct} biscuits for the past month.`);

  if (totalProduct > otherFabric) {
    let deferentProduct = ((totalProduct - otherFabric) / otherFabric) * 100;
    console.log(
      `You produce ${deferentProduct.toFixed(2)} percent more biscuits.`
    );
  } else if (totalProduct < otherFabric) {
    let deferentProduct = ((otherFabric - totalProduct) / otherFabric) * 100;
    console.log(
      `You produce ${deferentProduct.toFixed(2)} percent less biscuits.`
    );
  }
}

biscuitFactory(["65", "12", "26000"]);
