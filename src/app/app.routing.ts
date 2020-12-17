import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from './surgery/login/login.component';
import { RegistryComponent } from './surgery/registry/registry.component';


const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'registry', component: RegistryComponent },
  { path: '**', component: LoginComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
