import { Component, signal, computed } from '@angular/core';



@Component({
  selector: 'app-signal-ev',
  imports: [],
  templateUrl: './signal-ev.html',
  styleUrl: './signal-ev.css'
})


export class SignalEv {
  // Esta es una variable estatica, osea no cambia no se mueve
  firstName: string = "Chetan"

  productName= "Moto"

    // Esta es una variable con signal, asi es como creas una señal, es otra forma de crear la variabke
  courseName = signal<string>("Angular");

  // Se prueba de otra manera

  courseDuration = signal("15 videos");

  //Esta es la signal calculada, el valor de esta señal depende de las dos señales que le pusimos como valor

  courseDetail = computed(() => this.courseName() + ""+this.courseDuration () )

  constructor(){
    //Aqui cambios el valor de la variable normalmente
    this.firstName = "Rahul";
    //Asi ponemos el mensaje en consola normalmente
    console.log(this.firstName);

    //Asi es como se accede a signal
    console.log(this.courseName())

    //Asi es como se cambia el valor de signal
    setTimeout(()=> {

       this.courseName.set("React")
    }, 5000);
    
   
    console.log(this.courseName())
  }

}
