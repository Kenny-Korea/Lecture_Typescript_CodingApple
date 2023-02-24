// * as a 와 같이 선언해주면 해당 파일에 있는 모든 데이터 import 해올 수 있음
import * as a from "./test.d";

// react npm 명령어
// 새로운 프로젝트: npx create-react-app my-app --template typescript
// 기존 프로젝트: npm install --save typescript @types/node @types/react @types/react-dom @types/jest

// ---------- 1-3. 타입스크립트 기본 타입 정리 (primitive types) ----------
function onethree() {}
// primitive type 지정
let kenny: string = "kenny";

// array type 지정
let array: string[] = ["kim", "lee"];

// object type 지정(?을 넣어주면 들어올 수도 있고 안들어올 수도 있음)
let object: { name?: string } = { name: "kim" };

// Union Type
let myname: string | number = "kim";
myname = 123;

// Type Alias
// 원하는 타입을 변수에 담아 사용 (일반적으로 첫글자 대문자로)
type Mytype = string | number;
let test: Mytype = 123;

// 함수 type 지정
function multiply2(x: number): number {
  return x * 2;
}

const multiply3 = (x: number): number => {
  return x * 3;
};

// Array에 사용하는 Tuple Type
// 첫 번째 요소는 무조건 number, 두 번째 요소는 무조건 boolean이 들어와야 함
type Member = [number, boolean];
let john: Member = [123, false];

// Object에 타입 지정해야할 key가 너무 많은 경우
type Employee = { [key: string]: string | number };
let sam: Employee = { name: "kim", age: 123 };

// class 문법
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// 대부분 타입을 지정해주지 않아도 타입스크립트에서 값을 확인하여 자동으로 타입을 지정해줌
const test2 = "kenny";
const test3 = 123;

// Q1.
const myInfo: { song: string; singer: string } = {
  song: "lush life",
  singer: "zara larsson",
};

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let arr: (number | string)[] = [1, 2, 3, "kim"];
let obj: { a: string | number } = { a: 123 };

// any보다는 unknown을 사용해야함
// any는 타입에러를 잡아주지 못함
let test4: unknown;
test4 = 123;
test4 = "123";

let test5: any;
test5 - 1;

// 아래와 같이 union type 지정 시, test6의 타입이 확실하지 않기 때문에 연산 에러
let test6: number | string;
// test6 - 1

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let chulsoo: unknown[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

// 함수
// 타입 지정된 파라미터는 꼭 사용해야(넣어줘야) 함
// --> 파라미터에 ? 를 넣어주면 들어올 수도 있다의 의미가 되어 파라미터 사용하지 않아도 됨
// x?: number === x: number | undefined

let test7 = (x: number): number => {
  return x * 3;
};

let test8 = (x: number): void => {
  console.log(x * 2);
};

// test8()

// let test9 = (x?: number): number => {
//   return x * 2;
// };

// test9();

const test10 = (name?: string): string => {
  if (name) return "안녕하세요 " + name;
  else return "이름이 없습니다.";
};

const test11 = (x: number | string): number => {
  return x.toString.length;
};

const test12 = (income: number, house: boolean, charm: string): string => {
  let x = income;
  let y = 0;
  let z = 0;
  if (house === true) y = 500;
  if (charm === "상") z = 100;
  if (x + y + z >= 600) return "결혼가능";
  else return "";
};

// Type Narrowing
// Type이 아직 하나로 확정되지 않았을 경우 사용
const test13 = (x: number | string) => {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
};

const test14 = (x: number | string) => {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  }
};

// Type Assertion (타입 덮어쓰기) as --> 정말 필요할 때만 사용해야함
// 1. Narrowing할 때 사용 (type을 변경할 때 쓰이는 것이 아닌 확정할 때 쓰임 (number | string과 같은 상황에서))
// 2. 무슨 타입이 들어올지 100% 확실할 때
const test15 = (x: number | string) => {
  let array: number[] = [];
  array[0] = x as number;
};
test15("123"); // as 문법의 한계: test15에 string을 넣어줘도 에러를 반환하지 못함

// Type Alias
// 같은 이름의 type 변수는 재정의가 불가능함
type Animal = string | number | undefined;

let monkey: Animal = "monkey";

type HumanType = { name: string; age: number };
let kwangmin: HumanType = { name: "kim", age: 10 };

