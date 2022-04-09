import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import BooksList from '@/pages/BooksList'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/bookslist',
        name: 'Books List',
        component: BooksList
    }]
})