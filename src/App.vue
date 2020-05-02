<template>
  <el-container>
    <el-header>
      <Header v-if="alive"/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
  import Header from './components/Header'

  export default {
    name: 'app',
    provide () {
      return {
        reload: this.reload
      }
    },
    data () {
      return {
        alive: true
      }
    },
    methods: {
      reload () {
        this.alive = false
        this.$nextTick(() => {
          this.alive = true
        })
      }
    },
    components: {
      Header
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
