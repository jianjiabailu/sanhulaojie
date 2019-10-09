import Vue from 'vue'
// 注册

// bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
// inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
// update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
// componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
// unbind: 只调用一次， 指令与元素解绑时调用。

Vue.directive('canvas-bg', {
  bind: function (el) {},
  inserted: (el, binding)=>{
	if(binding.value == 'starrySky'){
		sky(el)
	}else if (binding.value == 'laser'){
		laser(el)
	}
  },
  update: function (el) {},
  componentUpdated: function (el) {},
  unbind: function (el) {}
})

// 激光雨效果
function laser(el){
	let af;
	const numLasers = 250;
	const tail = 200;
	const canvas = document.createElement("canvas");
	el.style = `
		position: relative;
		background-color: transparent;
		background-size: 100% 100%;
	`;
	canvas.style = `
		z-index: -1;
		position: absolute;
		top: 0; left: 0;
		width: 100%;
		height: 100%;
		background-color: transparent;
	`;
	const ctx = canvas.getContext("2d");
	el.appendChild(canvas)
	const createLasers = n => {
		const lasers = [];
		for (let i = 0; i < n; ++i) {
			lasers.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				s: Math.random() * 2 + 1
			});
		}
		return lasers;
	};
	const renderLaser = l => {
		const grad = ctx.createLinearGradient(l.x, l.y, l.x, l.y + tail);
		const a = 1 - (canvas.height - l.y) / canvas.height * 0.8;
		grad.addColorStop(0, `hsla(340,100%,100%,${a})`);
		grad.addColorStop(1, "hsla(340,100%,50%,0)");
		ctx.strokeStyle = grad;
		ctx.beginPath();
		ctx.moveTo(l.x, l.y);
		ctx.lineTo(l.x, l.y + tail);
		ctx.stroke();
	};
	const updateLaser = l => {
		l.y -= l.s;
		if (l.y < -tail) {
			l.y = canvas.height;
		}
	};
	const render = lasers => {
		ctx.fillStyle = "hsl(261,43%,7%)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		for (let l of lasers) {
			renderLaser(l);
			updateLaser(l);
		}
		af = requestAnimationFrame(() => render(lasers));
	};
	const init = () => {
		cancelAnimationFrame(af);
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		render(createLasers(numLasers));
	};
	window.onresize = init;
	init();
}

// canvas背景-闪耀的星空
function sky(el){
	let can = document.createElement('canvas');
	el.style = `
		background-color: #000000;
		background-image: url('http://sanhulaojie.cn/img/starry-5.fa2b5fcd.jpg');
		background-size: 100% 100%;
	`;
	can.style = `
		z-index: 2;
		position: absolute;
		top: 0; left: 0;
		width: 100%;
		height: 100%;
		background-color: transparent;
	`;
	let cxt = can.getContext('2d');
	
	var w = can.width = window.innerWidth;
	var h = can.height = window.innerHeight;
	
	var num = 200; 				// 生成点的个数
	var data = []; 				// 存放星星坐标的数组
	var liuXY = [];  			// 存放流星坐标的数组
	var k = -1;					// 流星坐标计算参数
	var range = Math.atan(k); 	// 流星坐标计算参数
	var length = 200;			// 流星坐标计算参数
	var speed = 10; 			// 流星下落的速度

	el.appendChild(can)
	
	//生成num个点，并且存储初始坐标
	!function init(){
		for (var i = 0; i < num; i++) {
			data[i] = {
				x: Math.random() * w,
				y: Math.random() * h,
				r: Math.random() * 8 + 3
			};
			// 画出圆点
			Cricle(data[i].x, data[i].y, data[i].r);
		};
		draw()
	}()
	
	function draw() {
		// 清除画布，重新渲染
		cxt.clearRect(0, 0, w, h);
		// 星星闪耀效果
		for (var i = 0; i < num; i++) {
			data[i].r += Math.random() * 2 - 1;
			data[i].r = Math.max(0, data[i].r);
			data[i].r = Math.min(12, data[i].r);
			Cricle(data[i].x, data[i].y, data[i].r);
		};
		// 流星效果
		if (liuXY.length) {
			for (var i in liuXY) {
				// 变化坐标，形成下落效果
				liuXY[i].cX -= speed;
				// 画出流星某个时刻的坐标
				liuX(liuXY[i].cX, liuXY[i].y, liuXY[i].x);
				// 流星超出边界时立即销毁
				if (liuXY[i].cX < 0 || getY(liuXY[i].cX, liuXY[i].y, liuXY[i].x) > h) {
					liuXY.splice(i, 1);
				};
			}
		}
		// 生成流星的初始坐标
		if (Math.random() > 0.98) {
			var a = Math.random() * w;
			// x,y 是流星的坐标，cX是 
			liuXY.push({x: a, y: 0, cX: a});
		};
		window.requestAnimationFrame(draw);
	}
	
	// 画出流星
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
	
	// 获得流星的Y轴坐标
	function getY(x, startY, startX) {
		return k * x + startY - k * startX;
	};
	
	//画圆点
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
}

