<template>
	<div class="header">
		<el-row>
			<el-col :span="6">
			  <el-switch v-model="$store.state.isCollapse"></el-switch>
			</el-col>
			<el-col :span="12">
				<!-- <ly-heart style="transform: scale(.2)"></ly-heart> -->
				<div>管理系统</div>
			</el-col>
			<el-col :span="6">
			  <ly-search></ly-search>
			</el-col>
		</el-row>
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
		width: 100%; 
		padding: 1rem;
		box-sizing: border-box;
		background-color: #2C3E50;
	}
	
	.h-logo img{
		width: 60px; height: 60px;
	}
	
</style>
