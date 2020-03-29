<template>
  <div>

		<div class="landing">
			<el-image class="displayNone"
			 :src="profile.img" fit="cover">
				 <div slot="placeholder">
					 <h4 class="slottext">Loading...</h4>
				 </div>
			</el-image>

			<div class="LPtext">
				<h1 class="topleft">Hi. </h1>
				<h1 class="left">{{profile.tagLine}}</h1>

				<h1 class="displayNone"> Hi there. {{profile.tagLine}}</h1>
				<h3 class="right">{{profile.bio}}</h3>
			</div>

		</div>
		<div class="bottom">
				<div class="loop_wrap">
					<div class="wave1"></div>
					<!--	<img class="wave1" :src="loop.wave1">
		<img class="wave2" :src="loop.wave2">
					<img class="wave3" :src="loop.wave3">-->
				</div>
		</div>

  </div>
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {
			profile:{
        tagLine:"I'm Marin Iida.",
        bio:"An aspiring UI/UX designer based in Japan.",
        img: require("../assets/landing.jpg"),
      },
			loop:{
				wave1:require("../assets/wave1.png"),
				wave2:require("../assets/wave2.png"),
				wave3:require("../assets/wave3.png"),
			}
    }
  }
}
</script>

<style scoped>

@media screen and (max-width:666px) {
  /*画面幅が762pxまでの時*/
	.displayNone {
		display: none;
	}

	.landing {
		background-image: url("../assets/landing.jpg");
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 90vh;
		position: relative;
	}

	.LPtext {
		color: white;
	}


	.LPtext .topleft {
		position: absolute;
		font-size: 8rem;
		left: 5px;
		top: 0%;
	}

	.LPtext .left {
		position: absolute;
		left: 10px;
		top: 12%;
	}

	.LPtext .right {
		position: absolute;
		text-align: right;
		top: 40%;
		right: 10px;
		width: 80%;
	}
}

@media screen and (min-width:667px) {
  /*画面幅が667px以上の時*/
	.landing {
		display: flex;
		padding: 60px 40px;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.el-image {
		width: 35%;
		height: auto;
	}

	.LPtext {
		padding: 20px;
		width: 35%;
	}

	.topleft, .left {
		display: none;
	}
}



.bottom{
	position: fixed;
	bottom: 0;
	width: 100vw;
	height: 100px;
}

.wave1, .wave2, .wave3 {
	position: absolute;
	bottom: -100px ;
	left: 0px;
}
.wave1{
	left: 30px;
}

.wave2{
	left: 60px;
}

.wave3{
	left: -60px;
}


.loop_wrap {
	position: relative;

}
.wave1{
	-webkit-animation: bgroop 20s linear infinite;
	animation: bgroop 20s linear infinite;
	background-image: url("../assets/wave1.png");
	background-repeat: repeat-x;
	height: 100px;
}

@-webkit-keyframes bgroop {
    from {
        background-position: 0  0;
    }
    to {
        background-position: -1956px 0;
    }
}
@keyframes bgroop {
    from {
        background-position: 0 0;
    }
    to {
        background-position: -1956px 0;
    }
}

</style>
