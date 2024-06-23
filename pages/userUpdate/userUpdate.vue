<script setup>
import { Toast } from 'vant';
import dayjs from "dayjs";
import useInfo from "@/hooks/useInfo";
import {postUserUpdate} from "@/api/outer";
const {data} = useInfo();
const name = ref("");
const sex=ref('')
const sexName=ref('')
const sexShow=ref(false)
const sexActions=ref([{ name: '男',value:11,color: '#000'  }, { name: '女',value:12,color: '#000'  }, {color: '#000' , name: '未知',value:0 }])
const currentDate=ref(new Date())
const minDate=ref(new Date(1920, 0, 1))
const maxDate=ref(new Date())
const showDate=ref(false)
const dateValue=ref('')
const areaValue=ref('')
onShow(() => {
	nextTick(() => {
		setTimeout(() => {
			if(data.value&&data.value.name){
				name.value=data.value.name
				const index=sexActions.value.findIndex(item=>item.value===data.value.sex)
				sexName.value=sexActions.value[index].name ||sexActions.value[2].name
				sexActions.value[index||2].color="red"
			}else{
				name.value=""
			}
		},1000)
	})
})
onMounted(()=>{
	// 创建一个特定的 Date 对象，注意月份从0开始计数
	const specificDate = new Date();  // 2020 年 2 月 2 日

// 使用 dayjs 包装这个 Date 对象
	const dayjsDate = dayjs(specificDate);

// 获取这个日期的前一天
	const dayBefore = dayjsDate.subtract(1, 'day').format();
	maxDate.value=new Date(dayBefore)
	
})
const onCancel=()=>{
	sexShow.value=false

}
const onUpdateInfo=()=>{
	const data1={
		name:name.value,
		sex:sex.value||0
	
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
const onSelect=(action,index)=>{
	sexName.value=action.name
	sex.value=sexActions.value[index].value
}
const onDateTimeConfirm=(value) => {
	const v=dayjs ( value ).valueOf () /1000
	currentDate.value=v
	dateValue.value=dayjs ( value ).format('YYYY/MM/DD')
	showDate.value=false
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
		<van-cell title="性别" :value="sexName"  center
		@click="sexShow=true"
		/>
		<van-cell title="出生时间"   center
		          :value="dateValue"
		          @click="showDate=true"
		/>
		<van-cell title="地区选择"   center
		          :value="areaValue"
		          @click="areaDate=true"
		/>
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
		<van-action-sheet
			close-on-popstate
			v-model="sexShow"
			:actions="sexActions"
			cancel-text="取消"
			close-on-click-action
			@cancel="onCancel"
			@select="onSelect"
		/>
		<van-popup v-model="showDate"
		           position="bottom"
		           :style="{ height: '30%' }"
		>
			{{ currentDate}}
			<van-datetime-picker
				v-model="currentDate"
				type="date"
				:min-date="minDate"
				:max-date="maxDate"
				position="bottom"
				title="选择年月日"
				@confirm="onDateTimeConfirm"
				@cancel="showDate=false"
			/>
		</van-popup>
		
	</view>
</template>



<style lang="scss">

</style>
