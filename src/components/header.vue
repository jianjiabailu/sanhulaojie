<template>
	<div class="header">
		<div class="h-top">
			
		</div>
		<!-- <div class="h-logo">
			<img alt="Vue logo" src="../assets/logo.png">
		</div> -->
	</div>
</template>

<script>
	export default {
	  name: 'Header'
	}
</script>

<style>
	.header .h-top{
		display: flex;
		align-items: center;
		width: 100%; height: 50px;
		background-color: #2C3E50;
	}
	.h-logo img{
		width: 60px; height: 60px;
	}
</style>
