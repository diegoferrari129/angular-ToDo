import { Routes } from '@angular/router';
import { TaskItemComponent } from './features/task/components/task-item.component/task-item.component';
import { MainLayout } from './layouts/main-layout/main-layout';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { TaskFormComponent } from './features/task/components/task-form/task-form.component/task-form.component';

export const routes: Routes = [

    {
        path: '',
        component: MainLayout,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'tasks/new',
                component: TaskFormComponent
            },
            {
                path: 'tasks',
                component: TaskItemComponent
            },
        ]
    }
];
