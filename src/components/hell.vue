<template>
  <div id="content" ref="wrapper" :style="{ height: (wrapperHeight-50) + 'px' }">
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
      <div class="item" v-for="data in list">
        <div class="name">{{data.name}}</div>
      </div>
    </mt-loadmore>
  </div>

</template>


<script>
import {Loadmore} from 'mint-ui'
 var p = 10;
export default {
  name:'hell',

  data() {
    return {
      list:[],
      allLoaded:false,
      scrollMode:"auto",
      isAutoFill:false,
      wrapperHeight: 0,
    };
  },
  components:{
   'mt-loadmore' :Loadmore
  },
  mounted(){
    // 父控件要加上高度，否则会出现上拉不动的情况
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top
    console.log(this.wrapperHeight)
    this.getList()
  },
  methods: {
    loadBottom: function(){
      this.$refs.loadmore.onBottomLoaded();
      this.getList();
    },
    getList: function(){
      var i = 0,list0 = [];
      for(i ; i < p;i ++){
        list0.push({demo:i});
      }
      p+=10;
      console.log(p)
      this.list =  list0;
      if(p>=100){
        this.allLoaded = true;
      }
    }
  }
};
</script>

<style>

  #content{
    overflow: scroll;
    /*-webkit-overflow-scrolling: touch;*/
  }
  .item{

  }
  .item .name{
    height: 20px;
    background-color: green;
    margin-bottom: 10px;
  }
.cell-edit-input .el-input,
.el-input__inner {
  width: 100px;
}
.cell-icon {
  cursor: pointer;
  color: #fff;
}
</style>
