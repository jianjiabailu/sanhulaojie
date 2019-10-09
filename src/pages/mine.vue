<template>
	<div class="mine-page">
		<el-row :gutter="20">
			
			<el-col :xs="24" :sm="12">
				<el-form :label-position="labelPosition" :model="goodsInfo" label-width="100px">
					<h4>添加商品</h4>
					<el-divider></el-divider>
					<el-form-item label="商品编号">
						<el-col :span="12">
							<el-input v-model="goodsInfo.goodNo"></el-input>
						</el-col>
						<el-col :span="12">
							<el-input v-model="goodsInfo.goodName"></el-input>
						</el-col>
					</el-form-item>
					
					<el-form-item label="正常价格">
						<el-input type="number" v-model="goodsInfo.normalPrice"></el-input>
					</el-form-item>
					<el-form-item label="实际价格">
						<el-input type="number" v-model="goodsInfo.realPrice"></el-input>
					</el-form-item>
					<el-form-item label="商品描述">
						<el-input v-model="goodsInfo.goodsDesc"></el-input>
					</el-form-item>
					<el-form-item label="商品库存">
						<el-input type="number" v-model="goodsInfo.goodsStock"></el-input>
					</el-form-item>
					<el-form-item label="商品图片">
						<el-upload
						   class="avatar-uploader"
						   :action= "$store.state.request_url+'/user/uploadImage'"
						   :show-file-list="false"
						   :on-success="uploadSuccess"
						   :before-upload="uploadBefore">
						   <img v-if="information.imageUrl" :src="information.img_path" class="avatar">
						   <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</el-form-item>
					<el-form-item label="是否上架">
						<el-switch v-model="goodsInfo.isSale"></el-switch>
					</el-form-item>
					<el-form-item label="是否推荐">
						<el-switch v-model="goodsInfo.isRecom"></el-switch>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="createGood">保存</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</el-col>
			
			<el-col :xs="24" :sm="12">
				<el-form :label-position="labelPosition" :model="information" label-width="100px">
					<h4>添加项目</h4>
					<el-divider></el-divider>
					<el-form-item label="项目名称">
						<el-input v-model="information.name"></el-input>
					</el-form-item>
					<el-form-item label="项目类型">
						<el-radio-group v-model="information.type">
							<el-radio label="小程序"></el-radio>
							<el-radio label="web网站"></el-radio>
							<el-radio label="app"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="活动时间">
						<div class="flex-row">
							<el-date-picker class="flex" type="date" value-format="yyyy-MM-dd" placeholder="开始日期" v-model="information.start_date"></el-date-picker>
							<span class="line t-center" style="margin: 0 1rem;" :span="1">-</span>
							<el-date-picker class="flex" type="date" value-format="yyyy-MM-dd" placeholder="结束日期" v-model="information.ending_date"></el-date-picker>
						</div>
					</el-form-item>
					<el-form-item label="项目地址">
						<el-input v-model="information.address"></el-input>
					</el-form-item>
					<el-form-item label="项目介绍">
						<el-input type="textarea" v-model="information.intro"></el-input>
					</el-form-item>
					 
					<el-form-item label="项目缩略图">
						 <el-upload
						   class="avatar-uploader"
						   :action= "$store.state.request_url+'/user/uploadImage'"
						   :show-file-list="false"
						   :on-success="uploadSuccess"
						   :before-upload="uploadBefore">
						   <img v-if="information.imageUrl" :src="information.imageUrl" class="avatar">
						   <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						 </el-upload>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="save">保存</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</el-col>
			
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'mine',
		data(){
			return {
				// 表单子项标题位置 有效值：left、right、top
				labelPosition: 'left',
				information: {
					userid: 'vip0001',
					type: '',
					start_date: '',
					ending_date: '',
					imageUrl: '',
					address: '',
					intro: ''
				},
				goodsInfo: {
					good_name: '',
					good_price: '',
					good_type: '',
					good_inventory: '',
					img_path: ''
				},
				rules: {
				  pass: [
					{ validator: 'validatePass', trigger: 'blur' }
				  ],
				  checkPass: [
					{ validator: 'validatePass2', trigger: 'blur' }
				  ],
				  age: [
					{ validator: 'checkAge', trigger: 'blur' }
				  ]
				}
			}
		},
		methods:{
			save(){
				// 添加项目
				this.$http.post(this.$store.state.request_url + '/user/project',this.$data.information).then(res => {
					console.log('getFavorite',res)
					if(res.body.returncode == 100){
						this.$data.tableData = res.body.data
					}
				})
			},
			createGood: function(){
				// 添加项目
				this.$http.post(this.$store.state.request_url + '/goods/createGoods',this.$data.goodsInfo).then(res => {
					console.log('getFavorite',res)
					if(res.body.returncode == 100){
						this.$data.tableData = res.body.data
					}
				})
			},
			// 上传成功
			uploadSuccess(res, file) {
				console.log(res, file)
				this.$data.information.imageUrl = URL.createObjectURL(file.raw);
				console.log(this.$data.information.imageUrl)
			},
			// 上传校验
			uploadBefore(file) {
				const isJPG = file.type === 'image/png';
				const isLt2M = file.size / 1024 / 1024 < 2;
				if (!isJPG) {
				  this.$message.error('上传头像图片只能是 png 格式!');
				}
				if (!isLt2M) {
				  this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}
		}
	}
</script>

<style >
	.form{
		max-width: 650px;
		padding: 1em;
	}
	.resume{
		padding-top: 2em;
	}
	.resume .tit-1{
		color: white;
		padding: 1em 2em;
		background-color: gray;
	}
	
	.avatar-uploader .el-upload {
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	    border: 1px dashed #d9d9d9;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	  }
	  .avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	  }
</style>
