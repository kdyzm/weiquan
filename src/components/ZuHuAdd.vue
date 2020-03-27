<template>
    <div v-loading="loading">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input placeholder="为方便联系，请填写手机号" v-model="form.mobile"></el-input>
            </el-form-item>
            <el-form-item label="微信">
                <el-input placeholder="拉群集体维权" v-model="form.wechat"></el-input>
            </el-form-item>
            <el-form-item label="公开信息">
                <el-radio-group v-model="form.public">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="0">否</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="备注">
                <el-input placeholder="您有什么建议可以写在这里" rows="5" type="textarea" v-model="form.comment"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="onCancel">取消</el-button>
            </el-form-item>
        </el-form>

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
        name: "ZuHu",
        data() {
            return {
                form: {
                    name: '',
                    mobile: '',
                    wechat: '',
                    public: 0,
                    comment: ''
                },
                loading: false,
                dialogVisible: false,
                msg: ''
            }
        },
        methods: {
            onSubmit() {
                this.loading = true;
                console.log(this.form);
                var url = "http://rap2.taobao.org:38080/app/mock/246551/weiquan/zk/add";
                this.$http.post(url, this.form).then((res) => {
                    var data=res.body;
                    this.dialogVisible = true;
                    if(data.status === 0){
                        this.form={
                            name: '',
                            mobile: '',
                            wechat: '',
                            public: 0,
                            comment: ''
                        }
                        this.msg='您已经成功登记';
                    }else{
                        this.msg='登记失败，因为 '+data.msg;
                    }
                    this.loading = false;
                }, (err) => {
                    console.error(err);
                    this.loading = false;
                })
            },
            onCancel(){
                this.form={
                    name: '',
                    mobile: '',
                    wechat: '',
                    public: 0,
                    comment: ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
