<template>
  <div class="wrapper" v-if="swiperList.length">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>
<style lang="scss">
  @import '@/assets/styles/variable.scss';
  .swiper-pagination-bullet {
    background-color: #fff!important;
    opacity: 1!important;
  }
  .swiper-pagination-bullet-active {
    background-color: $bgColor!important;
  }
</style>
<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 30.5%;;
    overflow: hidden;
    .swiper-img{
      width: 100%;
    }
  }
</style>
