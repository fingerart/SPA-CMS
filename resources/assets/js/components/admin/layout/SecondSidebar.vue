<template>
    <div class="secondary">
        <header class="header">
            {{ menu.title }}
            <article>
                {{ menu.desc }}
            </article>
        </header>
        <router-link class="item" v-for="item of menu.list" :to="item.href"><i class="icon" :class="item.icon"></i>{{ item.title }}</router-link>
    </div>
</template>
<script>
    export default{
        props: ['menu'],
        data(){
            return{}
        },
    }
</script>
