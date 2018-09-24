import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {HomeComponent} from './home/home.component';
import {CarteComponent} from './carte/carte.component';
import {ReserveComponent} from './reserve/reserve.component';
import {ContactComponent} from './contact/contact.component';
import {MainDashComponent} from './main-dash/main-dash.component';
import {DishTableComponent} from './dish-table/dish-table.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {PhoneComponent} from './phone/phone.component';
import {MAT_DATE_LOCALE} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'carte', component: CarteComponent},
  {path: 'reserve', component: ReserveComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    CarteComponent,
    ReserveComponent,
    ContactComponent,
    MainDashComponent,
    DishTableComponent,
    ScheduleComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},],
  bootstrap: [AppComponent]
})
export class AppModule {
}
