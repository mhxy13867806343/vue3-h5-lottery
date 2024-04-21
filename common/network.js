import ".env"
const request = (options={}) => {
	if (!options.url) {
		uni.showToast( {
			title : '请求地址不能为空' ,
			icon : 'none'
		})
		return
	}
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
			},
		});
	})
};

export default request;