// 타입스크립트에서는 reference type 안의 요소를 변경하는 것도 막을 수 있음
// readonly keyword를 사용하면 됨
type Girlfrind = { readonly name: string; age?: number };
const girlfriend: Girlfrind = { name: "Sisca" };
// girlfriend.name = "Monedero"; - 타입 에러

// Type Alias를 Union Type으로 합칠(extend) 수도 있음
// 1. Primitive
type Name = string;
type Age = number;
type Person = Name | Age;

// 2. Reference
type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

// 동일한 속성을 가진 두 type을 extend 하는 경우 --> 에러
type Word = { x: string };
type Kata = { x: number };
type MixedWord = Word & Kata;
// const test16: MixedWord = { x: "!23" }; --> error

// 7-2
type Test = { color?: string; size: number; readonly position: number[] };

// 7-4
type Test1 = { adult: boolean };
type NewTest = Test & Test1;

// Literal Type
// 더 엄격한 타입 지정 기능 (const의 업그레이드 버젼이라고 생각)
let familyName: "kim" | "park" | number;
// familyName = "lee" --> 에러
familyName = 1;

const test17 = (x: "hello"): void => {
  console.log(x);
};

const test18 = (x: "hello"): 0 | 1 => {
  // return 2; --> 에러
  return 1;
};

const rsp = (x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] => {
  return ["가위"];
};

// as const
// object 자료를 완점히 잠가놓고 싶으면 사용
// 1. object value 값을 그대로 타입으로 지정해줌
// 2. object 속성들에 모두 readonly 붙여줌
let data = { name: "kim" } as const; // as const 가 없으면 에러
function test19(a: "kim") {}
test19(data.name);

// 함수의 Type Alias 지정
// 함수 표현식에만 사용 가능
type Func1 = (a: string) => number;
type Func2 = (a: number) => void;

const func: Func1 = (a) => {
  console.log(a);
  return 10;
};

const info1 = {
  name: "kim",
  plusOne(x: number): number {
    return x + 1;
  },
  changeName: (): void => {
    console.log("lee");
  },
};

info1.plusOne(1);
info1.changeName();

type Func3 = (x: string) => string;
const cutZero: Func3 = (x) => {
  if (x[0].includes("0")) {
    return "hello";
  }
  return "hello";
};

// 타입스크립트로 HTML 변경과 조작할 때 주의점

{
  /* <h4 id="title">안녕하세요</h4>
<a href="www.naver.com" class = "link">링크</a>
<button id = "button">버튼</button> */
}

let title = document.querySelector("#title"); // error

// narrowing 하는 방법 몇 가지
// 1. not Null
if (title !== null) {
  title.innerHTML = "hello";
}

// 2. instanceof
if (title instanceof Element) {
  title.innerHTML = "hello";
}

// 3. as
let title1 = document.querySelector("#title") as Element;

// 4. Object에 붙이는 ? (?: optional chaining 이라 부름)
if (title?.innerHTML !== undefined) {
  title.innerHTML = "hello";
}

// 5. tsconfig.json에서 strictMode false로 해제

// a 태그의 href 속성 내용 변경하기

let link = document.querySelector(".link");
// Anchor Element (a태그)라고 narrowing 해줘야 함
// HTMLBodyElement, HTMLButtonElement와 같이 각 태그에 맞는 속성들이 있음
if (link instanceof HTMLAnchorElement) {
  link.href = "www.daum.com";
}

// EventListener 부착하는 법
let button = document.querySelector("#button");
button?.addEventListener("click", function () {});

// 숙제1.
let image = document.querySelector("#image");
if (image instanceof HTMLImageElement) {
  image.src = "new.jpg";
}

// 숙제2.
let anchor = document.querySelectorAll(".naver");
// 아래와 같이 하면 anchor[0]에만 적용됨
if (anchor instanceof HTMLAnchorElement) {
  anchor.href = "www.kakao.com";
}
// forEach 사용해서 반복하기
anchor.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "www.kakao.com";
  }
});

// ---------- 1-14. class 만들 때 타입 지정 가능 ----------

