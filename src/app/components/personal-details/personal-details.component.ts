import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../services/auth/user';
import { UserService } from '../../services/user/user.service';
import { environment } from '../../../environments/environment.development';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css'
})
export class PersonalDetailsComponent {
  errorMessage: String = "";
  user?: User;
  userLoginOn: boolean = false;
  editMode: boolean = false;
  provincias: any[] = [];
  distritos: string[] = [];
  departamentos = [
    {
      nombre: 'Ucayali',
      provincias: [
        {
          nombre: '',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
      ]
    },
  ]

  seleccionDepartamento(): void {
    const departamentoSeleccionado = this.registerForm.value.departamento;
    const departamento = this.departamentos.find(d => d.nombre === departamentoSeleccionado);
    this.provincias = departamento ? departamento.provincias : [];
    this.distritos = []; // Limpiar distritos cuando cambia el departamento
    this.registerForm.controls['provincia'].reset();
    this.registerForm.controls['distrito'].reset();
  }

  seleccionProvincia(): void {
    const provinciaSeleccionada = this.registerForm.value.provincia;
    const provincia = this.provincias.find(p => p.nombre === provinciaSeleccionada);
    this.distritos = provincia ? provincia.distritos : [];
    this.registerForm.controls['distrito'].reset();
  }

  registerForm = this.formBuilder.group({
    id: [''],
    username: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    departamento: ['', Validators.required],
    provincia: ['', Validators.required],
    distrito: ['', Validators.required],
    dni: ['', Validators.required],
    email: ['', Validators.required],
    telefono: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    // Escuchar el userId desde el LoginService
    this.loginService.userId.subscribe({
      next: (userId) => {
        if (userId !== null) {
          // Obtener datos del usuario al loguearse
          this.userService.getUser(Number(userId)).subscribe({
            next: (userData) => {
              this.user = userData;
              this.registerForm.controls.id.setValue(userData.id.toString());
              this.registerForm.controls.username.setValue(userData.username);
              this.registerForm.controls.nombre.setValue(userData.nombre);
              this.registerForm.controls.apellido.setValue(userData.apellido);
              this.registerForm.controls.departamento.setValue(userData.departamento);
              this.registerForm.controls.provincia.setValue(userData.provincia);
              this.registerForm.controls.distrito.setValue(userData.distrito);
              this.registerForm.controls.dni.setValue(userData.dni);
              this.registerForm.controls.email.setValue(userData.email);
              this.registerForm.controls.telefono.setValue(userData.telefono);
              this.registerForm.controls.password.setValue(userData.password);
            },
            error: (errorData) => {
              this.errorMessage = errorData;
            },
            complete: () => {
              console.log("User Data ok");
            }
          });
        }
      }
    });

    // Escuchar si el usuario está logueado
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });

  }

  get username() {
    return this.registerForm.controls.username;
  }

  get nombre() {
    return this.registerForm.controls.nombre;
  }

  get apellido() {
    return this.registerForm.controls.apellido;
  }

  get departamento() {
    return this.registerForm.controls.departamento;
  }

  get provincia() {
    return this.registerForm.controls.provincia;
  }

  get distrito() {
    return this.registerForm.controls.distrito;
  }

  get dni() {
    return this.registerForm.controls.dni;
  }

  get email() {
    return this.registerForm.controls.email;
  }

  get telefono() {
    return this.registerForm.controls.telefono;
  }

  get password() {
    return this.registerForm.controls.password;
  }

  savePersonalDetailsData() {
    if (this.registerForm.valid) {
      this.userService.updateUser(this.registerForm.value as unknown as User).subscribe({
        next: () => {
          this.editMode = false;
          this.user = this.registerForm.value as unknown as User;
        },
        error: (errorData) => console.error(errorData)
      })
    }
  }
}
