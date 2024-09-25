import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../pages/404.vue'),
    },
    {
      path: '/',
      name: 'wrapper',
      component: () => import('../components/AppWrapper.vue'),
      children: [

        {
          path: 'home',
          name: 'home',
          component: () => import('../components/Home.vue')
        },
        {
          path: 'book',
          name: 'books-list',
          component: () => import('../components/Book/List.vue')
        },
        {
          path: 'book/:id',
          name: 'found-book',
          component: () => import('../components/Book/Find.vue')
        },
        {
          path: 'book/new',
          name: 'create-book',
          component: () => import('../components/Book/Create.vue')
        },
        {
          path: 'book/edit/:id',
          name: 'edit-book',
          component: () => import('../components/Book/Edit.vue')
        },
        {
          path: 'author',
          name: 'authors-list',
          component: () => import('../components/Author/List.vue')
        },
        {
          path: 'author/:id',
          name: 'found-author',
          component: () => import('../components/Author/Find.vue')
        },
        {
          path: 'author/new',
          name: 'create-author',
          component: () => import('../components/Author/Create.vue')
        },
        {
          path: 'author/edit/:id',
          name: 'edit-author',
          component: () => import('../components/Author/Edit.vue')
        },
        {
          path: 'publisher',
          name: 'publishers-list',
          component: () => import('../components/Publisher/List.vue')
        },
        {
          path: 'publisher/:id',
          name: 'found-publisher',
          component: () => import('../components/Publisher/Find.vue')
        },
        {
          path: 'publisher/new',
          name: 'create-publisher',
          component: () => import('../components/Publisher/Create.vue')
        },
        {
          path: 'publisher/edit/:id',
          name: 'edit-publisher',
          component: () => import('../components/Publisher/Edit.vue')
        }
      ]
    },

  ]
})

export default router