function onefourteen() {
  class Human {
    data: number = 0;
    // 아래와 같이 constructor 함수 위에 name 속성의 type을 미리 지정해둬야 함
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    func(a: string) {
      console.log("hello " + a);
    }
  }

  let human1 = new Human("kim");
  let human2 = new Human("park");
  console.log(human1.func("kenny")); // "hello kenny"

  // Object에 타입 지정하려면 interface 이것도 있음

  // 1. type 키워드로 타입변수 생성 가능
  type Square = { color: string; width: number };
  let box1: Square = { color: "red", width: 100 };

  // 2. interface 키워드로 타입변수 생성 가능
  interface Triangle {
    color: string;
    width: number;
  }
  let box2: Triangle = { color: "red", width: 100 };

  // interface의 장점
  // 1. extends 로 복사 가능
  // 아래의 경우, name이라는 속성이 중복됨
  interface Student {
    name: string;
  }

  // interface Teacher {
  //   name: string,
  //   age: number
  // }

  // extends 키워드를 이용하여 Student의 속성을 그대로 가져옴
  interface Teacher extends Student {
    age: number;
  }
  let student = { name: "kim" };
  let teacher = { name: "lee", age: 100 };

  // type 사용 시, &(intersection type)를 사용하면 interface의 extends와 유사하게 작동
  // but interface는 속성을 복사하는 것이고, intersection type은 두 속성을 모두 만족(교차)해야한다는 조건을 주는 것임
  // interface도 & 키워드 사용할 수 있음
  type Car = { name: string };
  type HyundaiCar = { color: string } & Car;

  // type vs interface
  // interface는 중복선언 가능 (유연)
  // type은 중복선언 불가능 (엄격)

  // interface의 중복선언
  // 중복선언 시 속성들이 합쳐짐
  // 외부 라이브러리의 경우, interface를 많이 사용함 (추후에 타입 추가가 쉬움)
  // 다른 사람들이 쉽고 유연하게 사용해야하는 경우, interface를 사용하는 것이 좋음
  interface Student {
    id: number;
  }
  interface Student {
    score: number;
  }

  // extends와 &의 차이
  // extends는 에러를 코드 선언 전에 미리 잡아줌
  // & 는 &를 사용하는 시점에서는 에러를 못잡고, 코드를 선언해야 잡아줌
  // 아래의 경우, name type이 충돌되기 때문에 extends 사용 단계에서 에러를 잡아줌
  interface Android {
    name: string;
  }
  interface LG extends Android {
    // name: number
  }

  // type의 경우, & 사용 단계에서는 에러가 나지 않음
  type IOS = {
    name: string;
  };
  type Apple = { name: number } & IOS;

  // name이 string과 number 타입 모두를 만족시켜야하므로, 사용 불가("never" 타입은 사용할 수 없음)
  // let iphone:Apple = {name: "iphone14"}

  // 숙제 1.
  interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
  }
  let product: Product = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
  };

  // 숙제 2. ⭐️
  interface Cart {
    product: string;
    price: number;
  }
  let cart1: Cart[] = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
  ];

  // 숙제 3.
  interface NewCart extends Cart {
    card: boolean;
  }

  let cart2: NewCart = { product: "청소기", price: 7000, card: false };

  // 숙제 4.
  interface Func4 {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
  }
  let obj4: Func4 = {
    plus(a, b) {
      return a + b;
    },
    minus(a, b) {
      return a - b;
    },
  };
}
onefourteen();

// ---------- 2-1. 함수 rest 파라미터, destructuring 할 때 타입지정 ----------
function twoone() {
  // rest parameter에도 타입 지정 가능
  // array 타입만 들어올 수 있음
  function restparam(...a: number[]) {
    console.log(a);
  }
  restparam(1, 2, 3, 4, 5);

  // destructuring 설명
  let [var1, var2] = ["hello", 123];
  // var1 === "hello", var2 === 123
  let { student1, age1 } = { student1: true, age1: 20 };
  // student1 === true, age1 === 20

  // object destructuring 시 타입 적용
  type Obj1 = { student: boolean; age: number };
  let obj1 = { student: true, age: 20 };
  // function objtest({ student, age }: { student: boolean; age: number }) { 이렇게 해도 됨
  function objtest({ student, age }: Obj1) {
    console.log(student, age);
  }
  objtest(obj1);

  // (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
  function returnMaxNum(...arr: number[]): number {
    let max: number = Number.MIN_SAFE_INTEGER;
    for (let x of arr) {
      if (x > max) max = x;
    }
    return max;
  }

  returnMaxNum(1, 2, 3, 4, 5);

  // (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.

  function test20({
    user,
    comment,
    admin,
  }: {
    user: string;
    comment: number[];
    admin: boolean;
  }) {
    console.log(user);
    console.log(comment);
    console.log(admin);
  }
  test20({ user: "kim", comment: [3, 5, 4], admin: false });

  // (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
  // type Array1 = number[] | string[] | boolean[];
  type Array1 = (number | string | boolean)[];
  function test21([a, b, c]: Array1) {
    console.log(a, b, c);
  }
  test21([40, "wine", false]);
}
// twoone()

