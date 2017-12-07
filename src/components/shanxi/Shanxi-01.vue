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
		</div>
		<div class="content">
			<div class="vs html">
			<pre><code>
&lt;div class=&quot;carousel-container&quot;&gt;
  &lt;ul class=&quot;carousel-items&quot; 
    :style=&quot;{width: items.length*100+&#39;%&#39;,left: -100*nowLocal+&#39;%&#39;}&quot; 
    @touchstart=&quot;actionStart($event)&quot; 
    @touchmove=&quot;actionMove($event)&quot; 
    @touchend=&quot;actionEnd($event)&quot;&gt;
    &lt;li class=&quot;carousel-item f_l&quot; v-for=&quot;item in items&quot; 
      :style=&quot;{width: 100/items.length+&#39;%&#39;}&quot;&gt;
      &lt;router-link :to=&quot;item.to&quot;&gt;
        &lt;img :src=&quot;item.img&quot; alt=&quot;&quot;&gt;
      &lt;/router-link&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</code></pre>
			</div>
			<div class="vs js">
				<pre><code>
import image1 from &#39;../../assets/images/carousel/1.png&#39;
import image2 from &#39;../../assets/images/carousel/2.png&#39;
import image3 from &#39;../../assets/images/carousel/3.png&#39;
import image4 from &#39;../../assets/images/carousel/4.png&#39;
export default {
  name: &#39;Shanxi01&#39;,
  data () {
    return {
      nowLocal: 0,
      items: [
        {
          img: image1,
          to: &#39;/&#39;
        },
        {
          img: image2,
          to: &#39;/&#39;
        },
        {
          img: image3,
          to: &#39;/&#39;
        },
        {
          img: image4,
          to: &#39;/&#39;
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
    $(&#39;.carousel-items&#39;).css({
      &#39;transition-duration&#39;: &#39;0.5s&#39;
    });
    this.width
      =this.getStyle($(&#39;.carousel-items&#39;)[0],&#39;width&#39;)/this.items.length;
  },
  methods: {
    turn(n){
      var index=this.nowLocal+n;
      if (index&lt;0) {
        index=index+this.items.length;  
      }
      if (index&gt;=this.items.length) {
        index=index-this.items.length;
      }
      this.nowLocal=index;
    },
    goPlay(){
      this.play=setInterval(()=&gt;{
        this.turn(1);
      },3000)
    },
    actionStart(e){
      this.pageX=e.touches[0].pageX;
      $(&#39;.carousel-items&#39;).css({
        &#39;transition-duration&#39;: &#39;0s&#39;
      });
      clearInterval(this.play);
    },
    actionMove(e){
      this.disX=e.touches[0].pageX-this.pageX;
      $(&#39;.carousel-items&#39;).css({
        left: -this.nowLocal*this.width+this.disX+&#39;px&#39;
      });
    },
    actionEnd(e){
      var width=this.width/2;
      var distance=this.disX;
      var positive=Math.abs(distance);
      var index=this.nowLocal;
      if(distance&lt;0&amp;&amp;positive&gt;width&amp;&amp;++index&gt;=this.items.length){
        index--;  
      } else if(distance&gt;0&amp;&amp;positive&gt;width&amp;&amp;--index&lt;0){
        index++;    
      }
      this.animateMove(index);
      this.nowLocal=index;
    },
    animateMove(index){
      var _this=this;
      $(&#39;.carousel-items&#39;).animate({ 
        left: -index*100+&#39;%&#39;
      }, 200,function () {
        $(&#39;.carousel-items&#39;).css({
          &#39;transition-duration&#39;: &#39;0.5s&#39;
        });
        _this.goPlay();
      });
    },
    getStyle(ele,attr){
      return parseFloat(
      	ele.currentStyle?ele.currentStyle[attr]:getComputedStyle(ele)[attr]
      	);
    }
  }
}
</code></pre>
			</div>

			<div class="vs">
				<ul>
					<li>1.样式设定。html中<code>:style=&quot;{width: items.length*100+&#39;%&#39;,left: -100*nowLocal+&#39;%&#39;}&quot;</code>首先动态计算轮播图父级样式，<code>:style=&quot;{width: 100/items.length+&#39;%&#39;}&quot;</code>实现轮播图子级样式。</li>
					<li>2.图片引入。内容为固定的值，直接写<code>&lt;img src=&quot;../../assets/images/carousel/1.png&quot; /&gt;</code>。本地图片引入，因为在js里写图片路径只是字符串，webpack不会处理，所以需要用<code>import</code> <code>require</code>引入。线上图片引入，直接写地址。</li>
					<li>3.轮播图的自动轮播。<code>turn</code>实现了当前位置数值<code>nowLocal</code>的增减和判断。<code>goPlay</code>通过定时器<code>setInterval</code>实现轮播图每隔3s进行变化。需要看到位置变化过程，则在生命周期<router-link to="/aomen/lifecycle"><code>mounted</code></router-link>函数中设定轮播图的<code>transition-duration</code>;</li>
					<li>4.手势操作轮播图。 <code>touchstart</code>、 <code>touchmove</code> 、<code>touchend</code> 实现了手指接触轮播图停止，手指拖动轮播图滑动，手指离开轮播图继续自动轮播图的功能。手指操作轮播图过程中不需要有过渡效果持续的情况，在<code>touchstart</code>将<code>transition-duration</code> 设定为0s。同时，通过触发函数 <code>actionStart($event)</code> 传到的方法中的事件对象 <code>$event</code>获得手指滑动的初始位置 <code>e.touches[0].pageX</code> 。在手指滑动过程中， <code>touchmove</code>通过现在手指位置与原来位置的比对来设定轮播图的位置。手指离开时，<code>touchend</code>通过拖动距离和图片一半宽度的条件对比，判断轮播图左滑还是右滑恢复正常位置，以及随后的自动轮播重启。</li>
				</ul>
			</div>

		</div>
	</div>
</template>
<script>
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
	}
}
	
</script>
<style lang='less'>
	
</style>