<script>
    import { toast } from "@/uni_modules/uv-ui-tools/libs/function";
    
    export default {
        onLaunch: function() {
            console.log('App Launch')
	        // this.isverifyToken()
        },
        onShow: function() {
            console.log('App Show')
			// this.isverifyToken()
        },
        onHide: function() {
            console.log('App Hide')
        },
        computed: {

        },
	    watch:{
	    },
        methods: {
			isverifyToken(){
				if(this.$store.state.token){
					uni.reLaunch({
						url:'/pages/home/home'
					})
				}else{
					toast('请先登录')
					setTimeout(()=>{
						uni.reLaunch({
							url:'/pages/login/login'
						})
					},1500)
				}
			}
        }
    }
</script>
<style>
/* 每个页面公共css，这个如果不引入的话会出现vant组件可以使用但是没有样式（注意后缀一定要带） */
@import '@/node_modules/vant/lib/index.css';
</style>
<style lang="scss">
    @import '@/uni_modules/uv-ui-tools/index.scss';
   @import '@/static/font/iconfont.css';
    @import "@/GraceUI5-157599/GraceUI5/css/graceUI.css";
    /* 加载主题样式 */
    @import "@/GraceUI5-157599/GraceUI5/skin/black.css";
</style>
