<template>
  <div class="icons">
    <div class="item">
      <img src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png" class="img">
      <p class="txt">酒店</p>
    </div>
    <div class="item">
      <img src="https://s.qunarzz.com/homenode/images/touchheader/flight.png" class="img">
      <p class="txt">机票</p>
    </div>
    <div class="item">
      <img src="https://s.qunarzz.com/homenode/images/touchheader/train.png" class="img">
      <p class="txt">火车</p>
    </div>
    <div class="item">
      <img src="https://s.qunarzz.com/homenode/images/touchheader/package.png" class="img">
      <p class="txt">度假</p>
    </div>
    <div class="item">
      <img src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" class="img">
      <p class="txt">景点门票</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeIcons'
}
</script>

<style lang="scss" scoped>
  .icons {
    display: flex;
    flex-wrap: wrap;
    height: 0;
    margin: 10px 0;
    padding-bottom: 50%;
    overflow: hidden;
    .item {
      width: 20%;
      flex-shrink: 0;
      height: 0;
      padding-bottom: 20%;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
      .img{
        margin: 0 auto;
        display: block;
        width: 56px;
        height: 56px;
      }
    }
  }
</style>
