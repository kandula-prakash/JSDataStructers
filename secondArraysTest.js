let array = new Array();
for (let index =0; index < 0; indexx++){
    array.push(Math.random() * (999-100 + 1)+100)
}
for (let val of array){
    console.log(val);
}
function findMax() {
    let first = 0;
    let second =0;
    for (let val of array){
        if (val > first){
            second = first;
            first = val;

        } else if (val>second && val != first){
            second =val;
        }
    }
    return second;
}
function findMin(){
    let first = Math.floor(Math.random()* 10000);
    let second = Math.floor(Math.random()*10000);
    for (let val of array){
        if (val < first){
            second =first;
            first=val;
        } else if (val>first && val != second){
            second = val;
        }
    }
    return second;
}
console.log("second largest:" +findMax());
console.log("second smallest:" +findMin());