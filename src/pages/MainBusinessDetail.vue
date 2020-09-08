<template>
  <div>
    <div class="navTop">
      <ul>
        <li><router-link to="./pcIndex"><img src="../../static/img/logo/logo1.png" alt=""><br/>你的网络帝国缔造者</router-link></li>
        <li><router-link to="./CompanyProduct">企业简介<br/>introduction</router-link></li>
        <li><router-link to="./NewsInfo">新闻动态<br/>News</router-link></li>
        <li><router-link to="./AcaFrontier">学术前沿<br/>frontier</router-link></li>
        <li><router-link to="./SuccessCase">成功案例<br/>cases</router-link></li>
        <li><router-link to="./MainBusiness" style="color: #be0900">主营业务<br/>services</router-link></li>
        <li><router-link to="./ContactUs">联系我们<br/>Contact us</router-link></li>
      </ul>
    </div>
    <div class="backTop">
      <img src="../../static/img/mainBusiness/font.png" alt="">
    </div>
    <div>
      <div class="tab">
        <div style="color: #26406c;font-size: 60px;margin-top: 70px;margin-bottom: 90px">本地做软件谁家价格最低？</div>
        <div style="width: 1300px;margin: 0 auto">
          <div>
            <div style="font-size: 26px;color: #26406c;text-align: left">
              吉林省二十八星网络科技有限公司是一家以技术驱动发展的创新型企业，公司总部坐落于吉林省长春市，
              业务领域辐射全东北。公司以“软件开发”为业务主体和专长，自2015年组建伊始，始终低调、深浸于领先、
              前沿科技地探索、创新、研发，至今短短几年，凭借自己掌握的多项核心科技和自主知识产权成果，公司已渐进发展成为行业举足轻重的力量。
            </div>
            <br><br>
            <img src="../../static/img/newsInfo/news1.jpg" alt="">
            <br><br>
            <div style="font-size: 26px;color: #26406c;text-align: left">
              公司创始人员全部为各个领域翘楚，或技术大咖，或行业大牛，总计28位，好似上应天象，公司由此得名。
              公司始终以技术为偏重和发展导向，非凡的团队背景使其更加追求技术上的精益求精，并日益发展成为一家以技术为完美代表的偏执型企业。
            </div>
            <br><br>
            <img src="../../static/img/newsInfo/news2.jpg" alt="">
            <br><br>
            <div style="font-size: 26px;color: #26406c;text-align: left">
              公司始终竭尽所能为顾客提供极致服务，在此上并不以顾客满意为评价标准，而是不遗余力帮助其成功。在公司看来，
              无论是软件开发还是其它技术服务，均是客户进军互联网的标志，公司有必要利用自己所长帮助其“开疆破土”成功，并为此不吝于可能是“多此一举”的成本付出。
            </div>
            <br><br>
            <img src="../../static/img/newsInfo/news3.jpg" alt="">
            <br><br>
            <div style="font-size: 26px;color: #26406c;text-align: left">
              与苛刻、极致的技术追求不同，公司在客户服务上低价而透明，所有的技术收费全部低于市场15-50%，并透明于开发过程的每一个环节。同时，连带开发周期、
              技术原理以及逻辑理由，公司全部做到让客户了然于胸，即使是晦涩深奥的代码，也不厌其烦做到让其“晓懂”。
              伴随着网络科技的日新月异，AIoT已成为人类科技的下一个演进，凭借着前瞻的战略视野和国际化发展格局，公司又迈向了新的征程。
            </div>
          </div>
          <div class="footer">
            <a>上篇：本地做软件谁家价格最低？</a>
            <a style="color: #a50000">下篇文字：本地做软件谁家价格最低？</a>
          </div>
        </div>


      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 40]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="10"
        style="margin-top: 80px"
      >
      </el-pagination>
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
            currentPage: 1, //初始页
            pagesize: 10, //    每页的数据
          }
      },
      methods: {
        // 分页
        handleSizeChange: function(size) {
          this.pagesize = size;
        },
        handleCurrentChange: function(currentPage) {
          this.currentPage = currentPage;
        },
      }
    }
</script>

<style scoped>
  .backTop{background: url('../../static/img/mainBusiness/main_back.png');background-size: 100% 700px;height: 700px;
    display: flex;flex-direction: row;align-items: center;justify-content: center}
  .footer{display: flex;flex-direction: row;justify-content: space-between;font-size: 28px;margin-top: 100px;margin-bottom: 100px}
  .footer a{cursor: pointer}
</style>
