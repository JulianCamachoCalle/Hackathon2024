import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-investigadores',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './investigadores.component.html',
  styleUrls: ['./investigadores.component.css']
})
export class InvestigadoresComponent {
  isInfoVisible = false;

  toggleInfoModal() {
    this.isInfoVisible = !this.isInfoVisible;
  }
}