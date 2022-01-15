<template>
  <div id="app">
    <div class="row">
      <f-button>按钮</f-button>
      <f-button type="primary">primary按钮</f-button>
      <f-button type="success">success按钮</f-button>
      <f-button type="info">info按钮</f-button>
      <f-button type="danger">danger按钮</f-button>
    </div>
    <div class="row">
      <f-button plain>按钮</f-button>
      <f-button plain type="primary">primary按钮</f-button>
      <f-button plain type="success">success按钮</f-button>
      <f-button plain type="info">info按钮</f-button>
      <f-button plain type="danger">danger按钮</f-button>
    </div>
    <div class="row">
      <f-button round>按钮</f-button>
      <f-button round type="primary">primary按钮</f-button>
      <f-button round type="success">success按钮</f-button>
      <f-button round type="info">info按钮</f-button>
      <f-button round type="danger">danger按钮</f-button>
    </div>
    <div class="row">
      <f-button circle>按钮</f-button>
      <f-button circle type="primary">primary按钮</f-button>
      <f-button circle type="success">success按钮</f-button>
      <f-button circle type="info">info按钮</f-button>
      <f-button circle type="danger">danger按钮</f-button>
    </div>
    <div class="row">
      <f-button icon="bad"></f-button>
      <f-button type="primary" icon="arrow-double-left"></f-button>
      <f-button type="success" icon="arrow-left-circle"></f-button>
      <f-button type="info" icon="arrow-double-right"></f-button>
      <f-button type="danger" icon="caps-lock" disabled></f-button>
      <f-button type="warning" icon="add" @click="getInfo">添加</f-button>
    </div>
    <f-dialog title="温馨提示" width="50%" top="200px" :visible.sync="dialogFormVisible" >
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <!-- <template v-slot:footer>
        <f-button  @click="dialogFormVisible = false">取消</f-button>
        <f-button type="primary">确定</f-button>
      </template> -->
    </f-dialog>
    <!-- 使用v-slot指定插槽进行编辑 -->
    <!-- <f-dialog>
      <template v-slot:title>
        <h2>温馨提示</h2>
      </template>
    </f-dialog> -->
    <!-- <router-view/> -->
    <div class="row">
      <f-input placeholder="请输入密码" type="password" name='name' v-model="username" clearable showPassword></f-input>
      <f-input placeholder="请输入密码" type="password" name='name' disabled></f-input>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      dialogFormVisible:false,
      username:''
    }
  },
  methods: {
    getInfo() {
      this.dialogFormVisible = true
      console.log("获取信息");
    },
    // close(value){
    //   this.dialogFormVisible = value
    // }
  },
};
</script>
<style lang="scss">
.row {
  margin-bottom: 10px;
  .f-button + .f-button {
    margin-left: 10px;
  }
}
</style>
