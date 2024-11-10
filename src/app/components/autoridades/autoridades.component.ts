import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-autoridades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autoridades.component.html',
  styleUrl: './autoridades.component.css'
})
export class AutoridadesComponent {
  @ViewChild('compromisos') compromisosSection!: ElementRef;

  scrollToSection(): void {
    this.compromisosSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  tutorialStep: number = 0;
  tutorialMessages: string[] = [
    'Primer paso: Aquí mostramos el Reglamento Interno y de Seguridad.',
    'Segundo paso: Explicamos la Política de Prevención de Riesgos.',
    'Tercer paso: Mostramos los estándares de seguridad cumplidos.',
    'Cuarto paso: Proporcionamos información detallada sobre la estrategia.',
    'Quinto paso: Este boton puede direccionar hacia abajo para ver los compromisos'
  ];

  startTutorial() {
    this.tutorialStep = 1;
    this.highlightStep();
  }
  
  highlightStep() {
    if (this.tutorialStep && this.tutorialStep <= 5) {
      setTimeout(() => {
        this.tutorialStep++;
        if (this.tutorialStep > 5) {
          this.tutorialStep = 0; 
        } else {
          this.highlightStep();
        }
      }, 3000);
    }
  }  
}
