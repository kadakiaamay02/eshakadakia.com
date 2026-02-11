import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  
})
export class NavBarComponent {
  isMenuOpen = true;

  navLinks = [
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
