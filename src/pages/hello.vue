<template>
  <div class="hello" v-canvas-bg="background">
	<!-- 会员菜单栏 -->
	<div class="box-hd flex-row-r a-center" v-if="userid!=''">
		<router-link to="/home" class="flex-col j-center">
			<el-avatar size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
		</router-link>
		<el-button size="mini" icon="el-icon-switch-button" @click="logout" circle></el-button>
		<el-switch v-model="is_private" active-value="1" inactive-value="0"></el-switch>
	</div>
	<div class="box-bd">
		<!-- 荡秋千的小女孩 -->
		<swing-girl size="150"></swing-girl>
		<div class="search-box">
			<!-- 搜索框 -->
			<ly-search class="input-item"></ly-search>
			<!-- 收藏链接 -->
			<div class="quick-link">
				<el-row :gutter="10">
				  <el-col :span="6" v-for="item in links" :key="item.id">
					  <a class="link" :class="item.is_private == '0'?'':'private'" :href="item.link" target="_blank"><i class="el-icon-star-on"></i>{{item.title}}</a>
				  </el-col>
				  <el-col :span="6" v-if="!editBox.view">
					  <button class="link" @click="showEditBox"><i class="el-icon-edit"></i>编辑</button>
				  </el-col>
				</el-row>
			</div>
		</div>
		<!-- 自定义栏 -->
		<div class="diy-box flex-col">
			<!-- 登录按钮 -->
			<div class="login-btn" @click="showLoginBox"><img src="../assets/img/Earth.png" alt=""></div>
		</div>
	</div>
	<transition name="slide-fade">
		<!-- 登录框 -->
		<ly-dialog size="sm" @close="loginBoxView=false" v-if="loginBoxView" title="登录">
			<div class="login-box">
				<el-input type="text" placeholder="用户名" v-model="loginInfo.username"></el-input>
				<el-input type="password" placeholder="密码" v-model="loginInfo.password"></el-input>
				<div class="flex-row around">
					<el-button size="small" @click="loginBoxView=false">取消</el-button>
					<el-button size="small" type="primary" @click="submit" :disabled="!(loginInfo.username && loginInfo.password)">登录</el-button>
				</div>
			</div>
		</ly-dialog>
		<!-- 编辑框 -->
		<ly-dialog size="md" @close="editBox.view=false" v-if="editBox.view" title="我的收藏">
			<!-- 编辑链接 -->
			<ul class="edit-link">
				<li class="flex-row between input-item" v-for="(item, index) in links" :key="item.id">
					<input class="name" type="text" v-model="item.title" placeholder="网站名称">
					<input class="path" type="text" v-model="item.link" placeholder="网站地址">
					<el-button @click="delLink(index)">删除</el-button>
				</li>
				<li class="flex-row between input-item" v-if="editBox.isAdd">
					<input class="name" type="text" v-model="editBox.addLink.title" placeholder="网站名称">
					<input class="path" type="text" v-model="editBox.addLink.link" placeholder="网站地址">
					<el-button @click="hideEditBox">保存</el-button>
				</li>
			</ul>
			<div class="flex-row around">
				<el-button size="small" @click="createLink" v-if="!editBox.isAdd"><i class="el-icon-circle-plus"></i>添加</el-button>
				<el-button size="small" type="primary" @click="complete"><i class="el-icon-success"></i>完成</el-button>
			</div>
			
		</ly-dialog>
	</transition>
  </div>
</template>

<script>
	
