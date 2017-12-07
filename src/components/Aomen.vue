<template>
	<div class="aomen" id="aomen">

		<div class="vs">
			<h3 id="-">注意点</h3>
			<pre><code>@import &#39;../assets/less/*.less&#39;; 引用less时
注意加“;”。</code></pre>
			<p><em>代码块中用<code>${}$</code>来代替数据绑定的双大括号<code>{{}}</code></em></p>
		</div>
		<div class="vs">
			<h3 id="-">类库引用</h3>

			<h5 id="font-awesome">font-awesome</h5>
			<p><code>npm install font-awesome</code></p>
			<p>在<code>main.js</code>里添加</p>
			<p><code>import &#39;font-awesome/css/font-awesome.css&#39;</code></p>
		</div>

		<hr>

		<div class="vs">
			<h3 id="-">知识点</h3>
			<div id="emit">
				<h5 id="vm-emit-event-args-" class="point-header">vm.$emit( event, […args] )</h5>
				<h6 id="-">参数：</h6>
				<ul>
					<li><code>{string} event</code></li>
					<li><code>[...args]</code></li>
				</ul>
				<p>触发当前实例上的事件。附加参数都会传给监听器回调。</p>
				<p>项目中父组件<code>App.vue</code>使用 <code>@deassign=&quot;numberChange&quot;</code>，监听由子组件 <code>Hebei.vue</code> 中<code>vm.$emit</code>触发的事件，通过 <code>numberChange()</code>接受从子组件传递过来的数据，通知父组件数据改变。</p>
			</div>
			<div id="lifecycle">
				<h5 id="-"  class="point-header">生命周期</h5>
				<img src="../assets/images/lifecycle.png" alt="">
			</div>
		</div>
		
		<div style="height: 500px;"></div>
	</div>
</template>
<script>
export default {
	name: 'Aomen',
	created(){
		
	},
	mounted(){
		if (this.getPathname()) {
			this.scrollTo();			
		}
	},
	data () {
		return {

		}
	},
	methods: {
		scrollTo(){
			var id=this.getPathname();
			var element=document.getElementById(id);
			var aomen=document.getElementById("aomen");
			aomen.scrollTop=Number(element.offsetTop)-30;
		},
		getPathname(){
			var pathname=window.location.pathname;
			var id=pathname.split('/')[2];
			if (pathname.split('/')[1]=='aomen') {
				return id;			
			} else if(pathname.split('/')[1]==''){
				return false;
			}
		}
	}
}
	
</script>
<style>
	@import '../assets/less/aomen.less';
</style>