<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <Main/>
    </el-main>
  </el-container>
</template>

<script>
  import Header from './components/Header'
  import Main from './components/Main'
  export default {
    name: 'app',
    components: {
      Header,
      Main
    }
  }
</script>

<style>
  body{
    background-image: url(../src/assets/img/index_bg.png);width: 100%;
  }
  .el-header{
    background: white;
    padding: 0;
  }
</style>
