import { Routes } from '@angular/router';
import { CiudadanosComponent } from './ciudadanos/ciudadanos.component';
import { InvestigadoresComponent} from './investigadores/investigadores.component';
import { AutoridadesComponent } from './autoridades/autoridades.component';
export const routes: Routes = [

    {path: 'ciudadanos', component: CiudadanosComponent},
    {path: 'investigadores', component: InvestigadoresComponent},
    {path: 'autoridades', component: AutoridadesComponent}
];
