import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app.routing';

import { AppComponent } from './app.component';

import { SurgeryModule } from './surgery/surgery.module';
import { SharedModule } from './shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    SharedModule,
    SurgeryModule,
    MatTabsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
