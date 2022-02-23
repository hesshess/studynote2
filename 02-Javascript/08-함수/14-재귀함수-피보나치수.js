//피보나치수열에서 10번째 항목이 무엇인지 출력하시오
//0,1,1,2,3,5,8,13,21,34,55...

// f(n) = f(n-1) + f(n-2)

function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
console.log(fibonacci(10));
