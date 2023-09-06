<template>
  <div class="all">
    <div class="content">
      <div class="content-article">
        <div class="content-main">
          <div class="content-title">文章内容</div>
          <div class="content-search">
            <el-input v-model="searchinput" placeholder="请输入文章标题" class="input-with-select">
              <template #append>
                <el-button @click="searchArticle(searchinput)">搜索</el-button>
              </template>
            </el-input>
          </div>
        </div>
        <el-divider class="divider" />
        <!-- <div class="article-content" ref="container" @scroll="handleScroll">
          <div class="box-card" v-for="(item, index) in articles" :key="index" ref="container" @scroll="handleScroll">
            <div class="classCard" @click="getname(item.uuid)">
              
                <div>{{ item.name }}</div>
                <div>{{ item.info }}</div>
                <div>
                  <div>{{ item.like_sum }}</div>
                  <div>{{ item.time }}</div>
                </div>
              
            </div>
          </div>
        </div> -->
        <div class="article-content" ref="container" @scroll="handleScroll">
          <div class="box-card" ref="container" @scroll="handleScroll">
            <div class="class-card" @click="getId(uuid)">
              <div class="content-name">three.js 打造游戏小场景（拾取武器、领取任务、刷怪）</div>
              <div class="content-info">创建一个平面元素为底板模型，找一个合适的图片作为底板的贴图，上面的代码用的是一个正方形作为基础贴图，方便之后查看，每1个单位含有一个正方形，如下：</div>
              <div class="content-bottom">
                <div class="content-left">
                  <div class="like_sum bottom">1.4k</div>
                  <div class="time bottom">2023-9-3</div>
                  <div class="content-good bottom" @click.stop="likeit()">点赞</div>
                </div>
                <div class="tag">
                  tag
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
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import bus from '../utils/bus'

const router = useRouter()

const containerRef = ref(null)
const loading = ref(false)
const uuid = ref(1)//测试传递的id
const searchinput = ref('')
const artsRequest = ref({//获取文章的内容
  next_id: 0,//文章个数
  page_size: 5,//每次加载的个数
}
)
const articles = ref()//返回的文章数据
const sum = ref(1) //是否点赞

//响应加载更多
const handleScroll = () => {
  const container = containerRef.value
  if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    loadMore()
    console.log('到底了')
  }
}

//搜索
const searchArticle = (searchinput) => {
  articles.value = null
  // 搜索({name: searchinput}).then((res)=>{
  //   articles.value = res.data
  // })
}

// 初始化
const loadMore = () => {
  // console.log(111)
  let form = {
    next_id: artsRequest.next_id,
    page_size: 5,
  }
  // jiekou(form).then((res) => {
  //   articles = res.data
  // })
  if (sum.value === 1) {
    // document.getElementByClassName("content-good").style.color = "rgb(30, 128, 255)"
    console.log("获取不到class")
  }
  else {
    // document.getElementByClassName("content-good").style.color = "rgb(255, 255, 255)"
  }
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
    sum: sum,
    art_id: id
  }
  jiekou(form).then((res) => {
    loadMore()
  })
  if (sum.value === 1) {
    sum.value === -1
  }
  else {
    sum.value === 1
  }
}


onMounted(() => {
  // 初始化加载数据
  loadMore()
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
