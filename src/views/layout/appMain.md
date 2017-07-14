# app main 说明

> 此组件控制主显示区域内容

### 标签页

> 全局标签页显示控制

#### 功能点

1. 点击导航菜单如果没有此链接的标签页则生成新的标签页如果有则转向此标签页
2. 点击标签页标签导航菜单自动展开对应项
3. 标签页状态保留，在不同标签页切换时不会丢失输入内容
    + 此功能采用Vue keep-alive方式实现
4. 关闭标签页时自动切换至相邻标签页（优先后置位）
    ``` javascript
    let nextTab = tabs[index + 1] || tabs[index - 1];
    ```

#### 代码说明

+ 当前active标签页通过路由状态确定，中间有处理过程
    ``` javascript
    fetchCurRoute () {
        if(this.$route.matched[1].name){
            this.curRouteName = this.$route.matched[1].name
            return
        }else if(this.$route.name){
            this.curRouteName = this.$route.name
            return
        }else if(this.$route.matched[0].name){
            this.curRouteName = this.$route.matched[0].name
        }
    }
    ```
    目前标签页实际对应导航菜单的二级菜单，以上代码实际是对首页及二级以下路由情况的特殊处理。