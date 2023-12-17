function bestPlayer(input){
    index=0;
    let playerName='';
    let countGoal=0;
    
    let command=input[index];

    let totalMaxGoal=0;
    let bestPlayer='';
    while(command!=='END'){
        playerName=input[index];
        index++;
        countGoal=Number(input[index]);
        index++;

        if (countGoal>totalMaxGoal){
            totalMaxGoal=countGoal;
            bestPlayer=playerName;
        }
        command=input[index];

        if(totalMaxGoal>=10){
            break;
        }
    }
    console.log(`${bestPlayer} is the best player!`);
    if (totalMaxGoal>=3){
        console.log(`He has scored ${totalMaxGoal} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${totalMaxGoal} goals.`);
    }

}


bestPlayer(["Neymar","2","Ronaldo","1","Messi","3","END"])
