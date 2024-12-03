import { Component } from '@angular/core';
import { GeneralService } from '../../../services/general.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado-lecciones',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './listado-lecciones.component.html',
  styleUrl: './listado-lecciones.component.scss'
})
export class ListadoLeccionesComponent {
  constructor(private generalService: GeneralService, private router: Router) {}
  lecciones :any = [];

  ngOnInit(){
    this.obtenerLecciones();
 }
 obtenerLecciones(){
  this.generalService.obtenerLeccion().subscribe(res=>{
   
      console.log(res);
      
      this.lecciones=res
   
  })
}


ejecutar(id: number){
  this.router.navigate(['/alumno']);  
}

}
