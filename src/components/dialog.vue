<template>
	<div class="dialog">
		<div class="content" @click.stop="preventDefault" :class="inSize">
			<span class="delete" @click="close"><i class="el-icon-close"></i></span>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ly-dialog',
		props: ['size','name'],
		data(){
			return {
				ourSize: ['sm','md','lg'],
				inSize: this.size || 'sm'
			}
		},
		methods: {
			close(event){
				this.$emit('close','close')
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
		min-height: 100px;
		padding: 1.5em 1em;
		margin: 10% auto;
		position: relative;
		border-radius: 5px;
		background-color: white;
	}
	.dialog .content.sm{
		width: 40%;
		max-width: 450px;
	}
	.dialog .content.md{
		width: 60%;
		max-width: 650px;
	}
	.dialog .content.lg{
		width: 80%;
		max-width: 850px;
	}
	.dialog .content .input-item{
		color: #333333;
		margin: 1em auto;
	}
	.delete{
		cursor: pointer;
		position: absolute;
		right: 1em; top: 1em;
	}
</style>
