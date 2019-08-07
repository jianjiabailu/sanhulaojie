import Vue from 'vue'
// 注册

// bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
// inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
// update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
// componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
// unbind: 只调用一次， 指令与元素解绑时调用。

Vue.directive('starrySky', {
  bind: function (el) {},
  inserted: (el)=>sky(el),
  update: function (el) {},
  componentUpdated: function (el) {},
  unbind: function (el) {}
})

// canvas背景-闪耀的星空
function sky(starrySky){
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
}