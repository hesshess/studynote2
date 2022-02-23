class Terran {
  //모든 객체가 갖는 명사적 특성들을 멤버변수로 정의
  constructor(name, hp, dps) {
    this._name = name;
    this._hp = hp; //체력 health point
    this._dps = dps; //damate per second초당공격력
    console.log(`[${name}] 체력: ${hp}, 공격력: ${dps}`);
  }
  attack(target) {
    console.log(`${this.name}is attacking ${target}. damaged :${this._dps}`);
  }
}

class Marine extends Terran {
  //attack method override? overwrite
  attack(target) {
    console.log(`${this.name}is shooting ${target}. damaged :${this._dps}`);
  }
}
class Tank extends Terran {
  attack(target) {
    super.attack(target);
    console.log('>>> Tank bombard');
  }
}
class Firebat extends Terran {
  constructor(name) {
    //클래스 상속 관계에서 부모의 생성자는 무조건 호출 되어야 하므로
    //자식이 생성자를 갖는 경우 그안에서 부모의 생성자를 강제 호출해야한다
    super(name, 500, 50);
  }
}

const m = new Marine('marn1', 120, 30);
//자식 클래스에 의해 재정의된 기능 호출 --> 부모의 메서드는 가려진다
m.attack('zillot');

const t = new Tank('tnk1', 120, 30);
t.attack('dragoon');

const f = new Firebat('flameThrower');
f.attack('enemy');
