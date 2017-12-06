<template>
	<div class="chongqing-one">
		<router-link to="/"><i class="fa fa-home fa-fw"></i>返回首页</router-link>
		<div class="vs">
			<p>直接路由跳转,属性<code>to</code>后面添加跳转的路由</p>
		</div>
		<ul>
		    <li v-for="newsItem in news">
		        <router-link :to="'/chongqing/'+newsItem.id">{{newsItem.text}} <i class="fa fa-angle-double-right"></i></router-link>
		    </li>
	  	</ul> 
	  	<div class="vs html">
	  		<pre><code>&lt;ul&gt;
  &lt;li v-for=&quot;newsItem in news&quot;&gt;
    &lt;router-link :to=&quot;&#39;/chongqing/&#39;+newsItem.id&quot;&gt;
      ${newsItem.text}$
    &lt;/router-link&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre>
	  	</div>
	  	<div class="vs">
	  		<p>传参路由。<code>v-for</code>遍历的<code>news</code>数据来自上级<code>props</code>传递而来。属性<code>to</code>由字符串和参数拼接而成，<code>index.js</code>中定义路由跳转的模板。常用于新闻、商品等带有固定<code>id</code>和<code>num</code>的路由跳转当中。</p>
	  	</div>
	</div>
</template>
<script>
	export default{
		name: 'Chongqing01',
		data () {
			return {

			}
		},
		props: ['news']
	}
	
</script>
<style>
	@import '../../assets/less/chongqing.less'
</style>