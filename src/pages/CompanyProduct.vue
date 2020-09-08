<template>
  <div>
    <div class="navTop">
      <ul>
        <li><router-link to="./pcIndex"><img src="../../static/img/logo/logo1.png" alt=""><br/>你的网络帝国缔造者</router-link></li>
        <li><router-link to="./CompanyProduct" style="color: #be0900">企业简介<br/>introduction</router-link></li>
        <li><router-link to="./NewsInfo">新闻动态<br/>News</router-link></li>
        <li><router-link to="./AcaFrontier">学术前沿<br/>frontier</router-link></li>
        <li><router-link to="./SuccessCase">成功案例<br/>cases</router-link></li>
        <li><router-link to="./MainBusiness">主营业务<br/>services</router-link></li>
        <li><router-link to="./ContactUs">联系我们<br/>Contact us</router-link></li>
      </ul>
    </div>
    <div class="backTop">
      <img src="../../static/img/companyProduct/font.png" alt="">
    </div>
    <div style="padding-left: 110px;padding-right: 100px;margin-top: -100px">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(value,index) in tab" :key="index" :class="{active:value.isactive,'swiper-slide':true}"><a
          @click="change(index)" class="slider-img" :style="{backgroundImage: 'url(' + value.backImg + ')'}">{{value.title}}</a></swiper-slide>
      </swiper>
    </div>

    <div class="tabs">
      <div v-for="(value,index) in tab" class="tab" :class="{active:value.isactive}">
        <div style="margin-top: 87px">
          <div class="chineseTit">{{value.title}}</div>
          <div class="englishTitle">{{value.entitle}}</div>
        </div>
        <img :src="value.img" alt="" style="width: 100%">
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
      name: "CompanyProduct",
      data(){
        return {
          tab: [{
            title: '公司简介',
            entitle: 'Company profile',
            backImg: '../../static/img/companyProduct/comp1.png',
            img: '../../static/img/companyProduct/comProduct.jpg',
            isactive: true
          }, {
            title: '文化理念',
            entitle: 'Cultural concept',
            backImg: '../../static/img/companyProduct/comp2.png',
            img: '../../static/img/companyProduct/comProduct.jpg',
            isactive: false
          }, {
            title: '历史沿革',
            entitle: 'Historical evolution',
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
  .backTop{background: url('../../static/img/companyProduct/company_back.png');background-size: 100% 700px;height: 700px;
    display: flex;flex-direction: row;align-items: center;justify-content: center}
  .chineseTit{color: #041b39;font-size: 70px;font-weight: bold;z-index: 10;letter-spacing:-3px}
  .englishTitle{color: #bfbfbf;font-size: 83px;font-family: 'ZH55-LYBook';text-transform:Uppercase;opacity: 0.22;margin-top: -50px}
  .tabs .tab{display: none;}
  .tabs .tab.active{display:block;}

  .slider-img{width: 540px;height: 264px;display: flex;flex-direction: row;align-items: center;justify-content: center;font-size: 44px;color: #ffffff}
</style>
