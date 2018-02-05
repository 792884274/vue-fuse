<template>
	<div id="" class="scroll-container">
		<div class="wrapper" id="wrapper" ref="wrapper">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default{
		name: 'Scroll-x',
		data(){
			return {
				scroll: null
			}
		},
		mounted (){
			this.$nextTick(() => {
				if (!this.scroll) {
					this.scroll=new BScroll(this.$refs.wrapper, {
						deceleration: 0.001,
	                    bounce: true,
	                    swipeTime: 2000,
						scrollX: true,
						scrollY: false,
		                click: true,
		            });	
		        } else{
					this.scroll.refresh();
				}	
            })
		}
	}
</script>
<style lang='less'>
	.scroll-container{
		position: relative;
		height: 50px;
		width: 100%;
		padding: 0;
		margin: 0;
		z-index: 12;
	    &::-webkit-scrollbar {
	        display: none;
	    }
	    #wrapper{
	    	position: relative;
		    z-index: 1;
		    height: 100%;
		    width: 100%;
		    overflow-x: scroll;
		    overflow-y: hidden; 
		    &::-webkit-scrollbar {
		        display: none;
		    }
	    }
	    #scroller {
		    position: absolute;
		    z-index: 1;
		    height: 100%;
		    &:nth-child(1){
		    	height: 100%;
				display: flex;
		    }
		}
	}
</style>