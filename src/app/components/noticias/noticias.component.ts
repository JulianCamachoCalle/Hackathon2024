import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Agrega CommonModule aquí
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
})
export class NoticiasComponent {
  searchText: string = '';
  selectedDistrict: string = '';

  noticias = [
    { 
      titulo: 'Delincuentes balean bus con pasajeros frente a la Municipalidad de Los Olivos', 
      resumen: 'Dos sujetos armados dispararon contra un bus lleno de pasajeros frente a la Municipalidad de Los Olivos, ubicada a la altura de la cuadra 8 de la avenida Carlos Izaguirre', 
      distrito: 'Los Olivos', 
      imagen: 'noticia1.png',
      enlace: 'https://elcomercio.pe/lima/seguridad/los-olivos-delincuentes-balean-bus-con-pasajeros-frente-a-la-municipalidad-delincuencia-extorsion-ultimas-noticia/'
    },
    { 
      titulo: 'Comas: extorsionadores lanzan explosivo contra fachada de clínica', 
      resumen: 'En el distrito de Comas, la clínica Universitaria, ubicada en la cuadra 60 de la avenida con el mismo nombre', 
      distrito: 'Comas', 
      imagen: 'noticia3.png',
      enlace: 'https://elcomercio.pe/lima/seguridad/comas-extorsionadores-lanzan-explosivo-contra-fachada-de-clinica-estado-de-emergencia-ultimas-noticia/'
    },
    { 
      titulo: 'Macroconsult: Denuncias por extorsión crecieron 487 % entre el 2018 al 2023, ¿qué sectores son los más golpeados?', 
      resumen: 'El Perú atraviesa por uno de sus peores escenarios en cuanto a extorsión. Según el análisis de Macroconsult, en los últimos años, la cifra de..', 
      distrito: 'Los Olivos', 
      imagen: 'noticia4.png',
      enlace: 'https://elcomercio.pe/economia/mercados/extorsion-macroconsult-denuncias-por-extorsion-crecieron-487-entre-el-2018-al-2023-que-sectores-son-los-mas-golpeados-inseguridad-ciudadana-dina-boluarte-bodegas-transportes-construccion-noticia/'
    },
    { 
      titulo: 'Ate: presuntos sicarios asesinan a hombre dentro de su vehículo', 
      resumen: 'Continúan los crímenes en medio del estado de emergencia. Esta vez, un hombre fue asesinado de ocho balazos dentro de su vehículo en la puerta de su casa...', 
      distrito: 'Ate', 
      imagen: 'noticia5.png',
      enlace: 'https://elcomercio.pe/lima/ate-presuntos-sicarios-asesinan-de-ocho-balazos-a-hombre-dentro-de-su-vehiculo-estado-de-emergencia-crimen-ultimas-noticia/'
    }
  ];

  filteredNoticias = this.noticias;
  
  filterNoticias() {
    this.filteredNoticias = this.noticias.filter((noticia) => {
      const matchesSearchText =
        noticia.titulo.toLowerCase().includes(this.searchText.toLowerCase()) ||
        noticia.resumen.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesDistrict =
        !this.selectedDistrict || noticia.distrito === this.selectedDistrict;

      return matchesSearchText && matchesDistrict;
    });
  }

  ngOnChanges() {
    this.filterNoticias();
  }
}
