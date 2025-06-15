import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-artwork',
  imports: [CommonModule],
  templateUrl: './artwork.html',
  styleUrl: './artwork.css'
})
export class Artwork {
 categories = [
    {
      name: 'Abstract',
      itemCount: 30,
      layoutType: 'C', // 2 kecil di atas, 1 besar di bawah
      images: [
        './nft-images/gambar-nft-6.jpg',
        './nft-images/gambar-nft-10.jpg',
        './nft-images/gambar-nft-11.jpg',
         './nft-images/gambar-nft-21.jpg'
      ]
    },
    {
      name: '3D Art',
      itemCount: 45,
      layoutType: 'B', // 1 besar di kiri, 2 kecil di kanan
      images: [
        './nft-images/gambar-nft-12.jpg',
        './nft-images/gambar-nft-13.jpg',
        './nft-images/gambar-nft-14.jpg'
      ]
    },
     {
      name: 'Modern Art',
      itemCount: 59,
      layoutType: 'A', // Menggunakan layout A lagi
      images: [
        './nft-images/gambar-nft-15.jpg',
        './nft-images/gambar-nft-16.jpg',
        './nft-images/gambar-nft-17.jpg'
      ]
    },
    {
      name: 'Graffiti',
      itemCount: 36,
      layoutType: 'A', // Layout baru: 3 di atas, 1 di bawah
      images: [
       './nft-images/gambar-nft-18.jpg',
        './nft-images/gambar-nft-19.jpg',
        './nft-images/gambar-nft-20.jpg',
       
      ]
    }
    // Tambahkan data untuk Game, Graffiti, dan Watercolor dengan cara yang sama
    // ...
  ];

  constructor() { }
}
