<template>
  <div class="block">
    <el-carousel height="250px">
      <el-carousel-item v-for="item in img" :key="item.id">
        <el-image style="width: 100%; height: 100%" :src="item.idView" alt="图片"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        img: [
          { id: 0, idView: require('../assets/img/banner1.jpg') },
          { id: 1, idView: require('../assets/img/banner2.jpg') }
        ]
      }
    }
  }
</script>

<style>
  .block{
    width: 100%;
  }
</style>
