# float속성

박스를 부모의 왼쪽이나 오른쪽에 고정시키고 문장을 그 옆으로 흐르도록 하기 위한 속성.

## #01. 적용가능한 값

- left(왼쪽), right(오른쪽), none(해제), inherit(부모값 상속)

## #02. 제약사항

- 새로운 문단을 시작하기 위해서는 이전 float를 off시켜야 한다.
- 부모요소가 float가 적용된 자식요소를 감싸지 못한다.

### 해결책

#### 이전 float 속성을 해제.

- 부모요소가 끝나기 전(혹은 새로운 문단이 시작하기 전) `float: none; clear: both`가 적용된 Block-Level요소를 배치.

```CSS
float: none;
clear: both;
```

#### `:after` 가상 클래스 사용

부모의 :after 가상 클래스를 사용해서 아래의 코드 적용

```css
content: '';
display: block;
float: none;
clear: both
```

## #03. 특성

두 개 이상의 Block-Level요소에게 float를 연속적으로 적용하면 박스의 배치 효과