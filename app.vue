<template>
  <div class="full">

    <div id="contain4">
      <div class="neon4">
        <div class="sign4">
         C a r o
        </div>
      </div>
    </div>

    <i class="fa fa-heart-o fa-2x lob" aria-hidden="true"></i>
    <i class="fa fa-heart-o fa-3x loc" aria-hidden="true"></i>


    <div id="container">
      <div class="neon-circle">
        <div class="sign-one">
          L O
        </div>
      </div>
    </div>



    <svg class="defs-only" xmlns="http://www.w3.org/2000/svg">

      <!-- ADD GRADIENT DEFS -->
      <filter id = "i11" width = "550%" height = "550%">
        <feOffset result = "offOut" in = "SourceGraphic" dx = "1" dy = "1"/>
        <feGaussianBlur result = "blurOut" in = "offOut" stdDeviation = "2"/>
        <feBlend in = "SourceGraphic" in2 = "blurOut" mode = "normal"/>


        <feSpecularLighting in="blurOut" surfaceScale="20" specularConstant=".05" specularExponent="8" lighting-color="#bbbbbb" result="specOut">
          <fePointLight x="5000" y="10000" z="2000" />

        </feSpecularLighting>
        <feComposite in="specOut" in2="offOut" operator="in" result="specOut" />
        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="20" k2="2" k3="2" k4="0" result="litPaint" />
        <feMerge>
          <feMergeNode in="offOut" />
          <feMergeNode in="litPaint" />

        </feMerge>


      </filter>

      <linearGradient id="coin">
        <stop offset="0%" stop-color="#fefe80" />
        <stop offset="50%" stop-color="#fe80be" />
        <stop offset="65%" stop-color="#80befe" />
        <stop offset="90%" stop-color="#d82801" />
      </linearGradient>


      <radialGradient id="pot" fx="30%" fy="35%">
        <stop stop-color="white" offset="0%" />
        <stop stop-color="gold" offset="15%" />
        <stop stop-color="goldenrod" offset="80%" />
        <stop stop-color="darkgoldenrod" offset="100%" />
      </radialGradient>


      <symbol id="potofgold" >
        <g fill="url(#coin)" stroke="darkgoldenrod" stroke-width="0.5">

          <path fill="none" stroke="url(#coin)" stroke-width="4" filter = "url(#i11)"
                d="M39,43 L77,43 Q86,36,74,31 Q77,22,68,20 Q70,5,54,9 Q59,9,55,12 Q61,16,50,18 Q58,25,65,22 Q58,25,52,19 Q39,21,43,29 Q51,34,65,33 Q51,34,43,28 Q30,35,39,43" transform="translate(-20,-5)"
          />
        </g>


        <path fill="none" stroke="#d82801" stroke-width="2" filter = "url(#i11)"
              d="M41,6 L75,6 L58,39 L42,6" transform="translate(-20,35)"
        />
      </symbol>
    </svg>
    <figure>

      <div>
        <div class="scaling-svg-container"
        >
          <svg class="scaling-svg" viewBox="0 0 100 115" >
            <use xlink:href="#potofgold"/>
          </svg>
        </div>
      </div>
    </figure>


    <div id="contain2">
      <div class="neon2">
        <div class="sign2">
          V
        </div>
      </div>
    </div>



    <div id="contain3">
      <div class="neon3">
        <div class="sign3">
          E
        </div>
      </div>
    </div>



  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Londrina+Outline');

@import url('//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css');

@font-face {
  font-family: clipneon;
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/clip.ttf);
}

@font-face {
  font-family: lasenter;
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/lasenter.ttf);
}

html,
body {
  background-color: black;

}



#contain4 {
  float:left;
  width: 140px;
  margin-left: 120px;
  margin-top: 245px;
  text-align: center;
}

.neon4 {

  -webkit-transform: matrix3d(0.77,0,-0.64,-.001,0.00,1,0.00,0,0.64,0,0.77,0,0,0,0,1);

  margin-left: 900px;
  transform: matrix3d(0.97,0.15,0.14,0.0021,-0.05,1,0.00,0,-0.14,0,0.7,0,0,0,0,1);
  width: 180px;
}

