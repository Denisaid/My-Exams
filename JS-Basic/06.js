function pinCodes(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let n3 = Number(input[2]);
  let buff = "";
  for (i = 1; i <= n1; i++) {
    for (j = 1; j <= n2; j++) {
      for (k = 1; k <= n3; k++) {
        if (
          i % 2 == 0 &&
          k % 2 == 0 &&
          (j / 2 == 1 || j / 3 == 1 || j / 5 == 1 || j / 7 == 1)) {
          buff +=`${i} ${j} ${k}\n`
        }
      }
    }
  }
  console.log(buff);
}

pinCodes(["3", "5", "5"]);
