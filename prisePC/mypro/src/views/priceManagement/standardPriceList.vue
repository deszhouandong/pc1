<template>
  <div class="stand">
    <div class="standTitle">标准价格管理</div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data(){
    return{
  

    }
  },
  creted(){
    document.title='标准价格列表';
  },
  methods:{
    
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/sass/index.scss";
.standTitle{
  background: #00bfff;
  height: 52px;
  line-height: 52px;
  font-size: 18px;
  padding-left: 15px;
}
</style>
