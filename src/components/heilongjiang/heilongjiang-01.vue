<template>
	<div class="heilongjiang-01">
		<div class="exh">
			<ul class="goods lc">
				<li class="goods-item lc-item" v-for="item in items">
					<img src="../../assets/images/logo.png" alt="" class="goods-img f_l lc-img">
					<div class="count f_r">
						<span class="reduce btn btn-default btn-xs" v-on:click="reduce(item)">-</span>
						<input type="text" class="form-control number" aria-describedby="sizing-addon3" v-model="item.number" @keyup="calculate">
						<span class="add btn btn-default btn-xs" v-on:click="add($event,item)">+</span>
					</div>
				</li>
			</ul>
		</div>
		<transition
			appear
			@after-appear="afterEnter"
        	@before-appear="beforeEnter"
        	v-for="(item,index) in dots"
		>
			<span class="dot">
				<!-- <svg class="move_liner">
				                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
				                </svg> -->
			</span>
		</transition>
		<!-- <ul class="dots">
			<li class="dot" v-for="dot in dots" ></li>
		</ul> -->
		<Analysis></Analysis>
	</div>
</template>
<script>
	import Analysis from './analysis'
	export default{
		name: 'heilongjiang-01',
		data () {
			return {
				dots: [],
				windowHeight: null,
				elementLeft: 0,
				elementBottom: 0
			}
		},
		mounted() {
			this.windowHeight = window.innerHeight;
		},
		computed: {
			items (){
				return this.$store.getters.getItems
			}
		},
		methods: {
			add(event,item) {
				item.number++;
				this.dots.push(true);
				this.elementLeft=event.target.getBoundingClientRect().left;
				this.elementBottom=event.target.getBoundingClientRect().bottom;
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
				this.$store.dispatch('calculateNumber',obj);
			},
			beforeEnter(element){
                element.style.transform = `translate3d(${this.elementLeft-30}px,${37+this.elementBottom-this.windowHeight}px,0)`;
                element.style.opacity = 0;
            },
            afterEnter(element){
                element.style.transform = `translate3d(0,0,0)`;
                element.style.transition = 'transform .55s cubic-bezier(0.3, -0.25, 0.7, -0.15)';
                element.style.transition = 'transform .55s linear';
                this.items.forEach(function (item) {
                	item=false;
                });
                element.style.opacity = 1;
                /*el.children[0].addEventListener('transitionend', () => {
                    this.listenInCart();
                })
                el.children[0].addEventListener('webkitAnimationEnd', () => {
                    this.listenInCart();
                })*/
            },
		},
		components: {
			Analysis
		}
	}
</script>
<style lang='less'>
	
</style>

