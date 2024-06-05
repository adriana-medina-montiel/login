import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }, 
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
