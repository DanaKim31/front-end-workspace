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

// category
const categoryBtn = document.querySelector(".category-btn");
const category = document.querySelector(".category");

categoryBtn.addEventListener("mouseenter", function () {
  category.style.display = "flex";
});

category.addEventListener("mouseleave", function () {
  category.style.display = "none";
});

const categoryItems = document.querySelectorAll(".category-item");
const categorySub = document.querySelector(".category-sub");
const categorySubItems = document.querySelectorAll(".category-sub-item");

categoryItems.forEach((item, index) => {
  item.addEventListener("mouseenter", function () {
    categorySub.style.display = "block";
    categorySubItems[index].style.display = "block";
  });
  item.addEventListener("mouseleave", function () {
    categorySubItems[index].style.display = "none";
  });
});
