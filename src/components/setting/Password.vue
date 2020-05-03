<template>
  <el-form label-width="100px" label-position="left">
    <el-form-item label="输入旧密码">
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="输入新密码">
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="确认新密码">
      <el-input></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">修改</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {}
</script>

<style scoped>
  .el-form{
    margin-left: 50px;
  }
</style>
