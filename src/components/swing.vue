<template>
	<div class="wrapper" :style="{width:size+'px',height:size+'px'}">
	  <div class="swing">
		<div class="human">
		  <div class="top-part">
			<div class="head">
			  <div class="hair"></div>
			  <div class="fringe"></div>
			  <div class="eye"></div>
			  <div class="mouth"></div>
			</div>
			<div class="body">
			  <div class="hand">
				<div class="hand-one"></div>
				<div class="hand-two"></div>
			  </div>
			</div>
		  </div>
		  <div class="leg-one"></div>
		  <div class="leg-two"></div>
		</div>
		<div class="swing-rod"></div>
		<div class="bottom"></div>
	  </div>
	  <div class="pole one"></div>
	  <div class="pole two"></div>
	</div>
</template>

<script>
	export default {
		name: 'swing-girl',
		props: {
		  size: String
		},
		mounted(){
			
		}
	}
</script>

<style>
	.wrapper {
		display: block;
		/* position: relative;
		margin: 30% auto 0; */
	  position: absolute;
	  top: 20%; left: 50%;
	  padding: 0 20px;
	  -webkit-transform: translate(-50%, -50%) scale(1.2);
	          transform: translate(-50%, -50%) scale(1.2);
	}
	/* 承重杆 */
	.wrapper .pole {
	  position: absolute;
	  left: 50%; top: 0;
	  width: 2%; height: 100%;
	  -webkit-transform-origin: center top;
	          transform-origin: center top;
	  -webkit-transform: translateX(-50%) rotate(-25deg);
	          transform: translateX(-50%) rotate(-25deg);
	  color: silver;
	  background: currentColor;
	}
	.wrapper .pole.two {
	  -webkit-transform: translateX(-50%) rotateY(-180deg) rotate(-25deg);
	          transform: translateX(-50%) rotateY(-180deg) rotate(-25deg);
	}
	/* 顶部的小球 */
	.wrapper .pole:before {
	  content: "";
	  position: absolute;
	  top: -10px; left: -7px;
	  width: 20px; height: 20px;
	  border-radius: 100%;
	  background: currentColor;
	}
	/* 地面的铁块 */
	.wrapper .pole:after {
	  content: "";
	  position: absolute;
	  left: 0; bottom: 0;
	  width: 20px; height: 5px;
	  -webkit-transform: translateX(-50%) rotate(25deg);
	          transform: translateX(-50%) rotate(25deg);
	  background: currentColor;
	}
	/* 秋千 */
	.wrapper .swing {
	  position: absolute;
	  width: 20%; height: 78%;
	  left: 40%; top: 0;
	 -webkit-transform-origin: center top;
	          transform-origin: center top;
	  -webkit-animation-duration: 0.8s;
	          animation-duration: 0.8s;
	  -webkit-animation-iteration-count: infinite;
	          animation-iteration-count: infinite;
	  -webkit-animation-timing-function: ease-in-out;
	          animation-timing-function: ease-in-out;
	  -webkit-animation-direction: alternate;
	          animation-direction: alternate;
	}
	/* 小女孩 */
	.wrapper .swing .human {
	  position: absolute;
	  width: 85%; height: 50%;
	  bottom: 5px; left: 0;
	}
	/* 小女孩的上身 */
	.wrapper .swing .human .top-part {
	  position: absolute;
	  width: 100%; height: calc(100% - 5px);
	  bottom: 5px; left: 0;
	  -webkit-transform-origin: center bottom;
	          transform-origin: center bottom;
	  -webkit-animation-name: body-animation;
	          animation-name: body-animation;
	  -webkit-animation-duration: 0.8s;
	          animation-duration: 0.8s;
	  -webkit-animation-iteration-count: infinite;
	          animation-iteration-count: infinite;
	  -webkit-animation-timing-function: ease-in-out;
	          animation-timing-function: ease-in-out;
	  -webkit-animation-direction: alternate;
	          animation-direction: alternate;
	}
	/* 小女孩的头部 */
	.wrapper .swing .human .top-part .head {
	  position: absolute;
	  bottom: 40px; left: 50%;
	  -webkit-transform: translateX(-50%);
	          transform: translateX(-50%);
	  width: 20px; height: 20px;
	  background: #d59e7b;
	  border-radius: 100%;
	}
	/* 小女孩的长发 */
	.wrapper .swing .human .top-part .head .hair {
	  position: absolute;
	  top: -5px;
	  left: -10px;
	  background: black;
	  width: 22px;
	  height: 44px;
	  border-top-right-radius: 0%;
	  border-top-left-radius: 100%;
	  border-bottom-right-radius: 75%;
	  border-bottom-left-radius: 10%;
	  z-index: 2;
	}
	/* 小女孩的刘海 */
	.wrapper .swing .human .top-part .head .fringe {
	  position: absolute;
	  top: -5px;
	  left: 0;
	  width: 0px;
	  height: 0px;
	  border-top: 10px solid black;
	  border-bottom: 10px solid black;
	  border-left: 10px solid transparent;
	  border-right: 10px solid transparent;
	  border-radius: 100%;
	  -webkit-transform: rotate(45deg);
	          transform: rotate(45deg);
	}
	/* 小女孩的眼睛 */
	.wrapper .swing .human .top-part .head .eye {
	  position: absolute;
	  top: 6px; right: 2px;
	  width: 2px; height: 2px;
	  background: black;
	  border-radius: 100%;
	}
	/* 小女孩的嘴巴 */
	.wrapper .swing .human .top-part .head .mouth {
	  position: absolute;
	  top: 10px; right: 0px;
	  width: 0px; height: 0px;
	  border-top: 3px solid transparent;
	  border-bottom: 3px solid transparent;
	  border-left: 3px solid transparent;
	  border-right: 3px solid white;
	  border-radius: 100%;
	  -webkit-transform: rotate(28deg);
	          transform: rotate(28deg);
	}
	/* 小女孩的上身 */
	.wrapper .swing .human .top-part .body {
	  position: absolute;
	  bottom: 0px; left: 50%;
	  -webkit-transform: translateX(-50%);
	          transform: translateX(-50%);
	  background: #ee5130;
	  width: 20px; height: 40px;
	  border-top-left-radius: 20px;
	  border-top-right-radius: 20px;
	}
	/* 小女孩的双手 */
	.wrapper .swing .human .top-part .body .hand {
	  position: absolute;
	  top: 20%; left: 10%;
	}
	/* 小女孩的第一只手 */
	.wrapper .swing .human .top-part .body .hand .hand-one {
	  position: absolute;
	  -webkit-transform: rotate(30deg);
	          transform: rotate(30deg);
	  width: 5px; height: 15px;
	  background: #ee5130;
	  box-shadow: 0 -1px 0px 1px rgba(0, 0, 0, 0.2);
	  border-top-right-radius: 100%;
	  border-top-left-radius: 100%;
	}
	/* 小女孩的第二只手 */
	.wrapper .swing .human .top-part .body .hand .hand-two {
	  background: #d59e7b;
	  position: absolute;
	  top: 14px; left: -6px;
	  width: 4px; height: 15px;
	  -webkit-transform-origin: center top;
	          transform-origin: center top;
	  -webkit-transform: rotate(-60deg);
	          transform: rotate(-60deg);
	  border-top-left-radius: 15px;
	}
	/* 小女孩的腿上半部 */
	.wrapper .swing .human .leg-one {
	  position: absolute;
	  bottom: 0; left: 25%;
	  width: 100%; height: 10px;
	  background: #1973ad;
	  border-bottom-left-radius: 20px;
	  border-top-right-radius: 20px;
	  z-index: -1;
	}
	/* 小女孩的第腿下半部 */
	.wrapper .swing .human .leg-two {
	  position: absolute;
	  width: 90%; height: 10px;
	  bottom: 5px; right: -5px;
	  border-top-right-radius: 50%;
	  border-bottom-right-radius: 20px;
	  background: #1973ad;
	  -webkit-transform-origin: right center;
	          transform-origin: right center;
	  -webkit-transform: rotate(-90deg);
	          transform: rotate(-90deg);
	  -webkit-animation-name: leg-animation;
	          animation-name: leg-animation;
	  -webkit-animation-duration: 0.8s;
	          animation-duration: 0.8s;
	  -webkit-animation-iteration-count: infinite;
	          animation-iteration-count: infinite;
	  -webkit-animation-timing-function: ease-in-out;
	          animation-timing-function: ease-in-out;
	  -webkit-animation-direction: alternate;
	          animation-direction: alternate;
	}
	.wrapper .swing .human .leg-two:after {
	  content: "";
	  position: absolute;
	  background: silver;
	  left: -5px; top: -1px;
	  width: 5px; height: 18px;
	  border-top-left-radius: 3px;
	  border-bottom-right-radius: 50%;
	}
	/* 秋千索 */
	.wrapper .swing .swing-rod {
	  position: absolute;
	  width: 5px; height: 100%;
	  left: 50%;
	  -webkit-transform: translateX(-50%);
	          transform: translateX(-50%);
	  background: #323232;
	}
	/* 秋千板子 */
	.wrapper .swing .bottom {
	  position: absolute;
	  bottom: 0; left: 0;
	  width: 100%; height: 5px;
	  background: saddlebrown;
	}
	.wrapper .swing:nth-of-type(1) {
	  -webkit-animation-name: swing-1;
	          animation-name: swing-1;
	}
	.wrapper .swing:nth-of-type(4) {
	  -webkit-animation-name: swing-2;
	          animation-name: swing-2;
	}
	
	@-webkit-keyframes swing-1 {
	  from {
	    -webkit-transform: rotate(-35deg);
	            transform: rotate(-35deg);
	  }
	  to {
	    -webkit-transform: rotate(35deg);
	            transform: rotate(35deg);
	  }
	}
	
	@keyframes swing-1 {
	  from {
	    -webkit-transform: rotate(-35deg);
	            transform: rotate(-35deg);
	  }
	  to {
	    -webkit-transform: rotate(35deg);
	            transform: rotate(35deg);
	  }
	}
	@-webkit-keyframes body-animation {
	  from {
	    -webkit-transform: rotate(-25deg);
	            transform: rotate(-25deg);
	  }
	  to {
	    -webkit-transform: rotate(20deg);
	            transform: rotate(20deg);
	  }
	}
	@keyframes body-animation {
	  from {
	    -webkit-transform: rotate(-25deg);
	            transform: rotate(-25deg);
	  }
	  to {
	    -webkit-transform: rotate(20deg);
	            transform: rotate(20deg);
	  }
	}
	@-webkit-keyframes leg-animation {
	  from {
	    bottom: 2px;
	    right: -8px;
	    -webkit-transform: rotate(-55deg);
	            transform: rotate(-55deg);
	  }
	  to {
	    bottom: 2px;
	    right: 5px;
	    -webkit-transform: rotate(-170deg);
	            transform: rotate(-170deg);
	  }
	}
	@keyframes leg-animation {
	  from {
	    bottom: 2px;
	    right: -8px;
	    -webkit-transform: rotate(-55deg);
	            transform: rotate(-55deg);
	  }
	  to {
	    bottom: 2px;
	    right: 5px;
	    -webkit-transform: rotate(-170deg);
	            transform: rotate(-170deg);
	  }
	}
</style>
