import { Routes } from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CiudadanosComponent } from './ciudadanos/ciudadanos.component';
import { InvestigadoresComponent } from './investigadores/investigadores.component';
import { AutoridadesComponent } from './autoridades/autoridades.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
export const routes: Routes = [
    { path: 'noticias', component: NoticiasComponent },
    { path: 'ciudadanos', component: CiudadanosComponent },
    { path: 'investigadores', component: InvestigadoresComponent },
    { path: 'autoridades', component: AutoridadesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent}
];
