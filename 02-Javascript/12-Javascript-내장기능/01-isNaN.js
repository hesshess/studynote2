/**isNaN(value)
파라미터로 전달된 값이 NaN일 떄 true 아니면 flase
-> 숫자가 아니면 true, 숫자면 flase
-> 숫자로 변환 가능한 형식일 경우 false

JavaScript의 다른 모든값과 달리, NaN은 같음 연산(==, ===)을 사용해 판별할수 없다
그래서 NaN 여부를 판별하는 함수가 필요하다
*/

//숫자로 변환할수 없다고 판단하는 경우 ->참
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN({}));
console.log(isNaN('blabla'));
console.log(isNaN('123ABC'));

//숫자로 변환할수 있다고 판단하는 경우 ->거짓
console.log(isNaN(true)); //1
console.log(isNaN(null)); //0
console.log(isNaN(37)); //숫자37로 변환
console.log(isNaN('37.37')); //숫자 37.37로 변환
console.log(isNaN('')); //빈문자열->0
console.log(isNaN('   ')); //공백문자열->0
