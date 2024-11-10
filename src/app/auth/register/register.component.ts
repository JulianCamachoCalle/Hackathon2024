import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    departamento: ['', Validators.required],
    provincia: ['', Validators.required],
    distrito: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    dni: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  errorMessage: string = '';

  departamentos = [
    {
      nombre: 'Amazonas',
      provincias: [
        {
          nombre: 'Bagua',
          distritos: ['Aramango', 'Bagua', 'Copallín', 'El Parco', 'Imaza', 'La Peca']
        },
        {
          nombre: 'Bongará',
          distritos: ['Chisquilla', 'Churuja', 'Corosha', 'Cuispes', 'Florida', 
            'Jazán', 'Jumbilla', 'Recta', 'San Carlos', 'Shipasbamba', 'Valera', 'Yambrasbamba']
        },
        {
          nombre: 'Chachapoyas',
          distritos: ['Asunción', 'Balsas', 'Chachapoyas', 'Cheto', 'Chiliquín',
            'Chuquibamba', 'Granada', 'Huancas', 'Jalca Grande', 'Leimebamba',
            'Levanto', 'Magdalena', 'Mariscal Castilla', 'Molinopampa', 'Montevideo',
            'Olleros', 'Quinjalca', 'San Francisco de Daguas', 'San Isidro de Maino', 'Soloco', 'Sonche']
        },
        {
          nombre: 'Condorcanqui',
          distritos: ['El Cenepa', 'Nieva', 'Río Santiago']
        },
        {
          nombre: 'Luya',
          distritos: ['Camporredondo', 'Cocabamba', 'Colcamar', 'Conila', 'Inguilpata',
            'Lámud', 'Longuita', 'Lonya Chico', 'Luya', 'Luya Viejo',
            'María', 'Ocalli', 'Ocumal', 'Pisuquía', 'Providencia',
            'San Cristóbal', 'San Francisco del Yeso', 'San Jerónimo', 'San Juan de Lopecancha', 
            'Santa Catalina', 'Santo Tomás', 'Tingo', 'Trita']
        },
        {
          nombre: 'Rodríguez de Mendoza',
          distritos: ['Chirimoto', 'Cochamal', 'Huambo', 'Limabamba', 'Longar',
            'Mariscal Benavides', 'Milpuc', 'Omia', 'San Nicolás', 'Santa Rosa',
            'Totora', 'Vista Alegre']
        },
        {
          nombre: 'Utcubamba',
          distritos: ['Bagua Grande', 'Cajaruro', 'Cumba', 'El Milagro', 'Jamalca',
            'Lonya Grande', 'Yamón']
        },
      ]
    },
    {
      nombre: 'Ancash',
      provincias: [
        {
          nombre: 'Aija',
          distritos: ['Aija', 'Coris', 'Huacllán', 'La Merced', 'Succha']
        },
        {
          nombre: 'Antonio Raymondi',
          distritos: ['Aczo', 'Chaccho', 'Chingas', 'Llamellín', 'Mirgas', 'San Juan de Rontoy']
        },
        {
          nombre: 'Asunción',
          distritos: ['Acochaca', 'Chacas']
        },
        {
          nombre: 'Bolognesi',
          distritos: ['Abelardo Pardo', 'Antonio Raymondi', 'Aquia', 'Cajacay', 'Canis',
            'Chiquián', 'CólquiocE', 'Huallanca', 'Huasta', 'Huayllacayán',
            'La Primavera', 'Mangas', 'Pacllón', 'San Miguel', 'Ticllos']
        },
        {
          nombre: 'Carhuaz',
          distritos: ['Acopampa', 'Amashca', 'Anta', 'Ataquero', 'Carhuaz',
            'Marcará', 'Pariahuanca', 'San Miguel de Aco', 'Shilla', 'Tinco', 'Yungar']
        },
        {
          nombre: 'Carlos F. Fitzcarrald',
          distritos: ['San Luis', 'San Nicolás', 'Yauya']
        },
        {
          nombre: 'Casma',
          distritos: ['Casma', 'Buena Vista Alta', 'Comandante Noel', 'Yaután']
        },
        {
          nombre: 'Corongo',
          distritos: ['Aco', 'Bambas', 'Corongo', 'Cusca', 'La Pampa', 'Yánac', 'Yupán']
        },
        {
          nombre: 'Huaraz',
          distritos: ['Cochabamba', 'Colcabamba', 'Huanchay', 'Huaraz', 'Independencia',
            'Jangas', 'La Libertad', 'Olleros', 'Pampas Grande', 'Pariacoto', 'Pira', 'Tarica']
        },
        {
          nombre: 'Huari',
          distritos: ['Anra', 'Cajay', 'Chavín de Huántar', 'Huacachi', 'Huacchis',
            'Huachis', 'Huántar', 'Huari', 'Masin', 'Paucas',
            'Pontó', 'Rahuapampa', 'Rapayán', 'San Marcos', 'San Pedro de Chaná', 'Uco']
        },
        {
          nombre: 'Huarmey',
          distritos: ['Cochapeti', 'Culebras', 'Huarmey', 'Huayan', 'Malvas']
        },
        {
          nombre: 'Huaylas',
          distritos: ['Caraz', 'Huallanca', 'Huata', 'Huaylas', 'Mato',
            'Pamparomás', 'Pueblo Libre', 'Santa Cruz', 'Santo Toribio', 'Yuracmarca']
        },
        {
          nombre: 'Mariscal Luzuriaga',
          distritos: ['Casca', 'Eleazar Guzmán Barrón', 'Fidel OIivas Escudero', 'Llama', 'Llumpa',
            'Lucma', 'Musga', 'Piscobamba']
        },
        {
          nombre: 'Ocros',
          distritos: ['Acas', 'Cajamarquilla', 'Carhuapampa', 'Cochas', 'Congas',
            'Llipa', 'Ocros', 'San Cristóbal de Raján', 'San Pedro', 'Santiago de Chilcas']
        },
        {
          nombre: 'Pallasca',
          distritos: ['Bolognesi', 'Cabana', 'Conchucos', 'Huacaschuque', 'Huandoval',
            'Lacabamba', 'Llapo', 'Pallasca', 'Pampas', 'Santa Rosa', 'Tauca']
        },
        {
          nombre: 'Pomabamba',
          distritos: ['Huayllán', 'Parobamba', 'Pomabamba', 'Quinuabamba']
        },
        {
          nombre: 'Recuay',
          distritos: ['Cátac', 'Cotaparaco', 'Huayllapampa', 'Llacllín', 'Marca',
            'Pampas Chico', 'Pararín', 'Recuay', 'Tapacocha', 'Ticapampa']
        },
        {
          nombre: 'Santa',
          distritos: ['Chimbote', 'Cáceres del Perú', 'Coishco', 'Macate', 'Moro',
            'Nepeña', 'Nuevo Chimbote', 'Samanco', 'Santa']
        },
        {
          nombre: 'Sihuas',
          distritos: ['Acobamba', 'Alfonso Ugarte', 'Cashapampa', 'Chingalpo', 'Huayllabamba',
            'Quiches', 'Ragash', 'San Juan', 'Sicsibamba', 'Sihuas']
        },
        {
          nombre: 'Yungay',
          distritos: ['Cascapara', 'Mancos', 'Matacoto', 'Quillo', 'Ranrahírca',
            'Shupluy', 'Yanama', 'Yungay']
        },
      ]
    },
    {
      nombre: 'Apurímac',
      provincias: [
        {
          nombre: 'Abancay',
          distritos: ['Abancay', 'Chacoche', 'Circa', 'Curahuasi', 'Huanipaca',
            'Lambrama', 'Pichirhua', 'San Pedro de Cachora', 'Tamburco']
        },
        {
          nombre: 'Andahuaylas',
          distritos: ['Andahuaylas', 'Andarapa', 'Chiara', 'Huancarama', 'Huancaray',
            'Huayana', 'José María Arguedas', 'Kaquiabamba', 'Kishuara', 'Pacobamba',
            'Pacucha', 'Pampachiri', 'Pomacocha', 'San Antonio de Cachi', 'San Jerónimo',
            'San Miguel de Chaccrapampa', 'Santa María de Chicmo', 'Talavera de la Reyna', 'Tumay Huaraca', 'Turpo']
        },
        {
          nombre: 'Antabamba',
          distritos: ['Antabamba', 'El Oro', 'Huaquirca', 'Juan Espinoza Medrano', 'Oropesa',
            'Pachaconas', 'Sabaino']
        },
        {
          nombre: 'Aymaraes',
          distritos: ['Capaya', 'Caraybamba', 'Chalhuanca', 'Chapimarca', 'Colcabamba',
            'Cotaruse', 'Ihuayllo', 'Justo Apu Sahuaraura', 'Lucre', 'Pocohuanca',
            'San Juan de Chacña', 'Sañayca', 'Soraya', 'Tapairihua', 'Tintay',
            'Toraya', 'Yanaca']
        },
        {
          nombre: 'Cotabambas',
          distritos: ['Chalhuahuacho', 'Cotabambas', 'Coyllurqui', 'Haquira', 'Mara', 'Tambobamba']
        },
        {
          nombre: 'Chincheros',
          distritos: ['Anccohuayllo', 'Chincheros', 'Cocharcas', 'El Porvenir', 'Huaccana',
            'Los Chankas', 'Ocobamba', 'Ongoy', 'Ranracancha', 'Rocchac', 'Uranmarca']
        },
        {
          nombre: 'Grau',
          distritos: ['Chuquibambilla', 'Curasco', 'Curpahuasi', 'Huayllati', 'Mamara',
            'Mariscal Gamarra', 'Micaela Bastidas', 'Pataypampa', 'Progreso', 'San Antonio',
            'Santa Rosa', 'Turpay', 'Vilcabamba', 'Virundo']
        },
      ]
    },
    {
      nombre: 'Arequipa',
      provincias: [
        {
          nombre: 'Arequipa',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Camaná',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Caravelí',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Castilla',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Caylloma',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Condesuyos',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Islay',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'La Unión',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
      ]
    },
    {
      nombre: 'Ayacucho',
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
    {
      nombre: 'Cajamarca',
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
    {
      nombre: 'Constitucional de Callao',
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
    {
      nombre: 'Cuzco',
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
    {
      nombre: 'Huancavelica',
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
    {
      nombre: 'Huánuco',
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
    {
      nombre: 'Ica',
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
    {
      nombre: 'Junín',
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
    {
      nombre: 'La Libertad',
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
    {
      nombre: 'Lambayeque',
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
    {
      nombre: 'Lima',
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
    {
      nombre: 'Loreto',
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
    {
      nombre: 'Madre de Dios',
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
    {
      nombre: 'Moquegua',
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
    {
      nombre: 'Pasco',
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
    {
      nombre: 'Piura',
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
    {
      nombre: 'Provincia de Lima',
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
    {
      nombre: 'Puno',
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
    {
      nombre: 'San Martín',
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
    {
      nombre: 'Tacna',
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
    {
      nombre: 'Tumbes',
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
  provincias: any[] = [];
  distritos: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  get username() { return this.registerForm.get('username'); }
  get nombre() { return this.registerForm.get('nombre'); }
  get apellido() { return this.registerForm.get('apellido'); }
  get departamento() { return this.registerForm.get('departamento'); }
  get provincia() { return this.registerForm.get('provincia'); }
  get distrito() { return this.registerForm.get('distrito'); }
  get email() { return this.registerForm.get('email'); }
  get dni() { return this.registerForm.get('dni'); }
  get telefono() { return this.registerForm.get('telefono'); }
  get password() { return this.registerForm.get('password'); }

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

  register(): void {
    if (this.registerForm.invalid) {
      this.errorMessage = "Por favor complete todos los campos.";
      return;
    }

    this.userService.registerUser(this.registerForm.value).subscribe({
      next: (response) => {
        alert(response.message);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.errorMessage = error.error.message || 'Error en el registro';
      }
    });
  }
}
