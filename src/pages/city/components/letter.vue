<template>
  <div class="letter_content">
    <div class="item"
      v-for="item in letter"
      :key="item"
      :ref="item"
      :class="{'active': activeWord == item}"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cities: Object,
    activeLetter: String
  },
  data () {
    return {
      scrollFlag: false,
      adomOffset: 0,
      timer: null,
      activeWord: this.activeLetter
    }
  },
  updated () {
    this.adomOffset = this.$refs.A[0].offsetTop
  },
  watch: {
    activeLetter () {
      this.activeWord = this.activeLetter
    }
  },
  computed: {
    letter () {
      const arr = []
      for (const i in this.cities) {
        arr.push(i)
      }
      return arr
    }
  },
  methods: {
    handleLetterClick (e) {
      this.activeWord = e.target.innerText
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.scrollFlag = true
    },
    handleTouchMove (e) {
      if (this.scrollFlag) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const startY = e.touches[0].clientY
          const index = Math.floor((startY - this.adomOffset - 93) / 20)
          if (index >= 0 && index < this.letter.length) {
            this.activeWord = this.letter[index]
            this.$emit('change', this.letter[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.scrollFlag = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variable.scss';
  .letter_content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    width: 30px;
    right: 0;
    top: 93px;
    bottom: 0;
    background-color: #fff;
    .item{
      line-height: 20px;
      text-align: center;
      color: #333;
      font-size: 12px;
      &.active{
        color: $bgColor;
        font-weight: 700;
        font-size: 13px;
      }
    }
  }
</style>
