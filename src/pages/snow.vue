<template comments>
	<div class="container snow" id="snow">
		<!-- 爱心SVG -->
		<svg class="heart" viewBox="0 0 32 32">
			<path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
		</svg>
		
		<el-button type="primary" @click="openFullScreen">指令方式</el-button>
		
	</div>
</template>

<script>
	export default {
		name: "snow",
		data(){
			return {
				
			}
		},
		mounted(){
			
		},
		methods:{
			 // openFullScreen() {
				// this.fullscreenLoading = true;
				// setTimeout(() => {
				//   this.fullscreenLoading = false;
				// }, 2000);
			 //  },
			  openFullScreen() {
				const loading = this.$loading({
				  lock: true,
				  text: 'Loading',
				  spinner: 'el-icon-loading',
				  background: 'rgba(0, 0, 0, 0.7)'
				});
				setTimeout(() => {
				  loading.close();
				}, 1000);
			  }
		}
	}
</script>

<style>
	.heart{
		fill: red;
		width: 50px; height: 50px;
		animation: change 5s ease 100ms infinite;
	}
	.snow{
		/* background-color: #42B983; */
	}
	.s-box{
		margin: 20px auto;
	}
	.circle{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 1px solid red;
		/* transform: rotate3d(1,1,1,45deg); */
		/* background-color: red; */
		animation: circle 5s ease 100ms infinite;
		backface-visibility: visible;
	}
	
	@keyframes circle{
		from{
			transform: rotate3d(1,1,1,0deg);
		}
		to{
			transform: rotate3d(1,1,1,360deg);
		}
	}
	
	@keyframes change{
		from{
			transform: scale(0.1);
		}
		to{
			transform: scale(1);
		}
	}
</style>
