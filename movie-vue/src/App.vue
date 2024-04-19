<template>
  <!--
    <div>{{ movie }}</div>
  <div>{{ movie.title }}</div>
  // info :data="movie" >> 상위에서 하위 / @child="childHandler" >> 하위에서 상위
  <info :data="movie" @child="childHandler" />
  하위에서 받은 내용 : {{ message }}
  -->
  <router-view name="header" />
  <router-view />
</template>

<script>
/*
import Info from "@/components/Info.vue";
export default {
  name: "App",
  data() {
    return {
      movie: {},
      message: "", // childHandler
    };
  },
  // 데이터가 빠져나간 시점

  // LifeCycle (created, mounted, updated 가장 많이 쓰임)
  // 처음 컴포넌트가 생성되는 순간 : beforeCreate(데이터 초기화 되기 전) -> created(초기화 된 후) -> beforeMount(dom에 접근했을 때?), -> mounted(dom에 올라왔을 때, 화면 단에 띄워졌을 때)
  // dom이 rerendering 됐을 때 : beforeUpdate -> updated
  // dom이 beforeUnmount -> unmounted (vue2 버전 : beforeDestroy -> destroyed)

  mounted() {
    // alert("!");
    this.movie = {
      title: "쿵푸팬더4",
      genre: "애니메이션",
      actor: "잭 블랙, 아콰피나",
    };
  },

  // 컴포넌트 등록
  components: {
    info: Info,
  },
  methods: {
    childHandler(message) {
      // alert(message);
      this.message = message;
    },
  },
};
*/

export default {
  name: "App",
};
</script>

<style></style>
