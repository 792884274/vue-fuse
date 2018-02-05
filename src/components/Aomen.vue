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

			<h5 id="font-awesome" class="point-header">font-awesome</h5>
			<p><code>npm install font-awesome</code></p>
			<p>在<code>main.js</code>里添加</p>
			<p><code>import &#39;font-awesome/css/font-awesome.css&#39;</code></p>
			<p>发布的时候(<code>npm run build</code>），<code>font-awesome</code>资源却无法加载。需要在<code>utils.js</code>中更改配置。</p>
			<div class="vs js">
				<pre><code>
if (options.extract) {
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: &#39;vue-style-loader&#39;,
    publicPath: &#39;../../&#39;
  })
} else {
  return [&#39;vue-style-loader&#39;].concat(loaders)
}
</code></pre>
			</div>
		</div>

		<hr>

		<div class="vs">
			<h3 id="-">项目知识点</h3>
			<ul>
				<li id="emit">
					<h5 id="vm-emit-event-args-" class="point-header">vm.$emit( event, […args] )</h5>
					<h6 id="-">参数：</h6>
					<ul>
						<li><code>{string} event</code></li>
						<li><code>[...args]</code></li>
					</ul>
					<p>触发当前实例上的事件。附加参数都会传给监听器回调。</p>
					<p>项目中父组件<code>App.vue</code>使用 <code>@deassign=&quot;numberChange&quot;</code>，监听由子组件 <code>Hebei.vue</code> 中<code>vm.$emit</code>触发的事件，通过 <code>numberChange()</code>接受从子组件传递过来的数据，通知父组件数据改变。</p>
				</li>
				<li id="lifecycle">
					<h5 id="-" class="point-header">生命周期</h5>
					<img src="../assets/images/lifecycle.png" alt="">
				</li>
				<li id="gotop">
					<h5 id="-"  class="point-header">公共组件定义</h5>
					<pre><code>import 组件名 from &#39;组件地址&#39;
  Vue.component(&#39;组件名&#39;, 组件名);</code></pre>
					<p>在<code>main.js</code>中<code>import</code>引入组件，然后在定义组件。</p>
				</li>
				<li id="resource">
					<h5 id="-" class="point-header">vue-resource</h5>
					<ul>
						<li>1.<code>npm install vue-resource --save</code>安装<code>vue-resource</code>。</li>
						<li>2.在<code>main.js</code>中全局引用<code>vue-resourve</code>。
							<div class="vs js">
								<pre><code>
import VueResource from &#39;vue-resource&#39;
Vue.use(VueResource)
</code></pre>
							</div>
						</li>
						<li>3.在生命周期<code>created</code>中获取数据。(本例中请求的是本地数据)
							<div class="vs js">
		<pre><code>
this.$http.get(&#39;/someUrl&#39;).then(response =&gt; {
  // get body data 
  this.someData = response.body;
  }, response =&gt; {
  // error callback 
});
</code></pre>
						</div>
						</li>
					</ul>
				</li>
				<li id="express">
					<h5 id="-" class="point-header">本地数据访问</h5>
					<ul>
						<li>1.在<code>webpack.dev.conf.js</code>配置本地数据访问。</li>
						<li>2.开启一个服务。
							<div class="vs js">
		<pre><code>
const express=require(&#39;express&#39;)
const app=express()
var appData=require(&#39;../data.json&#39;)
var apiRoutes=express.Router()
app.use(&#39;/api&#39;,apiRoutes)
</code></pre>
							</div>
						</li>
						<li>3.进行数据的路由接口配置,在<code>devServer</code>中添加属性配置。
							<div class="vs js">
							<pre><code>
before(app) {
  app.get(&#39;/api/liaoning&#39;,(req,res)=&gt;{
    res.json({
      errno: 0,
      data: appData.liaoning
    })
  })
}
</code></pre>
							</div>
						</li>
					</ul>
				</li>
				<li id="vuex">
					<h5 id="-" class="point-header">vuex</h5>
					<img src="../assets/images/vuex.png" alt="">
					<ul>
						<li>1.<code>modules</code>包含 <code>action</code>、 <code>mutation</code>、 <code>state</code>、<code>getter</code>。<code>sction</code>、<code>sutation</code>、<code>state</code>为<code>vuex</code>提供的数据流环节。</li>
						<li>2.<code>action</code>是在<code>mutation</code>之前的动作，只能调用<code>mutation</code>，不能直接更改<code>state</code>。与后端的API接口需要放到<code>action</code>里面，进行一些异步的操作，再触发<code>mutation</code>。</li>
						<li>3.<code>mutation</code>里面用同步的操作改变state。</li>
						<li>4.<code>getters</code>获取状态集的数据。</li>
					</ul>
				</li>
				<li id="nginx">
					<h5 id="-" class="point-header">项目上传到nginx服务器上，公网访问</h5>
					<ul>
						<li><code>vue</code>项目上传到<code>nginx</code>服务器上，公网访问</li>
						<li>1.项目完成后<code>npm run build</code>，生成dist目录。<blockquote>
							<p>线上访问地址为<a href="http://792884274.com/vue-fuse/">http://792884274.com/vue-fuse/</a> ,所以在router/index.js中设置：</p>
						</blockquote>
						</li>
							</ul>
							<div class="vs js">
							<pre><code>
export default new Router({
  mode: &#39;history&#39;,
  base: &#39;/vue-fuse/&#39;,
  routes: [
    ...
  ]
})
</code></pre>
							</div>
					<ul>
						<li>2.<code>github</code>托管项目。</li>
						<li>3.<code>Xshell</code>命令行中，中将项目clone到服务器上指定文件夹中。
							<pre><code>
[root@izhp37e37j73ghn6yfwf7qz app]# git clone https://github.com/792884274/vue-fuse.git
</code></pre>				<blockquote>
							<p>同样可以用压缩项目，上传压缩文件(<code>rz -bey 压缩文件</code>)，解压项目压缩文件(<code>unzip 压缩文件</code>)的方式上传到服务器。</p>
						</blockquote>
						</li>
						<li>4.在nginx的html文件夹下创建项目软链接
							<pre><code>
[root@izhp37e37j73ghn6yfwf7qz ~]# cd /usr/local/nginx/html
[root@izhp37e37j73ghn6yfwf7qz html]# ln -s ~/app/vue-fuse/dist /usr/local/nginx/html/vue-fuse
</code></pre>  
						<blockquote>
							<p>同样可以将项目直接放到<code>nginx</code>的html文件夹下，如此就如需在创建软链接。</p>
						</blockquote>
						</li>
						<li>5.<code>nginx.conf</code>配置
							<div class="vs js">
								<pre><code>
http{
  server {
    listen 80;
    server_name 792884274.com www.792884274.com;
    access_log  logs/792884274.log;
    location /vue-fuse/ {
      root  html;
      index  index.html index.htm;
    }
  }
}
</code></pre>			
						</div>
						</li>
						<li>6.重启服务
							<pre><code>
[root@izhp37e37j73ghn6yfwf7qz conf]# cd ../sbin
[root@izhp37e37j73ghn6yfwf7qz sbin]# ./nginx -t
nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful
[root@izhp37e37j73ghn6yfwf7qz sbin]# ./nginx -s reload
</code></pre>
						</li>
						<li>7.线上访问 <a href="http://792884274.com/vue-fuse/">http://792884274.com/vue-fuse/</a> 。</li>
					</ul>
				</li>
				<li id="url">
					<h5 id="-" class="point-header">去除地址栏中/#/</h5>
					路由配置中设置<code>mode</code>模式为<code>history</code>。
					<div class="vs js">
						<pre><code>
export default new Router({
  mode: &#39;history&#39;,
  ...
})
</code></pre>
					</div>
					<p class="margin-top-0">上线后地址栏不再显示<code>/#/</code>。</p>
					<blockquote>
					<p><code>vue-router</code>默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。</p>
					</blockquote>
					<p>当F5重新刷新页面的时候出现404，这时需要配置<code>nginx.conf</code>。</p>
					<div class="vs js">
						<pre><code>
http{
  server {
    ...
    location /vue-fuse/ {
      root  html;
      try_files $uri $uri/ /vue-fuse/index.html?args;
      index  index.html index.htm;
    }
  }
}
</code></pre>
					</div>
				</li>


			</ul>
			
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
			var pathName=window.location.pathname,
				pathArr=pathName.split('/'),
				id=pathArr[pathArr.length-1];
			if (id!=='aomen') {
				return id;			
			} else{
				return false;
			}
		}
	}
}
	
</script>
<style lang='less'>
	@import '../assets/less/aomen.less';
</style>