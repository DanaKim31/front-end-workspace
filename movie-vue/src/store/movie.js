import { getMovies, addMovie, delMovie } from "@/api/movie";

export default {
  state: {
    // redux에서 initialState (초기화 값 지정)
    movies: [],
  },
  mutations: {
    // 상태 데이터를 바꿀 때마다 일어나게 함 (상태변경)
    // state : 기존 정보
    setMovies(state, movies) {
      state.movies = movies; // movies1 : 위 state 함수에 있는 값(초기값. 빈배열) / movies2 : 매개변수에 있는 movie
    },
    addMovie(state, movie) {
      state.movies.push(movie); // 초기값 빈배열(state.movies)에 새로 입력받은 값(movie)을 추가(insert)
    },
    removeMovie(state, no) {
      state.movies = state.movies.filter((movie) => movie.no !== no); // 기존 배열에서 선택한 no 항목만 제외하고 다시 담기
    },
  },
  actions: {
    // 비동기 처리. commit :
    async fetchMovies({ commit }) {
      const response = await getMovies();
      commit("setMovies", response.data); // commit이 mutations에 있는 setMovies를 호출하고 response.data(영화목록)를 받아감
    },
    async insertMovie({ commit }, data) {
      const response = await addMovie(data);
      commit("addMovie", response.data);
    },
    async deleteMovie({ commit }, no) {
      await delMovie(no);
      commit("removeMovie", no);
    },
  },
};
