import { createRouter, createWebHistory } from 'vue-router'
import Trello from '../views/Trello.vue'

const routes = [
    {
        path: '/',
        name: 'Trello',
        component: Trello
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
