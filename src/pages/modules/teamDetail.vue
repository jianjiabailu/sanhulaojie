<template>
	<div class="teamDetail">
	    <div class="team_img"><img src="../../assets/resource_modules/team_img.png"></div>
	    <div class="team_txt" style="padding-bottom: .8rem">
	        <p class="txta">张三</p>
	        <p>头颅外科 | 副主任医师</p>
	        <p>上海交通大学附属医院</p>
	    </div>
	    <div class="team_nav">
	        <div>
	            <p><img src="../../assets/resource_modules/ex_a.png"></p>
	            <p>图文咨询</p>
	        </div>
	        <div>
	            <p><img src="../../assets/resource_modules/ex_b.png"></p>
	            <p>语音咨询</p>
	        </div>
	        <div>
	            <p><img src="../../assets/resource_modules/ex_c.png"></p>
	            <p>即将开通</p>
	            <p>视频咨询</p>
	        </div>
	        <div>
	            <p><img src="../../assets/resource_modules/ex_d.png"></p>
	            <p>预约面诊</p>
	        </div>
	    </div>
	    <div class="plug">
	        <dl>
	            <dd>好评数</dd>
	            <dd class="num numa">5678</dd>
	        </dl>
	        <dl>
	            <dd>回答数</dd>
				<dd class="num numb">4567</dd>
	        </dl>
	    </div>
	    <div class="team_tit">专家介绍</div>
	    <div class="team_show">
	        曾赴友谊医院神经内科进修，参与多项科研课题及药物试验课题，发表文章10篇，参与教材编写2部。擅长精神病治疗工作
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'teamDetail'
	}
</script>

<style scoped>
	.team_img{
		background: #fff;
		height: auto;
		padding:.8rem 0;
		overflow: hidden;
		text-align: center;
	}
	.team_img img{
		width: 4rem; height: 4rem;
		border-radius: 50%;
		box-shadow:0 0 .5rem 1px #888;
	}
	.team_txt{
		padding-top: .1rem;
		background: #fff;
		text-align: center;
		font-size: .6rem;
		color: #9a9a9a;
	}
	.team_txt .txta{
		font-size: .7rem;
		color: #000;
	}
	.team_txt p{margin-top: .2rem;}
	
	.team_info{
		height: auto;
		overflow: hidden;
		background: #fff;
		padding: .5rem;
		font-size: .6rem;
		color: #9a9a9a;
		line-height: 1rem;
	}
	.tlimg img{
		width: 2.2rem; height: 2.2rem;
		border-radius: 50%;
		margin-right: .5rem;
	}
	.team_list{
		padding: .5rem; height: auto;
		display: -webkit-flex;
		display: flex;
		background: #fff;
		font-size: .5rem;
		color: #9a9a9a;
		border-top:1px solid #e2e2e2;
	}
	
	.team_nav{
		display: flex;
		color: #666;
		font-size: .6rem;
		overflow: hidden;
		padding: .5rem 0;
		border-top:1px solid #e2e2e2;
		border-bottom:1px solid #e2e2e2;
		background: #fff;
	}
	.team_nav>div{flex: 1;}
	.team_nav>div:not(:last-child){
		border-right:1px solid #e2e2e2;
	}
	.team_nav p{text-align: center;}
	.team_nav img{width:1.1rem; margin-bottom: .4rem;}
	
	.plug{
		height: auto;
		overflow: hidden;
		margin:.5rem 0;
		padding: .5rem 0;
		display: flex;
		border-top:1px solid #e2e2e2;
		border-bottom:1px solid #e2e2e2;
		background: #fff;
	}
	.plug dl{
		width: 50%;
		text-align: center;
		border-right:1px solid #e2e2e2;
		margin-right: -1px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: .6rem;
		color: #666;
	}
	.plug dl dd.num{
		color: #4da8f0;
		margin-left: .8rem;
		font-size: .8rem;
	}
	
	.team_tit{
		height: auto;
		overflow: hidden;
		margin:.5rem 0 0;
		padding: .5rem 0;
		font-size: .6rem;
		text-indent: .6rem;
		border-top:1px solid #e2e2e2;
		border-bottom:1px solid #e2e2e2;
		background: #fff;
	}
	.team_show{
		padding: .5rem .6rem;
		font-size: .6rem;
		line-height: 1rem;
		color: #666;
		background: #fff;
	}
</style>
