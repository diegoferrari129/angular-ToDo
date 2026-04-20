import { Routes } from '@angular/router';
import { TaskItemComponent } from './features/task/components/task-item.component/task-item.component';
import { MainLayout } from './layouts/main-layout/main-layout';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: MainLayout,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'tasks',
                pathMatch: 'full'
            },
            {
                path: 'tasks',
                component: TaskItemComponent
            }
        ]
    }
];
