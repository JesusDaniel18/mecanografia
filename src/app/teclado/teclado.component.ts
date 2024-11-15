import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-teclado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.scss'
})
export class TecladoComponent {
  row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  activeKey: string | null = null; // Guardamos la tecla activa

  // Método para resaltar la tecla activa
  isKeyActive(key: string): boolean {
    return this.activeKey === key;
  }

  // Activa la tecla cuando se presiona el mouse sobre ella
  activateKey(key: string): void {
    this.activeKey = key;
  }

  // Desactiva la tecla al soltar el mouse
  deactivateKey(): void {
    this.activeKey = null;
  }

  // Escucha el evento de presionar una tecla del teclado físico
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const key = event.key.toUpperCase(); // Obtenemos la tecla en mayúsculas
    if (this.isKeyInRows(key)) {
      this.activeKey = key;
    }
  }

  // Escucha el evento de soltar la tecla del teclado físico
  @HostListener('document:keyup', ['$event'])
  onKeyUp(): void {
    this.activeKey = null;
  }

  // Verifica si la tecla está en las filas del teclado virtual
  isKeyInRows(key: string): boolean {
    return (
      this.row1.includes(key) ||
      this.row2.includes(key) ||
      this.row3.includes(key) ||
      key === ' ' // Considera la tecla espacio
    );
  }
}import { CommonModule } from '@angular/common';

