import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Hero } from '../../components/hero/hero';
import { Language } from '../../components/language/language';
import { Projects } from '../../components/projects/projects';
import { Skill} from '../../components/skill/skill';

@Component({
  selector: 'app-home',
  imports: [Hero, Language, Skill, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
