import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;
import {StudentI} from "../model/student";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  studentCreate: FormGroup;
  @Input()
  studentListCreate: StudentI[];

  constructor(private studentService : StudentService) {
  }

  ngOnInit(): void {
    this.studentCreate = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      age: new FormControl('', Validators.min(18)),
      mark: new FormControl('', Validators.min(0) && Validators.max(10)),
      image: new FormControl('')
    })
  }

  saveStudent() {
    this.studentService.saveStudent(this.studentCreate.value)
    console.log(this.studentCreate)
    // this.studentListCreate.unshift(this.studentCreate.value)
    document.getElementById('closeModal').click();
  }
}
