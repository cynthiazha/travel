<template>
  <div>
    <banner :bannerImgs="bannerImgs"></banner>
    <detail-head :sightName="sightName"></detail-head>
    <list :categoryList="categoryList"></list>
    <div class="info"></div>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from './components/banner'
import DetailHead from './components/header'
import List from './components/list'
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHead,
    List
  },
  data () {
    return {
      bannerImgs: [],
      sightName: '',
      categoryList: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        const result = res.data
        if (result.code === 1) {
          this.bannerImgs = result.data.gallaryImgs
          this.sightName = result.data.sightName
          this.categoryList = result.data.categoryList
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .info {
    height: 300px;
  }
</style>
