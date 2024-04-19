<script setup>
import { computed } from "@vue/composition-api";
const previewShow=ref(false)
const code=ref("")
const list=ref([
	{
		"postid": "",
		"desc": "大家好，这是一周Cosplay秀时刻，每周小编都会为大家推荐一些非常不错的Cosplay作品，本次推荐的作品包括：《仙境传说》、《魔兽世界》等等。",
		"pvnum": "",
		"createdate": "2016-12-20 14:13:42",
		"scover": "http://img3.cache.netease.com/photo/0031/2016-12-20/s_C8O24HEM6LRK0031.jpg",
		"setname": "一周精品Cosplay盘点：第76期",
		"cover": "http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HEM6LRK0031.jpg",
		"pics": [
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HEM6LRK0031.jpg",
			"http://img4.cache.netease.com/photo/0031/2016-12-20/C8O24HOF6LRK0031.jpg",
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HJ46LRK0031.jpg",
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HJ46LRK0031.jpg",
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HJ46LRK0031.jpg",
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HJ46LRK0031.jpg",
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HJ46LRK0031.jpg",
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HJ46LRK0031.jpg",
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HJ46LRK0031.jpg",
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HJ46LRK0031.jpg",
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HJ46LRK0031.jpg",
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HJ46LRK0031.jpg",
		],
		"clientcover1": "",
		"replynum": "0",
		"topicname": "",
		"setid": "91297",
		"seturl": "http://ent.163.com/game/photoview/6LRK0031/91297.html",
		"datetime": "2016-12-20 14:17:21",
		"clientcover": "",
		"imgsum": "20",
		"tcover": "http://img4.cache.netease.com/photo/0031/2016-12-20/t_C8O24HEM6LRK0031.jpg"
	},
	{
		"postid": "",
		"desc": "大家好，这是一周Cosplay秀时刻，每周小编都会为大家推荐一些非常不错的Cosplay作品，本次推荐的作品包括：《仙境传说》、《魔兽世界》等等。",
		"pvnum": "",
		"createdate": "2016-12-20 14:13:42",
		"scover": "http://img3.cache.netease.com/photo/0031/2016-12-20/s_C8O24HEM6LRK0031.jpg",
		"setname": "一周精品Cosplay盘点：第76期",
		"cover": "http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HEM6LRK0031.jpg",
		"pics": [
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HEM6LRK0031.jpg",
			"http://img4.cache.netease.com/photo/0031/2016-12-20/C8O24HOF6LRK0031.jpg",
			"http://img3.cache.netease.com/photo/0031/2016-12-20/C8O24HJ46LRK0031.jpg"
		],
		"clientcover1": "",
		"replynum": "0",
		"topicname": "",
		"setid": "91297",
		"seturl": "http://ent.163.com/game/photoview/6LRK0031/91297.html",
		"datetime": "2016-12-20 14:17:21",
		"clientcover": "",
		"imgsum": "20",
		"tcover": "http://img4.cache.netease.com/photo/0031/2016-12-20/t_C8O24HEM6LRK0031.jpg"
	},
])
const imagesList=ref([])
const imagesIndex=ref(0)
const sysPicPreview=ref({})
const formattedComputedList = computed(() => {
	return list.value.map(item => ({
		...item,
		displayPics: item.pics.slice(0, 9),
		extraCount: item.pics.length > 9 ? `+${item.pics.length - 9}` : ''
	}));
});
const onClickPicPreview = (pics, index,urls) => {
	previewShow.value = true;
	imagesIndex.value = index;
	imagesList.value = pics;
	
}
const onSlideChange = (e) => {
	imagesIndex.value = e;
}
</script>
<template>
	<view>
		<van-cell-group inset>
			<van-field
				type="number"
				centerrequired v-model="code" label="分页码" placeholder="请输入分页码" clearable  >
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
			<template v-for="(item,index) in formattedComputedList" :keys="index">
				<view class="item-box">
					<view class="cover-data">
						<uv-image :src="item.cover" shape="circle" width="50" height="50" lazyLoad>
							<template v-slot:error>
								<view style="font-size: 24rpx;">加载失败</view>
							</template>
						</uv-image>
					</view>
					<view class="item-data">
						<view class="time">{{ item.setname }}-{{ item.createdate }}</view>
						<view class="context">{{ item.desc }}</view>
					</view>
					
				</view>
				<view class="item-pics">
					<image v-for="(pic, picIndex) in item.displayPics" :key="picIndex"
					       @click="onClickPicPreview(item.pics, picIndex,item.displayPics)"
					       :src="pic" width="50" height="50" lazyLoad>
					</image>
					<view class="more-pic" v-if="item.extraCount">
						<text>{{ item.extraCount }} 查看更多图片</text>
					</view>
				</view>
			</template>
		</view>
		<van-divider />
		<van-image-preview v-model="previewShow" :images="imagesList" @change="onSlideChange">
			<template v-slot:index>{{ imagesIndex+1 }}/{{ imagesList.length}}</template>
		</van-image-preview>
	</view>
</template>




<style scoped lang="scss">
.list-data{
	
	.item-box{
		display: flex;
		padding: 30rpx;
	}
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
	.cover-data{
		text-align: center;
		margin-bottom: 10rpx;
		align-items: center;
		display: flex;
	}
	.item-pics{
		display: flex;
		padding: 20rpx;
		flex-wrap: wrap;
		position: relative;
		::v-deep uni-image{
			box-sizing: border-box;
			width: 33%;
			height: 200rpx;
			padding: 12rpx;
		}
		
		.more-pic{
			position: absolute;
			right: 40rpx;
			bottom:100rpx;
			background-color: rgba(0, 0, 0, .3);
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			uni-text{
				text-decoration: none;
				font-weight: normal;
				overflow-wrap: normal;
				font-size: 24rpx;
				color: rgb(255, 255, 255);
				justify-content: center;
			}
		}
	}
}
.swiper-images{
	::v-deep .uni-swiper-wrapper{
		top:35%
	}
}
.van-overlay-price-index-swiper-last{
	position: absolute;
	top:50rpx;
	color: #fff;
	width: 100%;
	text-align: center;
	line-height: 100rpx;
	height: 100rpx;
}
</style>
