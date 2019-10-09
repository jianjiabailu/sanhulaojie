<template>
	<div class="page-gallery">
		<el-row :gutter="20">
			<el-col :xs="24" :sm="8">
				<!-- 查询框 -->
				<el-input placeholder="请输入内容" v-model="searchVal">
					<el-button slot="append" icon="el-icon-search" @click="search"></el-button>
				</el-input>
			</el-col>
			<el-col :xs="24" :sm="8">
				<!-- 功能按钮 -->
				<el-button-group style="width: 100%;">
					<el-button icon="el-icon-picture" @click="getImages">刷新</el-button>
					<el-button icon="el-icon-picture" @click="clickCount++">{{listModel}}</el-button>
				</el-button-group>
			</el-col>
			<el-col :xs="24" :sm="8">
				<!-- 图片上传 -->
				<el-upload
				  :action="$store.state.request_url + '/user/uploadImage'"
				  :on-preview="handlePreview"
				  :on-remove="handleRemove"
				  :before-remove="beforeRemove"
				  multiple
				  :limit="3"
				  :on-exceed="handleExceed"
				  :file-list="uploadList">
				  <el-button type="primary">点击上传</el-button>
				</el-upload>
			</el-col>
		</el-row>
		<!-- <div class="gallery-hd flex-row around">
			
		</div> -->
		<div class="gallery-bd">
			<!-- 列表1 -->
			<el-row :gutter="10" v-if="clickCount%2 == 1">
			  <el-col :sm="6" :md="4" :lg="2" v-for="item in imageList" :key="item.filePath">
				  <div class="card">
					<i class="delete el-icon-delete-solid" @click="deleteImg(item)"></i>
					<div class="card-hd"><img :src="'http://'+item.filePath" alt=""></div>
					<div class="card-bd ellipsis">{{item.fileName}}</div>
				  </div>
			  </el-col>
			</el-row>
			<!-- 列表2 -->
			<el-row :gutter="10" v-if="clickCount%2 == 0">
			  <el-col :sm="24" :md="24" :lg="24" v-for="item in imageList" :key="item.filePath">
				  <i class="el-icon-picture" @click="deleteImg(item)"></i>
				  {{item.fileName}}
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
			</ly-card>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'gallery',
		data(){
			return {
				clickCount: 0,
				listModel: '图形列表',
				imageList: [],
				searchVal: '',
				searchBox: {
					show: false,
					img: 'http://sanhulaojie.cn/img/20190604104948723.3c958f36.jpg',
					title: '王迎阳',
					msg: ['不美小女子一枚','一点不可爱妹子']
				},
				uploadList: []
			}
		},
		mounted(){
			this.getImages()
		},
		watch: {
			clickCount: function(newVal, oldVal){
				let models = ['图形列表', '文件列表'];
				this.$data.listModel = models[newVal%2]
			}
		},
		methods:{
			handleRemove(file, fileList) {
			        console.log(file, fileList);
			      },
			      handlePreview(file) {
			        console.log(file);
			      },
			      handleExceed(files, fileList) {
			        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			      },
			      beforeRemove(file, fileList) {
			        return this.$confirm(`确定移除 ${ file.name }？`);
			      },
			// 搜索
			search(e){
				if ((e.target.value).indexOf('迎阳') >= 0) {
					this.$data.searchBox.show = true;
				}else{
					this.$data.searchBox.show = false;
				}
			},
			// 选择图片
			selectImg: function(e){
				this.$data.uploadList = e.target.files;
				this.uploadImg()
			},
			// 上传图片
			uploadImg: function(){
				var len = this.uploadList.length;
				var file = this.uploadList[len-1];
				var formData = new FormData();
				formData.append('file', file);
				// 上传请求
				this.$http.post('http://api.sanhulaojie.cn:8080/user/upload-multer',formData).then(res => {
					console.log('uploadImages',res)
					if (res.status == 200) {
						// 将已上传移出数组
						this.uploadList.pop()
						// 判断是否已上传完
						if (this.uploadList.length > 0) {
							// 回调继续上传
							this.uploadImg()
						}
					}
				})
			},
			
			// 获取图片
			getImages: function(){
				this.$http.get('http://api.sanhulaojie.cn:8080/user/getImages').then(res => {
					console.log('getImages',res)
					if (res.status == 200) {
						this.$data.imageList = res.body.data
					}
				})
			},
			
			// 删除图片
			deleteImg: function(item){
				let params = {imgPath: item.filePath}
				// 测试请求
				this.$http.post('http://api.sanhulaojie.cn:8080/user/delImages',params).then(res => {
					console.log('deleteImg',res)
					if (res.status == 200) {
						this.getImages()
					}
				});
			},
			// 切换列表
			changeModel: function(){
				this.$data.listModel = '2'
			}
		}
	}
</script>

<style scoped>
	.page-gallery{
		box-sizing: border-box;
	}
	
	.gallery-bd{
		padding: 1rem;
	}
	.card{
		height: 100px;
		font-size: 12px;
		text-align: center;
		margin-bottom: 1em;
		position: relative;
	}
	.card .delete{
		cursor: pointer;
		position: absolute;
		right: 5px; top: 5px;
		margin: 0;
	}
	.card-hd img{
		max-height: 60px;
	}
	
</style>