.sign4 {

  padding-top: 0.5vw;
  padding-right: 25px;
  font-family: Arial, sans-serif;
  font-size: 40px;
  line-height: 0.5vw;
  text-shadow:
      .1vw 0vw .25vw #d82801, .2vw 0vw .25vw #d82801 , .4vw 0vw .25vw #d82801 ,
      .1vw 0vw .1vw #d82801 , .2vw 0vw 0vw #d82801 , .4vw 0vw 0vw #d82801 ,
      .1vw 0vw .1vw #d82801 , .2vw 0vw .1vw #d82801 , .4vw 0vw 0vw #d82801 ,
      .1vw 0vw .8vw #d82801 , .2vw 0vw .8vw #d82801 , .4vw 0vw .8vw #d82801 , .2vw 0vw .5vw #d82801 ,
      .1vw 0vw .5vw #d82801 , .2vw 0vw .5vw #d82801 , .4vw 0vw .5vw #d82801 ,
      .1vw 0vw 1vw #d82801 , .2vw 0vw 1vw #d82801 , .4vw 0vw 10vw #d82801 ;
  color: red;

}


.lob {
  color: #d82801;
  text-shadow:
      -.1vw 0vw .25vw #d82801, -.2vw 0vw .25vw #d82801, -.4vw 0vw .25vw #d82801,
      -.1vw 0vw 1vw #E82FF5, -.2vw 0vw .8vw #E82FF5, -.4vw 0vw .8vw #E82FF5, .2vw 0vw .5vw #E82FF5,
      -.1vw 0vw 10vw #d82801, -.2vw 0vw 10vw #d82801, -.4vw 0vw 10vw #CB16FA;
  width: 20px;
  margin-left: -90px;
  margin-top: 240px;
}

.loc {
  color: #d82801;
  text-shadow:
      -.1vw 0vw .25vw #d82801, -.2vw 0vw .25vw #d82801, -.4vw 0vw .25vw #d82801,
      -.1vw 0vw 1vw #E82FF5, -.2vw 0vw .8vw #E82FF5, -.4vw 0vw .8vw #E82FF5, .2vw 0vw .5vw #d82801,
      -.1vw 0vw 10vw #d82801, -.2vw 0vw 10vw #d82801, -.4vw 0vw 10vw #CB16FA;
  width: 40px;
  margin-left: -80px;
  margin-top: 200px;
}


#container {
  display: inline-block;
  float:left;
  width: 200px;
  margin-left: 300px;
  margin-top: 300px;
  text-align: center;

}

.neon-circle {
  -moz-box-shadow: 0px 0px 0px 8px rgba(254,208,40,1), 0px 0px 8px 10px rgba(240,19,11,1), inset 0px 0px 8px 4px rgba(240,19,11,1), 0px 0px 98px 8px rgba(250,29,22,1), inset 0px 0px 98px 8px rgba(250,29,22,1);
  -webkit-box-shadow: 0px 0px 0px 8px rgba(254,208,40,1), 0px 0px 8px 10px rgba(240,19,11,1), inset 0px 0px 8px 4px rgba(240,19,11,1), 0px 0px 98px 8px rgba(250,29,22,1), inset 0px 0px 98px 8px rgba(250,29,22,1);
  -webkit-transform: matrix3d(0.77,0,-0.64,-.001,0.00,1,0.00,0,0.64,0,0.77,0,0,0,0,1);
  box-shadow: 0px 0px 0px 8px rgba(254,208,40,1), 0px 0px 8px 10px rgba(240,19,11,1), inset 0px 0px 8px 4px rgba(240,19,11,1), 0px 0px 98px 8px rgba(250,29,22,1), inset 0px 0px 98px 8px rgba(250,29,22,1);
  height: 200PX;
  transform: matrix3d( 0.835032221021445,	-0.17759588179158062,	0,	0.00027400087186583733,
  0.00097868140033975,	0.9705173267921544,	0,	-0.00020402674390877348,
  0,	0,	. ,	0,
  0,	0,	0,	1
  );
  width: 300px;
}

.sign-one {

  padding-top: 3.5vw;
  padding-right: 10px;
  font-family: 'Londrina Outline', sans-serif;
  font-size: 200px;
  line-height: 4vw;
  text-shadow:
      .1vw 0vw .25vw #d82801, .2vw 0vw .25vw #d82801 , .4vw 0vw .25vw #d82801 ,
      .1vw 0vw .1vw #d82801 , .2vw 0vw 0vw #d82801 , .4vw 0vw 0vw #d82801 ,
      .1vw 0vw .1vw #d82801 , .2vw 0vw .1vw #d82801 , .4vw 0vw 0vw #d82801 ,
      .1vw 0vw .8vw #d82801 , .2vw 0vw .8vw #d82801 , .4vw 0vw .8vw #d82801 , .2vw 0vw .5vw #d82801 ,
      .1vw 0vw .5vw #d82801 , .2vw 0vw .5vw #d82801 , .4vw 0vw .5vw #d82801 ,
      .1vw 0vw 10vw #d82801 , .2vw 0vw 10vw #d82801 , .4vw 0vw 10vw #d82801 ;
  color: red;

}


