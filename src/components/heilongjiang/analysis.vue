<template>
	<div class="vs">
		<div class="vs html">
			<pre><code>
&lt;ul class=&quot;goods lc&quot;&gt;
  &lt;li class=&quot;goods-item lc-item&quot; v-for=&quot;item in items&quot;&gt;
    &lt;img src=&quot;../../assets/images/logo.png&quot; 
      alt=&quot;&quot; class=&quot;goods-img f_l lc-img&quot;&gt;
    &lt;div class=&quot;count f_r&quot;&gt;
      &lt;span class=&quot;reduce btn btn-default btn-xs&quot; 
        v-on:click=&quot;reduce(item)&quot;&gt;-&lt;/span&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control number&quot;
        aria-describedby=&quot;sizing-addon3&quot; 
        v-model=&quot;item.number&quot; @keyup=&quot;calculate&quot;&gt;
      &lt;span class=&quot;add btn btn-default btn-xs&quot; 
        v-on:click=&quot;add(item)&quot;&gt;+&lt;/span&gt;
    &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre>
		</div>

		<div class="vs js">
			<pre><code>
computed: {
  items (){
    return this.$store.getters.getItems
  }
},
methods: {
  add(item) {
    item.number++;
    this.calculate();
  },
  reduce(item) {
    if (item.number==0) return;
    item.number--;
    this.calculate();
  },
  calculate(){
    var _this=this;
    var total=0;
    var obj={
      items: [],
      total: 0
    };
    obj.items=this.items;
    this.items.forEach(function (item) {
      obj.total+=Number(item.number);
    })
    this.$store.dispatch(&#39;calculateNumber&#39;,obj);
  }
}
</code></pre>
		</div>
		<div>
			<ul>
				<li>1.在计算属性<code>computed</code>中利用<router-link to="/aomen/vuex"><code>this.$store.getters</code></router-link> 获得状态值<code>items</code>。</li>
				<li>2.<code>add</code>、<code>reduce</code>、<code>calculate</code>分别计算加、减、总和。<code>calculate</code>函数中分发调<router-link to="/aomen/vuex"><code>action</code></router-link>,并将计算结果以参数的形式传递过去。参数为两个，应用<code>var obj={};</code>对象形式传递。</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'analysis'
	}		
</script>
<style>
	
</style>
