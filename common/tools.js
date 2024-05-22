

export const cacheDataRef={
    hot:'h5-sb-url-hot-list',
    thotlist:'h5-sb-url-thot-list',
    baike:'h5-sb-url-baike',
    city:'h5-sb-url-city',
    hotcity:'h5-sb-url-hot-city',
    histry:'h5-sb-url-histry',
    token:'h5-sb-url-token',
    user:'h5-sb-url-user',
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
