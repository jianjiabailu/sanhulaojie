<template>
	<div class="gallery">
		<div class="gallery-hd">
			<input class="input" type="text" @blur="search" placeholder="随便输点什么吧">
			<label class="btn" for="upload">上传</label>
			<button class="btn" @click="ceshi">请求测试</button>
			<input id="upload" hidden="hidden" type="file" @change="uploadImg">
		</div>
		<div class="gallery-bd">
			<img v-for="item in imgs" :key="item" :src="item" alt="">
			
			<ly-card v-if="searchBox.show">
				<div class="card-hd">
					<img :src="searchBox.img" alt="">
				</div>
				<div class="card-bd">
					<h4>{{searchBox.title}}</h4>
					<p v-for="item in searchBox.msg" :key="item">{{item}}</p>
				</div>
			</ly-card>
		</div>
	</div>
</template>

<script>
	export default {
		name:'gallery',
		data(){
			return {
				imgs: [],
				searchBox: {
					show: false,
					img: 'http://sanhulaojie.cn/img/20190604104948723.3c958f36.jpg',
					title: '王迎阳',
					msg: ['美女一枚','可爱妹子']
				}
				
			}
		},
		mounted(){
			
		},
		methods:{
			// 搜索
			search(e){
				if ((e.target.value).indexOf('迎阳') >= 0) {
					this.$data.searchBox.show = true;
				}else{
					this.$data.searchBox.show = false;
				}
			},
			// 上传图片
			uploadImg(e){
				var files = e.target.files;
				var formData = new FormData();
				formData.append('file', files[0]);
				// 请求图片
				this.$http.post('http://localhost:8888/admin/upload-single',formData,{
					headers: { 
						'method': 'uploadFiles',
						'Content-Type': 'multipart/form-data' ,
					}
				}).then(res => {
					// get body data
					console.log(res)
				}, error => {
					console.log(error)
					// error callback
				});
			},
			ceshi(){
				// 测试请求
				var params = {
					a: 'asd',
					b: 'asdaqwjek'
				}
				this.$http.post('http://localhost:8888/admin/user',params,{
					headers: {
						'method': 'getImages',
						'token': localStorage.getItem('token')
					}
				}).then(res => {
					// get body data
					console.log(res)
					this.$data.imgs = res.body.data
					console.log(this.$data)
				}, error => {
					// error callback
				});
			}
		}
	}
</script>

<style scoped>
	.gallery-hd{
		display: flex;
		justify-content: space-around;
		padding: 1em;
		background-color: whitesmoke;
	}
	.gallery-hd input[type='text']{
		width: 120px;
		padding: 0 5px;
		border-radius: 4px;
		border: 1px solid #02AEFF;
	}
	.gallery-hd .btn{
		color: white;
		font-size: 14px;
		display: inline-block;
		padding: .3em 1em;
		border-radius: 5px;
		background-color: #02AEFF;
	}
	.gallery-hd .btn:active{
		position: relative;
		top: 1px;
	}
	
</style>
