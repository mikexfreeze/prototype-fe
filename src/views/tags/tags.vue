<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <h5>全部tags</h5>

                <el-tag v-for="(tag, index) in tags" :key="index" class="mr-10">{{tag.label}}</el-tag>
            </div>
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4">.col-md-4</div>
        </div>
    </div>
</template>

<script src="./tags.js"></script>
<style scoped src="./tags.scss"></style>