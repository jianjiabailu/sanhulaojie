<template>
  <div id="app"><router-view class="container"></router-view></div>
</template>

<script>

export default {
	name: 'app',
	watch: {
		$route(to,from){
			document.title = to.name
		}
	}
}
</script>

<style>
	body{padding: 0; margin: 0;}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	.container{
		width: 100vw;
		min-height: 100vh;
		overflow: hidden;
		position: relative;
	}
	/* 消除按钮的默认样式 */
	input[type='button'],button{
		outline: none;
		border: none;
	}
	/* 消除超链接的默认样式 */
	a{color: inherit;text-decoration: none;}
	
</style>
