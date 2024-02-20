import{ref} from '@vue/composition-api'
export default ()=>{
   const  etcList=ref([])//etc列表
   const   truckList=ref([])//车辆列表
    const  travelList=ref([])//行驶证列表
    const  driveList=ref([])//驾驶证列表
    //删除图片
    const delUpload=(ref,event)=>{
       ref.splice(event.index, 1)
    }
    return {
        etcList,
        truckList,
        travelList,
        driveList,
        delUpload
    }
}
