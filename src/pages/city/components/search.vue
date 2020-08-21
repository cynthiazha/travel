<template>
  <div>
    <div class="search_content">
      <input type="text" class="user_val" placeholder="请输入城市的名称或拼音" v-model="keywords"/>
    </div>
    <div class="search_result" v-show="keywords" ref="searchContent">
      <ul class="city-list">
        <li class="item" v-for="city in resultlist" :key="city.id">
          {{city.name}}
        </li>
        <li class="item" v-show="!resultlist.length">暂无相关城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'citySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      resultlist: [],
      keywords: '',
      timer: null
    }
  },
  mounted () {
    this.Bscroll = new BScroll(this.$refs.searchContent)
  },
  watch: {
    keywords () {
      if (!this.keywords) {
        this.resultlist = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const arr = []
        for (const i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keywords) > -1 || value.name.indexOf(this.keywords) > -1) {
              arr.push(value)
            }
          })
        }
        this.resultlist = arr
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variable.scss';
  .search_content{
    height: 50px;
    padding: 8px 20px;
    background-color: $bgColor;
    box-sizing: border-box;
    .user_val{
      width: 100%;
      height: 100%;
      padding: 0 10px;
      background-color: #fff;
      border-radius: 30px;
      border: 0;
      text-align: center;
      color: #666;
      box-sizing: border-box;
      &:focus{
        outline: none;
      }
    }
  }
  .search_result{
    position: absolute;
    left: 0;
    right: 0;
    top: 93px;
    bottom: 0;
    overflow: hidden;
    z-index: 10;
    background-color: #eee;
    .city-list{
      .item{
        padding-left: 10px;
        line-height: 34px;
        color: #666;
        border-bottom: .5px solid #ddd;
        font-size: 14px;
        background-color: #fff;
      }
    }
  }
</style>
