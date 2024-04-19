<template>
  <div>
    <h1>영화 정보 추가</h1>
    <!-- v-model : React에서 value 지정 후 onChange -->
    <input type="text" v-model="movie.title" placeholder="영화 제목 입력" />
    <input type="text" v-model="movie.genre" placeholder="영화 장르 입력" />
    <input type="text" v-model="movie.actor" placeholder="영화 배우들 입력" />
    <button @click="sendMovie">영화 추가</button>
  </div>
</template>

<script>
import { addMovie } from "@/api/movie";

export default {
  name: "CreatePage",
  data() {
    return {
      movie: {
        // React에서 초기화 설정하던 역할
        title: "",
        genre: "",
        actor: "",
      },
    };
  },

  // 함수
  methods: {
    // 영화 추가 버튼 클릭 매서드
    async sendMovie() {
      await addMovie(this.movie);
      this.movie = { title: "", genre: "", actor: "" };
      this.$router.push("/"); // 홈 페이지로 이동
    },
  },
};
</script>

<style scoped lang="scss">
div {
  width: 900px;
  margin: auto;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  input {
    width: 100%;
    margin: 5px;
    padding: 5px;
    box-sizing: border-box;
  }
  button {
    margin: 5px;
    width: 100%;
    background: black;
    color: white;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
