<template>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix">
      <span>用户注册</span>
    </div>
    <el-form
      ref="userData"
      :model="userData"
      status-icon
      :rules="registerRules"
      label-width="100px"
      class="demo-ruleForm">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model.number="userData.phone" />
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="userData.pwd" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPwd">
        <el-input v-model="userData.checkPwd" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userData')">
          提交
        </el-button>
        <el-button @click="resetForm('userData')">
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  name: 'register',
  data() {
    const checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      }
      if (!/^1(3|4|5|7|8)\d{9}$/.test(value)) {
        return callback(new Error('手机号格式有误'))
      }
      callback()
    }
    const validatePwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.userData.checkPwd !== '') {
          this.$refs.userData.validateField('checkPwd')
        }
        callback()
      }
    }
    const validatePwd2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.userData.pwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      userData: {
        pwd: '',
        checkPwd: '',
        phone: ''
      },
      registerRules: {
        pwd: [
          {
            validator: validatePwd,
            trigger: 'blur'
          }
        ],
        checkPwd: [
          {
            validator: validatePwd2,
            trigger: 'blur'
          }
        ],
        phone: [
          {
            validator: checkPhone,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    register({ phone, pwd }) {
      this.$axios
        .post(`/admin/register`, { phone, pwd })
        .then(res => {
          if (res.code === 0) {
            alert('注册成功')
          } else {
            throw new Error(res.msg)
          }
        })
        .catch(err => {
          alert(err.message)
        })
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.register(formName)
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
</style>
