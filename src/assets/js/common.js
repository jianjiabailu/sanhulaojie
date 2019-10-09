
export default {
	random: function(max,min=0){
		// 生成指定范围的随机数
		return Math.round(Math.random()*(max-min+1)+min);
	},
	getRandomColor: function() {
		// 生成0~255之间的随机数
		let red = this.random(256);
		let green = this.random(256);
		let blue = this.random(256);
		//红，绿，蓝
		return {red, green, blue}
	},
	getRandomString: function(len){
		// 生成随机字符串
		let char = ("0123456789qwertyuiopasdfghjklzxcvbnm").split("");
		let str = "";
		for(let i=0; i<len; i++){
			str += char[this.random(char.length)];
		}
		return str
	},
}

