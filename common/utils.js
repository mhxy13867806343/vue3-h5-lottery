import store from '../store'
import { alipayRegisterOrLogin, wxRegisterOrLogin,userEdit } from '@/common/request.js';

export const setCartNumber = (product,cartList) => {
    product.cartNumber = 0;
	product.giftNumber = 0;
    let arr = cartList.filter(item=>item.productId == product.id)
    if(arr && arr.length > 0){
    	arr.forEach(y=>{
    		product.cartNumber += y.number;
			product.giftNumber += y.giftNumber || 0;
    	})
    }
	if (product.skuStockList && product.skuStockList.length > 0){
		product.skuStockList.forEach(sku=>{
			sku.cartNumber = 0;
			sku.giftNumber = 0;
			let arr = cartList.filter(item=>item.productSkuId == sku.id)
			if(arr && arr.length > 0){
				arr.forEach(y=>{
					sku.cartNumber += y.number;
					sku.giftNumber += y.giftNumber||0;
				})
			}
		})
	}
}
export const setCartNumbers = (productList,cartList) => {
	if(!!productList && !!cartList){
		productList.forEach(x=>{
			x.cartNumber = 0;
			x.giftNumber = 0;
			let arr = cartList.filter(item=>item.productId == x.id)
			if(arr && arr.length > 0){
				arr.forEach(y=>{
					x.cartNumber += y.number;
					x.giftNumber += y.giftNumber || 0;
				})
			}
		})
	}
}


export const getCurrentUrl = () => {
      var pages = getCurrentPages() //获取加载的页面
      var currentPage = pages[pages.length - 1] //获取当前页面的对象
      var url = currentPage.route //当前页面url
      
      var options = currentPage.options //如果要获取url中所带的参数可以查看options
      //参数多时通过&拼接url的参数
      var urlWithArgs = "/"+url + '?'
      for (var key in options) {
        var value = options[key]
        urlWithArgs += key + '=' + value + '&'
      }
      urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)
      return urlWithArgs;
}


export const getUrlParam = (name) => {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	let url = window.location.href.split('#')[0];
	let search = url.split('?')[1];
	if (search) {
		var r = search.substr(0).match(reg)
		if (r !== null) return unescape(r[2])
		return null;
	} else {
		return null;
	}
}

//图片展示
export const getImgUrl = (value) => {
  if(value){
    if ((value.indexOf('http') != -1)||(value.indexOf('https') != -1)) {
      return value
    } else {
      return process.uniEnv.imageUrl + value
    }
  }
}
//图片展示
export const getImgUrls = (value) => {
	// console.log('---getImgUrls---:',value)
	if(!value){
		let none ='https://wxjc.fanski.com/h5/images/none.png'
		return [none];
	}
	if(value.indexOf(',') != -1){
		const arr = value.split(',');
		const imgArr = [];
		arr.forEach(item=>{
			let img = getImgUrl(item);
			imgArr.push(img);
		})
		return imgArr;
	} else {
		return [getImgUrl(value)]
	}
}

export const processAuth401 = (scopes) => {
	return uni.navigateTo({
		url: '/pages/login/login',
	})
}


export const toPage = (url,isReload) => {
	console.log('toPage',store.state.hasLogin)
	if(!!isReload){
		uni.navigateTo({
			url:url,
			success(res) {
		        let data={
		            reload:1
		        }
		        let page = getCurrentPages().pop();
				if(!!page && !!page.onLoad){
					page.onLoad(data);
				}
			}
		})
	} else {
		uni.navigateTo({
			url:url
		})
	}
}
export const toTab = (url,isReload) => {
	console.log('toTab',store.state.hasLogin)
	if(!!isReload){
		uni.switchTab({
			url:url,
			success(res) {
		        let data={
		            reload:1
		        }
		        let page = getCurrentPages().pop();
		        if(!!page && !!page.onLoad){
		        	page.onLoad(data);
		        }
			}
		})
	} else {
		uni.switchTab({
			url:url
		})
	}
}
export const toPageAuth = url => {
	console.log('toPageAuth',store.state.hasLogin)
	if(!store.state.hasLogin){
		uni.navigateTo({
			url: '/pages/login/login',
		})
	} else {
		uni.navigateTo({
			url:url
		})
	}
}
export const toTabAuth = url => {
	console.log('toTabAuth',store.state.hasLogin)
	if(!store.state.hasLogin){
		uni.navigateTo({
			url: '/pages/login/login',
		})
	} else {
		uni.switchTab({
			url:url
		})
	}
}

export const getSubString = (str,length) => {
	let len = 18;
	if(!!length){
		len = length
	}
	if(!!str && str.length > len){
		str = str.substring(0,len)+'...'
	}
	return str;
}
// 浏览器判断是否微信
export const isWechat = () => {
	let ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		//console.log('是微信客户端')
		return true;
	}else{
        //console.log('不是微信客户端')
        return false;
    }
};
export const getPartnerType = (status) => {
	if(status == 1){
		return '待激活网点'
	}
	if(status == 2){
		return '核心网点'
	}
	if(status == 3){
		return '无效网点'
	}
	return '未定义'
}
//经销商状态 1 待激活  2 已启用 3 已停用
export const getPartnerStatus = (status) => {
	if(status == 1){
		return '待激活'
	}
	if(status == 2){
		return '已启用'
	}
	if(status == 3){
		return '已停用'
	}
	return '未知'
}
//订单类型:1.正常订单 2.代下单 3.赠品下单
export const getOrderType = (orderType) => {
	if(orderType == 1){
		return '正常订单'
	}
	if(orderType == 2){
		return '代客下单'
	}
	if(orderType == 3){
		return '礼品赠品'
	}
	return '未知'
}

export const getOrderStatus = (status) => {
	if(status == 1){
		return '待付款'
	}
	if(status == 2){
		return '已支付'
	}
	if(status == 3){
		return '待发货'
	}
	if(status == 4){
		return '已收货'
	}
	if(status == 5){
		return '待评价'
	}
	if(status == 6){
		return '已评价'
	}
	if(status == 99){
		return '已取消'
	}
}
export const getOrderAuditStatus = (status) => {
	if(status == 1){
		return '待审核'
	}
	if(status == 2){
		return '审核通过'
	}
	if(status == 3){
		return '审核不通过'
	}
	return '未知'
}

export const getFormatDate = (datetime, startType) => {
  var date = new Date(datetime); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var year = date.getFullYear(),
    month = ("0" + (date.getMonth() + 1)).slice(-2),
    sdate = ("0" + date.getDate()).slice(-2),
    hour = ("0" + date.getHours()).slice(-2),
    minute = ("0" + date.getMinutes()).slice(-2),
    second = ("0" + date.getSeconds()).slice(-2);
  // 拼接
  // var result = year + "-"+ month +"-"+ sdate +" "+ hour +":"+ minute +":" + second;
  // 返回
  // return result;
  let resStr = "";
  if (startType === "year")
    resStr =
      year +
      "-" +
      month +
      "-" +
      sdate +
      " " +
      hour +
      ":" +
      minute +
      ":" +
      second;
  if (startType === "day") resStr = year + "-" + month + "-" + sdate;
  if (startType === "month") resStr = month + "-" + sdate;
  if (startType === "hour") resStr = hour + ":" + minute + ":" + second;
  return resStr;
}
