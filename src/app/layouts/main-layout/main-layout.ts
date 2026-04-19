import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Header } from '../../core/components/header/header';
import { Footer } from '../../core/components/footer/footer';
import { SidebarService } from '../../core/services/sidebar.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Header, RouterOutlet, Footer, CommonModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  constructor(public sidebarService: SidebarService) { }
}
