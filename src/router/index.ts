//router 配置
import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import {App} from "vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/index/index.vue')
    },
    {
        path: '/sub',
        name: 'Sub',
        component: () => import('../pages/sub/index/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export const setUpRouter = (app: App) => {
    app.use(router)
    return router
}
