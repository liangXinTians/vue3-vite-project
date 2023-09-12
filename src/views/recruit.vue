<template>
  <div class="all">
    <!-- 图片 -->
    <div class="top">
      <img src="../assets/img/xiaoyuan.png" alt="">
    </div>
    <!-- 搜索 -->
    <div class="searchs">
      <div class="search bar7">
        <form>
          <input type="text" placeholder="搜索职位" class="input" v-model="search.data">
          <el-button type="primary" round class="submit" @click="createGetJob">搜索</el-button>
        </form>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="content-tag">
        <div class="tag-title">筛选条件</div>
        <el-collapse>
          <el-collapse-item title="实习公司" name="1">
            <el-radio-group @change="handleRadioChange1" v-model="radio.radio1">
              <el-radio label="抖音" size="large">抖音</el-radio>
              <el-radio label="360" size="large">360</el-radio>
            </el-radio-group>
          </el-collapse-item>
          <el-collapse-item title="职位类别" name="2">
            <el-radio-group @change="handleRadioChange2" v-model="radio.radio2">
              <el-radio label="产品类" size="large">产品类</el-radio>
              <el-radio label="售前交付类" size="large">售前交付类</el-radio>
              <el-radio label="大数据类" size="large">大数据类</el-radio>
              <el-radio label="安全类" size="large">安全类</el-radio>
              <el-radio label="测试运维类" size="large">测试运维类</el-radio>
              <el-radio label="硬件类" size="large">硬件类</el-radio>
              <el-radio label="算法类" size="large">算法类</el-radio>
              <el-radio label="职能类 " size="large">职能类 </el-radio>
            </el-radio-group>
          </el-collapse-item>
          <el-collapse-item title="工作地点" name="3">
            <el-radio-group @change="handleRadioChange3" v-model="radio.radio3">
              <el-radio label="北京市" size="large">北京市</el-radio>
              <el-radio label="青岛市" size="large">青岛市</el-radio>
              <el-radio label="深圳市" size="large">深圳市</el-radio>
              <el-radio label="上海市" size="large">上海市</el-radio>
            </el-radio-group>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="content-pages">
        <div class="content-title">职位列表</div>
        <div class="content-page">
          <div class="content-page" v-for="(item, index) in alljob" :key="index">
            <div class="page" @click="goPage">
              <div class="page-left">
                <div class="left-title">{{ item.title }}</div>
                <div class="page-tag"><span class="span">{{ item.job_location }} </span><span class="span">{{
                  item.job_typeName }} </span><span class="span">{{
    item.company }}</span></div>
              </div>
              <div class="page-right">
                <div class="look-job">查看职位</div>
                <div class="job-icon"><i class="iconfont icon-jiantouyou"></i></div>
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
import { searchjob } from '../api/job'

const router = useRouter()
const user = ref()
const activeNames = ref(['1'])
const radio = reactive({//raido
  radio1: '',
  radio2: '',
  radio3: '',
})
const search = reactive({
  data: ''
})
const alljob = ref()



onMounted(() => {
  // 初始化
  createGetJob()
})


const createGetJob = () => {
  console.log("开始调用接口", search.data)
  let form = {
    name: radio.radio1,
    title: search.data,
    job_category: "校园招聘",
    job_type_name: radio.radio2,
    job_location: radio.radio3,
    next_id: -1,//最后一个职位的id
    page_size: 10
  }
  searchjob(form).then((res) => {
    alljob.value = res.data.date
    console.log("接口调用成功", res)
  })
}


// 点击筛选条件
const handleRadioChange1 = (value) => {
  radio.radio1 = value
  createGetJob()
}

const handleRadioChange2 = (value) => {
  radio.radio2 = value
  createGetJob()
}
const handleRadioChange3 = (value) => {
  radio.radio3 = value
  createGetJob()
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

              .span {
                padding-right: 10px;
              }
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
