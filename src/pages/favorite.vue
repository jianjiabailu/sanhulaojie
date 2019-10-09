<template>
	<div class="favoritePage" >
		<div class="topBar flex-row a-center">
			<el-input class="tit" type="text" v-model="createInfo.title" placeholder="标题"></el-input>
			<el-input class="cont" type="text" v-model="createInfo.link" placeholder="链接"></el-input>
			<el-button :disabled="!(createInfo.title && createInfo.link)" @click="createFavorite">添加</el-button>
			<el-switch v-model="createInfo.is_private" active-value="1" inactive-value="0"></el-switch>
		</div>
		<ly-table class="t-center">
			<tr><td>名称</td><td>地址</td><td>等级</td><td>操作</td></tr>
			<tr v-for="(item,index) in tableData" :key="item.id">
				<td>
					<p v-if="item != alterColumn">{{item.title}}</p>
					<el-input v-if="item == alterColumn" v-model="alterColumn.title"></el-input>
				</td>
				<td>
					<p v-if="item != alterColumn">{{item.link}}</p>
					<el-input v-if="item == alterColumn" v-model="alterColumn.link"></el-input>
				</td>
				<td>
					<p v-if="item != alterColumn">{{item.is_private == '1' ? '保密' : '普通'}}</p>
					<el-switch v-if="item == alterColumn" v-model="alterColumn.is_private" active-value="1" inactive-value="0"></el-switch>
				</td>
				<td>
					<i v-if="item != alterColumn" class="el-icon-delete" @click="deleteFavorite(item,index)"></i>
					<i v-if="item != alterColumn" class="el-icon-edit" @click="alterColumn = item"></i>
					<i v-if="item == alterColumn" class="el-icon-check" @click="savaFavorite"></i>
				</td>
			</tr>
		</ly-table>
	</div>
</template>
<script>
	export default{
		name:'favorite',
		data(){
			return {
				tableData: [],
				createInfo: {},
				alterColumn: {}
			}
		},
		mounted(){
			this.getFavorite()
		},
		methods: {
			// 删除收藏
			deleteFavorite: function(item,index){
				let params = {id: item.id};
				this.$http.delete(this.$store.state.request_url + '/user/deleteFavorite?id='+item.id).then(res => {
					console.log('deleteFavorite',res)
					if(res.body.returncode == 100){
						this.$data.tableData.splice(index,1)
					}
				});
			},
			
			// 添加收藏
			createFavorite: function(){
				const createInfo = this.$data.createInfo;
				if(createInfo.title && createInfo.link){
					this.$http.post(this.$store.state.request_url + '/user/createFavorite',createInfo).then(res => {
						console.log('createFavorite',res)
						if(res.body.returncode == 100){
							this.getFavorite()
						}
					})
				}
			}, 
			
			// 获取收藏夹
			getFavorite: function(){
				this.$http.get(this.$store.state.request_url + '/user/getFavorites').then(res => {
					console.log('getFavorite',res)
					if(res.body.returncode == 100){
						this.$data.tableData = res.body.data;
					}
				});
			},
			
			// 修改收藏
			alterFavorite: function(item){
				// this.$data.alterColumn = item;
			},
			
			// 保存修改
			savaFavorite: function(){
				this.$data.alterColumn.create_time = null;
				this.$http.post(this.$store.state.request_url + '/user/updateFavorite', this.$data.alterColumn).then(res => {
					console.log('savaFavorite',res)
					if(res.body.returncode == 100){
						this.$data.alterColumn = {}
					}
				});
			},
			test: function(){
				return this.$http.get(this.$store.state.request_url + '/user/getFavorites')
			}
			
		}
	}
</script>

<style scoped>
	.topBar{
		color: white;
		padding: .5rem;
	}
	.topBar .el-input, .topBar .el-button{
		margin-right: 1rem;
	}
	.topBar .el-input.tit{
		width: 200px;
	}
	.topBar .el-input.cont{
		width: 400px;
	}
	
	.favoritePage i{
		margin: .5rem;
		cursor: pointer;
	}
	
	.ly-table{
		width: 100%;
		margin-top: 2rem;
	}
</style>
