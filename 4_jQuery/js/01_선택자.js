// $(document).ready(function(){});
// 3_JavaScript > 03_DOM.js의 window.addEventListner~ 와 같은 기능
// 줄여서 아래와 같이 작성 가능
$(function () {
  // 1. 태그 선택자
  // 자바스크립트 방식
  const pList = document.querySelectorAll("p");
  for (p of pList) {
    p.style.color = "white";
    p.style.backgroundColor = "tomato";
  }
  // 제이쿼리 방식
  $("h5").css("color", "skyblue").css("background-color", "yellow");

  // 2. 아이디 선택자
  // 자바스크립트 방식 (id1)
  document.querySelector("#id1").style.color = "blue";
  //id1.style.backgroundColor = "salmon";
  // 제이쿼리 방식 (id2)
  $("#id2").css("color", "salmon").css("background-color", "lightblue");

  // 3. 클래스 선택자
  // 제이쿼리 방식(JSON 형식 - 키: 값, 키: 값 )
  $(".item").css({ color: "pink", "background-color": "indigo" });

  // 4. 자식 선택자와 자손 선택자
  // 자손 안에 있는 태그는 띄워쓰기로 접근 가능
  $("div > ul > li").css("color", "green");
  $("div > ul > .ch").css("background-color", "lime");
  $("div > ul > li > h3").css("color", "indianred");
  $("div > h3").css("color", "violet");
  $("div h3").css("background-color", "khaki");

  // 5. 속성 선택자
  // 클래스 값이 있는 태그 선택
  $("#div1 input[class]").css("background-color", "turquoise");
  // val(value의 약자)로 입력값 입력
  $("#div1 input[type=text]").val("change value");
  $("#div1 input[class~=test1]").val("123456789"); // ~= 포함관계, class 명에 test1이 들어가는 input 선택
  $("#div1 input[type^=ra]").prop("checked", true); // ^= 시작, type이 ra로 시작하는 input 선택 > 디폴트 checked로 수정
  $("#div1 input[type$=box").prop("checked", true); // $= 끝, type이 box로 끝나는 input 선택 > 디폴트 checked로 수정
  $("#div1 input[class*=st3") // *= 끝, class 명이 st3로 끝나는 input 선택 > 디자인 적용
    .css({ width: "100px", height: "100px" })
    .val("10000");

  // 6. 입력 양식 선택자
  $("#div2 :text").css("background-color", "pink");
  $("#div2 :button").val("버튼");
  $("#div2 :checkbox").prop("checked", true);
  $("#div2 :file").css("background-color", "yellow");

  // 7. 입력 양식 상태에 대한 선택자
  // 1) input 태그 중 활성화 된 객체 선택
  $("#div3 input:enabled").css("background-color", "lavender");
  // 2) input 태그 중 비활성화 된 객체 선택
  $("#div3 input:disabled").css("background-color", "lightcyan");
  // 3) input 태그 중 체크된 객체 선택
  $("#div3 input:checked").css({ width: "30px", height: "30px" });
  // 4) checkbox에 change 이벤트 핸들러 등록(js에서 addEventListener)
  $("#div3 :checkbox").change(function () {
    console.log(this);
    console.log($(this));
    let checkbox = $(this);
    console.log(checkbox.attr("checked")); // attribute(속성) - checked / undifined
    console.log(checkbox.prop("checked")); // property(속성) - true / false  =>  주로 사용
  });
  // 5) select에 change 이벤트 핸들러 등록 - 국가 인풋에 셀렉트박스에서 선택한 값 노출
  $("#national").change(function () {
    // select 태그의 option 태그 중 선택된 객체 선택
    let value = $("#national > option:selected").val();
    $("#result").val(value);
  });
});
