<template>
  <div class="tickets_content">
    <h3 class="title">特惠门票</h3>
    <ul class="list">
      <router-link :to="'/detail/'+item.id" tag="li" class="item" v-for="item in ticketsList" :key="item.id">
        <div class="img-wrapper">
          <img class="img" :src="item.imgUrl"/>
        </div>
        <h4 class="name">{{item.title}}</h4>
        <p class="desc">{{item.desc}}</p>
        <p class="price">￥{{item.price}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tickets',
  props: {
    ticketsList: Array
  }
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
