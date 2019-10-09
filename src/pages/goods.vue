<template>
	<div class="page-goods">
		<el-row :gutter="10">
			<el-col :span="6">
				<el-input placeholder="请输入内容">
				    <template slot="append">
						<el-button type="primary">查找商品</el-button>
					</template>
				</el-input>
			</el-col>
			<el-col :span="12">
				<el-button-group>
					<el-button type="primary">添加商品</el-button>
					<el-button type="primary">删除商品</el-button>
				</el-button-group>
			</el-col>
		</el-row>
		<ly-table>
			<tr style="white-space: nowrap;">
				<td>#</td>
				<td>名称</td>
				<td>产品介绍</td>
				<td>正常价格</td>
				<td>实际价格</td>
				<td>库存</td>
				<td>状态</td>
				<td>发布时间</td>
				<td>创建时间</td>
			</tr>
			<tr v-for="item in goodsList" :key="item.goodsId">
				<td><img class="goodsImg" :src="item.goodsImg" alt=""></td>
				<td>{{item.goodsName}}</td>
				<td>{{item.goodsDesc}}</td>
				<td>{{item.normalPrice}}</td>
				<td>{{item.realPrice}}</td>
				<td>{{item.goodsStock}}</td>
				<td>{{item.goodsStatus}}</td>
				<td>{{item.saleTime}}</td>
				<td>{{item.createTime}}</td>
			</tr>
		</ly-table>
	</div>
</template>

<script>
	export default {
		name: 'myGoods',
		data(){
			return {
				goodsList: []
			}
		},
		mounted() {
			this.getGoods()
		},
		methods: {
			getGoods: function(){
				// 获取商品列表
				this.$http.post(this.$store.state.request_url + '/goods/getGoodsList',{}).then(res => {
					console.log('getGoods',res)
					if(res.body.returncode == 100){
						this.$data.goodsList = res.body.data
					}
				})
			}
		}
	}
</script>

<style scoped>
	.ly-table{
		width: 100%;
		margin-top: 1rem;
	}
	.goodsImg{
		width: 100px;
	}
</style>
