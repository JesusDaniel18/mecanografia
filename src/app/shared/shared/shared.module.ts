import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[CommonModule,ReactiveFormsModule,  FormsModule],
  providers:[AuthService]
})
export class SharedModule { }
