/**
 * Created by Micheal Xiao on 2017/6/2.
 */

import moment from 'moment'

import dataTable from './components/table/table.vue'
import store from 'store'
import {GetList, CreatActive, UpdateActive, DeleteActive} from 'api/activities'
import { Message } from 'element-ui';
import editor from './components/editor.vue';

const activeTypeOptions = [
    { key: 'FD', display_name: '技术分享' },
    { key: 'FE', display_name: '招聘会' },
];

//此部分将来抽出
let pageParam = {
    page:1,
    size:15
}

//组件级变量
let selectionData = []

export default {
    hasAuthority:this.hasAuthority,
    created(){
        this.getList(pageParam);
    },
    data() {
        return {
            //对话框数据
            textMap: {
                update: '编辑',
                create: '创建'
            },
            dialogStatus:'create',
            dialogFormVisible: false,
            temp: tempInit(),
            activeTypeOptions,
            //日期选择限制
            pickerOptions0: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },

            totalPage:10,

            formData: [],
        }
    },
    components: {
        dataTable,
        editor
    },
    methods: {
        create(){
            this.temp.beginDate = moment(this.temp.beginDate).format("YYYY-MM-DD")
            this.temp.creator = store.getters.name
            CreatActive(this.temp)
                    .then(()=> {
                        this.dialogFormVisible = false
                        this.dialogStatus = 'create';
                        this.getList(pageParam)
                    })
        },
        update(){
            this.temp.beginDate = moment(this.temp.beginDate).format("YYYY-MM-DD")
            this.temp.creator = store.getters.name
            UpdateActive(this.temp)
                    .then(()=> {
                        this.dialogFormVisible = false
                        this.getList(pageParam)
                    })
        },
        getList(pageParam) {
            GetList(pageParam).then((response)=>{
                this.totalPage = Math.ceil(response.headers['x-total-count']/pageParam.size * 10)
                this.formData = response.data
            })
        },
        onSubmit() {
            console.log('submit!');
        },
        onAdd() {
            this.dialogStatus = 'create'
            this.dialogFormVisible = true;
            this.temp = tempInit()
        },
        onDel() {
            if(selectionData.length == 0){
                Message({
                    message: "请至少选择一行数据",
                    type: 'error',
                    duration: 5 * 1000
                })
                return
            }
            Promise.all(selectionData.map(function (val) {
                return DeleteActive(val.id)
            })).then(()=>{
                this.getList(pageParam)
            })
        },
        onEdit: function () {
            if(selectionData.length > 1 || selectionData.length == 0){
                Message({
                    message: "请选择一行数据",
                    type: 'error',
                    duration: 5 * 1000
                })
                return
            }
            $.extend(this.temp, selectionData[0])
            this.dialogStatus = 'update';
            this.dialogFormVisible = true;
        },
        handleCurrentChange(page){
            // console.log("page")
            // console.log(page)
            pageParam.page = page;
            this.getList(pageParam)
        },
        handleSelectionChange(selection){
            selectionData = selection
        }

    }
}

function tempInit() {
    return {
        beginDate: "",
        creator: "",
        description: "",
        name: "",
        type: "技术分享"
    }
}
