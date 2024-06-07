<script setup>
import { Toast } from 'vant';
import useInfo from "@/hooks/useInfo";
const {data} = useInfo();
const name = ref("");
import {postUserUpdate} from "@/api/outer";
onShow(() => {
	nextTick(() => {
		setTimeout(() => {
			if(data.value&&data.value.name){
				name.value=data.value.name
			}else{
				name.value=""
			}
		},1000)
	})
})
const onUpdateInfo=()=>{
	if(name.value===data.value.name){
		uni.showToast({
			title:"昵称未修改",
			icon:"none"
		})
		return
	}
	const data1={
		name:name.value
	
	}
	postUserUpdate(data1).then((res) => {
		const {code,message}=res
		if(code===200){
			uni.showToast ( {
				title :message,
				icon : "success",
				success : () => {
					setTimeout(() => {
						uni.switchTab({
							url :'/pages/personalCenter/personalCenter'
						})
					}, 2000)
				}
			} )
			
		}else{
		}
	} ).catch((err) => {
	})
}
</script>
<template>
	<view class="user-update app-container p10">
		<uv-input placeholder="请输入昵称"
		v-model="name"
		          shape="circle"
		          maxlength="30"
		          clearable
		></uv-input>
		<view class="uv-flex p-margin-top p-flex-justify-content">
			<uv-button type="primary" text="提交" :disabled="!name.length"
			           @click="onUpdateInfo"
			           :custom-style="{
							           width: '160rpx',
							           height: '60rpx',
							           lineHeight: '60rpx',
							           borderRadius: '10rpx',
							           fontSize: '30rpx'
			           }"
			></uv-button>
		</view>
	</view>
</template>



<style lang="scss">

</style>
