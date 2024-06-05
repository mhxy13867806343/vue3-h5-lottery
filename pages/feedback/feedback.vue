<script setup>
import { postSendEmail,getListSendEmail } from "@/api/outer";
import {tempEmailList} from '@/common/variable'
import dayjs from 'dayjs'
import {getEmail} from '@/common/regtools'
import {Toast,Dialog} from "vant";
const title = ref('')//标题
const email = ref('')//邮箱
const isEmail = ref(false)
const feedback = ref('')//反馈内容
const uvInputRef = ref(null)
const popShow=ref(false)
const list=ref([])
const searchEmail=ref('')
const count=ref(0)
const isSearchEmail=ref(false)
const emialList=ref( tempEmailList)
const actions=[{
	title:'查询反馈记录',
	type:0,
	svg:`<svg width="48" height="48" viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg">
<path d="M8 6C6.89543 6 6 6.89543 6 8V14C6 15.1046 6.89543 16 8 16H18C19.1046 16 20 15.1046 20 14V8C20 6.89543 19.1046 6 18 6H8Z" ></path>
<path d="M42 9H24V13H42V9Z" ></path>
<path d="M6 21C6 19.8954 6.89543 19 8 19H18C19.1046 19 20 19.8954 20 21V27C20 28.1046 19.1046 29 18 29H8C6.89543 29 6 28.1046 6 27V21Z" ></path>
<path d="M42 22H24V26H42V22Z" ></path>
<path d="M6 34C6 32.8954 6.89543 32 8 32H18C19.1046 32 20 32.8954 20 34V40C20 41.1046 19.1046 42 18 42H8C6.89543 42 6 41.1046 6 40V34Z" ></path>
<path d="M42 35H24V39H42V35Z" ></path>
</svg>`
}]
const showPopover=ref(false)
watch(()=>email.value, (newVal, oldVal) => {
	const result=getEmail(newVal)
	if(result){
		isEmail.value = false
	}else{
		isEmail.value = true
	}
	if (!newVal.length){
		isEmail.value = false
	}
})
const handleSubmit=()=>{
	if(!email.value.length){
		uni.showToast({
			title: '邮箱不能为空',
			icon: 'none'
		})
		return
	}
	if(!getEmail(email.value)){
		uni.showToast({
			title: '邮箱格式不正确',
			icon: 'none'
		})
		return
	}
	if(!feedback.value.length){
		uni.showToast({
			title: '反馈内容不能为空',
			icon: 'none'
		})
		return
	}
	
	Dialog.confirm({
			title: '反馈提示',
			message: '是否要进行反馈呢?',
		})
		.then(() => {
			Toast.loading({
				message: '反馈提交中...',
				forbidClick: true,
				loadingType: 'spinner',
			});
			postSendEmail({
				title: title.value,
				email: email.value,
				content: feedback.value
			}).then(res => {
					Toast.clear()
					const {code,message}=res
					if(code!==200){
						Toast.fail(message)
						
					}else{
						Toast.success(message)
						title.value = ''
						email.value = ''
						feedback.value = ''
						isEmail.value = false
					}
				})
				.catch(err => {
					Toast.clear()
				})
		})
		.catch(() => {
			// on cancel
		});
}
const handleSearch=action=>{
	if(action.type===0){
		popShow.value=true
		list.value=[]
	}
}
const onSearch=()=>{
	if(!searchEmail.value.length){
		uni.showToast({
			title: '邮箱不能为空',
			icon: 'none'
		})
		return
	}
	histySendEmail()
}
const histySendEmail=()=>{
	Toast.loading({
		message: '搜索中...',
		forbidClick: true,
		loadingType: 'spinner',
	});
	getListSendEmail({
		email:searchEmail.value,
		pageNum:1,
		pageSize:99
	}).then(res => {
		Toast.clear()
		const {code,message,result:{data,total}}=res
		count.value=total
		if(code===200){
			if (!data.length){
				Toast.fail('未查询到反馈记录')
				list.value=[]
				return
			}
			Toast.success(`已查询到${data.length}条反馈记录，来自${searchEmail.value}用户的记录`)
			list.value=data||[]
		}else{
			Toast.fail(message)
		}
	}).catch(err => {
		Toast.clear()
		console.log(err)
	})
}
const onInput = val => {
	if (val.length) {
		const atIndex = val.indexOf('@');
		
		// 如果输入中有超过一个 '@'，只保留第一个 '@'
		if ((val.match(/@/g) || []).length > 1) {
			val = val.replace(/@/g, (match, offset) => offset === atIndex ? '@' : '');
			email.value = val;
		}
		
		// 确保以字母或数字开头
		if (!/^[a-zA-Z0-9]/.test(val)) {
			val = val.replace(/^@+/, '');
			email.value = val;
		}
		
		if (atIndex !== -1) {
			const domain = val.slice(atIndex);
			const filteredList = emialList.value.filter(item => item.value.startsWith(domain));
			isSearchEmail.value = filteredList.length > 0;
			if (filteredList.length === 1 && filteredList[0].value === domain) {
				email.value = val;
				isSearchEmail.value = false;
			} else {
				emialList.value = filteredList;
			}
		} else {
			isSearchEmail.value = true;
			emialList.value = tempEmailList;
		}
	} else {
		isSearchEmail.value = false;
		emialList.value = tempEmailList;
	}
};
const onClickSearchEmail=item=>{
	list.value=[]
	searchEmail.value=item.value
	isSearchEmail.value=false
	histySendEmail()
}
</script>
<template>
	<view class="feedback app-container">
		<uv-input  maxlength="21" v-model="title" placeholder="请输入标题(可选)21字以内 " border="surround" clearable
		          :customStyle="{
			marginBottom: '30rpx',
			
		          }"
		></uv-input>
		<uv-input  ref="uvInputRef" v-model="email" placeholder="请输入邮箱号码(必填) " border="surround" clearable
		          :placeholderStyle="isEmail? 'color: #ee0a24' : ''"
		          :color="isEmail? '#ee0a24' : '#303133'"
		          :customStyle="{
			marginBottom: '30rpx',
		          }"
		></uv-input>
		<uv-textarea   :customStyle="{
			marginBottom: '30rpx',
			
		          }" count height="300" fixed :maxlength="420" autoHeight v-model="feedback" placeholder="您的反馈内容(必填)"></uv-textarea>
		<uv-button type="primary" text="提交"
		@click="handleSubmit"
		></uv-button>
		<view class="menu-position-top-50 menu-position-right-50rpx menu-position menu-position-right">
			
			<van-popover
				v-model="showPopover"
				trigger="click" theme="dark"
				:actions="actions" overlay
			>
				<view class="van-popover-list">
					<template v-for="(a,b) in actions">
						<view :key="b" class="search-uv-flex"
						@click="handleSearch(a)"
						>
							<text>{{ a.title}}</text>
							<text v-html="a.svg" ></text>
						</view>
					</template>
				</view>
				<template #reference>
					<svg width="48" height="48" viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg"
					>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6H40C41.1046 6 42 6.89543 42 8V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8ZM32 21H16V17H32V21ZM16 31H32V27H16V31Z" ></path>
					</svg>
				</template>
			</van-popover>
			
		</view>
		<van-popup
			v-model="popShow"
			:closeable="false"
			close-icon="close"
			position="right"
			:style="{ height: '100%',width:'95%' }"
		>
			<uv-sticky :offset-top="0" :zIndex="9999"
			           customNavHeight="0"
			           bg-color="rgba(0,0,0,1)"
			>
				<view class="sticky-container">
					<van-search v-model="searchEmail" show-action  placeholder="请输入您的邮箱地址"
					            @search="onSearch"
					            @input="onInput"
					>
						<template #action>
							<div @click="onSearch">搜索</div>
						</template>
					</van-search>
