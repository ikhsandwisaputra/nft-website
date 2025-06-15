import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-top-seller',
  imports: [CommonModule],
  templateUrl: './top-seller.html',
  styleUrl: './top-seller.css'
})
export class TopSeller {
// Array yang berisi data untuk setiap penjual
  sellers = [
    { name: 'Leighton Kramer', sales: 276.7, avatarUrl: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Haylie Arcand', sales: 345.6, avatarUrl: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Bowen Higgins', sales: 323.7, avatarUrl: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Saige Fuentes', sales: 347.7, avatarUrl: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Sophie Mclain', sales: 230.6, avatarUrl: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Jeremy Burch', sales: 267.9, avatarUrl: 'https://i.pravatar.cc/150?img=6' },
    { name: 'Amelia Griffith', sales: 334.1, avatarUrl: 'https://i.pravatar.cc/150?img=7' },
    { name: 'Isabela Hart', sales: 289.1, avatarUrl: 'https://i.pravatar.cc/150?img=8' },
    { name: 'Diego Bentley', sales: 290.7, avatarUrl: 'https://i.pravatar.cc/150?img=9' },
    { name: 'Daisy Arnold', sales: 265.4, avatarUrl: 'https://i.pravatar.cc/150?img=10' },
  ];

  constructor() { }
}
