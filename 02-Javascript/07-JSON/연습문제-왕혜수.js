// 문제1
const bloody_type = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result = { A: 0, B: 0, AB: 0, O: 0 };

for (const b of bloody_type) {
  result[b]++;
}
// for (let i = 0; i < bloody_type.length; i++) {
//   switch (bloody_type[i]){
//     case 'A':
//         result.A++;
//         break;
//     case 'B':
//         result.B++;
//         break;
//     case 'AB':
//         result.AB++;
//         break;
//     default :
//         result.O++;
//         break;
// }}
console.log(result);

//문제2
const exam = {
  철수: [89, 82, 79, 91],
  민영: [91, 95, 94, 89],
  남철: [65, 57, 71, 64],
  혜진: [82, 76, 81, 83],
};
for (let k in exam) {
  let score_sum = 0;
  let score_avg = 0;
  for (let i = 0; i < exam[k].length; i++) {
    score_sum += exam[k][i];
    score_avg = score_sum / exam[k].length;
  }
  console.log(
    `${k}의 총점은 ${score_sum}점 이고 평균은 ${score_avg}점 입니다.`
  );
}

const count = Object.getOwnPropertyNames(exam);
let math_sum = 0;
// let student_count = 0;
let math_avg = 0;
for (let k in exam) {
  math_sum += exam[k][2];
  // student_count++;
}
// math_avg = math_sum/student_count;
console.log(count);
math_avg = math_sum / count.length;
console.log(
  `모든 학생의 수학 총점은 ${math_sum}점 이고 평균은 ${math_avg}점 입니다.`
);

//문제3
const covid19 = [
  { date: '0125', active: 426 },
  { date: '0126', active: 343 },
  { date: '0127', active: 547 },
  { date: '0128', active: 490 },
  { date: '0129', active: 460 },
  { date: '0130', active: 443 },
  { date: '0131', active: 338 },
  { date: '0201', active: 299 },
];
let sum = 0;
let avg = 0;
for (let i = 0; i < covid19.length; i++) {
  sum += covid19[i].active;
}
avg = sum / covid19.length;
console.log(`누적 확진자 수: ${sum} 평균 확진자 수: ${avg}`);

let max_active = covid19[0].active;
let max = {};
for (let i = 0; i < covid19.length; i++) {
  if (max_active < covid19[i].active) {
    max_active = covid19[i].active;
    max = covid19[i];
  }
}
console.log(`확진자가 가장 많이 나타난 날: ${max.date}`);
