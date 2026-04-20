import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppPaths } from '../../../shared/app.paths';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private appPaths = AppPaths;
  constructor(public sidebarService: SidebarService, private authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout();
  }
}
