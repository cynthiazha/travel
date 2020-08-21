<template>
  <div class="search_content">
    <input type="text" class="user_val" placeholder="请输入城市的名称或拼音" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variable.scss';
  .search_content{
    height: 50px;
    padding: 8px 20px;
    background-color: $bgColor;
    box-sizing: border-box;
    .user_val{
      width: 100%;
      height: 100%;
      padding: 0 10px;
      background-color: #fff;
      border-radius: 30px;
      border: 0;
      text-align: center;
      color: #666;
      box-sizing: border-box;
      &:focus{
        outline: none;
      }
    }
  }
</style>
