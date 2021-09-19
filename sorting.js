let elementsArray = [];
for (let index =0; index < 10; index++){
    array.push(Math.floor(Math.random() * 900+100));
}
console.log(elementsArray);
elementsArray.sort();


console.log("second largest: " +elementsArray[9]);
console.log("second smallest:" + elementsArray[1]);