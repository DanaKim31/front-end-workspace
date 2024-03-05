// 1. Content 설정
// 1) html()
// content 영역의 태그와 텍스트를 모두 가져온다.
console.log($("#content1").html()); // <a>네이버로</a>
// content1의 내용(태그 + 텍스트)을 content2에 추가
$("#content2").html($("#content1").html());

// 2) text()
// content 영역의 텍스트만 가져온다.
console.log($("#content3").text()); // 네이버로
// content3의 내용(텍스트)을 content4에 추가
$("#content4").text($("#content3").text());

// 2. 요소 추가
// 1) 자바스크립트와 제이쿼리
const p = document.createElement("p"); // p 태그 추가
p.innerHTML = "자바스크립트로 추가"; // p태그에 텍스트 추가
document.querySelector("#area1").appendChild(p); // 위에서 추가한 p태그를 자식으로 추가

const p2 = $("<p>").html("제이쿼리로 추가"); // p태그에 텍스트 더해서 추가
$("#area1").append(p2); // area1에 append로 위에서 생성한 p2를 자식으로 추가

// 2) 요소 추가 1 -> 부모가 주체
// $(A).append(B) : A 요소의 자식요소로 B 요소를 뒷부분에 추가한다.
$("#area1").append("<span>B</span>");

// $(A).prepend(C) : A 요소의 자식요소로 C 요소를 앞부분에 추가한다.
$("#area1").prepend("<span>C</span>");

// $(A).after(D) : A 요소의 형제요소로 D 요소를 뒷부분에 추가한다.
$("#area1").after("<span>D</span>");

// $(A).after(E) : A 요소의 형제요소로 E 요소를 앞부분에 추가한다.
$("#area1").before("<span>E</span>");

// 3) 요소 추가 2 -> 자식이 주체
// $(B).appendTo(A) : B 요소를 A 요소의 자식요소로 뒷부분에 추가한다.
$("<span>B</span>").appendTo("#area2");

//  $(C).prependTo(A) : C 요소를 A 요소의 자식요소로 앞부분에 추가한다.
$("<span>C</span>").prependTo("#area2");

// $(D).insertAfter(A) : A 요소의 형제요소로 D 요소를 뒷부분에 추가한다.
$("<span>D</span>").insertAfter("#area2");

// $(E).insertBefore(A) : A 요소의 형제요소로 E 요소를 앞부분에 추가한다.
$("<span>E</span>").insertBefore("#area2");

// 3. 요소 복제
/*
    만일 한 개의 이벤트 핸들러가 설정되면 두 이벤트 모두 한 곳에서 적용
     : event 화살표 함수 한개 작성 시 해당 하나의 이벤트에서 모두 mouseenter, mouseleave
    두 개 이상이 되면 해당 이벤트 핸들러의 이벤트가 분리
     : event 화살표 함수 두 개 작성 시 각각 mouseenter, mouseleave로 분리됨
*/
$(".item").hover(
  /*(event) => {
    console.log("event1 : " + event.type); // mouseenter
    console.log(event.target);
    $(event.target).addClass("bg-hotpink");
  },
  (event) => {
    console.log("event2 : " + event.type); // mouseleave
    console.log(event.target);
    $(event.target).removeClass("bg-hotpink");
  }*/
  (event) => {
    $(event.target).toggleClass("bg-hotpink");
  }
);

$("#btn1").click(() => {
  // 이벤트까지 복제하려면 매개값으로 'true'를 전달한다. (생략시 false)
  let item = $("#item1").clone(true);
  $("#clone-result").html(item);
});

// 4. 요소 제거
// 1) remove : 선택된 요소의 이벤트까지 삭제
$("#remove").click(() => {
  let item = $("#item2").remove();
  $("#remove-result").append(item); // 삭제한 아이템 추가
});
// 2) detach
$("#detach").click(() => {
  let item = $("#item2").detach();
  $("#remove-result").append(item);
});
// 3) empty
$("#empty").click(() => {
  $("#remove-test").empty();
});

// 5. 배열 관리
let array = [
  { name: "구글", link: 'https"//google.com' },
  { name: "네이버", link: 'https"//naver.com' },
  { name: "다음", link: 'https"//daum.net' },
];

// 자바스크립트
array.forEach((element, index, origin) => {
  console.log(element);
  console.log(index);
  console.log(origin);
  console.log("javascript---------------");
});

// 제이쿼리 - 데이터 처리에 용이(예전에는 xml 많이 사용했음)
$(array).each((index, element) => {
  console.log(index);
  console.log(element.name);
  console.log(element.link);
  console.log("jQuery---------------");
});

/* $(array).each((index, element) => {
  const result =
    "<h4><a href=" + element.link + ">" + element.name + "</a></h4>";
  $("#each-test").append(result);
}); */

let output = ""; // 1) html 방식 사용 시 반복문 바깥에서 변수 지정
$(array).each((index, element) => {
  // append 방식
  //$("#each-test").append(`<h4><a href="${element.link}">${element.name}</a></h4>`);
  // 2) html 방식
  output += `<h4><a href="${element.link}">${element.name}</a></h4>`;
});
$("#each-test").html(output); // 3) html 방식
