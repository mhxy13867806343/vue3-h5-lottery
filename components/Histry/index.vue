<script setup>
import store from "@/store";

const emit=defineEmits(["click"])

const onClickDel=()=>{
	uni.showModal({
		title: '提示',
		content: '是否要清空历史记录',
		success: res=> {
			if (res.confirm) {
				store.commit("setClearHistryList")
				uni.showToast({
					title: '清空成功',
					icon: 'none'
				});
			} else if (res.cancel) {
			
			}
		}
	});
	
}
</script>

<template>
	<view class="app-container search-histry" v-if="store.state.histryList.length">
		<view class="search-histy-data search-uv-flex">
			<view class="text search-h1-24">搜索的历史记录</view>
			<uv-icon name="close"  size="18"   @click="onClickDel"></uv-icon>
		</view>
		<view class="search-uv-flex search-histy-data-item flex-wrap">
			<text  type="primary" class="search-h1-24 flex-wrap"
			       size="large"
			     @click="emit('click',item,index)"
			       v-for="(item,index) in store.state.histryList" :key="index"
			>{{ item}}</text>
		
		</view>
	</view>
</template>

<style scoped
       lang="scss">
.search-histry{
	.search-histy-data{
		justify-content: space-between;
		text{
			font-size: 24rpx;
		}
	}
	.search-histy-data-item{
		text{
			padding: 30rpx;
			color: #999;
			font-weight: 700;
			align-items: center;
			display: flex;
		}
	}
}

</style>
