import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ciudadanos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ciudadanos.component.html',
  styleUrl: './ciudadanos.component.css'
})
export class CiudadanosComponent {
  isInfoVisible = false;

  toggleInfoModal() {
    this.isInfoVisible = !this.isInfoVisible;
  }
}
