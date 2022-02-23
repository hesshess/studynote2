class Student {
  constructor() {
    this.grade = [];
  }
  set score(value) {
    if (!value) {
      console.log('grade을 입력하세요');
      return;
    }
    this.grade.push(value);
    console.log(this.grade);
  }
  getSumAvg() {
    let sum = 0;
    let avg = 0;
    let sumavg_arr = [];
    for (let i = 0; i < this.grade.length; i++) {
      sum += this.grade[i];
    }
    avg = sum / this.grade.length;
    sumavg_arr.push(sum, avg);
    console.log(sumavg_arr);
    return sumavg_arr;
  }
  getMinMax() {
    let minmax = {
      Max: 0,
      Min: 0,
    };
    let max = this.grade[0];
    let min = this.grade[0];
    for (let i = 0; i < this.grade.length; i++) {
      if (max < this.grade[i]) {
        max = this.grade[i];
      }
      if (min > this.grade[i]) {
        min = this.grade[i];
      }
      minmax.Max = max;
      minmax.Min = min;
    }
    console.log(minmax);
    return minmax;
  }
  getVar() {
    let bunsan_arr = [];
    for (let score of this.grade) {
      let sum = 0;
      let avg = 0;
      let dispersion = 0;
      for (let i = 0; i < this.grade.length; i++) {
        sum += this.grade[i];
      }
      avg = sum / this.grade.length;
      dispersion = score - avg;
      dispersion *= dispersion;
      bunsan_arr.push(dispersion);
    }
    let sum = 0;
    let bunsan = 0;
    for (let i = 0; i < bunsan_arr.length; i++) {
      sum += bunsan_arr[i];
    }
    bunsan = sum / bunsan_arr.length;
    console.log(bunsan);
    return bunsan;
  }
  getStd() {
    let std = this.getVar();
    std = Math.sqrt(std);
    console.log(std);
    return std;
  }
}

const s = new Student();
s.score = 82;
s.score = 76;
s.score = 91;
s.score = 98;
s.score = 64;

s.getSumAvg();
s.getMinMax();
s.getVar();
s.getStd();
