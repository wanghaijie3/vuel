<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    :collapse="isCollapse" background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <h3>{{ isCollapse ? '后台':'通用后台管理系统'}}</h3>
    <el-menu-item @click="switchMenu(item)" v-for="item in noChildren" :key="item.path" :index="item.path">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu  v-for="item in hasChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item @click="switchMenu(subItem)" v-for="subItem in item.children" :key="subItem.path" :index="subItem.path">
          <i :class="`el-icon-${subItem.icon}`"></i>
          <span slot="title">{{ subItem.label}}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100vh;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
  }
}
</style>
  
<script>
import { computed } from 'vue';
export default {
  data() {
    return {
      menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          label: '其它',
          icon: 'location',
          children:[
            {
            path: '/page1',
            name: 'page1',
            label: '页面1',
            icon: 'setting',
            url: 'Other/PageOne'
            },
            {
            path: '/page2',
            name: 'page2',
            label: '页面2',
            icon: 'setting',
            url: 'Other/PageTwo'
            }
          ]
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManager/MallManager'
        }
      ]

    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    switchMenu(item){
      console.log(item);
      if (item.path !== this.$route.path && !(item.path === '/' && this.$route.path === '/home')){
        this.$router.push(item.path);
      }
      
    }
  },

  computed: {
    noChildren(){
      return this.menuData.filter(item => !item.children)
    },
    hasChildren(){
      return this.menuData.filter(item => item.children)
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse;
    }
  }
}
</script>

<style scoped>
  .el-menu-vertical-demo {
    border-right: 0;
  }
</style>