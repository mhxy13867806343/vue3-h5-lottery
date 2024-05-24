

export default ()=>{
    const offset=ref(0)//偏移量
    const limit=ref(50)//数量
    const list=ref([])
    const isLen=ref(false)
    const isLenMore=ref(false)
    const loading=ref(false)
    const finished=ref(false)
    const onClickOffset=(cb)=>{
        if(offset.value===0){
            offset.value=0*limit.value+limit.value
        }else{
            offset.value=offset.value+limit.value
        }
        if(!isLen.value){
            cb()
            isLenMore.value=false
        }else{
            isLenMore.value=true
        }
       
    }
    const onListReset=()=>{
        list.value=[]
    }
    const getGithubSearchUrlMoreCbAjax=(cb,data)=>{
        cb(data).then(res=>{
            list.value=[...list.value,...res] ||[]
           if(!res.length){
               isLen.value=true
           }
        }).catch(e=>{
        
        })
    }
    const onOffsetReset=()=>{
        offset.value=0
        isLenMore.value=false
        isLen.value=false
    }
    const onSearchLoad=(cb)=>{
        if(!list.value.length){
            loading.value=false
            return
        }
        getListMore(cb)
        
    }
    const getListMore=(cb)=>{
        loading.value=true
      
        cb({
            limit:limit.value,
            offset:offset.value
        }).then(res=>{
            if(!res.length){
                finished.value=true
            }
            list.value=[...list.value,...res] ||[]
            loading.value=false
            if(list.value.length>=50){
                offset.value=offset.value+limit.value
            }
        }).catch(e=>{
            loading.value=false
        })
    }
    return {
        offset,
        limit,
        list,
        loading,
        finished,
        onSearchLoad,
        onClickOffset,
        isLen,
        isLenMore,
        onListReset,
        onOffsetReset,
        getListMore,
        getGithubSearchUrlMoreCbAjax
    }
}
