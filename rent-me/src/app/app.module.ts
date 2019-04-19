import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

import { RentalModule } from './rental/rental.module';
import { ManageModule } from './manage/manage.module';
import { AuthModule } from './auth/auth.module';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RentalModule,
    AuthModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ManageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
