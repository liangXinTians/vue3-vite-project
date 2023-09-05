<template>
  <div class="all">
    <div class="content">
      <div class="content-article">
        <div class="content-main">
          <div class="content-title">文章内容</div>
          <div class="content-search">
            <el-input v-model="searchinput" placeholder="请输入文章标题" class="input-with-select">
              <template #append>
                <el-button :icon="Search" @click="searchArticle(searchinput)" />
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
            <div class="classCard" @click="getId(uuid)">
              <div>
                <div class="content-name">name</div>
                <div class="content-info">info</div>
                <div>
                  <div class="like_sum">like_sum</div>
                  <div class="time">time </div>
                  <div class="tag">tag</div>
                </div>
              </div>
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
}

// //进入文章
const getId = (articleId) => {
  const msg = articleId
  bus.emit('event', msg)
  console.log("传递的id", msg)
  router.push({ name: 'article' })
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

  .content {
    width: 900px;
    background-color: rgb(241, 242, 244);
    display: flex;
    justify-content: space-between;
    min-height: calc(100vh - 70px);


    .content-article {
      width: 900px;
      background-color: rgb(241, 242, 244);


      .content-main {
        display: flex;
        justify-content: space-between;

        margin-bottom: 10px;

        .content-title {
          margin-left: 50px;
          margin-top: 10px;
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
        height: 2000px;

      }
    }
  }
}
</style>
