import {
    getToTchTheFish as getToTchTheFishApi ,
    getHotlistall as getHotlistallApi ,
    getDelivery
} from '@/api/outer'
export default ()=>{
    const list=ref([])
    const searchName = ref('')
    const apiDataRef =ref({})
    const systemInfo = ref({})
    const stausData = ref({})
    const isLoading = ref(false)//
    onMounted(() => {
        nextTick(() => {
            uni.getSystemInfo({
                success: res=> {
                    systemInfo.value = res
                }
            });
        })
    })
    const onClickSearch = (val) => {
        searchName.value = val
        isLoading.value = false
        apiDataRef.value = {}
        
        getToTchTheFish(val)
    }
    //摸鱼方式
    const getToTchTheFish=(type='moyu')=>{
        getToTchTheFishApi(type).then(res=>{
            apiDataRef.value = res
            isLoading.value = false
        }).catch(e=>{
            isLoading.value = true
        })
       
    }
    //热门榜单
    const getHotlistall=data=>{
        getHotlistallApi(data).then(res=>{
            list.value = res.data ||[]
        }).catch(e=>{
        })
    }
    const onCreatedDeliveryData=async ()=>{
        list.value=[]
        stausData.value={}
        isLoading.value=true
        getDelivery(searchName.value).then(res=>{
            
            const {code,result}=res
            if(result){
                if(code!==200){
                    uni.showToast({
                        title:res.message,
                        icon:"none"
                    })
                    isLoading.value=false
                    return
                }
                stausData.value=result
                list.value=result.info
                
                if(!list.value.length){
                    isLoading.value=false
                    return
                }
                isLoading.value=true
            }else{
                isLoading.value=false
                list.value=[]
            }
            
            
        }).catch(err=>{
        
        })
    }
    return {
        list,
        stausData,
        searchName,
        apiDataRef,
        systemInfo,
        isLoading,
        getHotlistall,
        getToTchTheFish,
        onClickSearch,
        onCreatedDeliveryData
    }
}
