<template>
	<div class="gallery">
		<div class="gallery-hd flex-row around">
			<input class="input" type="text" @blur="search" placeholder="随便输点什么吧">
			<label class="btn" for="upload"><i class="el-icon-upload"></i>上传</label>
			<button class="btn" @click="getImages"><i class="el-icon-picture"></i>获取图片</button>
			<input id="upload" hidden="hidden" type="file" @change="uploadImg" multiple="multiple">
		</div>
		<div class="gallery-bd">
			<el-row :gutter="10">
			  <el-col :sm="12" :md="6" :lg="4" v-for="item in imgs" :key="item">
				  <div class="card">
					<i class="delete el-icon-delete-solid" @click="deleteImg(item)"></i>
					<div class="card-hd"><img :src="item" alt=""></div>
					<div class="card-bd ellipsis">{{item | imgName}}</div>
				  </div>
			  </el-col>
			</el-row>
			
			<ly-card v-if="searchBox.show">
				<div class="card-hd">
					<img :src="searchBox.img" alt="">
				</div>
				<div class="card-bd">
					<h4>{{searchBox.title}}</h4>
					<p v-for="item in searchBox.msg" :key="item">{{item}}</p>
				</div>
				<!-- 听说一个女的在见到男的第一次时就已经决定了两个人能不能走到一起，你是否在第一次见面就判了我死刑呢？ -->
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
			this.getImages()
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
				for(let file of files){
					formData.append('files', file);
				}
				// 请求图片 http://localhost:8888
				this.$http.post('http://api.sanhulaojie.cn:8888/admin/upload-multer',formData).then(res => {
					// get body data
					console.log(res)
					this.getImages()
					// this.$data.imgs.push(res.body.data.fileurl)
				}, error => {
					console.log(error)
					// error callback
				});
			},
			getImages(){
				// 测试请求
				this.$http.post('http://api.sanhulaojie.cn:8888/admin/user',{},{
					headers: {
						'method': 'getImages',
						'token': localStorage.getItem('token')
					}
				}).then(res => {
					// get body data
					console.log(res)
					this.$data.imgs = res.body.data
				}, error => {
					// error callback
				});
			},
			deleteImg(item){
				console.log(item)
				// 测试请求
				this.$http.post('http://api.sanhulaojie.cn:8888/admin/user',{
					imgPath: item
				},{
					headers: {
						'method': 'delImages',
						'token': localStorage.getItem('token')
					}
				}).then(res => {
					// get body data
					console.log(res)
					this.getImages()
				}, error => {
					// error callback
				});
			}
		}
	}
</script>

<style scoped>
	.gallery{
		box-sizing: border-box;
	}
	.gallery-hd{
		width: 100%; height: 50px;
		box-sizing: border-box;
		padding: .5em 1em;
		background-color: whitesmoke;
	}
	.gallery-hd input[type='text']{
		width: 120px; height: 30px;
		padding: 0 5px;
		border-radius: 4px;
		border: 1px solid #02AEFF;
	}
	.gallery-hd .btn{
		color: white;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		display: inline-block;
		padding: 0 1em;
		border-radius: 5px;
		background-color: #02AEFF;
	}
	.gallery-hd .btn:active{
		position: relative;
		top: 1px;
	}
	
	.gallery-bd{
		padding: 1rem;
	}
	.card{
		height: 100px;
		text-align: center;
		margin-bottom: 1em;
		position: relative;
	}
	.card .delete{
		cursor: pointer;
		position: absolute;
		right: .5rem; top: .5rem;
	}
	.card-hd img{
		max-height: 60px;
	}
	
</style>
