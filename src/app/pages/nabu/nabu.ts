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

type Screenshot = Readonly<{
  src: string;
  alt: string;
  caption: string;
}>;

type LearnedItem = Readonly<{
  title: string;
  description: string;
}>;

@Component({
  selector: 'app-nabu-page',
  imports: [RouterLink],
  templateUrl: './nabu.html',
  styleUrl: './nabu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NabuPage {
  readonly frontendRepoUrl = 'https://github.com/Lasdepic/frontend_nabu';
  readonly backendRepoUrl = 'https://github.com/Lasdepic/backend_nabu';

  readonly screenshots: readonly Screenshot[] = [
    {
      src: 'assets/images/Nabu/nabu-login.png',
      alt: "Écran de connexion de l'application Nabu",
      caption: 'Connexion',
    },
    {
      src: 'assets/images/Nabu/nabu-dashboard.png',
      alt: "Interface principale de l'application Nabu",
      caption: 'Tableau de bord',
    },
  ];

  readonly features = [
    'Inscription et connexion utilisateur',
    'Gestion des paquets de documents',
    "Suivi de l'historique d'envois",
    'Gestion des corpus',
    'API REST sécurisée par JWT',
  ];

  readonly stack: readonly TechCategory[] = [
    {
      title: 'Frontend',
      items: [
        { name: 'JavaScript', iconSrc: 'assets/icons/javascript.svg' },
        { name: 'HTML', iconSrc: 'assets/icons/html5.svg' },
        { name: 'CSS', iconSrc: 'assets/icons/css.svg' },
      ],
    },
    {
      title: 'Backend',
      items: [{ name: 'PHP', iconSrc: 'assets/icons/php.svg' }],
    },
    {
      title: 'Base de données',
      items: [{ name: 'MySQL', iconSrc: 'assets/icons/MySQL.svg' }],
    },
  ];

  readonly learned: readonly LearnedItem[] = [
    {
      title: 'Architecture REST',
      description: "Conception d'une API PHP structurée en Controller / DAO / Model.",
    },
    {
      title: 'Authentification JWT',
      description: "Implémentation d'un système de tokens sécurisés côté backend et frontend.",
    },
    {
      title: 'Routing JS vanilla',
      description: 'Navigation côté client sans framework, en JavaScript pur.',
    },
    {
      title: 'Travail en équipe',
      description: 'Projet réalisé en équipe avec gestion de branches Git et pull requests.',
    },
  ];
}
