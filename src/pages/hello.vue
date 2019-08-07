<template>
  <div class="hello" v-starrySky id="starrySky">
	<div class="box-fd flex-row-r a-center" v-if="loginsign">
		<router-link to="/mine"><el-avatar size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar></router-link>
		<a><i class="el-icon-switch-button"></i>注销</a>
		<router-link to="/home">管理台</router-link>
	</div>
	<div class="box-hd">
		<swing-girl size="150"></swing-girl>
		<div class="search-box">
			<div class="input-item">
				<input type="text" v-model="searchValue" @keyup.enter="searchBD">
				<button @click="searchBD" >搜索</button>
			</div>
			<!-- 收藏链接 -->
			<div class="quick-link">
				<el-row :gutter="10">
				  <el-col :span="6" v-for="item in quickLinks" :key="item.id">
					  <a class="link" :href="item.link" target="_blank"><i class="el-icon-star-on"></i>{{item.title}}</a>
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
			<div class="login-btn" @click="loginBox=true"><img src="../assets/img/Earth.png" alt=""></div>
		</div>
		<!-- 登录框 -->
		<transition name="slide-fade">
			<ly-dialog size="sm" @close="loginBox=false" v-if="loginBox">
				<div class="login-box">
					<div>对话框</div>
					<div class="input-item">
						<input type="text" placeholder="用户名">
					</div>
					<div class="input-item">
						<input type="password" placeholder="密码">
					</div>
					<div class="flex-row around">
						<el-button size="medium" @click="loginBox=false">取消</el-button>
						<el-button size="medium" type="primary" @click="submit">登录</el-button>
					</div>
				</div>
			</ly-dialog>
		</transition>
		<!-- 编辑框 -->
		<transition name="slide-fade">
			<ly-dialog size="md" @close="editBox.view=false" v-if="editBox.view">
				<!-- 编辑链接 -->
				<ul class="edit-link">
					<li class="flex-row between input-item" v-for="(item, index) in quickLinks" :key="item.id">
						<input class="name" type="text" v-model="item.title" placeholder="网站名称">
						<input class="path" type="text" v-model="item.link" placeholder="网站地址">
						<button @click="delLink(index)">删除</button>
					</li>
					<li class="flex-row between input-item" v-if="editBox.isAdd">
						<input class="name" type="text" v-model="editBox.addLink.title" placeholder="网站名称">
						<input class="path" type="text" v-model="editBox.addLink.link" placeholder="网站地址">
						<button class="edit-btn" @click="hideEditBox">保存</button>
					</li>
				</ul>
				<div class="flex-row around">
					<el-button size="medium" @click="createLink" v-if="!editBox.isAdd"><i class="el-icon-circle-plus"></i>添加</el-button>
					<el-button size="medium" type="primary" @click="complete"><i class="el-icon-success"></i>完成</el-button>
				</div>
			</ly-dialog>
		</transition>
	</div>
	
  </div>
</template>

