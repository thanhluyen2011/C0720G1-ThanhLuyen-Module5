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
import { HackernewsComponent } from './04_angular_component_and_template/thuc_hanh/hackernews/hackernews.component';
import { StudentdetailComponent } from './bai-tap-ve-nha/studentdetail/studentdetail.component';
import { HackerNewsComponent } from './04_angular_component_and_template/bai_tap/hacker-news/hacker-news.component';
import { NameCardComponent } from './05_component_interaction/thuc_hanh/name-card/name-card.component';
import { ProgressBarComponent } from './05_component_interaction/thuc_hanh/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    BaiTapVeNhaComponent,
    CaculatorComponent,
    ColorComponent,
    HackernewsComponent,
    StudentdetailComponent,
    HackerNewsComponent,
    NameCardComponent,
    ProgressBarComponent
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
