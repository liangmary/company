<template>
  <div>
    <div class="navTop">
      <img src="../../static/img/index/tabIndex.png" alt="" @click="showCont">
      <div class="font">28星网络科技</div>
    </div>
    <div class="rightNav" v-if="show">
      <ul class="tab-nav">
        <li v-for="(i,index) in navList" :key="index">
          <router-link class="nav" @click="openNav(index)" :to="i.linkName">
            <i class="el-icon-s-home"></i>
            <span>{{i.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="backTop">
      <img src="../../static/img/mainBusiness/font.png" alt="">
    </div>
    <div style="margin-top: -40px">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(value,index) in tab" :key="index" :class="{active:value.isactive,'swiper-slide':true}"><a
          @click="change(index)" class="slider-img" :style="{backgroundImage: 'url(' + value.backImg + ')'}">{{value.title}}</a></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>


    <div class="tabs">
      <div v-for="(value) in tab" class="tab" :class="{active:value.isactive}">
        <div style="margin-top: 87px">
          <div class="chineseTitMobile">{{value.title}}</div>
          <div class="englishTitleMobile">{{value.enTit}}</div>
        </div>
        <div class="businessCont">
          <div v-for="(item) in value.soft">
            <router-link class="listMobile" to="./AcaFrontierDetail">
              <img :src="item.imgSrc" alt="" class="leftImg">
              <div class="rightCont">
                <div class="tit">
                  <div><img src="../../static/img/mainBusiness/tan.png" alt="" class="tan">{{item.titleCont}}</div>
                  <img src="../../static/img/mainBusiness/rightIcon.png" alt="" class="rightIcon">
                </div>
                <div class="time-read">
                  <span>发布时间：{{item.time}}</span><span>阅读量：{{item.readCount}}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="footerBackMobile">
      <div class="inputDiv">
        <input type="text" placeholder="请留下您的邮箱获取更多资料" class="emailInput">
        <button>SEND</button>
      </div>
      <!--<div class="company">吉林省二十八星网络科技有限公司<span style="color: #ff7a0e;">吉ICP备15007973号</span></div>-->
      <div style="display: flex;flex-direction: row">
        <img src="../../static/img/icon/qrCode.png" alt="" class="qrCode">
        <div>
          <div class="iconDev"><img src="../../static/img/icon/icon1.png" alt="">0431-81855275</div>
          <div class="iconDev"><img src="../../static/img/icon/icon2.png" alt="">吉林省长春市二道区浦东路虹湾国际B座</div>
          <div class="iconDev"><img src="../../static/img/icon/icon3.png" alt="">704882410@qq.com</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CompanyProduct",
      data(){
          return {
            tab: [
              {title: '定制软件开发',enTit:'CustomSoftware', backImg: '../../static/img/mainBusiness/slider1.png', isactive: true,
                soft:[
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'定制软件开发？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                ]
              },
              {title: 'APP开发',enTit:'Application', backImg: '../../static/img/mainBusiness/slider2.png', isactive: false,
                soft:[
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'APP开发？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                ]},
              {title: '小程序开发',enTit:'Small program', backImg: '../../static/img/mainBusiness/slider3.png', isactive: false,
                soft:[
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'小程序开发？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                ]},
              {title: '商城开发',enTit:'Mall development', backImg: '../../static/img/mainBusiness/slider4.png', isactive: false,
                soft:[
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'商城开发？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                ]},
              {title: '直播平台开发',enTit:'live platform', backImg: '../../static/img/mainBusiness/slider5.png', isactive: false,
                soft:[
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'直播平台开发？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                ]},
              {title: '品牌官网开发',enTit:'Website development', backImg: '../../static/img/mainBusiness/slider6.png', isactive: false,
                soft:[
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'品牌官网开发？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                ]},
              {title: '微信端平台开发',enTit:'WeChat platform', backImg: '../../static/img/mainBusiness/slider7.png', isactive: false,
              soft:[
                {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'微信端平台开发？',time:'2020.9.16',readCount:'6666'},
                {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
              ]},
              {title: '管理系统开发',enTit:'Management system', backImg: '../../static/img/mainBusiness/slider8.png', isactive: false,
                soft:[
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'管理系统开发？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                ]},
              {title: '电商代运营',enTit:'Electric dynasty', backImg: '../../static/img/mainBusiness/slider9.png', isactive: false,
                soft:[
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'商城开发？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                ]},
              {title: '电商培训',enTit:'Electrical business', backImg: '../../static/img/mainBusiness/slider10.png', isactive: false,
                soft:[
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'电商培训？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
              ]},
              {title: '品牌策划',enTit:'Brand planning', backImg: '../../static/img/mainBusiness/slider11.png', isactive: false,
                soft:[
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'品牌策划？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
              ]},
              {title: '全网营销获客',enTit:'Marketing', backImg: '../../static/img/mainBusiness/slider12.png', isactive: false,
                soft:[
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'全网营销获客？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
                  {imgSrc:'../../static/img/mainBusiness/leftImg.png',titleCont:'本地w做软件谁家价格最低？',time:'2020.9.16',readCount:'6666'},
              ]},
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

<style scoped>
  .backTop{background: url('../../static/img/mainBusiness/main_back.png');background-size: 100% 400px;height: 400px;
    display: flex;flex-direction: row;align-items: center;justify-content: center}
  .backTop img{width: 77%;height: auto}
  .tabs .tab{display: none;}
  .tabs .tab.active{display:block;}

  .slider-img{width: 26vw;height: 13vw;display: flex;flex-direction: row;align-items: center;justify-content: center;
    font-size: 18px;color: #ffffff;}
  .swiper-slide{cursor: pointer}
  .swiper-button-prev{background: url("../../static/img/mainBusiness/left.png") no-repeat;height: 28px;width: 15px;background-size: 15px 28px}
  .swiper-button-next{background: url("../../static/img/mainBusiness/right.png") no-repeat;height: 28px;width: 15px;background-size: 15px 28px}
  .businessCont{display: flex;flex-direction: column;align-items: center}
</style>
