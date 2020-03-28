<template>
    <div id="home">
        <div class="header">
            <p>注意！！！这是测试版，还未启用，请暂时不要输入个人信息！以下两个问题解决之后可以正式启用：</p>
            <ol>
                <li> 确认租客集体诉讼代表人（1~2人）</li>
                <li> 确认房东集体诉讼代表人（1~2人）</li>
            </ol>
        </div>
        <h3>关于集体诉讼</h3>
        <p>每个人单独和青客打官司的代价比较大(如果弄到请律师的程度会很贵。。。)，通过授权被委托人的方式可以在群体中推选出两个代表，代表此类群体和
            青客打官司。</p>
        <p>我咨询过律师，集体诉讼能增加影响力，法院也会重视起来，加速处理过程，增大打赢官司的概率。</p>
        <h3>集体诉讼需要的材料</h3>
        <p>我已经联系了法律援助，也和几个律师聊过，我们这个集体诉讼是没有问题的，但是需要出两个代表，一个房客代表，一个房东代表，每个人需要出具以下材料：</p>
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
        <!--以上四个材料需要快递给被委托人，如果大家同意，烦请在下面链接中填上自己的姓名、微信和手机号，我们再新建群联系-->
        <!--<h3>关于我</h3>
        <p>我在"上海青客租客维权"群里的昵称是<span class="important">上海-文怡苑二期-租客</span> ，群里的<span
            class="important">一缕阳光</span>是我的房东。<br/>
            <span class="important">现居地址：上海市康桥镇环桥路1488弄32号楼201室</span><br/>
            <span class="important">微信号：13585847431</span><br/>
            <span class="important">电话号：13585847431</span><br/>
            <span>邮箱：kdyzm@foxmail.com</span><br/>

        <p><strong>如果想打官司的租客觉得单独打官司太麻烦，可以委托我作为代表人发起集体诉讼，只需要提供上面第二条的材料邮寄到以下地址即可：<br/></strong></p>
        <br/>
        <strong>
            <p>地址：<span style="color:red">上海市康桥镇环桥路1488弄32号楼201室</span></p>
            <p>收件人：<span style="color:red">郑荣军</span></p>
            <p>联系电话：<span style="color:red">13585847431</span></p>
        </strong>
        <p/>-->
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
    .header p{
        text-indent: 2em;
    }
</style>
