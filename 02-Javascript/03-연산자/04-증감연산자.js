// 1)변수 스스로 1증가
let selfPlus = 1;
console.log(selfPlus);

selfPlus++;
console.log(selfPlus);

++selfPlus;
console.log(selfPlus);

// 변수 스스로 1감소
let selfMinus = 1;
console.log(selfMinus);

selfMinus--;
console.log(selfMinus);

--selfMinus;
console.log(selfMinus);

//3) 전위 증감 연산자
let prevValue = 1;

//  prevValue 를 먼저 1증가 시ㅣ고 전체수식을 처리
//--> 앞북
let prevResult = 100 + ++prevValue;

console.log(preReselt); //102
console.log(prevValue); //2

//4) 후위 증감 연산자
let nextValue = 1;

//100+nextValoue를 먼저 처리하고 나중에서야 nextValue가 1 증가한다
//--> 뒷북
let nextResult = 100 + nextValue++;

console.log(nextResult); //101
console.log(nextValue); //2