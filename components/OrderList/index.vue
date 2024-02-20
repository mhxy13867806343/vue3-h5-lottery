<script>
export default {
	name : "index",
	props:{
		data:{
			type:Array,
			default:[]
		}
	},
	methods:{
		onClick(item,index){
			this.$emit('click',item,index)
		}
	}
}
</script>

<template>
	<view class="order-container">
		<block v-for="(item,index) in data" :key="index" @click="onClick(item,index)">
			<view class="order-item">
				<view class="order-item-cid">
					<view class="order-item-cid-left">
						<view class="order-item-cid-left-id">运单号:FD1234</view>
						<view class="order-item-cid-left-copy">
							icon
						</view>
					</view>
					<view class="order-item-cid-right">
						<text>送货上门</text>
					</view>
				</view>
				<view class="order-item-caddress">
					<view class="order-item-caddress-center">
						<view class="order-item-caddress-center-start">
							<view class="order-item-caddress-center-start-s1">杭州</view>
							<view class="order-item-caddress-center-start-s2">xxxxx</view>
						</view>
						<view class="order-item-caddress-center-se">
							<view class="order-item-caddress-center-se-rarrow">
								---->
							</view>
							<view class="order-item-caddress-center-se-status">
								待录入信息
							</view>
						</view>
						<view class="order-item-caddress-center-end">
							<view class="order-item-caddress-center-end-address">
								玉珏市
							</view>
							<view class="order-item-caddress-center-end-address-qt">
								xx五金
							</view>
						</view>
					</view>
				</view>
				<view class="order-item-ctime">
					<view class="order-item-ctime-text">
						<text>预计送货时间:</text>2023/1/2
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<style scoped lang="scss">
.order-container{
	.order-item{
		.order-item-cid{
			.order-item-cid-left{
				.order-item-cid-left-id{}
				.order-item-cid-left-copy{}
			}
			.order-item-cid-right{
				text{}
			}
		}
		.order-item-caddress{
			.order-item-caddress-center{
				.order-item-caddress-center-start{
					.order-item-caddress-center-start-s1{}
					.order-item-caddress-center-start-s2{}
				}
				.order-item-caddress-center-se{
					.order-item-caddress-center-se-rarrow{}
					.order-item-caddress-center-se-status{}
				}
				.order-item-caddress-center-end{
					.order-item-caddress-center-end-address{}
					.order-item-caddress-center-end-address-qt{}
				}
			}
		}
		.order-item-ctime{
			.order-item-ctime-text{
				text{}
			}
		}
	}
}
</style>
