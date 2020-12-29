import {Component, Input, OnInit} from '@angular/core';
import {StudentI} from "../model/student";

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.scss']
})
export class StudentdetailComponent implements OnInit {
  @Input()
  studentDetail : StudentI;

  constructor() { }

  setMark(value : number){
    this.studentDetail.mark = value
  }
  ngOnInit(): void {
  }

  getImage() {
    window.open(this.studentDetail.image, "_blank");
  }
}
