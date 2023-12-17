function wildZoo(input=[]){

let animals={}
let areas={}

let commands={
    Add:(animal,food,area)=>{
        food=Number(food);
        if(!areas[area]){
            areas[area]=[];
        }
        if(!animals[animal]){
            areas[area].push(animal);
            animals[animal]=0;
        }
        animals[animal]+=food;
    },
    Feed:(animal,food)=>{
        food=Number(food);
        if(animals[animal]){
            animals[animal]-=food;
            if(animals[animal]<=0){
                
                for (const [animaal,area] of Object.entries(areas)) {
                    let index=area.indexOf(animal);
                    if(index>=0){
                        area.splice(index,1);
                    }
                    if(area.length==0){
                        delete areas[animaal];
                    }
                    
                }

                delete animals[animal];
                
                console.log(`${animal} was successfully fed`);
            }
        }
        

    }
}

while(input[0]!=='EndDay'){
let [command,data]=input.shift().split(': ');
let [animal,food,area]=data.split('-');
commands[command](animal,food,area);
}

console.log('Animals:');
for (const [animal,food] of Object.entries(animals)) {
    console.log(` ${animal} -> ${food}g`);    
}
console.log('Areas with hungry animals:');

for (const [area, animals] of Object.entries(areas)) {
    console.log(` ${area}: ${animals.length}`);
}

}

wildZoo(["Add: Jamie-600-WaterfallArea",

"Add: Maya-6570-WaterfallArea",

"Add: Adam-4500-ByTheCreek",

"Add: Bobbie-6570-WaterfallArea",

"Feed: Jamie-2000",

"Feed: Adam-2000",

"Feed: Adam-2500",

"EndDay"])