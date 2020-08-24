<template>
  <div class="banner-container">
    <div class="banner" @click="handleShowGallery">
      <img class="img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/a6dfbbd3-8112-4050-bbec-c569404b6e21.jpg_r_640x420x95_264bfb57.jpg" alt="">
      <div class="bottom_info">
        <p class="name">自由行-暑假家庭亲子游云南丽江 连住3万游云南丽江 连住3万</p>
        <p class="pic_num"><span class="iconfont">&#xe67d;</span>39</p>
      </div>
    </div>
    <fade-animation>
      <gallery
        @close="handleGallaryClose"
        v-show="showGallery"
        :list="bannerImgs"
      >
      </gallery>
    </fade-animation>
  </div>
</template>

<script>
import Gallery from '@/components/gallery/gallery'
import FadeAnimation from '@/components/fadeAnimation/fadeAnimation'
export default {
  components: {
    Gallery,
    FadeAnimation
  },
  data () {
    return {
      showGallery: false,
      bannerImgs: ['https://img1.qunarzz.com/vs_ceph_vs_tts/99b0cacd-e7a2-486f-beb2-2728f38ada3e.jpg_r_1280x840x95_ea5068fb.jpg', 'https://img1.qunarzz.com/vs_ceph_vs_tts/a6dfbbd3-8112-4050-bbec-c569404b6e21.jpg_r_1280x840x95_8817947a.jpg', 'https://img1.qunarzz.com/vs_ceph_vs_tts/eb1bcfad-2f0e-4db9-8af8-27856e178550.jpg_r_1280x840x95_83c3b9c6.jpg']
    }
  },
  methods: {
    handleGallaryClose () {
      this.showGallery = false
    },
    handleShowGallery () {
      this.showGallery = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner{
    position: relative;
    height: 0;
    padding-bottom: 66.67%;
    overflow: hidden;
    .img{
      display: block;
      width: 100%;
    }
    .bottom_info{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      height: 30px;
      line-height: 30px;
      background: -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
      color: #fff;
      font-size: 13px;
      .name{
        flex: 1;
        padding: 0 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .pic_num{
        width: 60px;
        text-align: center;
        flex-shrink: 0;
        .iconfont{
          margin-right: 3px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
