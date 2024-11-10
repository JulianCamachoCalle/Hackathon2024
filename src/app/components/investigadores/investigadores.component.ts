import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investigadores',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], 
  templateUrl: './investigadores.component.html',
  styleUrls: ['./investigadores.component.css']
})
export class InvestigadoresComponent {
  isInfoVisible = false;

  toggleInfoModal() {
    this.isInfoVisible = !this.isInfoVisible;
  }

  searchTerm: string = '';
  questions = [
    {
      question: '¿Por qué es importante estar informado sobre la seguridad ciudadana?',
      answer: '<p>• Estar informado permite tomar decisiones preventivas y reduce el riesgo de caer en situaciones de peligro.</p><p>• La seguridad ciudadana no solo depende de las autoridades, sino también de los ciudadanos que están informados y alertas ante riesgos.</p><p>• Una comunidad bien informada ayuda a mejorar la seguridad colectiva y a cuidar de todos.</p>'
    },
    {
      question: '¿Cómo ayuda "Vigilando por Ti" a la seguridad en Perú?',
      answer: '<p>• La aplicación centraliza y facilita el acceso a información clave de seguridad ciudadana.</p><p>• Permite encontrar números de emergencia (policía, bomberos, centros médicos) en segundos, ayudando a responder rápidamente en situaciones críticas.</p><p>• Incluye un mapa de zonas de riesgo, ayudando a los ciudadanos a evitar áreas peligrosas o de alta incidencia delictiva.</p>'
    },
    {
      question: '¿Cuáles son las consecuencias de no estar informado sobre la seguridad de tu comunidad?',
      answer: '<p>• La falta de información aumenta el riesgo de ser víctima de robos, accidentes u otros incidentes de seguridad.</p><p>• Ignorar medidas de seguridad puede llevar a sanciones o multas en casos de emergencia, como no cumplir con protocolos de respuesta ante desastres.</p><p>• El desconocimiento afecta tanto a nivel individual como a la comunidad, haciendo que sea más vulnerable ante amenazas.</p>'
    },
    {
      question: '¿Qué tipo de alertas y reportes se pueden realizar con "Vigilando por Ti"?',
      answer: '<p>• Alertas sobre actividades sospechosas o robos en tiempo real, informando a los vecinos y autoridades.</p><p>• Reportes de zonas inseguras para mantener un registro actualizado y que otros ciudadanos estén informados.</p><p>• Sugerencias de prevención y consejos de seguridad para ayudar a los ciudadanos a estar preparados.</p>'
    },
    {
      question: '¿Cómo "Vigilando por Ti" mejora la relación entre los ciudadanos y las autoridades?',
      answer: '<p>• La aplicación facilita la comunicación directa con la policía y otras autoridades en caso de emergencia.</p><p>• Permite realizar reportes seguros y anónimos sobre actividades sospechosas.</p><p>• Refuerza la confianza de los ciudadanos al brindar herramientas que empoderan y facilitan la colaboración con las autoridades.</p>'
    },
    {
      question: '¿Cuál es el objetivo principal de "Vigilando por Ti" en términos de seguridad?',
      answer: '<p>• Crear una red de ciudadanos informados y comprometidos con la seguridad de sus comunidades.</p><p>• Reducir los índices de criminalidad y mejorar la calidad de vida en Perú a través de la prevención y la información.</p><p>• Fomentar la responsabilidad compartida y la cooperación entre ciudadanos y autoridades.</p>'
    },
    {
      question: '¿En qué lugares de Perú se puede utilizar "Vigilando por Ti"?',
      answer: '<p>• La aplicación está diseñada para ser útil en todas las regiones de Perú, desde áreas urbanas hasta rurales.</p><p>• En zonas de alta densidad urbana, como Lima y Arequipa, la aplicación permite acceder a información sobre zonas de riesgo.</p><p>• En zonas rurales, "Vigilando por Ti" facilita el acceso a contactos de emergencia y mantiene informada a la comunidad.</p>'
    },
    {
      question: '¿Qué penalidades existen en caso de incumplir con las normativas de seguridad ciudadana?',
      answer: '<p>• La falta de cooperación o el incumplimiento de las normas de seguridad puede resultar en sanciones civiles o multas.</p><p>• Informar sobre actos de violencia o actividades sospechosas es una responsabilidad ciudadana; la omisión puede perjudicar la seguridad de la comunidad.</p><p>• "Vigilando por Ti" fomenta el cumplimiento de normas mediante alertas y notificaciones sobre la importancia de la cooperación ciudadana.</p>'
    }
  ];
  
  filteredQuestions = [...this.questions];

  filterQuestions() {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredQuestions = this.questions.filter(q => q.question.toLowerCase().includes(searchTermLower));
  }
}