import Vue from 'vue'
import Vuex from 'vuex'
import useStore from "@/hooks/useStroe"; // 请确保此自定义 Hook 已经正确定义

const { setStorageSync, getStorageSync } = useStore();
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		token:uni.getStorageSync('token') || '', //token信息
		userInfo:getStorageSync('user')||{},
	},
	getters:{
		userInfo:state=>state.userInfo,
		token:state=>state.token,
	},
	mutations:{
		//设置token
		setUserData: (state, data={}) => {
		    state.token = data.token || ''
			state.userInfo = data.userinfo
			setStorageSync('token',data.token)
			setStorageSync('user',data.userinfo)
		},
	
	},
	actions:{
		//设置token
		setUserToken({commit},data={}){
			commit('setUserData',data)
		},
	}
})
export default store
