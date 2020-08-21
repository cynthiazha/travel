<template>
  <div class="list_content" ref="listContent">
    <div class="wrapper">
      <div class="area">
        <p class="title">当前城市</p>
        <ul class="list">
          <li class="item">{{city}}</li>
        </ul>
      </div>
      <div class="area">
        <p class="title">热门城市</p>
        <ul class="list">
          <li class="item" v-for="item in hotcity" :key="item.id" @click="handleCityChange(item.name)">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div ref="letterContent">
        <div class="area"
          v-for="(item, key) of cities"
          :key="key"
          :ref="key"
        >
          <p class="title">{{key}}</p>
          <ul class="city-list">
            <li class="item" v-for="city in item" :key="city.id" @click="handleCityChange(city.name)">
              {{city.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    hotcity: Array,
    cities: Object,
    activeLetter: String
  },
  data () {
    return {
      scrollY: 0,
      timer: null,
      cityOffsetArr: [] // 每个字母开头城市列表距顶部距离
    }
  },
  computed: {
    letters () {
      const arr = []
      for (const i in this.cities) {
        arr.push(i)
      }
      return arr
    },
    activeLetterIndex () {
      let activeIndex = 0
      activeIndex = this.cityOffsetArr.findIndex((tops, index) => {
        return this.scrollY >= tops && this.scrollY < this.cityOffsetArr[index + 1]
      })
      return (activeIndex > 0 ? activeIndex : 0)
    },
    ...mapState(['city'])
  },
  mounted () {
    const wrapperDom = this.$refs.listContent
    this.Bscroll = new BScroll(wrapperDom, {
      probeType: 3
    })
    this.getScrollVal()
  },
  updated () {
    this.getCityItemOffset()
  },
  watch: {
    activeLetter () {
      const dom = this.$refs[this.activeLetter][0]
      this.Bscroll.scrollToElement(dom, 1000)
    }
  },
  methods: {
    getCityItemOffset () {
      const itemArr = []
      const allList = this.$refs.letterContent.getElementsByClassName('area')
      Array.prototype.slice.call(allList).forEach(el => {
        const top = el.offsetTop
        itemArr.push(top)
      })
      this.cityOffsetArr = itemArr
    },
    getScrollVal () {
      this.Bscroll.on('scroll', (e) => {
        this.scrollY = Math.abs(e.y)
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          if (this.activeLetterIndex >= 0 && this.activeLetterIndex < this.letters.length) {
            this.$emit('change', this.letters[this.activeLetterIndex])
          }
        }, 16)
      })
    },
    handleCityChange (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="scss" scoped>
  .list_content{
    position: absolute;
    left: 0;
    top: 93px;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
  .title{
    height: 40px;
    padding: 0 10px;
    line-height: 40px;
    background-color: #f1f1f1;
    font-size: 16px;
  }
  .list{
    padding: 10px 40px 0 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item{
      width: 30%;
      height: 30px;
      margin-bottom: 10px;
      line-height: 28px;
      text-align: center;
      border: .5px solid #ddd;
      border-radius: 4px;
      color: #666;
      font-size: 14px;
    }
  }
  .city-list{
    .item{
      padding-left: 10px;
      line-height: 34px;
      color: #666;
      border-bottom: .5px solid #ddd;
      font-size: 14px;
    }
  }
</style>
