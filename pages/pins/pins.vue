
<script setup>
import { cacheImg403 } from "@/common/tools";
import { getPins,getUserList } from "@/api/outer";
import { Toast } from "vant";
const list=ref([])
const cursor=ref('')
const total=ref(0)
const active=ref(0)
const loading=ref(false)
const finished=ref(false)
const show=ref(false)
const userList=ref([])
const userCursor=ref("0")
const userHasMore=ref(false)
const userId=ref('')
const tabList=[
	{
		title:'热度',
		sort_type:200
	},
	{
		title:'最新',
		sort_type:300
	}
]
onMounted(()=>{
	getPins1({
		sort_type:200
	})
})

const onLoad=()=>{
	getPins1({
		sort_type:200,
		cursor:cursor.value
	})
}
const getPins1=data=>{
	loading.value=true
	getPins(data).then(res=>{
		loading.value=false
		console.log(res.result)
		const {count,data,cursor:cursor1,err_no,has_more}=res.result
		total.value=count
		if(err_no===0&&has_more){
			cursor.value=cursor1
			if(total.value==list.value.length){
				finished.value=true
			}
			list.value=[...list.value,...data]
		}else{
			finished.value=true
			list.value=[]
		}
		
	}).catch(e=>{
		console.log(e)
	})
}
const formattedContent = computed(() => {
	const data = list.value;
	if (data.length) {
		return data.map(item => ({
			...item,
			msg_Info: {
				...item.msg_Info,
				content: item.msg_Info.content .replace(/\[[^\]]*#([^#]+)#\]/g, '<span class="hashtag">#$1#</span>')
			}
		}));
	}
	return [];
});
const onChange=index=>{
	loading.value=false
	finished.value=false
	cursor.value=''
	list.value=[]
	getPins1({
		sort_type:tabList[index].sort_type
	})
}
const onClickMsgInfoImg=(a,current,urls)=>{
	const tempFilePaths= urls.map(item => cacheImg403(item));
	uni.previewImage({
		current:current,
		urls: tempFilePaths,
		loop:true,
		indicator:'number'
	});
}
const onClickDiggUser=(item_id)=>{
	userId.value=item_id
	userCursor.value=''
	userHasMore.value=false
	userList.value=[]
	getUserList1()
}
const getUserList1=()=>{
	
	getUserList({
		item_id:userId.value,
		cursor:userCursor.value
	}).then(res=>{
		const {result,code}=res
		if(code===200){
			const {data,err_no,err_msg,cursor,has_more}=result
			userHasMore.value=has_more
			if(err_no===0) {
				if(data.length){
					userList.value = [...userList.value,...data]
					show.value = true
					userCursor.value = cursor
				}
				
			}else{
				show.value=false
				Toast.fail(err_msg)
			}
		}
	}).catch(e=>{
		console.log(e)
		show.value=false
	})
}
</script>
<template>
	<view class="app-container">
		<van-popup v-model="show" closeable round
		           
		           :style="{ width: '90%', height: '90%'}"
		>
			<view  v-for="(a,b) in userList" :key="a.user_id" class="search-uv-flex app-container">
				<uv-image
					width="50"
					height="50"
					:src="a.avatar_large" lazy-load shape="circle" observeLazyLoad :fade="true" duration="450">
					
					<template v-slot:loading>
						<uv-loading-icon></uv-loading-icon>
					</template>
					<template v-slot:error>
						<view style="font-size: 24rpx;">加载失败</view>
					</template>
				</uv-image>
				<van-cell is-link center
				          :title="a.user_name"
				          :label="a.job_title"
				         
				>
					<template #right-icon>
						<uv-link :href="`https://juejin.cn/user/${a.user_id}`" :text="`${a.user_name+a.company}`" :under-line="true"></uv-link>
					</template>
				</van-cell>
				<view class="followee search-uv-flex flex-wrap align-items-center">
					<view>关注了：{{  a.followee_count}}</view>
					<view>关注者：{{  a.follower_count}}</view>
					<view>当前版本：LV{{  a.level}}</view>
				</view>
				
			</view>
			<uv-line margin="30rpx"></uv-line>
			<button :class="[userHasMore?'button button-primary button-rounded    status-btn-width':'']"
			        v-if="userList.length"
			        class="button-large"
			:disabled="!userHasMore"
			        @click="getUserList1"
			>
				{{ !userHasMore?'没有更多了':'加载更多'}}({{ userList.length	}})
			</button>
		</van-popup>
		<van-tabs v-model="active" sticky animated swipeable @change="onChange">
			<van-tab :title="a.title" v-for="(a,b) in tabList" :key="b">
				<van-list
					:immediate-check="false"
					v-model="loading"
					:finished="finished"
					finished-text="没有更多了"
					@load="onLoad"
				>
					<view class="list" v-for="(a,b) in list" :key="a.msg_id+'-'+a&&a.msg_Info&&a.msg_Info.id">
						<uni-section type="" title="">
							<uni-card :title="a&&a.author_user_info&&a.author_user_info.user_name" :extra="a&&a.author_user_info&&a.author_user_info
.user_growth_info&&a.author_user_info
.user_growth_info.jscore_title">
								<text class="uni-body search-h1-32 uv-line-2" :lines="2"
								v-html="formattedContent&&formattedContent[b]&&formattedContent[b].msg_Info&&formattedContent[b].msg_Info.content"
								></text>
								<view class="pins-hot search-uv-flex justify-content-flex-end">
									<view class="pins-hot-svg search-uv-flex align-items-center">
										<svg t="1718790386324" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5387" width="200" height="200"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667zM544.256 149.333333c39.253333 0 59.498667 36.48 49.888 84.928-7.573333 38.144-21.984 104.426667-43.221333 198.666667-4.512 20.021333 10.56 39.093333 30.912 39.093333h218.666666c6.101333 0 12.16 1.066667 17.909334 3.168 27.445333 9.984 41.674667 40.554667 31.776 68.266667l-85.568 239.573333C744.981333 838.026667 693.301333 874.666667 635.402667 874.666667H223.498667C194.314667 874.666667 170.666667 850.784 170.666667 821.333333V503.498667c0-17.866667 14.144-32.448 31.829333-32.821334l21.866667-0.469333a221.12 221.12 0 0 0 167.381333-82.56c34.346667-42.602667 59.146667-99.306667 74.869333-169.877333C482.101333 166.336 499.552 149.333333 544.266667 149.333333z" fill="#000000" p-id="5388"></path></svg>
										<text class="data-msg_Info">{{ a&&a.msg_Info&&a.msg_Info.digg_count}}</text>
									</view>
									<view class="pins-hot-svg search-uv-flex align-items-center">
										<svg t="1718790330983" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4354" width="200" height="200"><path d="M481.578667 968.832l-157.909334-158.293333H85.418667A85.290667 85.290667 0 0 1 0 725.12L0.426667 128.042667C0.426667 80.768 38.4 42.666667 85.845333 42.666667h852.778667c47.189333 0 85.418667 38.101333 85.376 85.418666l-0.426667 597.12c0 47.146667-38.229333 85.333333-85.376 85.333334h-237.781333l-158.549333 158.293333a42.624 42.624 0 0 1-60.288 0z m456.704-243.712L938.666667 128.042667s-852.906667-0.128-852.906667 0.042666c0 0-0.384 597.077333-0.298667 597.077334H341.333333c11.306667 0 22.186667 4.48 30.165334 12.501333l140.330666 140.629333 140.8-140.672a42.624 42.624 0 0 1 30.165334-12.458666h255.488zM277.333333 512a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m234.666667 0a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m234.666667 0a64 64 0 1 1 0-128 64 64 0 0 1 0 128z" fill="#3D3D3D" p-id="4355" data-spm-anchor-id="a313x.search_index.0.i1.7ca13a81f4B3si" class="selected"></path></svg>
										<text class="data-msg_Info">{{ a&&a.msg_Info&&a.msg_Info.comment_count}}</text>
									</view>
								</view>
								<view class="pins-hot search-uv-flex justify-content-flex-end" v-if="a&&a.topic&&a.topic.notice">
									<text class="search-h1-32" v-html="a&&a.topic&&a.topic.notice"></text>
								</view>
								<uv-line margin="30rpx"></uv-line>
								<view class="pins-hot search-uv-flex justify-content-flex-end" v-if="a&&a.msg_Info&&a.msg_Info.ctime">
									<view class="pins-hot-svg search-uv-flex align-items-center pins-hot-svg-ctime">
										<svg t="1718795477795" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6396" width="200" height="200"><path d="M512 929.959184c-230.4 0-417.959184-187.559184-417.959184-417.959184s187.559184-417.959184 417.959184-417.959184 417.959184 187.559184 417.959184 417.959184-187.559184 417.959184-417.959184 417.959184z m0-794.122449c-207.412245 0-376.163265 168.75102-376.163265 376.163265s168.75102 376.163265 376.163265 376.163265 376.163265-168.75102 376.163265-376.163265-168.75102-376.163265-376.163265-376.163265z" fill="#333333" p-id="6397"></path><path d="M718.367347 538.122449h-208.979592c-11.493878 0-20.897959-9.404082-20.897959-20.897959s9.404082-20.897959 20.897959-20.897959h208.979592c11.493878 0 20.897959 9.404082 20.897959 20.897959s-9.404082 20.897959-20.897959 20.897959z" fill="#333333" p-id="6398"></path><path d="M509.387755 538.122449c-11.493878 0-20.897959-9.404082-20.897959-20.897959V256c0-11.493878 9.404082-20.897959 20.897959-20.897959s20.897959 9.404082 20.897959 20.897959v261.22449c0 11.493878-9.404082 20.897959-20.897959 20.897959z" fill="#333333" p-id="6399"></path></svg>
										<text class="data-msg_Info">
											{{ $uv.timeFrom(a&&a.msg_Info&&a.msg_Info.ctime*1000,'YYYY/MM/DD HH:MM:SS')}}
										</text>
									</view>
									
								</view>
								<uv-line margin="30rpx"></uv-line>
								<view class="pins-hot search-uv-flex justify-content-flex-start flex-wrap" v-if="a&&a.msg_Info&&a.msg_Info.pic_list&&a.msg_Info.pic_list.length">
									<view class="msg_Info-pic_list"
									      @click.stop="onClickMsgInfoImg(k1,k2,a&&a.msg_Info&&a.msg_Info.pic_list&&a.msg_Info.pic_list)"
									      v-for="(k1,k2) in a&&a.msg_Info&&a.msg_Info.pic_list&&a.msg_Info.pic_list" :key="k2">
										<uv-image
											
											:src="$cacheImg403(k1)" width="150rpx" height="150rpx" referrer="no-referrer|origin|unsafe-url"
											:fade="true" duration="450"
										>
											<template v-slot:loading>
												<uv-loading-icon></uv-loading-icon>
											</template>
											<template v-slot:error>
												<view style="font-size: 24rpx;">加载失败</view>
											</template>
										</uv-image>
									</view>
								
								</view>
								<uv-line margin="30rpx"></uv-line>
								<view class="pins-hot search-uv-flex justify-content-flex-end">
									<view class="pins-hot-svg search-uv-flex align-items-center pins-hot-svg-ctime">
										<svg t="1718810240636" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3506" width="200" height="200"><path d="M870.1 1023.978h-95.8c-18.8 0-34.1-15.2-34.1-34.1s15.2-34.2 34.2-34.2h95.8c47.3 0 85.8-38.3 85.8-85.4v-716.4c0-47.3-38.2-85.7-85-85.7h-717.6c-46.8 0-85 38.2-85 85v717.5c0 46.8 38.4 85 85.7 85h318.6c18.8 0 34.1 15.2 34.1 34.1 0 18.8-15.2 34.1-34.1 34.1h-318.7c-84.8 0-154-68.8-154-153.2v-717.4c0-84.5 68.8-153.2 153.2-153.2h717.6c84.5 0 153.2 69 153.2 154v716.4c0.1 84.5-69 153.5-153.9 153.5zM780.9 277.378h-537.6c-18.8 0-34.1-15.2-34.1-34.1s15.2-34.1 34.1-34.1h537.6c18.8 0 34.1 15.2 34.1 34.1s-15.3 34.1-34.1 34.1zM780.9 516.278h-537.6c-18.8 0-34.1-15.2-34.1-34.1s15.2-34.1 34.1-34.1h537.6c18.8 0 34.1 15.2 34.1 34.1 0 18.8-15.3 34.1-34.1 34.1zM482.2 755.178h-238.9c-18.8 0-34.1-15.2-34.1-34.1 0-18.8 15.2-34.1 34.1-34.1h238.9c18.8 0 34.1 15.2 34.1 34.1 0 18.9-15.3 34.1-34.1 34.1z" p-id="3507"></path></svg>
									   <uv-text mode="link"
									   :text="`查看${a&&a.author_user_info&&a.author_user_info.user_name}的评论`"
									            :href="`https://juejin.cn/pin/${a.msg_id}?utm_source=gold_browser_extension`"
									   ></uv-text>
									</view>
								</view>
								<uv-line margin="30rpx"></uv-line>
								<view class="pins-hot search-uv-flex justify-content-flex-end align-items-center"
								      @click="onClickDiggUser(a.msg_id)"
								      v-if="a&&a.digg_user&&a.digg_user.length">
									<view class="msg_Info-pic_list msg_Info-pic_list-digg"
									     
									     
									      v-for="(k1,k2) in a&&a.digg_user" :key="k2">
										<uv-image observeLazyLoad lazy-load
											:class="[k2===0?'':'msg_Info-pic_list-digg-img']"
											class=""
											shape="circle"
											:src="k1.avatar_large" width="80rpx" height="80rpx" referrer="no-referrer|origin|unsafe-url"
											:fade="true" duration="450"
										>
											<template v-slot:loading>
												<uv-loading-icon></uv-loading-icon>
											</template>
											<template v-slot:error>
												<view style="font-size: 24rpx;">加载失败</view>
											</template>
										</uv-image>
									</view>
									<text class="label">等人赞过</text>
								</view>
							</uni-card>
						</uni-section>
					</view>
				</van-list>
			</van-tab>
		</van-tabs>
	</view>
</template>



<style scoped
       lang="scss">
::v-deep .hashtag {
	color: #1352a3; /* 文字颜色设置为白色 */
	padding: 0 4rpx; /* 添加一些内边距 */
	border-radius: 4rpx; /* 圆角边框 */
}
.pins-hot{
	.pins-hot-svg{
		width: 70rpx;
		height: 70rpx;
		padding:20rpx;
		svg{
			width: inherit;
			height: inherit;
		}
		.data-msg_Info{
			font-size: 24rpx;
			margin-left: 10rpx;
		}
	}
	.pins-hot-svg-ctime{
		width: auto;
		height: 40rpx;
	}
	.msg_Info-pic_list{
		width: 33%;
		padding: 30rpx;
		box-sizing: border-box;
	}
	.msg_Info-pic_list-digg{
		width: auto;
		padding: 0;
		::v-deep .msg_Info-pic_list-digg-img{
			margin-left:-24rpx;
			
		}
		
	}
	.label{
		color: #8a919f;
		padding-left: 16rpx;
	}
}
</style>
