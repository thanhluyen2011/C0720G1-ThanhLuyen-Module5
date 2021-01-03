import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaiTapVeNhaComponent} from "./bai-tap-ve-nha/bai-tap-ve-nha.component";
import {CreateStudentComponent} from "./bai-tap-ve-nha/create-student/create-student.component";
import {StudentdetailComponent} from "./bai-tap-ve-nha/studentdetail/studentdetail.component";


const routes: Routes = [
  {path : '',component: BaiTapVeNhaComponent},
  {path : 'create',component: CreateStudentComponent},
  {path: 'detail/id',component: StudentdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