/* Example-specific styles */
.scaling-svg-container {
  border: 1px hidden #000;

  position: relative;
  height:0;
  float:left;
  width: 20px;
  max-height: 190px;
  margin-left: 10px;
  width: 300px;
  padding: 0;
  padding-bottom: 100px;
  /* over-ride this inline for aspect ratio other than square */
}
.scaling-svg {
  position: absolute;
  height: 390px;
  float:left;
  width: 00px;
  margin-left: 0px;
  width: 390px;
  left: -5px;
  top:00px;
}



#contain2 {
  float:left;
  width: 0px;
  margin-left: -260px;
  margin-top: 0px;

  text-align: center;
}

.neon2 {
  -moz-box-shadow: 0px 0px 0px 8px rgba(254,208,40,1), 0px 0px 8px 10px rgba(240,19,11,1), inset 0px 0px 8px 4px rgba(240,19,11,1), 0px 0px 98px 8px rgba(250,29,22,1), inset 0px 0px 98px 8px rgba(250,29,22,1);
  -webkit-box-shadow: 0px 0px 0px 8px rgba(254,208,40,1), 0px 0px 8px 10px rgba(240,19,11,1), inset 0px 0px 8px 4px rgba(240,19,11,1), 0px 0px 98px 8px rgba(250,29,22,1), inset 0px 0px 98px 8px rgba(250,29,22,1);
  -webkit-transform: matrix3d(0.77,0,-0.64,-.001,0.00,1,0.00,0,0.64,0,0.77,0,0,0,0,1);
  box-shadow: 0px 0px 0px 8px rgba(254,208,40,1), 0px 0px 8px 10px rgba(240,19,11,1), inset 0px 0px 8px 4px rgba(240,19,11,1), 0px 0px 98px 8px rgba(250,29,22,1), inset 0px 0px 98px 8px rgba(250,29,22,1);
  height: 200PX;
  margin-left: 200px;
  transform: matrix3d(0.97,0,0.64,.001,0.00,1,0.00,0,-0.64,0,0.77,0,0,0,0,1);
  width: 150px;
}

.sign2 {
  padding-top: 3.5vw;
  padding-right: 10px;
  font-family: 'Londrina Outline', sans-serif;
  font-size: 200px;
  line-height: 4vw;
  text-shadow:
      .1vw 0vw .25vw #d82801, .2vw 0vw .25vw #d82801 , .4vw 0vw .25vw #d82801 ,
      .1vw 0vw .1vw #d82801 , .2vw 0vw 0vw #d82801 , .4vw 0vw 0vw #d82801 ,
      .1vw 0vw .1vw #d82801 , .2vw 0vw .1vw #d82801 , .4vw 0vw 0vw #d82801 ,
      .1vw 0vw .8vw #d82801 , .2vw 0vw .8vw #d82801 , .4vw 0vw .8vw #d82801 , .2vw 0vw .5vw #d82801 ,
      .1vw 0vw .5vw #d82801 , .2vw 0vw .5vw #d82801 , .4vw 0vw .5vw #d82801 ,
      .1vw 0vw 10vw #d82801 , .2vw 0vw 10vw #d82801 , .4vw 0vw 10vw #d82801 ;
  color: red;

}





#contain3 {
  float:left;
  width: 0px;
  margin-left: 100px;
  margin-top: 10px;

  text-align: center;
}


.neon3 {
  -moz-box-shadow: 0px 0px 0px 8px rgba(254,208,40,1), 0px 0px 8px 10px rgba(240,19,11,1), inset 0px 0px 8px 4px rgba(240,19,11,1), 0px 0px 98px 8px rgba(250,29,22,1), inset 0px 0px 98px 8px rgba(250,29,22,1);
  -webkit-box-shadow: 0px 0px 0px 8px rgba(254,208,40,1), 0px 0px 8px 10px rgba(240,19,11,1), inset 0px 0px 8px 4px rgba(240,19,11,1), 0px 0px 98px 8px rgba(250,29,22,1), inset 0px 0px 98px 8px rgba(250,29,22,1);
  -webkit-transform: matrix3d(0.77,0,-0.64,-.001,0.00,1,0.00,0,0.64,0,0.77,0,0,0,0,1);
  box-shadow: 0px 0px 0px 8px rgba(254,208,40,1), 0px 0px 8px 10px rgba(240,19,11,1), inset 0px 0px 8px 4px rgba(240,19,11,1), 0px 0px 98px 8px rgba(250,29,22,1), inset 0px 0px 98px 8px rgba(250,29,22,1);
  height: 180PX;
  margin-left: 30px;
  transform: matrix3d(1.27,-0.01,0.14,0.001,0.00,1,0.00,0,-0.64,0,0.77,0,0,0,0,1);
  width: 110px;
}

