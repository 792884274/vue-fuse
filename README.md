# vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

beijing:
tianjin:商品的全选、单选、价格计算
shanghai:tab切换
chongqing:路由切换


```
transition写法：
.vue文件内容
<template>
  <div>
      <h2>新闻列表</h2>
      <ul>
          <li v-for="newsItem in news">
              <router-link :to="'/news/'+newsItem.to">{{newsItem.text}}</router-link>
          </li>
      </ul> 
      <button type="btton" @click="maskShow">按钮</button> 
      <div class="mask" v-if="show" transition="change">
        遮罩层
        <button type="btton" @click="maskHidden">按钮</button> 
      </div>        
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      news: [
        {
          to: '1',
          text: '新闻001'
        },
        {
          to: '2',
          text: '新闻002'
        }
      ],
      show: false,
      transitionName: 'change'
    }
  },
  methods: {
    maskShow(){
      this.show=true;
    },
    maskHidden(){
      this.show=false;
    }
  }
}
</script>
<style lang='less'>
  @import '../assets/less/main.less';
</style>


.less文件内容
.change-transition {
    transition: all .5s ease;
    height: 30px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
}
.change-enter, .change-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
}
.mask{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
}
```
