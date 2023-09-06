<template>
  <div class="common-layout">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside
        width="160px"
        class="stuPageAside"
        text-color="#fff"
        active-text-color="#ffd04b"
        :style="{
          width: data.sidebarWidth,
          backgroundColor: data.sidebarBackgroundColor,
        }"
      >
        <!--头像-->
        <div class="userAvatarBox">
          <img
            ref="userAvatarImg"
            class="userAvatarImg"
            :style="{ left: data.avatarLeft }"
            src="https://cdn.staticaly.com/gh/442908218/imageBlog@main/imgs/zhizhu.jpg"
            @click="openEditUserInfoDialog"
          />
        </div>
        <!--导航栏-->
        <el-menu
          class="navigationMenu"
          @select="handleSelect"
          :style="{ backgroundColor: data.sidebarBackgroundColor }"
        >
          <!-- 实验中心 -->
          <el-menu-item index="1">
            <el-icon><House /></el-icon>
            <span v-show="!isFont">首页</span>
          </el-menu-item>
          <!-- 课程通知 -->
          <el-menu-item index="2">
            <el-icon><Setting /></el-icon>
            <span v-show="!isFont">管理</span>
          </el-menu-item>
          <!-- 返回首页 -->
          <el-menu-item index="3">
            <el-icon><Fold /></el-icon>
            <span v-show="!isFont">返回首页</span>
          </el-menu-item>
          <!-- 退出登陆 -->
          <el-menu-item index="4">
            <el-icon><Grid /></el-icon>
            <span v-show="!isFont">退出登录</span>
          </el-menu-item>
        </el-menu>

        <!--折叠按钮-->
        <div class="collapseFlagBox">
          <span class="collapseFlag">
            <i
              v-if="!data.isCollapse"
              class="iconfont icon-zuoshuangjiantou"
              @click="foldSideBar"
            ></i>
            <i
              v-else
              class="iconfont icon-youshuangjiantou"
              @click="openSideBar"
            ></i>
          </span>
        </div>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
              <template #title>Workspace</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            <el-menu-item index="4">Orders</el-menu-item>
          </el-menu>
        </el-header>
        <!-- 底部 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const router = useRouter();
const activeIndex = ref("1");
const activeIndex2 = ref("1");
//控制侧边栏宽度
const data = reactive({
  sidebarWidth: "160px",
  isCollapse: false,
  sidebarBackgroundColor: "#fff",
  avatarLeft: "40px",
});
//控制字体消失
const isFont = ref(false);
//关闭侧边栏
const foldSideBar = () => {
  data.isCollapse = true;
  data.avatarLeft = "5px";
  data.sidebarWidth = "70px";
  isFont.value = true;
};
//打开侧边栏
const openSideBar = () => {
  data.isCollapse = false;
  data.avatarLeft = "40px";
  data.sidebarWidth = "160px";
  isFont.value = false;
};
//鼠标点击侧边栏事件
const handleSelect = (index) => {
  const n = Number(index);
  //格式检测
  if (isNaN(n)) {
    ElMessage.error("服务出错，请稍后再试");
  } else {
    switch (index) {
      case "1":
        router.replace({ name: "chartMain" });
        return;
      case "2":
        router.replace({name:'manageMain'})
        return;
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 945px;
  min-height: 400px;
}
//  /deep/.el-menu-item * {
//     color: #fff;
// }
.stuPageAside {
  width: 160px;
  transition: width 0.6s;
  min-height: 720px;
  overflow: hidden;
}

/* 用户头像容器 */
.userAvatarBox {
  margin-top: 40px;
  margin-bottom: 20px;
}

/* 头像图片 */
.userAvatarImg {
  width: 50px;
  height: 50px;
  position: relative;
  left: 40px;
  transition: left 0.5s;
  border-radius: 50%;
  image-rendering: high-quality;
  -ms-interpolation-mode: nearest-neighbor;
  object-fit: cover;
}

.userAvatarImg:hover {
  cursor: pointer;
}

/* 导航菜单 */
.navigationMenu:not(.el-menu--collapse) {
  width: 155px;
  min-height: 550px;
}

.navigationMenu {
  min-height: 550px;
}

.collapseFlagBox {
  text-align: center;
}

/* 导航栏折叠按钮 */
.collapseFlag {
  position: relative;
  bottom: 60px;
}

.collapseFlag:hover {
  cursor: pointer;
}


</style>