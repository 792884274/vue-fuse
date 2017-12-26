<template>
	<div class="beijing">
		<Gotop :className="className"></Gotop>
		<div class="vs">
			<h3 id="-">介绍</h3>
			<p>&nbsp;&nbsp;本项目为<code>vue-cli</code>脚手架初始化项目，<code>vue-router</code>构建的单页应用。使用<router-link to="/aomen/vuex"><code>vuex</code></router-link>管理整个应用的状态，<router-link to="/aomen/resource"><code>vue-resource</code></router-link>与后端进行数据交互。全局样式使用<code>github.css</code>和<code>bootstrap.css</code>，搭配<code>Font Awesome</code>图标。node的<code>fs</code>、<code>marked</code>模块将<code>*.md</code>文件转换为<code>*.html</code>文件，做小项目案例的文字解析使用。项目中穿插采用到<code>jq</code>的相关方法。</p>
			<hr>
			<h3 id="-">组件介绍</h3>
			<ol>
				<li>
					<router-link to="/tianjin">
						Tianjin.vue(天津):   
					</router-link>
					商品的全选、单选、价格计算
				</li>
				<li>
					<router-link to="/shanghai">
						Shanghai.vue(上海):   
					</router-link>
					tab切换
				</li>
				<li>
					<router-link to="/hebei">
						Hebei.vue(河北):   
					</router-link>
					父组件与子组件之间数据传递
				</li>
				<li>
					<router-link to="/hebei">
						Heilongjiang.vue(黑龙江):   
					</router-link>
					vuex进行状态管理
				</li>
				<li>
					<router-link to="/chongqing">
						Chongqing.vue(重庆):   
					</router-link>
					路由切换
				</li>
				<li>
					<router-link to="/shanxi">
						Shanxi.vue(山西):   
					</router-link>
					移动端轮播图
				</li>
				<li>
					<router-link to="/shanxi">
						Liaoning.vue(辽宁):   
					</router-link>
					上滑加载
				</li>
				<li>
					<router-link to="/aomen">
						Aomen.vue(澳门):   
					</router-link>
					项目知识点
				</li>
				<li>
					<router-link to="/aomen/gotop">
						Gotop.vue:   
					</router-link>
					公共组件，点击头部页面回到顶部
				</li>
			</ol>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Beijing',
	data () {
		return {
			className: 'beijing'
		}
	}
}
	
</script>
<style>
	@import '../assets/less/beijing.less';
</style>