<script>
export default {
  name: 'hello',
  data(){
    return {
	  searchValue: '',
	  quickLinks: localStorage.getItem('quickLinks') ? JSON.parse(localStorage.getItem('quickLinks')) : [],
	  editBox: {
		  view: false,links: [],
		  isAdd: false,
		  addLink: {
			  title:'',
			  link:''
		  }
	  },
	  username: '',
	  password: '',
	  loginBox: false,
	  loginsign: localStorage.getItem('token') ? true : false
    }
  },
  mounted(){
	this.getFavorite()
  },
  methods: {
	  // 登录账户
	  submit(){
		this.$http.post('http://api.sanhulaojie.cn:8888/admin/user',{},{
			headers: {'method': 'login'}
		}).then(res => {
			// get body data
			console.log('login',res)
			if(res.status == 200){
				localStorage.setItem('token',res.data.token)
				this.$data.dialogView = false;
				this.$data.loginsign = true;
			}
		}, err => {
			// error callback
			console.log('网络错误，登录失败',err)
		});
	  },
	  // 百度搜索
	  searchBD(){
		window.location.href = "https://www.baidu.com/s?wd="+this.$data.searchValue
	  },
	  // 编辑
	  showEditBox(){
		// 关闭操作框
		this.$data.diyView = false;
		// 打开编辑框
		this.$data.editBox.view = true;
		// 获取编辑列表
		this.$data.editBox.links = this.$data.quickLinks;
	  },
	  // 保存
	  hideEditBox(){
		this.$data.editBox.isAdd = false;
		if(this.$data.editBox.addLink.title && this.$data.editBox.addLink.link){
			let params = {
				data: {
					icon: '',
					title: this.$data.editBox.addLink.title,
					link: this.$data.editBox.addLink.link
				},
				headers: {
					'method': 'createFavorite',
					'token': localStorage.getItem('token')
				}
			}
			this.$http.post('http://sanhulaojie.cn:8888/admin/user',params.data,{headers: params.headers})
			.then(res => {
				this.getFavorite()
			}, error => console.log(error));
		}
	  },
	  // 添加
	  createLink(){
	  	this.$data.editBox.isAdd = true;
		this.$data.editBox.addLink = [];
	  },
	  // 删除
	  delLink(index){
		let params = {
			data: {id: this.$data.editBox.links[index].id},
			headers: {
				'method': 'deleteFavorite',
				'token': localStorage.getItem('token')
			}
		}
		this.$http.post('http://sanhulaojie.cn:8888/admin/user',params.data,{headers: params.headers})
		.then(res => {
			this.$data.editBox.links.splice(index,1)
			this.getFavorite()
		}, error => console.log(error));
	  },
	  // 完成编辑
	  complete(){
		  this.$data.editBox.isAdd = false;
		  this.$data.editBox.view = false;
	  },
	  // 获取收藏夹
	  getFavorite(){
	  	this.$http.post('http://sanhulaojie.cn:8888/admin/user',{},{
	  		headers: {
	  			'method': 'getFavorite',
	  			'token': localStorage.getItem('token')
	  		}
	  	}).then(res => {
	  		this.$data.quickLinks = res.body;
	  	}, error => console.log(error));
	  }
  }
}
</script>
<!-- 添加“scoped” 属性以仅将CSS限制到此组件 -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		box-sizing: border-box;
		background: transparent;
		width: 100vw; height: 100vh;
		overflow: hidden;
		background: url(../assets/img/starry-5.jpg) no-repeat;
		background-size: 100% 100%;
	}
	.box-fd{
		z-index: 10;
		position: fixed;
		left: 0; top: 0;
		width: 100%; height: 50px;
		box-sizing: border-box;
		background-color: rgba(100,100,100,.5);
	}
	.box-fd a{
		color: white;
		line-height: 50px;
		margin: 0 1em;
		display: inline-block;
	}
	.box-fd img{vertical-align: middle;}
	
	.hello > .box-hd{
		z-index: 9;
		width: 100%; height: 100%;
		position: relative;
	}
	button{cursor: pointer;}
	.search-box{
		width: 100%;
		position: fixed;
		top: 30%;
	}
	
	.input-item{
		position: relative;
		max-width: 650px;
		height: 32px;
		line-height: 32px;
		margin: 0 auto;
		color: white;
		display: flex;
		box-sizing: border-box;
		border: 1px solid #02aeff;
	}
	
	.input-item:hover{
		animation: shine-animation 1s ease-in-out 100ms infinite alternate;
	}
	@-webkit-keyframes shine-animation {
	  from {
	    -webkit-box-shadow: 0 0 5px #02aeff;
			box-shadow: 0 0 5px #02aeff;
	  }
	  to {
	    -webkit-box-shadow: 0 0 20px #02aeff;
	    	box-shadow: 0 0 20px #02aeff;
	  }
	}
	@keyframes shine-animation {
	  from {
	    -webkit-box-shadow: 0 0 5px #02aeff;
	  			box-shadow: 0 0 5px #02aeff;
	  }
	  to {
	    -webkit-box-shadow: 0 0 20px #02aeff;
	    	box-shadow: 0 0 20px #02aeff;
	  }
	}
	.input-item input{
		border: none;
		outline: none;
		display: inline-block;
		color: inherit;
		width: 100%;
		min-width: 100px;
		font-size: 1em;
		padding: 0 1em;
		background-color: transparent;
	}
	.input-item button{
		color: white;
		border: none;
		outline: none;
		padding: 0 1em;
		display: inline-block;
		white-space: nowrap;
		background-color: #02AEFF;
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
		overflow: hidden;
		white-space: nowrap;
		text-align: center;
		text-overflow: ellipsis;
		margin-bottom: 1em;
		background-color: rgba(255,255,255,.3);
	}
	.quick-link .link:hover{color: #00FFFF;}
	.link .ico{width: 1em;display: inline-block;margin-right: .5em;}
	
	.diy-box{
		width: 100%;
		position: fixed;
		left: 0; bottom: 20%;
		overflow: hidden;
	}
	.login-btn{
		display: block;
		margin: 0 auto;
		width: 100px; height: 100px;
		border-radius: 60px;
		animation: spin 10s linear 100ms infinite;
	}
	@keyframes spin{
		from{
			transform: rotate(0);
		}
		to{
			transform: rotate(360deg);
		}
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
