export const ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    me: '/auth/me',
  },
  whiskies: {
    list: '/whiskies',
    detail: (id: string) => `/whiskies/${id}`,
    reviews: (id: string) => `/whiskies/${id}/reviews`,
  },
  community: {
    feed: '/community/feed',
    posts: '/community/posts',
  },
  users: {
    profile: (id: string) => `/users/${id}`,
    update: '/users/me',
  },
} as const
