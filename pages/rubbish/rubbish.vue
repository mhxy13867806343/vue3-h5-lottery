<script setup>
const name=ref("")
const list=ref([])
</script>
<template>
	<view>
		<van-cell-group inset>
			<van-field  centerrequired v-model="name" label="垃圾分类" placeholder="请输入垃圾分类" clearable  >
				<template #button>
					<van-button  :type="!name.length?'default':'primary'"
					             :autoplay="2000"
					             :touchable="false"
					             :show-indicators="false" block
					             :disabled="!name.length"  hairline size="normal"
					>查询</van-button>
				</template>
			</van-field>
		</van-cell-group>
		<view class="list-data">
			<template v-for="(item,index) in list">
				<view class="item-data" :key="index">
					<view class="time">{{item.name}}</view>
					<view class="context ">{{item.explain}}</view>
					<view class="context ">{{item.contain}}</view>
					<view class="context ">{{item.tip}}</view>
				</view>
			</template>
		</view>
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
