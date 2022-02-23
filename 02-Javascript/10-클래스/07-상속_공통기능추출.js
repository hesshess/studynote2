//종족의 공통 특성을 갖는 클래스
class Protoss {
  //모든 객체가 갖는 명사적 특성들을 멤버변수로 정의
  constructor(name, hp, dps) {
    this._name = name;
    this._hp = hp; //체력 health point
    this._dps = dps; //damate per second초당공격력
    console.log(`[${name}] 체력: ${hp}, 공격력: ${dps}`);
  }

  //객체가 수행해야하는 동작들을 함수 형태로 정의
  move(position) {
    console.log(`${this.name}is moving to ${position}`);
  }
  attack(target) {
    console.log(
      `${this.name}is attacking ${target}. damage per sec:${this._dps}`
    );
  }
}

class Zealot extends Protoss {
  sword(target) {
    this.attack(target);
    console.log(`>>>stabbing with the sword`);
  }
}

class Dragoon extends Protoss {
  fire(target) {
    this.attack(target);
    console.log(`>>>long distance attack`);
  }
}

const z1 = new Zealot('zlt1', 300, 20);
z1.move('mainCamp');
z1.sword('mainCamp');

const z2 = new Zealot('zlt2', 300, 25);
z2.move('mainCamp');
z2.sword('mainCamp');

const d1 = Dragoon('drg1', 250, 40);
d1.move('mainCamp');
d1.fire('mainCamp');

const d2 = Dragoon('drg2', 250, 40);
d2.move('mainCamp');
d2.fire('mainCamp');
