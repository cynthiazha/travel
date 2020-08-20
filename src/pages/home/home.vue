<template>
  <div>
    <Header :city="city"></Header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <tickets :ticketsList="ticketsList"></tickets>
    <stragety :stragetyList="stragetyList"></stragety>
  </div>
</template>

<script>
import Header from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/homeIcons'
import Tickets from './components/tickets'
import Stragety from './components/travelStragety'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    Tickets,
    Stragety
  },
  data () {
    return {
      city: '',
      iconList: [],
      swiperList: [],
      ticketsList: [],
      stragetyList: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('/api/index.json').then((res) => {
        const result = res.data
        console.log(result)
        if (result.code === 1) {
          this.city = result.data.city
          this.iconList = result.data.iconList
          this.swiperList = result.data.swiperList
          this.ticketsList = result.data.ticketsList
          this.stragetyList = result.data.stragetyList
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
