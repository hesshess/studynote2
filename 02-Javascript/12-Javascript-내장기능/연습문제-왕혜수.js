/**문제3*/
let str =
  '수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.';

const word = '수업시간';
const flen = word.length;
let find = true;
let count = 0;

while (find) {
  console.log(str);
  p = str.indexOf(word);
  find = p > -1;

  if (find) {
    count++;
    str = str.substring(p + flen);
  }
}

console.log(count);

/**문제4*/
//랜덤함수
function random(n1, n2) {
  return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}
//0개의 원소를 갖는 배열
const lotto = [];
console.log(lotto);

//6회의 반복을 수행
for (let i = 0; i < 6; i++) {
  //console.group(`${i}번째 원소 결정하기`);
  //console.log(lotto);
  //중복되지 않는 숫자가 몇 번째에 생성될지 알 수 없으므로 무한반복
  while (true) {
    //랜덤한 숫자
    //const rnd = random(1,45);
    const rnd = random(1, 45);

    //rnd값이 lotto배열안의 원소와 중복되지 않는다면?
    if (!lotto.includes(rnd)) {
      //console.log(`>>>${rnd}는 중복되지 않음`);
      lotto.push(rnd);
      break;
    } else {
      //console.log(`>>>${rnd}는 중복됨`)
    }
  }
  //console.groupEnd();
}

console.log(lotto);

/**문제5*/
//랜덤함수
function random(n1, n2) {
  return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}
//1~45 사이의 범위의 1씩 증가 하는 원소가 저장되어 있는 배열 balls을 생성
const balls = new Array(45);

for (let i = 0; i < balls.length; i++) {
  balls[i] = i + 1;
}

//6개의 빈 칸을 갖는 배열 lotto를 생성
const lotto = new Array(6);

for (let i = 0; i < lotto.length; i++) {
  console.log(balls);

  //balls의 index범의 안에서 임의의 위치를 선정
  const rnd = random(0, balls.length - 1);

  //balls 배열에서 임의의 원소 하나를 추출하여 lotto 배열에 채워넣기
  lotto[i] = balls[rnd];

  //rnd번째 위치에서 하나의 데이터를 잘라냄
  balls.splice(rnd, 1);
}

console.log(lotto);

/**문제6*/
function solution(participant, completion) {
  let answer = '';

  //participant원소 중에서 completion에 포함되지 않은 하나의 원소를 찾아서 answer에 저장하는 것이 문제 내용
  // --> participant의 원소를 탐색하여 completion에 속하지 않음을 확인하면 그 순간 반복 중단

  /**1) for 문을 사용하며 탐색하다 break 사용
    for (let i =0; i < participant.length; i++){
        const p = participant[i];

        //i번째 원소가 completion에 들어 있다면?
        if(!completion.includes(p)){
            answer =p;
            break;
        }
    }*/

  /**2) 배열의 some 함수 사용 */
  participant.some((v, i) => {
    if (!completion.includes(v)) {
      answer = v;
      return true;
    }
  });

  return answer;
}

// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "leo"가 출력
console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));

// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "vinko"가 출력
console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
);

// "steave"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "steave"가 출력
console.log(
  solution(['mislav', 'stanko', 'steave', 'ana'], ['stanko', 'ana', 'mislav'])
);
