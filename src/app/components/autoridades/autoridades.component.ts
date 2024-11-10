import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-autoridades',
  standalone: true,
  imports: [],
  templateUrl: './autoridades.component.html',
  styleUrl: './autoridades.component.css'
})
export class AutoridadesComponent {
  @ViewChild('compromisos') compromisosSection!: ElementRef;

  scrollToSection(): void {
    this.compromisosSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
