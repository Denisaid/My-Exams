function chatLogger(arr = []) {
  let commands = arr.shift();
  let results = [];

  while (commands !== "end") {
    let token = commands.split(" ");
    let command = token.shift();
    let message1 = token.shift();
    
    let index = results.indexOf(message1);

    switch (command) {
      case "Chat":
        
        results.push(message1);
        break;
      case "Edit":
        let message2 = token.shift();
        if (results.includes(message1)) {
          results.splice(index, 1, message2);
        }
        break;
      case "Spam":
        results.push(message1, ...token);
        break;
      case "Delete":
        if (results.includes(message1)) {
          results.splice(index, 1);
        }
        break;
      case "Pin":
        if (results.includes(message1));
        let text = results.splice(index, 1).join('');
        results.push(text);
        break;
    }

    commands = arr.shift();
  }

  console.log(results.join("\n"));
}

chatLogger(["Chat John","Spam Let's go to the zoo","Edit zoo cinema","Chat tonight","Pin John","end"])

