<script setup>
const active = ref(0)
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
				<view class="abs-bottom-item-title">普通美女视频</view>
				<view class="abs-bottom-item-title">快手美女视频</view>
				<view class="abs-bottom-item-title">抖音美女视频</view>
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
	color: #fff;
	font-size: 30rpx;
	display: inline-block;
	width: 100%;
	padding: 20rpx 0;
}
</style>
