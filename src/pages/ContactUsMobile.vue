<template>
  <div id="app">

    <div class="navTop">
      <ul>
        <li><router-link to="./pcIndex"><img src="../../static/img/logo/logo1.png" alt=""><br/>你的网络帝国缔造者</router-link></li>
        <li><router-link to="./CompanyProduct">企业简介<br/>introduction</router-link></li>
        <li><router-link to="./NewsInfo">新闻动态<br/>News</router-link></li>
        <li><router-link to="./AcaFrontier">学术前沿<br/>frontier</router-link></li>
        <li><router-link to="./SuccessCase">成功案例<br/>cases</router-link></li>
        <li><router-link to="./MainBusiness">主营业务<br/>services</router-link></li>
        <li><router-link to="./ContactUs" style="color: #be0900">联系我们<br/>Contact us</router-link></li>
      </ul>
    </div>
    <div class="backTop"><img src="../../static/img/contact/font.png" alt=""></div>

    <div style="height: 1230px;width: 1300px;margin: 0 auto;padding-top: 130px">
      <div style="font-size: 36px;color: #0e022a;text-align: left">发表您的留言：</div>
      <br><br>
      <form v-on:submit.prevent="submit()" style="font-size: 28px;color: #0e022a;">
        <div style="display: flex;flex-direction: row;justify-content: flex-start;align-items: center">
          姓名：<input placeholder="真实姓名" maxlength="15" type="text" v-model="address.name" style="margin-right: 60px"/>
          邮箱：<input placeholder="手机号" maxlength="13" type="tel" v-model="address.email" style="margin-right: 60px"/>
          电话：<input placeholder="手机号" maxlength="13" type="tel" v-model="address.tel"/>
        </div>
        <br><br>
        <div style="display: flex;flex-direction: row;justify-content: flex-start;align-items: center">
          咨询内容：
          <select name="public-choice" v-model="couponSelected" @change="getCouponSelected">
            <option :value="coupon.id" v-for="coupon in address.couponList" >{{coupon.name}}</option>
          </select>
          <input placeholder="咨询主题"  type="text"  v-model="address.cont" style="margin-left: 60px"/>
        </div>
        <br><br>
        <textarea rows="10" v-model="address.site"></textarea>
        <br><br>
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
      // submit() {
      //   this.axios.post('api/address/new', this.address)
      //     .then((res) => {
      //       this.$router.push({name:'address'})
      //     })
      // }
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

  .backTop{background: url('../../static/img/contact/contactBack.png');background-size: 100% 700px;height: 700px;
    display: flex;flex-direction: row;align-items: center;justify-content: center}
  .six-map{height:500px;margin-left: 5%;margin-right: 5%;z-index: 2;bottom: 0;width: 90%;position: absolute}
  input{border: 1px solid #cecccc;width: 300px;height: 50px;padding-left: 10px}
  select{border: 1px solid #cecccc;width: 180px;height: 50px;}
  textarea{border: 1px solid #cecccc;width: 1300px;height: 270px;}
  input:focus{border: 1px solid #444;}
  .ui-button{background: #0e022a;height: 75px;width: 280px;text-align: center;line-height: 75px;color: #ffffff;font-size: 28px;border: none;cursor:pointer;}
</style>
