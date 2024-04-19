<script setup>
const name=ref("")
const list=ref([
	{
		name: "富士苹果",
		type: 2,
		aipre: 0,
		explain: "厨余垃圾是指居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾。",
		contain: "常见包括菜叶、剩菜、剩饭、果皮、蛋壳、茶渣、骨头等",
		tip: "纯流质的食物垃圾、如牛奶等，应直接倒进下水口。有包装物的湿垃圾应将包装物去除后分类投放、包装物请投放到对应的可回收物或干垃圾容器"
	},
	{
		name: "红苹果",
		type: 2,
		aipre: 0,
		explain: "厨余垃圾是指居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾。",
		contain: "常见包括菜叶、剩菜、剩饭、果皮、蛋壳、茶渣、骨头等",
		tip: "纯流质的食物垃圾、如牛奶等，应直接倒进下水口。有包装物的湿垃圾应将包装物去除后分类投放、包装物请投放到对应的可回收物或干垃圾容器"
	},
	{
		name: "苹果",
		type: 2,
		aipre: 0,
		explain: "厨余垃圾是指居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾。",
		contain: "常见包括菜叶、剩菜、剩饭、果皮、蛋壳、茶渣、骨头等",
		tip: "纯流质的食物垃圾、如牛奶等，应直接倒进下水口。有包装物的湿垃圾应将包装物去除后分类投放、包装物请投放到对应的可回收物或干垃圾容器"
	},
	{
		name: "苹果核",
		type: 2,
		aipre: 0,
		explain: "厨余垃圾是指居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾。",
		contain: "常见包括菜叶、剩菜、剩饭、果皮、蛋壳、茶渣、骨头等",
		tip: "纯流质的食物垃圾、如牛奶等，应直接倒进下水口。有包装物的湿垃圾应将包装物去除后分类投放、包装物请投放到对应的可回收物或干垃圾容器"
	},
	{
		name: "苹果皮",
		type: 2,
		aipre: 0,
		explain: "厨余垃圾是指居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾。",
		contain: "常见包括菜叶、剩菜、剩饭、果皮、蛋壳、茶渣、骨头等",
		tip: "纯流质的食物垃圾、如牛奶等，应直接倒进下水口。有包装物的湿垃圾应将包装物去除后分类投放、包装物请投放到对应的可回收物或干垃圾容器"
	},
	{
		name: "苹果耳机",
		type: 0,
		aipre: 0,
		explain: "可回收垃圾是指适宜回收、可循环利用的生活废弃物。",
		contain: "常见包括各类废金属、玻璃瓶、易拉罐、饮料瓶、塑料玩具、书本、报纸、广告单、纸板箱、衣服、床上用品、电子产品等",
		tip: "轻投轻放；清洁干燥，避免污染，费纸尽量平整；立体包装物请清空内容物，清洁后压扁投放；有尖锐边角的、应包裹后投放"
	},
	{
		name: "青苹果",
		type: 2,
		aipre: 0,
		explain: "厨余垃圾是指居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾。",
		contain: "常见包括菜叶、剩菜、剩饭、果皮、蛋壳、茶渣、骨头等",
		tip: "纯流质的食物垃圾、如牛奶等，应直接倒进下水口。有包装物的湿垃圾应将包装物去除后分类投放、包装物请投放到对应的可回收物或干垃圾容器"
	}
])
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
