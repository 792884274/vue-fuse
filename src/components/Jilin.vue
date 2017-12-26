<template>
	<div class="jilin">
		<div class="vs margin-top">
			<h5 id="-">上滑刷新解析</h5>
		</div>
		<div class="vs html margin-top">
			<pre><code>
&lt;div class=&quot;liaoning-01&quot;&gt;
  &lt;ul class=&quot;items lc&quot;&gt;
    &lt;li class=&quot;lc-item item clearfix&quot; 
      v-for=&quot;(item,index) in items&quot;&gt;
      &lt;router-link :to=&quot;item.to&quot;&gt;
        &lt;img :src=&quot;item.img&quot; alt=&quot;&quot; 
          class=&quot;lc-img f_l&quot;&gt;
        &lt;span class=&quot;text f_r&quot;&gt;${index+1}$&lt;/span&gt;
      &lt;/router-link&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
  &lt;div class=&quot;pull&quot; v-show=&quot;more&quot;&gt;
    &lt;i class=&quot;fa fa-spinner rotation&quot; 
      aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;上滑加载更多。。。
  &lt;/div&gt;
  &lt;div class=&quot;pull&quot; v-show=&quot;!more&quot;&gt;
    没数据了。
    &lt;router-link to=&quot;/jilin&quot;&gt;
      内容解析
    &lt;/router-link&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
		</div>
		<div class="vs js">
			<pre><code>
data () {
  return {
    id: &#39;example&#39;,
    items: [],
    more: true,
    number: 0,
    analog: []
  }
},
created (){
  this.$http.get(&#39;/api/liaoning&#39;)
  .then((res)=&gt;{
    console.log(res.data.data.items);
    this.analog=res.data.data.items;
  },(err)=&gt;{
    console.log(err);
  })
},
mounted (){
  this.element=document.querySelector(&#39;.liaoning-01&#39;);
  this.elementParent=document.querySelector(&#39;.liaoning-01&#39;).parentNode;
        this.load();
  this.onScroll();
},
methods: {
  //页面被卷起的高度
  scrollTop(){
    return this.elementParent.scrollTop;
  },
  //视口高度
  clientHeight(){
        return this.elementParent.clientHeight;
    },
    //页面文档总高度
    documentHeight(){
        return this.element.offsetHeight;
    },
    onScroll(){
      var _this=this;
      this.elementParent.addEventListener(&#39;scroll&#39;,function () {
        if(_this.scrollTop()+_this.clientHeight()-50&gt;=(_this.documentHeight())){
          setTimeout(function () {
            if (_this.number&lt;=2) {
              _this.loadDown();
                  _this.number++;
              } else{
              _this.more=false;
              return;
            } 
          },1200)         
      }
      })
    },
    loadDown(){
      this.analog.forEach(item=&gt;{
      this.items.push(item);
          })
    },
  load(){
    var _this=this;
    if(this.documentHeight()&lt;=this.clientHeight()-50){
      setTimeout(function () {
              _this.loadDown();
              _this.load();
            },1200)
        } else{
          return;
        }
  }
}
</code></pre>
		</div>
		<div class="vs">
			<ul>
        <li>1.上滑刷新的核心思想是判断三个高度的关系。页面顶部被卷起的高度(A)，页面浏览器视口的高度(B)，页面文档的总高度(C)。当A+B&gt;=C-小段高度时，触发刷新函数。</li>
        <li>2.结合本例中vue实例，方法<code>scrollTop</code>获得高度A，方法<code>clientHeight</code>获得高度B，方法<code>documentHeight</code>获得高度C。注意，高度的主体不再是<code>document.body</code>或者<code>document.documentElement</code>,而是组件的<code>parentNode</code>和组件的最外层<code>DOM</code>。</li>
        <li>3.文档高度不大于窗口高度，数据少，会触发方法<code>load</code>加载数据。</li>
        <li>4.向上滑动时触发<code>scroll</code>事件，根据点2中的判断，加载更多的数据。其中数据来自生命周期<router-link to="/aomen/lifecycle"><code>created</code></router-link>中通过<router-link to="/aomen/resource"><code>vue-resource</code></router-link>请求回来的数据。</li>
      </ul>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'Jilin',
		data () {
			return {
				
			}
		},
		created (){
			
		},
		mounted (){
			
		},
		methods: {
			
		}
	}
	
</script>
<style lang='less'>
	.jilin{
		.margin-top{
			margin-top: -1em;
		}
	}
</style>