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
			:key="dot.id"
			name="dotslist"
			appear
			v-on:before-appear="beforeAppear"
			v-on:appear="appear"
			v-on:after-appear="afterAppear"
			
			v-for="(dot, index) in dots">
			<div
			v-if="dot.show"
			class="dot"
			:data-id="dot.id"
			:style="{transform: `translate3d(${dot.x}px, ${dot.y}px, 0)`}">
				+
			</div>
		</transition>
		<div class="targetEle"></div>



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
				elementBottom: 0,
				speed: 4,
      			target: {x: 0, y: 600}
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
				// this.dots.push(true);
				/*this.elementLeft=event.target.getBoundingClientRect().left;
				this.elementBottom=event.target.getBoundingClientRect().bottom;*/
				
				this.addDots(event.pageX, event.pageY);
				this.calculate();
			},
			setTarget(){
				var obj=$('.nav-total');
				this.target={
					x: obj.offset().left+obj.width()/2,
					y: obj.offset().top+obj.height()/2
				}
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
			addDots(x,y){
				this.setTarget();
				var dots=this.dots;
				dots.push({id: new Date().getTime(),x,y,show:true});
			},
			dotMove(el, x, y, a, done){
				// var style = el.style
			    // 记录下起始点坐标
			    var originX=x;
			    var originY=y;
			    // console.log(x,y,1111111111);
			    var moveFn=(x, y) => {
			    	requestAnimationFrame(()=>{
			    		console.log(11);
			    		el.style.transform=`translate3d(${x}px, ${y}px, 0)`;
			    		if(x > this.target.x) {
			    			x-=this.speed;
			    			y=a*Math.pow(x-originX, 2)+originY;
			    			moveFn(x, y);
			    		} else {
							return false;
			    			done()
			    		}
			    	})
			    }
			    moveFn(x, y)
			},
			appear(el, done) {
				var dots = this.dots;
				var target = this.target;
				var id = el.dataset.id;
				var x, y;
				for (var i=0; i< dots.length; i++) {
					if (dots[i].id == id) {
						x = dots[i].x;
						y = dots[i].y;
						break;
					}
				}
			    // var {x, y} = dots[id]
			    // 假设抛物线顶点在原点，则抛物线方式为 y = a*Math.pow(x-h, 2) + k，
			    // 其中(h,k)即为抛物线顶点坐标
			    var a = (target.y-y)/Math.pow(x-target.x, 2)
			    this.dotMove(el, x, y, a, done);
			    // done()
			},
			afterAppear(el) {
				console.log(2222222);
				var dots = this.dots;
				var id = el.dataset.id;
			    // 隐藏小球
			    for (var i=0; i< dots.length; i++) {
			    	if (dots[i].id == id) {
			    		// console.log(11111111111111111);
			    		dots[i].show = false;
			    		break;
			    	}
			    }
			},
			beforeAppear(){
				console.log(33333);
			}





			/*beforeEnter(element){
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
                el.children[0].addEventListener('transitionend', () => {
                    this.listenInCart();
                })
                el.children[0].addEventListener('webkitAnimationEnd', () => {
                    this.listenInCart();
                })
            },*/
		},
		components: {
			Analysis
		}
	}
</script>
<style lang='less'>
	.dot{
        // transition: all .6s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    }
    .dot {
    	// position: absolute;
    	// width: 20px;
    	// height: 20px;
    	// border-radius: 50%;
    	background-color: skyblue;
    }
    .targetEle {
    	// width: 40px;
    	// height: 40px;
    	background-color: yellowgreen;
    	// transform: translate(580px, 600px);
    }
</style>


