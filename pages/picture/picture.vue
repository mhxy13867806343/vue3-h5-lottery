<script setup>
import { setClipboardData } from "@/common/tools";
import  qpreviewImage from '@/uni_modules/q-previewImage/components/q-previewImage/q-previewImage.vue'
import useOuters from "@/hooks/useOuters";
const {getPicture,list,currentIndex}=useOuters()
onMounted(()=>{
	getPicture()
})
const previewImage=ref(null)
const code=ref("")
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
	imagesIndex.value = index;
	imagesList.value = pics;
	previewImage.value.open(urls,index);
	
}
const getChangedPicture = (index) => {
	list.value=[]
	getPicture(index)
}
</script>
<template>
	<view>
		<van-sticky>
		<van-pagination v-model="currentIndex"
		                @change="getChangedPicture"
		:total-items="2000"
		>
			<template #prev-text>
				<van-icon name="arrow-left" />
			</template>
			<template #next-text>
				<van-icon name="arrow" />
			</template>
			<template #page="{ text }">{{ text }}</template>
		</van-pagination>
		</van-sticky>
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
					<view class="item-data" @click="setClipboardData(`[复制->${item.setname}-${item.postid}]-${item.seturl}`,'复制成功')">
						<view class="time">{{ item.setname }}-{{ item.createdate }}</view>
						<view class="context" >{{ item.desc }}</view>
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
		<qpreviewImage ref="previewImage" :urls="imagesList"
		></qpreviewImage>
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
