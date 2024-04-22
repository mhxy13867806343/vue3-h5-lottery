<script setup>
import {setStorageSync,cacheDataRef} from '@/common/tools'
import useOuters from "@/hooks/useOuters";
const {getHotlistall,list}=useOuters()
onMounted(async ()=>{
	await getHotlistall()
})
const goClickDetail=(url, mobilUrl)=>{
	uni.navigateTo({
		url: `/pages/localUrl/localUrl?type=hot`
	})
	setStorageSync(cacheDataRef.hot, mobilUrl)

}
</script>
<template>
	<view class="app-container">
		<view class="hotlist-list" v-for="(item, index) in list" :key="index">
			<view class="hotlist-header">
				<view class="hotlist-name">
					{{ item.name}}({{ item.data.length||0}})
				</view>
				<view class="hotlist-subtitle">
					<text>{{ item.subtitle}}</text>
					<text> {{ item.update_time}}</text>
				</view>
				
			</view>
			<view v-for="(item2, index2) in item.data" :key="index2" class="hotlist-item">
				<view class="hotlist-item-top">
					<text class="hotlist-item-top-last" :class="{'hotlist-item-top-hot': item2.index<4}">
						{{ item2.index}}
					</text>
					
				</view>
				<view class="hotlist-item-bottom">
					<view class="hotlist-item-left">  {{ item2.title }}</view>
					<view class="hotlist-item-right">
						<view class="iconfont icon-liulanliang"></view>
						<text>{{ item2.hot }}</text>
						<view class="hotlist-item-detail" @click="goClickDetail(item2.url, item2.mobilUrl)">详情</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>




<style scoped
       lang="scss">
.hotlist-list{
	box-shadow: 0 0 10rpx 3rpx hsla(0,0%,64.7%,.5);
	border-radius: 10rpx;
	padding: 14rpx;
	margin-bottom: 40rpx;
	.hotlist-header{
		display: flex;
		justify-content: space-between;
		padding-bottom: 14rpx;
		.hotlist-name{
			font-weight: bold;
		}
		.hotlist-subtitle{
			uni-text{
				font-weight: 100;
				color: #222;
				padding-left: 10rpx;
				&:first-child{}
				&:last-child{}
			}
		}
	}
	
	.hotlist-item{
		box-shadow: 0 0 10rpx 3rpx hsla(0,0%,64.7%,.2);
		border-radius: 10rpx;
		padding: 30rpx;
		margin-top: 14rpx;
		display: flex;
		.hotlist-item-top{
			align-items: center;
			display: flex;
			.hotlist-item-top-last{
				font-size: 36rpx;
				margin-right: 16rpx;
			}
			.hotlist-item-top-hot{
				font-size: 50rpx;
				color: #fe2d46;
				
			}
		}
		.hotlist-item-bottom{
			flex:1;
			font-smoothing: antialiased;
			.hotlist-item-left,.hotlist-item-right{
				font-size: 26rpx;
				line-height: 40rpx;
			}
			.hotlist-item-left{}
			.hotlist-item-right{
				color: #222;
				display: flex;
				uni-text{
					padding-left: 10rpx;
				}
				.hotlist-item-detail{
					display: inline-flex;
					flex:1;
					justify-content: flex-end;
				}
			}
		}
	}
}
</style>
