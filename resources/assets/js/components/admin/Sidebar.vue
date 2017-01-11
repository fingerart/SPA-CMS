<template>
    <div class="context-menu">
        <router-link :to="'/profile'" class="item">
            <img class="avatar" src="https://dn-coding-net-production-static.qbox.me/357baa8d-39df-46fa-961d-9006be86ea84.png?imageMogr2/auto-orient/format/png/crop/!459x459a0a0"/>
        </router-link>
        <router-link :to="'/home'" class="item">
            <i class="glyphicon glyphicon-home icon"></i>
            <span class="title">概览</span>
        </router-link>
        <router-link :to="'/project'" class="item">
            <i class="glyphicon glyphicon-user icon"></i>
            <span class="title">用户管理</span>
        </router-link>
        <a class="item" href="#">
            <i class="glyphicon glyphicon-comment icon"></i>
            <span class="title">任务</span>
        </a>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {}
        }
    }

</script>
