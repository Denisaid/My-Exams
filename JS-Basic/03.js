function santasHoliday(input) {
  let countDay = Number(input[0]);
  let typeRoom = input[1];
  let grades = input[2];

  let countNight = countDay - 1;

  priceNight = 0;

  switch (typeRoom) {
    case "room for one person":
      priceNight = countNight * 18.0;
      break;
    case "apartment":
      if (countDay < 10) {
        priceNight = countNight * 25;
        priceNight *= 0.7;
      } else if (countDay < 15) {
        priceNight = countNight * 25;
        priceNight *= 0.65;
      } else {
        priceNight = countNight * 25;
        priceNight *= 0.5;
      }
      break;
      case "president apartment":
      if (countDay < 10) {
        priceNight = countNight * 35;
        priceNight *= 0.9;
      } else if (countDay < 15) {
        priceNight = countNight * 35;
        priceNight *= 0.85;
      } else {
        priceNight = countNight * 35;
        priceNight *= 0.8;
      }
      break;
  }
  if (grades=='positive'){
    let total=priceNight+(priceNight*0.25);
    console.log(total.toFixed(2));
  } else {
    let total=priceNight-(priceNight*0.10);
    console.log(total.toFixed(2));
  }

}

santasHoliday(["30",
"president apartment",
"negative"])

