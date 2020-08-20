<template>
  <div class="tickets_content">
    <h3 class="title">特惠门票</h3>
    <ul class="list">
      <li class="item">
        <div class="img-wrapper">
          <img class="img" src="https://img1.qunarzz.com/sight/p0/1706/e1/e1dbcc2f0ad04fe0a3.img.jpg_256x160_50d1396b.jpg"/>
        </div>
        <h4 class="name">丽水冒险岛水世界</h4>
        <p class="desc">中世纪欧洲为驯龙主题的乐园，开启奇幻水上之旅</p>
        <p class="price">￥225</p>
      </li>
      <li class="item">
        <div class="img-wrapper">
          <img class="img" src="https://img1.qunarzz.com/sight/p0/1607/21/2142167d4b1bfa84b4.water.jpg_256x160_ea65b4f7.jpg"/>
        </div>
        <h4 class="name">西塘古镇</h4>
        <p class="desc">水墨西塘让你感受古镇千年的诗情画意</p>
        <p class="price">￥95</p>
      </li>
      <li class="item">
        <div class="img-wrapper">
          <img class="img" src="https://img1.qunarzz.com/sight/p0/1905/44/44c6db1f35f281f6a3.water.jpg_256x160_249fdf75.jpg"/>
        </div>
        <h4 class="name">横店影视城</h4>
        <p class="desc">被誉为“中国的好莱坞”</p>
        <p class="price">￥165</p>
      </li>
      <li class="item">
        <div class="img-wrapper">
          <img class="img" src="https://img1.qunarzz.com/sight/p0/1603/8f/8fff2332dff679ec90.water.jpg_256x160_224237e3.jpg"/>
        </div>
        <h4 class="name">普陀山风景区</h4>
        <p class="desc">人间清净地 | 朝圣看日出</p>
        <p class="price">￥35</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tickets'
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/mixins.scss';
  .tickets_content {
    .title{
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      font-size: 18px;
      color: #333;
      background-color: #f1f1f1;
    }
    .list{
      display: flex;
      flex-wrap: wrap;
      padding: 0 10px;
      justify-content: space-between;
      .item{
        width: 49%;
        margin-top: 15px;
        .img-wrapper{
          width: 100%;
          height: 0;
          padding-bottom: 65%;
          border-radius: 8px;
          overflow: hidden;
          .img{
            display: block;
            width: 100%;
          }
        }
        .name{
          line-height: 28px;
          font-size: 15px;
          @include ellipsis
        }
        .desc{
          font-size: 12px;
          color: #666;
          @include ellipsis
        }
        .price {
          font-size: 20px;
          color: #ff7400;
          font-weight: 700;
        }
      }
    }
  }
</style>
