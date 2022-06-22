import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertApiDetailsComponent } from './insert-api-details/insert-api-details.component';
import { GetApiDetailsComponent } from './get-api-details/get-api-details.component';
import { EditApiDetailsComponent } from './edit-api-details/edit-api-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterdataPipe } from './filterdata.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InsertApiDetailsComponent,
    GetApiDetailsComponent,
    EditApiDetailsComponent,
    FilterdataPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
