
import dayjs from "dayjs";
export const cacheDataRef={
    hot:'h5-sb-url-hot-list',
    thotlist:'h5-sb-url-thot-list',
    baike:'h5-sb-url-baike',
    city:'h5-sb-url-city',
    hotcity:'h5-sb-url-hot-city',
    histry:'h5-sb-url-histry',
    token:'h5-sb-url-token',
    user:'h5-sb-url-user',
    category:'h5-sb-url-category-ai',
    homemodel:"home-model",

}

export const setClipboardData=(data,msg="链接已复制,快去分享吧")=>{
    uni.setClipboardData({
        data,
        success: ()=> {
            uni.showToast({
                title: msg,
                icon: 'none'
            })
        },
        fail: ()=> {
            alert('复制失败')
        }
    });
}
export const setStorageSync=(key,value)=>{
    try {
        uni.setStorageSync(key,value);
    } catch (e) {
        // error
    }
}
export const getStorageSync=(key)=>{
    try {
        return uni.getStorageSync(key);
    } catch (e) {
        // error
    }
}

export const removeStorageSync=(key)=>{
    try {
        uni.removeStorageSync(key);
    } catch (e) {
        // error
    }
}
export function formatNumber(num) {
    if (num < 1000) {
        return num.toString(); // 小于1000直接返回原数值
    } else if (num < 10000000) {
        return (num / 1000).toFixed(1) + 'k'; // 从1000到9999999显示为"k"单位
    } else {
        return (num / 10000000).toFixed(1) + 'w'; // 大于等于1000万显示为"w"单位
    }
}
export function formatDayjsTime(date) {
    if (!date) {
        date = dayjs(); // 如果 date 为空，则取当前时间
    } else if (!dayjs.isDayjs(date)) {
        date = dayjs(date); // 如果 date 不是 Day.js 对象，则转换为 Day.js 对象
    }
    
    const now = dayjs();
    const diffInSeconds = now.diff(date, 'second');
    if(diffInSeconds<11){
        return '刚刚';
    }
    if (diffInSeconds < 60) {
        return `${diffInSeconds}秒前`;
    } else if (diffInSeconds < 3600) {
        return `${Math.floor(diffInSeconds/60)}分钟前`;
    } else if (diffInSeconds < 86400) {
        return `${Math.floor(diffInSeconds / 3600)}小时前`;
    } else {
        return date.format('YYYY-MM-DD HH:mm:ss');
    }
}
export function cacheImg403(img) {
    const url="https://images.weserv.nl/?url="
    if (!img){
        return ""
    }
    return `${url}${img}`
}
