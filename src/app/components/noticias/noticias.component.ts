import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
})
export class NoticiasComponent {
  searchText: string = '';
  selectedDistrict: string = '';

  noticias = [
    { 
      titulo: 'Noticia Principal', 
      resumen: 'Resumen de la noticia principal', 
      distrito: 'Distrito1', 
      imagen: 'logo.jpg'
    },
    { 
      titulo: 'Noticia 2', 
      resumen: 'Resumen de la noticia 2', 
      distrito: 'Distrito2', 
      imagen: 'news-image2.jpg'
    },
    { 
      titulo: 'Noticia 3', 
      resumen: 'Resumen de la noticia 3', 
      distrito: 'Distrito3', 
      imagen: 'news-image3.jpg'
    },
    { 
      titulo: 'Noticia 4', 
      resumen: 'Resumen de la noticia 4', 
      distrito: 'Distrito4', 
      imagen: 'news-image4.jpg'
    },
    { 
      titulo: 'Noticia 5', 
      resumen: 'Resumen de la noticia 5', 
      distrito: 'Distrito1', 
      imagen: 'news-image5.jpg'
    },
    { 
      titulo: 'Noticia 6', 
      resumen: 'Resumen de la noticia 6', 
      distrito: 'Distrito2', 
      imagen: 'news-image6.jpg'
    },
    { 
      titulo: 'Noticia 7', 
      resumen: 'Resumen de la noticia 7', 
      distrito: 'Distrito3', 
      imagen: 'news-image7.jpg'
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
