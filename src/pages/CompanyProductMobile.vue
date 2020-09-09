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
      <img src="../../static/img/companyProduct/font.png" alt="">
    </div>
    <div style="width: 100vw;margin-top: -30px">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(value,index) in tab" :key="index" :class="{active:value.isactive,'swiper-slide':true}"><a
          @click="change(index)" class="slider-img" :style="{backgroundImage: 'url(' + value.backImg + ')'}">{{value.title}}</a></swiper-slide>
      </swiper>
    </div>

    <div class="tabs">
      <div v-for="(value,index) in tab" class="tab" :class="{active:value.isactive}">
        <div style="margin-top: 40px">
          <div class="chineseTit">{{value.title}}</div>
          <div class="englishTitle">{{value.entitle}}</div>
        </div>
        <img :src="value.img" alt="" style="width: 100%">
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
          show:false,
          navList: [
            {title: "首页", name: "home",linkName: "MIndex",},
            {title: "企业简介", name: "CompanyProfile",linkName: "CompanyProductMobile",},
            {title: "新闻动态", name: "NewsInfo",linkName: "NewsInfoMobile",},
            {title: "学术前言", name: "AcademicPreface",linkName: "AcaFrontierMobile",},
            {title: "成功案例", name: "SuccessCase",linkName: "SuccessCase",},
            {title: "主营业务", name: "MainBusiness",linkName: "MainBusiness",},
            {title: "联系我们", name: "AboutUs",linkName: "ContactUs",},
          ],
          tab: [{
            title: '公司简介',
            entitle: 'Company',
            backImg: '../../static/img/companyProduct/comp1.png',
            img: '../../static/img/companyProduct/comProduct.jpg',
            isactive: true
          }, {
            title: '文化理念',
            entitle: 'Cultural',
            backImg: '../../static/img/companyProduct/comp2.png',
            img: '../../static/img/companyProduct/comProduct.jpg',
            isactive: false
          }, {
            title: '历史沿革',
            entitle: 'Historical',
            backImg: '../../static/img/companyProduct/comp3.png',
            img: '../../static/img/companyProduct/comProduct.jpg',
            isactive: false
          }],
          swiperOption: {
            slidesPerView: 3,
            spaceBetween: 30,
            direction: 'horizontal',
          }
        }
      },
      methods: {
        showCont:function(){
          this.show = !this.show;
        },
        openNav(index, num) {
          this.show = !this.show;
          let _this = this;
          let nav = document.querySelectorAll(".nav"); //获取父级菜单栏，以便添加选中样式
          nav[index].classList.add("nav-n-box-active")
        },
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
  .backTop{background: url('../../static/img/companyProduct/company_backMobile.jpg');background-size: 100% 500px;height: 500px;
    display: flex;flex-direction: row;align-items: center;justify-content: center}
  .backTop img{width: 77%;height: auto}
  .chineseTit{color: #041b39;font-size: 35px;font-weight: bold;z-index: 10;letter-spacing:-3px}
  .englishTitle{color: #bfbfbf;font-size: 40px;font-family: 'ZH55-LYBook';text-transform:Uppercase;opacity: 0.22;margin-top: -25px}
  .tabs .tab{display: none;}
  .tabs .tab.active{display:block;}
  .swiper-slide{display: flex;flex-direction: row;justify-content: center}
  .slider-img{width: 26vw;height: 13vw;display: flex;flex-direction: row;align-items: center;justify-content: center;
    font-size: 18px;color: #ffffff;}
</style>
