import {
    getToTchTheFish as getToTchTheFishApi ,
    getHotlistall as getHotlistallApi ,
    getDelivery as getDeliveryApi , getGasolinePriceQuery as getGasolinePriceQueryApi ,
    getRubbish as getRubbishApi ,
    getBBaikeaike as getBaikeApi ,
    getPicture as getPictureApi , getPicture
} from '@/api/outer'
export default ()=>{
    const list=ref([])
    const searchName = ref('')
    const apiDataRef =ref({})
    const systemInfo = ref({})
    const stausData = ref({})
    const contentText=ref('')
    const isLoading = ref(false)//
    const inClickSearch = ref(false)
    const currentIndex=ref(1)
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
    const getGasolinePriceQuery=data=>{
        getGasolinePriceQueryApi(data).then(res=>{
            if(res?.data?.list){
               list.value= res.data.list
            }
        
        }).catch(e=>{
            console.log(e)
        })
    }
    const getPicture=page=> {
        getPictureApi ( page ).then ( res => {
            const {data}=res
            list.value =data || []
        } ).catch ( e => {
        
        } )
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
        getDeliveryApi(searchName.value).then(res=>{
            
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
    const getRubbish=data=> {
        list.value = []
        getRubbishApi ( data ).then ( res => {
            const {result,code}=res
            list.value =result || []
        } ).catch ( e => {
            console.log ( e )
        } )
    }
    const getBaike=data=> {
        inClickSearch.value=false
        getBaikeApi ( data ).then ( res => {
            const {data,code}=res
            if(code===200){
                inClickSearch.value=true
                contentText.value =`<view><img src="${data.img_url}"  /></view>${data.text }`
                stausData.value=data.home
            }else{
                inClickSearch.value=false
                contentText.value=""
                stausData.value=""
               uni.showToast({
                   title:`${data.status}`,
                   icon:"none"
               })
               
            }
        }).catch ( e => {
            searchName.value=''
            inClickSearch.value=false
        } )
    }
    const onClearSearch=()=>{
        inClickSearch.value=false
        contentText.value=""
        stausData.value=""
    }
    return {
        list,
        contentText,
        stausData,
        searchName,
        apiDataRef,
        systemInfo,
        isLoading,
        inClickSearch,
        onClearSearch,
        getRubbish,
        getHotlistall,
        getToTchTheFish,
        onClickSearch,
        onCreatedDeliveryData,
        getGasolinePriceQuery,
        getBaike,
        getPicture,
        currentIndex,
    }
}
