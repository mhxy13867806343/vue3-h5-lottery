<script setup>
import dayjs from "dayjs";
import { postUserLogout } from "@/api/outer";
import  dicts from '@/common/dicts'
import useMenu from "@/hooks/useMenu";
import store from "@/store";
import { Dialog,Toast } from 'vant';
const { showPopover } = useMenu({type:'person'});
const newsList = ref(dicts.personMenuList.slice(0, dicts.personMenuList.length-1))
const isUserToken=computed(()=>store.state.token)
import useInfo from "@/hooks/useInfo";
const {data} = useInfo();
const newTip=ref("")
const onClickLogin=()=>{
	uni.reLaunch({
		url: '/pages/login/login'
	});
}
const onClickLogout=()=>{
	Dialog.confirm( {
		title : '提示' ,
		message : '确定要退出登录吗？' ,
	}).then(() => {
		postUserLogout().then((res) => {
			const {code,message}=res
			if(code===200){
				store.dispatch('setClearUserData');
				uni.switchTab({
					url: '/pages/home/home'
				});
			}else{
			}
		}).catch(() => {
			console.log('取消');
		});
		
	}).catch(() => {
		console.log('取消');
	});
}
let timer=null
onShow(()=>{

	if (store.state.token){
		let tip=""
		const pwd90=90
		timer=setTimeout(()=>{
			// 获取当前时间
			const currentTime = dayjs();
			
			// 获取 lastTime
			const lastTime = dayjs.unix(data.value.lastTime);
			
			// 计算时间差
			const differenceInDays = currentTime.diff(lastTime, 'day');
			
			// 检查时间差是否超过 90 天
			if (differenceInDays >pwd90) {
				tip=`提示: 您的密码已经超过的超过了${pwd90}天未进行修改了，请进行修改`
				clearTimeout(timer)
			}
			newTip.value=tip
		},1000)
	}
	
})

const onTipPassWord=()=>{
	clearTimeout(timer)
	uni.showModal({
		title: '提示',
		content: '您确定要修改密码吗？',
		success: (res) => {
			if (res.confirm) {
				uni.navigateTo({
					url: '/pages/changePassword/changePassword'
				})
			} else if (res.cancel) {
				console.log('用户点击取消');
			}
		}
	})
}
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
						<uv-icon name="plus-circle" size="24" v-if="isUserToken"></uv-icon>
					</template>
				</van-popover>
			</template>
		</van-nav-bar>
		<uv-notice-bar :text="newTip" v-if="newTip"
		               mode="link"
		               @click="onTipPassWord"
		></uv-notice-bar>
		<view class="app-container" v-if="isUserToken">
			<view class="p-flex-justify-content p-flex-justify-center p-flex-wrap-wrap">
				<uv-avatar  fontSize="18" randomBgColor></uv-avatar>
				<uv-cell :border="false" class="p-text-h4 p-text-h4-align-center" :title="`昵称:${data.name}`" isLink url="/pages/personalinformation/personalinformation"></uv-cell>
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
				<uv-cell title="去反馈" is-link url="/pages/feedback/feedback">
				
				</uv-cell>
			</uv-cell-group>
			<van-button type="danger" block @click="onClickLogout">退出登录</van-button>
		
		</view>
		<view v-else class="app-container login-button"
		      @click="onClickLogin">
			<text class="login-button-text">去登录</text>
		</view>
		<view class="app-container app-author">
			<uv-cell center title="作者介绍"
			         isLink url="/pages/author/author"
			></uv-cell>
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
.login-button{
	background: radial-gradient(76.16% 76.16% at 31.97% 19.67%, #FFF 0%, rgba(255, 255, 255, 0.00) 69.79%, rgba(255, 255, 255, 0.00) 100%), #E2E2E2;
	box-shadow: 0px -3px 8px 0px rgba(255, 255, 255, 0.25) inset, 6px 9px 9px 0px rgba(255, 255, 255, 0.60) inset, 0px 2px 2px 0px rgba(255, 255, 255, 0.60) inset, -10px -12px 18px 0px rgba(0, 0, 0, 0.25) inset, 3px 4px 8px 0px rgba(255, 255, 255, 0.70) ins
}
.login-button{
	border-radius: 20rpx;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 12rpx 32rpx;
	min-width: 0rpx;
	height: 64rpx;
	cursor: pointer;
	transition: all linear .3s;
	margin-top: 42%;
	position: relative;
	animation: logbtn 10s linear infinite;
	.login-button-text{
		background: var(--text-sec);
		background-clip: text;
		width: 100%;
		z-index: 1;
		color: var(--text-default);
		font-size: 12px;
		line-height: 20px;
		font-weight: 500;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
		font-size: 40rpx;
	}
}
@keyframes logbtn {
	0%{
		transform: translateY(0);
		min-width:0rpx;
	}
	50% {
		transform: translateY(20rpx);
		min-width: 100%;
	}
	100% {
		transform: translateX(0);
		min-width: 0rpx;
	}
}
.app-author{
	position: fixed;
	bottom: 5%;
	width: 100%;
}
.van-button--danger{
	margin-top: 5%;
}
</style>
