<template>
	<div class="homePage">
		<ly-navbar></ly-navbar>
		<div class="content">
			<keep-alive><router-view></router-view></keep-alive>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'home'
	}
</script>

<style scoped>
	.homePage{
		display: flex;
		height: 100vh;
		overflow: hidden;
	}
	.homePage .content{
		flex: 1;
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		position: relative;
		box-sizing: border-box;
	}
	.breadcrumb{
		padding: 1em;
		border-bottom: 1px solid #e6e6e6;
	}
</style>
