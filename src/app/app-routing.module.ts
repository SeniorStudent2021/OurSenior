import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)

  },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'services/:id',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'addvehicle/:id',
    loadChildren: () => import('./addvehicle/addvehicle.module').then( m => m.AddvehiclePageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'activerequest/:id',
    loadChildren: () => import('./activerequest/activerequest.module').then( m => m.ActiverequestPageModule)
  },
  {
    path: 'choosevehicle/:id/:type',
    loadChildren: () => import('./choosevehicle/choosevehicle.module').then( m => m.ChoosevehiclePageModule)
  },
  {
    path: 'location/:id',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
