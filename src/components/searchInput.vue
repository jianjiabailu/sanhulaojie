<template>
	<div class="search-input">
		<input type="text" v-model="searchValue" @keyup.enter="searchBD" placeholder="百度搜索">
		<button @click="searchBD">搜索</button>
	</div>
</template>

<script>
	export default {
		name: "ly-search",
		data(){
			return {
				searchValue: '',
			}
		},
		methods: {
			// 百度搜索
			searchBD(){
				window.open("https://www.baidu.com/s?wd="+this.$data.searchValue);
				this.$data.searchValue = '';
			}
		}
	}
</script>

<style scoped>
	.search-input{
		position: relative;
		height: 2rem;
		line-height: 2rem;
		color: white;
		display: flex;
		border-radius: 3px;
		box-sizing: border-box;
		border: 1px solid #02aeff;
	}
	.search-input input{
		border: none;
		outline: none;
		display: inline-block;
		color: inherit;
		width: 100%;
		min-width: 5rem;
		font-size: 1rem;
		padding: 0 1rem;
		background-color: transparent;
	}
	.search-input button{
		color: white;
		border: none;
		outline: none;
		padding: 0 1rem;
		cursor: pointer;
		display: inline-block;
		white-space: nowrap;
		background-color: #02AEFF;
	}
	.search-input:hover{
		animation: shine-animation 1s ease-in-out 100ms infinite alternate;
	}
	
	@-webkit-keyframes shine-animation {
	  from {
	    -webkit-box-shadow: 0 0 5px #02aeff;
			box-shadow: 0 0 5px #02aeff;
	  }
	  to {
	    -webkit-box-shadow: 0 0 20px #02aeff;
	    	box-shadow: 0 0 20px #02aeff;
	  }
	}
	@keyframes shine-animation {
	  from {
	    -webkit-box-shadow: 0 0 5px #02aeff;
	  			box-shadow: 0 0 5px #02aeff;
	  }
	  to {
	    -webkit-box-shadow: 0 0 20px #02aeff;
	    	box-shadow: 0 0 20px #02aeff;
	  }
	}
	
</style>
