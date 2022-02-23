// // const year1 = 2022;
// // const age1 = year1 - 1990;
// // console.log("나는 %d세 입니다.", age1);


// const age2 = 32;
// const year2 = 2022 - age2;
// console.log("나는 %d년도에 태어났습니다.", year2);


let numOfApples =123;
let restOfApples = numOfApples % 10
console.log(restOfApples); 
let restBasket = restOfApples > 0 ? 1 : 0;
console.log(restBasket);
let numOfBasket = numOfApples / 10 + restBasket;
console.log("사과가 %d개 일때 바구니는 %d개가 필요하다", numOfApples, numOfBasket); 





let num;
let result1 = num / 100;
let result2 = num % 100 / 100;
let result3 = result1 - result2;
let result4 = result3 * 100
console.log(result4);