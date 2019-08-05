<template>
	<div class="mine-page">
		<el-row :gutter="20">
		  <el-col :xs="24" :sm="12">
			<ly-card class="form">
				<el-form ref="information" :model="information" label-width="100px">
						<h4>个人信息</h4>
						<el-divider></el-divider>
						<el-form-item label="姓名">
							<el-input v-model="information.name"></el-input>
						</el-form-item>
						<el-form-item label="性别">
							<el-radio-group v-model="information.sex">
								<el-radio label="男"></el-radio>
								<el-radio label="女"></el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="出生日期">
							<el-date-picker type="date" placeholder="选择日期" v-model="information.birthday" style="width: 100%;"></el-date-picker>
						</el-form-item>
						<el-form-item label="籍贯">
							<el-input v-model="information.nativePlace"></el-input>
						</el-form-item>
						<el-form-item label="联系方式">
							<el-input v-model="information.phone"></el-input>
						</el-form-item>
						<el-form-item label="电子邮箱">
							<el-input v-model="information.email"></el-input>
						</el-form-item>
						<el-form-item label="兴趣爱好">
							<el-checkbox-group v-model="information.interests">
							  <el-checkbox label="听歌" name="type"></el-checkbox>
							  <el-checkbox label="看电影" name="type"></el-checkbox>
							  <el-checkbox label="跑步" name="type"></el-checkbox>
							  <el-checkbox label="打篮球" name="type"></el-checkbox>
							  <el-checkbox label="羽毛球" name="type"></el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						 <!-- <el-form-item label="即时配送">
							<el-switch v-model="form.delivery"></el-switch>
						  </el-form-item> -->
						<el-form-item label="现住地址">
							<el-input type="textarea" v-model="information.address"></el-input>
						</el-form-item>
						
						<h4>教育经历</h4>
						<el-divider></el-divider>
						
						<el-form-item label="最高学历">
							<el-select v-model="information.education" placeholder="请选择性别">
							  <el-option label="高中" value="1"></el-option>
							  <el-option label="大专" value="2"></el-option>
							  <el-option label="本科" value="3"></el-option>
							  <el-option label="硕士" value="4"></el-option>
							  <el-option label="博士" value="5"></el-option>
							</el-select>
						 </el-form-item>
						<el-form-item label="学校名称">
							<el-input v-model="information.school"></el-input>
						</el-form-item>
						<el-form-item label="就读院系">
							<el-input v-model="information.faculty"></el-input>
						</el-form-item>
						<el-form-item label="毕业时间">
							<el-date-picker type="date" placeholder="选择日期" v-model="information.graduation" style="width: 100%;"></el-date-picker>
						</el-form-item>
						 
						<el-form-item>
							<el-button type="primary" @click="save">保存</el-button>
							<el-button>取消</el-button>
						</el-form-item>
					</el-form>
			</ly-card>
		  </el-col>
		  <el-col :xs="24" :sm="12">
			<ly-card class="resume">
				<div class="tit-1">
					<p><span>姓名：{{information.name}}</span></p>
					<p class="flex-row between">
						<span>籍贯：{{information.nativePlace}}</span>
						<span>工作经验：{{information.experience}}</span>
					</p>
					<p class="flex-row between">
						<span>出生年份：{{information.birthday}}</span>
						<span>联系电话：{{information.phone}}</span>
					</p>
					<p class="flex-row between">
						<span>电子邮箱：{{information.email}}</span>
						<span>现居地址：{{information.address}}</span>
					</p>
				</div>
				<p><el-divider content-position="left">教育经历</el-divider></p>
				<div>
					<p class="flex-row between">
						<span>学校：{{information.email}}</span>
						<span>现居地址：{{information.address}}</span>
					</p>
				</div>
				
			</ly-card>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'mine',
		data(){
			return {
				information: {
					name:'',   			// 姓名
					sex:'',				// 性别
					nativePlace:'',		// 籍贯
					phone:'',			// 联系电话
					email:'',			// 电子邮箱
					experience:'',		// 工作经验
					address:'',			// 现住地址
					birthday:'',		// 出生日期
					desc:'',			// 
					education:'',		// 教育程度（最高学历）
					interests: [],		// 兴趣爱好
					school:'',			// 毕业学校
					faculty:'',			// 专业院系
					graduation:''		// 毕业时间
				}
			}
		},
		methods:{
			save(){
				
			}
		}
	}
</script>

<style>
	.form{
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
</style>
