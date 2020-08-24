<template>
  <div class="header_content">
    <div class="header_back" v-show="showBackIcon">
      <span class="iconfont">&#xe685;</span>
    </div>
    <div class="header_fixed" v-show="!showBackIcon">
      <router-link to="/">
        <div class="header-left">
          <span class="iconfont">&#xe685;</span>
        </div>
      </router-link>
      <p class="name">城市选择</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showBackIcon: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variable.scss';
  .header_back {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #000;
    border-radius: 50%;
    color: #fff;
  }
  .header_fixed{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 43px;
    line-height: 43px;
    background-color: $bgColor;
    color: #fff;
    text-align: center;
    font-size: 18px;
    z-index: 99;
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
