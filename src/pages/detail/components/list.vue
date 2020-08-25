<template>
  <div class="list_container">
    <div class="item"
      v-for="(item,index) in categoryList"
      :key="index"
    >
      <div class="item_title">
        <span class="item-title-icon"></span>{{item.title}}
      </div>
      <div v-if="item.children">
        <list :categoryList="item.children"></list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    categoryList: Array
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/mixins.scss';
  .list_container {
    padding: 10px;
    .item_title{
      @include border-1px(#d4d3d3);
      line-height: 30px;
      font-size: 14px;
      font-weight: 700;
    }
    .item-title-icon{
      position: relative;
      top: 2px;
      display: inline-block;
      width: 18px;
      height: 18px;
      margin-right: 8px;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) left center no-repeat;
      background-size: cover;
    }
  }
</style>
