<template>
  <header>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="~assets/header.jpg">
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <router-link class='inlineBlock' to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <router-link class='inlineBlock' to="/admin/profile">
            <el-dropdown-item>
              设置
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu>
  </header>

</template>

<style>
  .avatar-wrapper img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
  }

  .avatar-wrapper {
    padding: 5px 0;
    margin-right: 30px;
  }
</style>

<script>
  export {default} from './navbar.js';
</script>
<!--<script src="./navbar.js"></script>-->
