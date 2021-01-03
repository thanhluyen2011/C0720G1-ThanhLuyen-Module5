import {Component, Input, OnInit} from '@angular/core';
import {StudentI} from "../model/student";
import { Subscription } from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.scss']
})
export class StudentdetailComponent implements OnInit {
  student: StudentI;
  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService) { }


  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.student = this.studentService.findById(id);
    });
  }

}
