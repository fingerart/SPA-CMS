/**
 * 路由规则
 */

import MainComponent from "./components/admin/Main.vue"
import HomeComponent from "./components/admin/Home.vue"
import ProjectComponent from "./components/admin/Project.vue"
import OtherComponent from "./components/admin/Other.vue"

export default [
    {
        path: '/',
        component: MainComponent,
        children: [
            {
                path: "/",
                redirect: 'home'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'project',
                component: ProjectComponent,
                children: [
                    {
                        path: "/",
                        redirect: 'other'
                    },
                    {
                        path: 'other',
                        component: OtherComponent
                    },
                ]
            },
        ]
    },
]
