// app.ts

import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { Master } from './services/master';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEv } from './components/signal-ev/signal-ev';
import { Controlflow } from './components/controlflow/controlflow';
import { GetApi } from './components/get-api/get-api';
import { Login } from './components/login/login'; // <--- AGREGAR ESTA LÍNEA

@Component({
  selector: 'app-root',
  imports: [Controlflow, RouterLink, RouterOutlet, Login], // <--- AGREGAR 'Login' AQUÍ
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CRUD');
  loggedUserName: string = '';

  constructor(private masterService: Master) {
    this.readLoggedData();
    this.masterService.onLogin.subscribe(res => {
      this.readLoggedData();
    });
  }

  readLoggedData() {
    const loggedData = localStorage.getItem("angular20User");
    if (loggedData != null) {
      this.loggedUserName = loggedData;
    }
  }

  onLogfff() {
    localStorage.removeItem("angular20User");
    this.readLoggedData();
  }
}