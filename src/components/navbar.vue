<template>
	<div class="navbar">
		<!-- <div class="flex-row j-center navbar-title">
			<el-switch v-model="$store.state.isCollapse"></el-switch>
		</div> -->
		<el-menu :collapse="!$store.state.isCollapse">
		  <el-menu-item>
			<i class="el-icon-folder"></i>
			<router-link slot="title" class="c-link" to="/gallery">图库</router-link>
		  </el-menu-item>
		  <el-menu-item>
			<i class="el-icon-document"></i>
			<router-link slot="title" class="c-link" to="/projects">项目</router-link>
		  </el-menu-item>
		  <el-menu-item>
			<i class="el-icon-user"></i>
			<router-link slot="title" class="c-link" to="/mine">我的</router-link>
		  </el-menu-item>
		  <el-menu-item>
			<i class="el-icon-collection-tag"></i>
			<router-link slot="title" class="c-link" to="/favorite">收藏夹</router-link>
		  </el-menu-item>
		  <el-menu-item>
			<i class="el-icon-eleme"></i>
			<a slot="title" href="http://blog.sanhulaojie.cn" target="_blank">博客</a>
		  </el-menu-item>
		  <el-menu-item>
			<i class="el-icon-setting"></i>
			<router-link slot="title" class="c-link" to="/setting">设置</router-link>
		  </el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: 'ly-navbar',
		data(){
			return {
				isCollapse: true
			}
		},
		methods: {
		  handleOpen(key, keyPath) {
			console.log(key, keyPath);
		  },
		  handleClose(key, keyPath) {
			console.log(key, keyPath);
		  }
		}
	}
</script>

<style scoped>
	img{max-width: 100%;}
	.navbar{
		display: flex;
		flex-direction: column;
		height: 100vh;
		overflow-y: auto;
		background-color: white;
	}
	.navbar-title{
		padding: 1em 0;
		border-right: solid 1px #e6e6e6;;
	}
	.navbar ul{
		height: 100%;
	}
	
	.item-tit{
		cursor: -ms-pointer;
		cursor: pointer;
	}
	.item-cont{
		display: none;
		flex-direction: column;
		position: absolute;
		left: 100%; top: 0;
		white-space: nowrap;
	}
	.nav-item:hover .item-cont{
		display: flex;
	}
	.item-cont .c-link{
		padding: 10px;
		margin-left: 1px;
		background-color: antiquewhite;
	}
	
</style>
