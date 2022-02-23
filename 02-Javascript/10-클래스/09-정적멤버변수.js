class Customer {
  constructor(name) {
    this._name = name;
  }

  //모든객체가 공유하는 정적 멤버변수의 정의
  static count = 0;

  //정적 멤버변수에 대한 관리를 위해서 함수 정의
  in() {
    Customer.count++;
  }
  out() {
    Customer.count--;
  }
  showState() {
    console.log(`손님의 이름:${this._name}, 전체 손님 수: ${Customer.count}`);
  }
}

console.group('cstm1');
const c1 = new Customer('cstm1');
c1.in();
c1.showState();
console.groupEnd();

console.group('cstm2');
const c2 = new Customer('cstm2');
c2.in();
c1.showState();
c2.showState();
console.groupEnd();

console.group('cstm3');
const c1 = new Customer('cstm3');
c3.in();

c1.showState();
c2.showState();
c3.showState();
console.groupEnd();

console.group('cstm2,3 out');
c3.out();
c2.out();
