import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { AppPaths } from '../../../../shared/app.paths';

import { TaskItemService } from '../../services/task-item.service';
import { TaskItem } from '../../models/task-item.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  tasks$!: Observable<TaskItem[]>;
  readonly AppPaths = AppPaths;

  constructor(private taskItemService: TaskItemService) { }

  ngOnInit(): void {
    this.tasks$ = this.taskItemService.getTasks();
  }
}