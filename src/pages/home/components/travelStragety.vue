<template>
  <div class="stragety_content">
    <h3 class="title">旅行攻略</h3>
    <ul class="list">
      <li class="item" v-for="item in stragetyList" :key="item.id">
        <img class="img" :src="item.imgUrl"/>
        <div class="info">
          <h4 class="name">{{item.title}}</h4>
          <p class="desc">{{item.desc}}</p>
          <p class="more">查看详情&gt;&gt;</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'stragey',
  props: {
    stragetyList: Array
  }
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
