import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { AppPaths } from '../../shared/app.paths';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="max-width: 400px; margin: 50px auto; padding: 20px;">
      <h2>Login</h2>
      
      <div>
        <label>Email:</label>
        <input type="email" [(ngModel)]="email" />
      </div>
      
      <div>
        <label>Password:</label>
        <input type="password" [(ngModel)]="password" />
      </div>
      
      <button (click)="login()">Accedi</button>
    </div>
  `
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) { }

  login(): void {
    this.auth.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate([AppPaths.TASKS.ROOT]);
      }
    });
  }
}