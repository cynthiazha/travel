<template>
  <div class="header_content">
    <router-link class="header_back" v-show="showBackIcon" tag="div" to="/">
      <span class="iconfont">&#xe685;</span>
    </router-link>
    <div class="header_fixed" v-show="!showBackIcon" :style="opacityStyle">
      <router-link to="/">
        <div class="header-left">
          <span class="iconfont">&#xe685;</span>
        </div>
      </router-link>
      <p class="name">{{sightName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    sightName: String
  },
  data () {
    return {
      showBackIcon: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showBackIcon = false
      } else {
        this.showBackIcon = true
      }
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
