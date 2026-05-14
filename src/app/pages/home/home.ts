import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Hero } from '../../components/hero/hero';
import { Language } from '../../components/language/language';
import { Projects } from '../../components/projects/projects';

@Component({
  selector: 'app-home',
  imports: [Hero, Language, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
