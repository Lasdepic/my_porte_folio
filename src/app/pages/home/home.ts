import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Hero } from '../../components/hero/hero';
import { Language } from '../../components/language/language';
import { Projects } from '../../components/projects/projects';
import { Skill } from '../../components/skill/skill';
import { GithubStats } from '../../components/github-stats/github-stats';

@Component({
  selector: 'app-home',
  imports: [Hero, Language, Skill, Projects, GithubStats],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
