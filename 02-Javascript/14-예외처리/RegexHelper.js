const MyModule4 = require('../11-모듈의-이해/MyModule4');
const BadRequestException = require('./BadRequestException');

class RegexHelper {
  /**
   * 입력값이 한글로만 구성되어 있는지를 검사하는 메서드
   */
  kor(input, msg) {
    const patter1 = /^[ㅂ-ㅎ가-힣]*$/;
    //username이 pattern1 정규식에 부합하지 않는다면?
    if (!patter1.test(input)) {
      throw new BadRequestException(msg);
    }
  }
  /**
   * 입력값이 숫자로만 구성되어 있는지를 검사하는 메서드
   */
  num(input, msg) {
    const patter1 = /^[0-9]*$/;
    //username이 pattern1 정규식에 부합하지 않는다면?
    if (!patter1.test(input)) {
      throw new BadRequestException(msg);
    }
  }
  /**
   * 입력값이 영어+한글로만 구성되어 있는지를 검사하는 메서드
   */
  engNum(input, msg) {
    const patter1 = /^[a-zA-Z0-9]*$/;
    //username이 pattern1 정규식에 부합하지 않는다면?
    if (!patter1.test(input)) {
      throw new BadRequestException(msg);
    }
  }
  /**
   * 최대 글자 수 검사
   */
  maxLen(input, len, msg) {
    if (input.length > len) {
      throw new BadRequestException(msg);
    }
  }
}
MyModule4.exports = RegexHelper;
