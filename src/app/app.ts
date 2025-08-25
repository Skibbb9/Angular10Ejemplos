import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';

import { DataBinding } from './components/data-binding/data-binding';
import { SignalEv } from './components/signal-ev/signal-ev';
import { Controlflow } from './components/controlflow/controlflow';
import { GetApi } from './components/get-api/get-api';

// Este es el componente de mergeApplicationConfig, aqui se ponen todos los componentes del proyecto
@Component({
  selector: 'app-root',
  imports: [Controlflow, RouterLink, RouterOutlet], //Aqui importe los componentes para poder renderizarlos en lo que es nuestro html prinicipal
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CRUD');
}
