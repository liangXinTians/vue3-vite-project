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
        <!-- <j-comment :key-map="keyMap" :showNumber="2" :comment-datas="commentDatas" @submitComment="submitComment">
        </j-comment> -->
        <!-- <comment></comment> -->
        <BrightComment username="John Doe" comment="This is a great article!" date="2021-07-01" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import bus from '../utils/bus'
import { BrightComment } from 'bright-comment'

const user = ref()
const datas = reactive({//文章Id
  articleId: null
})
const data = ref()//文章数据
const comments = ref()//评论数据

const KeyMap = ref({
  pid: "parent_comment_id",
  id: "id",
  isAdmin: "admin_comment"
})
const commentDatas = ref([
  {
    id: 1,
    admin_comment: 0,
    avatar:
      "https://img2.baidu.com/it/u=134769530,4268043097&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=333",
    create_time: "2020-05-31 23:03:55",
    email: "",
    nickname: "nickname1",
    parent_comment_id: null,
    content: "我是评论1"
  },
  {
    id: 2,
    admin_comment: 0,
    avatar:
      "https://img2.baidu.com/it/u=3133697304,2308274678&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
    create_time: "2020-06-1 23:03:55",
    email: "",
    nickname: "nickname2",
    parent_comment_id: 1,
    content: "我是评论2"
  },
  {
    id: 3,
    admin_comment: 0,
    avatar:
      "https://img2.baidu.com/it/u=3772577665,2044310843&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=727",
    create_time: "2020-05-2 23:03:55",
    email: "",
    nickname: "nickname3",
    parent_comment_id: null,
    content: "我是评论3"
  },
  {
    id: 4,
    admin_comment: 0,
    avatar:
      "https://img0.baidu.com/it/u=3966731730,957573008&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=500",
    create_time: "2020-06-2 23:03:55",
    email: "",
    nickname: "nickname4",
    parent_comment_id: 2,
    content:
      "我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,"
  }
])





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
