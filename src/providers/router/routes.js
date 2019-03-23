import Main from '../../pages/Main.vue'
import Sub from '../../pages/Sub.vue'

export default [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/sub/:no',
        component: Sub,
    },
    { 
        path: '*', 
        redirect: '/' 
    }
]