<template>
	<div class="shanxi">
		<div class="carousel-container">
			<ul class="carousel-items" :style="{width: items.length*100+'%',left: -100*nowLocal+'%',transitionDuration: transitionDuration+'s'}">
				<li class="carousel-item f_l" v-for="item in items" :style="{width: 100/items.length+'%'}">
					<router-link :to="item.to">
						<img :src="item.img" alt="" style="height: 100%;width: 100%;">
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import image1 from '../assets/images/carousel/1.png'
import image2 from '../assets/images/carousel/2.png'
import image3 from '../assets/images/carousel/3.png'
import image4 from '../assets/images/carousel/4.png'
export default {
	name: 'Shanxi',
	data () {
		return {
			nowLocal: 0,
			transitionDuration: 0.5,
			items: [
				{
					img: image1,
					to: '/'
				},
				{
					img: image2,
					to: '/'
				},
				{
					img: image3,
					to: '/'
				},
				{
					img: image4,
					to: '/'
				}
			]
		}
	}
}
	
</script>
<style>
	@import '../assets/less/shanxi.less';
</style>