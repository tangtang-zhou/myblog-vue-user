<template>
  <article class="list-box1">
    <a href="#">
      <i class="el-icon-collection-tag"></i>
      感悟
    </a>
    <h5><router-link to='/detail'>为什么很多IT公司不喜欢进过培训机构的人呢？</router-link></h5>
    <small>
      <a href="#">
        <i class="el-icon-user-solid"></i>
        汤州</a>
      <a href="#">
        <i class="el-icon-s-comment"></i>
        0</a>
      <span>
        <i class="el-icon-view"></i>
        0
      </span>
      <span>
        <i class="el-icon-time"></i>
        2020/03/21
      </span>
    </small>
    <p></p>
    <div>
      什么是SpringSpring是一个开源框架，2003 年兴起的一个轻量级的Java 开发框架，作者：Rod Johnson
      。Spring是为了解决企业级应用开发的复杂性而创建的，简化开发。Spring是如何简化Java开发的为了降低Java开发的复杂性，Spring采用了以下4种关键策略：1、基于POJO的轻量级和最小侵入性编程；2、通过IOC，依...
    </div>
  </article>
</template>

<script>
  export default {}
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
  .list-box1 div{text-indent:2em; font-weight: lighter;font-size: 15px;color: #444}
</style>
