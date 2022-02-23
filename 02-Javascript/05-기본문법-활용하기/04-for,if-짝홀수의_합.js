let oddSum = 0; //홀수의 합
let evenSum = 0; // 짝수의 합

//i가 1~10까지 1씩 증가하는 동안 반복
for (let i = 1; i <= 10; i++) {
  //반복문 안에서의 조건문은 주로 반복문의 초기식변수(i)에
  //대한 경우의 수를 판별함.
  if (i % 2 == 0) {
    console.log('%d 짝수', i);
    evenSum += i;
  } else {
    console.log('%d 홀수', i);
    oddSum += i;
  }
}

console.log('1~10 까지 홀수들의 합 : %d', oddSum);
console.log('1~10 까지 짝수들의 합 : %d', evenSum);
