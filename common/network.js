
import { processAuth401 } from '@/common/utils.js'
import useStore from "@/hooks/useStroe"; // 请确保此自定义 Hook 已经正确定义
import pages from '@/pages.json'
const __pageName='pages/login/login'

const { clearStorageSync, getStorageSync } = useStore();
// 拆分数据
const splitData= function (data) {
    let url = ''
    for (let k in data) {
        if (data.hasOwnProperty(k)) {
            let value = data[k] || ''
            url = url + '&' + k + '=' + encodeURIComponent(value)
        }
    }
    return url ? url.substring(1) : ''
}
// 拼接参数
const contractUrl= function (url, data) {
    return url + (url.indexOf('?') < 0 ? '?' : '&') + splitData(data)
}
const network = function(options) {
	let data = {};
	if (options.data) {
		data = options.data;
	}
	if (options.param) {
		options.url = contractUrl(options.url,options.param);
	}
	/* 请求头设置 */
	let header={
	};

	/* 定义请求数据格式 */
	/* 数据会进行 JSON 序列化，Request Payload，与下方相同属性保留接口所需要的类型即可 */
	header['content-type']='application/json;charset=utf-8';
	//更新登陆状态
	let token = getStorageSync('token');
	if(!!token){
		header["X-Access-Token"] = token
	}
	
	return new Promise((resolve,reject)=>{
		let url=process.uniEnv.BASE_API + options.url;
		uni.request({
			url:url,
			method:options.method || 'GET',
			dataType:'json',
			header:header,
			data:data,
			param:data,
			success: res => {
				const {code,message} = res.data;
				console.log(res,)
				if(code===200){
					resolve(res.data);
				}
				else if(code==401){
					uni.showToast({
						title: message||'用户信息已过期,请重新登录',
						icon: 'none',
						duration: 2000
					});
					clearStorageSync()
					const pages = getCurrentPages();
					let currentRoute;
					if (!!pages && pages.length >= 1) {
						currentRoute = pages[pages.length - 1].route;
					}
					const __pages=pages.pages.findIndex(item=>item.path==__pageName);
					 let pages1=''
					if(__pages?.[0]?.path){
						pages1=__pages?.[0]?.path
					}else{
						pages1='pages/login/login'
					}
					if (pages1 != currentRoute) {
						processAuth401()
					}
				}
			},
			fail:(err)=>{
				uni.hideLoading();
				console.log(err,url)
				uni.showModal({
					title: "温馨提示",
					content: '正在连接中...',
					showCancel:false
				});
				reject(err);
			}
		});
	})
}

export default network;
