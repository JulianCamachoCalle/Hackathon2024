/// <reference types="@types/google.maps" />
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapawal',
  standalone: true,
  imports: [],
  templateUrl: './mapawal.component.html',
  styleUrls: ['./mapawal.component.css']
})
export class MapawalComponent implements OnInit {
  map: google.maps.Map | undefined;

  ngOnInit(): void {
    this.loadMap();
  }

  loadMap(): void {
    const lima = { lat: -12.0464, lng: -77.0428 }; // Coordenadas de Lima
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: lima,
      zoom: 12
    });
  }

  solicitarAyuda(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const ubicacionAyuda = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          const marcador = new google.maps.Marker({
            position: ubicacionAyuda,
            map: this.map,
            title: "Solicitud de Ayuda"
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `<h3>Emergencia</h3><p>Solicitud de ayuda desde tu ubicación actual.</p>`
          });
          infoWindow.open(this.map, marcador);

          this.map?.setCenter(ubicacionAyuda);
        },
        (error) => {
          console.error("Error obteniendo la ubicación", error);
          alert("No se pudo obtener la ubicación actual. Verifica los permisos de ubicación.");
        }
      );
    } else {
      alert("La geolocalización no es compatible con este navegador.");
    }
  }
}
