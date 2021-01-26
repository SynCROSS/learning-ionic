import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then(m => m.RegisterPageModule),
  },
  {
    path: 'menulist',
    loadChildren: () => import('./menu/menulist/menulist.module').then( m => m.MenulistPageModule)
  },
  {
    path: 'menudetail',
    loadChildren: () => import('./menu/menudetail/menudetail.module').then( m => m.MenudetailPageModule)
  },
  {
    path: 'addmenu',
    loadChildren: () => import('./menu/addmenu/addmenu.module').then( m => m.AddmenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
