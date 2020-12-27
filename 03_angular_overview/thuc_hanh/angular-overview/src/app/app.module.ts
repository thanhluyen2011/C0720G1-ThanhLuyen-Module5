import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './03_angular_overview/thuc_hanh/font-size/font-size.component';
import { PetComponent } from './03_angular_overview/thuc_hanh/pet/pet.component';
import { BaiTapVeNhaComponent } from './bai-tap-ve-nha/bai-tap-ve-nha.component';
import { CaculatorComponent } from './03_angular_overview/bai_tap/caculator/caculator.component';
import {FormsModule} from "@angular/forms";
import { ColorComponent } from './03_angular_overview/bai_tap/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    BaiTapVeNhaComponent,
    CaculatorComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
