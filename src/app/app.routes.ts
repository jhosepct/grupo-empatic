import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'consultorias',
        loadComponent: () => import('./features/consultorias/consultorias.component').then(m => m.ConsultoriasComponent)
    },
    {
        path: 'empathetic-actions',
        loadComponent: () => import('./features/empathetic-actions/empathetic-actions.component').then(m => m.EmpatheticActionsComponent)
    },
    {
        path: '**', // Fallback
        redirectTo: ''
    }
];
