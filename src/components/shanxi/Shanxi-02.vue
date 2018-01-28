<template>
	<div class="shanxi-02">
		<div v-if="items.length" class="slider-wrapper" ref="sliderWrapper">
          	<slider>
		        <div v-for="item in items">
		          <a :href="item.to">
		            <img class="needsclick" :src="item.img">
		          </a>
		        </div>
	    	</slider>
        </div>
		
		<!-- <Analysis02></Analysis02> -->
		
	</div>
</template>
<script>
import Slider from 'base/slider/slider'
import Analysis02 from './analysis-02'
import image1 from '../../assets/images/carousel/1.png'
import image2 from '../../assets/images/carousel/2.png'
import image3 from '../../assets/images/carousel/3.png'
import image4 from '../../assets/images/carousel/4.png'
export default {
	name: 'Shanxi02',
	data () {
		return {
			nowLocal: 0,
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
	},
	created(){
	},
	mounted(){
		
	},
	methods: {
		
	},
	components: {
		Slider,
		Analysis02
	}
}
	
</script>
<style lang='less'>
	
</style>