// ---------- 2-2. Narrowing 할 수 있는 방법 더 알아보기 ----------
function twotwo() {
  // && 개념 정리
  // && 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면
  // && 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남겨줍니다.
  1 && null && 3; // null이 남음
  undefined && "안녕" && 100; // undefined 남음

  // null & undefined 타입 체크하는 경우가 매우 잦음
  // 1) && 연산자로 null & undefined 타입 체크하기
  function test22(a: string | undefined) {
    // a가 undefined면 if문 실행이 안됨
    // a가 string이면 if문 실행됨
    if (a && typeof a === "string") {
      console.log(a);
    }
  }

  type Fish = { swim: string };
  type Bird = { fly: string };

  // 2) in 키워드를 사용한 object narrowing
  // 두 object가 상이한 key값을 갖고 있을 경우 사용하면 좋음
  function test23(animal: Fish | Bird) {
    // animal.swim - 아직 animal의 타입이 애매하기 때문에 에러
    // if(typeof animal === Fish) - 에러: typeof는 string, object, number등으로만 판정 가능
    // --> in 키워드 사용
    // Fish 타입에만 있는 swim key를 in 키워드와 함께 사용해서 타입 구분 가능
    if ("swim" in animal) {
      console.log(animal.swim);
    }
  }

  // 3) instanceof 연산자로 object narrowing
  // object 두 개가 비슷하면 부모 class가 누군지 물어봐서 narrowing 가능
  let currentDate = new Date();
  if (currentDate instanceof Date) {
    console.log(currentDate);
  }

  // 4) literal type을 사용한 object narrowing
  // object 타입이 둘 다 똑같은 경우 in 키워드 사용 불가
  // 부모 class도 없어서 instanceof 사용 불가
  // --> 비슷한 object 타입일 경우, literal 타입(아래서 wheel)을 강제로 만들어 구분자로 활용
  type Vehicle = {
    wheel: "4ea";
    color: string;
  };
  type Bike = {
    wheel: "2ea";
    color: string;
  };
  function test24(a: Vehicle | Bike) {
    if (a.wheel === "4ea") {
      console.log(a.color);
    }
  }
}
// twotwo()

// ---------- 2-3. 함수에 사용하는 never 타입도 있긴 합니다 ----------
function twothree() {
  // function return 값에 붙일 수 있는 never type
  // 조건 1. return 값이 없어야 함
  // 조건 2. endpoint가 없어야 함

  // endpoint가 없는 함수란 (무한히 반복하는 함수)
  function test1(): never {
    while (true) {
      console.log();
    }
  }

  // 실제 코딩 생활에서의 never타입 쓰는 법
  // : 대부분 쓸 일 없음(void로 대체 가능)

  // never 타입 등장하는 경우 1 - narrowing 이상하게 작성
  // cf) 함수 선언식(function(){})은 블록 스코프가 아님 ⭐️ (test2를 function으로 작성하면 중복 에러)
  const test2 = (param: string) => {
    if (typeof param === "string") {
      console.log(param);
    } else {
      // param의 타입: never
      console.log(param);
    }
  };

  // never 타입 등장하는 경우 1 - 어떤 함수표현식은 return 타입이 자동으로 never
  // test3은 never타입
  let test3 = function () {
    throw new Error();
  };
}
// twothree();

