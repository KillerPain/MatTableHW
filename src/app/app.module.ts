import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatTableModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppService } from 'app/app.service';
import { AppRoutingModule } from 'app/app-routing.module';
import { ProfileGuard } from 'app/profile.guard';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    CdkTableModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AppService, ProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
