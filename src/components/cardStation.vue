<template>
    <div>
      <el-row>
        <el-col
          class="box-card"
          :span="4"
          v-for="(item, index) in props.listValue"
          :key="index"
        >
          <el-card
            :style="'background:' + cardColor[index % cardColor.length]"
            class="classCard"
          >
            <div style="height: 100px; position: relative">
              <el-row class="title">
                <!-- 公司名称 -->
                <el-col :span="19" style="margin-left: 0px">
                  <div class="textOutIgnore" @click="cardClick(item)">
                    {{ item.title }}
                  </div>
                </el-col>
                <!-- 职位类型 -->
                <el-col :span="19" style="margin-left: 0px; margin-top: 20px">
                  <div class="textOutIgnore" @click="cardClick(item)">
                    类型：{{ item.category }}
                  </div>
                </el-col>
                <!-- 职位 -->
                <el-col :span="19" style="margin-left: 0px">
                  <div class="textOutIgnore" @click="cardClick(item)">
                    岗位：{{ item.typeName }}
                  </div>
                </el-col>
                <!-- 简介 -->
                <el-col :span="19" style="margin-left: 0px">
                  <div class="textOutIgnore" @click="cardClick(item)">
                    简介：{{ item.detail }}
                  </div>
                </el-col>
                <!-- 地点 -->
                <el-col :span="19" style="margin-left: 0px">
                  <div class="textOutIgnore" @click="cardClick(item)">
                    地点：{{ item.location }}
                  </div>
                </el-col>
                <!-- 详情按钮 -->
                <el-col style="position: absolute; top: 0px; right: 40px">
                  <el-tooltip effect="dark" content="详情" class="box-item"
                    ><i
                      class="editClass iconfont icon-xiangqing"
                      @click="detailsClick(item,index)"
                    ></i
                  ></el-tooltip>
                </el-col>
                <!-- 刷新按钮 -->
                <!-- <el-col style="position: absolute; top: 0px; right: 40px">
                  <el-tooltip effect="dark" content="刷新" class="box-item">
                    <i
                      class="editClass iconfont icon-shuaxin"
                      @click="refreshClick(item)"
                    ></i
                  ></el-tooltip>
                </el-col> -->
                <!-- 编辑课程按钮 -->
                <el-col style="position: absolute; top: 0px; right: 20px">
                  <el-tooltip effect="dark" content="编辑" class="box-item"
                    ><i
                      class="editClass iconfont icon-bianji"
                      @click="editClick(item)"
                    ></i
                  ></el-tooltip>
                </el-col>
                <!-- 删除课程按钮 -->
                <el-col style="position: absolute; top: 0px; right: 0px">
                  <el-tooltip effect="dark" content="删除" class="box-item"
                    ><i
                      class="editClass iconfont icon-shanchu"
                      @click="deleteClick(item)"
                    ></i
                  ></el-tooltip>
                </el-col>
              </el-row>
              <div class="fillPosBox" @click="cardClick(item)"></div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </template>
    
  <script setup>
  import { defineProps, onMounted } from "vue";
  const props = defineProps({
    listValue: {
      type: Array,
      default: () => [],
    },
  });
  const emit = defineEmits([
    "cardClick",
    "editClick",
    "deleteClick",
    "refreshClick",
    'detailsClick'
  ]);
  const cardColor = [
    "linear-gradient(to bottom right, #4762f3, #5cc3ff)",
    "linear-gradient(to bottom right, #8360fa, #cb8dff)",
    "linear-gradient(to bottom right, #66a6ff, #89f7fe)",
    "linear-gradient(to bottom right, #fda085, #f6d365)",
    "linear-gradient(to bottom right, #1fbdb8, #47e894)",
  ];
  //卡片点击事件-返回参数当前数据项
  const cardClick = (item) => {
    emit("cardClick", item);
    console.log("cardClick", item);
  };
  
  const editClick = (item, index) => {
    emit("editClick", item, index);
  };
  
  const deleteClick = (item) => {
    emit("deleteClick", item);
  };
  const refreshClick = (item) => {
    emit("refreshClick", item);
  };
  const detailsClick=(item,index)=>{
    emit('detailsClick',item,index)
  }
  </script>
  <style scoped>
  /* 卡片内边距 */
  .el-card__body {
    padding: 16px;
  }
  /* 卡片外边框 */
  .box-card {
    margin: 10px 24px 10px 104px;
  }
  /* 班级卡片 */
  .classCard {
    border-radius: 20px;
    min-height: 120px;
    transform: translateY(0);
    transition: transform 300ms linear;
  }
  /* 班级卡片效果*/
  .classCard:hover {
    cursor: pointer;
    position: relative;
    transform: translateY(-3px) translateZ(0);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 12px 0 rgba(0, 0, 0, 0.19);
  }
  /* 班级编辑图标 */
  .editClass {
    display: none;
  }
  .editClass:hover {
    color: #5ff0f0;
  }
  /* 班级卡片效果*/
  .classCard:hover .editClass {
    display: block;
  }
  /* 班级名称 */
  .title {
    font-family: 微软雅黑;
    font-size: 14px;
    color: #ffffff;
  }
  /* 文字长度超出后省略 */
  .textOutIgnore {
    white-space: nowrap;
    word-break: break-all;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
  }
  /* 班级简介 */
  .describes1 {
    font-family: 微软雅黑;
    color: white;
    font-size: 13px;
    font-weight: 200;
    text-indent: 14px; /* 首行缩进 */
    width: 95%; /* 控制宽度 */
    position: absolute; /* 脱离文档流，相对于卡片进行定位 */
    top: 36px; /* 距卡片顶部的距离*/
  }
  /* 班级简介 */
  .describes2 {
    font-family: 微软雅黑;
    color: white;
    font-size: 13px;
    font-weight: 200;
    text-indent: 14px; /* 首行缩进 */
    width: 95%; /* 控制宽度 */
    position: absolute; /* 脱离文档流，相对于卡片进行定位 */
    top: 56px; /* 距卡片顶部的距离*/
  }
  /* 占位框 */
  .fillPosBox {
    position: absolute; /* 脱离文档流，相对于卡片进行定位 */
    top: 36px; /* 距卡片顶部的距离*/
    height: 55%;
    width: 95%;
  }
  /* 信息栏 */
  .infoBar {
    position: relative;
    top: 70%;
  }
  /* 班级人数 */
  .stuNum {
    /* 字体样式 */
    font-family: 微软雅黑, serif;
    font-size: 13px;
    color: #ffffff;
  }
  /* 日期 */
  .dates {
    /* 字体样式 */
    font-family: 微软雅黑, serif;
    font-size: 13px;
    color: #ffffff;
  }
  .images {
    position: absolute;
  
    width: 80px;
    height: 80px;
  }
  </style>