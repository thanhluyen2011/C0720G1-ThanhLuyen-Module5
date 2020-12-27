import { Component, OnInit } from '@angular/core';
import {StudentI} from "./model/student";

@Component({
  selector: 'app-bai-tap-ve-nha',
  templateUrl: './bai-tap-ve-nha.component.html',
  styleUrls: ['./bai-tap-ve-nha.component.scss']
})
export class BaiTapVeNhaComponent implements OnInit {
  student : StudentI = {
    id : 1,
    name : 'luyen',
    address : 'QUẢNG NAM',
    age : 18,
    image : 'https://zicxaphotos.com/wp-content/uploads/2020/07/girl-xinh-cap-3-1.jpg',
    mark : 5
  };
  constructor() { }
  setMark(value : number){
    this.student.mark = value
  }
  ngOnInit(): void {
  }

}
