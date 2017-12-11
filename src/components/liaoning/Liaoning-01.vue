<template>
	<div class="liaoning-01">
		<ul class="items lc">
			<li class="lc-item item clearfix" v-for="(item,index) in items">
				<router-link :to="item.to">
					<img :src="item.img" alt="" class="lc-img f_l">
					<span class="text f_r">{{index+1}}</span>
				</router-link>
			</li>
		</ul>
		<div class="pull" v-show="more">
			<i class="fa fa-spinner rotation" aria-hidden="true"></i>上滑加载更多。。。
		</div>
		<div class="pull" v-show="!more">
			没数据了。
			<router-link to="/jilin">
				内容解析
			</router-link>
		</div>
	</div>
</template>
<script>
	import image from '../../assets/images/logo.png'
	export default{
		name: 'Liaoning01',
		data () {
			return {
				id: 'example',
				items: [
					{
						img: image,
						to: '/'
					},
					{
						img: image,
						to: '/'
					},
					{
						img: image,
						to: '/'
					},
					{
						img: image,
						to: '/'
					},
					{
						img: image,
						to: '/'
					}
				],
				more: true,
				number: 0
			}
		},
		created (){
			
		},
		mounted (){
			this.$emit('pageChange','example');
			this.element=document.querySelector('.liaoning-01');
			this.elementParent=document.querySelector('.liaoning-01').parentNode;
            this.load();
			this.onScroll();
		},
		methods: {
			//页面别卷起的高度
			scrollTop(){
				return this.elementParent.scrollTop;
			},
			//视口高度
			clientHeight(){
		        return this.elementParent.clientHeight;
		    },
		    //页面文档总高度
		    documentHeight(){
		        return this.element.offsetHeight;
		    },
		    onScroll(){
		    	var _this=this;
		    	this.elementParent.addEventListener('scroll',function () {
		    		if(_this.scrollTop()+_this.clientHeight()-50>=(_this.documentHeight())){
		    			setTimeout(function () {
			    			if (_this.number<=2) {
			    				_this.loadDown();
					            _this.number++;
					        } else{
			    				_this.more=false;
			    				return;
			    			}	
		    			},1200)					
					}
		    	})
		    },
		    loadDown(){
		    	var analog=[
					{
						img: image,
						to: '/'
					},
					{
						img: image,
						to: '/'
					},
					{
						img: image,
						to: '/'
					},
					{
						img: image,
						to: '/'
					},
					{
						img: image,
						to: '/'
					}
				];
		    	analog.forEach(item=>{
					this.items.push(item);
	            })
		    },
			load(){
				var _this=this;
				if(this.documentHeight()<=this.clientHeight()-50){
					setTimeout(function () {
		            	_this.loadDown();
		            	_this.load();
		            },1200)
		        } else{
		        	return;
		        }
			}
		}
	}
	
</script>
<style lang='less'>

</style>