export default {
  name: 'hello',
  data(){
    return {
	  // 背景设置
	  background: 'starrySky',
	  userid: '',
	  quickLinks: [],
	  editBox: {
		  view: false,
		  isAdd: false,
		  addLink: {title:'',link:''}
	  },
	  is_private: '0',
	  loginBoxView: false,
	  loginInfo: {
		  username: '',
		  password: ''
	  },
	  loadingOptions: {
		  lock: true,
		  text: 'Loading',
		  spinner: 'el-icon-loading',
		  background: 'rgba(0, 0, 0, 0.7)'
	  }
    }
  },
  computed: {
    links: function(){
		let quickLinks = this.$data.quickLinks;
		if(this.$data.is_private == '1'){
			return quickLinks;
		}else{
			let links = [];
			for (let item of quickLinks) {
				item.is_private == '0' && links.push(item)
			}
			return links
		}
	}
  },
  mounted(){
	if(localStorage.getItem('userid')) {
		this.$data.userid = localStorage.getItem('userid');
		this.getFavorite()
	} else if (localStorage.getItem('quickLinks')){
		this.$data.quickLinks = JSON.parse(localStorage.getItem('quickLinks'));
	}
  },
  methods: {
	  // 登录账户
	  submit: function(){
		// 开始加载
		const loading = this.$loading(this.$data.loadingOptions);
		const request_url = this.$store.state.request_url + '/user/login';
		this.$http.post(request_url, this.$data.loginInfo).then(res => {
			// 关闭加载
			loading.close();
			console.log('login',res)
			if(res.body.returncode == 100){
				this.$message('登录成功');
				this.$data.loginBoxView = false;
				this.$data.userid = res.body.data.userid;
				localStorage.setItem('userid',res.body.data.userid)
				this.getFavorite()
			}else{
				this.$message('登录失败，'+res.body.message);
			}
		});
	  },
	  
	  // 注销
	  logout: function(){
		  sessionStorage.removeItem('userid')
		  this.$data.userid = '';
		  this.$message('注销成功');
	  },
		
	  // 打开登录框
	  showLoginBox: function(){
		  if(this.$data.userid) {
		  	this.$message('已登录状态');
		  }else{
			this.loginBoxView = true
		  }
	  },
	  // 打开编辑框
	  showEditBox: function(){
		this.$data.editBox.view = true;
	  },
	  
	  // 保存
	  hideEditBox: function(){
		this.$data.editBox.isAdd = false;
		if(this.$data.editBox.addLink.title && this.$data.editBox.addLink.link){
			const params = {
				title: this.$data.editBox.addLink.title,
				link: this.$data.editBox.addLink.link
			};
			const request_url = this.$store.state.request_url + '/user/createFavorite';
			this.$http.post(request_url,params).then(res => {
				console.log('createFavorite',res)
				if(res.body.returncode == 100){
					this.getFavorite()
				}
			});
		}
	  },
	  
	  // 添加
	  createLink: function(){
	  	this.$data.editBox.isAdd = true;
		this.$data.editBox.addLink = [];
	  },
	  
	  // 删除
	  delLink: function(index){
		const params = {id: this.$data.quickLinks[index].id};
		const request_url = this.$store.state.request_url + '/user/deleteFavorite';
		this.$http.delete(request_url, params).then(res => {
			console.log('delLink',res)
			if(res.body.returncode == 100){
				this.$data.quickLinks.splice(index,1)
				this.getFavorite()
			}
		});
	  },
	  
	  // 完成编辑
	  complete: function(){
		  this.$data.editBox.isAdd = false;
		  this.$data.editBox.view = false;
	  },
	  
	  // 获取收藏夹
	  getFavorite: function(){
		const request_url = this.$store.state.request_url + '/user/getFavorites?userid=' + this.$data.userid;
	  	this.$http.get(request_url).then(res => {
			console.log('getFavorite',res)
			if(res.body.returncode == 100){
				this.$data.quickLinks = res.body.data;
			}
	  	})
	  }
  }
}
</script>
<!-- 添加“scoped” 属性以仅将CSS限制到此组件 -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.hello{
		box-sizing: border-box;
		background: transparent;
		width: 100vw; height: 100vh;
		overflow: hidden;
		/* background-image: url(../assets/img/starry-5.jpg); */
	}
	.box-hd{
		z-index: 10;
		position: fixed;
		left: 0; top: 0;
		width: 100%; 
		height: 50px;
		padding: 0 2rem;
		box-sizing: border-box;
		background-color: rgba(100,100,100,.5);
	}
	
	.box-hd button{margin: 0 1rem;}
	
	.box-bd{
		z-index: 9;
		width: 100%; height: 100%;
		position: relative;
	}
	
	.search-box{
		width: 100%;
		position: fixed;
		top: 35%;
	}
	.search-box .input-item{
		width: 80%;
		max-width: 650px;
		margin: 0 auto;
	}
	
	/* 快速链接 */
	.quick-link{
		position: relative;
		width: 80%; max-width: 650px;
		margin: 0 auto;
		padding: 1em 0;
	}
	.quick-link .link{
		display: block;
		color: #1BC8E0;
		width: 100%;
		height: 30px;
		line-height: 30px;
		cursor: pointer;
		overflow: hidden;
		white-space: nowrap;
		text-align: center;
		text-overflow: ellipsis;
		margin-bottom: 1em;
		border-radius: 3px;
		background-color: rgba(255,255,255,.3);
	}
	.quick-link .link.private{
		background-color: rgba(255,0,0,.3);
	}
	.quick-link .link:hover{color: #00FFFF;background-color: rgba(255,255,255,.5);}
	.quick-link .link.private:hover{
		background-color: rgba(255,0,0,.5);
	}
	.link .ico{width: 1em;display: inline-block;margin-right: .5em;}
	
	.diy-box{
		width: 100%;
		position: fixed;
		left: 0; bottom: 20%;
		overflow: hidden;
	}
	.login-box{
		width: 300px;
		margin: 0 auto;
	}
	.login-box .el-input{
		margin: .5rem 0;
	}
	.login-btn{
		display: block;
		margin: 0 auto;
		width: 100px; height: 100px;
		border-radius: 50%;
		animation: spin 10s linear 100ms infinite;
	}
	@keyframes spin{
		from{transform: rotate(0);}
		to{transform: rotate(360deg);}
	}
	.login-btn img{
		cursor: pointer;
		width: 100%; height: 100%;
	}
	
	.edit-link{
		z-index: 9;
		position: relative;
		width: 80%; max-width: 650px;
		margin: 0 auto;
		padding: 1em 0;
	}
	.edit-link li{
		width: 100%;
		margin-bottom: 10px;
	}
	.edit-link li input{
		padding: .5rem;
	}
	.edit-link li .name{
		width: 100px;
	}
	.edit-link li .path{
		flex: 1;
		margin: 0 1em;
	}
	
	.edit-btn{
		color: white;
		padding: .5em 1em;
		background-color: #02AEFF;
	}
</style>
