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
    <div class="one">
      <div style="font-size: 20px">低价/温情/透明/实效/前沿</div>
      <div class="fontTit"><span style="font-size: 70px">你</span><span style="font-size: 50px">的</span><span
        style="font-size: 60px">网</span><span style="font-size: 50px">络</span><span style="font-size: 70px">帝</span><span
        style="font-size: 50px">国</span></div>
      <div class="fontTit" style="font-size: 57px">缔造者</div>
      <div class="btn">查看详情</div>
      <div style="font-size: 40px;color: #ffffff">
        <img src="../../static/img/index/phone.png" alt=""
             style="height: 32px;width: 32px;margin-right: 5px">0431-81855275</div>
    </div>

    <div class="two">
      <div class="font"><span>定</span><span>制</span><span>软</span><span>件</span><span>开</span><span>发</span></div>
      <div class="block">
        <a href="">APP开发</a>
        <a href="">小程序<br/>开发</a>
        <a href="">微信端<br/>平台开发</a>
        <a href="">商城开发</a>
        <a href="">管理<br/>系统开发</a>
        <a href="">直播<br/>平台开发</a>
        <a href="">品牌<br/>官网开发</a>
        <a href="">定制<br/>软件开发</a>
        <a href="">品牌策划</a>
        <a href="">电商培训</a>
        <a href="">电商<br/>代运营</a>
        <a href="">全网<br/>营销获客</a>
      </div>
      <div>
        <img src="../../static/img/index/2-android0.png" alt="" style="width: 100%;margin-top: 15px">
      </div>
    </div>

    <div class="three">
      <div style="text-align: left;margin: 0 auto;width: 88%">
        <div style="font-size: 20px">学术前沿</div>
        <h1><span>如</span><span>此</span><span>精</span><span>彩</span><span>绝</span><span>伦</span><span>的</span><span>科</span><span>技</span></h1>
        <article style="font-size: 12px;margin-top: 5px;margin-bottom: 10px;line-height: 22px">技术大咖、行业大牛、人机交互专家、高级程序员、视觉设计师组成的豪华阵容充斥于开
          <br>发过程的每一个环节，攻坚克难自是不在话下，更提供的解决方案灵妙至极，成本低廉。</article>
        <div class="btn">
          <a href="">领先优势</a>
          <a href="">权威团队</a>
          <a href="">荣誉资质</a>
        </div>
      </div>
      <div style="width: 100%;display: flex;flex-direction: row;justify-content: flex-end">
        <img src="../../static/img/index/3-android1.png" alt="" class="computer">
      </div>
    </div>

    <div class="four">
      <a class="fourBlock">
        <div class="img"><img src="../../static/img/index/4-1.png" alt=""></div>

        <div class="cont"><h6>律师行</h6>让律师拥有海量案源，让需求者拥有海量律师服务</div>
      </a>
      <a class="fourBlock">
        <div class="img"><img src="../../static/img/index/4-2.png" alt=""></div>

        <div class="cont"><h6>探心猫</h6>家庭教育领域一备受推崇的重磅平台</div>
      </a>
      <a class="fourBlock">
        <div class="img"><img src="../../static/img/index/4-3.png" alt=""></div>

        <div class="cont"><h6>企交宝</h6>企业互连、交流、互助、服务、获客的平台、宝库</div>
      </a>
    </div>

    <div class="five">
      <img src="../../static/img/index/5-1.jpg" alt="">
      <a class="five-block">
        <img src="../../static/img/index/left.png" alt="">
        <h3>办公环境</h3>
        28星吉林长春办公区<br/>
        Office area
      </a>
      <a class="five-block">
        <img src="../../static/img/index/right.png" alt="">
        <h3>公司风貌</h3>
        28星吉林长春办公区<br/>
        Office area
      </a>
      <img src="../../static/img/index/5-2.png" alt="">

      <img src="../../static/img/index/5-3.png" alt="">
      <a class="five-block">
        <img src="../../static/img/index/left.png" alt="">
        <h3>国际视野</h3>
        公司又迈向了新的征程<br/>
        International vision
      </a>
      <a class="five-block">
        <img src="../../static/img/index/right.png" alt="">
        <h3>献身公益</h3>
        28星吉林长春办公区<br/>
        Office area
      </a>
      <img src="../../static/img/index/5-4.png" alt="">
    </div>

    <div>

      <baidu-map :center="center" :zoom="zoom" @ready="handler" class="six-map"
                 @click="getClickInfo" :scroll-wheel-zoom='true'></baidu-map>
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

  </div>
