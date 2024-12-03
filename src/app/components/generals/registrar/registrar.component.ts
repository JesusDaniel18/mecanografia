import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent {
  registerForm: FormGroup;
  submitted = false;
  loading = false;
  errorMessage: string="";

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = this.formBuilder.group({
      NombreUsuario: ['', [Validators.required, Validators.minLength(4)]],
      Correo: ['', [Validators.required, Validators.email]],
      Contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  ngOnInit(): void {
   
  }

  // Método de envío del formulario
  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.authService.register(this.registerForm.value).subscribe(
      (response) => {
        console.log('Usuario registrado correctamente', response);

      },
      (error) => {
        console.error('Error al registrar el usuario', error);
        this.errorMessage = 'Hubo un error al registrar el usuario. Intenta nuevamente.';
        this.loading = false;
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

}
