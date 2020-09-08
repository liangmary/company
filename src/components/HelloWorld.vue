<template>
  <div>

    <swiper :options="swiperOption" ref="mySwiper">

      <!-- slides -->
      <swiper-slide class="swiper">
        <div class="navTop bounceInDown animated">
          <ul>
            <li><a href=""><img src="../../static/img/logo/logo1.png" alt=""><br/>你的网络帝国缔造者</a></li>
            <li><a href="">企业简介<br/>introduction</a></li>
            <li><a href="">学术前沿<br/>frontier</a></li>
            <li><a href="">成功案例<br/>cases</a></li>
            <li><a href="">功能与服务<br/>services</a></li>
            <li><a href="">公司风貌<br/>views</a></li>
            <li><a href="">联系我们<br/>Contact us</a></li>
            <li><a href="">新闻动态<br/>News</a></li>
          </ul>
        </div>
        <div class="one">
          <img src="../../static/img/index/1-top.png" alt="" class="bounceInUp animated">
          <div class="button bounceInUp animated">查看详情</div>
          <div class="input_control bounceInUp animated">
            <input type="text" class="form_input" placeholder="输入你想要的内容"/>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper">
        <div class="navTop bounceInDown animated">
          <ul>
            <li><a href=""><img src="../../static/img/logo/logo2.png" alt=""><br/>你的网络帝国缔造者</a></li>
            <li><a href="">企业简介<br/>introduction</a></li>
            <li><a href="">学术前沿<br/>frontier</a></li>
            <li><a href="">成功案例<br/>cases</a></li>
            <li><a href="">功能与服务<br/>services</a></li>
            <li><a href="">公司风貌<br/>views</a></li>
            <li><a href="">联系我们<br/>Contact us</a></li>
            <li><a href="">新闻动态<br/>News</a></li>
          </ul>
        </div>
        <div class="two">
          <img src="../../static/img/index/2-0.png" alt="" style="position: absolute;left: 0;bottom: 0" class="bounceInLeft animated">
          <h1><span>定</span>制软件<span>开</span>发</h1>
          <div class="grid">
            <a class="grid-dev" v-for="(arry , index) in itemse" :key="arry.index">{{arry.text}}</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper">
        <div class="navTop bounceInDown animated">
          <ul>
            <li><a href=""><img src="../../static/img/logo/logo1.png" alt=""><br/>你的网络帝国缔造者</a></li>
            <li><a href="">企业简介<br/>introduction</a></li>
            <li><a href="">学术前沿<br/>frontier</a></li>
            <li><a href="">成功案例<br/>cases</a></li>
            <li><a href="">功能与服务<br/>services</a></li>
            <li><a href="">公司风貌<br/>views</a></li>
            <li><a href="">联系我们<br/>Contact us</a></li>
            <li><a href="">新闻动态<br/>News</a></li>
          </ul>
        </div>
        <div class="three">
          <div style="float: left;text-align: left;padding-top: 210px;padding-left: 150px">
            <div style="font-size: 43px">学术前沿</div>
            <h1><span>如</span><span>此</span><span>精</span><span>彩</span><span>绝</span><span>伦</span><span>的</span><span>科</span><span>技</span></h1>
            <article style="font-size: 18px;margin-top: 26px;margin-bottom: 30px;line-height: 40px">技术大咖、行业大牛、人机交互专家、高级程序员、视觉设计师组成的豪华阵容充斥于开
              <br>发过程的每一个环节，攻坚克难自是不在话下，更提供的解决方案灵妙至极，成本低廉。</article>
            <div class="btn">
              <a href="">领先优势</a>
              <a href="">权威团队</a>
              <a href="">荣誉资质</a>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper">
        <div class="navTop">
          <ul>
            <li><a href=""><img src="../../static/img/logo/logo2.png" alt=""><br/>你的网络帝国缔造者</a></li>
            <li><a href="">企业简介<br/>introduction</a></li>
            <li><a href="">学术前沿<br/>frontier</a></li>
            <li><a href="">成功案例<br/>cases</a></li>
            <li><a href="">功能与服务<br/>services</a></li>
            <li><a href="">公司风貌<br/>views</a></li>
            <li><a href="">联系我们<br/>Contact us</a></li>
            <li><a href="">新闻动态<br/>News</a></li>
          </ul>
        </div>
        <div class="four">
          <a class="fourBlock">
            <div class="img"><img src="../../static/img/index/4-1.png" alt=""></div>
            <h6>律师行</h6>
            <div class="cont">让律师拥有海量案源，让需求者拥有海量律师服务</div>
          </a>
          <a class="fourBlock">
            <div class="img"><img src="../../static/img/index/4-2.png" alt=""></div>
            <h6>探心猫</h6>
            <div class="cont">家庭教育领域一备受推崇的重磅平台</div>
          </a>
          <a class="fourBlock">
            <div class="img"><img src="../../static/img/index/4-3.png" alt=""></div>
            <h6>企交宝</h6>
            <div class="cont">企业互连、交流、互助、服务、获客的平台、宝库</div>
          </a>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper">
        <div class="navTop">
          <ul>
            <li><a href=""><img src="../../static/img/logo/logo1.png" alt=""><br/>你的网络帝国缔造者</a></li>
            <li><a href="">企业简介<br/>introduction</a></li>
            <li><a href="">学术前沿<br/>frontier</a></li>
            <li><a href="">成功案例<br/>cases</a></li>
            <li><a href="">功能与服务<br/>services</a></li>
            <li><a href="">公司风貌<br/>views</a></li>
            <li><a href="">联系我们<br/>Contact us</a></li>
            <li><a href="">新闻动态<br/>News</a></li>
          </ul>
        </div>
        <div class="five">
          <img src="../../static/img/index/5-1.jpg" alt="">
          <a class="five-block">
            <img src="../../static/img/index/left.png" alt="">
            <h3>办公环境</h3>
            28星吉林长春办公区<br/>
            Office area
          </a>
          <img src="../../static/img/index/5-2.png" alt="">
          <a class="five-block">
            <img src="../../static/img/index/left.png" alt="">
            <h3>公司风貌</h3>
            28星吉林长春办公区<br/>
            Office area
          </a>

          <a class="five-block">
            <img src="../../static/img/index/left.png" alt="">
            <h3>国际视野</h3>
            公司又迈向了新的征程<br/>
            International vision
          </a>
          <img src="../../static/img/index/5-3.png" alt="">
          <a class="five-block">
            <img src="../../static/img/index/left.png" alt="">
            <h3>献身公益</h3>
            28星吉林长春办公区<br/>
            Office area
          </a>
          <img src="../../static/img/index/5-4.png" alt="">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper">
        <div class="navTop">
          <ul>
            <li><a href=""><img src="../../static/img/logo/logo2.png" alt=""><br/>你的网络帝国缔造者</a></li>
            <li><a href="">企业简介<br/>introduction</a></li>
            <li><a href="">学术前沿<br/>frontier</a></li>
            <li><a href="">成功案例<br/>cases</a></li>
            <li><a href="">功能与服务<br/>services</a></li>
            <li><a href="">公司风貌<br/>views</a></li>
            <li><a href="">联系我们<br/>Contact us</a></li>
            <li><a href="">新闻动态<br/>News</a></li>
          </ul>
        </div>
        <baidu-map :center="center" :zoom="zoom" @ready="handler" class="six-map"
                   @click="getClickInfo" :scroll-wheel-zoom='true'></baidu-map>
        <div class="sixBack">
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
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: 'carrousel',
    data () {
      return {
        itemse: [
          { index: 1, text: "APP开发" },
          { index: 2, text: "小程序开发" },
          { index: 3, text: "商城开发" },
          { index: 4, text: "直播平台开发" },
          { index: 5, text: "品牌官网开发" },
          { index: 6, text: "微信平台开发" },
          { index: 7, text: "管理系统开发" },
          { index: 8, text: "电商代运营" },
          { index: 9, text: "定制软件开发" },
          { index: 10, text: "品牌策划" },
          { index: 11, text: "电商培训" },
          { index: 12, text: "全网营销获客" },
        ],
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 30,
          setWrapperSize: true,
          mousewheel: true,
          autoHeight: true,
          height: window.innerHeight,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        },
        center: {lng: 125.378841, lat: 43.863391},
        zoom: 19
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    },
    methods: {

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

<style scoped>
  @import "../../static/css/index.css";
</style>

