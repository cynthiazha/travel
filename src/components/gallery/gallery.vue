<template>
  <div class="gallery_content" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,index) in list" :key="index">
          <img class="swiper-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        loop: true,
        speed: 1000,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  .gallery_content /deep/ .swiper-container{
    overflow: inherit;
  }
  .gallery_content{
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,1);
    z-index: 99;
    .swiper-img{
      width: 100%;
    }
    .swiper-pagination{
      color: #fff;
      bottom: -70%
    }
  }
</style>
