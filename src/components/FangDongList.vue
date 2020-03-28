<template>
    <div>
        <span class="listHeader">共有{{data.totalSize}}人完成登记，{{data.publicList.length}}人选择公开信息</span>
        <div class="line"></div>
        <el-table
            :stripe="stripe"
            :border="border"
            :data="data.publicList"
            style="width: 100%">
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="mobile"
                label="手机号">
            </el-table-column>
            <el-table-column
                prop="wechat"
                label="微信">
            </el-table-column>
            <el-table-column
                type="expand"
                prop="comment"
                label="建议">
                <template slot-scope="props">
                    {{ props.row.comment }}
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="80%">
            <span :key="msg">{{msg}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "ZuHuList",
        data() {
            return {
                border: false,
                stripe:false,
                dialogVisible:false,
                loading: true,
                msg: '',
                data:{
                    totalSize: 0,
                    publicList: [
                    ]
                }
            }
        },
        mounted() {
            this.loading = true;
            var url = "http://localhost:8000/weiquan/list-all?type=FD";
            this.$http.get(url).then((res) => {
                    this.loading = false;

                    if(res && res.body.status === 0){
                        this.data = res.body.data;
                        return;
                    }
                    this.dialogVisible = true;
                    this.msg='请求数据失败 ';
                },
                (err) => {
                    console.log(err);
                    this.loading = false;
                    this.dialogVisible = true;
                    this.msg='请求数据失败，因为 '+err;
                })
        }
    }
</script>

<style scoped>
    .listHeader{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        font-size: 0.9rem;
        line-height: 2rem;
        color: #606266;
        font-weight: bold;
        text-align: center;
        display: block;
    }
</style>
