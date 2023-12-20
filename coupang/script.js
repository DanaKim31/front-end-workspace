const navIcons = document.querySelectorAll(".header-main-bottom i");
const aList = document.querySelectorAll(".header-main-bottom a"); // 쿠팡플레이, 로켓배송... a 태그 리스트

// 왼쪽으로 이동 버튼(인덱스 0) 설정
navIcons[0].addEventListener("click", function () {
  aList.forEach((a) => {
    a.classList.remove("header-main-bottom-right");
  });
});
// 오른쪽으로 이동 버튼(인덱스 1) 설정
navIcons[1].addEventListener("click", function () {
  aList.forEach((a) => {
    a.classList.add("header-main-bottom-right");
  });
});

// main
const mainImg = document.querySelectorAll("main > img");

// 첫 번째 이미지에 main-img-active 클래스가 추가되어 있어요!
setInterval(() => {
  for (let i = 0; i < mainImg.length; i++) {
    const className = "main-img-active";

    // 첫 번째 이미지에서는 클래서 제거, 두 번째 이미지에 클래스 추가
    // 두 번째 이미지에서는 클래스 제거, 세 번째 이미지에 클래스 추가
    // 마지막 이미지에서는 클래스 제거, 첫 번째 이미지에 클래스 추가

    if (mainImg[i].classList.contains(className)) {
      mainImg[i].classList.remove(className);

      // 마지막번째만 예외 처리
      if (i === mainImg.length - 1) {
        mainImg[0].classList.add(className);
        break;
      }

      mainImg[i + 1].classList.add(className);
      break;
    }
  }
  // 2초(2000) 간격으로 이미지 변환
}, 2000);

// 사용자가 스크롤을 내리는 순간 어느 시점에 나타나고
// 다시 올리면 사라지는..!
const categoryMenu = document.querySelector(".category-menu");
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (this.window.scrollY >= 1300) {
    categoryMenu.style.display = "flex";
  } else {
    categoryMenu.style.display = "none";
  }
});
