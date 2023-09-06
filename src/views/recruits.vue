<template>
  <div class="all">
    <!-- 图片 -->
    <div class="top">
      <img src="../assets/img/shixisheng.png" alt="">
    </div>
    <!-- 搜索 -->
    <div class="searchs">
      <div class="search bar7">
        <form>
          <input type="text" placeholder="搜索职位" class="input">
          <el-button type="primary" round class="submit" @click="submit">搜索</el-button>
        </form>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="content-tag">
        <div class="tag-title">筛选条件</div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="实习类型" name="1">
            <el-radio-group @change="handleRadioChange1">
              <el-radio label="日常学习" size="large">日常学习</el-radio>
              <el-radio label="暑假学习" size="large">暑假学习</el-radio>
              <el-radio label="3" size="large">Option 3</el-radio>
              <el-radio label="4" size="large">Option 4</el-radio>
            </el-radio-group>
          </el-collapse-item>
          <el-collapse-item title="职位类别" name="2">
            <el-radio-group @change="handleRadioChange2">
              <el-radio label="日常学习" size="large">日常学习</el-radio>
              <el-radio label="暑假学习" size="large">暑假学习</el-radio>
              <el-radio label="3" size="large">Option 3</el-radio>
            </el-radio-group>
          </el-collapse-item>
          <el-collapse-item title="工作地点" name="3">
            <el-radio-group @change="handleRadioChange3">
              <el-radio label="日常学习" size="large">日常学习</el-radio>
              <el-radio label="暑假学习" size="large">暑假学习</el-radio>
              <el-radio label="4" size="large">Option 4</el-radio>
            </el-radio-group>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="content-pages">
        <div class="content-title">职位列表</div>
        <div class="content-page">
          <div class="page" @click="goPage">
            <div class="page-left">
              <div class="left-title">标题</div>
              <div class="page-tag">地点 职位 类型</div>
            </div>
            <div class="page-right">
              <div class="look-job">查看职位</div>
              <div class="job-icon">箭头</div>
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
const user = ref()
const activeNames = ref(['1'])
const radio1 = ref('1')
const serchjob = reactive({ //初始化和搜索的参数
  name: "",
  title: "",
  job_category: "",
  job_type_name: "",
  job_location: "",
  next_id: 0,//最后一个职位的id
  page_size: 10
})
const datas = reactive({

})





onMounted(() => {
  // 初始化
  // createGetJob()
})

// const createGetJob = () => {
//   jiekou(serchjob).then((res) => {
//     datas = res.data
//   })
//   datas = null
// }

// 点击筛选条件
const handleRadioChange1 = (value) => {
  serchjob.job_category = value
  // createGetJob()
}

const handleRadioChange2 = (value) => {
  serchjob.job_type_name = value
  // createGetJob()
}
const handleRadioChange3 = (value) => {
  serchjob.job_location = value
  // createGetJob()
}


//进入详情页 岗位信息
const goPage = (id) => {
  // const msgs = 1
  // bus.emit('event', msgs)
  // console.log("传递的id", msgs)
  router.push({ name: 'jobDetail' })
}

</script>

<style lang='less' scoped>
.all {
  width: 100%;
  // padding-top: 70px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  .top {
    height: 300px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .searchs {
    z-index: 100;
    height: 40px;
    width: 500px;
    margin-top: -20px;

    .bar7 {
      height: 100%;

      form {
        height: 42px;
        display: flex;
        position: relative;

        .input {
          width: 500px;
          border-radius: 42px;
          padding-left: 20px;
          // border: 0px;
          outline: none;
          border: 0.4px solid rgb(57, 126, 233);
        }

        .submit {
          cursor: pointer;
          position: absolute;
          right: 10px;
          top: 5px;
        }
      }
    }
  }

  .content {
    width: 1000px;
    // background-color: rgb(241, 242, 244);
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
    margin-top: -20px;

    .content-tag {
      width: 24%;
      // background-color: aqua;
      padding-top: 50px;

      .tag-title {
        font-size: 20px;
        padding: 15px 0;
      }
    }

    .content-pages {
      width: 70%;
      padding-top: 50px;

      // background-color: aquamarine;
      .content-title {
        font-size: 20px;
        padding: 15px 0;
      }

      .content-page {
        .page {
          display: flex;
          margin: 10px 0;
          justify-content: space-between;
          height: 150px;
          align-items: center;
          cursor: pointer;

          &:hover {
            .page-left {

              // display: flex;
              .left-title {
                font-weight: 600;
                font-size: 18px;
                color: rgb(0, 161, 214);
              }
            }

            .page-right {
              display: flex;
              align-items: center;

              .look-job {
                color: rgb(0, 161, 214);
                opacity: 1;
                padding-right: 5px;
              }

              .job-icon {
                color: rgb(0, 161, 214);
              }
            }
          }

          .page-left {

            // display: flex;
            .left-title {
              font-weight: 600;
              font-size: 18px;
            }

            .page-tag {
              color: #999;
              font-size: 14px;
              margin-top: 5px;
            }
          }

          .page-right {
            display: flex;
            align-items: center;

            .look-job {
              color: rgb(0, 161, 214);
              opacity: 0;
              padding-right: 5px;
              transition: 0.2s;
            }

            .job-icon {}
          }

        }

      }
    }
  }
}
</style>
