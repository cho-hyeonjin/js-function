const obj = {
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
obj.getFamilyName();
obj.getJob();

// 문제 발생 : 문제 있는 값 세팅 --- 어떻게 막나? --> getter, setter
obj.age = 200;
obj.age = -500;
