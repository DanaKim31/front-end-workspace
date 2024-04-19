<template>
  <h1>영화 목록</h1>
  <table>
    <thead>
      <tr>
        <th>제목</th>
        <th>장르</th>
        <th>영화배우</th>
        <th>삭제</th>
      </tr>
    </thead>
    <tbody>
      <!-- v-for : 반복문 -->
      <tr v-for="movie in movies" :key="movie.no">
        <td>{{ movie.title }}</td>
        <td>{{ movie.genre }}</td>
        <td>{{ movie.actor }}</td>
        <td><button @click="deleteMovie(movie.no)">삭제</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import { getMovies, delMovie } from "@/api/movie"; // vuex 버전 아닐 경우(axios 버전) 임포트

export default {
  name: "HomePage",
  /* vuex 안 쓴 버전(axios 버전)
  data() {
    return { movies: [] };
  },
*/
  // vuex 버전
  computed: {
    movies() {
      return this.$store.state.movie.movies;
    },
  },
  created() {
    // methods에서 만든 fetchMovies 함수 호출
    // this.fetchMovies(); // vuex 안 쓴 버전(axios 버전)
    this.$store.dispatch("fetchMovies");
  },
  methods: {
    // getMovies 가져올 메서드
    /*
      async fetchMovies() {
      const response = await getMovies();
      this.movies = response.data; // 영화목록 담김
    },

    async deleteMovie(no) {
      // await delMovie(no); // vuex 안 쓴 버전(axios 버전)
      // await this.fetchMovies(); // 삭제 버튼 후 새로고침 없이 바로 삭제를 위해 재호출
      }
      
*/
    deleteMovie(no) {
      this.$store.dispatch("deleteMovie", no);
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
table {
  width: 900px;
  margin: auto;
  text-align: center;

  th {
    width: 25%;
    font-weight: bold;
  }
  td {
    padding-top: 20px;
  }
  button {
    background: black;
    color: white;
    cursor: pointer;
  }
}
</style>
