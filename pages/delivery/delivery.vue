<script setup>
import useOuters   from "@/hooks/useOuters"
const {onCreatedDeliveryData,list,searchName,isLoading}=useOuters()
onMounted(()=>{
	isLoading.value=true
})
</script>
<template>
	<view>
		<van-cell-group inset>
			<van-field  centerrequired v-model="searchName" label="快递单号" placeholder="请输入快递单号" clearable  >
				<template #button>
					<van-button  :type="!searchName.length?'default':'primary'"
					             :autoplay="2000"
					             :touchable="false"
					             :show-indicators="false" block
					             @click="onCreatedDeliveryData"
					:disabled="!searchName.length"  hairline size="normal"
					>查询</van-button>
				</template>
			</van-field>
		</van-cell-group>
		<view class="list-data">
			<template v-for="(item,index) in list">
				<view class="item-data" :key="index">
					<view class="time">{{item.time}}</view>
					<view class="context ">{{item.context}}</view>
				</view>
			</template>
		</view>
		<uv-empty v-if="!isLoading && !list.length"></uv-empty>
		<van-divider />
	</view>
</template>




<style scoped lang="scss">
.list-data{
	.item-data{
		padding: 20rpx;
		border-bottom: 1px solid #f7f7f7;
		.time{
			font-size: 38rpx;
			color: #999;
			margin-bottom: 10rpx;
			text-align: right;
		}
		.context{
			font-size: 30rpx;
			color: #333;
		}
	}
}
</style>
