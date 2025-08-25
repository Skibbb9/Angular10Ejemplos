import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-attdirective',
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe ],
  templateUrl: './attdirective.html',
  styleUrl: './attdirective.css'
})
export class Attdirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

    divIClassName = signal<string>("");
    firstName: string = "chettah";
    courseName: string = "Angular20";
    rollNoList=[11, 12, 14, 15, 16, 17]

    isDiv2Green: boolean = false;

    currentDate: Date = new Date();

    studentObj: any = {
      name:'Chetan',
      city:'Pune',
      state: 'MH'
    }

    constructor(){
       console.log("ngOnInit")
    }
    ngOnInit(): void {
      console.log("ngOnInit")
      //Activar la llamada a la api
      //Para suscribirnos 
      //Componente inicializado. Ideal para cargar datos (HTTP), suscripciones, etc.
    }
    ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked")
      //Angular volvió a checar el contenido proyectado (en cada change detection).
    }
    ngAfterContentInit(): void {
      console.log("ngAfterContentInit")
      //Se proyectó el contenido <ng-content> por primera vez.
    }
    ngAfterViewInit(): void {
      console.log("ngAfterViewInit")
      //La vista del componente y sus child views ya están listas (puedes acceder a @ViewChild con seguridad).
    }
   ngAfterViewChecked (): void {
      console.log("ngAfterViewChecked")
    }
    //Angular revisó de nuevo la vista (en cada change detection).


    ngOnDestroy(): void {
      console.log("ngOnDestroy")
    }
    //Antes de destruir el componente: limpia suscripciones, timers, listeners, etc.


    setBgClass(className: string){
      this.divIClassName.set(className)
    }

    tooggleDive2color(){
      this.isDiv2Green = ! this.isDiv2Green;
    }
}
