<template>
  <div>
    <Header></Header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <tickets></tickets>
    <stragety></stragety>
  </div>
</template>

<script>
import Header from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/homeIcons'
import Tickets from './components/tickets'
import Stragety from './components/travelStragety'
export default {
  name: 'home',
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    Tickets,
    Stragety
  }
}
</script>

<style lang="scss" scoped>

</style>
