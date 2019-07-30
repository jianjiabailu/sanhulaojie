<template>
	<div class="lovePage">
		<el-form ref="form" :model="form" label-width="60px">
		  <el-form-item label="名称">
			<el-input v-model="form.title"></el-input>
		  </el-form-item>
		  <el-form-item label="缩略图">
			<el-upload
			  class="upload-demo"
			  action="http://localhost:8888/admin/upload-single"
			  :on-preview="handlePreview"
			  :on-remove="handleRemove"
			  :before-remove="beforeRemove"
			  multiple
			  :limit="9"
			  :on-exceed="handleExceed"
			  :file-list="fileList">
			  <el-button size="small" type="primary">点击上传</el-button>
			  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
		  </el-form-item>
		  <el-form-item label="地址">
			<el-input v-model="form.link"></el-input>
		  </el-form-item>
		  <el-form-item label="分类">
			<el-radio-group v-model="form.tag">
			  <el-radio label="项目"></el-radio>
			  <el-radio label="模板"></el-radio>
			  <el-radio label="插件"></el-radio>
			</el-radio-group>
		  </el-form-item>
		  <el-form-item label="简介">
			<el-input type="textarea" v-model="form.intro"></el-input>
		  </el-form-item>
		  <el-form-item>
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<el-button>取消</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'create',
		data(){
			return {
				form: {
				  title: '',
				  thume: '',
				  intro: '',
				  link: '',
				  tag: false
				},
				fileList: [],
			}
		},
		mounted(){
			
		},
		watch: {
			
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleExceed(files, fileList) {
				console.log(files)
				this.$message.warning(`当前限制选择 9 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
			beforeRemove(file, fileList) {
				return this.$confirm(`确定移除 ${ file.name }？`);
			}
		}
	}
</script>

<style>
	.lovePage {
	  height: 100%;
	  overflow: hidden;
	  display: flex;
	  font-family: 'Anton', sans-serif;
	  justify-content: center;
	  align-items: center;
	}
	
</style>
