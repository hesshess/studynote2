/**
encodeURIComponent(string)
알파벳과 숫자및 비예약 표식을 제외한 모든 글자를 URL에 포함 시킬 수 있는 문자열로 인코딩한다
->URL에 사용해도 문제가 없는 특수문자를 제외하고 모든 글자를 변환
 */

const set1 = ';,/?:@&=+$#'; //예약문자
const set2 = "-_.!~*'()"; //비예약문자
const set3 = 'ABC abc 123'; //알파벳 및 숫자 공백
const set4 = '자바스크립트';

const enc1 = encodeURI(set1);
const enc2 = encodeURI(set2);
const enc3 = encodeURI(set3);
const enc4 = encodeURI(set4);

console.group('encodeURI');
console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);
console.groupEnd();

//디코딩 수행
console.group('decodeURI');
console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));
console.groupEnd();
