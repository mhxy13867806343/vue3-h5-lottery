export const cacheDataRef={
    hot:'hot-list'
}

export const setClipboardData=(data)=>{
    uni.setClipboardData({
        data,
        success: ()=> {
            uni.showToast({
                title: '链接已复制,快去分享吧',
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
