import { Route } from '@angular/router';
import { authGuard } from '@fe/core';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'video' },
  {
    path: 'video',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@fe/features/video').then((m) => m.videoRoutes),
  },
  {
    path: 'reels',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@fe/features/reels').then((m) => m.reelsRoutes),
  },
  {
    path: 'media',
    canActivate: [authGuard],
    loadChildren: () => import('@fe/features/media').then((m) => m.mediaRoutes),
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@fe/features/profile').then((m) => m.profileRoutes),
  },
  {
    path: 'settings',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@fe/features/settings').then((m) => m.settingsRoutes),
  },
  { path: '**', redirectTo: 'video' },
];
