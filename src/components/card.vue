<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'ly-card'
	}
</script>

<style>
	.card{
		max-width: 360px;
		-webkit-transition: all .1s ease-in;
		transition: all .1s ease-in;
		-webkit-box-shadow: 0 0 2px 12px 0 rgba(0,0,0,.1);
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	}
	.card img{max-width: 100%;}
	.card .card-bd, .card .card-fd{padding: .5em 1em;}
	.card:hover{
		-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.2);
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.2);
	}
</style>
