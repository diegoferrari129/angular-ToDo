import { Component, OnInit } from '@angular/core';
import { TaskItemService } from '../../services/task-item.service';
import { TaskItem } from '../../models/task-item.model';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent implements OnInit {
  tasks: TaskItem[] = [];

  constructor(private taskItemService: TaskItemService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskItemService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
      },
    });
  }

}
