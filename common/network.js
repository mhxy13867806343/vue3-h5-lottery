import ".env"
import { Toast } from "vant";
const request = (options={}) => {
	if (!options.url) {
		uni.showToast( {
			title : '请求地址不能为空' ,
			icon : 'none'
		})
		return
	}
	Toast.loading({
		message: '正在加载中...',
		forbidClick: true,
		loadingType: 'spinner',
	});
	// 处理 apiUrl
	return new Promise((resolve, reject) => {
		
		const url=process.uniEnv.BASE_API+ options.url;
		uni.request({
			url,
			data: options.data || {},
			header: {
				"x-token": uni.getStorageSync('token') || ''
			},
			method: options.method || 'GET',
			timeout: options.timeout || 60000,
			dataType: options.dataType || 'json',
			success: res=>{
				Toast.clear()
				const datas=res.data.data
				const {code,result,message}=datas
		
				if(code!==200){
					uni.showToast({
						title:message,
						icon:'none'
					})
					reject(datas)
					return
				}
				resolve(result)
			},
			fail: err=>{
				uni.showToast({
						title:err.message,
						icon:'none'
				})
				Toast.clear()
			},
		});
	})
};

export default request;
