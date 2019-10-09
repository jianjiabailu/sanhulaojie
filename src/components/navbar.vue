<template>
	<div class="ly-navbar">
		<ly-menu :collapse="$store.state.isCollapse">
			<router-link v-for="item in routerLinks" :key="item.path" class="ly-link" :to="item.path">
				<i :class="item.icon"></i>
				<span class="ly-menu-tit">{{item.name}}</span>
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
				routerLinks: [
					{name: '图库',path: '/gallery',icon: 'el-icon-folder'},
					{name: '商品管理',path: '/goods',icon: 'el-icon-shopping-bag-2'},
					{name: '我的',path: '/mine',icon: 'el-icon-user'},
					{name: '收藏夹',path: '/favorite',icon: 'el-icon-collection-tag'},
					{name: '设置',path: '/setting',icon: 'el-icon-setting'}
				]
			}
		}
	}
</script>

<style scoped>
	.ly-navbar{
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: white;
	}
	img{max-width: 100%;}
	.navbar-title{
		padding: 1em 0;
		/* border-right: solid 1px #e6e6e6;; */
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
