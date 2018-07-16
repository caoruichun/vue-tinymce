import { log } from "core-js";

let id = 1000;
export default {
  created() {

  },
  data() {
    let data = [{
      id: 1,
      label: '第一章：计算机应用基础',
      tianjia: true,
      children: [{
        id: 4,
        label: '二级 1-1',
        tianjia: false
      }]
    }, {
      id: 2,
      label: '第一章：计算机应用基础',
      tianjia: true,
      children: [{
        id: 5,
        label: '二级 2-1',
        tianjia: false
      }, {
        id: 6,
        label: '二级 2-2',
        tianjia: false
      }]
    }, {
      id: 3,
      label: '第一章：计算机应用基础',
      tianjia: true,
      children: [{
        id: 7,
        label: '二级 3-1',
        tianjia: false
      }, {
        id: 8,
        label: '二级 3-2',
        tianjia: false
      }]
    }];
    return {
      showView: [],
      data5: JSON.parse(JSON.stringify(data)),
      alertBox: false, //新增课程章节目录弹框
      options: [{ //章
        value: '1',
        label: '第1章：计算机应用基础'
      }, {
        value: '2',
        label: '第2章：计算机应用基础'
      }, {
        value: '3',
        label: '第3章：计算机应用基础'
      }, {
        value: '4',
        label: '第4章：计算机应用基础'
      }, {
        value: '5',
        label: '第5章：计算机应用基础'
      }],
      value: '',
      options2: [{ //课时
        value: '1',
        label: '第一课时'
      }, {
        value: '2',
        label: '第2课时'
      }, {
        value: '3',
        label: '第3课时'
      }, {
        value: '4',
        label: '第4课时'
      }, {
        value: '5',
        label: '第5课时'
      }],
      value2: '',
      id:new Date().getTime(),
      centerDialogVisible: false,
      input:'',//编辑
      modifyID:[]
    };
  },
  filters: {

  },
  methods: {
    //追加数据
    alertNewAddZhang() {
      this.alertBox = false;
      let newChild = {
        id: id++,
        label: `课程章节${id++}`,
        children: []
      };
      for (let i = 1; i <= this.value; i++) {
        var newChild1 = {};
        newChild1.id = this.id+i;
        newChild1.label = `课程章节${i}`;
        newChild1.tianjia = true;
        newChild1.children=[]
        for (let y = 1; y <= this.value2; y++) {
          var newChild2 ={};
          newChild2.id = this.id+y;
          newChild2.label = `课时${y}`;
          newChild2.tianjia = false;
          newChild1.children.push(newChild2);
        }
      this.data5.push(newChild1);
      }
    },
    // 编辑
    modify(node,data) {
      this.modifyID=data;
      this.centerDialogVisible=true;
      this.input=data.label;
      
    },
    //保存
    save(){
      this.centerDialogVisible=false;
      const parent = this.data5;
     
      // const children = parent.data.children || parent.data;
      // const index = children.findIndex(d => d.id === data.id);
    
    },
    //添加
    append(data) {
      const newChild = {
        id: id++,
        label: '课时',
        children: []
      };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },
    //删除
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
  }
};
