// react npm 명령어
// 새로운 프로젝트: npx create-react-app my-app --template typescript
// 기존 프로젝트: npm install --save typescript @types/node @types/react @types/react-dom @types/jest
// ---------- 1-3. 타입스크립트 기본 타입 정리 (primitive types) ----------
function onethree() { }
// primitive type 지정
let kenny = "kenny";
// array type 지정
let array = ["kim", "lee"];
// object type 지정(?을 넣어주면 들어올 수도 있고 안들어올 수도 있음)
let object = { name: "kim" };
// Union Type
let myname = "kim";
myname = 123;
let test = 123;
// 함수 type 지정
function multiply2(x) {
    return x * 2;
}
const multiply3 = (x) => {
    return x * 3;
};
let john = [123, false];
let sam = { name: "kim", age: 123 };
// class 문법
class User {
    constructor(name) {
        this.name = name;
    }
}
// 대부분 타입을 지정해주지 않아도 타입스크립트에서 값을 확인하여 자동으로 타입을 지정해줌
const test2 = "kenny";
const test3 = 123;
// Q1.
const myInfo = {
    song: "lush life",
    singer: "zara larsson",
};
let project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
let arr = [1, 2, 3, "kim"];
let obj = { a: 123 };
// any보다는 unknown을 사용해야함
// any는 타입에러를 잡아주지 못함
let test4;
test4 = 123;
test4 = "123";
let test5;
test5 - 1;
// 아래와 같이 union type 지정 시, test6의 타입이 확실하지 않기 때문에 연산 에러
let test6;
// test6 - 1
let user = "kim";
let age = undefined;
let married = false;
let chulsoo = [user, age, married];
let 학교 = {
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
let test7 = (x) => {
    return x * 3;
};
let test8 = (x) => {
    console.log(x * 2);
};
// test8()
// let test9 = (x?: number): number => {
//   return x * 2;
// };
// test9();
const test10 = (name) => {
    if (name)
        return "안녕하세요 " + name;
    else
        return "이름이 없습니다.";
};
const test11 = (x) => {
    return x.toString.length;
};
const test12 = (income, house, charm) => {
    let x = income;
    let y = 0;
    let z = 0;
    if (house === true)
        y = 500;
    if (charm === "상")
        z = 100;
    if (x + y + z >= 600)
        return "결혼가능";
    else
        return "";
};
// Type Narrowing
// Type이 아직 하나로 확정되지 않았을 경우 사용
const test13 = (x) => {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
};
const test14 = (x) => {
    let array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
};
// Type Assertion (타입 덮어쓰기) as --> 정말 필요할 때만 사용해야함
// 1. Narrowing할 때 사용 (type을 변경할 때 쓰이는 것이 아닌 확정할 때 쓰임 (number | string과 같은 상황에서))
// 2. 무슨 타입이 들어올지 100% 확실할 때
const test15 = (x) => {
    let array = [];
    array[0] = x;
};
test15("123"); // as 문법의 한계: test15에 string을 넣어줘도 에러를 반환하지 못함
let monkey = "monkey";
let kwangmin = { name: "kim", age: 10 };
const girlfriend = { name: "Sisca" };
let position = { x: 10, y: 20 };
// Literal Type
// 더 엄격한 타입 지정 기능 (const의 업그레이드 버젼이라고 생각)
let familyName;
// familyName = "lee" --> 에러
familyName = 1;
const test17 = (x) => {
    console.log(x);
};
const test18 = (x) => {
    // return 2; --> 에러
    return 1;
};
const rsp = (x) => {
    return ["가위"];
};
// as const
// object 자료를 완점히 잠가놓고 싶으면 사용
// 1. object value 값을 그대로 타입으로 지정해줌
// 2. object 속성들에 모두 readonly 붙여줌
let data = { name: "kim" }; // as const 가 없으면 에러
function test19(a) { }
test19(data.name);
const func = (a) => {
    console.log(a);
    return 10;
};
const info1 = {
    name: "kim",
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log("lee");
    },
};
info1.plusOne(1);
info1.changeName();
const cutZero = (x) => {
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
let title1 = document.querySelector("#title");
// 4. Object에 붙이는 ? (?: optional chaining 이라 부름)
if ((title === null || title === void 0 ? void 0 : title.innerHTML) !== undefined) {
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
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () { });
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
        constructor(name) {
            this.data = 0;
            this.name = name;
        }
        func(a) {
            console.log("hello " + a);
        }
    }
    let human1 = new Human("kim");
    let human2 = new Human("park");
    console.log(human1.func("kenny")); // "hello kenny"
    let box1 = { color: "red", width: 100 };
    let box2 = { color: "red", width: 100 };
    let student = { name: "kim" };
    let teacher = { name: "lee", age: 100 };
    let product = {
        brand: "Samsung",
        serialNumber: 1360,
        model: ["TV", "phone"],
    };
    let cart1 = [
        { product: "청소기", price: 7000 },
        { product: "삼다수", price: 800 },
    ];
    let cart2 = { product: "청소기", price: 7000, card: false };
    let obj4 = {
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
    function restparam(...a) {
        console.log(a);
    }
    restparam(1, 2, 3, 4, 5);
    // destructuring 설명
    let [var1, var2] = ["hello", 123];
    // var1 === "hello", var2 === 123
    let { student1, age1 } = { student1: true, age1: 20 };
    let obj1 = { student: true, age: 20 };
    // function objtest({ student, age }: { student: boolean; age: number }) { 이렇게 해도 됨
    function objtest({ student, age }) {
        console.log(student, age);
    }
    objtest(obj1);
    // (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
    function returnMaxNum(...arr) {
        let max = Number.MIN_SAFE_INTEGER;
        for (let x of arr) {
            if (x > max)
                max = x;
        }
        return max;
    }
    returnMaxNum(1, 2, 3, 4, 5);
    // (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
    function test20({ user, comment, admin, }) {
        console.log(user);
        console.log(comment);
        console.log(admin);
    }
    test20({ user: "kim", comment: [3, 5, 4], admin: false });
    function test21([a, b, c]) {
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
    function test22(a) {
        // a가 undefined면 if문 실행이 안됨
        // a가 string이면 if문 실행됨
        if (a && typeof a === "string") {
            console.log(a);
        }
    }
    // 2) in 키워드를 사용한 object narrowing
    // 두 object가 상이한 key값을 갖고 있을 경우 사용하면 좋음
    function test23(animal) {
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
    function test24(a) {
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
    function test1() {
        while (true) {
            console.log();
        }
    }
    // 실제 코딩 생활에서의 never타입 쓰는 법
    // : 대부분 쓸 일 없음(void로 대체 가능)
    // never 타입 등장하는 경우 1 - narrowing 이상하게 작성
    // cf) 함수 선언식(function(){})은 블록 스코프가 아님 ⭐️ (test2를 function으로 작성하면 중복 에러)
    const test2 = (param) => {
        if (typeof param === "string") {
            console.log(param);
        }
        else {
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
        constructor(a) {
            this.name = "kenny";
            this.familyName = "kim";
            this.name = a;
        }
        func() { }
        changeFamilyName(a) {
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
        constructor(name) {
            this.name = name;
        }
    }
    let person1 = new Person("kim");
    console.log(person1); // Person {name: 'kim'}
}
// twofour();
// ---------- 2-5. class에서 사용가능한 protected, static 키워드 ----------
function twofive() {
    // 클래스를 복사하고 싶을 경우에도 extends 사용하면 됨
    class User {
        constructor() {
            this.x = 10;
        }
    }
    class NewUser extends User {
    }
    let human = new NewUser();
    console.log(human); // NewUser {x: 10}
    // protected도 class 안에서만 속성 사용/수정/변경 가능
    // private과 protected의 차이점
    // private: 해당 클래스 안에서만 속성 사용/수정/변경 가능
    // protected: extends 된 클래스 안에서 속성 사용/수정/변경 가능
    class Human {
        constructor() {
            this.x = 10;
        }
    }
    class NewHuman extends Human {
        constructor() {
            super(...arguments);
            this.x = 20; // x를 20으로 변경 / private에서는 변경 불가
        }
    }
    let newHuman = new NewHuman();
    console.log(newHuman); // NewHuman {x: 20}
    // static을 사용하게 되면 해당 속성 자식에게 물려주지 않음
    // 부모 class에만 직접 부여됨
    class Car {
        constructor() {
            this.y = 20;
        }
    }
    Car.x = 10;
    let children = new Car();
    console.log(children); // Car {y: 20} - x는 static이므로 상속받지 못함
    console.log(Car.x); // 10 - 부모에 직접 접근할 경우에만 x 사용 가능
    Car.x = 20;
    console.log(Car.x); // 20 - 수정 & 변경 가능
    class Hyundai extends Car {
    }
    let children2 = new Hyundai();
    console.log(children2); // Hyundai {y: 20} - static속성은 extends해도 상속되지 않음
    // 일반적으로 클래스의 속성에 접근하기 위해서는 객체를 먼저 생성해야함
    // static의 경우, 객체를 생성하지 않고, 바로 클래스 객체에 접근할 수 있음
    class Number {
        constructor() {
            this.y = 20;
        }
    }
    Number.x = 10;
    let john = new Number();
    // john.x; //불가능
    Number.x; //가능
    // static은 다른 접근제한자와 함께 사용할 수 있음
    class Animal {
    }
    Animal.bark = "meow";
    // static의 사용
    // 1) class 안에 간단한 메모
    // 2) 기본 설정값을 입력
    // 3) class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용
    // 활용
    class Employee {
        constructor() {
            this.intro = Employee.dept + "부서 소속입니다. "; // static 키워드는 this 사용 불가
        }
    }
    Employee.dept = "sales";
    let kenny = new Employee();
    console.log(kenny); // Employee {intro: 'sales부서 소속입니다. '}
    Employee.dept = "marketing";
    let sisca = new Employee();
    console.log(sisca); // Employee {intro: 'marketing부서 소속입니다. '}
    // (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
}
twofive();
let variable = "kim";
function twoseven() {
    // 초기 버전에는 import export 기능이 없어서 html에 script파일을 추가하는 방식으로 작업함
    // --> 변수명이 자꾸 겹치는 문제점 발생 --> import/export 기능 추가됨
}
twoseven();
// ---------- 2-8. 타입을 파라미터로 입력하는 Generic ----------
function twoeight() {
    // Generic의 필요성
    function test1(x) {
        return x[0];
    }
    let a = test1([4, 2]); // a = 4이나, type은 unknown임
    // Generic (a.k.a Type Parameter)
    // 파라미터로 타입을 입력하는 함수
    function test2(x) {
        return x[0];
    }
    let b = test2([4, 2]); // b = 4이며, type은 number
    let c = test2(["4", "2"]); // c = "4"이며, type은 string
    // Generic 함수 장점: 확장성 높음(매번 다른 타입 출력 가능)
    // 타입 파라미터 제한두기
    // 아래에서 x의 타입이 아직 불확실하기 때문에 에러 발생
    // --> extends 키워드 사용해야 함
    function test3(x) {
        return x - 1;
    }
    function test4(x) {
        return x.length;
    }
    let d = test4(["100"]);
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
    let dog = ["milky", true];
    // tuple type
    // 엄격하게 array에 타입 지정 (요소의 순서에 맞게 지정)
    // ?는 맨 뒤에만 입력할 수 있음 (중간에 치면 순서가 애매해짐)
    let cat = ["wengweng", true];
    // 함수에서 사용하는 tuple
    // rest parameter에 활용하기
    function test(...x) {
        console.log(x);
    }
    test(1, "hello");
    // array를 합칠 경우 tuple 타입 지정
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6, ...arr1];
    // (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
    let coffee = ["dunkin", 500, true];
    // (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
    // let arr = ['동서녹차', 4000, true, false, true, true, false, true]
    let arr = [
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
    function homework(...param) {
        console.log(param);
    }
    homework("hello", true, 2, 3, "4");
    // (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
    function separator(...param) {
        let arr1 = [];
        let arr2 = [];
        for (let a of param) {
            if (typeof a === "string") {
                arr1.push(a);
            }
            else {
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
    let age = 18;
    // jQuery와 같은 라이브러리의 경우 ts 홈페이지에서 찾아보기
}
twothirteen();
// ---------- 2-14. implements 키워드 ----------
function twofourteen() {
    // implements 키워드는 해당 class에 interface의 속성이 모두 있는지 확인하기 위한 용도로 사용
    // 모든 속성을 갖고 있으면 문제 없고, 빠진 속성이 있으면 에러로 알려줌
    // --> ⭐️ 타입 지정하는 문법이 아님 (타입 지정은 extends로)
    class Car {
        tax(a) {
            ///a 파라미터는 any 타입됨
            return a * 0.1;
        }
    }
}
twofourteen();
// ---------- 2-15. object index signatures ----------
function twofifteen() {
    // index signature 사용하면 object 타입지정 한번에 가능
    let user = {
        name: "kim",
        age: "12",
        location: "seoul",
    };
    let user2 = {
        name: "kim",
        age: 12,
        location: "seoul",
    };
    let css = {
        color: {
            color: {
                color: 14, // 타입 지정 안해줘도 자동으로 number로 읽긴 함
            },
        },
    };
    let obj = {
        model: "k5",
        brand: "kia",
        price: 6000,
        year: 2030,
        date: "6월",
        percent: "5%",
        dealer: "김차장",
    };
    let obj2 = {
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
    let a = "name";
}
twosixteen();
// ---------- 2-17. 조건문으로 타입만들기 & infer ----------
function twoseventeen() {
    let a; // string
    let b; // unknown
    let c; // string
    let d; // any
}
twoseventeen();
export {};
