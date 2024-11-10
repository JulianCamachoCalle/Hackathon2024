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
          distritos: ['Alto Selva Alegre', 'Arequipa', 'Cayma', 'Cerro Colorado', 'Characato',
            'Chiguata', 'Jacobo Hunter', 'José Luis Bustamante y Rivero', 'La Joya', 'Mariano Melgar',
            'Miraflores', 'Mollebaya', 'Paucarpata', 'Pocsi', 'Polobaya',
            'Quequeña', 'Sabandía', 'Sachaca', 'San Juan de Siguas', 'San Juan de Tarucani',
            'Santa Isabel de Siguas', 'Santa Rita de Siguas', 'Socabaya', 'Tiabaya', 'Uchumay',
            'Vitor', 'Yanahuara', 'Yarabamba', 'Yura']
        },
        {
          nombre: 'Camaná',
          distritos: ['Camaná', 'José María Quimper', 'Mariano Nicolás Valcarcel', 'Mariscal Cáceres', 'Nicolás de Piérol',
            'Ocoña', 'Quilca', 'Samuel Pastor']
        },
        {
          nombre: 'Caravelí',
          distritos: ['Acarí', 'Atico', 'Atiquipa', 'Bella Unión', 'Cahuacho',
            'Caravelí', 'Chala', 'Cháparra', 'Huanuhuanu', 'Jaquí',
            'Lomas', 'Quicacha', 'Yauca']
        },
        {
          nombre: 'Castilla',
          distritos: ['Aplao', 'Andahua', 'Ayo', 'Chachas', 'Chilcaymarca',
            'Choco', 'Huancarqui', 'Machaguay', 'Orcopampa', 'Pampacolca',
            'Tipán', 'Uñón', 'Uraca', 'Viraco']
        },
        {
          nombre: 'Caylloma',
          distritos: ['Achoma', 'Cabanaconde', 'Callalli', 'Caylloma', 'Chivay',
            'Coporaque', 'Huambo', 'Huanca', 'Ichupampa', 'Lari',
            'Lluta', 'Maca', 'Madrigal', 'Majes', 'San Antonio de Chuca',
            'Sibayo', 'Tapay', 'Tisco', 'Tuti', 'Yanque']
        },
        {
          nombre: 'Condesuyos',
          distritos: ['Andaray', 'Cayarani', 'Chichas', 'Chuquibamba', 'Iray',
            'Río Grande', 'Salamanca', 'Yanaquihua', 'Registro civil']
        },
        {
          nombre: 'Islay',
          distritos: ['Cocachacra', 'Deán Valdivia', 'Islay', 'Mejía', 'Mollendo', 'Punta de Bombón']
        },
        {
          nombre: 'La Unión',
          distritos: ['Alca', 'Charcana', 'Cotahuasi', 'Huaynacotas', 'Pampamarca',
            'Puyca', 'Quechualla', 'Sayla', 'Tauría', 'Tomepampa', 'Toro']
        },
      ]
    },
    {
      nombre: 'Ayacucho',
      provincias: [
        {
          nombre: "Cangallo",
          distritos: [
            "Cangallo", "Chuschi", "Los Morochucos", "María Parado de Bellido", "Paras",
            "Totos"
          ]
        },
        {
          nombre: "Huamanga",
          distritos: [
            "Acocro", "Acos Vinchos", "Andrés Avelino Cáceres Dorregaray", "Ayacucho", "Carmen Alto",
            "Chiara", "Jesús Nazareno", "Ocros", "Pacaycasa", "Quinua", "San José de Ticllas",
            "San Juan Bautista", "Santiago de Pischa", "Socos", "Tambillo", "Vinchos"
          ]
        },
        {
          nombre: "Huanca Sancos",
          distritos: [
            "Carapo", "Sancos", "Sacsamarca", "Santiago de Lucanamarca"
          ]
        },
        {
          nombre: "Huanta",
          distritos: [
            "Ayahuanco", "Canayre", "Chaca", "Huamanguilla", "Huanta", "Iguain", "Llochegua",
            "Luricocha", "Pucacolpa", "Santillana", "Sivia", "Uchuraccay"
          ]
        },
        {
          nombre: "La Mar",
          distritos: [
            "Anco", "Anchihuay", "Ayna", "Chilcas", "Chungui", "Luis Carranza", "Oronccoy",
            "Samugari", "Santa Rosa", "San Miguel", "Tambo"
          ]
        },
        {
          nombre: "Lucanas",
          distritos: [
            "Aucara", "Cabana", "Carmen Salcedo", "Chaviña", "Chipao", "Huac-Huas", "Laramate",
            "Leoncio Prado", "Llauta", "Lucanas", "Ocaña", "Otoca", "Puquio", "Saisa", "San Cristóbal",
            "San Juan", "San Pedro", "San Pedro de Palco", "Santa Ana de Huaycahuacho", "Santa Lucía"
          ]
        },
        {
          nombre: "Parinacochas",
          distritos: [
            "Chumpi", "Coracora", "Coronel Castañeda", "Pacapausa", "Pullo", "Puyusca",
            "San Francisco de Ravacayco", "Upahuacho"
          ]
        },
        {
          nombre: "Páucar del Sara Sara",
          distritos: [
            "Colta", "Corculla", "Lampa", "Marcabamba", "Oyolo", "Pararca", "Pausa",
            "San Javier de Alpabamba", "San José de Ushua", "Sara Sara"
          ]
        },
        {
          nombre: "Sucre",
          distritos: [
            "Belén", "Chalcos", "Chilcayoc", "Huacaña", "Morcolla", "Paico", "San Pedro de Larcay",
            "San Salvador de Quije", "Santiago de Paucaray", "Querobamba", "Soras"
          ]
        },
        {
          nombre: "Víctor Fajardo",
          distritos: [
            "Alcamenca", "Apongo", "Asquipata", "Canaria", "Cayara", "Colca", "Huamanquiquia",
            "Huancapi", "Huancaraylla", "Huaya", "Sarhua", "Vilcanchos"
          ]
        },
        {
          nombre: "Vilcashuamán",
          distritos: [
            "Accomarca", "Carhuanca", "Concepción", "Huambalpa", "Independencia", "Saurama",
            "Vilcashuamán", "Vischongo"
          ]
        }
      ]
    },
    {
      nombre: 'Cajamarca',
      provincias: [
        [
          {
            nombre: "Cajamarca",
            distritos: [
              "Asunción", "Cajamarca", "Chetilla", "Cospán", "Jesús",
              "La Encañada", "Llacanora", "Los Baños del Inca", "Magdalena", "Matara",
              "Namora", "San Juan"
            ]
          },
          {
            nombre: "Cajabamba",
            distritos: [
              "Cachachi", "Cajabamba", "Condebamba", "Sitacocha"
            ]
          },
          {
            nombre: "Celendín",
            distritos: [
              "Celendín", "Chumuch", "Cortegana", "Huasmin", "Jorge Chávez",
              "José Gálvez", "La Libertad de Pallán", "Miguel Iglesias", "Oxamarca", "Sorochuco",
              "Sucre", "Utco"
            ]
          },
          {
            nombre: "Chota",
            distritos: [
              "Anguía", "Chadín", "Chalamarca", "Chiguirip", "Chimban",
              "Choropampa", "Cochabamba", "Conchán", "Huambos", "Lajas",
              "Llama", "Miracosta", "Paccha", "Pion", "Querocoto",
              "San Juan de Licupis", "Tacabamba", "Tocmoche"
            ]
          },
          {
            nombre: "Contumazá",
            distritos: [
              "Chilete", "Contumazá", "Cupisnique", "Guzmango", "San Benito",
              "Santa Cruz de Toledo", "Tantarica", "Yonan"
            ]
          },
          {
            nombre: "Cutervo",
            distritos: [
              "Callayuc", "Choros", "Cujillo", "Cutervo", "La Ramada",
              "Pimpingos", "Querocotillo", "San Andrés de Cutervo", "San Juan de Cutervo", "San Luis de Lucma",
              "Santa Cruz", "Santo Domingo de la Capilla", "Santo Tomás", "Socota", "Toribio Casanova"
            ]
          },
          {
            nombre: "Hualgayoc",
            distritos: [
              "Bambamarca", "Chugur", "Hualgayoc"
            ]
          },
          {
            nombre: "Jaén",
            distritos: [
              "Bellavista", "Chontali", "Colasay", "Huabal", "Jaén",
              "Las Pirias", "Pomahuaca", "Pucará", "Sallique", "San Felipe",
              "San José del Alto", "Santa Rosa"
            ]
          },
          {
            nombre: "San Ignacio",
            distritos: [
              "Chirinos", "Huarango", "La Coipa", "Namballe", "San Ignacio",
              "San José de Lourdes", "Tabaconas"
            ]
          },
          {
            nombre: "San Marcos",
            distritos: [
              "Chancay", "Eduardo Villanueva", "Gregorio Pita", "Ichocán", "José Manuel Quiroz",
              "José Sabogal", "Pedro Gálvez"
            ]
          },
          {
            nombre: "San Miguel",
            distritos: [
              "Bolívar", "Calquis", "Catilluc", "El Prado", "La Florida",
              "Llapa", "Nanchoc", "Niepos", "San Gregorio", "San Miguel",
              "San Silvestre de Cochán", "Tongod", "Unión Agua Blanca"
            ]
          },
          {
            nombre: "San Pablo",
            distritos: [
              "San Bernardino", "San Luis", "San Pablo", "Tumbaden"
            ]
          },
          {
            nombre: "Santa Cruz",
            distritos: [
              "Andabamba", "Catache", "Chancaybaños", "La Esperanza", "Ninabamba",
              "Pulan", "Saucepampa", "Sexi", "Uticyacu", "Yauyucan",
              "Santa Cruz"
            ]
          }
        ]
      ]
    },
    {
      nombre: 'Constitucional de Callao',
      provincias: [
        {
          nombre: "Callao",
          distritos: [
            "Bellavista", "Carmen de la Legua Reynoso", "Callao", "La Perla", "La Punta",
            "Mi Perú", "Ventanilla"
          ]
        }
      ]
    },
    {
      nombre: 'Cuzco',
      provincias: [
        [
          {
            nombre: "Acomayo",
            distritos: [
              "Acopia", "Acomayo", "Acos", "Mosoc Llacta", "Pomacanchi",
              "Rondocan", "Sangarará"
            ]
          },
          {
            nombre: "Anta",
            distritos: [
              "Ancahuasi", "Anta", "Cachimayo", "Chinchaypujio", "Huarocondo",
              "Limatambo", "Mollepata", "Pucyura", "Zurite"
            ]
          },
          {
            nombre: "Calca",
            distritos: [
              "Calca", "Coya", "Lamay", "Lares", "Pisac",
              "San Salvador", "Taray", "Yanatile"
            ]
          },
          {
            nombre: "Canas",
            distritos: [
              "Checca", "Kunturkanki", "Langui", "Layo", "Pampamarca",
              "Quehue", "Túpac Amaru", "Yanaoca"
            ]
          },
          {
            nombre: "Canchis",
            distritos: [
              "Checacupe", "Combapata", "Marangani", "Pitumarca",
              "San Pablo", "San Pedro", "Sicuani", "Tinta"
            ]
          },
          {
            nombre: "Chumbivilcas",
            distritos: [
              "Capacmarca", "Chamaca", "Colquemarca", "Livitaca", "Llusco",
              "Quiñota", "Santo Tomás", "Velille"
            ]
          },
          {
            nombre: "Cuzco",
            distritos: [
              "Ccorca", "Cuzco", "Poroy", "San Jerónimo", "San Sebastián",
              "Santiago", "Saylla", "Wanchaq"
            ]
          },
          {
            nombre: "Espinar",
            distritos: [
              "Alto Pichigua", "Condoroma", "Coporaque", "Espinar", "Ocoruro",
              "Pallpata", "Pichigua", "Suyckutambo"
            ]
          },
          {
            nombre: "La Convención",
            distritos: [
              "Echarate", "Huayopata", "Inkawasi", "Kimbiri", "Maranura",
              "Megantoni", "Ocobamba", "Pichari", "Quellouno", "Santa Ana",
              "Santa Teresa", "Vilcabamba", "Villa Kintiarina", "Villa Virgen"
            ]
          },
          {
            nombre: "Paruro",
            distritos: [
              "Accha", "Ccapi", "Colcha", "Huanoquite", "Omacha",
              "Paccaritambo", "Paruro", "Pillpinto", "Yaurisque"
            ]
          },
          {
            nombre: "Paucartambo",
            distritos: [
              "Caicay", "Challabamba", "Colquepata", "Huancarani", "Kosñipata",
              "Paucartambo"
            ]
          },
          {
            nombre: "Quispicanchi",
            distritos: [
              "Andahuaylillas", "Camanti", "Ccarhuayo", "Ccatca", "Cusipata",
              "Huaro", "Lucre", "Marcapata", "Ocongate", "Oropesa", "Quiquijana",
              "Urcos"
            ]
          },
          {
            nombre: "Urubamba",
            distritos: [
              "Chinchero", "Huayllabamba", "Machupicchu", "Maras", "Ollantaytambo",
              "Urubamba", "Yucay"
            ]
          }
        ]
      ]
    },
    {
      nombre: 'Huancavelica',
      provincias: [
        {
          nombre: "Acobamba",
          distritos: [
            "Acobamba", "Andabamba", "Anta", "Caja", "Marcas",
            "Paucara", "Pomacocha", "Rosario"
          ]
        },
        {
          nombre: "Angaraes",
          distritos: [
            "Anchonga", "Callanmarca", "Ccochaccasa", "Chincho", "Congalla",
            "Huanca-Huanca", "Huayllay Grande", "Julcamarca", "Lircay", "San Antonio de Antaparco",
            "Santo Tomas de Pata", "Secclla"
          ]
        },
        {
          nombre: "Castrovirreyna",
          distritos: [
            "Arma", "Aurahua", "Capillas", "Castrovirreyna", "Chupamarca",
            "Cocas", "Huachos", "Huamatambo", "Mollepampa", "San Juan",
            "Santa Ana", "Tantara", "Ticrapo"
          ]
        },
        {
          nombre: "Churcampa",
          distritos: [
            "Anco", "Chinchihuasi", "Churcampa", "El Carmen", "La Merced",
            "Locroja", "Paucarbamba", "San Miguel de Mayocc", "San Pedro de Coris"
          ]
        },
        {
          nombre: "Huancavelica",
          distritos: [
            "Acobambilla", "Acoria", "Conayca", "Cuenca", "Huachocolpa",
            "Huayllahuara", "Huancavelica", "Izcuchaca", "Laria", "Manta",
            "Mariscal Cáceres", "Moya", "Nuevo Occoro", "Palca", "Pilchaca",
            "Vilca", "Yauli"
          ]
        },
        {
          nombre: "Huaytará",
          distritos: [
            "Ayavi", "Córdova", "Huayacundo Arma", "Huaytará", "Laramarca",
            "Ocoyo", "Pilpichaca", "Querco", "Quito-Arma", "San Antonio de Cusicancha",
            "San Francisco de Sangayaico", "San Isidro", "Santiago de Chocorvos", "Santiago de Quirahuara", "Santo Domingo de Capillas",
            "Tambo"
          ]
        },
        {
          nombre: "Tayacaja",
          distritos: [
            "Acraquia", "Acostambo", "Ahuaycha", "Colcabamba", "Daniel Hernández",
            "Huachocolpa", "Huaribamba", "Ñahuimpuquio", "Pampas", "Pazos",
            "Quishuar", "Salcabamba", "Salcahuasi", "San Marcos de Rocchac", "Surcubamba",
            "Tintay Puncu"
          ]
        }
      ]
    },
    {
      nombre: 'Huánuco',
      provincias: [
        {
          nombre: "Ambo",
          distritos: [
            "Ambo", "Cayna", "Colpas", "Conchamarca", "Huacar",
            "San Francisco", "San Rafael", "Tomay Kichwa"
          ]
        },
        {
          nombre: "Dos de Mayo",
          distritos: [
            "Chuquis", "La Unión", "Marías", "Pachas", "Quivilla",
            "Ripan", "Shunqui", "Sillapata", "Yanas"
          ]
        },
        {
          nombre: "Huacaybamba",
          distritos: [
            "Canchabamba", "Chuquibamba", "Huacaybamba", "Pinra"
          ]
        },
        {
          nombre: "Huamalíes",
          distritos: [
            "Arancay", "Chavín de Pariarca", "Jacas Grande", "Jircan", "Llata",
            "Miraflores", "Monzón", "Punchao", "Puños", "Singa", "Tantamayo"
          ]
        },
        {
          nombre: "Huánuco",
          distritos: [
            "Amarilis", "Chinchao", "Churubamba", "Huánuco", "Margos",
            "Pillco Marca", "Quisqui (Kichki)", "San Francisco de Cayrán", "San Pedro de Chaulán", "Santa María del Valle",
            "Yarumayo"
          ]
        },
        {
          nombre: "Lauricocha",
          distritos: [
            "Baños", "Jesús", "Jivia", "Queropalca", "Rondos",
            "San Francisco de Asís", "San Miguel de Cauri"
          ]
        },
        {
          nombre: "Leoncio Prado",
          distritos: [
            "Daniel Alomía Robles", "Hermilio Valdizán", "José Crespo y Castillo", "Luyando", "Mariano Dámaso Beraún",
            "Rupa-Rupa (Tingo María)"
          ]
        },
        {
          nombre: "Marañón",
          distritos: [
            "Cholon", "Huacrachuco", "La Morada", "San Buenaventura", "Santa Rosa de Alto Yanajanca"
          ]
        },
        {
          nombre: "Pachitea",
          distritos: [
            "Chaglla", "Molino", "Panao", "Umari"
          ]
        },
        {
          nombre: "Puerto Inca",
          distritos: [
            "Codo del Pozuzo", "Honoria", "Puerto Inca", "Tournavista", "Yuyapichis"
          ]
        },
        {
          nombre: "Yarowilca",
          distritos: [
            "Aparicio Pomares", "Chacabamba", "Chavinillo", "Jacas Chico", "Obas", "Pampamarca"
          ]
        }
      ]
    },
    {
      nombre: 'Ica',
      provincias: [
        {
          nombre: "Chincha",
          distritos: [
            "Alto Larán", "Chavín", "Chincha Alta", "Chincha Baja", "El Carmen",
            "Grocio Prado", "Pueblo Nuevo", "San Juan de Yanac", "San Pedro de Huacarpana", "Sunampe",
            "Tambo de Mora"
          ]
        },
        {
          nombre: "Ica",
          distritos: [
            "Ica", "La Tinguiña", "Los Aquijes", "Ocucaje", "Pachacútec",
            "Parcona", "Pueblo Nuevo", "Salas", "San José de los Molinos", "San Juan Bautista",
            "Santiago", "Subtanjalla", "Tate", "Yauca del Rosario"
          ]
        },
        {
          nombre: "Nazca",
          distritos: [
            "Changuillo", "El Ingenio", "Marcona", "Nazca", "Vista Alegre"
          ]
        },
        {
          nombre: "Palpa",
          distritos: [
            "Llipata", "Palpa", "Río Grande", "Santa Cruz", "Tibillo"
          ]
        },
        {
          nombre: "Pisco",
          distritos: [
            "Huancano", "Humay", "Independencia", "Paracas", "Pisco",
            "San Andrés", "San Clemente", "Túpac Amaru Inca"
          ]
        }
      ]
    },
    {
      nombre: 'Junín',
      provincias: [
        {
          nombre: "Chanchamayo",
          distritos: [
            "Chanchamayo", "Pangoa", "San Luis de Shuaro", "San Ramón", "Vitoc",
            "Río Tambo", "Pichanaki"
          ]
        },
        {
          nombre: "Chupaca",
          distritos: [
            "Ahuac", "Chongos Alto", "Chupaca", "Colca", "Huachac",
            "Huayucachi", "San Juan de Iscos", "Santo Domingo de Acobamba", "Tarmarca", "Tocancipa"
          ]
        },
        {
          nombre: "Concepción",
          distritos: [
            "Aco", "Acostambo", "Andamarca", "Chambara", "Chanchamayo",
            "Comas", "Cochas", "Junín", "Junín de los Andes"
          ]
        },
        {
          nombre: "Jauja",
          distritos: [
            "Acolla", "Apata", "Ataura", "Canchayllo", "Curicaca",
            "Huertas", "Jauja", "Manta", "Marco", "Masma",
            "Masma Chicche", "Monobamba", "Río de los Molinos", "Sacsamarca", "San Pedro de Pari",
            "Tunan Marca"
          ]
        },
        {
          nombre: "Junín",
          distritos: [
            "Carhuacallanga", "Chicche", "Chongos Bajo", "El Tambo", "Huancán",
            "Huancayo", "Huasi", "Pancán", "Santo Domingo de Acobamba", "Sicaya",
            "Santo Domingo de los Olleros"
          ]
        },
        {
          nombre: "Tarma",
          distritos: [
            "Huasahuasi", "Palca", "San Pedro de Cajas", "San Ramón", "Tarma",
            "Tocache", "Cayna"
          ]
        }
      ]
    },
    {
      nombre: 'La Libertad',
      provincias: [
        {
          nombre: "Ascope",
          distritos: [
            "Ascope", "Casa Grande", "Chicama", "Chocope", "Magdalena de Cao",
            "Paiján", "Rázuri", "Santiago de Cao"
          ]
        }
      ]
    },
    {
      nombre: 'Lima',
      provincias: [
        {
          nombre: 'Barranca',
          distritos: ['Barranca', 'Paramonga', 'Pativilca', 'Supe', 'Supe Puerto']
        },
        {
          nombre: 'Cajatambo',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Canta',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Cañete',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Huaral',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Huarochirí',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Huaura',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Oyón',
          distritos: ['', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '']
        },
        {
          nombre: 'Provincia de Lima',
          distritos: ['Ancón', 'Ate', 'Barranco', 'Breña', 'Carabayllo', 'Chaclacayo', 'Chorrillos', 'Cieneguilla', 'Comas', 'El Agustino', 'Huaycán (Comunidad)', 'Independencia', 'Jesús María', 'La Molina', 'La Victoria', 'Lima', 'Lince', 'Los Olivos', 'Lurigancho', 'Lurín', 'Magdalena del Mar', 'Miraflores', 'Pachacamac', 'Pucusana', 'Puente Piedra', 'Punta Hermosa', 'Punta Negra', 'Pueblo Libre', 'Rímac', 'San Bartolo', 'San Borja', 'San Isidro', 'San Juan de Lurigancho', 'San Juan de Miraflores', 'San Luis', 'San Martín de Porres', 'San Miguel', 'Santa Anita', 'Santa María del Mar', 'Santa Rosa', 'Santiago de Surco', 'Surquillo', 'Villa El Salvador', 'Villa María del Triunfo']
        },
        {
          nombre: 'Yauyos',
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
