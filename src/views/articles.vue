<template>
  <div class="all">
    <div class="content">
      <div class="content-article">
        <!-- 搜索 -->
        <div class="content-main">
          <div class="content-title">文章内容</div>
          <div class="content-search">
            <el-input v-model="searchinput" placeholder="请输入文章标题" class="input-with-select">
              <template #append>
                <el-button @click="searchArticles()">搜索</el-button>
              </template>
            </el-input>
          </div>
        </div>
        <el-divider class="divider" />
        <!-- 文章列表 -->
        <div class="article-content">
          <div class="box-card" v-for="(item, index) in articles" :key="index">
            <div class="class-card" @click="getId(item.uuid)">
              <div class="content-name">{{ item.name }}</div>
              <div class="content-info">{{ item.info }}</div>
              <div class="content-bottom">
                <div class="content-left">
                  <div class="like_sum bottom"><i class="iconfont icon-kanguos"></i>{{ item.like_sum * 130 }}</div>
                  <div class="time bottom"><i class="iconfont icon-riqi"></i>{{ new Date(item.time).toLocaleDateString()
                  }}
                  </div>
                  <div class="content-good bottom" @click.stop="likeit(item.uuid)"><i class="iconfont icon-good"></i>{{
                    item.like_sum }}</div>
                </div>
                <div class="tag">
                  {{ item.tag }}
                </div>
              </div>
              <el-divider />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import bus from '../utils/bus'
import { getArticle, goodArticle, searchArticle } from '../api/article.js'

const router = useRouter()

const state = reactive({
  items: [], // 页面内容列表
  windowHeight: 0, // 窗口高度
  scrollHeight: 0, // 页面内容的总高度
  scrollTop: 0, // 滚动条的垂直偏移量
})

const uuid = ref(1)//测试传递的id
const searchinput = ref('')
const artsRequest = reactive({//获取文章的内容
  next_id: 0,//文章个数
  page_size: 0,//每次加载的个数
}
)
const articles = ref([])
const sum = ref(0) //是否点赞


//搜索
const searchArticles = () => {
  let form = {
    name: searchinput.value
  }
  searchArticle(form).then((res) => {
    console.log(res)
    articles.value = res.data.date
    console.log(res.data.date)
  })
}

// 初始化
const loadMore = () => {
  artsRequest.page_size += 5
  let form = {
    next_id: artsRequest.next_id,
    page_size: artsRequest.page_size,
  }

  getArticle(form).then((res) => {
    articles.value = res.data.date
    console.log(res)
  })
  // if (sum.value = 1) {
  //   document.querySelector(".content-good").style.color = "rgb(30, 128, 255)"
  // }
  // else {
  //   document.querySelector(".content-good").style.color = "rgb(30, 30, 30)"
  // }
}

// //进入文章
const getId = (articleId) => {
  const msg = articleId
  bus.emit('event', msg)
  console.log("传递的id", msg)
  router.push({ name: 'article' })
}

//点赞
const likeit = (id) => {
  let form = {
    sum: sum.value,
    art_id: id
  }
  goodArticle(form).then((res) => {
    loadMore()
    console.log(res)
  })
  if (sum.value === 1) {
    sum.value = 0
  }
  else {
    sum.value = 1
  }
  loadMore()
}

// 监听滚动事件，更新滚动相关的状态
const handleScroll = () => {
  state.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  // console.log(state.scrollTop)
  if (state.scrollTop + state.windowHeight >= state.scrollHeight) {
    // console.log("到底了")
    // loadMore()
  }
}

// setInterval(() => {
//   state.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
//   if (state.scrollTop + state.windowHeight >= state.scrollHeight) {
//     console.log("到底了")
//   }
// }, 1000)



// 初始化页面高度相关的状态
const initializePageHeight = () => {
  state.windowHeight = window.innerHeight
  state.scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
  // console.log(state.windowHeight, state.scrollHeight)
}

onMounted(() => {
  // 初始化加载数据
  loadMore()
  //监听方法
  window.addEventListener('scroll', handleScroll)
  initializePageHeight()
})
</script>

<style lang='less' scoped>
.all {
  width: 100%;
  padding-top: 70px;
  display: flex;
  justify-content: center;
  background-color: rgb(241, 242, 244);

  .content {
    width: 900px;
    display: flex;
    justify-content: space-between;
    min-height: calc(100vh - 70px);

    .content-article {
      width: 850px;
      background-color: rgb(255, 255, 255);

      .content-main {
        display: flex;
        justify-content: space-between;

        margin-bottom: 10px;

        .content-title {
          margin-left: 50px;
          margin-top: 15px;
        }

        .content-search {
          margin-top: 10px;

          margin-right: 40px;

          .input-with-select {
            width: 400px
          }
        }
      }

      .divider {
        margin: 0;
      }

      .article-content {
        width: 100%;

        .box-card {
          width: 100%;

          &:hover {
            background-color: rgb(247, 248, 250);
          }

          .class-card {
            width: 100%;
            height: 140px;
            padding: 10px 20px;

            .content-name {
              font-size: 22px;
              font-weight: 600;
              padding-bottom: 10px;
            }

            .content-info {
              color: rgb(59, 58, 58);
              font-size: 14px;
              width: 800px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              padding-bottom: 10px;

            }

            .content-bottom {
              display: flex;
              justify-content: space-between;
              color: rgb(59, 58, 58);
              font-size: 14px;

              .content-left {
                display: flex;

                .bottom {
                  padding-right: 10px;
                }

                .content-good {
                  &:hover {
                    color: rgb(30, 128, 255);
                  }
                }
              }

              .tag {
                padding-right: 10px;
              }
            }
          }
        }

      }
    }
  }
}
</style>
