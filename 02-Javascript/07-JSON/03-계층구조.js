//1) 다른 json 객체를 value로 포함하는 경우

//단일 형태의 json
var centerPoint = {
  x: 5, //x좌표
  y: 10, //y좌표
};

//다른 JSON을 포함하는 JSON
var circle1 = {
  center: centerPoint,
  radius: 5.1,
};

console.group('circle1');
console.log('원의 중점: (%d, %d)', cirsle1.center.x, cirsle1.center.y);
console.groupEnd();

//2) 계층적으로 정의된 경우
var circle2 = {
  center: {
    x: 5,
    y: 10,
  },
  radius: 5.1,
};

console.group('circle2');
console.log('원의 중점: (%d,%d)', circle2.center.x, circle2.center.y);
console.log('원의 반지름: %d', circle2.radius);
console.groupEnd();
