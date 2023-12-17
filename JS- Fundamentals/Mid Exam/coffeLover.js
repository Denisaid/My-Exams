function coffeLover(arr = []) {
  let typeCoffe = arr.shift().slice().split(" ");
  let counter = Number(arr.shift());

  for (let index = 0; index < counter; index++) {
    let commands=arr.shift();
    let [command, params1, params2]=commands.split(' ').filter(x=>x!=='');
    params2=Number(params2);
    
    switch (command) {
      case "Include":
        typeCoffe.push(params1);
        break;
      case "Remove":
        if (typeCoffe.length > params2) {
          if (params1 == "first") {
            for (let i = 0; i < params2; i++) {
              typeCoffe.shift();
            }
            } else if (params1 == "last") {
            for (let i = 0; i < params2; i++) {
              typeCoffe.pop();
            }
            }
        }
        break;
      case "Prefer":
        params1 = Number(params1);
        params2=Number(params2); 
        if (params1<typeCoffe.length&&params2<typeCoffe.length) {
          
          let temp = typeCoffe[params1];
          typeCoffe[params1] = typeCoffe[params2];
          typeCoffe[params2] = temp;
          break;
        }
      case "Reverse":
        typeCoffe.reverse();
        break;
    }
  }

  console.log(`Coffees:`);
  console.log(`${typeCoffe.join(' ')}`);
}

coffeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee","5",
"Include OrdinaryCoffee","Remove first 1","Prefer 0 1","Prefer 3 1","Reverse"])
coffeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee","5",
"Include TurkishCoffee","Remove first 2","Remove last 1","Prefer 3 1",
"Reverse"])
coffeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica","3",
"Include OrdinaryCoffee","Remove first 1","Prefer 4 1"])



