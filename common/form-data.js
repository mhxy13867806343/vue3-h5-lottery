const pubPlaceholderStyle={};//共用的
const fontSize='';
const color='';
export  const formOptions=[
    {
        type:'text',// 表单类型
        disabled:false,// 是否禁用
        clearable:false,// 是否可清空
        placeholder:'驾驶员姓名',// 占位符
        maxlength:50,// 最大输入长度
        color:'#303133',// 输入框字体颜色	'
        border:'none',//surround | bottom | none,
        readonly:false,// 是否只读
        shape:'square',
        placeholderStyle:{},
        fontSize:'',
        slot:{
            show:true,// 是否使用插槽
            slotLeft:'prefix',
            slotRight:'suffix',
            label:'驾驶员姓名',
            value:'请填写',
            color:'#303133',
            isArrow:false,
            required:false,//是否必填
        },
        index:0,// 索引
        show:true,// 是否显示
        vmodel:'name',
    },{
        type:'tel',// 表单类型
        disabled:false,// 是否禁用
        clearable:false,// 是否可清空
        placeholder:'手机号',// 占位符
        maxlength:11,// 最大输入长度
        color:'#303133',// 输入框字体颜色	'
        border:'none',//surround | bottom | none,
        readonly:false,// 是否只读
        shape:'square',
        placeholderStyle:{},
        fontSize:'',
        slot:{
            show:true,// 是否使用插槽
            slotLeft:'prefix',
            slotRight:'suffix',
            label:'手机号',
            value:'请填写',
            color:'#303133',
            isArrow:false,
            required:false,//是否必填
        },
        index:1,// 索引
        show:true,// 是否显示
        vmodel:'name',
    },{
        type:'keyboard',// 表单类型
        disabled:true,// 是否禁用
        clearable:false,// 是否可清空
        placeholder:'货车号码',// 占位符
        maxlength:-1,// 最大输入长度
        color:'#303133',// 输入框字体颜色	'
        border:'none',//surround | bottom | none,
        readonly:false,// 是否只读
        shape:'square',
        placeholderStyle:{},
        fontSize:'',
        slot:{
            show:true,// 是否使用插槽
            slotLeft:'prefix',
            slotRight:'suffix',
            label:'必填',
            value:'请选择',
            color:'#303133',
            isArrow:false,
            required:false,//是否必填
        },
        index:2,// 索引
        show:true,// 是否显示
        vmodel:'name',
    },
    {
    type:'datetime',// 表单类型
    disabled:true,// 是否禁用
    clearable:false,// 是否可清空
    placeholder:'送货时间',// 占位符
    maxlength:-1,// 最大输入长度
    color:'#303133',// 输入框字体颜色	'
    border:'none',//surround | bottom | none,
    readonly:true,// 是否只读
    shape:'square',
        placeholderStyle:{},
    fontSize:'',
    slot:{
        show:true,// 是否使用插槽
        slotLeft:'prefix',
        slotRight:'suffix',
        label:'必填',
        value:'请填写',
        color:'#303133',
        isArrow:false,
        required:true,//是否必填
    },
    index:3,// 索引
    show:true,// 是否显示
    vmodel:'name',
}
]
