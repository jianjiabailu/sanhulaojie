<template>
	<div class="dialog">
		<div class="content" @click.stop="preventDefault">
			<span class="delete" @click="close">删除</span>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ly-dialog',
		props: ['size'],
		methods: {
			close(event){
				this.$parent.$data.dialogView = false;
			},
			preventDefault(event){
				event && event.preventDefault();
			}
		}
	}
</script>

<style scoped>
	.dialog{
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0; top: 0;
		background-color: rgba(0,0,0,.2);
	}
	.dialog .content{
		width: 60%;
		min-height: 100px;
		padding: 1em;
		margin: 10% auto;
		position: relative;
		border-radius: 5px;
		background-color: white;
	}
	.dialog .content.sm{
		width: 40%;
	}
	.dialog .content.lg{
		width: 80%;
	}
	.delete{
		cursor: pointer;
		position: absolute;
		right: 1em; top: 1em;
	}
</style>
