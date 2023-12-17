function footballKit(input){
let priceShirt=Number(input[0]);
let goal=Number(input[1]);

let priceShort=priceShirt*0.75;
let priceSocks=priceShort*0.20;
let priceShoes=(priceShirt+priceShort)*2;
let total=priceShirt+priceShort+priceSocks+priceShoes;
let sumEnd=total*0.85;
let priceNeeded=goal-sumEnd;

if (sumEnd>=goal){
    console.log('Yes, he will earn the world-cup replica ball!');
    console.log(`His sum is ${sumEnd.toFixed(2)} lv.`);
} else {
    console.log('No, he will not earn the world-cup replica ball.');
    console.log(`He needs ${priceNeeded.toFixed(2)} lv. more.`);
}


}


footballKit(["55",
"310"])

