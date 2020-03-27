<template>
    <div>
        <el-table
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
                dialogVisible:false,
                loading: true,
                msg: '',
                data: {
                    totalSize: 10,
                    publicList: [
                        {
                            name: '张三',
                            mobile: '13213',
                            wechat: '464564',
                            public: 1,
                            comment: '131313'
                        },
                        {
                            name: '张三',
                            mobile: '13213',
                            wechat: '464564',
                            public: 1,
                            comment: '131313'
                        },
                        {
                            name: '张三',
                            mobile: '13213',
                            wechat: '464564',
                            public: 1,
                            comment: '131313'
                        },
                        {
                            name: '张三',
                            mobile: '13213',
                            wechat: '464564',
                            public: 1,
                            comment: '131313'
                        },
                        {
                            name: '张三',
                            mobile: '13213',
                            wechat: '464564',
                            public: 1,
                            comment: '131313'
                        },
                        {
                            name: '张三',
                            mobile: '13213',
                            wechat: '464564',
                            public: 1,
                            comment: '131313'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.loading = true;
            var url = "http://rap2.taobao.org:38080/app/mock/246551/weiquan/zk/add";
            this.$http.get(url).then((res) => {
                    var data = res.body;
                    this.loading = false;
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

</style>
