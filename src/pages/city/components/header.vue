<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont">&#xe685;</span>
      </div>
    </router-link>
    <p class="name">城市选择</p>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variable.scss';
  .header {
    position: relative;
    height: 43px;
    line-height: 43px;
    background-color: $bgColor;
    color: #fff;
    text-align: center;
    font-size: 18px;
    .header-left {
      position: absolute;
      left: 0;
      top: 0;
      width: 50px;
      height: 100%;
      text-align: center;
      color: #fff;
    }
  }
</style>
