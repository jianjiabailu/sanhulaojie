<template>
	<div class="navbar">
		<div class="nav-item">
			<div class="item-tit">页面导航</div>
			<div class="item-cont">
				<router-link class="c-link" to="/love">表白</router-link>
				<router-link class="c-link" to="/snow">下雪</router-link>
				<router-link class="c-link" to="/gallery">图库</router-link>
				<router-link class="c-link" to="/teamDetail">团队详情</router-link>
				<router-link class="c-link" to="/survey">答题</router-link>
			</div>
		</div>
		<div class="nav-item">
			<div class="item-tit">回到顶部</div>
		</div>
		<div class="nav-item">
			<div class="item-tit"><a href="http://blog.sanhulaojie.cn" target="_blank">我的博客</a></div>
		</div>
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

<style>
	img{max-width: 100%;}
	.navbar{
		display: flex;
		flex-direction: column;
		background-color: antiquewhite;
	}
	.navbar .nav-item{
		font-size: 14px;
		padding: 10px 5px;
		position: relative;
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
