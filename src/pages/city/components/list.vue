<template>
  <div class="list_content" ref="listContent">
    <div class="wrapper">
      <div class="area">
        <p class="title">当前城市</p>
        <ul class="list">
          <li class="item">杭州</li>
        </ul>
      </div>
      <div class="area">
        <p class="title">热门城市</p>
        <ul class="list">
          <li class="item">杭州</li>
          <li class="item">杭州</li>
          <li class="item">杭州</li>
          <li class="item">杭州</li>
          <li class="item">杭州</li>
          <li class="item">杭州</li>
        </ul>
      </div>
      <div class="area">
        <p class="title">A</p>
        <ul class="city-list">
          <li class="item">杭州</li>
          <li class="item">杭州</li>
          <li class="item">杭州</li>
          <li class="item">杭州</li>
          <li class="item">杭州</li>
          <li class="item">杭州</li>
        </ul>
      </div>
      <div class="area">
        <p class="title">B</p>
        <ul class="city-list">
          <li class="item">杭州</li>
          <li class="item">杭州</li>
          <li class="item">杭州</li>
          <li class="item">杭州</li>
          <li class="item">杭州</li>
          <li class="item">杭州</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  mounted () {
    const wrapperDom = this.$refs.listContent
    this.Bscroll = new BScroll(wrapperDom)
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
    }
  }
  .city-list{
    .item{
      padding-left: 10px;
      line-height: 34px;
      color: #666;
      border-bottom: .5px solid #ddd;
    }
  }
</style>
