function computerFirm(input){
let countComputer=Number(input[0]);
let num=0;
let rating=0;
let sals=0;
let total=0;
let totalRating=0;

for (i=1; i<=countComputer;i++){
    num=Number(input[i]);
    rating=num%10;
    sals=Math.floor(num/10);
    if (rating==2){
        sals*=0;
    } else if(rating==3){
        sals*=0.50;
    } else if(rating==4){
        sals*=0.70
    } else if(rating==5){
        sals*=0.85;
    } else if(rating==6){
        sals*=1;
    }
     total+=sals;
    totalRating+=rating;
}
console.log(total.toFixed(2));
console.log((totalRating/countComputer).toFixed(2));


}


computerFirm(["3","103","103","103"])
