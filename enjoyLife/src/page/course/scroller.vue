<template>
   <div class="wrapper" ref="wrapper">
     <div class="content">
	     <div>
	      <swiper :options="swiper">
	        <swiper-slide v-for="item in slider" :key="item.id">
	          <div class="banner_wrap" @click="handleBannerClick(item.url)">
	            <img :src="item.pic">
	          </div>
	        </swiper-slide>
	        <div class="swiper-pagination"  slot="pagination"></div>
	      </swiper>
	    </div>
	     <div v-for="(items, key, index) in classify" class="inner" :key="index">
	     	<h2 class="title">{{key}}</h2>
			<swiper :options="swiperOption"  ref="swiper">
		        <swiper-slide v-for="item in items" :key="item.id">
		          <div class="des_wrap" @click.preventDefault="handleClick(item.cid)">
		            <img :src="item.pic">
		          </div>
		          <div class="des">
		          	<div class="strength">
		          		<i class="des_title">强度</i>
		          		<span class="iconfont active" v-for="span in item.parent">&#xe6d9;</span>
		          		<span class="iconfont" v-for="ie in Math.abs(5 - item.parent )">&#xe6d9;</span>
		          	</div>
		          	<div class="person">
		          		{{item.classname}}
		          	</div>
		          </div>
		        </swiper-slide>
	      	</swiper>
	     </div>
     </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroller',
  props: {
    classify: Object,
    slider: Array,
    num: ''
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1.7,
        spaceBetween: 5,
        initialSlide: 0,
        observer: true,
        observerParents: true,
        passiveListeners: false
      },
      swiper: {
        initialSlide: 1,
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 8000,
        observer: true,
        observeParents: true,
        speed: 3000
      }
    }
  },
  methods: {
    handleClick (id) {
      this.$router.push({
        name: 'sportDetail',
        params: {id: id}
      })
    },
    refreshSwiper () {
      this.$refs.swiper.forEach((value) => {
        value.swiper.slideTo(0)
      })
    },
    handleBannerClick (url) {
      window.open(url)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    })
  }
}
</script>


<style scoped>
 .banner_wrap {
    width: 100%;
    height: 0;
    padding-bottom: 40%;
    overflow: hidden;
  }
  .banner_wrap img {
    width: 100%;
  }
  .swiper-pagination >>> .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
  }
  .swiper-pagination >>> .swiper-pagination-bullet-active {
    background: #60adfe;
    opacity: 1;
  }
	.inner {
		margin-bottom: 0.1rem;
		position: relative;
		background: #fff;
		padding-left: 0.2rem;
	}
	.title {
		line-height: 0.9rem;
		background: #fff;
		font-size: 0.3rem;
		color: #333;
	}
	.des {
		width: 100%;
		height: 0.8rem;
		overflow: hidden;
		padding-left: 0.1rem;
		box-sizing: border-box;
	}
	.des_wrap {
		width: 100%;
		height: 0;
		padding-bottom: 52%;
		overflow: hidden;
	}
	.des_wrap img {
		width: 100%;
	}
	.des_title {
		font-size: 0.23rem;
		color: #757575;
		margin-right: 0.02rem;
	}
	.strength {
		margin-top: 0.1rem;
		font-size: 0;
	}
	.person {
		margin-top: 0.16rem;
		font-size: 0.18rem;
		color: #808080;
	}
	.iconfont {
		margin-left: 0.08rem;
		font-size: 0.18rem;
	}
	.active {
		color: #78b9fe;
	}
</style>
