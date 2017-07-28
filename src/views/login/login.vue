<template>
<div class="login-container flex all-center">
    <el-form class="login-form">
        <h3 class="t-center">登录</h3>

        <el-form-item prop="login">
            <el-input placeholder="请输入用户名"
                      name="username"
                      v-model="login.username"
                      autoComplete="on"
                      size="large" type="text">
                <template slot="prepend">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-touxiang"></use>
                    </svg>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item prop="login">
            <el-input placeholder="请输入密码"
                      name="password"
                      v-model="login.password"
                      size="large" type="password">
                <template slot="prepend">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-quanxian"></use>
                    </svg>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item class="flex all-center">
            <el-button type="primary" @keyup.enter="onSubmit" @click="onSubmit">登录</el-button>
            <el-button>注册</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
    export default{
        data(){
            return{
                login:{}
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch('LoginByEmail', this.login)
                    .then(()=>{
                        this.$message({
                            message: "登录成功",
                            type: 'success',
                            duration: 10 * 1000
                        })
                        this.$router.push({path: '/'})
                    })
//                console.log('submit!');
            }
        }
    }
</script>

<style scoped lang="scss">
    .login-container{
        height: 100vh;
    }
</style>