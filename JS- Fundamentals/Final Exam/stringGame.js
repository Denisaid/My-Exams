function stringGame(input=[]){

    let text=input.shift();

    let obj={
        Change:(param1,param2)=>{
            text=text.split(param1).join(param2);
            console.log(text);
        },
        Includes:(param1)=>{
            if(text.includes(param1)){
                console.log('True');
            } else {
                console.log('False');
            }
        },
        End:(param1)=>{
            if(text.endsWith(param1)){
                console.log('True');
            } else {
                console.log('False');
            }
        },
        Uppercase:()=>{
            text=text.toUpperCase();
            console.log(text);
        },
        FindIndex:(param1)=>{
            let index=text.indexOf(param1);
            console.log(index);
        },
        Cut:(param1,param2)=>{
            param1=Number(param1);
            param2=Number(param2);
            text=text.substring(param1,param1+param2);
            console.log(text);
        }
    };

    while(input[0]!=='Done'){
        let [command,param1,param2]=input.shift().split(' ');
        obj[command](param1,param2)
    }


}

stringGame(["//Th1s 1s my str1ng!//", "Change 1 i", "Includes string", "End my", "Uppercase", "FindIndex I", "Cut 5 5", "Done"]) 

