<template>
  <div class="all">
    <div class="content">

      <!-- 标题 -->
      <div class="data-name">{{ articles.name }}</div>
      <!-- 数据栏 -->
      <!-- <div>{{ articles.name }}</div> -->
      <div class="data-bottom">
        <span class="user.name bottom">梁田</span>
        <span class="data-time bottom"><i class="icon-riqi iconfont"></i>2023-9-3</span>
        <span class="like-sum bottom"><i class="iconfont icon-kanguos"></i>1455</span>
      </div>
      <!-- 内容 -->
      <div class="data-info">
        之前的二维数组视为索引，从0开始，底板在3D世界中相当于一个多象限的坐标，存在负值，所以需要根据前面定义的底板尺寸len进行转换，如果len为10，索引0，0将转换为-5.5，-5.5，多出来的0.5为格子中心位置，通过前面定义的size得到，
      </div>
    </div>
    <!-- 评论 -->
    <div class="comment">
      评论数据
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import bus from '../utils/bus'
import { articleDetail } from '../api/article'

const user = ref()
const datas = reactive({//文章Id
  articleId: null
})
const articles = reactive({
  name: ""
})//文章数据
const comments = ref()//评论数据


onMounted(() => {
  //文章Id
  // bus.on('event', (val) => { console.log(val) })
  bus.on('event', handle)
  // createGetArticle()
  //获取个人信息
  createGetInfo()
  //获取评论数据
  createGetComments()
  handle()
})

//文章数据
const createGetArticle = () => {
  articleDetail({ uuid: datas.articleId }).then((res) => {
    articles.name = res.data.date.name
    console.log(articles.name)
  })
}

//传递的Id
const handle = (val) => {
  // console.log(val)
  datas.articleId = val
  console.log(datas.articleId)
  createGetArticle()
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

  .content {
    width: 950px;
    background-color: rgb(241, 242, 244);
    min-height: calc(100vh - 70px);
    margin: 0 auto;
    padding: 20px;

    .data-name {
      font-size: 26px;
      font-weight: 600;
    }

    .data-bottom {
      padding: 20px 0;

      .bottom {
        padding-right: 10px;
        color: rgb(59, 58, 58);
        opacity: .8;
      }
    }
  }

  .comment {
    width: 950px;
    height: 500px;
    margin: 0 auto;
  }
}
</style>
