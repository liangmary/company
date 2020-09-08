<template>
  <div>
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
      <div style="text-align: left;margin: 0 auto">
        <div style="font-size: 20px">学术前沿</div>
        <h1><span>如</span><span>此</span><span>精</span><span>彩</span><span>绝</span><span>伦</span><span>的</span><span>科</span><span>技</span></h1>
        <article style="font-size: 12px;margin-top: 26px;margin-bottom: 30px;line-height: 40px">技术大咖、行业大牛、人机交互专家、高级程序员、视觉设计师组成的豪华阵容充斥于开
          <br>发过程的每一个环节，攻坚克难自是不在话下，更提供的解决方案灵妙至极，成本低廉。</article>
        <div class="btn">
          <a href="">领先优势</a>
          <a href="">权威团队</a>
          <a href="">荣誉资质</a>
        </div>
      </div>
      <img src="../../static/img/index/3-android1.png" alt="" class="computer">
    </div>
    <!--<div class="rightNav">
      <ul class="tab-nav">
        <li v-for="(i,index) in navList" :key="index">
          <div class="nav" @click="openNav(index,i.list.length)">
            <i class="el-icon-s-home"></i>
            <span>{{i.title}}</span>
            <i v-if="i.list.length" id="right-btn" class="el-icon-arrow-right"></i>
          </div>
          <div class="nav-n-box">
            <div class="nav-n" v-for="(n,index) in i.list" :key="index">{{n.title}}</div>
          </div>
        </li>
      </ul>
    </div>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList: [
          {
            title: "首页",
            name: "home",
            list: []
          },
          {
            title: "业务介绍",
            name: "BusinessIntroduction",
            list: [
              {
                title: "交易规则",
                name: "BusinessIntroduction"
              },
              {
                title: "政策法规",
                name: "BusinessIntroduction"
              }
            ]
          },
          {
            title: "新闻资讯",
            name: "News",
            list: [
              {
                title: "公告通知",
                name: "BusinessIntroduction"
              },
              {
                title: "公司新闻",
                name: "BusinessIntroduction"
              },
              {
                title: "行业资讯",
                name: "BusinessIntroduction"
              }
            ]
          },
          {
            title: "关于我们",
            name: "AboutUs",
            list: [
              {
                title: "中心介绍",
                name: "BusinessIntroduction"
              },
              {
                title: "法律申明",
                name: "BusinessIntroduction"
              },
              {
                title: "常见问题",
                name: "BusinessIntroduction"
              }
            ]
          }
        ]
      };
    },
    methods: {
      openNav(index, num) {
        let _this = this;
        let nav = document.querySelectorAll(".nav"); //获取父级菜单栏，以便添加选中样式
        let items = document.querySelectorAll(".nav-n-box"); //获取容纳子级菜单栏的容器，以便动态设置高度，实现下拉效果

        //-----------------可注释部分开始------注释后则不是手风琴效果------------------
        // 遍历菜单栏，移除所有选中后的样式   添加此段可实现手风琴效果，注释则实现多展示效果
        for (let i = 0; i < nav.length; i++) {
          // nav[index].classList.contains("nav-n-box-active") 判断标签内是否含有该class属性，以布尔值类型返回
          if (
            items[i].style.height == "" ||
            items[i].style.height == "0rem" ||
            nav[index].classList.contains("nav-n-box-active")
          ) {
            let height = items[index].style.height;
            items[index].style.height = height;
          } else {
            items[i].style.height = "0rem";
          }
          nav[i].classList.remove("nav-n-box-active");
        }
        //-----------------可注释部分结束------------------------


        //根据子菜单栏的高度判断，是否展开菜单栏，若有进行遍历操作，那么每次点击某个菜单栏的时候 height 都为 0
        if (
          items[index].style.height == "" ||
          items[index].style.height == "0rem"
        ) {
          //num 为子菜单栏的个数，根据子菜单栏确定容器的高度
          items[index].style.height = num * 2 + "rem";
          //添加右箭头旋转样式
          nav[index].classList.add("nav-n-box-active");
        } else {
          items[index].style.height = "0rem";
          //移除右箭头旋转样式
          nav[index].classList.remove("nav-n-box-active");
        }
        //------------------------------------------
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
  .two .font span:nth-child(2n+1){font-size: 70px}
  .two .font span:nth-child(2n){font-size: 55px}
  .two .block{display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-around}
  .two .block a{height: 60px;width: 60px;background: #041b39;color: #ffffff;display: inline-block;border-radius: 50%;
    display: flex;flex-direction: row;justify-content: center;align-items: center;margin-top: 30px}

  .three{background: url("../../static/img/index/3-android0.jpg");background-size: 100% 100%;width: 100%;min-height: 100px;color: #ffffff}
  .three .computer{right: 0;bottom: 10px;}
  .three h1 span:nth-child(2n){font-family: ZH24-ZHBook;font-size: 37px;}
  .three h1 span:nth-child(2n+1){font-family: ZH24-ZHBook;font-size: 45px;}
  /*.three h1 span:nth-child(5),.three h1 span:nth-child(7){font-family: ZH24-ZHBook;font-size: 78px;}*/
  .three .btn a{background: #00243d;color: #fff;height: 44px;line-height: 44px;width: 146px;text-align: center;
    display: inline-block;font-size: 20px;border-radius: 22px;}
  .three .btn a:hover{background: #be0900}

  .rightNav {position: fixed;width: 65%;height: 100%;top: 0;left: 0;background: white;z-index: 100;max-width: 200px;}
  .tab-nav {padding: 1rem;list-style: none;}
  li {display: flex;align-items: center;flex-wrap: wrap;cursor: pointer;user-select: none;}
  .nav {padding: 1rem 0;width: 100%;display: flex;align-items: center;justify-content: space-between;}
  .nav i {transition: 0.3s;color: rgb(0, 225, 255);}
  .nav span {display: inline-block;width: 100%;text-align: left;color: #808080;font-size: 0.88rem;margin-left: 1rem;}
  .nav-n-box {transition: 0.3s;width: 100%;height: 0;overflow: hidden;}
  .nav-n {width: 100%;font-size: 0.88rem;color: #808080;height: 2rem;text-align: left;padding-left: 2rem;line-height: 2rem;transition: 0.3s;}
  .nav-n:hover {background: rgb(0, 225, 255);color: white;opacity: 0.5;}
  /*//点击后右箭头的反转效果*/
  #right-btn {transform: rotate(90deg) !important;}


</style>
