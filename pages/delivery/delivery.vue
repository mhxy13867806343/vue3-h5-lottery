<script setup>
const code=ref("")
const list=ref([
	{
		time: "2024-04-18 16:38:55",
		context: "您的快件已代签收【家门口】，如有疑问请电联快递员【吴贵鸿，电话:19011418376】。连接美好，无处不在，感谢您使用中国邮政，期待再次为您服务。"
	},
	{
		time: "2024-04-18 14:48:26",
		context: "快件正在派送中，请耐心等待，保持电话畅通，准备签收，如有疑问请电联快递员【吴贵鸿，电话:19011418376】或揽投部【电话:0571-82150035】，投诉请致电11183。"
	},
	{
		time: "2024-04-18 14:43:26",
		context: "快件到达【杭州市钱塘义盛第一揽投部】"
	},
	{
		time: "2024-04-18 12:04:39",
		context: "快件离开【杭州市大江东包件车间】，正在发往下一站"
	},
	{
		time: "2024-04-18 04:46:31",
		context: "快件到达【杭州市大江东包件车间】"
	},
	{
		time: "2024-04-17 22:42:34",
		context: "快件离开【温州市滨海包件车间】，正在发往下一站"
	},
	{
		time: "2024-04-17 19:23:29",
		context: "快件到达【温州市滨海包件车间】"
	},
	{
		time: "2024-04-17 17:12:22",
		context: "快件离开【温州市滨海仓配揽投部】，正在发往下一站"
	},
	{
		time: "2024-04-17 16:42:27",
		context: "快件到达【温州市滨海仓配揽投部】"
	},
	{
		time: "2024-04-17 10:07:59",
		context: "快件离开【温州市电商客户大户揽投部】，正在发往【温州市滨海仓配揽投部】"
	},
	{
		time: "2024-04-17 10:07:58",
		context: "快件已在【温州市电商客户大户揽投部】完成分拣，准备发出"
	},
	{
		time: "2024-04-17 10:07:54",
		context: "中国邮政 已收取快件"
	}
])
</script>
<template>
	<view>
		<van-cell-group inset>
			<van-field  centerrequired v-model="code" label="快递单号" placeholder="请输入快递单号" clearable  >
				<template #button>
					<van-button  :type="!code.length?'default':'primary'"
					             :autoplay="2000"
					             :touchable="false"
					             :show-indicators="false" block
					:disabled="!code.length"  hairline size="normal"
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
