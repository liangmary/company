import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pcIndex from '@/pages/pcIndex'//web端首页
import MIndex from '@/pages/MIndex'//web端首页
import CompanyProduct from '@/pages/CompanyProduct'//公司简介
import MainBusiness from '@/pages/MainBusiness'//主营业务
import MainBusinessDetail from '@/pages/MainBusinessDetail'//主营业务详情
import SuccessCase from '@/pages/SuccessCase'//成功案例
import SuccessCaseDetail from '@/pages/SuccessCaseDetail'//成功案例详情
import NewsInfo from '@/pages/NewsInfo'//新闻页
import NewsInfoDetail from '@/pages/NewsInfoDetail'//新闻详情
import AcaFrontier from '@/pages/AcaFrontier'//学术前沿
import AcaFrontierDetail from '@/pages/AcaFrontierDetail'//学术前沿
import ContactUs from '@/pages/ContactUs'//联系我们

const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pc_index'
    },
    {
      path: "/pcIndex", // pc端首页
      name: pcIndex,
      component: pcIndex
    },
    {
      path: '/MIndex', // 手机端首页
      name: MIndex,
      component: MIndex
    },
    {
      path: '/CompanyProduct',
      name: 'CompanyProduct',
      component: CompanyProduct
    },
    {
      path: '/MainBusiness',
      name: 'MainBusiness',
      component: MainBusiness
    },
    {
      path: '/MainBusinessDetail',
      name: 'MainBusinessDetail',
      component: MainBusinessDetail
    },
    {
      path: '/SuccessCase',
      name: 'SuccessCase',
      component: SuccessCase
    },
    {
      path: '/SuccessCaseDetail',
      name: 'SuccessCaseDetail',
      component: SuccessCaseDetail
    },
    {
      path: '/NewsInfo',
      name: 'NewsInfo',
      component: NewsInfo
    },
    {
      path: '/NewsInfoDetail',
      name: 'NewsInfoDetail',
      component: NewsInfoDetail
    },
    {
      path: '/AcaFrontier',
      name: 'AcaFrontier',
      component: AcaFrontier
    },
    {
      path: '/AcaFrontierDetail',
      name: 'AcaFrontierDetail',
      component: AcaFrontierDetail
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
