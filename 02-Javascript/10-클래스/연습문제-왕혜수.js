//##문제1
function Student(kor, eng, math) {
  this._kor = kor;
  this._eng = eng;
  this._math = math;
}
Student.prototype = {
  sum: function () {
    return this._kor + this._eng + this._math;
  },
  avg: function () {
    return this.sum() / 3;
  },
};

console.group('반복문 안에서 객체 활용');
const grade = [
  ['철수', 92, 81, 77],
  ['영희', 72, 95, 98],
  ['민혁', 80, 86, 84],
];
for (const item of grade) {
  const s = new Student(item[1], item[2], item[3]);
  console.log(
    '%/s의 총점은 %d점이고 평균은 %d점 입니다',
    item[0],
    s.sum(),
    s.avg()
  );
}
console.groupEnd();

console.group('하드코딩');
const s1 = new Student(92, 81, 77);
const s2 = new Student(72, 95, 98);
const S3 = new Student(80, 86, 84);
console.log('철수의 총점은 %d점이고 평균은 %d점입니다', s1.sum(), s1.avg());
console.log('영희의 총점은 %d점이고 평균은 %d점입니다', s1.sum(), s1.avg());
console.log('민혁의 총점은 %d점이고 평균은 %d점입니다', s1.sum(), s1.avg());

//##문제2

function Rectangle() {
  this._width = null;
  this._height = null;
}

Rectangle.prototype = {
  get width() {
    return this._width;
  },
  set width(param) {
    this._width = param;
  },
  get height() {
    return this._height;
  },
  set height(param) {
    this._height = param;
  },
  getAround: function () {
    return this.width * 2 + this.height * 2;
  },
  getArea: function () {
    return this.width * this.height;
  },
};

const rect = new Rectangle();
rect.width = 10;
rect.height = 5;

console.log(
  '둘레 길이는 %d이고 넚이는 %d입니다',
  rect.getAround(),
  rect.getArea()
);

//문제3
class Student {
  constructor(){
  this._kor = null;
  this._eng = null;
  this._math = null;
  }
  set score(value1, value2, value3){
    if(!value){
        console.log("score을 입력하세요")
        return;
    }
    this._kor = value1;
    this._eng = value2;
    this._math = value3;
}
  get score(){
    return [this._kor, this._eng, this._math];
}
  sum() {
    return this._kor + this._eng + this._math;
  }
  avg(){
    return this.sum() / 3;
  }
};

console.group('반복문 안에서 객체 활용');
const grade = [
  ['철수', 92, 81, 77],
  ['영희', 72, 95, 98],
  ['민혁', 80, 86, 84],
];
for (const item of grade) {
  const s = new Student();
  console.log(
    '%s의 총점은 %d점이고 평균은 %d점 입니다',
    item[0],
    s.sum(),
    s.avg()
  );
}
console.groupEnd();

//문제 03
class Student{
  constructor(kor, eng, math) {

  this._kor = kor;
  this._eng = eng;
  this._math = math;}


sum(){
  return this._kor + this._eng + this._math;
}
avg(){
  return this.sum() / 3;
}
};
const s1 = new Student(92, 81, 77);
const s2 = new Student(72, 95, 98);
const S3 = new Student(80, 86, 84);
console.log('철수의 총점은 %d점이고 평균은 %d점입니다', s1.sum(), s1.avg());
console.log('영희의 총점은 %d점이고 평균은 %d점입니다', s1.sum(), s1.avg());
console.log('민혁의 총점은 %d점이고 평균은 %d점입니다', s1.sum(), s1.avg());

//문제 04
class Rectangle {
  constructor(){
    this._width = null;
    this._height = null;
  }
  get width(){
    return this._width;
  }
  set width(param){
    this._width = param;
  }
  get height(){
    return this._height;
  }
  set height(){
    this._height = param;
  }
  getAround(){
    return this.width *2 *this.height*2;
  }
  getArea(){
    return this.width * this.height;
  }
}
const rect = new Rectangle();
rect.width =10;
rect.height = 5;

console.log('둘레의 길이는 %d이고 넓이는 %d입니다', rect.getAround(), rect.getArea());


//-------------------------------------------------
//-------------------------------------------------


class Student {
  constructor(){
    this._major = null;
    this._number = null;
  }
  get major(){
    return this._major;
  }
  set major(param){
   this._major = param;
    }
  
  get number(){
    return this._number;
  }
  set number(param){
   this._number = param;
    
  } 
  sayHello(){
    console.log(`나는 ${this.major}학과 ${this.number}학번 입니다.`)
  }
}
const stud1 = new Student();
stud1.major = "컴퓨터공학";
stud1.number = 10101;
stud1.sayHello();


//-------------------------------------------------
//-------------------------------------------------
class Account {
  constructor(owner, balance){
    this._owner = owner;
    this._balance = balance;
  }
  get owner(){
    return this._owner;
  }
  set owner(param){
    this._owner = param;
  }
  get balance(){
    return this._balance;
  }
  set balance(param){
    this._balance = param;
  }
  deposit(amount){
    this.balance += amount;
    return amount;
  };
  withdraw(amount){
    if(this.balance < amount){
      console.log("잔액이 부족합니다");
      return 0;
    }
    this.balance -= amount;
    return amount;
  };
}

const acc = new Account("Hello", 15000);
console.log("%s 의 잔액은 %d원", acc.owner, acc.balance);

acc.deposit(5000);
console.log("%s 의 잔액은 %d원", acc.owner, acc.balance);

acc.withdraw(15000);
console.log("%s 의 잔액은 %d원", acc.owner, acc.balance);

acc.deposit(5000);
console.log("%s 의 잔액은 %d원", acc.owner, acc.balance);

acc.withdraw(15000);
console.log("%s 의 잔액은 %d원", acc.owner, acc.balance);
//잔액이 부족합니다 Hello의 잔약은 10000원