<template>
  <div>
    <transition name="van-slide-left" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.box {
  width: 3rem;
  height: 3rem;
  background-color: #999;
}
</style>
