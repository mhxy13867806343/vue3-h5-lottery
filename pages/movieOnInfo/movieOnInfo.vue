<script setup>
const name=ref("")
const list=ref(
	[{
		id: 1470629,
		haspromotionTag: false,
		img: "https://p0.pipi.cn/mmdb/54ecde02d7c2ff0faf339ed0361f0a9d4919b.jpg?imageMogr2/thumbnail/2500x2500%3E",
		version: "v3d imax",
		nm: "哥斯拉大战金刚2：帝国崛起",
		preShow: false,
		sc: 9.4,
		globalReleased: true,
		wish: 503695,
		star: "金刚,哥斯拉,丽贝卡·豪尔",
		rt: "2024-03-29",
		showInfo: "今天168家影院放映1533场",
		showst: 3,
		wishst: 0,
		comingTitle: "3月29日 周五",
		showStateButton: {
			color: "#F03D37",
			content: "购票",
			onlyPreShow: false,
			shadowColor: "rgba(240,61,55, 0.15)"
		}
	},{
		id: 1470629,
		haspromotionTag: false,
		img: "https://p0.pipi.cn/mmdb/54ecde02d7c2ff0faf339ed0361f0a9d4919b.jpg?imageMogr2/thumbnail/2500x2500%3E",
		version: "v3d imax",
		nm: "哥斯拉大战金刚2：帝国崛起",
		preShow: false,
		sc: 9.4,
		globalReleased: true,
		wish: 503695,
		star: "金刚,哥斯拉,丽贝卡·豪尔,丽贝卡·豪尔,丽贝卡·豪尔",
		rt: "2024-03-29",
		showInfo: "今天168家影院放映1533场",
		showst: 3,
		wishst: 0,
		comingTitle: "3月29日 周五",
		showStateButton: {
			color: "#F03D37",
			content: "购票",
			onlyPreShow: false,
			shadowColor: "rgba(240,61,55, 0.15)"
		}
	},
		{
			id: 1470629,
			haspromotionTag: false,
			img: "https://p0.pipi.cn/mmdb/54ecde02d7c2ff0faf339ed0361f0a9d4919b.jpg?imageMogr2/thumbnail/2500x2500%3E",
			version: "v3d imax",
			nm: "哥斯拉大战金刚2：帝国崛起",
			preShow: false,
			sc: 9.4,
			globalReleased: true,
			wish: 503695,
			star: "金刚,哥斯拉,丽贝卡·豪尔",
			rt: "2024-03-29",
			showInfo: "今天168家影院放映1533场",
			showst: 3,
			wishst: 0,
			comingTitle: "3月29日 周五",
			showStateButton: {
				color: "#F03D37",
				content: "购票",
				onlyPreShow: false,
				shadowColor: "rgba(240,61,55, 0.15)"
			}
		},
	])
const starComputed=computed(()=>{
	const l=[]
	list.value.map(item=>{
		
		if(item.star){
			const star=item.star.split(',')
			if (star.length){
				l.push(star)
			}
			return l
		}
		
	})
	return l
})
const onStarClick=(star)=>{
	uni.navigateTo({
		url: `/pages/localUrl/localUrl?star=${star}&type=star`
	})
}
const onMovieClick=(id)=>{
	uni.navigateTo({
		url: `/pages/localUrl/localUrl?moveId=${id}&type=movie`
	})
}
</script>
<template>
	<view>
		<van-cell-group inset>
			<van-field
				type="number"
				centerrequired v-model="name" label="内容" placeholder="请输入内容" clearable  >
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
		<view class="duanju-list app-container">
			<view v-for="(item,index) in list" :key="index" class="duanju-item"
			@click.stop="onMovieClick(item.id)"
			>
				<view class="duanju-item-img">
					<image :src="item.img"></image>
				</view>
				<view class="duanju-item-content">
					<view class="duanju-item-title duanju-item-title-click">
						标题:<text>{{ item.nm}}</text>
					</view>
					<view class="duanju-item-star duanju-item-title-click">
						主演:
						<view class="duanju-item-star-list" v-for="(star,index) in  starComputed[index]"
						      @click.stop="onStarClick(star)"
						      :key="index">
							<text >{{star}}</text>
						</view>
					</view>
					<view class="duanju-item-showInfo duanju-item-title-click">
						场次:<text>{{ item.showInfo}}</text>
					</view>
					<view class="duanju-item-comingTitle duanju-item-title-click">
						时间:<text>{{ item.comingTitle}}</text>
					</view>
					<view class="duanju-item-sc duanju-item-title-click">
						平分:<text>{{ item.sc}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>




<style scoped
       lang="scss">
.duanju-list{
	.duanju-item{
		display: flex;
		flex-direction: row;
		align-items: center;
		.duanju-item-img{
			margin-right: 30rpx;
			uni-image{
				width: 200rpx;
				height: 300rpx;
			}
		}
		.duanju-item-content{
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			height: 300rpx;
			.duanju-item-title-click{
				height: auto;
				width: 100%;
				color: #999;
				font-size: 26rpx;
				.duanju-item-star-list{
					display: inline-block;
					margin-right: 30rpx;
				}
			}
			.duanju-item-title{
				font-size: 30rpx;
			}
		}
	}
}
</style>
