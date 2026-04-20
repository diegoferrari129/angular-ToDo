import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { AppPaths } from '../../../../../shared/app.paths';

import { TaskItemService } from '../../../services/task-item.service';
import { CreateTaskItem } from '../../../models/create-task-item.model';

@Component({
  selector: 'app-task-form.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  task: CreateTaskItem = {
    title: '',
    description: '',
    dueDate: undefined
  };

  constructor(private taskItemService: TaskItemService, private router: Router) { }

  createTask(): void {
    this.taskItemService.postTask(this.task).subscribe({
      next: () => {
        this.router.navigate([AppPaths.TASKS.ROOT]);
      },
    });
  }
}
