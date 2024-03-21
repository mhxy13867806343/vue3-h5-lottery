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
<style lang="scss">
    @import '@/uni_modules/uv-ui-tools/index.scss';
    .app-container{
	    padding: 30rpx;
    }
</style>
