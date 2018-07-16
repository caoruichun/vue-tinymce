<template>
<el-row>
<el-container class="zhaizhangxin">
  <el-header>
    2.上传课件内容
  </el-header>
  <el-container>
    <el-aside width="400px;overflow:hidden;" >
      <div style="width:400px; height:50px; ">
        <p style="float:left; margin-left:5px">课程章节目录</p>
        <p style="float:right;margin-right:5px" @click="alertBox=true">+新建章节</p>
      </div>
      <el-tree
      :data="data5"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" @mouseover="Show(node, data)" @mouseout="hidden(node, data)"  slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span class="hover">
          <el-button
            type="text"
            size="mini"
           v-if="node.data.tianjia"
            @click="() => append(data)">
             添加
          </el-button>
          <el-button
            type="text"
            size="mini">
            编辑
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            删除
          </el-button>
        </span>
      </span>
    </el-tree>
      </el-aside>
    <el-main>neirong</el-main>
  </el-container>
</el-container>
<!--alert（新增课程章节目录）-->
  <el-dialog
  title="新增课程章节目录"
  :visible.sync="alertBox"
  width="50%"
  center>
  <template>
  <el-select v-model="value" placeholder="新增课程章节">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </template>

  <template>
  <el-select v-model="value2" placeholder="新增课程课时">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
  <span slot="footer" class="dialog-footer">
    <el-button @click="alertBox = false">取 消</el-button>
    <el-button type="primary" @click="alertNewAddZhang()">确 定</el-button>
  </span>
</el-dialog>
</el-row>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>

