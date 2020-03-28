<template>
    <div id="home">
        <p>我是<span class="important">{姓名}</span>，因与<span class="important">上海青客公共租赁住房租赁经营管理股份有限公司</span>的租房纠纷一案，授权<span class="important">{姓名}</span>为我方<span class="important">房东</span>代表，行使以下第2项代表权限，参与本案相关的诉讼活动。授权代表在其权限内签署的一切有关文件，我方均承认，由此在法律上产生的权利、义务均由我方享有或承担。</p>
        <ol>
            <li>
                一般代表
            </li>
            <li>
                全权代表权限 ：代为立案、提起诉讼，代为承认、放弃、变更诉讼请求，参与审理，提起上诉，代收法律文书，代为进行调解、和解，代为提起反诉、上诉，代为委托律师等。
            </li>
        </ol>
        <br/>
        <p>本人签名：</p>
        <p>签署时间：</p>
        <br/>
        <p>代表人签名：</p>
        <p>签署时间：</p>
    </div>
</template>

<script>
    export default {
        name: "ZuKeAuthTemplate"
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
        font-weight: bold;
        color: red;
    }
</style>
