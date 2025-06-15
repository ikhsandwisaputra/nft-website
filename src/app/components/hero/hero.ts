import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import {Button} from '../shared/button/button'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // <-- 1. Impor ScrollTrigger

// 2. Daftarkan plugin ScrollTrigger (WAJIB!)
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-hero',
  imports: [Button],
  templateUrl: './hero.html'
})
export class Hero implements AfterViewInit {

 /// Mengambil referensi dari template HTML
  @ViewChild('mainHeading', { static: true }) mainHeading!: ElementRef<HTMLDivElement>;
  @ViewChild('subheading', { static: true }) subheading!: ElementRef<HTMLParagraphElement>;
  @ViewChild('ctaButtons', { static: true }) ctaButtons!: ElementRef<HTMLDivElement>;
  @ViewChild('statsBox', { static: true }) statsBox!: ElementRef<HTMLDivElement>;
  @ViewChild('userProof', { static: true }) userProof!: ElementRef<HTMLDivElement>;
  @ViewChild('nftCard', { static: true }) nftCard!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    // Animasi entrance (saat komponen dimuat)
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

    tl.from(this.mainHeading.nativeElement.children, {
        y: 50,
        opacity: 0,
        stagger: 0.2 // Memberi jeda antar baris judul
      })
      .from(this.subheading.nativeElement, { y: 30, opacity: 0 }, "-=0.6") // Mulai sedikit lebih cepat
      .from(this.ctaButtons.nativeElement.children, { y: 20, opacity: 0, stagger: 0.1 }, "-=0.5")
      .from(this.statsBox.nativeElement, { y: 20, opacity: 0 }, "-=0.5")
      .from(this.userProof.nativeElement, { y: 20, opacity: 0 }, "-=0.6");
    
    // Animasi untuk kartu NFT (muncul bersamaan dengan judul)
    gsap.from(this.nftCard.nativeElement, {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: 'power3.out'
    });

    // Animasi parallax saat scroll
    gsap.to(this.nftCard.nativeElement, {
        y: -100, // Bergerak ke atas sejauh 100px
        ease: 'none',
        scrollTrigger: {
            trigger: 'section#home', // Pemicu adalah hero section itu sendiri
            start: 'top top', // Mulai saat bagian atas section bertemu bagian atas viewport
            end: 'bottom top', // Selesai saat bagian bawah section bertemu bagian atas viewport
            scrub: true // Membuat animasi mengikuti posisi scroll
        }
    });
  }
}