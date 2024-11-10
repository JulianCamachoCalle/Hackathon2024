import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
@Component({
  selector: 'app-redes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css'] // Cambiado de `styleUrl` a `styleUrls`
})
export class RedesComponent implements OnInit, AfterViewInit {

  isHoveringPrimary = false;
  isHoveringSecondary = false;
  isHoveringSuccess = false;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Aquí puedes inicializar cualquier otra lógica si la necesitas
  }

  ngAfterViewInit(): void {
    this.loadTikTokScript();
  }

  loadTikTokScript() {
    const script = this.renderer.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    this.renderer.appendChild(document.body, script);
  }

  // Funciones para manejar los botones
  goToTikTok() {
    window.open('https://www.tiktok.com/@elcomerciope', '_blank');
  }

  goToFacebook() {
    window.open('https://www.facebook.com/elcomercio.pe/', '_blank');
  }

  goToWebsite() {
    window.open('https://elcomercio.pe/', '_blank');
  }

 
}
