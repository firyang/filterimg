<template>
  <div class="title" id="hots">热销产品</div>
</template>

<script>
  import Vue from 'vue'

  // *** 创建扩展构造器 MyTest，给定模板、data、methods
  let MyTest = Vue.extend({
    template: `<a style="color:#3fd;" v-on:click="handleTest(testid)">Test</a>`,
    data(){
      return {
        testid: 123456789
      }
    },
    methods:{
      handleTest: function(id){
        console.log("TEST: ", id)
      }
    }
  })  

  export default {
    components: {  },
    data: () => ({
      category: [],
      recommend:[],
      hot:[]
    }),
    mounted(){
      // *** 当组件挂载后，实例化 MyTest构造器，并挂载 
      let test = new MyTest().$mount();
      // *** 将MyTest实例追加到#hots元素内
      document.getElementById('hots').appendChild(test.$el)
    },
    methods: {
      
    }
  };
</script>

<style lang="less" scoped>

</style>
