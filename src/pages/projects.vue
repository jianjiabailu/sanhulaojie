<template>
	<div class="projects-page">
		<el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="PC">PC端</el-menu-item>
		  <el-menu-item index="APP">移动端</el-menu-item>
		  <el-menu-item index="WXApp">小程序</el-menu-item>
		</el-menu>
		<div class="page-bd">
			<el-row :gutter="10">
			  <el-col :sm="12" :lg="4" v-for="item in projectList" :key="item.id" >
				  <ly-card>
				  	<div class="card-hd"><img slot='card-hd' :src="item.img_path" class="image"></div>
				  	<div class="card-bd">
				  		<h3>{{item.name}}</h3>
				  		<div>{{item.intro}}</div>
				  	</div>
				  	<div class="card-fd flex-row between a-center">
				  		<time>{{ item.start_date + '-' + item.end_date}}</time>
				  		<a :href="item.link">前往项目</a>
				  	</div>
				  </ly-card>
			  </el-col>
			</el-row>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'projects',
		description: '我开发的项目',
		data(){
			return {
				projects: {
					pc: [],
					mobile: [],
					applet: []
				},
				selectType: '',
				projectList: [
					{
						id: 0,
						name:'团队模板',
						category: '1',
						tag:'模板',
						thumb:'http://sanhulaojie.cn/img/20190604104948723.3c958f36.jpg',
						link:'#/teamDetail',
						intro:'测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试',
						createDate:'2019-07-26'
					},
					{
						id: 1,
						name:'调查问卷',
						category: '1',
						tag:'模板',
						thumb:'http://sanhulaojie.cn/img/20190604104948723.3c958f36.jpg',
						link:'#/survey',
						intro:'测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试',
						createDate:'2019-07-26'
					}
				]
			}
		},
		mounted(){
			this.getProjects()
		},
		methods:{
			// 选择项目类型
			handleSelect: function(e) {
				console.log(e)
			},
			// 跳转到添加页面
			create: function(){
				this.$router.push('/create')
			},
			// 1.获取我的项目列表
			getProjects: function(){
				if(localStorage.getItem('userid')){
					let userid = localStorage.getItem('userid');
					this.$http.get(this.$store.state.request_url+'/user/project?userid='+userid).then(res => {
						console.log('getProjects',res)
						if(res.status == 200){
							this.$data.projectList = res.body.data
						}
					})
				}
			}
		}
		
	}
</script>

<style scoped>
	.el-page-header{padding: 1em;}
	
	.card:not(:first-child){margin: 20px auto;}
</style>


