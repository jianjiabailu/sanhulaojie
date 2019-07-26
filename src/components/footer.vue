<template>
	<div class="footer">
		<router-link class="flex" to="/project/home">首页</router-link>
		<router-link class="flex" to="/project/objs">项目</router-link>
		<router-link class="flex" to="/project/mine">我的</router-link>
	</div>
</template>

<script>
	export default {
	  name: 'Footer'
	}
</script>

<style>
	.footer{
		color: white;
		text-align: center;
		line-height: 50px;
		display: flex;
		align-content: center;
		width: 100%; height: 50px;
		background-color: #2C3E50;
	}
	.flex{flex: 1;}
</style>
