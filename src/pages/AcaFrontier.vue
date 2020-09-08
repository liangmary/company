<template>
  <div id="app">

    <div class="navTop">
      <ul>
        <li><router-link to="./pcIndex"><img src="../../static/img/logo/logo1.png" alt=""><br/>你的网络帝国缔造者</router-link></li>
        <li><router-link to="./CompanyProduct">企业简介<br/>introduction</router-link></li>
        <li><router-link to="./NewsInfo">新闻动态<br/>News</router-link></li>
        <li><router-link to="./AcaFrontier" style="color: #be0900">学术前沿<br/>frontier</router-link></li>
        <li><router-link to="./SuccessCase">成功案例<br/>cases</router-link></li>
        <li><router-link to="./MainBusiness">主营业务<br/>services</router-link></li>
        <li><router-link to="./ContactUs">联系我们<br/>Contact us</router-link></li>
      </ul>
    </div>
    <div class="backTop"><img src="../../static/img/acaFrontier/font.png" alt=""></div>
    <div style="padding-left: 110px;padding-right: 100px;margin-top: -100px">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(value,index) in tab" :key="index" :class="{active:value.isactive,'swiper-slide':true}"><a
          @click="change(index)" class="slider-img" :style="{backgroundImage: 'url(' + value.backImg + ')'}">{{value.title}}</a></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="tabs">
      <div v-for="(value,index) in tab" class="tab" :class="{active:value.isactive}">
        <div style="margin-top: 87px">
          <div class="chineseTit">{{value.title}}</div>
          <div class="englishTitle">{{value.enTitle}}</div>
        </div>
        <div v-if="index===0" style="margin: 0 auto;width: 1300px">
          <div v-for="(item) in value.soft">
            <router-link class="businessItem" to="./AcaFrontierDetail">
              <img :src="item.imgSrc" alt="" class="leftImg">
              <div class="rightCont">
                <div class="tit">
                  <div><img src="../../static/img/mainBusiness/tan.png" alt="">{{item.titleCont}}</div>
                  <img src="../../static/img/mainBusiness/rightIcon.png" alt="">
                </div>
                <div class="time-read">
                  <span>发布时间：{{item.time}}</span><span>阅读量：{{item.readCount}}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div v-else>
          <img :src="value.img" alt="" style="width: 100%">
        </div>
      </div>
    </div>
    <div class="footerBack">
      <div>
        <div class="iconDev"><img src="../../static/img/icon/icon1.png" alt="">0431-81855275</div>
        <div class="iconDev"><img src="../../static/img/icon/icon2.png" alt="">吉林省长春市二道区浦东路虹湾国际B座</div>
        <div class="iconDev"><img src="../../static/img/icon/icon3.png" alt="">704882410@qq.com</div>
      </div>
      <div style="width: 674px">
        <div class="inputDiv">
          <input type="text" placeholder="请留下您的邮箱获取更多资料" class="emailInput">
          <button>SEND</button>
        </div>
        <div class="company">吉林省二十八星网络科技有限公司<span style="color: #ff7a0e;">吉ICP备15007973号</span></div>
      </div>
      <img src="../../static/img/icon/qrCode.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AcaFrontier',
    data(){
      return {
        tab: [
          {title: '学术前沿',enTitle: 'Academic frontier', img: '../../static/img/acaFrontier/main11.jpg',
            backImg: '../../static/img/acaFrontier/tab1.png', isactive: true,
            soft:[
              {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'定制软件开发？',time:'2020.9.16',readCount:'6666'},
              {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
              {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
            ]},
          {title: '领先优势',enTitle: 'Leading edge', img: '../../static/img/acaFrontier/main2.jpg',
            backImg: '../../static/img/acaFrontier/tab2.png', isactive: false},
          {title: '权威团队',enTitle: 'Authoritative team', img: '../../static/img/acaFrontier/main3.jpg',
            backImg: '../../static/img/acaFrontier/tab3.png', isactive: false},
          {title: '荣誉资质',enTitle: 'Authoritative team', img: '../../static/img/acaFrontier/main3.jpg',
            backImg: '../../static/img/acaFrontier/tab3.png', isactive: false}
        ],
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          direction: 'horizontal',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    methods: {
      change(index){
        this.tab.forEach(function(v){
          v.isactive=false
        });
        this.tab[index].isactive=true
      }
    }
  }
</script>

<style>

  .backTop{background: url('../../static/img/acaFrontier/acBack.jpg');background-size: 100% 700px;height: 700px;
    display: flex;flex-direction: row;align-items: center;justify-content: center}
  .slider-img{width: 540px;height: 264px;display: flex;flex-direction: row;align-items: center;justify-content: center;font-size: 44px;color: #ffffff}
  .swiper-slide{cursor: pointer}
  .swiper-button-prev{background: url("../../static/img/mainBusiness/left.png") no-repeat;height: 62px;width: 62px;}
  .swiper-button-next{background: url("../../static/img/mainBusiness/right.png") no-repeat;height: 62px;width: 62px;}

  .businessItem{display: flex;flex-direction: row;justify-content: space-between;border-bottom: 5px solid #a8b3c4;
    width: 1300px;padding-top: 48px;padding-bottom: 30px}
  .businessItem .leftImg{margin-right: 20px}
  .businessItem .rightCont{display: flex;flex-direction: column;justify-content: space-around;width: 900px}
  .businessItem .tit{font-size: 60px;color: #26406c;display: flex;flex-direction: row;justify-content: space-between;align-items: center}
  .businessItem .time-read{display: flex;flex-direction: row;justify-content: space-between;font-size: 32px}
  .tabs .tab{display: none;}
  .tabs .tab.active{display:block;}
  .chineseTit{color: #041b39;font-size: 70px;font-weight: bold;z-index: 10;letter-spacing:-3px}
  .englishTitle{color: #bfbfbf;font-size: 83px;font-family: 'ZH55-LYBook';text-transform:Uppercase;opacity: 0.22;margin-top: -50px}
</style>
