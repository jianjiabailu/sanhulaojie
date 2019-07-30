<template>
  <div class="hello" id="starrySky">
	<div class="box-fd flex-row-r a-center" v-if="loginsign">
		<router-link to="/mine"><el-avatar size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar></router-link>
		<a><i class="el-icon-switch-button"></i>注销</a>
		<router-link to="/projects">项目</router-link>
		<router-link to="/gallery">相册</router-link>
	</div>
	<div class="box-hd">
		<swing-girl size="150"></swing-girl>
		<div class="search-box">
			<div class="input-item">
				<input type="text" v-model="searchValue" @keyup="searchBD">
				<button @click="searchBD" >搜索</button>
			</div>
			<!-- 收藏链接 -->
			<div class="quick-link">
				<el-row :gutter="10">
				  <el-col :span="6" v-for="item in quickLinks" :key="item.path">
					  <a class="link" :href="item.path" target="_blank"><i class="el-icon-star-on"></i>{{item.name}}</a>
				  </el-col>
				  <el-col :span="6">
					  <button class="link" @click="showEditBox"><i class="el-icon-edit"></i>编辑</button>
				  </el-col>
				</el-row>
			</div>
			<!-- 编辑链接 -->
			<ul class="edit-link" v-if="editBox.view">
				<li class="flex-row between input-item" v-for="(item,index) in editBox.links" :key="item.path">
					<input class="name" type="text" v-model="item.name" placeholder="网站名称">
					<input class="path" type="text" v-model="item.path" placeholder="网站地址">
					<button @click="delLink(index)">删除</button>
				</li>
				<li class="flex-row around">
					<button class="edit-btn" @click="addLink">添加</button>
					<button class="edit-btn" @click="hideEditBox">保存</button>
				</li>
			</ul>
		</div>
		<!-- 自定义栏 -->
		<div class="diy-box flex-col" @click="dialogView=true">
			<!-- 登录按钮 -->
			<div class="login-btn"><img src="../assets/img/Earth.png" alt=""></div>
		</div>
		<!-- 登录框 -->
		<ly-dialog size="sm" v-if="dialogView">
			<div>对话框</div>
			<div class="input-item">
				<input type="text" placeholder="用户名">
			</div>
			<div class="input-item">
				<input type="password" placeholder="密码">
			</div>
			<div class="flex-row around">
				<el-button size="medium" @click="dialogView=false">取消</el-button>
				<el-button size="medium" type="primary" @click="submit">登录</el-button>
			</div>
		</ly-dialog>
	</div>
	
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
	  searchValue: '',
	  quickLinks: localStorage.getItem('quickLinks') ? JSON.parse(localStorage.getItem('quickLinks')) : [],
	  editBox: {view: false,links: []},
	  username: '',
	  password: '',
	  dialogView: false,
	  loginsign: localStorage.getItem('token') ? true : false
    }
  },
  mounted(){
	let starrySky = document.querySelector("#starrySky")
	let can = document.createElement('canvas');
	can.style = `
		z-index: 2;
		position: absolute;
		top: 0; left: 0;
		width: 100%;
		height: 100%;
		background: transparent;
	`;
	let cxt = can.getContext('2d');
	starrySky.appendChild(can)

	var w = can.width = window.innerWidth;
	var h = can.height = window.innerHeight;

	var num = 200; //生成点的个数
	var data = []; //定义一个数组，准备用来存坐标
	var move = {};
	var liuXY = [];
	var k = -1;
	var range = Math.atan(k);
	var length = 200;

	//生成num个点，并且存储初始坐标
	for (var i = 0; i < num; i++) {
		data[i] = {
			x: Math.random() * w,
			y: Math.random() * h,
			r: Math.random() * 8 + 3
		};
		Cricle(data[i].x, data[i].y, data[i].r);
	};
	
	!function draw() {
		cxt.clearRect(0, 0, w, h);
		for (var i = 0; i < num; i++) {
			data[i].r += Math.random() * 2 - 1;
			data[i].r = Math.max(0, data[i].r);
			data[i].r = Math.min(12, data[i].r);
			Cricle(data[i].x, data[i].y, data[i].r);
		};
		if (liuXY.length) {
			for (var i in liuXY) {
				liuXY[i].cX -= 10;
				liuX(liuXY[i].cX, liuXY[i].y, liuXY[i].x);
				if (liuXY[i].cX < 0 || getY(liuXY[i].cX, liuXY[i].y, liuXY[i].x) > h) {
					liuXY.splice(i, 1);
				};
			};
		};
		if (Math.random() > 0.98) {
			var a = Math.random() * (w - 400) + 400;
			liuXY.push({
				x: a,
				y: 0,
				cX: a
			});
		};
		window.requestAnimationFrame(draw);
	}()

	function liuX(x, sX, sY) {
		cxt.save();
		var y = getY(x, sY, sX);
		var r = 15;
		var rad = cxt.createRadialGradient(x, y, 0, x, y, r);
		rad.addColorStop(0, 'rgba(255,255,255,0.8)');
		rad.addColorStop(0.2, 'rgba(255,255,255,0.8)');
		rad.addColorStop(0.3, 'rgba(255,255,255,0.08)');
		rad.addColorStop(1, 'rgba(255,255,255,0)');
		cxt.fillStyle = rad;
		cxt.beginPath();
		cxt.arc(x, y, r, 0, 2 * Math.PI, true);
		cxt.closePath();
		cxt.fill();
		cxt.restore();

		var wX = x + (Math.cos(range) * length);
		var wY = y + (Math.sin(range) * length);

		var x1 = x + 3;
		var y1 = y;
		var x2 = x;
		var y2 = y - 3;

		cxt.save();
		var rad2 = cxt.createRadialGradient(x, y, 0, x, y, length);
		rad2.addColorStop(0, 'rgba(255,255,255,0.1)');
		rad2.addColorStop(1, 'rgba(255,255,255,0)');
		cxt.fillStyle = rad2;
		cxt.beginPath();
		cxt.moveTo(x1, y1);
		cxt.lineTo(x2, y2);
		cxt.lineTo(wX, wY);
		cxt.closePath();
		cxt.fill();
		cxt.restore();
	};

	function getY(x, startY, startX) {
		return k * x + startY - k * startX;
	};

	//画点
	function Cricle(x, y, r) {
		cxt.save();
		var rad = cxt.createRadialGradient(x, y, 0, x, y, r);
		rad.addColorStop(0, 'rgba(255,255,255,0.8)');
		rad.addColorStop(0.1, 'rgba(255,255,255,0.8)');
		rad.addColorStop(0.2, 'rgba(255,255,255,0.08)');
		rad.addColorStop(1, 'rgba(255,255,255,0)');
		cxt.fillStyle = rad;
		cxt.beginPath();
		cxt.arc(x, y, r, 0, 2 * Math.PI, true);
		cxt.closePath();
		cxt.fill();
		cxt.restore();
	};
  },
  methods: {
	  submit(){
		this.$http.post('http://localhost:8888/admin/user',{},{
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
		this.$data.editBox.links = JSON.parse(localStorage.getItem('quickLinks'));
	  },
	  // 保存
	  hideEditBox(){
		this.$data.editBox.view = false;
		for (let i in this.$data.editBox.links) {
			if(this.$data.editBox.links[i].name == '' || this.$data.editBox.links[i].path == ''){
				this.$data.editBox.links[i].splice(i,1);
			}
		}
		this.$data.quickLinks = this.$data.editBox.links;
		localStorage.setItem('quickLinks',JSON.stringify(this.$data.quickLinks))
	  },
	  // 添加
	  addLink(){
	  	this.$data.editBox.links.push({name:'',path:''});
	  },
	  // 删除
	  delLink(index){
		this.$data.editBox.links.splice(index,1);  
	  },
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
		width: 80%; max-width: 650px;
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
		animation: spin 10s linear 100ms infinite ;
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
		position: relative;
		width: 80%; max-width: 650px;
		margin: 0 auto;
		padding: 1em 0;
	}
	.edit-link li{
		margin-bottom: 10px;
	}
	.edit-link li input{
		padding: .5em 0;
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
