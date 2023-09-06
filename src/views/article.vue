<template>
  <div class="all">
    <div class="content" @click="aaa">

      <!-- 标题 -->
      <!-- <div>{{ data.name }}</div> -->
      <!-- 数据栏 -->
      <!-- <div>
        <span>{{ user.name }}</span>
        <span>{{ data.time }}</span>
        <span>{{ data.like_sum }}</span>
      </div> -->
      <!-- 内容 -->
      <!-- <div>{{ data.info }}</div> -->
      <!-- 评论 -->
      <div class="comment">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import bus from '../utils/bus'

const user = ref()
const datas = reactive({//文章Id
  articleId: null
})
const data = ref()//文章数据
const comments = ref()//评论数据


onMounted(() => {
  //文章Id
  // bus.on('event', (val) => { console.log(val) })
  bus.on('event', handle)
  // 初始化加载数据
  createGetArticle()
  //获取个人信息
  createGetInfo()
  //获取评论数据
  createGetComments()
})

//文章数据
const createGetArticle = () => {
  // jiekou({ uuid: articleId }).then((res) => {
  //   data.value = res.data
  // })
}

//传递的Id
const handle = (val) => {
  // console.log(val)
  // datas.articleId = val
  // console.log(datas.articleId)
}

//个人信息
const createGetInfo = () => {
  // jiekou(参数).then((res) => {
  //   user.value = res.data
  // })
}

//获取评论数据
const createGetComments = () => {
  // jiekou({ uuid: articleId }).then((res) => {
  //   comments.value = res.data
  // })
}
</script>

<style lang='less' scoped>
.all {
  width: 100%;
  padding-top: 70px;
  display: flex;
  justify-content: center;

  .content {
    width: 950px;
    background-color: rgb(241, 242, 244);
    display: flex;
    justify-content: space-between;
    min-height: calc(100vh - 70px);
  }

  .comment {
    width: 100%;
    height: 500px;
  }
}
</style>
