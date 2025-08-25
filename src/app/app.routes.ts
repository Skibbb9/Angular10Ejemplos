import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { Controlflow } from './components/controlflow/controlflow';
import { DataBinding } from './components/data-binding/data-binding';
import { signal } from '@angular/core';
import { SignalEv } from './components/signal-ev/signal-ev';
import { Attdirective } from './components/attdirective/attdirective';
import { GetApi } from './components/get-api/get-api';
import { PipesEx } from './components/pipes-ex/pipes-ex';
import { ResourceApi } from './components/resource-api/resource-api';
import { Login } from './components/login/login';   

export const routes: Routes = [
//     Aqui creamos las runPostSignalSetFn, aqui accedemos a las rutas de los componentes, se crea mediante URL
{
    path:"admin",
    component:Admin //Importamos el nombre de nuestro componente admin
},
{
    //Segunda Ruta
    path:"control-flow",
    component: Controlflow
},
{
    path:'dat-binding',
    component: DataBinding
},
{
    path:'login',
    component: Login
},
{
    path:'signal',
    component: SignalEv
},
{
    path:"Attribute-dir",
    component:Attdirective
},
{
    path:"API",
        component: GetApi
    },

{
    path:"pipe",
    component:PipesEx
},
{
    path:"resourceapi",
    component:ResourceApi
}
 ];

