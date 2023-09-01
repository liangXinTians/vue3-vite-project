<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="router.push({ name: 'aHome' })">首页</el-menu-item>
    <el-menu-item index="2" @click="router.push({ name: 'aHeader' })">bbbb</el-menu-item>
    <el-menu-item index="3">cccc</el-menu-item>
    <el-menu-item index="4">dddd</el-menu-item>
    <!-- <el-menu-item index="5" @click="getInfo">个人信息</el-menu-item> -->
  </el-menu>
  <router-view />
  <div class="login" v-show="infoVisible">
    <div @click="goOut" class="go-out">差号</div>
    <img src="../assets/img/login.png" alt="">
    <!-- 登录 -->
    <el-form :model="form" class="form" v-show="change">
      <el-form-item label="账号 :">
        <el-input v-model="form.name" class="input" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码 :">
        <el-input v-model="form.desc" class="input" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item class="mima">
        <div class="sign-up" @click="change = false">注册</div>
        <div class="out-mima">忘记密码</div>
      </el-form-item>
      <el-form-item>
        <el-button type="success" round style="width: 100%;" @click="getContent">登录</el-button>
      </el-form-item>
    </el-form>

    <!-- 注册 -->
    <el-form :model="form" class="form" v-show="!change">
      <el-form-item label="邮箱 :">
        <el-input v-model="form.email" placeholder="请填写正确邮箱" />
      </el-form-item>
      <el-form-item label="填写密码 :">
        <el-input v-model="form.desc" placeholder="请输入密码" />
      </el-form-item>
      <div class="code">
        <div class="code-input">
          <el-input v-model="form.verification" placeholder="请输入验证码" class="input-code" />
        </div>
        <div class="code-btn">
          <el-button class="btn-code" @click="postVerification">发送验证码</el-button>
        </div>
      </div>
      <el-form-item class="mima">
        <div class="out-mima" @click="change = true">返回登录</div>
      </el-form-item>
      <el-form-item>
        <el-button type="success" round style="width: 100%;" @click="postContnt">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="overlay" v-show="infoVisible"></div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
// import { infoLogin } from "../api/login"

const router = useRouter()
const infoVisible = ref(false)//登录弹出框
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

const getInfo = () => {
  infoVisible.value = true
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

}

//注册
const postContnt = () => {

}

//发送验证码
const postVerification = () => {
  let data = { email: forms.email }
  postVerification(data).then((res) => {
    // if(){

    // }
    // else{
    //   Element.
    // }
  })
}


// const bbbb = () => {
//   change.value = true
// }

</script>

<style lang='less' scoped>
.top {
  width: 100%;
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
  z-index: 101;

  img {
    width: 100%;
    height: 150px;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
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
