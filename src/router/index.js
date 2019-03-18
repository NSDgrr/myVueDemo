import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Index from '@/pages/index'
import CourseList from '@/pages/chooseCourse'
import MyCourse from '@/pages/myCourse'
import Teacher from '@/pages/teacher'
import Book from '@/pages/book'
import AboutUs from '@/pages/aboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/courseList',
      name: 'chooseCourse',
      component: CourseList
    },
    {
      path: '/Teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/MyCourse',
      name: 'MyCourse',
      component: MyCourse
    },
    {
      path: '/Book',
      name: 'BookLink',
      component: Book
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
  ],
  mode:'history'
})
