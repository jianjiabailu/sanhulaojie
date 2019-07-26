<template>
  <div class="hello" id="starrySky">
    <swing-girl size="150"></swing-girl>
	<div class="login-box" :class="{active:isActive}" @click="submit">
		<!-- <div>
			<input type="text" v-model="username" placeholder="请填写用户名">
			<input type="text" v-model="password" placeholder="请输入密码">
			<button @click="submit">提交</button>
		</div> -->
	</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
	  username: '',
	  password: '',
	  isActive: false
    }
  },
  mounted(){
	let starrySky = document.querySelector("#starrySky")
	let can = document.createElement('canvas');
	can.style = `
		z-index: -1;
		position: absolute;
		top: 0; left: 0;
		width: 100%;
		height: 100%;
		background:#000;
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
		rad.addColorStop(0.1, 'rgba(255,255,255,0.8)');
		rad.addColorStop(0.2, 'rgba(255,255,255,0.08)');
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
		}).then(response => {
			// get body data
			console.log('login',response)
			if(response.status == 200){
				localStorage.setItem('token',response.data.token)
				this.$router.push('/home')
			}
		}, response => {
			// error callback
		});
		
	  }
  }
}
</script>
<!-- 添加“scoped” 属性以仅将CSS限制到此组件 -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		text-align: center;
		box-sizing: border-box;
		background: transparent;
	}
	
	.login-box{
		width: 30px;
		height: 30px;
		padding: 1em;
		transition: all 500ms ease 50ms;
		position: absolute;
		left: 46%; top: 40%;
		cursor: pointer;
		overflow: hidden;
		border-radius: 30px;
		background-color: white;
	}
	.login-box.active{
		width: 200px;
	}
	
	.input-item{
		position: relative;
		width: 80%; height: 32px;
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



</style>
