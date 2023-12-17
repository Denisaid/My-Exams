function bossRush(input=[]){

let pattern=/\|(?<name>[A-Z]{4,})\|\:#(?<title>[A-Za-z]+\s{1}[A-Za-z]+)#/;

let count=Number(input.shift());

for(i=0;i<count;i++){
    let valid=pattern.exec(input[i]);

    if(valid){
        console.log(`${valid.groups.name}, The ${valid.groups.title}`);
        console.log(`>> Strength: ${valid.groups.name.length}`);
        console.log(`>> Armor: ${valid.groups.title.length}`);
    } else {
        console.log('Access denied!');
    }


}


}

bossRush(['3', '|PETER|:#Lead architect#', '|GEORGE|:#High Overseer#', '|ALEX|:#Assistant Game Developer#'])