// ---------- 2-4. public, private 쓰는거 보니까 타입스크립트 귀여운편 ----------
function twofour() {
  // class 많이 만들어서 개발하려면 public, private, protected, static 키워드 유용
  class User {
    public name: string = "kenny";
    private familyName: string = "kim";
    constructor(a: string) {
      this.name = a;
    }
    public func() {}
    public changeFamilyName(a: string) {
      this.familyName = a;
    }
  }

  // - public: 모든 자식들이 사용/수정/변경 가능 (default 값이라 굳이 public 선언해줄 필요 없음)
  let user1 = new User("sisca");
  user1.name = "monedero";

  // - private: class 안에서만 속성 사용/수정/변경 가능
  // 데이터를 외부로부터 보호하고 싶을 때 자주 사용하는 패턴
  let user2 = new User("kwangmin");
  // user2.familyName = "lee"; - 에러: class 안에서만 사용/수정/변경 가능

  // private 속성을 class 밖에서 변경하고 싶을 경우
  // --> class 내부에 속성을 변경하는 함수를 정의한 다음, class 밖에서 이를 사용
  user2.changeFamilyName("lee");
  console.log(user2); // User {name: 'kwangmin', familyName: 'lee'}

  // cf) public 키워드를 쓰면 this.name 과 같은 선언 생략 가능
  class Person {
    constructor(public name: string) {}
  }
  let person1 = new Person("kim");
  console.log(person1); // Person {name: 'kim'}
}
// twofour();

// ---------- 2-5. class에서 사용가능한 protected, static 키워드 ----------
function twofive() {
  // 클래스를 복사하고 싶을 경우에도 extends 사용하면 됨
  class User {
    x = 10;
  }
  class NewUser extends User {}
  let human = new NewUser();
  console.log(human); // NewUser {x: 10}

  // protected도 class 안에서만 속성 사용/수정/변경 가능

  // private과 protected의 차이점
  // private: 해당 클래스 안에서만 속성 사용/수정/변경 가능
  // protected: extends 된 클래스 안에서 속성 사용/수정/변경 가능

  class Human {
    protected x = 10;
  }

  class NewHuman extends Human {
    x = 20; // x를 20으로 변경 / private에서는 변경 불가
  }

  let newHuman = new NewHuman();
  console.log(newHuman); // NewHuman {x: 20}

  // static을 사용하게 되면 해당 속성 자식에게 물려주지 않음
  // 부모 class에만 직접 부여됨
  class Car {
    static x = 10;
    y = 20;
  }

  let children = new Car();
  console.log(children); // Car {y: 20} - x는 static이므로 상속받지 못함
  console.log(Car.x); // 10 - 부모에 직접 접근할 경우에만 x 사용 가능
  Car.x = 20;
  console.log(Car.x); // 20 - 수정 & 변경 가능

  class Hyundai extends Car {}
  let children2 = new Hyundai();
  console.log(children2); // Hyundai {y: 20} - static속성은 extends해도 상속되지 않음

  // 일반적으로 클래스의 속성에 접근하기 위해서는 객체를 먼저 생성해야함
  // static의 경우, 객체를 생성하지 않고, 바로 클래스 객체에 접근할 수 있음
  class Number {
    static x = 10;
    y = 20;
  }

  let john = new Number();
  // john.x; //불가능
  Number.x; //가능

  // static은 다른 접근제한자와 함께 사용할 수 있음
  class Animal {
    public static bark = "meow";
  }

  // static의 사용
  // 1) class 안에 간단한 메모
  // 2) 기본 설정값을 입력
  // 3) class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용

  // 활용
  class Employee {
    static dept = "sales";
    intro = Employee.dept + "부서 소속입니다. "; // static 키워드는 this 사용 불가
  }

  let kenny = new Employee();
  console.log(kenny); // Employee {intro: 'sales부서 소속입니다. '}
  Employee.dept = "marketing";
  let sisca = new Employee();
  console.log(sisca); // Employee {intro: 'marketing부서 소속입니다. '}

  // (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
}
twofive();

// ---------- 2-6.  ----------
// ---------- 2-7. 타입도 import export 해서 씁니다 그리고 namespace ----------

// Namespace 문법 (함수 안에 선언 불가하여 밖에 뺌)
// import/export 없던 시절에 변수명이 겹치는 에러를 막기 위해 namespace로 스코프를 만들어 사용함
namespace test1 {
  export type Name = string | number;
}
let variable: test1.Name = "kim";

function twoseven() {
  // 초기 버전에는 import export 기능이 없어서 html에 script파일을 추가하는 방식으로 작업함
  // --> 변수명이 자꾸 겹치는 문제점 발생 --> import/export 기능 추가됨
}
twoseven();

