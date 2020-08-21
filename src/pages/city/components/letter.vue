<template>
  <div class="letter_content">
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variable.scss';
  .letter_content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    width: 30px;
    right: 0;
    top: 93px;
    bottom: 0;
    background-color: #fff;
    .item{
      line-height: 30px;
      text-align: center;
      color: $bgColor;
    }
  }
</style>
