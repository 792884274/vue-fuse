<template>
	<div class="beijing">
		<div class="vs">
			<h3 id="-">介绍</h3>
			<p>&nbsp;&nbsp;本项目为<code>npm i -g vue-cli</code>构建的Vue单页应用。全局样式使用<code>github.css</code>和<code>bootstrap.css</code>，搭配Font Awesome图标。node的<code>fs</code>、<code>marked</code>模块将<code>*.md</code>文件转换为<code>*.html</code>文件，做小项目案例的文字解析使用。项目中穿插采用到jq的相关方法。</p>
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
					<router-link to="/chongqing">
						Chongqing.vue(重庆):   
					</router-link>
					路由切换
				</li>
				<li>
					<router-link to="/hebei">
						Hebei.vue(河北):   
					</router-link>
					父组件与子组件之间数据传递
				</li>
				<li>
					<router-link to="/shanxi">
						Shanxi.vue(山西):   
					</router-link>
					移动端轮播图
				</li>
				<li>
					<router-link to="/aomen">
						Aomen.vue(澳门):   
					</router-link>
					项目知识点
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

		}
	}
}
	
</script>
<style>
	@import '../assets/less/beijing.less';
</style>