// ---------- 2-8. 타입을 파라미터로 입력하는 Generic ----------
function twoeight() {
  // Generic의 필요성
  function test1(x: unknown[]) {
    return x[0];
  }
  let a = test1([4, 2]); // a = 4이나, type은 unknown임

  // Generic (a.k.a Type Parameter)
  // 파라미터로 타입을 입력하는 함수
  function test2<T>(x: T[]): T {
    return x[0];
  }
  let b = test2<number>([4, 2]); // b = 4이며, type은 number
  let c = test2<string>(["4", "2"]); // c = "4"이며, type은 string

  // Generic 함수 장점: 확장성 높음(매번 다른 타입 출력 가능)

  // 타입 파라미터 제한두기
  // 아래에서 x의 타입이 아직 불확실하기 때문에 에러 발생
  // --> extends 키워드 사용해야 함
  function test3<T extends number>(x: T) {
    return x - 1;
  }

  // 커스텀 타입으로도 파라미터 제한 가능
  interface LengthCheck {
    length: number;
  }
  function test4<T extends LengthCheck>(x: T) {
    return x.length;
  }
  let d = test4<string[]>(["100"]);
}
twoeight();
// ---------- 2-9. React + TypeScript 사용할 때 알아야할 점 ----------
function twonine() {
  // jsx 문법이라서 메모장에 별도 정리함
}
twonine();

// ---------- 2-10. React + TypeScript 사용할 때 알아야할 점 2 : Redux toolkit ----------
function twoten() {
  // jsx 문법이라서 메모장에 별도 정리함
}
twoten();

// ---------- 2-11. array 자료에 붙일 수 있는 tuple type ----------
function twoeleven() {
  // 일반적으로 array에 타입 지정하는 법
  let dog: (string | boolean)[] = ["milky", true];

  // tuple type
  // 엄격하게 array에 타입 지정 (요소의 순서에 맞게 지정)
  // ?는 맨 뒤에만 입력할 수 있음 (중간에 치면 순서가 애매해짐)
  let cat: [string, boolean?] = ["wengweng", true];

  // 함수에서 사용하는 tuple
  // rest parameter에 활용하기
  function test(...x: [number, string]) {
    console.log(x);
  }
  test(1, "hello");

  // array를 합칠 경우 tuple 타입 지정
  let arr1 = [1, 2, 3];
  let arr2: [number, number, ...number[]] = [4, 5, 6, ...arr1];

  // (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
  let coffee: [string, number, boolean] = ["dunkin", 500, true];

  // (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
  // let arr = ['동서녹차', 4000, true, false, true, true, false, true]
  let arr: [string, number, ...boolean[]] = [
    "동서녹차",
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
  ];

  // (숙제3) 함수에 타입지정을 해보도록 합시다.
  function homework(...param: [string, boolean, ...(string | number)[]]) {
    console.log(param);
  }
  homework("hello", true, 2, 3, "4");

  // (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
  function separator(...param: (string | number)[]) {
    let arr1 = [];
    let arr2 = [];
    for (let a of param) {
      if (typeof a === "string") {
        arr1.push(a);
      } else {
        arr2.push(a);
      }
    }
    console.log(arr1);
    console.log(arr2);
  }
  separator("a", 1, "b", 2, "c", 3);
}
// twoeleven();

// ---------- 2-12. 외부 파일 이용시 declare & 이상한 특징인 ambient module ----------
function twotwelve() {
  // 메모장에 별도 정리함
}
twotwelve();

// ---------- 2-13. d.ts 파일 이용하기 ----------
function twothirteen() {
  // test.d.ts 파일에서 import 해 옴
  let age: a.Umur = 18;

  // jQuery와 같은 라이브러리의 경우 ts 홈페이지에서 찾아보기
}
twothirteen();

// ---------- 2-14. implements 키워드 ----------
function twofourteen() {
  interface CarType {
    model: string;
    tax: (price: number) => number;
  }

  // implements 키워드는 해당 class에 interface의 속성이 모두 있는지 확인하기 위한 용도로 사용
  // 모든 속성을 갖고 있으면 문제 없고, 빠진 속성이 있으면 에러로 알려줌
  // --> ⭐️ 타입 지정하는 문법이 아님 (타입 지정은 extends로)
  class Car implements CarType {
    model: string; ///any 타입됨
    tax(a: number) {
      ///a 파라미터는 any 타입됨
      return a * 0.1;
    }
  }
}
twofourteen();

