<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
        <Navbar/>
        <div class="sidebar-wrapper">
            <Sidebar class="sidebar-container"/>
        </div>
        <div class="main-container">
            <App-main/>
        </div>
    </div>
</template>

<script>
    import { Navbar, Sidebar, AppMain } from 'views/layout';

    export default {
      name: 'layout',
      components: {
        Navbar,
        Sidebar,
        AppMain
      },
      computed: {
        sidebar() {
          return this.$store.state.app.sidebar;
        }
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .sidebar-wrapper {
        width: 180px;
        position: fixed;
        top: 60px;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow-x: hidden;
        transition: all .28s ease-out;
    }
</style>
