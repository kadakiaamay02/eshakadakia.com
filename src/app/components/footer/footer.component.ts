import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/esha-kadakia/', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:kadakiaesha@gmail.com', icon: 'envelope' }
  ];
}
