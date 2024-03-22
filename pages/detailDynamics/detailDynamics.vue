<script setup>
import dicts from "@/common/dicts";
import useMenu from "@/hooks/useMenu";
const { showPopover,showShare,onItemSelect,onItemShareSelect,qRCodeShow,shareText } = useMenu({type:'dymamic'});
const content=ref()
const refUvQrcode=ref()
const isShowShare=ref(false)
onLoad((options) => {
	console.log(options,2222)
	uni.setNavigationBarTitle({
		title: '动态详情'
	})
	content.value=`
	<p>露从今夜白，月是故乡明</p>
\t\t\t\t\t<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
	`
})
watch(()=>showShare.value,(val)=>{
	if(!val){
		nextTick(()=>{
			refUvQrcode.value.make({
				success: () => {
					uni.showToast({
						title: '生成二维码成功',
						icon: 'none'
					})
					isShowShare.value=true
				},
				fail: err => {
					uni.showToast({
						title: '生成二维码失败,请重试',
						icon: 'none'
					})
					refUvQrcodRemake()
				}
			});
		})
	}
})
const refUvQrcodRemake=()=>{
	refUvQrcode.value.remake({
		success: () => {
			uni.showToast({
				title: '生成二维码成功',
				icon: 'none'
			})
		},
		fail: err => {
			console.log(err)
		}
	});
}
const back = () => {
	uni.navigateBack(-1)
}
// 保存二维码
const saveQrCode=()=>{
	refUvQrcode.value.save()
	uni.showToast({
		title: '保存成功',
		icon: 'none',
		duration: 1000,
		success:()=>{
			isShowShare.value=false
		}
	})
	
}
const quitQrCode=()=>{
	shareText.value=''
	qRCodeShow.value=false
	refUvQrcode.value=null
}
</script>
<template>
	<view >
		<van-nav-bar title="动态详情" left-text="" :left-arrow="false" fixed placeholder
		
		>
			<template #right>
				<van-popover
					trigger="click"  theme="dark"
					v-model="showPopover"
					placement="bottom-end"
					@select="onItemSelect"
					:actions="dicts.dynamicMenuList"
				>
					<template #reference>
						<uv-icon name="plus-circle" size="24"></uv-icon>
					</template>
				</van-popover>
			</template>
		</van-nav-bar>
		<view class="app-container">
			<uv-cell-group>
				<uv-cell title="单元格" :border="false" center></uv-cell>
			</uv-cell-group>
			<uv-parse :content="content" lazy-load	 selectable	></uv-parse>
		</view>
		<van-share-sheet
			v-model="showShare"
			title="立即分享给好友"
			description="分享动态信息"
			@select="onItemShareSelect"
			:options="dicts.shareMenuList"
		/>
		<van-overlay :show="qRCodeShow" @click="qRCodeShow = false">
			<div class="wrapper qr-wrapper" @click.stop v-if="shareText.length>0">
				<uv-qrcode ref="refUvQrcode" :value="shareText"
				           h5DownloadName="动态详情二维码.png"
				>
					<template #loading>
						<van-loading size="24px">正在加载中二维码中...</van-loading>
					</template>
				</uv-qrcode>
				<uv-button type="primary" text="保存" v-if="shareText.length>0"
				@click="saveQrCode"
				></uv-button>
				<uv-button class="uv-button-wrapper-next" type="warning" text="取消" v-if="shareText.length>0"
				           @click="quitQrCode"
				></uv-button>
			</div>
		</van-overlay>
	</view>
</template>




<style scoped
       lang="scss">
.qr-wrapper {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	position: relative;
	::v-deep .uv-button{
		position: absolute;
		bottom: 0;
	}
	.uv-button-wrapper {
		position: absolute;
		bottom: 33%;
		width: 140rpx;
	}
	.uv-button-wrapper-next{
		bottom: 28%;
	}
}
</style>
