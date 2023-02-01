import { createRouter, createWebHistory } from 'vue-router'
import  Home from '../views/Home.vue'
import  About from '../views/About.vue'
import  Admission from '../views/Admission.vue'
import  Contact from '../views/Contact.vue'
import  Staff from '../views/Staff.vue'
import  Students from '../views/Students.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/admission',
      name: 'admission',
      component: Admission
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/staff',
      name: 'staff',
      component: Staff
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    }
  ]
})

export default router
