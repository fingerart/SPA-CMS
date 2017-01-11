<template>
    <div>
        <nav-component></nav-component>
        <sidebar-component></sidebar-component>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavComponent from './Nav.vue'
    import SidebarComponent from './Sidebar.vue'

    export default {
        data: function() {
            return {}
        },
        components: {
            NavComponent,
            SidebarComponent,
        }
    }


</script>
