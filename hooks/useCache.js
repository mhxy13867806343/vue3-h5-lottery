export default ()=>{
    const cacheDataRef=ref({
        hot:'hot-list'
    })
    const setStorageSync=(key,value)=>{
        try {
            uni.setStorageSync(key,value);
        } catch (e) {
            // error
        }
    }
     const getStorageSync=(key)=>{
        try {
            return uni.getStorageSync(key);
        } catch (e) {
            // error
        }
    }
    
    const removeStorageSync=(key)=>{
        try {
            uni.removeStorageSync(key);
        } catch (e) {
            // error
        }
    }
    return {
        cacheDataRef,
        setStorageSync,
        getStorageSync,
        removeStorageSync
    }
}
