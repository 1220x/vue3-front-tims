<template>
    <div class="common-layout height-full">
        <el-container>
            <el-header>XXX管理系统</el-header>
            <el-container class="main-content">
                <el-aside>
                    <el-menu>
                        <el-menu-item
                            v-for="{ menuName, menuRouteName } in menuConfig"
                            :key="menuRouteName"
                            @click="e => handleMenuClick(e, menuRouteName)"
                        >{{ menuName }}</el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <transition>
                        <router-view></router-view>
                    </transition>
                </el-main>
            </el-container>
            <el-footer>XXX管理系统</el-footer>
        </el-container>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

let menuConfig = reactive([
    { menuName: '1', menuRouteName: 'page1' },
    { menuName: '2', menuRouteName: 'page2' },
    { menuName: '3', menuRouteName: 'page3' },
    { menuName: '4', menuRouteName: 'page4' },
    { menuName: '5', menuRouteName: 'page5' },
    { menuName: '6', menuRouteName: 'page6' },
])

function handleMenuClick(e, menuRouteName) {
    if (this.$route.path.includes(menuRouteName)) return;

    this.$router.push(menuRouteName);
}

</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

html, body, #app {
    width: 100%;
    height: 100%;
}

.common-layout {
    height: 100%;
    .el-header,
    .el-footer {
        background-color: #b3c0d1;
        color: #000;
        text-align: center;
        line-height: 60px;
        flex-basis: 0 0 60px;
    }

    .el-footer {
        line-height: 60px;
    }

    .el-aside {
        background-color: #d3dce6;
        color: #000;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #e9eef3;
        color: #000;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .main-content {
        height: calc(100vh - 120px);
    }
}
</style>
