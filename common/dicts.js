export default {
    personMenuList:[
        { text: '发动态',url: '/pages/dynamic/dynamic',type:'click'},
        { text: '去签名',url: '/pages/signature/signature',type:'click'},
        { text: '反馈',url: '/pages/feedback/feedback',type:'click'},
    ],
    dynamicMenuList:[
        {icon: 'share-o',text: '分享',url: '#',type:'share-click'},
        { icon: 'chat-o',text: '反馈',url: '/pages/feedback/feedback',type:'click'},
    ],
    shareMenuList:[
        { name: '复制链接', icon: 'link',url:'123' },
        { name: '二维码', icon: 'qrcode',url:'123' },
    ]
}
