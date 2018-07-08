import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthgaurdService } from './services/authgaurd.service';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'index', component: HomeComponent, canActivate: [AuthgaurdService],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
        ]
    },

    { path: '**', redirectTo: '/index' }
];

export const routerModule = RouterModule.forRoot(appRoutes);
