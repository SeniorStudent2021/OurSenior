import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)

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
  {
    path: 'order/:id/:type/:car',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'resetpass',
    loadChildren: () => import('./resetpass/resetpass.module').then( m => m.ResetpassPageModule)
  },
  {
    path: 'providerrequest/:id',
    loadChildren: () => import('./providerrequest/providerrequest.module').then( m => m.ProviderrequestPageModule)
  },
  {
    path: 'payment/:id',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'details/:id/:lat/:long/:prov',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'current/:id',
    loadChildren: () => import('./current/current.module').then( m => m.CurrentPageModule)
  },
  {
    path: 'currentdetails/:id/:lat/:long/:prov',
    loadChildren: () => import('./currentdetails/currentdetails.module').then( m => m.CurrentdetailsPageModule)
  },
  {
    path: 'paymentdetails/:id/:prov',
    loadChildren: () => import('./paymentdetails/paymentdetails.module').then( m => m.PaymentdetailsPageModule)
  },
  {
    path: 'editservices/:id',
    loadChildren: () => import('./editservices/editservices.module').then( m => m.EditservicesPageModule)
  },
  {
    path: 'editusers/:id',
    loadChildren: () => import('./editusers/editusers.module').then( m => m.EditusersPageModule)
  },
  {
    path: 'vieworders/:id',
    loadChildren: () => import('./vieworders/vieworders.module').then( m => m.ViewordersPageModule)
  },
  {
    path: 'profit/:id',
    loadChildren: () => import('./profit/profit.module').then( m => m.ProfitPageModule)
  },
  {
    path: 'newservice/:id',
    loadChildren: () => import('./newservice/newservice.module').then( m => m.NewservicePageModule)
  },
  {
    path: 'editusers2/:id',
    loadChildren: () => import('./editusers2/editusers2.module').then( m => m.Editusers2PageModule)
  },
  {
    path: 'paymentdetailsadmin/:id/:admin',
    loadChildren: () => import('./paymentdetailsadmin/paymentdetailsadmin.module').then( m => m.PaymentdetailsadminPageModule)
  },












 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
