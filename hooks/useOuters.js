import {getToTchTheFish as getToTchTheFishApi} from '@/api/outer'
import { Toast } from 'vant';
export default ()=>{

    const searchName = ref('')
    const apiDataRef =ref({})
    const systemInfo = ref({})
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
        Toast.loading({
            message: '正在加载中...',
            forbidClick: true,
            loadingType: 'spinner',
        });
        getToTchTheFishApi(type).then(res=>{
            apiDataRef.value = res
            isLoading.value = false
            Toast.clear()
        }).catch(e=>{
            console.log(e,5555)
            uni.showToast({
                title: e.message,
                icon: 'none'
                
            })
            isLoading.value = true
            Toast.clear()
        })
       
    }
    return {
        searchName,
        apiDataRef,
        systemInfo,
        isLoading,
        getToTchTheFish,
        onClickSearch
    }
}
