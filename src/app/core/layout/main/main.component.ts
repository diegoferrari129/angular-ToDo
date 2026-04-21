import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Header } from '../header/header.component';
import { Footer } from '../footer/footer.component';
import { SidebarService } from '../sidebar/sidebar.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Header, RouterOutlet, Footer, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(public sidebarService: SidebarService) { }
}
