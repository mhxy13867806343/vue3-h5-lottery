<script setup>
import {getToolaiAiCategory} from '@/api/outer'
import { cacheDataRef , formatDayjsTime , formatNumber , getStorageSync } from "@/common/tools";
const categoryList=ref(getStorageSync ( cacheDataRef.category )||[])
const pageIndex=ref(1)
categoryList.value.unshift({
	Category : "",
	href : "",
	text : "所有"
})
const category=ref('')
const list=ref([])
const countComputed=15
const active=ref(0)
const disabled=ref(false)
function position(index, total) {
	const containerWidth = 70; // dot__line的宽度
	const dotWidth = 10; // item-dot的宽度
	return (containerWidth - (dotWidth * total)) / (total + 1) * (index + 1) + (dotWidth * index) + 'px';
}
function calculateLineWidth(totalDots) {
	const padding = 10; // 每个点之间的间距（可调整）
	const dotWidth = 30; // 每个点的宽度
	return (dotWidth + padding) * totalDots - padding + 'px'; // 计算整个线的宽度
}
const onCategoryClick=(item,index)=>{
	pageIndex.value=1
	disabled.value=false
	list.value=[]
	active.value=index
	category.value=item.Category
	getToolaiAiCategory1()
}
onMounted(()=>{
	category.value=categoryList.value[active.value].Category
	getToolaiAiCategory1()
})
const getToolaiAiCategory1=async()=>{
	const data={
		pageIndex:pageIndex.value,
		pageSize:12,
		Category:category.value
	}
	getToolaiAiCategory(data).then(res=>{
		const {Code,Data:{
			Records,
			NextHasData
		}}=res
		if(Code===0){
			if(Records.length<12){
				disabled.value=true
			}
			if(Records.length){
				list.value=[...list.value,...Records] ||[]
			}
			else if(!NextHasData){
				disabled.value=true
			}
		}
	})
}
const onCategoryBtnClick=()=>{
	pageIndex.value+=1
	getToolaiAiCategory1()
}
</script>
<template>
	<view class="app-container">
		<van-sticky>
		<view class="scroll-view">
			<scroll-view class="scroll-view_H  flex-wrap search-uv-flex" scroll-x="true">
				<text class="item-category search-h1-26" v-for="(item,index) in categoryList" :key="index"
				      @click="onCategoryClick(item,index)"
				:style="{color:active==index?'rgb(245, 108, 108)':''}"
				      :class="active==index?'search-h1-32-active ':''"
				>
					{{ item.text}}
				</text>
			
			</scroll-view>
		</view>
		</van-sticky>
		<view v-for="(item,index) in list" :key="item.Id">
			<uni-section title="">
				<uni-card is-shadow
				          :title="item.Title"
				          extra="">
					<view class="item-btn">
						{{  index+1}}.<uv-link :href="`https://www.toolai.io/zh/ai/${item.Handle}`" :text="item.Title" under-line class="a-link"></uv-link>
					</view>
					<view class="flex-wrap search-uv-flex">
						<uv-image
						          :src="item.Img" observeLazyLoad
						          width="100%"
						          height="200rpx"
						>
							<template v-slot:loading>
								<uv-loading-icon color="red"></uv-loading-icon>
							</template>
							<template v-slot:error>
								<view style="font-size: 24rpx;">加载失败</view>
							</template>
						</uv-image>
					</view>
					<view class="Description Desc search-h1-24">
						<text v-html="item.Description" class="search-h1-24"></text>
					</view>
					<view class="ZDescription Desc search-h1-24">
						<text v-html="item.ZDescription" class="search-h1-24"></text>
					</view>
				</uni-card>
			
			</uni-section>
		</view>
		<uv-empty v-if="!list.length" :text="`暂无相关数据`"></uv-empty>
		<button class="btn-more btn-shine" v-if="list.length"
		        :disabled="disabled"
		@click="onCategoryBtnClick"
		>
			<text>{{ !disabled?'下一步':'没有更多的数据了'}}</text>
		</button>
	</view>
</template>




<style scoped lang="scss">

.scroll-view{
	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
	position: relative;
	.scroll-view_H {
		display: inline-block;
		width: 100%;
		white-space: nowrap;
		height: 100rpx;
		text-align: center;
		background: #fff;
		
	}
	.item-category{
		padding: 20rpx;
	}
	.dot__line{
		width: 70rpx;
		height: 10rpx;
		border-radius: 200rpx;
		overflow: hidden;
		background-color: rgb(255, 240, 240);
		position: absolute;
		left: 50%;
		top: 40rpx;
		.item-dot{
			border-radius: 40rpx;
			background-color: rgb(245, 108, 108);
			width: 30rpx;
			height: 5rpx;
			position: absolute;
			&:nth-child(2n-1){
				left: 40rpx;
			}
		}
	}
	.search-h1-32-active{
		font-size: 32rpx;
		position: relative;
		&:before{
			position: absolute;
			content: '';
			width: 20rpx;
			height: 4rpx;
			border-radius: 10rpx;
			background: rgb(245, 108, 108);
			
			left: 50%;
			bottom: 0;
		}
	}
}
.Desc{
	margin: 30rpx 0;
	text{
		color: #999999;
	}
}
.item-btn {
	background-color: #444141;
	border-radius: 8rpx;
	color: #fff;
	cursor: pointer;
	padding: 30rpx 60rpx;
	font-size: 36rpx;
	font-weight: bold;
	letter-spacing: 2rpx;
	border: none;
}

