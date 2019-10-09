<template>
	<table class="ly-table">
		<slot></slot>
	</table>
</template>

<script>
	export default {
		name: "ly-table"
	}
</script>

<style>
	.ly-table{
		border-top: 1px solid #D9D9D9;
		border-bottom: 1px solid #D9D9D9;
	}
	.ly-table tr td{
		padding: .5rem;
	}
	.ly-table tr:not(:last-child){
		border-bottom: 1px solid #D9D9D9;
	}
	
</style>
