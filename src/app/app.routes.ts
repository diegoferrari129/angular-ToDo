import { Routes } from '@angular/router';
import { TaskItemComponent } from './features/task/components/task-item.component/task-item.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    },
    {
        path: 'tasks',
        component: TaskItemComponent
    }
];
