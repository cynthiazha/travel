<template>
  <div class="city_content">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotcity="hotCity" :cities="cities" :activeLetter="activeLeftletter" @change="handleLeftLetterChange"></city-list>
    <letter :cities="cities" :activeLetter="activeRightLetter" @change="handRightLetterChange"></letter>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import Letter from './components/letter'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Letter
  },
  data () {
    return {
      hotCity: [],
      cities: {},
      activeLeftletter: '',
      activeRightLetter: 'A'
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('/api/city.json').then(res => {
        const result = res.data
        if (result.code === 1 && result.data) {
          this.hotCity = result.data.hotCities
          this.cities = result.data.cities
        }
      })
    },
    handRightLetterChange (letter) {
      this.activeLeftletter = letter
    },
    handleLeftLetterChange (letter) {
      this.activeRightLetter = letter
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
