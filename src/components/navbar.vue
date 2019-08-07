<template>
	<div class="navbar">
		<ly-menu :collapse="$store.state.isCollapse">
			<router-link class="ly-link" to="/gallery">
				<i class="el-icon-folder"></i>
				<span class="ly-menu-tit">图库</span>
			</router-link>
			<router-link class="ly-link" to="/projects">
				<i class="el-icon-document"></i>
				<span class="ly-menu-tit">项目</span>
			</router-link>
			<router-link class="ly-link" to="/mine">
				<i class="el-icon-user"></i>
				<span class="ly-menu-tit">我的</span>
			</router-link>
			<router-link class="ly-link" to="/favorite">
				<i class="el-icon-collection-tag"></i>
				<span class="ly-menu-tit">收藏夹</span>
			</router-link>
			<router-link class="ly-link" to="/setting">
				<i class="el-icon-setting"></i>
				<span class="ly-menu-tit">设置</span>
			</router-link>
			<a class="ly-link" href="http://blog.sanhulaojie.cn" target="_blank">
				<i class="el-icon-eleme"></i>
				<span class="ly-menu-tit">博客</span>
			</a>
		</ly-menu>
	</div>
</template>

<script>
	export default {
		name: 'ly-navbar',
		data(){
			return {
				
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
		background-color: white;
	}
	.navbar-title{
		padding: 1em 0;
		border-right: solid 1px #e6e6e6;;
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
