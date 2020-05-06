<template>
  <div>
    <div class="box-head">
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :span="20"><el-input v-model="blog.title"></el-input></el-col>
        <el-col :span="2"><el-button type="primary" plain :span="5" @click="saveArticle">保存草稿</el-button></el-col>
        <el-col :span="2"><el-button type="primary" :span="5" @click="dialogFormVisible = true">发布文章</el-button></el-col>
      </el-row>
    </div>
    <el-dialog title="发布文章" :visible.sync="dialogFormVisible" width="35%" :close-on-click-modal="false">
      <el-form>
        <el-form-item label="文章类别：" :label-width="'120px'">
          <el-tag
            @close="handleClose(tag)"
            v-for="tag in tags"
            :key="tag.name"
            closable
            :type="tag.type">
            {{tag.name}}
          </el-tag>
        </el-form-item>
        <el-form-item label="发布形式：" :label-width="'120px'">
          <el-radio v-model="radio" label="1">公开</el-radio>
          <el-radio v-model="radio" label="2">私密</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <mavon-editor
      ref="md"
      @imgAdd="$imgAdd"
      @change="change"
      @save="saveArticle"
      style="min-height: 550px"/>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        dialogFormVisible: false,
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        blog: { title: '', content: '', user: window.sessionStorage.getItem('userId'), readType: 'draft' }
      }
    },
    methods: {
      handleClose (tag) {
        this.tags.splice(this.tags.indexOf(tag), 1)
      },
      // 所有操作都会被解析重新渲染
      change (value, render) {
        // render 为 markdown 解析后的结果[html]
        this.blog.content = render
      },
      // 提交
      submit () {
        console.log(this.blogContent)
        console.log(this.html)
      },
      // 绑定@imgAdd event
      $imgAdd (pos, $file) {
        // 第一步.将图片上传到服务器.
        var formdata = new FormData()
        formdata.append('image', $file)
        this.$http({
          url: '/api/article/file',
          method: 'post',
          data: formdata,
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => {
          const _res = res.data
          console.log(_res)
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          this.$refs.md.$img2Url(pos, _res)
        })
      },
      saveArticle (value, render) {
        this.$http({
          url: '/api/article/saveArticle',
          method: 'post',
          data: this.blog
        }).then((res) => {
          const _res = res.data
          console.log(_res)
        })
      }
    }
  }
</script>

<style scoped>
  .box-head{
    margin-bottom: 10px;
  }
</style>
