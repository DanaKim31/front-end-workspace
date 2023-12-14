// load : 모든 로드가 다 끝나고 아래 함수를 실행시키겠다
// DOMContentLoaded : DOM 구조가 로드 되어도 아래 함수를 실행 시키겠다 (실행 시점이 더 빠름)
/* window.addEventListner("load", function () {
  const h1 = document.querySelector("h1");
  console.log(h1);
});

document.addEventListner("DOMContentLoaded", function () {
  // window == document
  const h1 = document.querySelector("h1");
  console.log(h1);
});
*/

function btn1() {
  console.log(document.head);
  console.log(document.title);
  console.log(document.body);
  console.log(document.h1);

  // 동일한 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByTagName("div");
  console.log(div); // getElement's'ByTagName -> div[0] (div 모두 배열로 가져오기)
  console.log(div[0]); // <div>Hello, World!</div>
  console.log(div[1]); // <div>Hello, JavaScript!</div>
}

function btn2() {
  const div = document.getElementById("testId"); // id는 고유값이기 때문에 getElementById(s없음)
  console.log(div); // <div id="testId">Hello, World!</div> , id는 고유값이므로 console에 하나만 출력
}

function btn3() {
  // 동일한 class 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByClassName("testClass");
  console.log(div); // 2개 (class 속성 2개)
  console.log(div[0]); // <div id="testId" class="testClass">Hello, World!</div>
  console.log(div[1]); // <div id="testId" class="testClass">Hello, JavaScript!</div>
}

function btn4() {
  // 동일한 name 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByName("testName");
  console.log(div); // 2개 (name 속성 2개)
  console.log(div[1]); // <div id="testId" class="testClass" name="testName">Hello, JavaScript!</div>
  console.log(document.testName); // form 태그만 이 형식으로 출력 가능
  console.log(document.frm); // <form action="" name="frm"></form>
}

function btn5() {
  let div = document.querySelector("#testId");
  console.log(div); // <div id="testId">Hello, World!</div> , id는 고유값이므로 console에 하나만 출력
  document.querySelectorAll(".testClass");
  console.log(div); // class 속성 2개
  console.log(div[0]); // <div id="testId" class="testClass" name="testName">Hello, World!</div>
  console.log(div[1]); // <div id="testId" class="testClass" name="testName">Hello, JavaScript!</div>
}

function btn6() {
  const div = document.querySelectorAll(".testClass");
  // textContent : 입력한 값 전체 자체로 변경
  // innerHTML : 태그 안에 입력한 텍스트로만 변경
  div[0].textContent = "<span>안녕하세요</span>"; // 브라우저 화면에 Hello, World! 가 버튼 선택 시 <span>안녕하세요</span> 로 변경
  div[1].innerHTML = "<span>안녕하세요</span>"; // 브라우저 화면에 Hello, JavaScript! 가 버튼 선택 시 안녕하세요 로 변경
}

function btn7() {
  const div = document.querySelector("#testId");
  // setAttribute : 기존에 있던 데이터가 아니면 추가 됨
  div.setAttribute("data-test", "테스트"); // data-test라는 속성이 없어서 data-test=테스트 가 추가 됨
  div.setAttribute("data-test", "테스트2"); // data-test라는 속성이 있기때문에 data-test=테스트를 테스트2 로 변경 됨
  console.log(div.getAttribute("class"));
}

function btn8() {
  const div = document.querySelector("#testId");
  div.style.color = "orange";
  div.style.backgroundColor = "yellow";
}

const div2 = document.querySelector("#testId2");

function btn9() {
  div2.classList.add("black");
}
function btn10() {
  div2.classList.remove("black");
}
function btn11() {
  const check = div2.classList.contains("black");
  if (check) {
    div2.classList.remove("black");
    div2.classList.add("white");
  } else {
    div2.classList.add("black");
    div2.classList.remove("white");
  }
}
function btn12() {
  div2.classList.toggle("black");
}

function btn13() {
  // 자식 객체 생성
  const p = document.createElement("p");
  p.innerHTML = "Lorem Ipsum";
  // 부모 객체 추가
  div2.appendChild(p);
}

function btn14() {
  const p = document.querySelector("p");
  //   div2.removeChild(p);
  p.parentNode.removeChild(p);
}
