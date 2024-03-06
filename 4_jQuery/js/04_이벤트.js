// 1. 이벤트 연결
// 1) on, off
/*
$("#area1").on("mouseenter", (event) => {
  $(event.target).css("background-color", "beige").text("마우스가 올라감");
});
$("#area1").on("mouseleave", (event) => {
  $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
});
*/

/*
$("#area1").on("mouseenter mouseleave", (event) => {
  if (event.type === "mouseenter") {
    $(event.target).css("background-color", "beige").text("마우스가 올라감");
  } else if (event.type === "mouseleave") {
    $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
  }
});

$("#area1").on("click", (event) => {
  $(event.target)
    .css("background-color", "white")
    .text("")
    .off("mouseenter mouseleave");
  // $(event.target).remove();
});
*/

$("#area1").on({
  mouseenter: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 올라감");
  },
  mouseleave: (event) => {
    $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave");
  },
});

// 2) one
//  : on을 쓰면 클릭할 때마다 alert창이 뜨고, one을 쓰면 첫 번째 클릭시에만 alert 창 뜸
$("#area2").one("click", (event) => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});

// 2. 키보드 이벤트
// : keyup일 때 keyCode가 13인 경우(서버로 전송, 검색결과 페이지로 이동), key보다는 keyCode 사용(한글일 경우)

// keydown, keypress, keyup
/*
// keydonw : 키보드가 눌려질 때
$("#textarea1").keydown((e) => {
  console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
// keypress : 글자가 입력될 때
$("#textarea1").keypress((e) => {
  console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
// keyup : 키보드가 떼어질 때
$("#textarea1").keyup((e) => {
  console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
*/

$("#textarea1").on({
  keydown: (e) => {
    console.log(`keypdown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keypress: (e) => {
    console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keyup: (e) => {
    console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
});

// 동적으로 글자 수 세기
$("#textarea2").keyup((e) => {
  let target = $(e.target);
  let currentLength = target.val().length; // textarea2의 value 값에 접근 후 값의 길이

  let maxLength = parseInt($("#maxLength").text()); // maxLength의 타입 : String 이기 때문에 parseInt를 써서 Int로 형 변환
  // console.log(typeof maxLength);

  if (currentLength > maxLength) {
    target.val(target.val().substr(0, maxLength));
  } else {
    $("#counter").text(currentLength); // counter 텍스트 변환
  }
});

// 동적으로 아이디 조건 확인
$("#userId").keyup((e) => {
  let id = $(e.target).val(); // 인풋 입력값 접근 - 제이쿼리 방식
  id = e.target.value; // 인풋 입력값 접근 - 자바스크립트 방식

  console.log(id);
  const regExp = /^[a-z][a-z0-9]{3,11}$/; // [a-z]로 첫 글자를 빼뒀기 때문에 {3,11}
  console.log(regExp.test(id));

  if (regExp.test(id)) {
    $("#idCheck").text("사용 가능한 아이디입니다.").css("color", "green");
  } else if (id === "") {
    $("#idCheck").text("");
  } else {
    $("#idCheck").text("사용 불가능한 아이디입니다.").css("color", "red");
  }
});

// 3. trigger() 메서드
$("#area3").click(() => {
  let counter = $("#counter2");
  let currentCount = parseInt(counter.text());
  counter.text(++currentCount);
});

$("#btn").click(() => {
  $("#area3").trigger("click"); // area3에 걸려있는 click 이벤트 가져오기
});
