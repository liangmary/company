<template>
  <div id="app">

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
    <div class="backTop"><img src="../../static/img/contact/font.png" alt=""></div>

    <div style="height: 1230px;margin: 0 auto;padding-top: 60px">
      <div style="font-size: 36px;color: #0e022a;text-align: left">发表您的留言：</div>
      <br><br>
      <form v-on:submit.prevent="submit()" style="font-size: 16px;color: #0e022a;">
        <div class="flexRow">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：<input placeholder="真实姓名" maxlength="15" type="text" v-model="address.name" style="margin-right: 60px"/></div>
        <div class="flexRow">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：<input placeholder="手机号" maxlength="13" type="tel" v-model="address.email" style="margin-right: 60px"/></div>
        <div class="flexRow">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：<input placeholder="手机号" maxlength="13" type="tel" v-model="address.tel"/></div>
        <div class="flexRow">咨询内容：<select name="public-choice" v-model="couponSelected" @change="getCouponSelected"><option :value="coupon.id" v-for="coupon in address.couponList" >{{coupon.name}}</option></select></div>
          <input placeholder="咨询主题"  type="text"  v-model="address.cont"/>
        <br>
        <textarea rows="10" v-model="address.site"></textarea>
        <br>
        <button type="submit" class="ui-button" ><span>提交留言</span></button></form>
      <br>
      <br>
    </div>
    <br>
    <br>
    <div style="background: #000000;width: 100%;height: 100px;color: #ffffff;padding-top: 30px;align-items: center;position: relative">
      <baidu-map :center="center" :zoom="zoom" @ready="handler" class="six-map"
                 @click="getClickInfo" :scroll-wheel-zoom='true'></baidu-map>
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
    name: 'AcaFrontier',
    data(){
      return {
        show:false,
        navList: [
          {title: "首页", name: "home",linkName: "MIndex",},
          {title: "企业简介", name: "CompanyProfile",linkName: "CompanyProductMobile",},
          {title: "新闻动态", name: "NewsInfo",linkName: "NewsInfoMobile",},
          {title: "学术前言", name: "AcademicPreface",linkName: "AcaFrontierMobile",},
          {title: "成功案例", name: "SuccessCase",linkName: "SuccessCaseMobile",},
          {title: "主营业务", name: "MainBusiness",linkName: "MainBusinessMobile",},
          {title: "联系我们", name: "AboutUs",linkName: "ContactUsMobile",},
        ],
        couponSelected: '',
        tab: [
          {title: '学术前沿',enTitle: 'Academic frontier', img: '../../static/img/acaFrontier/main11.jpg', isactive: true},
          {title: '领先优势',enTitle: 'Leading edge', img: '../../static/img/acaFrontier/main2.jpg', isactive: false},
          {title: '权威团队',enTitle: 'Authoritative team', img: '../../static/img/acaFrontier/main3.jpg', isactive: false}
        ],
        address: {
          name: '',
          email: '',
          tel: '',
          cont: '',
          site: '',
          couponList:[
            {id: 'A', name: '类别一'},
            {id: '1', name: '类别二'},
            {id: '2', name: '类别三'}
          ],
        },
        center: {lng: 125.378841, lat: 43.863391},
        zoom: 19
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
      getCouponSelected(){
        //获取选中的优惠券
        console.log(this.couponSelected)
      },
      // 地图
      handler({BMap, map}) {
        var point = new BMap.Point(125.378841,43.863391);
        map.centerAndZoom(point, 19);
        var marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        var circle = new BMap.Circle(point, 1, {
          strokeColor: 'Red',
          strokeWeight: 1,
          strokeOpacity: 1,
          Color: 'Red',
          fillColor: '#f03'
        });
        map.addOverlay(circle)
      },
      getClickInfo(e) {
        this.center.lng = e.point.lng;
        this.center.lat = e.point.lat
      }
    }
  }
</script>

<style>

  .backTop{background: url('../../static/img/contact/contactBack.png');background-size: 100% 500px;height: 500px;
    display: flex;flex-direction: row;align-items: center;justify-content: center}
  .backTop img{width: 77%;height: auto}
  .six-map{height:300px;margin-left: 5%;margin-right: 5%;z-index: 2;bottom: 0;width: 90%;position: absolute}
  input{border: 1px solid #cecccc;width: 70vw;height: 30px;padding-left: 10px}
  select{border: 1px solid #cecccc;width: 70vw;height: 30px;}
  textarea{border: 1px solid #cecccc;width: 70vw;height: 270px;}
  input:focus{border: 1px solid #444;}
  .ui-button{background: #0e022a;height: 75px;width: 280px;text-align: center;line-height: 75px;color: #ffffff;font-size: 28px;border: none;cursor:pointer;}
  .flexRow{display: flex;flex-direction: row;margin-bottom: 10px}
</style>
