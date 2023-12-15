import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './sign-in/sign-in.component';
import { FacilityMgtComponent } from './facility-mgt/facility-mgt.component';
import { GatePassesComponent } from './gate-passes/gate-passes.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OwnerComponent } from './owner/owner.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    FacilityMgtComponent,
    GatePassesComponent,
    OwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
