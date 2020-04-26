<template>
  <div id="container">
    <aside id="sideBar">
      <section>
        <h5>文章分类</h5>
        <div>
          <a href="#">设计模式</a>
          <a href="#">SpringMVC</a>
          <a href="#">SpringBoot</a>
          <a href="#">Vue</a>
          <a href="#">MyBatis</a>
          <a href="#">IDEA</a>
          <a href="#">LayUi</a>
          <a href="#">JavaScript</a>
          <a href="#">Javac基础</a>
          <a href="#">微服务</a>
        </div>
      </section>
      <section>
        <h5>热门文章</h5>
        <div>
          <ul>
            <li><a href="#">为什么很多IT公司不喜欢进过培训机构的人</a>
            <li><a href="#">微服务(Microservices)—Martin Flower</a></li>
            <li><a href="#">学Java的你，真有进步吗？</a></li>
            <li><a href="#">Vue：MVVM模式和第一个Vue程序</a></li>
            <li><a href="#">SpringMVC：结果跳转方式</a></li>
            <li><a href="#">SpringMVC：数据处理</a></li>
            <li><a href="#">Java基础：变量，常量、运算符</a></li>
            <li><a href="#">Java基础：包机制、JavaDoc、小结</a></li>
            <li><a href="#">Java基础：流程控制、Scanner</a></li>
            <li><a href="#">Java基础：方法详解</a></li>
          </ul>
        </div>
      </section>
    </aside>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  #container{
    width: 27%;
  }
  #container aside section{ border-radius: 5px}
  #container aside section h5{  background-image: linear-gradient(to bottom, white , #BCBCBC);
  ;height: 40px;line-height: 40px;font-size: 17px;font-weight: bold;text-align: center;border-radius: 5px;margin-bottom: 10px; margin-top: 0}
  #container aside section{ background: #ffffff; box-shadow: 1px 1px 2px #B3B3B3;padding-bottom: 10px}
  #container aside section a{ margin-left: 8px;font-size: 13px;text-decoration:none; color:#303133;display: inline-flex}
  #container aside section a:hover{color: #fa8072;transition-duration: 0.5s;}
  #container aside section div ul li{ height: 30px;line-height: 30px; border-bottom: 1px dashed;list-style: none}
  #container aside section div ul{ padding: 5px}
</style>
