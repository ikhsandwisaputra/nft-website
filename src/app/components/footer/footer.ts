
// footer.component.ts
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import {CommonModule} from '@angular/common'
import {Logo} from '../shared/logo/logo'

@Component({
  selector: 'app-footer',
  imports: [CommonModule, Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  // Data untuk kolom-kolom link di footer
  footerColumns = [
    {
      title: 'Explore',
      links: ['Art', 'Photography', 'Music', 'Games']
    },
    {
      title: 'My Account',
      links: ['My Profile', 'My Collections', 'My Favorites', 'My Account Settings']
    },
    {
      title: 'Resources',
      links: ['Help Center', 'Partners', 'Suggestions', 'Newsletters']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Ranking', 'Activity']
    }
  ];

  // Data untuk ikon media sosial
  socials = [
    { name: 'X', url: '#', icon: `<svg fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75Zm-1.7 12.95h1.5l-6.876-12.05H5.14l6.76 12.05Z"/></svg>` },
    { name: 'Instagram', url: '#', icon: `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>` },
    { name: 'Facebook', url: '#', icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>` },
     
  ];

  // Gunakan DomSanitizer untuk memberitahu Angular bahwa SVG ini aman
  constructor(private sanitizer: DomSanitizer) {}

  getSafeHtml(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
