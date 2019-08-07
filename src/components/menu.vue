<template>
	<div class="ly-menu" :class="{collapse:collapse,row:type=='row'}">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "ly-menu",
		props: ['collapse','type']
	}
</script>

<style>
	.ly-menu{
		z-index: 9;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		position: relative;
		margin: 0; padding: 0;
		border-right: 1px solid #D9D9D9;
	}
	.ly-menu.row{
		display: flex;
		flex-direction: row;
	}
	.ly-menu .ly-link{
		display: flex;
		height: 3rem; 
		line-height: 3rem;
		box-sizing: border-box;
		align-items: center;
		padding: .5rem 1rem;
	}
	.ly-menu .ly-link:hover{
		background-color: #FEF0F0;
	}
	.ly-menu .ly-menu-tit{
		margin-left: .5rem;
	}
	.ly-menu.collapse .ly-menu-tit{
		display: none;
	}
</style>
