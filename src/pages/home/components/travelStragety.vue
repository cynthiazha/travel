<template>
  <div class="stragety_content">
    <h3 class="title">旅行攻略</h3>
    <ul class="list">
      <li class="item">
        <img class="img" src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg"/>
        <div class="info">
          <h4 class="name">驾一叶扁舟，寻瓯江往事</h4>
          <p class="desc">我记得那里有条河，河边有颗茂密得连太阳都照不进来的大树</p>
          <p class="more">查看详情&gt;&gt;</p>
        </div>
      </li>
      <li class="item">
        <img class="img" src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg"/>
        <div class="info">
          <h4 class="name">不负嵊夏好时光，泗乎太安逸</h4>
          <p class="desc">世界上最远的距离就是，你知道 嵊泗 近在咫尺，却7年不曾踏上这颗东海遗珠</p>
          <p class="more">查看详情&gt;&gt;</p>
        </div>
      </li>
      <li class="item">
        <img class="img" src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c2ae82fcc9fa11fa253e5919c49bcfbf.jpg"/>
        <div class="info">
          <h4 class="name">探访日本，一部家庭旅行画册</h4>
          <p class="desc">安藤忠雄有个外号叫“水泥诗人”。他的大部分作品都是围绕打孔的水泥完成的，有人会觉得这些作品是冰冷</p>
          <p class="more">查看详情&gt;&gt;</p>
        </div>
      </li>
      <li class="item">
        <img class="img" src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg"/>
        <div class="info">
          <h4 class="name">厦门，带娃出行与幸福同行</h4>
          <p class="desc">很多人认为带小孩出游很麻烦，往往带小孩旅游比上班还累，在我看来，当然会很累，亲子游并不是大人带上</p>
          <p class="more">查看详情&gt;&gt;</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'stragey'
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/mixins.scss';
  .stragety_content {
    margin-top: 20px;
    .title{
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      font-size: 18px;
      color: #333;
      background-color: #f1f1f1;
    }
    .list{
      .item{
        display: flex;
        padding: 10px;
        height: 66px;
        @include border-1px(#d4d3d3);
        .img{
          width: 100px;
          margin-right: 10px;
          border-radius: 6px;
        }
        .info{
          flex: 1;
          overflow: hidden;
        }
        .name{
          font-size: 14px;
          @include ellipsis
        }
        .desc{
          line-height: 30px;
          font-size: 12px;
          color: #666;
          @include ellipsis
        }
        .more {
          font-size: 13px;
          color: #ff7400;
          font-weight: 700;
        }
      }
    }
  }
</style>
