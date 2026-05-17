import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type TechItem = Readonly<{
  name: string;
  iconSrc: string;
}>;

type TechCategory = Readonly<{
  title: string;
  items: readonly TechItem[];
}>;

type LearnedItem = Readonly<{
  title: string;
  description: string;
}>;

@Component({
  selector: 'app-portfolio-page',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPage {
  readonly repoUrl = 'https://github.com/Lasdepic/my_porte_folio';
  readonly liveUrl = 'https://lasdepic.github.io/my_porte_folio/';

  readonly features = [
    "Page d'accueil avec hero, compétences et projets",
    'Page About avec parcours et soft skills',
    'Page CV interactive avec téléchargement PDF',
    'Pages de présentation des projets (Nabu, FreshTrack)',
    'Page GitHub avec graphiques et stats en temps réel',
    'Routing Angular avec navigation fluide',
    'Design responsive avec Tailwind CSS',
    'Déployé sur GitHub Pages',
  ];

  readonly stack: readonly TechCategory[] = [
    {
      title: 'Frontend',
      items: [
        { name: 'Angular 19', iconSrc: 'assets/icons/angular.svg' },
        { name: 'TypeScript', iconSrc: 'assets/icons/typescript.svg' },
        { name: 'Tailwind CSS', iconSrc: 'assets/icons/tailwindcss.svg' },
        { name: 'HTML', iconSrc: 'assets/icons/html5.svg' },
      ],
    },
    {
      title: 'Outils',
      items: [
        { name: 'GitHub Pages', iconSrc: 'assets/icons/github.svg' },
        { name: 'GitHub', iconSrc: 'assets/icons/github.svg' },
      ],
    },
    {
      title: 'API',
      items: [{ name: 'GitHub API', iconSrc: 'assets/icons/github.svg' }],
    },
  ];

  readonly learned: readonly LearnedItem[] = [
    {
      title: 'Composants Angular',
      description: 'Créer, structurer et communiquer entre composants avec les imports standalone.',
    },
    {
      title: 'Routing Angular',
      description: 'Mise en place du routing avec RouterLink, RouterOutlet et lazy loading.',
    },
    {
      title: 'Signals & computed',
      description: 'Utilisation des signals Angular 19 pour la réactivité sans RxJS.',
    },
    {
      title: 'HttpClient',
      description: "Appels à l'API GitHub pour récupérer les stats et repositories en temps réel.",
    },
    {
      title: 'Tailwind CSS',
      description: 'Design responsive et composants UI avec les utilitaires Tailwind.',
    },
    {
      title: 'Déploiement',
      description: 'Build de production Angular et déploiement sur GitHub Pages.',
    },
  ];
}
