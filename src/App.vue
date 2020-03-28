<template>
    <div id="app">
        <el-menu :router="routerSwitch" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/home">首页</el-menu-item>
            <el-submenu :show-timeout="showTimeout" :hide-timeout="hideTimeout" index="1">
                <template slot="title">租客</template>
                <el-menu-item @click="handleSubmenuSelection($event)" index="/zu-ke-add" route="/zu-ke-add">集体诉讼登记</el-menu-item>
                <el-menu-item @click="handleSubmenuSelection($event)" index="/zu-ke-list">查看已登记列表</el-menu-item>
                <el-menu-item @click="handleSubmenuSelection($event)" index="/contact-zuke">租客集体诉讼代表</el-menu-item>
                <el-menu-item @click="handleSubmenuSelection($event)" index="/template-zuke">租客授权协议书模板</el-menu-item>
            </el-submenu>
            <el-submenu :show-timeout="showTimeout" :hide-timeout="hideTimeout" index="2">
                <template slot="title">房东</template>
                <el-menu-item @click="handleSubmenuSelection($event)"  index="/fang-dong-add">集体诉讼登记</el-menu-item>
                <el-menu-item @click="handleSubmenuSelection($event)"  index="/fang-dong-list">查看已登记列表</el-menu-item>
                <el-menu-item @click="handleSubmenuSelection($event)"  index="/contact-fangdong">房东集体诉讼代表</el-menu-item>
                <el-menu-item @click="handleSubmenuSelection($event)"  index="/template-fangdong">房东授权协议书模板</el-menu-item>
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
                showTimeout: 300,
                hideTimeout: 300,
                activeName: 'first',
                stretch: true,
                activeIndex: '1',
                activeIndex2: '1',
                routerSwitch:true,
                loading: true
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSubmenuSelection (menu_item) {
                if (menu_item.$parent && menu_item.$parent.$options.name === 'ElSubmenu') {
                    menu_item.$parent.handleMouseleave();
                }
            }
        }
    }
</script>

<style lang="scss">
    .line{
        margin-bottom: 1.5rem;
    }
    .el-menu--horizontal>.el-submenu{
        opacity: 1 !important;
    }
</style>
