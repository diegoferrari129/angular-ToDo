import { Routes } from '@angular/router';
import { TaskItemComponent } from './features/task/components/task-item.component/task-item.component';
import { MainLayout } from './layouts/main-layout/main-layout';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { TaskFormComponent } from './features/task/components/task-form/task-form.component/task-form.component';
import { AppPaths } from './shared/app.paths';

export const routes: Routes = [

    {
        path: AppPaths.LOGIN.substring(1),
        component: LoginComponent
    },
    {
        path: '',
        component: MainLayout,
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
