import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppService } from 'app/app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatTableModule,
    CdkTableModule,
    BrowserAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
