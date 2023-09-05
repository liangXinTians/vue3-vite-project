<template>
  <div class="all">
    <div class="content">
      <div class="content-tag">标签</div>

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

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const containerRef = ref(null)
const loading = ref(false)

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
  console.log(111)
  let form = {
    next_id: artsRequest.next_id,
    page_size: 5,
  }
  // aaaa(form).then((res) => {
  //   articles = res.data
  // })
}

// //进入文章
const getname = (articleName) => {
  // let form = { classId: articleName }
  // gotoArticle(form).then((res) => {
  //   if (res.data.flag) {
  //     router.push({ name: 'experiment' })
  //   } else {
  //     ElMessage.error(res.data.msg)
  //   }
  // })
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
    width: 1200px;
    background-color: rgb(241, 242, 244);
    display: flex;
    justify-content: space-between;
    min-height: calc(100vh - 70px);

    .content-tag {
      width: 230px;
      background-color: aqua;
    }

    .content-article {
      width: 900px;
      background-color: aquamarine;

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
