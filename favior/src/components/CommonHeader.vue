<template>
    <div class="header-container">
        <div class="l-content">
            <el-button size="small" icon="el-icon-menu" @click="handleMenu"></el-button>
            <span class="span-style">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="img-style" src="../assets/images/logo.png" >
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
        </div>
    </div>
</template>

<script>
import { Image } from 'element-ui';

    export default {
    data() {
        return {};
    },
    components: { Image },
    methods:{
        handleMenu() {
            this.$store.commit('collapseMenus')
        }
    }
}


</script>

<style scoped lang="less">
    .header-container {
        background-color: #333;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
    }
    .span-style {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }

    .img-style {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .el-dropdown-menu {
        padding: 0 0;
    }

</style>