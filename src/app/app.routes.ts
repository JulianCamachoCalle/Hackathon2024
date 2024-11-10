
import { Routes } from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { RedesComponent } from './components/redes/redes.component';
import { CiudadanosComponent } from './components/ciudadanos/ciudadanos.component';
import { InvestigadoresComponent } from './components/investigadores/investigadores.component';
import { AutoridadesComponent } from './components/autoridades/autoridades.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TutorialComponent } from './tutorial/tutorial.component';
export const routes: Routes = [
    { path: 'noticias', component: NoticiasComponent },
    { path: 'ciudadanos', component: CiudadanosComponent },
    { path: 'investigadores', component: InvestigadoresComponent },
    { path: 'autoridades', component: AutoridadesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent},
    { path: 'redes', component: RedesComponent },
    { path: 'register', component: RegisterComponent},
    {path:'tutorial', component: TutorialComponent}
];
