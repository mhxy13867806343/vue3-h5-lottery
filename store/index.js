import { cacheDataRef } from "@/common/tools";
import Vue from 'vue'
import Vuex from 'vuex'
import useStore from "@/hooks/useStroe"; // 请确保此自定义 Hook 已经正确定义

const { setStorageSync, getStorageSync ,removeStorageSync} = useStore();
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		token:uni.getStorageSync(cacheDataRef.token) || '', //token信息
		userInfo:getStorageSync(cacheDataRef.user)||{},
		histryList:getStorageSync(cacheDataRef.histry)||[]//历史记录
	},
	getters:{
		userInfo:state=>state.userInfo,
		token:state=>state.token,
		histryList:state=>state.histryList
	},
	mutations:{
		//设置token
		setUserData: (state, data={}) => {
		    state.token = data.token || ''
			state.userInfo = data.userinfo
			setStorageSync('token',data.token)
			setStorageSync('user',data.userinfo)
		},
		//设置历史记录
		setHistryList:(state,data)=>{
			if (!state.histryList.includes(data)) {
				// 先检查长度是否已达到6条
				if (state.histryList.length >= 6) {
					// 移除最早的一条数据
					state.histryList.shift();
				}
				// 添加新数据到列表
				state.histryList.unshift(data);
			}
			// 更新存储
			setStorageSync(cacheDataRef.histry, state.histryList);
		},
		setClearHistryList(state){
			state.histryList=[]
			removeStorageSync(cacheDataRef.histry)
		}
	},
	actions:{
		//设置token
		setUserToken({commit},data={}){
			commit('setUserData',data)
		},
		//设置历史记录
		setHistryList({commit},data){
			commit('setHistryList',data)
		},
		
	}
})
export default store
