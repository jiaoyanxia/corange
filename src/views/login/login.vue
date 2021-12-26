<template>
  <div>
<<<<<<< HEAD
    <h1>login 登录</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>



</style>
=======
      <!-- 登录界面 -->
      <section>
        <!-- 背景颜色 -->
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="box">
          <!-- 背景圆 -->
          <div class="circle" style="--x:0"></div>
          <div class="circle" style="--x:1"></div>
          <div class="circle" style="--x:2"></div>
          <div class="circle" style="--x:3"></div>
          <div class="circle" style="--x:4"></div>
          <!-- nav -->
          <div class="container">
            <div class="nav_left">
              <!-- 左边svg -->
              <img src="@/assets/ll.svg" alt="">
            </div>
            <div class="nav_right">
              <!-- 登录组件 -->
              <div v-if="flag">
              <fromDate @fromChild='getChild' />
              </div>
              <div v-else>
                <regDate />
              </div>
            </div>
           

          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import fromDate from '@/components/from.vue'
import regDate from '@/components/reg.vue'
export default {
  components:{
    fromDate,
    regDate,
  },
  data(){
    return {
      // 控制 是否是 注册页的 flag 
      flag:true,
    }
  },
  methods:{
    getChild(v){
      this.flag = v;
    }
  }



};
</script>



<style lang='less'>
/* 清除浏览器默认边距，
使边框和内边距的值包含在元素的width和height内 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 使用flex布局，让内容垂直和水平居中 */

section {
  /* 相对定位 */
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* linear-gradient() 函数用于创建一个表示两种或多种颜色线性渐变的图片 */
  background: linear-gradient(to bottom, #f1f4f9, #dff1ff);
}

/* 背景颜色 */

section .color {
  /* 绝对定位 */
  position: absolute;
  /* 使用filter(滤镜) 属性，给图像设置高斯模糊*/
  filter: blur(200px);
}

/* :nth-child(n) 选择器匹配父元素中的第 n 个子元素 */

section .color:nth-child(1) {
  top: -350px;
  width: 600px;
  height: 600px;
  background: #ff359b;
}

section .color:nth-child(2) {
  bottom: -150px;
  left: 100px;
  width: 500px;
  height: 500px;
  background: #fffd87;
}

section .color:nth-child(3) {
  bottom: 50px;
  right: 100px;
  width: 500px;
  height: 500px;
  background: #00d2ff;
}

.box {
  position: relative;
}

/* 背景圆样式 */

.box .circle {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  /* backdrop-filter属性为一个元素后面区域添加模糊效果 */
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  /* 使用filter(滤镜) 属性，改变颜色。
    hue-rotate(deg)  给图像应用色相旋转
    calc() 函数用于动态计算长度值
    var() 函数调用自定义的CSS属性值x*/
  filter: hue-rotate(calc(var(--x) * 70deg));
  /* 调用动画animate，需要10s完成动画，
    linear表示动画从头到尾的速度是相同的，
    infinite指定动画应该循环播放无限次*/
  animation: animate 10s linear infinite;
  /* 动态计算动画延迟几秒播放 */
  animation-delay: calc(var(--x) * -1s);
}

/* 背景圆动画 */

@keyframes animate {
  0%,
  100% {
    transform: translateY(-50px);
  }

  50% {
    transform: translateY(50px);
  }
}

.box .circle:nth-child(1) {
  top: -50px;
  right: -60px;
  width: 100px;
  height: 100px;
}

.box .circle:nth-child(2) {
  top: 150px;
  left: -100px;
  width: 120px;
  height: 120px;
  z-index: 2;
}

.box .circle:nth-child(3) {
  bottom: 50px;
  right: -60px;
  width: 80px;
  height: 80px;
  z-index: 2;
}

.box .circle:nth-child(4) {
  bottom: -80px;
  left: 100px;
  width: 60px;
  height: 60px;
}

.box .circle:nth-child(5) {
  top: -80px;
  left: 140px;
  width: 60px;
  height: 60px;
}

/* 登录框样式 */

.container {
  position: relative;
  width: 800px;
  min-height: 500px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.nav_left {
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
	font-size: 10vw;
	color: #03a9f4;
	margin: 10px;
}

.z-text {
	transform: rotateX(30deg) rotateY(-30deg);
	transition: transform 1s;
}

[data-z]:hover .z-text {
	transform: rotateX(-30deg) rotateY(30deg);
}

.z-layer:not(:first-child) {
	color: #027fb7;
}
}

.nav_right {
  width: 400px;
  height: 400px;
  // background: yellow;
}
</style>
>>>>>>> master
