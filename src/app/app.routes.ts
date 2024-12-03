import { Routes } from '@angular/router';
import { LoginComponent } from './components/generals/login/login.component';
import { RegistrarComponent } from './components/generals/registrar/registrar.component';
import { ProfesorComponent } from './components/profesor/profesor/profesor.component';
import { LeccionComponent } from './components/estudiante/leccion/leccion.component';
import { ListadoLeccionesComponent } from './components/estudiante/listado-lecciones/listado-lecciones.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'alumno', component: LeccionComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'profesor', component: ProfesorComponent },
    { path: 'listadolecciones', component: ListadoLeccionesComponent },


];
