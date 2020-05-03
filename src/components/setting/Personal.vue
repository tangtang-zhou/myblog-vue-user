<template>
  <el-form ref="form" label-width="100px" label-position="left">
    <el-form-item label="昵称">
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="电子邮件">
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="手机">
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group>
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="生日">
      <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
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
