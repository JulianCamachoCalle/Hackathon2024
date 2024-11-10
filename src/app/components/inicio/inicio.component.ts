import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NgbModule,NgbCarouselModule,CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  images = [
    '/assets/img/inicioseguridad.jpg',
    '/assets/img/inicioseguridad2.jpg',
    '/assets/img/inicioseguridad3.jpg'
  ];
}
