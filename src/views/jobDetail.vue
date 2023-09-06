<template>
  <div class="content">
    <div class="content-title">运营实习生</div>
    <div class="content-tag">标签</div>
    <div class="job-request">职位描述</div>
    <div class="job-content"><strong>工作职责:</strong></div>
    <div class="job-contentlist">1、负责社区增值业务的日常运营工作，制定合理策略、节奏，实现阶段性目标，能有效协同内外团队。</div>
    <div class="job-content"><strong>工作要求:</strong></div>
    <div class="job-contentlist">1、B站资深用户，喜爱二次元文化，爱看虚拟主播，娱乐主播优先</div>
    <div class="job-button">
      <el-button type="primary" round @click="postjob">投递简历</el-button>
    </div>
  </div>
  <!-- <div class="content">
    <div class="content-title">运营实习生</div>
    <div class="content-tag">{{ datas.job_category }} | {{ datas.type_name }} | {{ datas.job_location }} | {{ datas.push_time }}</div>
    <div class="job-request">职位描述</div>
    <div class="job-content"><strong>工作职责:</strong></div>
    <div class="job-contentlist">{{ require }}</div>
    <div class="job-content"><strong>工作要求:</strong></div>
    <div class="job-contentlist">{{ duty }}</div>
    <div class="job-button">
      <el-button type="primary" round @click="postjob">投递简历</el-button>
    </div>
  </div> -->
</template>

<script setup>
import bus from '../utils/bus'
import { ref, reactive, onMounted } from 'vue'
const jobId = ref()//id
const datas = reactive({})//job数据
const duty = ref()//工作职责
const require = ref()//工作要求

onMounted(() => {
  //Id
  // bus.on('event', (val) => { console.log(val) })
  bus.on('event', handle)
  //获取job内容
  createGetJob()
})

// 获取Id
const handle = (val) => {
  jobId.value = val
}

//job内容
const createGetJob = () => {
  // jiekou({ id: jobId }).then((res) => {
  //   datas = res.data
  // })
  // const [dutys, requires] = datas.job_detail.split("Require:")
  // duty.value = dutys.replace("Duty:", "")
  // require.value = requires.trim()
}

//投递简历
const postjob = () => {
  ElMessage({
    showClose: true,
    message: '完成投递',
    type: 'success',
  })
}


</script>

<style lang='less' scoped>
.content {
  width: 800px;
  margin: 0 auto;
  padding-top: 100px;

  .content-title {
    font-size: 26px;
    font-weight: 600;
  }

  .content-tag {
    color: #999;
    font-size: 14px;
    margin: 10px 0 80px 0;
  }

  .job-request {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
  }

  .job-content {
    line-height: 28px;
    opacity: .7;
  }

  .job-contentlist {
    line-height: 28px;
    opacity: .8;
    font-size: 14px;
  }

  .job-button {
    margin-top: 80px;
  }
}
</style>
