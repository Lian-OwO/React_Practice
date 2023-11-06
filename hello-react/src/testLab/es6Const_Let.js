//es6, const, let 비교해보기

function test() {
  var a = "hello";
  if (true) {
    var a = "hi";
    console.log(a);
  }
  console.log(a);
}

function test2() {
  let a = "hello";
  if (true) {
    let a = "hi";
    console.log(a);
  }
  console.log(a);
}

//함수 사용하기
test();
test2();

//결론, var, 전역으로 재선언 및 재할당
//let 블록 단위라서 우리가 원래 알고있떤
//지역 변수의 효력벙ㅁ위를 못 넘음
