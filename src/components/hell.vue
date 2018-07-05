<template>
 <el-table :data="users" highlight-current-row style="width: 100%;">
    <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
    </el-table-column>
    <el-table-column prop="cz" label="操作" width="320">
         <template slot-scope="scope">
             <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
             <el-button size="small" @click="handleEdit(scope.$index, scope.row)"> {{scope.row.status | formatStatus}} </el-button>
         </template>
     </el-table-column>
</el-table>
</template>

<script>
export default {
  created() {
    this.$http.get('/api/getNewsList')
    .then(function(date){
      console.log(date);
      
    },function(err){
      console.log(err);
    })
  },
  data() {
    return {
      users: [
        {
          sex: 1,
          cx: false,
          status: 1
        },
        {
          sex: 0,
          cx: false,
          status: 2
        },
        {
          sex: 1,
          cx: false,
          status: 2
        },
        {
          sex: 0,
          cx: false,
          status: 2
        }
      ]
    };
  },
  filters: {
    formatStatus: function(val) {
      return val == 1 ? "上架" : val == 2 ? "下架" : "未知";
    }
  },
  
  methods: {
    //性别显示转换
    formatSex: function(row, column) {
      return row.sex == 1 ? "男" : row.sex == 0 ? "女" : "未知";
    },
    handleEdit(res, index) {
      console.log(res, index);
    }
  }
};
</script>

<style>
.cell-edit-input .el-input,
.el-input__inner {
  width: 100px;
}
.cell-icon {
  cursor: pointer;
  color: #fff;
}
</style>