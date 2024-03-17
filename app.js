// 완전 기본형 - 문/Statement
function myFn(x) {
  return x + 100;
}

const result = myFn(10);

// 익명 함수 - call 할 수 없다. 하지만 JS에서의 함수는 값이기 때문에 값으로 사용될 수 있다.
// 식/Expression
const myFnV2 = function () {
  return 100;
};

myFnV2(); // 익명 함수는 변수에 담아서 변수명으로 호출할 수 있다.

// IIFE(즉시 실행 함수) --- 이름도 없고 변수에 할당하지도 않음. ∴ 애플리케이션 실행 중 단 한번만 실행되는 함수. 다시 호출할 수 없음!
(function () {
  console.log("Execute IIFE!");
})();

// JavaScript에서 함수를 호출하는 3가지 방법
// 1. 함수명()
// 2. call()
// 3. apply()
myFnV2();
myFnV2.call();
myFnV2.apply();

// JavaScript에서는 함수에서 매개변수를 1개만 받겠다 정의했음에도
// 호출 시 매개변수 개수를 다르게 전달해도 오류가 나지 않고 실행 됨.
const result2 = myFn();
const result3 = myFn(10, 20);

// 가변 인자 - old한 방식: 함수 호출시 함께 전달되는 arguments 유사배열 이용하기
//          JS 함수가 호출될 떄 함께 전달되는 배열이 하나 있다. 정확히는 '유사 배열'.
//          호출 당시 전달된 인자들이 차곡차곡 들어가는 arguments라는 유사배열
function sum() {
  // arguments
  // 매개변수를 사용하지 않고 함수 내부에서 가변인자로 인자를 받아 처리한다.
  let s = 0;

  for (let i = 0; i < arguments.length; i++) {
    s = s + arguments[i];
  }

  return s;
}

const abcSum = sum(10, 20, 30);
// 그러나 함수 호출 시 함께 전달되는 유사 배열을 이용한 가변 인자로 구현된 함수에서는
// 함수 시그니처를 봤을 때
// 매개변수가 없는 함수인 것인지, 가변 인자를 사용하는 함수인 것인지
// 구별할 수 없다는 문제가 있다.

// 가변인자 - 현대적인 방식: rest parameter
function sumV2(a, b, ...args) {
  let s = 0;

  for (let i = 0; i < arguments.length; i++) {
    s = s + arguments[i];
  }
}
