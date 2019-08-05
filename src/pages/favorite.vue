<template>
	<div>
		<table border="1">
			<tr>
				<td>logo</td>
				<td>名称</td>
				<td>地址</td>
				<td>操作</td>
			</tr>
			<tr v-for="(item,index) in tableData" :key="item.id">
				<td>{{item.icon}}</td>
				<td>{{item.title}}</td>
				<td>{{item.link}}</td>
				<td>
					<i class="el-icon-delete"></i>
					<i class="el-icon-edit" @click="deleteFavorite(item,index)"></i>
					<i class="el-icon-paperclip"></i>
				</td>
			</tr>
			<tr><td colspan="4" @click="createFavorite">添加</td></tr>
		</table>
	</div>
</template>

<script>
	export default{
		name:'favorite',
		data(){
			return {
				tableData: []
			}
		},
		mounted(){
			this.getFavorite()
		},
		methods: {
			deleteFavorite(item,index){
				let params = {
					data: {id: item.id},
					headers: {
						'method': 'deleteFavorite',
						'token': localStorage.getItem('token')
					}
				}
				this.$http.post('http://sanhulaojie.cn:8888/admin/user',params.data,{headers: params.headers})
				.then(res => {
					console.log(res)
					this.$data.tableData.splice(index,1)
				}, error => {
					console.log(error)
					// error callback
				});
			},
			createFavorite(){
				let params = {
					data: {
						title:'我的宝塔面板',
						link:"http://sanhulaojie.cn:8910/",
						icon:'http://sanhulaojie.cn:8910/static/favicon.ico'
					},
					headers: {
						'method': 'createFavorite',
						'token': localStorage.getItem('token')
					}
				}
				this.$http.post('http://sanhulaojie.cn:8888/admin/user',params.data,{headers: params.headers})
				.then(res => {
					// get body data
					console.log(res)
					this.getFavorite()
					// this.$data.imgs.push(res.body.data.fileurl)
				}, error => {
					console.log(error)
					// error callback
				});
			},
			getFavorite(){
				// 请求图片 
				// http://localhost
				// http://api.sanhulaojie.cn
				this.$http.post('http://sanhulaojie.cn:8888/admin/user',{},{
					headers: {
						'method': 'getFavorite',
						'token': localStorage.getItem('token')
					}
				}).then(res => {
					// get body data
					console.log(res)
					this.$data.tableData = res.body
					// this.$data.imgs.push(res.body.data.fileurl)
				}, error => {
					console.log(error)
					// error callback
				});
			}
		}
	}
</script>

<style>
	i{
		cursor: pointer;
	}
</style>
