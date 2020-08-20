<template>
  <div class="icons">
    <div class="item" v-for="item in iconList" :key="item.id">
      <img :src="item.imgUrl" class="img">
      <p class="txt">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  props: {
    iconList: Array
  }
}
</script>

<style lang="scss" scoped>
  .icons {
    display: flex;
    flex-wrap: wrap;
    height: 0;
    margin: 10px 0;
    padding-bottom: 20%;
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
