<template>
  <el-container>
    <el-aside width="200px">
      <el-card>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </el-aside>
    <el-main>
      <div class="blog-content-box">
        <h2>Java线程：你想了解的，我都有</h2>
        <div class="blog-head">
          <span>
            <i class="el-icon-collection-tag"></i>
            感悟
          </span>
          <a href="">用户名</a>
          <span>时间</span>
          <span><i class="el-icon-view"></i>
            观看量
          </span>
          <span>
            <i class="el-icon-collection"></i>
            收藏数</span>
        </div>
        <div class="blog-content">
          marked(this.articles[i].content)
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        content: ''
      }
    }
  }
</script>

<style scoped>
  a{text-decoration:none;margin-left: 10px;color: #5893c2}
  a:hover{ color: #fa8072;transition-duration: 0.5s;}
  .el-container{width: 75%;margin-left: auto;margin-right: auto}
  .el-card{background: white}
  .blog-content-box{background: white;padding: 15px}
  .el-main{padding-top: 0;padding-right: 0}
  h2{margin: 0;font-size: 28px}
  .blog-head{margin-top: 15px;background: #f7f7fc;border-radius: 5px;margin-left: 5px}
  .blog-head span{ margin-left: 15px}
  .blog-head span:nth-child(1){margin-left: 0}
  .blog-content{margin-top: 20px}
</style>
