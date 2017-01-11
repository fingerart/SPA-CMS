<template>
    <div class="wrapper">
        <second-sidebar-component :menu="$data"></second-sidebar-component>
        <router-view></router-view>
    </div>
</template>

<script>
    import SecondSidebarComponent from "./layout/SecondSidebar.vue"

    export default{
        data(){
            return{
                title: '账户',
                desc: '包括用户账户、码币以及个人设置信息',
                list: [
                    {'title':'首页', 'icon':'glyphicon glyphicon-home', 'href':'/project/other'},
                    {'title':'用户', 'icon':'glyphicon glyphicon-user', 'href':'/home'},
                ]
            }
        },
        components: {
            SecondSidebarComponent,
        }
    }

</script>
