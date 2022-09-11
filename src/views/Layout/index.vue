<template>
  <div>
    <!-- 导航区域 -->
    <router-view></router-view>
    <!-- 路由模式：拿item的to属性和当前路由的path对比，如果一样的话高亮 -->
    <van-tabbar route>
      <van-tabbar-item to="/ "
        ><template #icon>
          <span class="toutiao toutiao-shouye"></span> </template
        >首页</van-tabbar-item
      >
      <van-tabbar-item to="/video"
        ><template #icon>
          <span class="toutiao toutiao-shipin"></span> </template
        >视频</van-tabbar-item
      >
      <van-tabbar-item to="/qa"
        ><template #icon> <span class="toutiao toutiao-wenda"></span> </template
        >问答</van-tabbar-item
      >
      <van-tabbar-item to="/profile">
        <template #icon><span class="toutiao toutiao-wode"></span> </template
        ><span>我的</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style></style>
