<template>
  <div>
    <Header></Header>
    <home-swiper></home-swiper>
    Home
  </div>
</template>

<script>
import Header from './components/header'
import HomeSwiper from './components/swiper'
export default {
  name: 'home',
  components: {
    Header,
    HomeSwiper
  }
}
</script>

<style lang="scss" scoped>

</style>
