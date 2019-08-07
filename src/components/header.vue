<template>
	<div class="header">
		<el-switch v-model="$store.state.isCollapse"></el-switch>
		<div>管理系统</div>
		<div></div>
	</div>
</template>

<script>
	export default {
	  name: 'ly-header'
	}
</script>

<style>
	.header{
		color: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;
		width: 100%; height: 50px;
		background-color: #2C3E50;
	}
	
	.h-logo img{
		width: 60px; height: 60px;
	}
</style>
