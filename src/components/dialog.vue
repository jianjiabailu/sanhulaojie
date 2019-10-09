<template>
	<div class="dialog">
		<div class="content" @click.stop="preventDefault" :class="inSize">
			<h4 class="dialog-tit">{{dialogTitle}}</h4>
			<span class="dialog-del" @click="close"><i class="el-icon-close"></i></span>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ly-dialog',
		props: ['size','name','title'],
		data(){
			return {
				dialogTitle: this.title,
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
		z-index: 999;
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0; top: 0;
		background-color: rgba(0,0,0,.2);
	}
	.dialog .content{
		overflow: hidden;
		min-height: 100px;
		padding: 2rem 1rem 1rem;
		margin: 10rem auto 0;
		position: relative;
		border-radius: 5px;
		background-color: white;
	}
	.dialog .content.sm{
		width: 40%;
		min-width: 300px;
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
	.dialog-del{
		cursor: pointer;
		position: absolute;
		right: 1em; top: .5em;
	}
	.dialog-tit{
		position: absolute;
		left: 2em; top: 1em;
		margin: 0;
	}
</style>
