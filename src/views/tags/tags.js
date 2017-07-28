/**
 * Created by Micheal Xiao on 2017/7/20.
 */

import {GetTags} from './api/tagsApi'

export default {
    data(){
        return {
            tags:[]
        }
    },
    created(){
        this.getTags()
    },
    methods:{
        getTags(){
            GetTags()
                .then((response)=> {
                    this.tags = []
                    response.data.forEach((val) => {
                        this.tags.push(val)
                    })
                    console.log(this.tags)
                })
        }
    }
}