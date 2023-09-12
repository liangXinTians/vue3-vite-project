<template>
  <div class="all">
    <el-row class="top">
      <el-col :span="10" :offset="1">
        <div>
          <input v-model="name" placeholder="输入文章标题..." class="input" />
        </div>
      </el-col>
      <el-col :span="4" :offset="5">
        <el-input v-model="tag" placeholder="Please input">
          <template #append>标签</template>
        </el-input>
      </el-col>
      <el-col :span="3" :offset="1" class="button">
        <div> <el-button type="primary" @click="pullArticle">发布</el-button></div>
      </el-col>
    </el-row>
    <div class="content">
      <v-md-editor v-model="text" :autofocus="true" height="85vh" width="100%" class="editor" ref="editor"
        :left-toolbar="leftBar" :right-toolbar="rightBar" :disabled-menus="[]"
        @upload-image="handleUploadImage"></v-md-editor>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { addArticle } from '../api/article'

const router = useRouter()
const text = ref("文章内容")
const name = ref('')
const tag = ref('')
const date = ref('')
const user = ref()

//左侧工具栏
const leftBar = ref('undo redo clear h bold italic strikethrough quote ul ol table hr link image code')
//右侧工具栏
const rightBar = ref('preview sync-scroll fullscreen')

onMounted(() => {
  // 初始化加载数据
  createGetInfo()
})

const createGetInfo = () => {
  // jiekou().then((res) => {
  //   user.value = res.data
  // })
}

//时间 
const getDate = () => {
  date.value = Date.now()
  console.log(date.value)
}

//发布
const pullArticle = () => {
  console.log(text)
  getDate()
  let form = {
    name: name.value,
    info: text.value,
    tag: tag.value,
    time: date.value,
  }
  addArticle(form).then((res) => {
    ElMessage.success("添加成功")
    console.log(res)
    ElMessage({
      showClose: true,
      message: '登陆成功',
      type: 'success',
    })
  })
}




</script>

<style lang='less' scoped>
.all {
  .input {
    border: 0px;
    outline: none;
    height: 70px;
    width: 100%;
    font-size: 30px;
  }

  .top {
    display: flex;
    align-items: center;
  }

  .button {
    display: flex;
    align-items: center;
  }

  .content {
    width: 100%;
    height: calc(100vh-70px);
  }

}
</style>
