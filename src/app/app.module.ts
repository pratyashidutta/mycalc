import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ResultComponent } from './result/result.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'; 
import {MatRadioModule} from '@angular/material/radio'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
