<script setup>
const active = ref(0)
const onMmVideoClick = (index) => {
	active.value = index
}
</script>
<template>
	<view class="app-sweeper">
		<swiper class="swiper" circular indicator-dots autoplay vertical>
			<swiper-item>
				<video src=""></video>
			</swiper-item>
		</swiper>
		<view class="abs-bottom">
			<view class="abs-bottom-item">
				<view class="abs-bottom-item-title"
				      :class="{'active': active === 0}"
				      @click="onMmVideoClick(0)">普通美女视频</view>
				<view 	      :class="{'active': active ===1}" class="abs-bottom-item-title"  @click="onMmVideoClick(1)">快手美女视频</view>
				<view 	      :class="{'active': active === 2}" class="abs-bottom-item-title"  @click="onMmVideoClick(2)">抖音美女视频</view>
			</view>
		</view>
	</view>
</template>




<style scoped
       lang="scss">
.swiper,uni-video{
	height: 100vh;
  width: 100vw;
}
.abs-bottom-item-title{
	color: #000;
	font-size: 30rpx;
	display: inline-block;
	width: 33.33%;
	padding: 20rpx 0;
	text-align: center;
	&.active{
		color: #fff;
		font-size: 36rpx;
	}
}
</style>
