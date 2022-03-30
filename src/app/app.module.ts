

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {TableModule} from 'primeng/table';  
import { ButtonModule } from "primeng/button";
import {DropdownModule} from 'primeng/dropdown';
import{CheckboxModule}from'primeng/checkbox';
import {FieldsetModule} from 'primeng/fieldset';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { About2Component } from './about2/about2.component';
import { Participants2Component } from './participants2/participants2.component';
import {CardModule} from 'primeng/card';
import { TranslateRequest3Component } from './translate-request3/translate-request3.component';


@NgModule({
  declarations: [
    AppComponent,
    About2Component,
    Participants2Component,
    TranslateRequest3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    FieldsetModule,
    NgbModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