.sign3 {
  padding-top: 4.5vw;
  padding-right: 10px;
  font-family: 'Londrina Outline', sans-serif;
  font-size: 180px;
  line-height: 0.5vw;
  text-shadow:
      .1vw 0vw .25vw #d82801, .2vw 0vw .25vw #d82801 , .4vw 0vw .25vw #d82801 ,
      .1vw 0vw .1vw #d82801 , .2vw 0vw 0vw #d82801 , .4vw 0vw 0vw #d82801 ,
      .1vw 0vw .1vw #d82801 , .2vw 0vw .1vw #d82801 , .4vw 0vw 0vw #d82801 ,
      .1vw 0vw .8vw #d82801 , .2vw 0vw .8vw #d82801 , .4vw 0vw .8vw #d82801 , .2vw 0vw .5vw #d82801 ,
      .1vw 0vw .5vw #d82801 , .2vw 0vw .5vw #d82801 , .4vw 0vw .5vw #d82801 ,
      .1vw 0vw 10vw #d82801 , .2vw 0vw 10vw #d82801 , .4vw 0vw 10vw #d82801 ;
  color: red;

}



.fa-heart-o {
  animation: heart 1s 0s ease infinite;
  -moz-animation: heart 1s 0s ease infinite;
  /* Firefox */
  -webkit-animation: heart 1s 0s ease infinite;
  /* Safari and Chrome */
  -o-animation: heart 1s 0s ease infinite;
  /* Opera */
}

@keyframes heart {
  0%,
  100% {
    text-shadow:
        -.1vw 0vw .1vw #FBB4FF, -.15vw 0vw .2vw #FBB4FF, -.2vw 0vw .2vw #d82801,
        -.1vw 0vw 3vw #FBB4FF, -.2vw 0vw 3vw #FBB4FF, -.4vw 0vw 3vw #FBB4FF,
        -.1vw 0vw 5vw #FBB4FF, -.2vw 0vw 5vw #FBB4FF, -.4vw 0vw .8vw #FBB4FF, .2vw 0vw 10vw #d82801;
    color: #FBB4FF;
  }
  50% {
    text-shadow:
        -.1vw 0vw .1vw #d82801, -.15vw 0vw .2vw #d82801, -.2vw 0vw .2vw #d82801,
        -.1vw 0vw .1vw #d82801, -.2vw 0vw .1vw #d82801, -.4vw 0vw .1vw #d82801,
        -.1vw 0vw .2vw #d82801, -.2vw 0vw .2vw #d82801, -.4vw 0vw .2vw #d82801, .2vw 0vw .5vw #d82801;
    color: #FBB4FF;
  }
}


.sign4 {
  animation: make .1s ease infinite;
  -moz-animation: make .1s ease infinite;
  /* Firefox */
  -webkit-animation: make .1s ease infinite;
  /* Safari and Chrome */
  -o-animation: make .1s ease infinite;
  /* Opera */
}

@keyframes make {
  0%,
  100% {
    /* Enable hardware acceleration to fix laggy transitions */
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    color: #d82801;
    text-shadow:
        -.1vw 0vw .25vw #d82801, -.2vw 0vw .25vw #d82801, -.4vw 0vw .25vw #d82801,
        -.1vw 0vw 1vw #d82801, -.2vw 0vw .8vw #d82801, -.4vw 0vw .8vw #d82801, .2vw 0vw .5vw #d82801,
        -.1vw 0vw 10vw #d82801, -.2vw 0vw 10vw #d82801, -.4vw 0vw 10vw #d82801;
  }
  50% {
    /* Enable hardware acceleration to fix laggy transitions */
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    color: #d82801;
    text-shadow:
        -.1vw 0vw .25vw #d82801, -.2vw 0vw .25vw #d82801, -.4vw 0vw .25vw #d82801,
        -.1vw 0vw .8vw #d82801, -.2vw 0vw .8vw #d82801, -.4vw 0vw .8vw #d82801, .2vw 0vw .5vw #d82801,
        -.1vw 0vw 3vw #d82801, -.2vw 0vw 3vw #d82801, -.4vw 0vw 3vw #d82801;
  }
}

</style>