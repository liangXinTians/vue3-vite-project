<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <div class="color top-title">校园招聘</div>
    <div class="flex-grow" />
    <el-menu-item index="1" class="color" @click="router.push({ name: 'aHome' })">首页</el-menu-item>
    <el-menu-item index="2" class="color" @click="router.push({ name: 'articles' })">文章</el-menu-item>
    <el-menu-item index="3" class="color" @click="router.push({ name: 'recruit' })">应届生招聘</el-menu-item>
    <el-menu-item index="4" class="color" @click="router.push({ name: 'recruits' })">实习生招聘</el-menu-item>
    <!-- <el-menu-item index="5" @click="getInfo">个人信息</el-menu-item> -->
    <el-sub-menu index="5" class="color">
      <template #title>头像</template>
      <el-menu-item index="5-1" @click="getInfo">个人信息</el-menu-item>
      <el-menu-item index="5-2" @click="router.push({ name: 'writeArticle' })">写文章</el-menu-item>
      <el-menu-item index="5-3" @click="router.push({ name: 'myArticle' })">文章管理</el-menu-item>
    </el-sub-menu>
  </el-menu>

  <router-view />


  <div class="login" v-show="infoVisible">
    <div @click="goOut" class="go-out"><i class="iconfont icon-chahao"></i></div>
    <img src="../assets/img/login.png" alt="">
    <!-- 登录 -->
    <el-form :model="form" class="form" v-show="change">
      <el-form-item label="账号 :">
        <el-input v-model="form.name" class="input" placeholder="请输入账号" type="email" data-validate="请填写正确邮箱" />
      </el-form-item>
      <el-form-item label="密码 :">
        <el-input v-model="form.desc" class="input" placeholder="请输入密码" type="password" name="password" minlength="6"
          data-validate="密码最少六位数" required />
      </el-form-item>
      <el-form-item class="mima">
        <div class="sign-up" @click="change = false; changePass = true">注册</div>
        <div class="out-mima" @click="change = false; changePass = false">忘记密码</div>
      </el-form-item>
      <el-form-item>
        <el-button type="success" round style="width: 100%;" @click="getContent">登录</el-button>
      </el-form-item>
    </el-form>

    <!-- 注册 -->
    <el-form :model="forms" class="form" v-show="!change">
      <el-form-item label="邮箱 :">
        <el-input v-model="forms.email" placeholder="请填写正确邮箱" type="email" data-validate="请填写正确邮箱" />
      </el-form-item>
      <el-form-item label="填写密码 :">
        <el-input v-model="forms.desc" placeholder="请输入密码" type="password" name="password" minlength="6"
          data-validate="密码最少六位数" required />
      </el-form-item>
      <div class="code">
        <div class="code-input">
          <el-input v-model="forms.verification" placeholder="请输入验证码" class="input-code" />
        </div>
        <div class="code-btn">
          <el-button class="btn-code" @click="postVerification">发送验证码</el-button>
        </div>
      </div>
      <el-form-item class="mima">
        <div class="out-mima" @click="change = true">返回登录</div>
      </el-form-item>
      <el-form-item>
        <el-button type="success" round style="width: 100%;" @click="postContnt" v-show="changePass">注册</el-button>
        <el-button type="success" round style="width: 100%;" @click="postContnt" v-show="!changePass">更改密码</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="overlay" v-show="infoVisible"></div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { login, mailvef, mailregister, info } from "../api/login"

const router = useRouter()
const infoVisible = ref(false)//登录弹出框
const changePass = ref(true)//忘记密码 注册
const change = ref(true)
const activeIndex = ref('1')
const form = reactive({//登录表格数据
  name: '',
  desc: '',
})
const forms = reactive({//注册数据
  email: '',
  desc: '',
  verification: ''
})
const token = ref()//登录的token
const user = ref()//个人数据

onMounted(() => {

})

//获取个人数据
const getInfo = () => {
  infoVisible.value = true
}

const getInfos = () => {
  info().then((res) => {
    user.value = res.data
  })
}

const goOut = () => {
  infoVisible.value = false
}



const createInfoLogin = () => {
  let forms = {}
  infoLogin(forms).then((res) => {
  })
}

//登录
const getContent = () => {
  let forms = {
    account: form.name,
    password: form.desc
  }
  login(forms).then((res) => {
    if (res.data.code === 1) {
      router.push({ name: "" })
      infoVisible.value = false
      ElMessage({
        showClose: true,
        message: '登陆成功',
        type: 'success',
      })
    }
    else {
      router.push({ name: 'aHome' })
      infoVisible.value = false
      ElMessage({
        showClose: true, message: '登陆成功',
        type: 'success',
      })
      form.name = ''
      form.desc = ''
      getInfos()
    }
    token.value = res.data.accessToken
    console.log(token.value)
    localStorage.setItem('token', JSON.stringify(token))//存储token
  })
}


//注册
const postContnt = () => {
  change.value = true
  let formss = {
    Account: forms.email,
    code: forms.verification,
    password: forms.desc,
  }
  mailregister(formss).then(() => {
    console.log("注册成功")
    forms.email = ''
    forms.desc = ''
    forms.verification = ''
  })
}

//发送验证码
const postVerification = () => {
  let formsss = { account: forms.email }
  mailvef(formsss).then((res) => {
    console.log("发送验证码成功")
  })
}

//控制主题
const handleSelect = (index) => {
  if (index === "3") {
    const elements = document.querySelectorAll('.color')
    elements.forEach(element => {
      element.style.color = 'rgb(255,255,255)'
    })
  }
  else if (index === "4") {
    const elements = document.querySelectorAll('.color')
    elements.forEach(element => {
      element.style.color = 'rgb(255,255,255)'
    })
  }
  else {
    const elements = document.querySelectorAll('.color')
    elements.forEach(element => {
      element.style.color = 'rgb(19, 5, 5)'
    })
  }
}

</script>

<style lang='less' scoped>
.el-menu-demo {
  position: fixed;
  top: 0;
  left: 50px;
  right: 50px;
  background-color: rgba(0, 0, 0, 0);
  z-index: 10;
}

.color {
  background-color: transparent !important;
  // background-color: transparent;
  color: rgb(19, 5, 5);
}

.top-title {
  font-size: 20px;
  padding-top: 15px;
}

.no-title-dialog .el-dialog__header {
  display: none;
}

.flex-grow {
  flex-grow: 1;
}



.go-out {
  position: fixed;
  top: 0;
  right: 0;
}

.form {
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;

  .code {
    width: 100%;
    display: flex;
    margin-bottom: 20px;

    .code-input {
      width: 74%;

      .input-card {
        // display: block;
        width: 100%;
      }
    }

    .code-btn {
      width: 20%;

      .btn-card {
        // display: block;
        width: 100%;
      }
    }
  }
}

.login {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  width: 550px;
  background-color: rgb(255, 255, 255);
  z-index: 10001;

  img {
    width: 100%;
    height: 150px;
  }

  .icon-chahao {
    padding: 5px 5px 0 0;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.input {
  // border: none;
  // border-bottom: 1px solid black;
}

.input::placeholder {
  font-size: smaller;
}

.mima {
  display: flex;
  justify-content: space-around;

  .sing-up {
    position: fixed;
    left: 30%;
  }

  .out-mima {
    position: fixed;
    right: 15%;
  }
}
</style>
