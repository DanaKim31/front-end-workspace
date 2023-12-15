const h1 = document.querySelector("h1");
h1.onmouseenter = function () {
  // 마우스 커서가 h1 영역에 들어갔을 때 백그라운드 컬러를 스카이블루로 변경한다는 이벤트 적용
  h1.style.backgroundColor = "skyblue";
};
h1.onmouseleave = function () {
  h1.style.backgroundColor = "pink";
};
// h1.onclick = function () {
//   h1.style.backgroundColor = "purple";
// };

// 위 이벤트(purple)를 addEventListener로 작성
h1.addEventListener("click", function () {
  h1.style.backgroundColor = "purple";
});

const container = document.querySelector(".container");
const img = document.querySelectorAll(".container img");

// 이벤트 객체 - 발생한 이벤트에 대한 많은 정보를 담고 있는 애
function removeHandler(e) {
  // (파라미터를 지정하지 않아도) 이벤트 객체가 숨어있음
  //   container.removeChild(this);
  //   console.log(e.currentTarget); // div 태그
  //   console.log(e.target); // 내가 선택한 이미지 링크
  if (e.target !== e.currentTarget) {
    // e.currentTarget.removeChild(e.target);  -->  img 태그 자체를 지움
    e.target.style.display = "none"; // --> 스타일을 지움
  }
}

container.addEventListener("click", removeHandler);

/*
for (item of img) {
  // 배열에는 반복문이 따라옴
  item.addEventListener("click", removeHandler);
}*/
