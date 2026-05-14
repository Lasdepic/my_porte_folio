import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';
import { Language } from './components/language/language';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    Language,
    Projects,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'my_porte_folio';
}
