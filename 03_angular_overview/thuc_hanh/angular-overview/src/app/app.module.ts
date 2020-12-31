import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './03_angular_overview/thuc_hanh/font-size/font-size.component';
import { PetComponent } from './03_angular_overview/thuc_hanh/pet/pet.component';
import { BaiTapVeNhaComponent } from './bai-tap-ve-nha/bai-tap-ve-nha.component';
import { CaculatorComponent } from './03_angular_overview/bai_tap/caculator/caculator.component';
import { ColorComponent } from './03_angular_overview/bai_tap/color/color.component';
import { HackernewsComponent } from './04_angular_component_and_template/thuc_hanh/hackernews/hackernews.component';
import { StudentdetailComponent } from './bai-tap-ve-nha/studentdetail/studentdetail.component';
import { HackerNewsComponent } from './04_angular_component_and_template/bai_tap/hacker-news/hacker-news.component';
import { NameCardComponent } from './05_component_interaction/thuc_hanh/name-card/name-card.component';
import { ProgressBarComponent } from './05_component_interaction/thuc_hanh/progress-bar/progress-bar.component';
import { TodoComponent } from './06_angular_form/thuc_hanh/todo/todo.component';
import { CreateStudentComponent } from './bai-tap-ve-nha/create-student/create-student.component';


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
    ProgressBarComponent,
    TodoComponent,
    CreateStudentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
