<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe685;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>
      输入城市景点
    </div>
    <router-link to="/city">
      <div class="header-right">{{currentCity}}<span class="iconfont">&#xe688;</span></div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'homeHeader',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variable.scss';
  .header {
    display: flex;
    height: 43px;
    line-height: 43px;;
    background-color: $bgColor;
    color: #fff;;
    .header-left {
      width: 50px;
      flex-shrink: 0;
      text-align: center;
    }
    .header-input{
      flex: 1;
      height: 30px;
      line-height: 30px;
      margin: 7px 0  0 0;
      padding: 0 10px;
      background-color: #fff;
      border-radius: 5px;
      color: #999;
      overflow: hidden;
      box-sizing: border-box;
    }
    .header-right{
      min-width: 64px;
      padding: 0 5px;
      flex-shrink: 0;
      text-align: center;
      color: #fff;
    }
  }
</style>
