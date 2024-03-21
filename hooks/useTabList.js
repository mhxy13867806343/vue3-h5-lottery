export default ()=>{
    const current = ref(0)// 当前tab
    const search = ref('') // 搜索关键词
    const tabList=ref([{
        name: '公开'
    }, {
        name: '私有'
    }])
    const handleTabChange = ({index}) => {
        current.value=index
    }
    const handleTransition=({detail})=>{
        current.value=detail.current
    }
    const onSearch=(value)=>{
        console.log('搜索',value)
    }
    return {
        current,
        search,
        tabList,
        handleTabChange,
        handleTransition,
        onSearch
    }
}
