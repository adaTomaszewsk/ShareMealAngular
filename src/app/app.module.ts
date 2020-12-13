import { UserSecurityService } from './services/user.security.service';
import { FlightSearchService } from './services/flight-search.service';
import { HttpService } from './services/http-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { FlightsComponent } from './flights/flights.component';
import { ConnectionsComponent } from './connections/connections.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatNativeDateModule} from '@angular/material';
import { FlightSearchingComponent } from './flight-searching/flight-searching.component';
import { ChoosePlaceComponent } from './choose-place/choose-place.component';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BuyingFormComponent } from './buying-form/buying-form.component';
import { ProfilComponent } from './profil/profil.component';
import { GuestViewPlacesComponent } from './guest-view-places/guest-view-places.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentRealisedComponent } from './payment-realised/payment-realised.component';
import { FlightSearchResultComponent } from './flight-search-result/flight-search-result.component';
import { ProfilEditComponent } from './profil-edit/profil-edit.component';
import { TicketsComponent } from './tickets/tickets.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { LoginSecurityComponent } from './login-security/login.security.component';
import { RegisterSecurityComponent } from './register-security/register.security.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { TicketComponent } from './ticket/ticket.component';
import { PlanesComponent } from './planes/planes.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightRemovedComponent } from './flight-removed/flight-removed.component';
import { FlightAddedComponent } from './flight-added/flight-added.component';
import { PayuComponent } from './payu/payu.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './services/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { AlertsComponent} from './alerts/alerts.component';
import {BasketComponent} from './basket/basket.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerOrdersComponent} from './customer-orders/customer-orders.component';
import {LoginComponent} from './login';
import {MenuComponent} from './menu/menu.component';
import {RegisterComponent} from './register/register.component';
import {NewMealComponent} from './new-meal/new-meal.component';
import {HistoryComponent} from './history/history.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UsersComponent,
    FlightsComponent,
    ConnectionsComponent,
    FlightSearchingComponent,
    ChoosePlaceComponent,
    BuyingFormComponent,
    ProfilComponent,
    GuestViewPlacesComponent,
    InsuranceComponent,
    PaymentComponent,
    PaymentRealisedComponent,
    FlightSearchResultComponent,
    ProfilEditComponent,
    TicketsComponent,
    LoginSecurityComponent,
    RegisterSecurityComponent,
    TicketComponent,
    PlanesComponent,
    AddFlightComponent,
    FlightRemovedComponent,
    FlightAddedComponent,
    PayuComponent,
    HistoryComponent,
    AlertsComponent,
    BasketComponent,
    CustomerComponent,
    CustomerOrdersComponent,
    LoginComponent,
    MenuComponent,
    RegisterComponent,
    NewMealComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    HttpService, MatDatepickerModule, MatNativeDateModule, FlightSearchService, DatePipe, AsyncPipe,
     UserSecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

