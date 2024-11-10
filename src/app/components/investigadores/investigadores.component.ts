import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule

@Component({
  selector: 'app-investigadores',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de añadir CommonModule aquí
  templateUrl: './investigadores.component.html',
  styleUrls: ['./investigadores.component.css']
})
export class InvestigadoresComponent {
  isInfoVisible = false;

  toggleInfo() {
    this.isInfoVisible = !this.isInfoVisible;
  }
}