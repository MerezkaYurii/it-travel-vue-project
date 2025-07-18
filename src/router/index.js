import { authService } from '@/api/authService'
import { createRouter, createWebHistory } from 'vue-router'

const GreetingPage = () => import('@/views/GreetingView.vue')
const HomepagePage = () => import('@/views/HomepageView.vue')
const AuthPage = () => import('@/views/AuthView.vue')
const LoginPage = () => import('@/views/LoginView.vue')
const RegistrationPage = () => import('@/views/RegistrationView.vue')

const routes = [
  { path: '/', component: GreetingPage, name: 'greeting' },
  { path: '/map', component: HomepagePage, name: 'homepage' },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/login',
    children: [
      { path: 'login', component: LoginPage, name: 'login' },
      { path: 'registration', component: RegistrationPage, name: 'registration' },
    ],
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authRoutes = ['login', 'registration']
  const publicRoutes = ['greeting', ...authRoutes]
  const { name } = to

  if (authRoutes.includes(name) && authService.isLoggedin()) {
    next({ name: 'homepage' })
  } else if (!publicRoutes.includes(name) && !authService.isLoggedin()) {
    next({ name: 'login' })
  } else {
    next()
  }
})
