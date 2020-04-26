<template>
    <div class="main-box">
      <div class="list-box">
        <Carousel/>
        <List/>
      </div>
      <NavBar/>
    </div>
</template>

<script>
  import Carousel from './Carousel'
  import NavBar from './NavBar'
  import List from './List'
  export default {
    components: {
      Carousel,
      NavBar,
      List
    }
  }
</script>
<style scoped>
  .main-box{
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    display: flex;
    justify-content: space-between;
  }
  .list-box{
    width: 70%;
  }
</style>
