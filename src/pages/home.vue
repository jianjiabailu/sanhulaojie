<template>
	<div class="home">
		<ly-navbar class="fixed-box"></ly-navbar>
		<keep-alive><router-view></router-view></keep-alive>
	</div>
</template>

<script>
	export default {
		name: 'home'
	}
</script>

<style scoped>
	.fixed-box{
		z-index: 999;
		position: fixed;
		left: -46px; top: 60%;
	}
	.fixed-box:hover{
		left: 0;
	}
	
</style>
