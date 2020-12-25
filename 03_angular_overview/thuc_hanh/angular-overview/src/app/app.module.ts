import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './03_angular_overview/thuc_hanh/font-size/font-size.component';
import { PetComponent } from './03_angular_overview/thuc_hanh/pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