.item-btn:hover {
	background-image: linear-gradient(
			90deg,
			#53cbef 0%,
			#dcc66c 50%,
			#ffa3b6 75%,
			#53cbef 100%
	);
	animation: slidernbw 5s linear infinite;
	color: #000;
}

@keyframes slidernbw {
	to {
		background-position: 20vw;
	}
}


button {
	position: relative;
	margin: 0;
	padding: 17px 35px;
	outline: none;
	text-decoration: none;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	cursor: pointer;
	text-transform: uppercase;
	background-color: #fff;
	border: 2rpx solid rgba(22, 76, 167, 0.6);
	border-radius: 20rpx;
	color: #1d89ff;
	font-weight: 400;
	font-family: inherit;
	z-index: 0;
	overflow: hidden;
	-webkit-transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
	transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}

button span {
	color: #164ca7;
	font-size: 28rpx;
	font-weight: 500;
	letter-spacing: 1.4rpx;
}

button:hover {
	-webkit-animation: rotate624 0.7s ease-in-out both;
	animation: rotate624 0.7s ease-in-out both;
}

button:hover span {
	-webkit-animation: storm1261 0.7s ease-in-out both;
	animation: storm1261 0.7s ease-in-out both;
	-webkit-animation-delay: 0.06s;
	animation-delay: 0.06s;
}

@-webkit-keyframes rotate624 {
	0% {
		-webkit-transform: rotate(0deg) translate3d(0, 0, 0);
		transform: rotate(0deg) translate3d(0, 0, 0);
	}
	
	25% {
		-webkit-transform: rotate(3deg) translate3d(0, 0, 0);
		transform: rotate(3deg) translate3d(0, 0, 0);
	}
	
	50% {
		-webkit-transform: rotate(-3deg) translate3d(0, 0, 0);
		transform: rotate(-3deg) translate3d(0, 0, 0);
	}
	
	75% {
		-webkit-transform: rotate(1deg) translate3d(0, 0, 0);
		transform: rotate(1deg) translate3d(0, 0, 0);
	}
	
	100% {
		-webkit-transform: rotate(0deg) translate3d(0, 0, 0);
		transform: rotate(0deg) translate3d(0, 0, 0);
	}
}

@keyframes rotate624 {
	0% {
		-webkit-transform: rotate(0deg) translate3d(0, 0, 0);
		transform: rotate(0deg) translate3d(0, 0, 0);
	}
	
	25% {
		-webkit-transform: rotate(3deg) translate3d(0, 0, 0);
		transform: rotate(3deg) translate3d(0, 0, 0);
	}
	
	50% {
		-webkit-transform: rotate(-3deg) translate3d(0, 0, 0);
		transform: rotate(-3deg) translate3d(0, 0, 0);
	}
	
	75% {
		-webkit-transform: rotate(1deg) translate3d(0, 0, 0);
		transform: rotate(1deg) translate3d(0, 0, 0);
	}
	
	100% {
		-webkit-transform: rotate(0deg) translate3d(0, 0, 0);
		transform: rotate(0deg) translate3d(0, 0, 0);
	}
}

@-webkit-keyframes storm1261 {
	0% {
		-webkit-transform: translate3d(0, 0, 0) translateZ(0);
		transform: translate3d(0, 0, 0) translateZ(0);
	}
	
	25% {
		-webkit-transform: translate3d(4px, 0, 0) translateZ(0);
		transform: translate3d(4px, 0, 0) translateZ(0);
	}
	
	50% {
		-webkit-transform: translate3d(-3px, 0, 0) translateZ(0);
		transform: translate3d(-3px, 0, 0) translateZ(0);
	}
	
	75% {
		-webkit-transform: translate3d(2px, 0, 0) translateZ(0);
		transform: translate3d(2px, 0, 0) translateZ(0);
	}
	
	100% {
		-webkit-transform: translate3d(0, 0, 0) translateZ(0);
		transform: translate3d(0, 0, 0) translateZ(0);
	}
}

@keyframes storm1261 {
	0% {
		-webkit-transform: translate3d(0, 0, 0) translateZ(0);
		transform: translate3d(0, 0, 0) translateZ(0);
	}
	
	25% {
		-webkit-transform: translate3d(4px, 0, 0) translateZ(0);
		transform: translate3d(4px, 0, 0) translateZ(0);
	}
	
	50% {
		-webkit-transform: translate3d(-3px, 0, 0) translateZ(0);
		transform: translate3d(-3px, 0, 0) translateZ(0);
	}
	
	75% {
		-webkit-transform: translate3d(2px, 0, 0) translateZ(0);
		transform: translate3d(2px, 0, 0) translateZ(0);
	}
	
	100% {
		-webkit-transform: translate3d(0, 0, 0) translateZ(0);
		transform: translate3d(0, 0, 0) translateZ(0);
	}
}

.btn-shine {
	border: 1px solid;
	overflow: hidden;
	position: relative;
}

.btn-shine span {
	z-index: 20;
}

.btn-shine:after {
	background: #38ef7d;
	content: '';
	height: 310rpx;
	left: -150rpx;
	opacity: 0.4;
	position: absolute;
	top: -150rpx;
	-webkit-transform: rotate(35deg);
	-ms-transform: rotate(35deg);
	transform: rotate(35deg);
	-webkit-transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
	transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
	width: 100rpx;
	z-index: -10;
}

.btn-shine:hover:after {
	left: 120%;
	-webkit-transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
	transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}
</style>
