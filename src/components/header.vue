<template>
	<div class="header">
		<div class="h-top">
			<el-switch v-model="$store.state.isCollapse"></el-switch>
			<!-- <el-radio-group v-model="$store.state.isCollapse" style="margin-bottom: 20px;">
			  <el-radio-button :label="false">展开</el-radio-button>
			  <el-radio-button :label="true">收起</el-radio-button>
			</el-radio-group> -->
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'ly-header'
	}
</script>

<style>
	.header .h-top{
		display: flex;
		align-items: center;
		padding: 0 1rem;
		width: 100%; height: 50px;
		background-color: #2C3E50;
	}
	.h-logo img{
		width: 60px; height: 60px;
	}
</style>