</template>

<script>
  export default {
    data() {
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
        center: {lng: 125.378841, lat: 43.863391},
        zoom: 19
      };
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
  };
</script>

<style scoped>
  .one{background: url("../../static/img/androidIndex/index/1.jpg");background-size: 100% 100%;width: 100%;height: 100%;color: #ffffff;
    padding-top: 50px;display: flex;flex-direction: column;align-items: center;padding-bottom: 90px}
  .one .fontTit,.one .fontTit span{font-family: ZH24-ZHBook; }
  .one .btn{background: #f53b4d;font-size: 20px;height: 42px;width: 145px;line-height: 42px;text-align: center;border-radius: 20px;
    margin-top: 15px;margin-bottom: 30px}

  .two .font span{font-family: ZH24-ZHBook;color: #041b39}
  .two .font span:nth-child(2n+1){font-size: 67px}
  .two .font span:nth-child(2n){font-size: 56px}
  .two .block{display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-around}
  .two .block a{height: 60px;width: 60px;background: #041b39;color: #ffffff;display: inline-block;border-radius: 50%;
    display: flex;flex-direction: row;justify-content: center;align-items: center;margin-top: 30px;font-size: 14px}

  .three{background: url("../../static/img/index/3-android0.jpg");background-size: 100% 100%;width: 100%;min-height: 100px;color: #ffffff;
    padding-top: 70px;}
  .three .computer{right: 0;bottom: 10px;width: 70%;}
  .three h1 span:nth-child(2n){font-family: ZH24-ZHBook;font-size: 32px;}
  .three h1 span:nth-child(2n+1){font-family: ZH24-ZHBook;font-size: 42px;}
  /*.three h1 span:nth-child(5),.three h1 span:nth-child(7){font-family: ZH24-ZHBook;font-size: 78px;}*/
  .three .btn a{background: #00243d;color: #fff;height: 38px;line-height: 38px;width: 100px;text-align: center;
    display: inline-block;font-size: 18px;border-radius: 22px;}
  .three .btn a:hover{background: #be0900}

  .four{background-image: url("../../static/img/index/4.jpg");background-size: 100% 100%;width: 100%;height: 100%;
    display: flex;flex-direction: column;justify-content: space-around;align-items: center;padding-top: 20px;padding-bottom: 15px}
  .four .fourBlock{background: #fff;margin-top: 15px;display: flex;flex-direction: row;width: 90%;height: 120px;
    justify-content: center;align-items: center;box-shadow: 0 6px 10px 6px rgba(0,0,0,0.44);cursor: pointer}
  .four .fourBlock .img{justify-content: space-between;display: flex;flex-direction: row;margin-left: 5px;margin-right: 10px}
  .four .fourBlock img{width: 150px;align-items: flex-end}
  .four .fourBlock h6{font-size: 22px;color: #000000;font-weight: bold;margin-bottom: 8px}
  .four .fourBlock .cont{font-size: 15px;color: #000000;text-align: left}

  .five{display: flex;flex-direction: row;flex-wrap: wrap;height: 100%}
  .five img{width: 50%;height: 230px}
  .five .five-block{background: #282828;color: #ffffff;width: 50%;font-size: 18px;cursor: pointer;height: 230px}
  .five .five-block:nth-child(2n){display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-end;
    padding-left: 34px;padding-bottom: 20px;text-align: left}
  .five .five-block:nth-child(2n+1){display: flex;flex-direction: column;align-items: flex-end;justify-content: flex-end;
    padding-right: 34px;padding-bottom: 20px;text-align: right}
  .five .five-block h3{font-size: 30px;}
  .five .five-block img{width: 22px;height: 18px}


  .six-map{height:200px;margin-top: 50px;width: 100%}


</style>
