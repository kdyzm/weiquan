<template>
    <div id="home">
        <h3>关于我</h3>
        <p>我在<span class="important">xxxx</span>群里的昵称是<span class="important">xxxx</span> ，群里的<span
            class="important">xxxx</span>是我的房东。<br/>
        <p>姓名：<span class="important">xxxx</span></p>
        <p>现居地址：<span class="important">xxxx</span></p>
        <p>微信号：<span class="important">xxxx</span></p>
        <p>电话号：<span class="important">xxxx</span></p>
        <p>邮箱：<span class="important">xxxx</span></p>
        <br/>
        <p><strong>如果想打官司的<span class="important">租客</span>觉得单独打官司太麻烦，可以授权我作为代表人发起集体诉讼，只需要提供集体诉讼的材料邮寄到以下地址即可：<br/></strong></p>
        <br/>
        <strong>
            <p>地址：<span class="important">xxxxx</span></p>
            <p>收件人：<span class="important">xxxx</span></p>
            <p>联系电话：<span class="important">xxxx</span></p>
        </strong>
        <br/>
        如果有疑问，请打电话或微信联系
    </div>
</template>

<script>
    export default {
        name: "ZuKeContact"
    }
</script>

<style scoped>
    #home {
        color: #606266;
    }

    #home p {
        line-height: 1.8rem;
        text-indent: 2em;
        margin-bottom: 0;
        margin-top: 0;
    }

    #home li {
        line-height: 1.8rem;
    }

    #home h3 {
        text-align: center;
    }
    .important{
        color: red;
        font-weight: bold;
    }
</style>
