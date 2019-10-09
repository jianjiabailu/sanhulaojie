<template>
	<div class="page-home flex-col">
		<ly-header></ly-header>
		<div class="page-body flex-row">
			<div><ly-navbar></ly-navbar></div>
			<div class="flex-col main-body">
				<ly-tabbar></ly-tabbar>
				<keep-alive><router-view class="flex"></router-view></keep-alive>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home'
	}
</script>

<style scoped>
	.page-home{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.page-body{
		flex: 1;
		height: 100%;
		padding: 1rem;
		overflow-x: hidden;
		overflow-y: auto;
		position: relative;
		box-sizing: border-box;
	}
	.ly-navbar{
		height: 100%;
		margin-right: 1rem;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	}
	.main-body{
		flex: 1;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	}
	.main-body>div{
		padding: 1rem;
	}
	.ly-tabbar{
		border-bottom: 1px solid #FEF0F0;
	}
	
</style>
