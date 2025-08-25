import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlflow',
  imports: [FormsModule],
  templateUrl: './controlflow.html',
  styleUrl: './controlflow.css'
})
export class Controlflow {

  isParaVisiable: boolean = true;

  startMonthName: string = "feb";
  citList: string[] = ["Pune", "mumbai", "Navolato"];
  studentlist  = [
    {name: 'AAA', city: 'pune',isActive:false},
    {name: 'bb', city: 'mumbai',isActive:false},
    {name: 'cc', city: 'navolato',isActive:true},
    {name: 'dd', city: 'paris',isActive:false},
    {name: 'ee', city: 'Oune',isActive:false},
  ];

  showP(){
    this.isParaVisiable = true;
  }

  hidep(){
    this.isParaVisiable = false;
  }


}
