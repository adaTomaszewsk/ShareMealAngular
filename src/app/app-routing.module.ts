import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from '../../../plane_ticket_front/src/app/customer/customer.component';
import {LoginComponent} from '../../../plane_ticket_front/src/app/login';
import {RegisterComponent} from '../../../plane_ticket_front/src/app/register/register.component';
import {Role} from '../../../plane_ticket_front/src/app/models/role';
import {MenuComponent} from '../../../plane_ticket_front/src/app/menu/menu.component';
import {CustomerOrdersComponent} from '../../../plane_ticket_front/src/app/customer-orders/customer-orders.component';
import {BasketComponent} from '../../../plane_ticket_front/src/app/basket/basket.component';
import {HistoryComponent} from './history/history.component';
import {NewMealComponent} from './new-meal/new-meal.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {AuthGuard} from './auth';


const appRoutes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     {path: 'logowanie', component: LoginComponent}]},
  // {path: '', pathMatch: 'full', redirectTo: '/logowanie'},


  {
        path: 'klient', component: CustomerComponent, canActivate: [AuthGuard], data: {roles: [Role.CUSTOMER]},
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
      {path: 'historia', component: CustomerOrdersComponent, canActivate: [AuthGuard]},
      {path: 'historia2', component: HistoryComponent, canActivate: [AuthGuard]},
      {path: 'koszyk', component: BasketComponent, canActivate: [AuthGuard]},
      {path: 'nowe_zamowienie', component: NewMealComponent, canActivate: [AuthGuard]},

    ]
  },

  {path: 'logowanie', component: LoginComponent},
  {path: 'rejestracja', component: RegisterComponent},
  {path: 'haslo/resetuj', component: ResetPasswordComponent},
  {path: '**', redirectTo: 'logowanie'},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}




// import { FlightAddedComponent } from './flight-added/flight-added.component';
// import { FlightRemovedComponent } from './flight-removed/flight-removed.component';
// import { AddFlightComponent } from './add-flight/add-flight.component';
// import { PlanesComponent } from './planes/planes.component';
// import { TicketComponent } from './ticket/ticket.component';
// import { LoginSecurityComponent } from './login-security/login.security.component';
// import { RegisterSecurityComponent } from './register-security/register.security.component';
// import { ProfilEditComponent } from './profil-edit/profil-edit.component';
// import { FlightSearchResultComponent } from './flight-search-result/flight-search-result.component';
// import { PaymentRealisedComponent } from './payment-realised/payment-realised.component';
// import { InsuranceComponent } from './insurance/insurance.component';
// import { GuestViewPlacesComponent } from './guest-view-places/guest-view-places.component';
// import { BuyingFormComponent } from './buying-form/buying-form.component';
// import { ChoosePlaceComponent } from './choose-place/choose-place.component';
// import { FlightSearchingComponent } from './flight-searching/flight-searching.component';
// import { AppComponent } from './app.component';
// import { ConnectionsComponent } from './connections/connections.component';
// import { FlightsComponent } from './flights/flights.component';
// import { UsersComponent } from './users/users.component';
// import { AdminComponent } from './admin/admin.component';
// import { NgModule, Component } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { ProfilComponent } from './profil/profil.component';
// import { PaymentComponent } from './payment/payment.component';
// import { TicketsComponent } from './tickets/tickets.component';
// import { PayuComponent } from './payu/payu.component';
//
// const routes: Routes = [  {
//     path: '',
//     redirectTo: 'search',
//     pathMatch: 'full'
//   },
//   {
//   path: 'search',
//   component: FlightSearchingComponent,
//   children: [
//     {
//       path: 'results',
//       component: FlightSearchResultComponent
//     }
//   ]
// },
// {
//   path: 'paymentrealised',
//   component: PaymentRealisedComponent
// },
// {
//   path: 'payment',
//   component: PaymentComponent,
// },
// {
//   path: 'payment/paymentdetails',
//   component: PayuComponent
// },
// {
//   path: 'insurance',
//   component: InsuranceComponent
// },
// {
//   path: 'guestview',
//   component: GuestViewPlacesComponent
// },
// {
//   path: 'chooseplace',
//   component: ChoosePlaceComponent
// },
// {
//   path: 'buyingform',
//   component: BuyingFormComponent
// },
// {
//   path: 'profil',
//   component: ProfilComponent,
//   children: [
//     {
//       path: 'editprofil',
//       component: ProfilEditComponent
//     },
//     {
//       path: 'showtickets',
//       component: TicketsComponent,
//     },
//     {
//       path: 'showticket',
//       component: TicketComponent
//     },
//   ]
// },
// {
//
//   path: 'admin',
//   component: AdminComponent,
//   children: [
//     {
//       path: 'users',
//       component: UsersComponent
//     },
//     {
//       path: 'flights',
//       component: FlightsComponent
//     },
//     {
//       path: 'connections',
//       component: ConnectionsComponent
//     },
//     {
//       path: 'planes',
//       component: PlanesComponent
//     },
//     {
//       path: 'addflight',
//       component: AddFlightComponent
//     },
//     {
//       path: 'flightdeleted',
//       component: FlightRemovedComponent
//     },
//     {
//       path: 'flightadded',
//       component: FlightAddedComponent
//     }
//   ]
//   },
//   {
//     path: 'auth/login',
//     component: LoginSecurityComponent
//   },
//   {
//     path: 'signup',
//     component: RegisterSecurityComponent
// },
//
// ];
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
