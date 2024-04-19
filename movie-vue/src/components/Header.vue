<template>
  <div>
    <a href="/">영화 목록</a>
    <a href="/create">영화 정보 추가</a>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
/* scoped : 현재 컴포넌트에만 적용 됨 */
div {
  background: pink;
  width: 900px;
  margin: auto; /* 페이지 가로 900px 초과 시 가운데 정렬 */
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly; /* scoped 없이 작성 시 Creat.js의 div에도 적용 됨 */
}
</style>
