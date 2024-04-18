<script setup>
import  dicts from '@/common/dicts'
import useMenu from "@/hooks/useMenu";
const { showPopover } = useMenu({type:'person'});
const newsList = ref(dicts.personMenuList.slice(0, dicts.personMenuList.length-1))
</script>
<template>
	<view>
		<van-nav-bar title="个人中心" left-text="" :left-arrow="false" fixed placeholder z-index="19999"
		ref="navBar"
		>
			<template #right>
				<van-popover
					trigger="click"  theme="dark"
					v-model="showPopover"
					placement="bottom-end"
					:actions="newsList"
				>
					<uv-cell center :title="item.text"
					         v-for="(item, index) in dicts.personMenuList"
					         isLink :url="item.url"
					         :titleStyle="{
								 color: '#fff',
								 fontSize: '24rpx',
				
					         }"
					
					></uv-cell>
					<template #reference>
						<uv-icon name="plus-circle" size="24"></uv-icon>
					</template>
				</van-popover>
			</template>
		</van-nav-bar>
		<view class="app-container">
			<view class="p-flex-justify-content p-flex-justify-center p-flex-wrap-wrap">
				<uv-avatar  fontSize="18" randomBgColor></uv-avatar>
				<uv-cell :border="false" class="p-text-h4 p-text-h4-align-center" title="昵称" isLink url="/pages/personalinformation/personalinformation"></uv-cell>
			</view>
			<uv-cell-group title="功能设置">
				<template #title>
					<span class="p-fctuin-title">
						<van-icon name="setting-o" /><span>功能设置</span>
					</span>
				</template>
				<uv-cell center title="我的动态" isLink url="/pages/myDynamics/myDynamics">
					<template #icon><van-icon name="fire-o" /></template>
				</uv-cell>
				<uv-cell center title="我的个性签名" isLink url="/pages/signature/signature">
					<template #icon><van-icon name="description-o" /></template>
				</uv-cell>
				<uv-cell center title="我的历史行为" isLink url="/pages/userHistory/userHistory">
					<template #icon><van-icon name="browsing-history-o" /></template>
					
				</uv-cell>
			</uv-cell-group>
		
		</view>
	
	</view>



</template>



<style lang="scss">
.p-fctuin-title{
	padding: 10rpx 0;
	font-size: 30rpx;
	span{
		padding-left: 10rpx;
	}
}
</style>
