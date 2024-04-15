import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Feedback from '@/components/Feedback.vue'
import Forms from '@/components/Forms.vue'
import FormEdit from '@/components/FormEdit.vue'
import TriggerRule from '@/components/TriggerRule.vue'
import NotificationRule from '@/components/NotificationRule.vue'
import AuditEvent from '@/components/AuditEvent.vue'
import Dashboard from '@/components/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '',
      redirect: '/feedback'
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms
    },
    {
      path: '/form/:id',
      name: 'formedit',
      component: FormEdit
    },
    {
      path: '/trigger-rule',
      name: 'triggerRule',
      component: TriggerRule
    },
    {
      path: '/notification-rule',
      name: 'notificationRule',
      component: NotificationRule
    },
    {
      path: '/audit-event',
      name: 'auditEvent',
      component: AuditEvent
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

export default router
