<template>
  <div>
    <mavon-editor
      v-model="content"
      ref="md"
      @imgAdd="$imgAdd"
      @imgDel="$imgDel"
      @change="change"
      style="min-height: 600px"/>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        content: '', // 输入的markdown
        html: '' // 及时转的html
      }
    },
    methods: {
      // 所有操作都会被解析重新渲染
      change (value, render) {
        // render 为 markdown 解析后的结果[html]
        this.html = render
      },
      // 提交
      submit () {
        console.log(this.content)
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
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          this.$refs.md.$img2Url(pos, _res.url)
        })
      },
      $imgDel (pos) {
        delete this.img_file[pos]
      }
    }
  }
</script>

<style>

</style>
