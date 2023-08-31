<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="router.push({ name: 'aHome' })">首页</el-menu-item>
    <el-menu-item index="2" @click="router.push({ name: 'aHeader' })">bbbb</el-menu-item>
    <el-menu-item index="3">cccc</el-menu-item>
    <el-menu-item index="4">dddd</el-menu-item>
    <el-menu-item index="5" @click="getInfo">个人信息</el-menu-item>
  </el-menu>
  <router-view />
  <div class="login" v-show="infoVisible">
    <div @click="goOut">差号</div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="账号 :">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码 :">
        <el-input v-model="form.desc" />
      </el-form-item>
    </el-form>
  </div>
  <div class="overlay" v-show="infoVisible"></div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { infoLogin } from "../api/login"

const router = useRouter()
const infoVisible = ref(false)//登录弹出框
const activeIndex = ref('1')
const form = reactive({//登录表格数据
  name: '',
  desc: '',
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

.login {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 400px;
  background-color: rgb(70, 196, 196);
  z-index: 101;
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
</style>
