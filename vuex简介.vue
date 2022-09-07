<template>
  <div>
    <!-- <router-view></router-view> -->
    <h1>{{ count }}</h1>
    <h1>count的十倍:{{ bigNum }}</h1>
    <button @click="SET_COUNT(10)">点击count+1</button>
  </div>
</template>

<script>
//   git log查看commit记录
// git status查看当前仓库的状态
// git add·提交到暂存区
// git commit -m
// -feat:新增特性
// style:样式的修改
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  methods: {
    // increment() {
    //   this.$store.commit('SET_COUNT', 10)
    // }
    ...mapMutations(['SET_COUNT'])
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['bigNum'])
  }
}
</script>

<style scoped>
.box {
  width: 3rem;
  height: 3rem;
  background-color: #999;
}
</style>
