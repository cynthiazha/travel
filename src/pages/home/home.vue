<template>
  <div>
    <Header></Header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <tickets></tickets>
  </div>
</template>

<script>
import Header from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/homeIcons'
import Tickets from './components/tickets'
export default {
  name: 'home',
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    Tickets
  }
}
</script>

<style lang="scss" scoped>

</style>
