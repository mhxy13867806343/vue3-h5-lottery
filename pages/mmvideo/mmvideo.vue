<script setup>
import {
	getGirlMM as getGirlMMApi,
	getZzxjj as getZzxjjApi,
	getDouyinMM as getDouyinMMApi,
	
} from '@/api/outer'
const xxooMMVideos = ref('')
const postion=ref('');
const active = ref(0)
const startData=reactive( {
	clientY: "",
	clientX: "",
})
const endData=reactive( {
	clientY: "",
	clientX: "",
})
const itemTouchStartX = ref()	//按下的位置
onMounted(() => {
	onMmVideoClick(0)
})
const onMmVideoClick = (index) => {
	active.value = index
	xxooMMVideos.value=''
	youGetxxooMM(index)
}
const youGetxxooMM=async index=>{
	if(index===0){
		
		await getGirlMMApi().then(res=>{
			const {error,result,mp4}=res
			if(result===200){
				xxooMMVideos.value=mp4
			}
		})
	}else if(index===1){
		await getZzxjjApi().then(res=>{
			xxooMMVideos.value=res
		})
	}else if(index===2){
		await getDouyinMMApi().then(res=>{
			const {url,code}=res
			if(code===200){
				console.log(url,222)
				xxooMMVideos.value=url
			}
		})
	
	}
}
const itemTouchStart=e=>{
	startData.clientX = e.changedTouches[0].clientX;
	startData.clientY = e.changedTouches[0].clientY;
}
const itemTouchEnd=e=>{
	endData.clientX = e.changedTouches[0].clientX;
	endData.clientY = e.changedTouches[0].clientY;
}
const swiperChange=e=>{
	const subX = endData.clientX -startData.clientX;
	const subY = endData.clientY - startData.clientY;
	if(subY>30){
		console.log('上滑')
	}
	if(subY<-30){
		console.log('下滑')
	}
}
</script>
<template>
	<view class="app-sweeper">
		
		<uv-icon size="50" name="reload" @click="onMmVideoClick(active)"></uv-icon>
		
		<swiper @change="swiperChange" vertical :disable-touch="false" class="swiper" circular indicator-dots autoplay  @touchstart="itemTouchStart" @touchend="itemTouchEnd">
			<swiper-item >
				<video :src="xxooMMVideos" autoplay loop></video>
			</swiper-item>
		</swiper>
		<view class="abs-bottom">
			<view class="abs-bottom-item">
				<view class="abs-bottom-item-title"
				      :class="{'active': active === 0}"
				      @click="onMmVideoClick(0)">普通美女视频</view>
				<view 	      :class="{'active': active ===1}" class="abs-bottom-item-title"  @click="onMmVideoClick(1)">快手美女视频</view>
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
	width: 50%;
	padding: 20rpx 0;
	text-align: center;
	&.active{
		color: #fff;
		font-size: 36rpx;
	}
}
.uv-icon--right{
	position: fixed;
	right:20rpx;
	bottom: 5%;
	z-index:9999;
}
</style>
