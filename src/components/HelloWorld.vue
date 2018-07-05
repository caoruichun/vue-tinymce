<template>
  <div class="hello">
    <el-button type="primary" @click="add">新增</el-button>
   <span v-show="none"> {{name=GLobal.username}}</span>
    <el-button type="primary" @click="save">保存</el-button>
    <router-link to="/hell">表单</router-link>
    <router-link to="/wangzhan">网站</router-link>
    <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column align="center" type="selection">
    </el-table-column>
    <el-table-column align="center" label="设置日期">
      <template slot-scope="scope">
        <span v-show="scope.row.date" >{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="到期时间">
      <template slot-scope="scope">
        <span v-show="scope.row.endTime" >{{ scope.row.endTime }}</span>
        <el-date-picker v-show="!scope.row.endTime" v-model="scope.row.endTime" @change="endTime(scope.row)" value-format="yyyy-MM-dd" format="timestamp" type="date" placeholder="选择日期"></el-date-picker>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="shengyu" label="剩余期限">
    </el-table-column>
     <el-table-column align="center" label="权限设置">
        <template slot-scope="scope">
          <span v-show='scope.row.quan'>{{scope.row.quan=='1'?'开启':'关闭'}}</span>
          <el-select v-show='!scope.row.quan' @change="quanxianbian" v-model="scope.row.quan" placeholder="请选择">
          <el-option v-for="item in sub" :key="item.sub" :label="item.sub" :value="item.quan"></el-option>
        </el-select>
        </template>
    </el-table-column>
    <el-table-column align="center" label="姓名">
      <template slot-scope="scope">
        <span v-show="scope.row.name">{{scope.row.name}}</span>
         <el-autocomplete v-show="!scope.row.name" class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect"
    ></el-autocomplete>
      </template>
    </el-table-column>
    <el-table-column align="center" label="地址" show-overflow-tooltip>
      <template slot-scope="scope">
        <span v-show="scope.row.address">{{scope.row.address}}</span>
         <el-autocomplete v-show="!scope.row.address" class="inline-input" v-model="state3" :fetch-suggestions="querySearchq" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelectq">
           <template slot-scope="{ item }">
               <span class="addr">{{ item.address }}</span>
           </template>
         </el-autocomplete>
      </template>
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <template>
    <el-date-picker
      v-model="value1"
      type="date"

      clear-icon=''
      placeholder="选择日期">
    </el-date-picker>
  </template>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      restaurants: [],
      restaurantsq: [],
      none:false,
      value1:'',
      state2: '',
      state3:'',
      name:'',
      sub:[
        {quan:'0',sub:'关闭'},
        {quan:'1',sub:'开启'}
      ],
      tableData3: [
        {
          id:122,
          date: "2016-05-03",
          endTime:'2018-07-07',
          shengyu:56,
          quan:'0',
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id:222,
          date: "2016-05-02",
          endTime:'2018-07-07',
          shengyu:56,
          quan:'0',
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id:333,
          date: "2016-05-04",
          endTime:'2018-07-07',
          shengyu:56,
          quan:'0',
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id:234,
          date: "2016-05-01",
          endTime:'2018-07-07',
          shengyu:56,
          quan:'0',
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id:2232,
          date: "2016-05-08",
          endTime:'2018-07-07',
          shengyu:56,
          quan:'1',
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id:622,
          date: "2016-05-06",
          endTime:'2018-07-07',
          shengyu:56,
          quan:'1',
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id:71,
          date: "2016-05-07",
          endTime:'2018-07-07',
          shengyu:56,
          quan:'1',
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      _date:'',
      newtime:'',
      multipleSelection: []
    };
  },
  methods: {
    handleClick(res){
      console.log(res);
      
    },
    //权限
    quanxianbian(res){
      console.log(res);
      console.log(this.name);
      
    },
    //剩余时间  
    endTime(res){
      if(res.endTime){
        var endTime=res.endTime;
        let date=new Date(endTime.replace(/-/g,'/'));
        let getTime=date.getTime();
        var newDate=new Date().getTime();//当前时间戳
        var shengyuTime=getTime-newDate;
        if(shengyuTime<=0){
          res.shengyu='-';
        }else{
          res.shengyu=Math.floor(shengyuTime/86400000);
        }
      }     
    },
    //全选
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //发送数据
    save(){
      console.log(this._date);
    },
    add(){
      this.newdate()
      this._date={
          date: this.newtime,
          endTime:'',
          shengyu:'',
          quan:this.sub.quan,
          name: "",
          address: ""
      }
      this.tableData3.unshift(this._date);
    },
    newdate(){
      let date=new Date();
      let year=date.getFullYear();
      let month=date.getMonth()+1;
      let day=date.getDate();
       this.newtime=year+'-'+month+'-'+day;
    },
    querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      querySearchq(queryString, cb) {
        var restaurants = this.restaurantsq;
        var results = queryString ? restaurants.filter(this.createFilterq(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      createFilterq(queryString) {
        return (restaurant) => {
          return (restaurant.address.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      handleSelect(item) {
        this._date.name=item.value;
        console.log(this._date.name);
      },
      handleSelectq(item) {
        
        this._date.address=item.address;
        console.log(this._date.address);
      }
    
  },
  mounted(){
    this.restaurants = this.loadAll();
    this.restaurantsq = this.loadAll();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-input{
  width: 200px;  
}
.el-input i.el-input__icon::after{
  display: none !important;
  opacity: 0;
  font-size: 0;
}
.el-input__suffix{
  display: none;
}
.el-input__suffix-inner{
  display: none;
}
.el-input .el-input__suffix .el-input__suffix-inner i.el-icon-circle-close{
  display: none !important;
}
</style>
