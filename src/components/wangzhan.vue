<template>
<el-container>
  <el-header>Header</el-header>
  <el-container style="border:1px solid #DDD;">
    <el-aside width="400px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
      <el-submenu :index="item.id"  v-for="item in navList" :key="item.id">
        <template slot="title"><i :class="item.class"></i>{{item.title}}</template>
        <el-menu-item-group :title="'分组'+item.id">
          <el-menu-item >
            <a :href="item.url">选项{{item.id}}</a>
          </el-menu-item>
        </el-menu-item-group>
        </el-submenu>
    </el-menu>
    </el-aside>
    <el-container>
      <el-main>Main</el-main>
      
    </el-container>
  </el-container>
  <el-footer>Footer</el-footer>
  <div class='tinymce'>
    <h1>tinymce</h1>
    <editor class="editor" :value="content"  :setting="editorSetting" @input="(content)=> content = content"></editor>
  </div>
</el-container>

</template>
<script>
import editor from "@/components/editor";
export default {
  created() {
    this.api();
  },
  data() {
    return {
      navList: [],
      optopn: -1,
      classList: [
        "el-icon-message",
        "el-icon-menu",
        "el-icon-setting",
        "el-icon-setting"
      ],
      editorSetting: {
        height: 400
      }
    };
  },
  components:{
    'editor':editor
  },
  filters: {},
  methods: {
    api() {
      this.$http.get("/api/getNewsList").then(
        function(date) {
          console.log(date);

          for (let i = 0; i < date.body.length; i++) {
            date.body[i].class = this.classList[i];
          }
          this.navList = date.body;
          console.log(date.body);
        },
        function(err) {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>