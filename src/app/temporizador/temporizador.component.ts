import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.scss'
})
export class TemporizadorComponent {
  @Input() segundos!: number;  // Recibe los segundos iniciales como entrada
  tiempoRestante!: number;
  intervalo: any;


  iniciarTemporizador() {
    this.tiempoRestante = this.segundos;
    this.intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante++;
      } else {
        clearInterval(this.intervalo);  // Detiene el temporizador cuando llega a 0
      }
    }, 1000);
  }

  // Método para detener el temporizador manualmente si es necesario
  detenerTemporizador() {
    this.iniciarTemporizador();
  }

}
