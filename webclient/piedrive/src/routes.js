import Explorer from './pages/Explorer';

export const routes = [
  {
    path: '/',
    component: Explorer
  },
  {
    path: '/folders/:folderId',
    component: Explorer
  }
];
