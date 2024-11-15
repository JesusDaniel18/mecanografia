import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeccionComponent } from './leccion/leccion.component';
import { LoginComponent } from "./login/login.component";
import { RegistrarComponent } from "./registrar/registrar.component";
import { TemporizadorComponent } from "./temporizador/temporizador.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeccionComponent, LoginComponent, RegistrarComponent, TemporizadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'leccion';
}