<!--					<view class="sticky-container-item-email" v-if="isSearchEmail">-->
<!--						<view class="sticky-container-item-email-text"-->
<!--						      @click="onClickSearchEmail(a)"-->
<!--						v-for="(a,b) in emialList" :key="b"-->
<!--						>{{ searchEmail}}{{ a.value}}</view>-->
<!--					</view>-->
				</view>
			</uv-sticky>
			<view v-for="(t1,t2) in list" :key="t2">
				<uni-section :title=" t1.title" type="line">
					<uni-card :is-shadow="true" is-full	 :extra=" dayjs(t1.create_time*1000).format('YYYY-MM-DD HH:mm:ss')">
						<text class="uni-body search-h1-24"
						      
						      v-html="t1.content"
						></text>
					</uni-card>
				</uni-section>
			</view>
			<van-divider
				:style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
			>
				我是有底线的({{count}}条记录)
			</van-divider>
			<uv-empty v-if="!list.length"></uv-empty>
		
		</van-popup>
	</view>
</template>




<style scoped
       lang="scss">
.van-popover-list{
	.search-uv-flex ,.ser{
		background: #fff;
		color: #000;
		white-space: nowrap;
		align-items: center;
	}
}
.content-line,.tite-line{
	word-wrap:break-word;
}
.search-h1-32{
	font-weight: 800;
	color: #000;
}
.search-h1-24{
	font-weight: 500;
	color: #888;
}
.search-h1-24,.search-h1-32,.uni-card__content{
	word-wrap:break-word;
	display: block;
}
.sticky-container{
	color: #fff;
	height: 100rpx;
	line-height: 100rpx;
	position: relative;
	.sticky-container-item-email{
		position: absolute;
		top: 100rpx;
		left: 0;
		background: #fff;
		width: 100%;
		z-index: 10;
		.sticky-container-item-email-text{
			color: #678;
			padding: 0 20rpx;
		}
	}
}
</style>
