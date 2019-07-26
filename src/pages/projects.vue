<template>
	<div class="projects-page">
		<el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1">我的项目</el-menu-item>
		  <el-menu-item index="2">我的模板</el-menu-item>
		  <el-menu-item index="3">我的插件</el-menu-item>
		</el-menu>
		<ly-card v-for="item in projectList" :key="item.id" >
			<div class="card-hd"><img slot='card-hd' :src="item.thumb" class="image"></div>
			<div class="card-bd">
				<h3>{{item.name}}</h3>
				<div>{{item.intro}}</div>
				<p class="flex-row between a-center">
				  <time>{{ item.createDate }}</time>
				  <a :href="item.link">前往项目</a>
				</p>
			</div>
		</ly-card>
	</div>
</template>

<script>
	export default {
		name: 'projects',
		data(){
			return {
				projectList: [
					{
						id: 0,
						name:'测试项目',
						thumb:'http://sanhulaojie.cn/img/20190604104948723.3c958f36.jpg',
						link:'',
						intro:'测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试',
						createDate:'2019-07-26'
					}
				]
			}
		},
		mounted(){
			// 1.获取我的项目列表
		},
		methods:{
			handleSelect() {
				console.log('go back');
			}
		}
		
	}
</script>

<style>
	.el-page-header{
		padding: 1em;
	}
</style>
