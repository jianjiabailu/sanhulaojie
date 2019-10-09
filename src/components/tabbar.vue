<template>
	<div class="ly-tabbar flex-row">
		<el-tag v-for="item in routes" :key="item.path" :type="activeTab==item.path?'success':''" closable @close="removeTab(item)">
		  <router-link class="ly-link" :to="item.path">
		  	<span class="ly-menu-tit">{{item.name}}</span>
		  </router-link>
		</el-tag>
	</div>
</template>

<script>
	export default {
		name: 'ly-tabbar',
		data(){
			return {
				activeTab: {},
				routes: [],
				paths: []
			}
		},
		mounted() {
			this.$data.routes.push(this.$route)
			this.$data.activeTab = this.$route.path
			this.$data.paths.push(this.$route.path)
		},
		watch: {
			$route(to,from){
				this.$data.activeTab = to.path;
				if (this.$data.paths.indexOf(to.path) < 0){
					this.$data.routes.push(to)
					this.$data.paths.push(to.path)
				}
			}
		},
		methods: {
			// 移除tab项
			removeTab: function(select){
				let indx = this.$data.routes.indexOf(select);
				// 1.判断是否为最后一个标签
				if (this.$data.routes.length <= 1) {
					this.$message('这已经是最后一个标签了');
				// 2.判断移除项是否为当前标签页
				} else if(select.path == this.$data.activeTab){
					// 将选择的标签从数组中移除
					this.$data.routes.splice(indx,1)
					this.$data.paths.splice(indx,1)
					// 跳转到上一个标签页
					let next_route = this.$data.routes[indx-1];
					this.$router.push(next_route.path)
					this.$data.activeTab = next_route.path;
				} else {
					// 将选择的标签从数组中移除
					this.$data.routes.splice(indx,1)
					this.$data.paths.splice(indx,1)
				}
			}
		}
	}
</script>

<style>
	.ly-tabbar{
		background-color: white;
	}
	.ly-tabbar .el-tag{
		margin-right: 1rem;
	}
	.ly-tabbar .ly-link{
		padding: 0 1rem;
	}
</style>
