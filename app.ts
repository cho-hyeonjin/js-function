type MyObject = {
  name?: string;
  age: number;
  getFamilyName: () => string;
  getLastName: () => string;
  getJob: () => string;
};

const obj: MyObject = {
  name: "Hyeon Jin",
  age: 30,
  getFamilyName: function () {
    return "Cho";
  },
  // Arrow Function
  getLastName: () => "Cho",
  // getJob: function() 축약형
  getJob() {
    return "FE Developer";
  },
};

obj.name;
obj.age;
obj.bloodType = "A"; // JS의 동적 바인딩 기능으로 자동 추가됨
delete obj.name; // delete 하면 삭제됨
// 이것을 막고 싶을땐?
// 1. TS라면? type을 설정해준다.

obj.getFamilyName();
obj.getJob();

// 문제 발생 : 문제 있는 값 세팅 --- 어떻게 막나? --> getter, setter
obj.age = 200;
obj.age = -500;

// getter, setter : 외부에서 사용할 땐 객체 속성처럼 사용할 수 있지만 but 객체(클래스) 내부에서는 함수로 정의하는 문법. 단, 일반 객체에서는 사용 불가. 클래스에서만 사용 가능!
class Person {
  _bloodType: string;

  constructor(bloodType: string) {
    this.bloodType = this.bloodType;
  }

  // 방어코드. 클래스 내부에 정의하는 함수 앞에 set을 붙이면 외부에서는 그냥 객체 속성에 재할당하는 식으로 사용할 수 있음
  set bloodType(btype: string) {
    if (btype === "A" || btype === "B" || btype === "O" || btype === "AB")
      this._bloodType = btype;
  }

  // set한 값을 바깥쪽에서 읽을 수 있게 하는 메서드는 get을 붙여서 작성
  get bloodType() {
    return this._bloodType;
  }
}

const p1 = new Person("FE Developer");

p1.bloodType;
p1.bloodType = "C"; // C형이라는 혈액형은 없음 ∴ 방어 코드를 작성해줘야 함

// getter와 setter는 클래스 내부의 값은 보호하면서 외부에서 사용하는 편의성은 그대로 유지시켜 줄 수 있는 편리한 문법!!

// 2. JS라면?

const myObj = Object.create(null, {
  name: {
    value: "Cho Hyeonjin",
    writable: true, // false로 하면 read only가 됨
    configurable: true, // false로 하면 속성 수정 불가
  },
});

myObj.name = "하하하";
// TS에는 Type에서 규정해주면 되지만 JS에는 그런 방식이 불가능하기 떄문에 Object.create로 생성하면서 위와 같이 설정해주어야 함.
