import { Routes } from '@angular/router';

import { FreshtrackPage } from '../../pages/freshtrack/freshtrack';
import { GithubPage } from '../../pages/github/github';
import { Home } from '../../pages/home/home';
import { NabuPage } from '../../pages/nabu/nabu';
import { CvPage } from '../../pages/CV/cv';
import { AboutPage } from '../../pages/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'projets/freshtrack',
    component: FreshtrackPage,
  },
  {
    path: 'projets/nabu',
    component: NabuPage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: 'github',
    component: GithubPage,
  },
  {
    path: 'cv',
    component: CvPage,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
