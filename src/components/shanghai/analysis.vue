<template>
	<div class="vs">
		<div class="vs html">
			<pre><code>
&lt;div class=&quot;exh tabs-container&quot;&gt;
  &lt;ul class=&quot;tabs-buttons&quot;&gt;
    &lt;li v-for=&quot;(buttonsItem,index) in tabs.buttons&quot; 
      @click=&quot;tabSwitch(index)&quot; 
      :class=&quot;{active:index==tabNum}&quot;&gt;
      ${buttonsItem.text}$
    &lt;/li&gt;
  &lt;/ul&gt;
  &lt;ul class=&quot;tabs-contents&quot;&gt;
    &lt;li v-for=&quot;(content,index) in tabs.contents&quot; 
      v-show=&quot;index==tabNum&quot;&gt;
      ${content.text}$
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</code></pre>
		</div>

		<div class="vs js">
			<pre><code>
data () {
  return {
    tabNum: 0
  }
},
props: [&#39;tabs&#39;],
methods: {
  tabSwitch(index){
    this.tabNum=index;
  }
}
</code></pre>
		</div>
		<div class="vs">
			<p>tab切换原理为通过点击触发<code>tabSwitch</code>,来改变当前<code>tabNum</code>值。根据当前tab按钮、按钮对应的内容的<code>index</code>值是否与<code>tabNum</code>值相等来显示对应内容。</p>
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
