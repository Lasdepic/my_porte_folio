import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Information } from '../information/information.js';

@Component({
  selector: 'app-hero',
  imports: [Information],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly city = 'Montpellier';
  readonly phone = '0613947403';
  readonly mail = 'clementjordan34@gmail.com';
  readonly githubUrl = 'https://github.com/Lasdepic';
  readonly linkedinUrl = 'https://www.linkedin.com/in/jordan-bellin-95ab7022b/';
}
