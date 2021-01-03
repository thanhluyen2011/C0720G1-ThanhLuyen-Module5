import { Injectable } from '@angular/core';
import {StudentI} from "./model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: StudentI[] = [
    {
      id: 1,
      name: 'Khoa gà',
      address: 'ĐÀ NẴNG',
      age: 35,
      image: 'https://zicxaphotos.com/wp-content/uploads/2020/07/girl-xinh-cap-3-1.jpg',
      mark: 5
    },
    {
      id: 2,
      name: 'Luyện',
      address: 'QUẢNG NAM',
      age: 18,
      image: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-1/p200x200/132157436_1609428359445928_4214428557890628153_o.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=aGG18spiLWkAX_c6p6k&_nc_ht=scontent.fsgn2-3.fna&tp=6&oh=224c68d4d2caecdb095f92f302e0e7e7&oe=600EEDE0',
      mark: 8
    },
    {
      id: 3,
      name: 'Sương',
      address: 'QUẢNG NAM',
      age: 21,
      image: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/124002904_1565575170497914_4850024781478848098_o.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=FNWIOHMlUMwAX-xw3XR&_nc_ht=scontent.fsgn2-1.fna&oh=6438c3ffde68a5ae3a925d61cc8ab6df&oe=600EE62B',
      mark: 3
    },
    {
      id: 4,
      name: 'Phúc Què',
      address: 'Hà Nội',
      age: 21,
      image: 'https://i.pinimg.com/736x/db/6b/11/db6b1116a1465f761802d6a1eba323b8.jpg',
      mark: 10
    }
  ];
  constructor() { }
  findAll(){
    return this.studentList
  }
  findById(id) : StudentI{
    return this.studentList.find(student => student.id === id)
  }
  saveStudent(student: StudentI){
    this.studentList.unshift(student);
  }
  removeStudent(id: number) {
    const index = this.studentList.findIndex(student => student.id === id);
    this.studentList.splice(index, 1);
  }
}
