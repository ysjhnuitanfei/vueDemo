<template>
  <div id="app">
    <div class="container">
      <div class="left-container">
        <Navigation></Navigation>
      </div>
      <div class="right-container">
        <router-view></router-view>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  components: {
    Navigation
  },
  created () {

  }
}
</script>
<style lang="less">
@import "./app.less";
#app {
  height: 100%;
  color: #2c3e50;
}
.container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .left-container {
    padding: 20px 10px 0 30px;
    width: 220px;
    overflow: auto;
    // box-shadow: 0 1px 5px #ccc;
  }

  .right-container {
    flex: 1;
    padding: 20px;
    overflow: auto;
  }
}
</style>
