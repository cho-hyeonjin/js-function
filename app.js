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
