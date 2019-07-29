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
		  <!-- <el-form-item label="即时配送">
			<el-switch v-model="form.delivery"></el-switch>
		  </el-form-item> -->
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
	  height: 100vh;
	  overflow: hidden;
	  display: flex;
	  font-family: 'Anton', sans-serif;
	  justify-content: center;
	  align-items: center;
	  /* background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%); */
	}

	.night {
	  position: relative;
	  width: 100%;
	  height: 100%;
	}

	.shooting_star {
	  position: absolute;
	  left: 0; top: 50%;
	  height: 2px; width: 100px;
	  background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
	  -webkit-filter: drop-shadow(0 0 6px #699bff);
			  filter: drop-shadow(0 0 6px #699bff);
	  -webkit-animation: tail 3000ms ease infinite;
			  animation: tail 3000ms ease infinite;
	}
	.shooting_star::before, .shooting_star::after {
	  content: '';
	  position: absolute;
	  top: calc(50% - 1px);
	  right: 0; height: 2px;
	  width: 30px;
	  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
	  /* -webkit-animation: shining 2000ms ease infinite;
			  animation: shining 2000ms ease infinite; */
	}
	.shooting_star::before {
	  -webkit-transform: translateX(50%) rotateZ(45deg);
			  transform: translateX(50%) rotateZ(45deg);
	}
	.shooting_star::after {
	  -webkit-transform: translateX(50%) rotateZ(-45deg);
			  transform: translateX(50%) rotateZ(-45deg);
	}
	/* .shooting_star:nth-child(1) {
	  top: calc(50% - 200px);
	  left: calc(50% - 105px);
	  -webkit-animation-delay: 9592ms;
			  animation-delay: 9592ms;
	}
	.shooting_star:nth-child(1)::before, .shooting_star:nth-child(1)::after, .shooting_star:nth-child(1)::after {
	  -webkit-animation-delay: 9592ms;
			  animation-delay: 9592ms;
	}
	.shooting_star:nth-child(2) {
	  top: calc(50% - -18px);
	  left: calc(50% - 87px);
	  -webkit-animation-delay: 5908ms;
			  animation-delay: 5908ms;
	}
	.shooting_star:nth-child(2)::before, .shooting_star:nth-child(2)::after, .shooting_star:nth-child(2)::after {
	  -webkit-animation-delay: 5908ms;
			  animation-delay: 5908ms;
	}
	.shooting_star:nth-child(3) {
	  top: calc(50% - 131px);
	  left: calc(50% - 81px);
	  -webkit-animation-delay: 1191ms;
			  animation-delay: 1191ms;
	}
	.shooting_star:nth-child(3)::before, .shooting_star:nth-child(3)::after, .shooting_star:nth-child(3)::after {
	  -webkit-animation-delay: 1191ms;
			  animation-delay: 1191ms;
	}
	.shooting_star:nth-child(4) {
	  top: calc(50% - 178px);
	  left: calc(50% - 252px);
	  -webkit-animation-delay: 9638ms;
			  animation-delay: 9638ms;
	}
	.shooting_star:nth-child(4)::before, .shooting_star:nth-child(4)::after, .shooting_star:nth-child(4)::after {
	  -webkit-animation-delay: 9638ms;
			  animation-delay: 9638ms;
	}
	.shooting_star:nth-child(5) {
	  top: calc(50% - 54px);
	  left: calc(50% - 207px);
	  -webkit-animation-delay: 2554ms;
			  animation-delay: 2554ms;
	}
	.shooting_star:nth-child(5)::before, .shooting_star:nth-child(5)::after, .shooting_star:nth-child(5)::after {
	  -webkit-animation-delay: 2554ms;
			  animation-delay: 2554ms;
	}
	.shooting_star:nth-child(6) {
	  top: calc(50% - 170px);
	  left: calc(50% - 257px);
	  -webkit-animation-delay: 2165ms;
			  animation-delay: 2165ms;
	}
	.shooting_star:nth-child(6)::before, .shooting_star:nth-child(6)::after, .shooting_star:nth-child(6)::after {
	  -webkit-animation-delay: 2165ms;
			  animation-delay: 2165ms;
	}
	.shooting_star:nth-child(7) {
	  top: calc(50% - -93px);
	  left: calc(50% - 69px);
	  -webkit-animation-delay: 9997ms;
			  animation-delay: 9997ms;
	}
	.shooting_star:nth-child(7)::before, .shooting_star:nth-child(7)::after, .shooting_star:nth-child(7)::after {
	  -webkit-animation-delay: 9997ms;
			  animation-delay: 9997ms;
	}
	.shooting_star:nth-child(8) {
	  top: calc(50% - 106px);
	  left: calc(50% - 99px);
	  -webkit-animation-delay: 422ms;
			  animation-delay: 422ms;
	}
	.shooting_star:nth-child(8)::before, .shooting_star:nth-child(8)::after, .shooting_star:nth-child(8)::after {
	  -webkit-animation-delay: 422ms;
			  animation-delay: 422ms;
	}
	.shooting_star:nth-child(9) {
	  top: calc(50% - -17px);
	  left: calc(50% - 35px);
	  -webkit-animation-delay: 2714ms;
			  animation-delay: 2714ms;
	}
	.shooting_star:nth-child(9)::before, .shooting_star:nth-child(9)::after, .shooting_star:nth-child(9)::after {
	  -webkit-animation-delay: 2714ms;
			  animation-delay: 2714ms;
	}
	.shooting_star:nth-child(10) {
	  top: calc(50% - -114px);
	  left: calc(50% - 232px);
	  -webkit-animation-delay: 6136ms;
			  animation-delay: 6136ms;
	}
	.shooting_star:nth-child(10)::before, .shooting_star:nth-child(10)::after, .shooting_star:nth-child(10)::after {
	  -webkit-animation-delay: 6136ms;
			  animation-delay: 6136ms;
	}
	.shooting_star:nth-child(11) {
	  top: calc(50% - 175px);
	  left: calc(50% - 73px);
	  -webkit-animation-delay: 9617ms;
			  animation-delay: 9617ms;
	}
	.shooting_star:nth-child(11)::before, .shooting_star:nth-child(11)::after, .shooting_star:nth-child(11)::after {
	  -webkit-animation-delay: 9617ms;
			  animation-delay: 9617ms;
	}
	.shooting_star:nth-child(12) {
	  top: calc(50% - -137px);
	  left: calc(50% - 300px);
	  -webkit-animation-delay: 8175ms;
			  animation-delay: 8175ms;
	}
	.shooting_star:nth-child(12)::before, .shooting_star:nth-child(12)::after, .shooting_star:nth-child(12)::after {
	  -webkit-animation-delay: 8175ms;
			  animation-delay: 8175ms;
	}
	.shooting_star:nth-child(13) {
	  top: calc(50% - 64px);
	  left: calc(50% - 125px);
	  -webkit-animation-delay: 2715ms;
			  animation-delay: 2715ms;
	}
	.shooting_star:nth-child(13)::before, .shooting_star:nth-child(13)::after, .shooting_star:nth-child(13)::after {
	  -webkit-animation-delay: 2715ms;
			  animation-delay: 2715ms;
	}
	.shooting_star:nth-child(14) {
	  top: calc(50% - 144px);
	  left: calc(50% - 266px);
	  -webkit-animation-delay: 9024ms;
			  animation-delay: 9024ms;
	}
	.shooting_star:nth-child(14)::before, .shooting_star:nth-child(14)::after, .shooting_star:nth-child(14)::after {
	  -webkit-animation-delay: 9024ms;
			  animation-delay: 9024ms;
	}
	.shooting_star:nth-child(15) {
	  top: calc(50% - -70px);
	  left: calc(50% - 111px);
	  -webkit-animation-delay: 4994ms;
			  animation-delay: 4994ms;
	}
	.shooting_star:nth-child(15)::before, .shooting_star:nth-child(15)::after, .shooting_star:nth-child(15)::after {
	  -webkit-animation-delay: 4994ms;
			  animation-delay: 4994ms;
	}
	.shooting_star:nth-child(16) {
	  top: calc(50% - -147px);
	  left: calc(50% - 196px);
	  -webkit-animation-delay: 6546ms;
			  animation-delay: 6546ms;
	}
	.shooting_star:nth-child(16)::before, .shooting_star:nth-child(16)::after, .shooting_star:nth-child(16)::after {
	  -webkit-animation-delay: 6546ms;
			  animation-delay: 6546ms;
	}
	.shooting_star:nth-child(17) {
	  top: calc(50% - -49px);
	  left: calc(50% - 240px);
	  -webkit-animation-delay: 895ms;
			  animation-delay: 895ms;
	}
	.shooting_star:nth-child(17)::before, .shooting_star:nth-child(17)::after, .shooting_star:nth-child(17)::after {
	  -webkit-animation-delay: 895ms;
			  animation-delay: 895ms;
	}
	.shooting_star:nth-child(18) {
	  top: calc(50% - 171px);
	  left: calc(50% - 3px);
	  -webkit-animation-delay: 4390ms;
			  animation-delay: 4390ms;
	}
	.shooting_star:nth-child(18)::before, 
	.shooting_star:nth-child(18)::after, 
	.shooting_star:nth-child(18)::after {
	  -webkit-animation-delay: 4390ms;
			  animation-delay: 4390ms;
	}
	.shooting_star:nth-child(19) {
	  top: calc(50% - -57px);
	  left: calc(50% - 58px);
	  -webkit-animation-delay: 5414ms;
			  animation-delay: 5414ms;
	}
	.shooting_star:nth-child(19)::before, 
	.shooting_star:nth-child(19)::after, 
	.shooting_star:nth-child(19)::after {
	  -webkit-animation-delay: 5414ms;
			  animation-delay: 5414ms;
	}
	.shooting_star:nth-child(20) {
	  top: calc(50% - 109px);
	  left: calc(50% - 174px);
	  -webkit-animation-delay: 9384ms;
			  animation-delay: 9384ms;
	}
	.shooting_star:nth-child(20)::before, 
	.shooting_star:nth-child(20)::after, 
	.shooting_star:nth-child(20)::after {
	  -webkit-animation-delay: 9384ms;
			  animation-delay: 9384ms;
	} */

	@-webkit-keyframes tail {
	  0% {left: 0;}
	  30% {left: 30%;}
	  100% {left: 100%;}
	}

	@keyframes tail {
	  0% {left: 0;}
	  30% {left: 30%;}
	  100% {left: 100%;}
	}
	@-webkit-keyframes shining {
	  0% {width: 0;}
	  30% {width: 30px;}
	  100% {width: 0;}
	}
	@keyframes shining {
	  0% {width: 0;}
	  30% {width: 30px;}
	  100% {width: 0;}
	}
	@-webkit-keyframes shooting {
	  0% {
		-webkit-transform: translateX(0);
				transform: translateX(0);
	  }
	  100% {
		-webkit-transform: translateX(300px);
				transform: translateX(300px);
	  }
	}
	@keyframes shooting {
	  0% {
		-webkit-transform: translateX(0);
				transform: translateX(0);
	  }
	  100% {
		-webkit-transform: translateX(300px);
				transform: translateX(300px);
	  }
	}
	@-webkit-keyframes sky {
	  0% {
		-webkit-transform: rotate(45deg);
				transform: rotate(45deg);
	  }
	  100% {
		-webkit-transform: rotate(405deg);
				transform: rotate(405deg);
	  }
	}
	@keyframes sky {
	  0% {
		-webkit-transform: rotate(45deg);
				transform: rotate(45deg);
	  }
	  100% {
		-webkit-transform: rotate(405deg);
				transform: rotate(405deg);
	  }
	}
</style>
