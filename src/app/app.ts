import { Component } from '@angular/core';
import {Navbar} from './components/navbar/navbar'
import {Hero} from './components/hero/hero'
import {LogoMarquee} from './components/logo-marquee/logo-marquee'
import {PopularCard} from './components/popular-card/popular-card'
import {TopSeller} from './components/top-seller/top-seller'
import {Artwork} from './components/artwork/artwork'
import {Join} from './components/join/join'
import {Footer} from './components/footer/footer'


@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, LogoMarquee, PopularCard, TopSeller, Artwork, Join, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'PlayNFT | WEB';
}
