<template>
  <div id="login">
    <div class="loginToHome">
      <el-form
        ref="form"
        :model="form"
        :rules="ruleForm"
        status-icon
        label-width="80px"
        class="loginForm"
      >
        <h3>注册 Corange</h3>
        <el-form-item
          label="用户名"
          prop="name"
        >
          <el-input
            type="text"
            v-model="form.name"
            auto-complete="off"
            placeholder="请输入用户名"
            prefix-icon='el-icon-user'
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            type="password"
            v-model="form.password"
            auto-complete="off"
              prefix-icon='el-icon-view'
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="homeBut"
            type="primary"
            plain
            @click="reg"
          >注册</el-button>
         <el-button
            class="loginBut"
            type="primary"
            plain
            :loading="logining"
            @click="submit"
          >登录</el-button>
        </el-form-item>
      </el-form>
 
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logining: false,
      form: {
        name: 'admin',
        password: '123456'
      },
      ruleForm: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    // 登录
    submit(event) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.logining = true;
          if (this.form.name === 'admin' &&
            this.form.password === '123456') {
            this.logining = false;
            sessionStorage.setItem('user', this.form.name);
            this.$router.push('/layout');
          } else {
            this.logining = false;
            this.$alert('name or password wrong!', 'info', {
              confirmButtonText: 'ok'
            })
          }
        } else {
          console.log('error submit!');
          return false;
        }
      })
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
    // 注册-> 跳转到register
    reg(){
       this.$router.push('/reg');

    }
 
  }
}
</script>
<style>
.loginToHome {
  position: absolute;
  left: 300px;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 350px;
  height: 260px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  
}
.loginForm {
  text-align: center;
  padding-top: 15px;
  padding-right: 30px;
  top: 10px;
}
.homeBut {
  position: absolute;
  left: 0px;
}
.loginBut {
  position: absolute;
  right: 0px;
}
h3 {
  color:#fff;
  padding-bottom: 20px;
  letter-spacing: 0.8px;
  padding-left: 27px;
}
</style>