// ---------- 2-15. object index signatures ----------
function twofifteen() {
  // index signature 사용하면 object 타입지정 한번에 가능

  // 기존
  interface UserType {
    name: string;
    age: string;
    location: string;
  }

  let user: UserType = {
    name: "kim",
    age: "12",
    location: "seoul",
  };

  // index signature 사용
  interface UserType2 {
    [key: string]: string | number; // key값이 string인 속성들은 모두 string | number 값을 가짐
  }

  let user2: UserType2 = {
    name: "kim",
    age: 12,
    location: "seoul",
  };

  // recursive 타입
  interface CSSType {
    color: CSSType | number;
  }

  let css: CSSType = {
    color: {
      color: {
        color: 14, // 타입 지정 안해줘도 자동으로 number로 읽긴 함
      },
    },
  };

  // (숙제1) 다음 자료의 타입을 지정해보십시오.

  // 이렇게 하면 유연한 타입 지정이 가능하나, 엄격하지 않아 버그를 잡는데 유용하지 못한다는 단점 존재
  interface Obj {
    [key: string]: string | number;
  }
  let obj: Obj = {
    model: "k5",
    brand: "kia",
    price: 6000,
    year: 2030,
    date: "6월",
    percent: "5%",
    dealer: "김차장",
  };

  // (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오.
  interface Obj2 {
    [key: string]: Obj2 | number;
  }
  let obj2: Obj2 = {
    "font-size": 10,
    secondary: {
      "font-size": 12,
      third: {
        "font-size": 14,
      },
    },
  };
}
twofifteen();

// ---------- 2-16. object 타입 변환기 만들기 ----------
// 부제 : 타입을 프로그래밍스럽게 지정해보기
function twosixteen() {
  // Object.keys()
  let obj = { name: "kim", age: 18 };
  Object.keys(obj); // ["name", "age"] - object에 있는 모든 key값들을 array에 담아서 반환

  // key값을 전부 가져오는 keyof
  interface Person {
    age: number;
    name: string;
  }

  type PersonKeys = keyof Person;
  let a: PersonKeys = "name";

  // 타입 변환기 만들기 mapping
  type Car = {
    color: boolean;
    model: boolean;
    price: boolean | number;
  };

  type TypeChanger<T> = {
    [key in keyof T]: string; // keyof T: "color" | "model" | "price"
  };

  type newCar = TypeChanger<Car>; // value의 타입이 다 string으로 변경됨

  // (숙제1) 다음 타입을 변환기를 돌려보십시오.

  type Bus = {
    color: string;
    model: boolean;
    price: number;
  };

  type BusChanger<T> = {
    [key: string]: string | number;
  };

  type NewBus = BusChanger<Bus>;

  // (숙제2) 이런 변환기는 어떻게 만들어야할까요?
  // 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.
  type Vehicle = {
    color: string;
    model: boolean;
    price: number;
  };

  type VehicleChanger<MyType, T> = {
    [key in keyof MyType]: T;
  };

  type NewVehicle = VehicleChanger<Vehicle, boolean>;
  type NewVehicle2 = VehicleChanger<Vehicle, string[]>;
}
twosixteen();

// ---------- 2-17. 조건문으로 타입만들기 & infer ----------
function twoseventeen() {
  // 조건문
  // 1) type if문은 삼항연산자로
  // 2) 조건 식은 extends 써야 함
  type Age<T> = T extends string ? string : unknown;
  let a: Age<string>; // string
  let b: Age<number>; // unknown

  // 연습
  // 파라미터로 array 타입을 입력하면 array 첫 자료의 타입을 남김
  // array 타입 말고 다른거 입력하면 any 남김
  type FirstItem<T> = T extends any[] ? T[0] : any;
  let c: FirstItem<string[]>; // string
  let d: FirstItem<number>; // any

  // infer 키워드
  // infer: 왼쪽에서 타입을 추출하는 기능
  // R: 자유롭게 작명해도 되나 R(Return)로 많이 사용함

  // 예제1) array 내부의 타입만 추출하고 싶을 경우(ex. string[]이 아니라 string만 추출)
  // T: string[]  R: string
  type Person<T> = T extends (infer R)[] ? R : unknown;
  type e = Person<string[]>;

  // 예제2) 함수의 return 타입만 추출하고 싶을 경우
  // T: () => void  R: void
  type Generator<T> = T extends () => infer R ? R : unknown;
  type f = Generator<() => void>; // f: void

  // 함수를 넣으면 함수의 return 타입만 추출하고 싶은 경우
  // --> ReturnType이라는 기본 함수 사용하면 알아서 해줌 (위 예제2와 동일한 기능)
  type g = ReturnType<() => string>; // g: string
}
twoseventeen();
