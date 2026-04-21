import { Routes } from '@angular/router';
import { TaskItemComponent } from './features/task/task-item.component';
import { MainComponent } from './core/layout/main/main.component';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { authGuard } from './core/auth/auth.guard';
import { TaskFormComponent } from './features/task/components/task-form/task-form.component';
import { AppPaths } from './shared/app.paths';

export const routes: Routes = [

    {
        path: AppPaths.LOGIN.substring(1),
        component: LoginComponent
    },
    {
        path: '',
        component: MainComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: AppPaths.TASKS.ROOT.substring(1),
                pathMatch: 'full'
            },
            {
                path: AppPaths.TASKS.TASKS_NEW.substring(1),
                component: TaskFormComponent
            },
            {
                path: AppPaths.TASKS.ROOT.substring(1),
                component: TaskItemComponent
            },
        ]
    }
];
