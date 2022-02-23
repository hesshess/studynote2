/**
 * Number는 숫자처리와 관련된 기본 기능들을 제공하는 내장 클래스
 */

//객체의 생성
const a = new Nember(123); //a === 123은 false
console.log(a);
console.log(typeof a);
console.log(a == 123);
console.log(a === 123);

//Number() 함수를 통해 반환받는 값은 객체가 아닌 일반 숫자
//Number() 함수는 parseFloat, parseInt와 비슷한 기능
const b = Number('123'); //b ===123 은 true
console.log(b);
console.log(typeof b);
console.log(b === 123);

const b = Number('123.45'); //b === 123은 true
console.log(b);
console.log(typeof b);
console.log(b === 123.45);

/**(정적) property */
//표현 간으한 가장 큰 양수
console.log(Number.MAX_VALUE);

//표현 가능한 가장 작은 양수 즉, 0보다 크지만 0에 가장 가까운 양수
console.log(Number.MIN_VALUE);

//숫자가 아님을 나타내는 특별한 값
console.log(Number.NaN);
console.log(isNaN(Number.NaN));

/**(정적) method */
// 주어진 값이 NaN인지 확인 (isNaN과 동일)
//숫자 변환이 불가능하면 true, 가능하면 false
console.log(Number.isNaN('123'));

//주어진 값이 정수인지 확인
console.log(Number.isInteger('123'));
console.log(Number.isInteger(123));

//내장 함수 parseFloat()와 동일
//앞에서 소개한 Number() 함수와 동일
console.log(Number.parseFloat('123'));

//내장 함수 parseInt와 동일
console.log(Number.parseInt('123'));
