import { Component } from '@angular/core';
import { TecladoComponent } from "../teclado/teclado.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../../generals/footer/footer.component";
import { TemporizadorComponent } from "../temporizador/temporizador.component";

@Component({
  selector: 'app-leccion',
  standalone: true,
  imports: [TecladoComponent, NavbarComponent, FooterComponent, TemporizadorComponent],
  templateUrl: './leccion.component.html',
  styleUrl: './leccion.component.scss'
})
export class LeccionComponent {
Titulo = "Esta es mi primera leccion"
}
