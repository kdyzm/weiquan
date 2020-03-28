<template>
    <div id="app">
        <el-menu :router="routerSwitch" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="/home">首页</el-menu-item>
            <el-submenu index="1">
                <template slot="title">租客</template>
                <el-menu-item index="/zu-ke-add">集体诉讼登记</el-menu-item>
                <el-menu-item index="/zu-ke-list">查看已登记列表</el-menu-item>
                <el-menu-item index="/contact-zuke">租客集体诉讼代表</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">房东</template>
                <el-menu-item index="/fang-dong-add">集体诉讼登记</el-menu-item>
                <el-menu-item index="/fang-dong-list">查看已登记列表</el-menu-item>
                <el-menu-item index="/contact-fangdong">房东集体诉讼代表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">授权协议书</template>
                <el-menu-item index="/template-zuke">租客授权协议书参考</el-menu-item>
                <el-menu-item index="/template-fangdong">房东授权协议书参考</el-menu-item>
            </el-submenu>
        </el-menu>
        <div class="line"></div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                activeName: 'first',
                stretch: true,
                activeIndex: '1',
                activeIndex2: '1',
                routerSwitch:true,
                loading: true
            };
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    .line{
        margin-bottom: 1.5rem;
    }
</style>
