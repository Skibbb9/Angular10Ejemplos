import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  courseName: string = "Angular 20 Tutorial";
  productPrice: number = 12500;
  maxLenght : number = 5;
  minChar : number = 3; 
  inputType : string = "checkbox";
  myClassName: string= "myColor";
  constructor(){
  }

  showWelcomeMessage(){
    alert("welcome to angular 20")
  }
  changeCourseName(){
    this.courseName= "Reactjs"
  }

  onCityChange(){
    alert("ss")
  }
}
