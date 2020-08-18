<template>
  <div class="wrapper">
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
      },
      swiperList: [{
        id: 1,
        imgUrl: 'https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg'
      }, {
        id: 2,
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg'
      }, {
        id: 3,
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg'
      }]
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
