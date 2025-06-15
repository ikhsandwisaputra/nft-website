import { Component, HostListener } from '@angular/core';
import {CommonModule} from '@angular/common'
import {Button} from '../shared/button/button'
import {Logo} from '../shared/logo/logo'
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, Button, Logo],
  templateUrl: './navbar.html'
})
export class Navbar {
 isMobileMenuOpen = false;
  isScrolled = false; // Properti baru untuk melacak status scroll

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Decorator untuk mendengarkan event 'scroll' pada 'window'
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Cek posisi scroll vertikal
    // Jika lebih dari 10px, set isScrolled jadi true. Jika tidak, false.
    if (window.scrollY > 10) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
