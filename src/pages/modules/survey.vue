<template>
	<div class="surveyPage" data-code='0' style="display: block;">
		<div class="box" v-for="(item,index) in questions" :key='item.title'>
			<div class="pgaq">
				<div class="aqimg"><img src="../../assets/resource_modules/ad_q.png"></div>
				<div class="aqtxt">
					<h3>{{item.title}}</h3>
					<p>{{index+1}}、{{item.intro}}</p>
				</div>
				<div class="pg_num"><span>{{index}}</span>/{{questions.length}}</div>
			</div>
			<div class="aq_box">
				<p class="bdb" v-for="(val,i) in item.options" :key="val.val" @click="item.selectIndex = i">
					<span>{{i+1}}、{{val}}</span>
					<span v-if="item.selectIndex === i"><img src="../../assets/resource_modules/icon2.png"></span>
				</p>
			</div>
		</div>
		
		<div class="box questBox">
			<p class="quest-tit">1.您的性别？</p>
			<div class="quest-item">
				<label class="radio">
					<span>A. 男</span>
					<my-radio name='sex' value='2' :options="radioOption" @change="getVal"></my-radio>
				</label>
				<label class="radio">
					<span>B. 女</span>
					<my-radio name='sex' value='1' :options="radioOption" @change="getVal"></my-radio>
				</label>
			</div>
			<small class="quest-tip">*请选择选项</small>
		</div>
	</div> 
</template>

<script>
	export default {
		name: 'survey',
		data(){
			return {
				sex: '0',
				radioOption: {
					color: 'red',
					disabled: false
				},
				questions: [
					{
						title: '脑肿瘤',
						intro: '是否有持续的头痛，在几周内逐渐加重？',
						options: ['无','有时','经常'],
						selectIndex: null
					}
				]
			}
		},
		methods: {
			getVal(data){
				this.$data.sex = data;
			}
		}
	}
</script>

<style>
	
	.box{
		width: 90%;
		height: auto;
		overflow: hidden;
		padding: 1rem;
		margin: 10px auto;
		box-sizing: border-box;
		box-shadow: 0 0 4px 1px #ddd;
	}
	.pgaq{
		display: flex;
		overflow: hidden;
		position: relative;
	}
	.aqimg{margin-right: 1rem;}
	.aqimg img{width: 4rem;}
	.aqtxt{
		color: #333;
		font-size: .7rem;
	}
	.aqtxt p{color: #666;}
	
	.pg_num{
		position: absolute;
		right: 0; bottom: 0;
		font-size: .75rem;
		color: #999;
		padding: 0 .5rem;
		text-align: right;
	}
	.pg_num span{color:#1bc8e0;}
	
	.aq_box{
		
	}
	
	.bdb{
		display: flex;
		justify-content: space-between;
		padding-bottom: .5rem;
		margin-bottom: .5rem;
		border-bottom:1px solid #ececec;
	}
	.bdb img{
		width: 1rem;
	}
	
	
	.questBox{
		color: #5cc7d1;
	}
	
	.resultBox{
		color: #5cc7d1; width: 80%;
		padding: 20px;
		position: relative;
		margin: 20px auto;
		border-radius: 10px;
		background-color: rgba(255,255,255,.2);
	}
	
	.resultBox .sub-tit{
		color: black;
		font-size: 15px;
		margin-top: .5em;
	}
	.resultBox .sub-cont{
		color: white;
		font-size: 14px;
	}
	.sub-cont b{color: red;}
	
	.questBox:before{
		content: '';
		z-index: 1;
		display: block;
		position: absolute;
		left: -30px; bottom: -20px;
		width: 100px; height: 80px;
		/* background: url(../images/star1.png) no-repeat; */
		background-size: 100% 100%;
	}
	.quest-tip{
		color: red;
	}
	.quest-item > label{
		display: flex;
		padding: 8px 0;
		position: relative;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
