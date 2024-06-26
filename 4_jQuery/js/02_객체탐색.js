// 1. Filtering 메서드
// 선택된 요소들 중 첫 번째 요소를 가져와서 스타일 변경
$("h4").first().css("font-size", "4rem");
$("h4:first").css("color", "red");
$("h4").filter(":first").css("background-color", "yellow");

// 선택된 요소들 중 마지막 요소를 가져와서 스타일 변경 (last)
$("h4:last").css("font-size", "3rem");

// 선택된 요소들 중 세 번째 요소를 가져와서 스타일 변경 : eq(인덱스 0부터 시작)
$("h4:eq(2)").css("color", "pink").text("eq에 의해 선택되었습니다.");

// 선택된 요소들 중 홀수 인덱스의 요소를 가져와서 스타일 변경 : odd / 짝수 : even
$("h4:odd").css({ "background-color": "hotpink", color: "white" });

// 선택된 요소들 중 특정 요소가 아닌 요소들을 선택해서 스타일 변경
//$("h4").filter(":not(.test)")
//$("h4").not(".test")
$("h4:not(.test)").css({ "background-color": "orange", color: "white" });

// 2. Ancestors 메서드
// 선택된 요소의 바로 상위에 있는 부모 요소
console.log($("span").parent());
// 선태된 요소의 모든 상위 요소
console.log($("span").parents());

// span 요소의 부모 요소에 스타일 적용
$("span").parent().css({ color: "red", border: "2px solid" });

// li 요소의 모든 상위 요소에 스타일 적용
$("li").parents().css("color", "blue");

// li 요소의 상위 요소 중 div만 스타일 적용
$("li").parents("div").css("border", "2px dashed tomato");

// span 요소부터 div 요소 이 전까지 상위 요소에 스타일 적용
$("span").parentsUntil("div").css("background-color", "lavenderblush");

// 3. Descendants 메서드
let style1 = { color: "deeppink", border: "2px solid" };
let style2 = { color: "blue", border: "2px solid" };
let style3 = { color: "green", border: "2px solid" };
let style4 = { color: "purple", border: "2px solid" };
let style5 = { color: "orange", border: "2px solid" };

console.log($(".wrap").children()); // wrap 태그의 자식 태그(div 두개)
console.log($(".wrap").find("span")); // wrap 태그 하위의 span 태그(span 두개)

// 클래스가 wrap인 요소의
// 자식 요소들에 style1 적용
$(".wrap").children().css(style1);
// 자식의 자식 요소들에 style2 적용
$(".wrap").children().children().css(style2);
// 자식의 자식 요소 중 ul 태그에 style3 적용
$(".wrap").children().children("ul").css(style3);
// 자식의 자식의 자식 요소 중 li 태그에 style4 적용
$(".wrap").children().children().children("li").css(style4);
// 모든 하위 요소 중 span 태그에 style5 적용
$(".wrap").find("span").css(style5);

// 4. Sideways 메서드
// h2 요소의 형제 요소들에 style3 적용
$(".wrap2 h2").siblings().css(style3);
// h2 요소의 형제 요소 중 p 요소에 style2 적용
$(".wrap2 h2").siblings("p").css(style2);
// h2 요소의 다음 형제 요소에 style2 적용
$(".wrap2 h2").next().css(style1);
// h2 요소의 다음에 오는 모든 형제 요소에 스타일 적용
$(".wrap2 h2").nextAll().css("background-color", "pink");
// h2 요소 이후부터 p 요소 이전에 모든 형제 요소에 스타일 적용
$(".wrap2 h2").nextUntil("p").css("border", "dashed");
// h2 요소의 이전(prev) 형제 요소에 style5 적용
$(".wrap2 h2").prev().css(style5);
// h2 요소의 이 전에 오는 모든 형제 요소에 스타일 적용
$(".wrap2 h2").prevAll().css("background-color", "moccasin");
// h2 요소의 이전에 오는 모든(prevUntil) 형제 요소에 스타일 적용
$(".wrap2 h2").prevUntil().css("font-size", "2rem");
