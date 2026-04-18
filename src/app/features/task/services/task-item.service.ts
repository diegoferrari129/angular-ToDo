import { Injectable } from '@angular/core';
import { TaskItem } from '../models/task-item.model';
import { Observable } from 'rxjs';
import { Api } from '../../../core/services/api.server';

@Injectable({
  providedIn: 'root',
})
export class TaskItemService {
  private readonly endpoint = 'TaskItem';

  constructor(private api: Api) { }

  getTasks(): Observable<TaskItem[]> {
    return this.api.get<TaskItem[]>(this.endpoint);
  }
}
