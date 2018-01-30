<template>
	<div class="shanxi-01">
		<div class="carousel-container">
			<ul class="carousel-items" :style="{width: items.length*100+'%',left: -100*nowLocal+'%'}" @touchstart="actionStart($event)" @touchmove="actionMove($event)" @touchend="actionEnd">
				<li class="carousel-item f_l" v-for="item in items" :style="{width: 100/items.length+'%'}">
					<router-link :to="item.to">
						<img :src="item.img" alt="">
					</router-link>
				</li>
			</ul>
			<ul class="carousel-dots">
				<li class="dot" v-for="(item,index) in items" :class="{active:index==nowLocal}"></li>
			</ul>
		</div>
		<Analysis01></Analysis01>
		
	</div>
</template>
<script>
import Analysis01 from './analysis-01'
import image1 from '../../assets/images/carousel/1.png'
import image2 from '../../assets/images/carousel/2.png'
import image3 from '../../assets/images/carousel/3.png'
import image4 from '../../assets/images/carousel/4.png'
export default {
	name: 'Shanxi01',
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
			],
			pageX: 0,
			disX: 0,
			width: 0
		}
	},
	created(){
		this.goPlay();
	},
	mounted(){
		$('.carousel-items').css({
			'transition-duration': '0.5s'
		});
		this.width=this.getStyle($('.carousel-items')[0],'width')/this.items.length;
	},
	methods: {
		turn(n){
			var index=this.nowLocal+n;
			if (index<0) {
				index=index+this.items.length;	
			}
			if (index>=this.items.length) {
				index=index-this.items.length;
			}
			this.nowLocal=index;
		},
		goPlay(){
			this.play=setInterval(()=>{
				this.turn(1);
			},3000)
		},
		actionStart(e){
			this.pageX=e.touches[0].pageX;
			$('.carousel-items').css({
				'transition-duration': '0s'
			});
			clearInterval(this.play);
		},
		actionMove(e){
			this.disX=e.touches[0].pageX-this.pageX;
			$('.carousel-items').css({
				left: -this.nowLocal*this.width+this.disX+'px'
			});
		},
		actionEnd(){
			var width=this.width/2;
			var distance=this.disX;
			var positive=Math.abs(distance);
			var index=this.nowLocal;
			if(distance<0&&positive>width&&++index>=this.items.length){
				index--;	
			} else if(distance>0&&positive>width&&--index<0){
				index++;		
			}
			this.animateMove(index);
			this.nowLocal=index;
		},
		animateMove(index){
			var _this=this;
			$('.carousel-items').animate({ 
				left: -index*100+'%'
			}, 200,function () {
				$('.carousel-items').css({
					'transition-duration': '0.5s'
				});
				_this.goPlay();
			});
		},
		getStyle(ele,attr){
			return parseFloat(ele.currentStyle?ele.currentStyle[attr]:getComputedStyle(ele)[attr]);
		}
	},
	components: {
		Analysis01
	}
}
	
</script>
<style lang='less'>
	
</style>