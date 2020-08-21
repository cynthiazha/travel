<template>
  <div class="city_content">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <letter></letter>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
