<template>
  <div>
    <article class="list-box1" v-for="article in articles" :key="article.bid">
      <router-link to="">
        <i class="el-icon-collection-tag"></i>
        {{article.label}}
      </router-link>
      <h5><router-link to='/detail'>{{article.title}}</router-link></h5>
      <small>
        <router-link to="">
          <i class="el-icon-user-solid"></i>
          {{article.username}}</router-link>
        <a href="#">
          <i class="el-icon-s-comment"></i>
          0</a>
        <span>
        <i class="el-icon-view"></i>
        0
        </span>
        <span>
        <i class="el-icon-time"></i>
        {{article.time}}
        </span>
      </small>
      <p></p>
      <div v-html="article.content"></div>
    </article>
  </div>
</template>

<script>
  import marked from 'marked'
  export default {
    data () {
      return {
        articles: []
      }
    },
    mounted () {
      this.$http({
        url: '/api/article/getAllArticle',
        method: 'get'
      }).then((res) => {
        console.log(res)
        this.articles = res.data
        for (let i = 0; i < this.articles.length; i++) {
          this.articles[i].content = marked(this.articles[i].content)
        }
      })
    }
  }
</script>

<style scoped>
  .list-box1{width: 100%;margin-top: 20px;background: #ffffff;border-radius: 5px;box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.34);padding-top: 10px;padding-bottom: 20px}
  h5{margin-top: 5px;margin-bottom: 5px}
  .list-box1 h5 a{ margin-left: 50px; font-weight: bold;font-size: 20px}
  .list-box1 a{text-decoration:none; color:inherit;margin-left: 10px}
  .list-box1 small span{margin-left: 10px}
  .list-box1 a:hover{ color: #fa8072;transition-duration: 0.5s;}
  .list-box1 small{margin-left: 50px}
  .list-box1 p{ height: 1px;background: black;width: 95%;margin-left: 5%}
  .list-box1 div{text-indent:2em; font-weight: lighter;font-size: 15px;color: #444;text-overflow:ellipsis; white-space:nowrap; overflow:hidden}
</style>
