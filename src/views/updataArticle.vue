<template>
  <div class="all">
    <el-row class="top">
      <el-col :span="10" :offset="1">
        <div>
          <input v-model="articles.name" placeholder="输入文章标题..." class="input" />
        </div>
      </el-col>
      <el-col :span="4" :offset="5">
        <el-input v-model="articles.tag" placeholder="Please input">
          <template #append>标签</template>
        </el-input>
      </el-col>
      <el-col :span="3" :offset="1" class="button">
        <div> <el-button type="primary" @click="pullArticle">更新发布</el-button></div>
      </el-col>
    </el-row>
    <div class="content">
      <v-md-editor v-model="articles.info" :autofocus="true" height="85vh" width="100%" class="editor" ref="editor"
        :left-toolbar="leftBar" :right-toolbar="rightBar" :disabled-menus="[]"
        @upload-image="handleUploadImage"></v-md-editor>
    </div>
  </div>
  <!-- <div>
    1111
  </div> -->
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import bus from '../utils/bus'
import { ElMessage } from 'element-plus'
import { getArticle, updatearticle } from '../api/myArticles'

const router = useRouter()
const text = ref("文章内容")
const name = ref('')
const tag = ref('')
const date = ref('')
const user = ref()
const articles = ref({
  info: ''
})
const datas = reactive({//文章Id
  articleId: 244505152962150400
})

//左侧工具栏
const leftBar = ref('undo redo clear h bold italic strikethrough quote ul ol table hr link image code')
//右侧工具栏
const rightBar = ref('preview sync-scroll fullscreen')

onMounted(() => {
  bus.on('myArticle', handle)
  // 初始化加载数据
  createGetInfo()
  //获取当前文章信息
  createGetArticle()
})

//传递的Id
const handle = (val) => {
  // console.log(val)
  datas.articleId = val
  console.log(datas.articleId)
  createGetArticle()
}


//文章数据
const createGetArticle = () => {
  getArticle({ uuid: datas.articleId }).then((res) => {
    articles.value = res.data.date
    console.log(res)
  })
}

//时间 
const getDate = () => {
  date.value = Date.now()
  console.log(date)
}

//发布 更改
const pullArticle = () => {
  getDate()
  let form = {
    uuid: datas.articleId,
    name: articles.name,
    info: articles.info,
    tag: articles.tag,
    time: date.value,
  }
  updatearticle(form).then((res) => {
    ElMessage.success("修改成功")
    router.push({ name: 'myArticle' })
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
