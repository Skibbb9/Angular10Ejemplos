import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipes-ex',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe, JsonPipe, NaPipe],
  templateUrl: './pipes-ex.html',
  styleUrl: './pipes-ex.css'
})
export class PipesEx {

  courseName = "angular";
  courseDuration = "DURATIPON is 3 Months";

  currentDate: Date = new Date();

  rollNoList: number[]= [112, 111, 123, 114, 115, 116];

  studentObj: any = {
    name:"AAAA",
    mobile: "667293",
    address:{
      city:"Pune",
      state:""
    }
  }

}
