<script>
export default {
	onLaunch: function() {
		// #ifdef APP-PLUS
		//锁定屏幕
		plus.screen.lockOrientation('portrait-primary');
		const dom = weex.requireModule('dom');
		dom.addRule('fontFace', { 
			'fontFamily': "graceIconfont",
			'src': "url('/static/grace.ttf')"
		});
		// #endif
	},
	onShow: function() {},
	onHide: function() {}
}
</script>
<style>
/* 加载框架核心样式 */
@import "./GraceUI5/css/graceUI.css";
/* 加载主题样式 */
@import "./GraceUI5/skin/black.css";
/* 加载图标字体 - 条件编译模式 */
/* #ifdef APP-NVUE */
.gui-icons{font-family:graceIconfont;}
/* #endif */
</style>
