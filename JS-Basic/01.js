function excursion(input){
let countPeople=Number(input[0]);
let countNight=Number(input[1]);
let countCards=Number(input[2]);
let countTicket=Number(input[3]);

let priceNight=countNight*20;
let priceCards=countCards*1.60;
let priceMuseum=countTicket*6;
let total=priceCards+priceMuseum+priceNight;
let sum=total*countPeople;
let sumEnd=sum+(sum*0.25);

console.log(sumEnd.toFixed(2));


}

excursion(["20","14","30","6"])
excursion(["131","9","33","46"])
