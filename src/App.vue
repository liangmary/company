<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        dataList: []
      }
    },
    methods: {
      _isMobile() {
        let flag = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        );
        return flag;
      }
    },
    mounted() {
      if (this._isMobile()) {
        console.log("手机端");
        this.$router.replace('/MIndex');
      } else {
        console.log("pc端");
        this.$router.replace('/pcIndex');
      }
      //请求示例
      this.get('api/student/list')
        .then((response) => {
          console.log(response)
          // if (response.code === 0) {
          //   this.dataList = response.rows
          // }
        })
    },
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
