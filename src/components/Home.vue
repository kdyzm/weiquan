<template>
    <div id="home">
        <div class="header">
            <p>站长前言：该站存在的目的是联合想去法院和<span style="font-weight: bold">青客</span>打官司
                的租客、房东形成集体诉讼，从而减轻个人维权的负担，增大影响力（律师言）。</p>
            <p>
                想要参加集体诉讼的可以在"集体诉讼登记"页面登记下，以便于统计人数。
                另外，材料也需要准备起来。<span style="font-weight: bold;color: red;">特别是房客的租房合同，一定要提前保存，防止青客搞事情。</span></p>
            <p>现在还剩下两件事情未确认:</p>
            <ol>
                <li> 确认租客集体诉讼代表人（1~2人）</li>
                <li> 确认房东集体诉讼代表人（1~2人）</li>
            </ol>
            <p>我的微信和电话号码：13585847431，有意向担当诉讼代表人的请联系我，我会实时更新网站信息。</p>
        </div>
        <h3>关于集体诉讼</h3>
        <p>每个人单独和青客打官司的代价比较大(如果弄到请律师的程度会很贵。。。)，通过授权被委托人的方式可以在群体中推选出两个代表，代表此类群体和
            青客打官司。</p>
        <p>我咨询过律师，集体诉讼能增加影响力，法院也会重视起来，加速处理过程，增大打赢官司的概率。</p>
        <h3>集体诉讼需要的材料</h3>
        <p>我已经联系过了法律援助，也和几个律师聊过，我们这个事情集体诉讼是没有问题的，但是需要出两个代表，一个房客代表，一个房东代表，每个人需要出具以下材料：</p>
        <ol>
            <li class="template">委托人和被委托人的
                <el-tooltip class="item" effect="dark" content="点我查看两份授权协议书参考模板" placement="top">
                    <router-link to="/template">授权协议书</router-link>
                </el-tooltip>
            </li>
            <li>有效的合同（pdf或者截图）</li>
            <li>身份证复印件（加水印：青客维权专用）</li>
            <li>诉状，需要签名或者手印：投诉了那么多了，差不多就是那样子</li>
            <li>对于要求退房的租客来说需要已经提前付款的证明；<br/>
                对于已经退房退押金但是押金提取不出来需要给出提取不出来的证明；<br/>
                对于已经退房但是租房贷退不掉的，需要给出退不掉的证明
            </li>
        </ol>
        <h3>集体诉讼流程</h3>
        <ol>
            <li>参与集体诉讼的房客将上述材料封装到一起快递给房客代表；参与集体诉讼的房东将上述材料
                封装到一起快递给房东代表
            </li>
            <li>
                房客代表和房东代表收集每个人的材料，一起到法院排号，咨询法官意见并立案。
            </li>
            <li>
                。。。。。。
            </li>
            <li>
                房客代表和房东代表参与庭审。
            </li>
        </ol>
        <p>上述是我询问几个律师之后得到的结论，可能和真实情况有出入。</p>
    </div>

</template>

<script>
    export default {
        name: "Home"
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

    .important {
        text-indent: 2em;
    }

    .template a {
        color: blue;
        font-weight: bold;
    }

    .header {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        padding: 1rem;
    }

    .header p {
        text-indent: 2em;
    }
</style>
