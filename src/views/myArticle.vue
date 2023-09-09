<template>
  <div class="all">
    <div class="content">

      <div class="content-article">
        <div class="content-main">
          <div class="content-title">个人文章</div>
          <!-- <div class="content-search">
            <el-input v-model="searchinput" placeholder="请输入文章标题" class="input-with-select">
              <template #append>
                <el-button :icon="Search" @click="searchArticle(searchinput)" />
              </template>
            </el-input>
          </div> -->
        </div>
        <el-divider class="divider" />
        <!-- <div class="article-content" ref="container" @scroll="handleScroll">
          <div class="box-card" v-for="(item, index) in articles" :key="index" ref="container" @scroll="handleScroll">
            <div class="classCard" @click="getname(name)">
              <div>{{ item.name }}</div>
              <div>{{ item.info }}</div>
              <div>
                <div>
                  <div>{{ item.like_sum }}</div>
                  <div>点赞</div>
                </div>
                <div>
                  <div>{{ item.time }}</div>
                  <div @click="deleteArticle(item.uuid)">删除文章</div>
                </div>
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
                  <div class="content-good bottom" @click.stop="deleteArticle()">删除</div>
                  <div class="content-good bottom" @click.stop="updatainfo()">修改</div>
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
import UpdataArticle from './updataArticle.vue'

const router = useRouter()

const containerRef = ref(null)
const loading = ref(false)

const searchinput = ref('')
const artsRequest = ref({//获取文章的内容
  next_id: 0,//文章个数
  page_size: 5,//每次加载的个数
}
)
// const articles = ref()//返回的文章数据



// 初始化获取个人文章数据
const loadMore = () => {
  // aaaa().then((res) => {
  //   articles = res.data
  // })
}

// //进入文章
const getId = (articleName) => {
  // let form = { classId: articleName }
  // gotoArticle(form).then((res) => {
  //   if (res.data.flag) {
  //     router.push({ name: 'experiment' })
  //   } else {
  //     ElMessage.error(res.data.msg)
  //   }
  // })
  router.push({ name: 'article' })
  console.log("进入文章")
}

//删除文章
const deleteArticle = (art_id) => {
  aaa({ art_id: art_id }).then((res) => {
    loadMore()
  })
}

//修改文章
const updatainfo = () => {
  // 传递id  .....

  // 进入修改页面
  router.push({ name: 'updataArticle' })
  console.log("进入修改页面")
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
      width: 100%;

      .content-main {
        display: flex;
        justify-content: space-between;

        margin-bottom: 10px;

        .content-title {
          margin-left: 20px;
          margin-top: 15px;
          font-size: 18px;
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
