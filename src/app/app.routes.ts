import { Routes } from '@angular/router';
import { TaskItemComponent } from './features/task/components/task-item.component/task-item.component';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
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
