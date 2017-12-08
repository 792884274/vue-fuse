<template>
	<div class="aomen" id="aomen">
		<Gotop :className="className"></Gotop>

		<div class="vs">
			<h3 id="-">注意点</h3>
			<pre><code>&lt;style lang=&#39;less&#39;&gt;
  @import &#39;../assets/less/*.less&#39;;
&lt;/style&gt;
</code></pre>
			<p>引用less时,style标签需要添加属性<code>lang=&#39;less&#39;</code>,结尾注意加<code>;</code>。</p>
			<p><em>代码块中用<code>${}$</code>来代替数据绑定的双大括号<code>{{}}</code></em></p>
		</div>
		<hr>
		<div class="vs">
			<h3 id="-">类库引用</h3>

			<h5 id="font-awesome">font-awesome</h5>
			<p><code>npm install font-awesome</code></p>
			<p>在<code>main.js</code>里添加</p>
			<p><code>import &#39;font-awesome/css/font-awesome.css&#39;</code></p>
		</div>

		<hr>

		<div class="vs">
			<h3 id="-">项目知识点</h3>
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
				<h5 id="-" class="point-header">生命周期</h5>
				<img src="../assets/images/lifecycle.png" alt="">
			</div>
			<div id="gotop">
				<h5 id="-"  class="point-header">公共组件定义</h5>
				<pre><code>import 组件名 from &#39;组件地址&#39;
Vue.component(&#39;组件名&#39;, 组件名);
</code></pre>
				<p>在<code>main.js</code>中<code>import</code>引入组件，然后在定义组件。</p>
			</div>
		</div>
		<hr>
		<div class="vs">
			<h3 id="-">本组件知识点</h3>

			<h5 id="-">滚轮定位</h5>
		</div>
		<div class="vs js">
				<pre><code>
mounted(){
  if (this.getPathname()) {
    this.scrollTo();      
  }
},
methods: {
  scrollTo(){
    var id=this.getPathname();
    var element
    	=document.getElementById(id);
    var aomen
    	=document.getElementById(&quot;aomen&quot;);
    aomen.scrollTop
    	=Number(element.offsetTop)-30;
  },
  getPathname(){
    var pathname=window.location.pathname;
    var id=pathname.split(&#39;/&#39;)[2];
    if (pathname.split(&#39;/&#39;)[1]==&#39;aomen&#39;) {
      return id;      
    } else if(pathname.split(&#39;/&#39;)[1]==&#39;&#39;){
      return false;
    }
  }
}
</code></pre>
			<p>跳转到本页有两种方式<code>path: &#39;/aomen&#39;</code>和<code>path: &#39;/aomen/:id&#39;</code>。当地址栏为第二种方式时，拆解<code>window.location.pathname</code>来得到<code>id</code>。再设置<code>router-view</code>的<code>scrollTop</code>值为本页中对应<code>id</code>元素的<code>offsetTop</code>值即可。注意，此时并非设置<code>document.body.scrollTop</code>的值。设置完毕后还需在生命周期<code>mounted</code>调用函数。</p>
			</div>
			
		
		<div style="height: 500px;"></div>
	</div>
</template>
<script>
export default {
	name: 'Aomen',
	mounted(){
		if (this.getPathname()) {
			this.scrollTo();			
		}
	},
	data () {
		return {
			className: 'aomen',
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
<style lang='less'>
	@import '../assets/less/aomen.less';
</style>