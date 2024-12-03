import { Component } from '@angular/core';
import { PronavbarComponent } from '../pronavbar/pronavbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeneralService } from '../../../services/general.service';

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [PronavbarComponent, CommonModule, FormsModule],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.scss'
})
export class ProfesorComponent {
  
  nuevoTitulo: string = '';
  nuevaDescripcion: string = '';
  nuevoTextoLeccion: string = '';
  nuevoNivelDificultad: string = 'Principiante';

  lecciones :any = [];
  constructor(private generalService: GeneralService) {}

  ngOnInit(){
     this.obtenerLecciones();
  }

obtenerLecciones(){
  this.generalService.obtenerLeccion().subscribe(res=>{
   
      console.log(res);
      
      this.lecciones=res
   
  })
}

  agregarLeccion() {
    const nuevaLeccion = {
      Titulo: this.nuevoTitulo,
      Descripcion: this.nuevaDescripcion,
      TextoLeccion: this.nuevoTextoLeccion,
      NivelDificultad: this.nuevoNivelDificultad,
      FechaCreacion: new Date().toISOString()
    };
    this.generalService.agregarLeccion(nuevaLeccion).subscribe(res=>{
      console.log("Ejecutado", res);
      this.obtenerLecciones();
    });

    this.limpiarCampos();
  }

  limpiarCampos() {
    this.nuevoTitulo = '';
    this.nuevaDescripcion = '';
    this.nuevoTextoLeccion = '';
    this.nuevoNivelDificultad = 'Principiante';
  }

  eliminarLeccion(id:number){
    this.generalService.eliminarLeccion(id).subscribe(res=>{
      console.log("Ejecutado", res);
      this.obtenerLecciones();
    });
  }
}
