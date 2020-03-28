<template>
    <div>
        <router-link to="/template-zuke">租客授权委托书参考</router-link><br/>
        <router-link to="/template-fangdong">房东授权委托书参考</router-link>
    </div>
</template>

<script>
    export default {
        name: "Template"
    }
</script>

<style scoped>
    a{
        color: blue;
        font-weight: bold;
        display: block;
        text-align: center;
        vertical-align: center;
        text-decoration: none;
    }
    a:hover{
        color: red;
    }
</style>
